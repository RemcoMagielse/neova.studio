#!/usr/bin/env node
/**
 * Neova Catalogue build.
 *
 * Validates every item under catalogue/<type>/, copies it to
 * docs/public/catalogue/<type>/ and writes docs/public/catalogue/index.json
 * with a sha256 + byte size per file. Any invalid item fails the build, so a
 * broken item never reaches https://neova.studio/catalogue/.
 *
 * No dependencies on purpose: runs with plain Node 20+ in the deploy workflow.
 *
 * Usage: node catalogue/build.mjs [--check]   (--check validates, writes nothing)
 */

import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const SCHEMA_VERSION = 1;
export const MAX_ITEM_BYTES = 256 * 1024;
export const MAX_REGEX_LENGTH = 500;

/** Folder → item type. The folder is the source of truth for the type. */
export const TYPE_FOLDERS = {
  agents: 'agent',
  skills: 'skill',
  wiki: 'wiki',
  'detection-profiles': 'detection-profile',
  assistant: 'assistant-prompt',
};

const SLUG = '[a-z0-9]+(?:-[a-z0-9]+)*';
const CATALOGUE_ID_RE = new RegExp(`^(agent|skill|wiki|detection-profile|assistant-prompt)\\.${SLUG}$`);
const SLUG_RE = new RegExp(`^${SLUG}$`);
const SEMVER_RE = /^\d+\.\d+\.\d+$/;
const EVENT_TYPES = new Set([
  'agentMentioned', 'questionAnswered', 'taskAssigned', 'taskUnassigned',
  'backlogReminder', 'scheduleFired', 'stageTaskEntered',
]);
// Must match AVATAR_ICONS / AVATAR_COLORS in neova-flows src/components/AgentAvatar.tsx.
const AVATAR_ICONS = new Set([
  'bot', 'code', 'bug', 'palette', 'shield', 'terminal', 'wrench', 'search', 'cpu', 'database',
  'globe', 'zap', 'book-open', 'glasses', 'rocket', 'heart', 'star', 'coffee', 'sparkles', 'eye',
]);
const AVATAR_COLORS = new Set(['purple', 'blue', 'green', 'red', 'amber', 'pink', 'indigo', 'teal', 'cyan', 'orange']);

// ---------------------------------------------------------------------------
// Frontmatter: the YAML subset used by Neova agent files — scalars (quoted or
// bare), nested maps by indentation, lists of scalars or maps, inline [a, b].
// ---------------------------------------------------------------------------

function parseScalar(raw) {
  const v = raw.trim();
  if (v === '') return '';
  if (v.startsWith('"') && v.endsWith('"') && v.length >= 2) {
    return v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  if (v.startsWith("'") && v.endsWith("'") && v.length >= 2) return v.slice(1, -1).replace(/''/g, "'");
  if (v.startsWith('[') && v.endsWith(']')) {
    const inner = v.slice(1, -1).trim();
    return inner === '' ? [] : inner.split(',').map((s) => parseScalar(s));
  }
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (v === 'null' || v === '~') return null;
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  return v;
}

function indentOf(line) {
  return line.length - line.trimStart().length;
}

function parseBlock(lines, start, indent) {
  // Decide map vs list from the first meaningful line.
  let i = start;
  const first = lines[i];
  if (first.trimStart().startsWith('- ')) {
    const list = [];
    while (i < lines.length && indentOf(lines[i]) === indent && lines[i].trimStart().startsWith('- ')) {
      const rest = lines[i].trimStart().slice(2);
      const kv = rest.match(/^([A-Za-z_][\w-]*):(?:\s+(.*))?$/);
      if (!kv) {
        list.push(parseScalar(rest));
        i += 1;
        continue;
      }
      // A map item: "- key: value" followed by deeper "key: value" lines.
      const itemIndent = indent + 2;
      const synthetic = [' '.repeat(itemIndent) + rest];
      i += 1;
      while (i < lines.length && indentOf(lines[i]) >= itemIndent && !lines[i].trimStart().startsWith('- ')) {
        synthetic.push(lines[i]);
        i += 1;
      }
      list.push(parseBlock(synthetic, 0, itemIndent).value);
    }
    return { value: list, next: i };
  }

  const map = {};
  while (i < lines.length && indentOf(lines[i]) === indent) {
    const line = lines[i].trim();
    const kv = line.match(/^([A-Za-z_][\w-]*):(?:\s+(.*))?$/);
    if (!kv) throw new Error(`cannot parse frontmatter line: "${line}"`);
    const [, key, rawValue] = kv;
    i += 1;
    if (rawValue !== undefined && rawValue.trim() !== '') {
      map[key] = parseScalar(rawValue);
    } else if (i < lines.length && indentOf(lines[i]) > indent) {
      const child = parseBlock(lines, i, indentOf(lines[i]));
      map[key] = child.value;
      i = child.next;
    } else {
      map[key] = '';
    }
  }
  return { value: map, next: i };
}

/** Split "---\n<yaml>\n---\n<body>" into { data, body }. */
export function parseFrontmatter(text) {
  const normalized = text.replace(/\r\n/g, '\n');
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error('missing frontmatter (file must start with ---)');
  const lines = match[1].split('\n').filter((l) => l.trim() !== '' && !l.trimStart().startsWith('#'));
  const data = lines.length ? parseBlock(lines, 0, indentOf(lines[0])).value : {};
  return { data, body: match[2] };
}

// ---------------------------------------------------------------------------
// Validation — one function per type. Each returns a list of error strings.
// ---------------------------------------------------------------------------

function requireString(obj, key, errors, label = key) {
  if (typeof obj[key] !== 'string' || obj[key].trim() === '') errors.push(`"${label}" is required`);
}

function validateCommon(meta, type, errors) {
  if (typeof meta.catalogueId !== 'string' || !CATALOGUE_ID_RE.test(meta.catalogueId)) {
    errors.push('"catalogueId" must look like <type>.<kebab-slug>, e.g. skill.neova-studio');
  } else if (!meta.catalogueId.startsWith(`${type}.`)) {
    errors.push(`"catalogueId" must start with "${type}." for items in this folder`);
  }
  if (typeof meta.version !== 'string' || !SEMVER_RE.test(meta.version)) {
    errors.push('"version" must be X.Y.Z (quote it, e.g. version: "1.0.0")');
  }
  if (meta.minAppVersion !== undefined && (typeof meta.minAppVersion !== 'string' || !SEMVER_RE.test(meta.minAppVersion))) {
    errors.push('"minAppVersion" must be X.Y.Z');
  }
  if (meta.builtinId !== undefined && (typeof meta.builtinId !== 'string' || meta.builtinId.trim() === '')) {
    errors.push('"builtinId" must be a non-empty string');
  }
}

function validateAgent(meta, body, errors) {
  requireString(meta, 'name', errors);
  requireString(meta, 'description', errors);
  requireString(meta, 'startCommand', errors);
  if (body.trim() === '') errors.push('agent instructions (the body) are empty');
  for (const banned of ['id', 'globalHash', 'createdAt', 'updatedAt']) {
    if (meta[banned] !== undefined) errors.push(`"${banned}" must not be published; the app creates its own`);
  }
  if (meta.avatar !== undefined) {
    const a = meta.avatar;
    if (!a || typeof a !== 'object' || Array.isArray(a)) {
      errors.push('"avatar" must be a map');
    } else if (a.type === 'icon') {
      if (!AVATAR_ICONS.has(a.icon)) errors.push(`"avatar.icon" must be one of: ${[...AVATAR_ICONS].join(', ')}`);
      if (a.color !== undefined && !AVATAR_COLORS.has(a.color)) {
        errors.push(`"avatar.color" must be one of: ${[...AVATAR_COLORS].join(', ')}`);
      }
    } else if (a.type === 'image') {
      if (typeof a.imagePath !== 'string' || !a.imagePath.startsWith('@standard/')) {
        errors.push('"avatar.imagePath" may only use a built-in "@standard/..." avatar (image uploads are not supported)');
      }
    } else {
      errors.push('"avatar.type" must be icon or image');
    }
  }
  if (meta.eventSubscriptions !== undefined) {
    if (!Array.isArray(meta.eventSubscriptions)) {
      errors.push('"eventSubscriptions" must be a list');
    } else {
      for (const sub of meta.eventSubscriptions) {
        if (!sub || typeof sub !== 'object' || !EVENT_TYPES.has(sub.type)) {
          errors.push(`unknown event subscription: ${JSON.stringify(sub)}`);
        } else if (sub.stages !== undefined && !Array.isArray(sub.stages)) {
          errors.push(`"stages" of ${sub.type} must be a list`);
        }
      }
    }
  }
}

function validateSkill(meta, body, errors) {
  requireString(meta, 'name', errors);
  requireString(meta, 'description', errors);
  if (meta.isQuickAction !== undefined && typeof meta.isQuickAction !== 'boolean') {
    errors.push('"isQuickAction" must be true or false');
  }
  if (body.trim() === '') errors.push('skill instructions (the body) are empty');
}

function validateWiki(meta, body, errors) {
  requireString(meta, 'name', errors);
  requireString(meta, 'description', errors);
  if (meta.category !== undefined && (typeof meta.category !== 'string' || !SLUG_RE.test(meta.category))) {
    errors.push('"category" must be kebab-case, e.g. standards');
  }
  if (body.trim() === '') errors.push('wiki page body is empty');
}

function validateAssistantPrompt(meta, body, errors) {
  requireString(meta, 'name', errors);
  requireString(meta, 'description', errors);
  requireString(meta, 'builtinId', errors);
  // The app's promptDrift() reads a "(Version X.Y, ...)" line in the first 5 lines.
  const head = body.trimStart().split('\n').slice(0, 5).join('\n');
  if (!/\(Version \d+\.\d+/.test(head)) errors.push('the prompt needs a "(Version X.Y, date ...)" line within its first 5 lines');
}

function validatePatterns(list, label, errors) {
  if (!Array.isArray(list)) {
    errors.push(`"${label}.patterns" must be a list`);
    return;
  }
  for (const p of list) {
    if (!p || typeof p !== 'object') {
      errors.push(`${label}: pattern must be an object`);
      continue;
    }
    requireString(p, 'id', errors, `${label} pattern id`);
    requireString(p, 'name', errors, `${label} pattern name`);
    if (typeof p.regexString !== 'string' || p.regexString === '') {
      errors.push(`${label} pattern "${p.id}": "regexString" is required`);
      continue;
    }
    if (p.regexString.length > MAX_REGEX_LENGTH) {
      errors.push(`${label} pattern "${p.id}": regex is longer than ${MAX_REGEX_LENGTH} characters`);
    }
    try {
      new RegExp(p.regexString);
    } catch (err) {
      errors.push(`${label} pattern "${p.id}": regex does not compile (${err.message})`);
    }
  }
}

function validateDetectionProfile(meta, errors) {
  requireString(meta, 'name', errors);
  requireString(meta, 'description', errors);
  requireString(meta, 'displayName', errors);
  for (const section of ['attention', 'working', 'idle', 'inputReady']) {
    if (!meta[section] || typeof meta[section] !== 'object') {
      errors.push(`"${section}" is required`);
      continue;
    }
    validatePatterns(meta[section].patterns, section, errors);
  }
  if (meta.working && typeof meta.working === 'object') {
    if (typeof meta.working.window_ms !== 'number') errors.push('"working.window_ms" must be a number');
    if (typeof meta.working.threshold !== 'number') errors.push('"working.threshold" must be a number');
  }
}

/**
 * Parse + validate one item file.
 * @returns {{ meta: object, errors: string[] }}
 */
export function validateItem(type, fileName, text) {
  const errors = [];
  const bytes = Buffer.byteLength(text, 'utf8');
  if (bytes > MAX_ITEM_BYTES) errors.push(`file is ${bytes} bytes; the limit is ${MAX_ITEM_BYTES}`);

  let meta = {};
  let body = '';
  try {
    if (type === 'detection-profile') {
      if (!fileName.endsWith('.json')) errors.push('detection profiles must be .json files');
      meta = JSON.parse(text);
    } else {
      if (!fileName.endsWith('.md')) errors.push('items of this type must be .md files');
      ({ data: meta, body } = parseFrontmatter(text));
    }
  } catch (err) {
    errors.push(`cannot parse: ${err.message}`);
    return { meta, errors };
  }

  validateCommon(meta, type, errors);
  if (type === 'agent') validateAgent(meta, body, errors);
  else if (type === 'skill') validateSkill(meta, body, errors);
  else if (type === 'wiki') validateWiki(meta, body, errors);
  else if (type === 'assistant-prompt') validateAssistantPrompt(meta, body, errors);
  else if (type === 'detection-profile') validateDetectionProfile(meta, errors);
  return { meta, errors };
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

async function listItemFiles(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && !e.name.startsWith('.') && e.name !== 'README.md')
      .map((e) => e.name)
      .sort();
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

/**
 * Validate everything under srcDir and (unless check) write outDir.
 * @returns {Promise<{ ok: boolean, errors: string[], index: object }>}
 */
export async function buildCatalogue({ srcDir, outDir, check = false, now = new Date() }) {
  const errors = [];
  const items = [];
  const files = [];
  const seenIds = new Map();
  const seenBuiltins = new Map();

  for (const [folder, type] of Object.entries(TYPE_FOLDERS)) {
    for (const fileName of await listItemFiles(path.join(srcDir, folder))) {
      const rel = `${folder}/${fileName}`;
      const buffer = await fs.readFile(path.join(srcDir, folder, fileName));
      const { meta, errors: itemErrors } = validateItem(type, fileName, buffer.toString('utf8'));
      for (const e of itemErrors) errors.push(`${rel}: ${e}`);
      if (itemErrors.length) continue;

      if (seenIds.has(meta.catalogueId)) {
        errors.push(`${rel}: catalogueId "${meta.catalogueId}" is also used by ${seenIds.get(meta.catalogueId)}`);
        continue;
      }
      seenIds.set(meta.catalogueId, rel);
      if (meta.builtinId) {
        if (seenBuiltins.has(meta.builtinId)) {
          errors.push(`${rel}: builtinId "${meta.builtinId}" is also used by ${seenBuiltins.get(meta.builtinId)}`);
          continue;
        }
        seenBuiltins.set(meta.builtinId, rel);
      }

      const entry = {
        catalogueId: meta.catalogueId,
        type,
        name: meta.name,
        description: meta.description,
        version: meta.version,
        file: rel,
        sha256: createHash('sha256').update(buffer).digest('hex'),
        size: buffer.length,
      };
      if (meta.minAppVersion) entry.minAppVersion = meta.minAppVersion;
      if (meta.builtinId) entry.builtinId = meta.builtinId;
      if (meta.updatedAt) entry.updatedAt = meta.updatedAt;
      items.push(entry);
      files.push({ rel, buffer });
    }
  }

  const index = { schemaVersion: SCHEMA_VERSION, generatedAt: now.toISOString(), items };
  if (errors.length || check) return { ok: errors.length === 0, errors, index };

  // Rebuild the output folder from scratch so deleted items disappear.
  await fs.rm(outDir, { recursive: true, force: true });
  for (const { rel, buffer } of files) {
    const target = path.join(outDir, rel);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, buffer);
  }
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'index.json'), `${JSON.stringify(index, null, 2)}\n`);
  return { ok: true, errors, index };
}

// CLI
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const check = process.argv.includes('--check');
  const result = await buildCatalogue({
    srcDir: here,
    outDir: path.join(here, '..', 'docs', 'public', 'catalogue'),
    check,
  });
  if (!result.ok) {
    console.error(`Catalogue build failed (${result.errors.length} problem(s)):`);
    for (const e of result.errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  const verb = check ? 'Checked' : 'Built';
  console.log(`${verb} ${result.index.items.length} catalogue item(s).`);
}
