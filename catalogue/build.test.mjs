// Run: node --test catalogue/
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';

import { buildCatalogue, parseFrontmatter, validateItem } from './build.mjs';

const AGENT = `---
catalogueId: "agent.helper"
version: "1.0.0"
name: "Helper"
description: "Helps"
startCommand: "claude"
avatar:
  type: icon
  icon: bot
  color: orange
eventSubscriptions:
  - type: agentMentioned
  - type: stageTaskEntered
    stages: ["Prepare", "Verify"]
---

# Helper

Do things.
`;

const SKILL = `---
catalogueId: "skill.thing"
version: "1.2.3"
name: "Thing"
description: "Does a thing"
isQuickAction: true
---
Body.
`;

const PROFILE = {
  catalogueId: 'detection-profile.thing',
  version: '1.0.0',
  name: 'Thing CLI',
  description: 'Detection for Thing',
  displayName: 'Thing',
  attention: { patterns: [{ id: 'a', name: 'Ask', regexString: 'Proceed\\?', enabled: true }] },
  working: { patterns: [], window_ms: 1000, threshold: 1 },
  idle: { patterns: [] },
  inputReady: { patterns: [] },
};

async function tmpCatalogue(files) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'catalogue-'));
  const src = path.join(root, 'catalogue');
  for (const [rel, content] of Object.entries(files)) {
    await fs.mkdir(path.dirname(path.join(src, rel)), { recursive: true });
    await fs.writeFile(path.join(src, rel), content);
  }
  return { src, out: path.join(root, 'out') };
}

test('parseFrontmatter reads nested maps, lists of maps and inline lists', () => {
  const { data, body } = parseFrontmatter(AGENT);
  assert.equal(data.name, 'Helper');
  assert.deepEqual(data.avatar, { type: 'icon', icon: 'bot', color: 'orange' });
  assert.deepEqual(data.eventSubscriptions, [
    { type: 'agentMentioned' },
    { type: 'stageTaskEntered', stages: ['Prepare', 'Verify'] },
  ]);
  assert.match(body, /^\n# Helper/);
});

test('a valid agent, skill and profile pass', () => {
  assert.deepEqual(validateItem('agent', 'helper.md', AGENT).errors, []);
  assert.deepEqual(validateItem('skill', 'thing.md', SKILL).errors, []);
  assert.deepEqual(validateItem('detection-profile', 'thing.json', JSON.stringify(PROFILE)).errors, []);
});

test('agent without a start command fails', () => {
  const { errors } = validateItem('agent', 'helper.md', AGENT.replace('startCommand: "claude"\n', ''));
  assert.ok(errors.some((e) => e.includes('startCommand')));
});

test('agent with app-owned fields or a local image avatar fails', () => {
  const withId = AGENT.replace('name: "Helper"', 'id: "agent-1"\nname: "Helper"');
  assert.ok(validateItem('agent', 'helper.md', withId).errors.some((e) => e.includes('"id"')));
  const withImage = AGENT.replace('  type: icon\n  icon: bot\n  color: orange', '  type: image\n  imagePath: "userData://Neova/agents/x.png"');
  assert.ok(validateItem('agent', 'helper.md', withImage).errors.some((e) => e.includes('imagePath')));
});

test('catalogueId must match the folder type and version must be semver', () => {
  const wrongType = SKILL.replace('skill.thing', 'agent.thing');
  assert.ok(validateItem('skill', 'thing.md', wrongType).errors.some((e) => e.includes('must start with "skill."')));
  const badVersion = SKILL.replace('"1.2.3"', '"1.2"');
  assert.ok(validateItem('skill', 'thing.md', badVersion).errors.some((e) => e.includes('version')));
});

test('detection profile with a regex that does not compile fails', () => {
  const bad = structuredClone(PROFILE);
  bad.attention.patterns[0].regexString = '([unclosed';
  const { errors } = validateItem('detection-profile', 'thing.json', JSON.stringify(bad));
  assert.ok(errors.some((e) => e.includes('does not compile')));
});

test('assistant prompt needs a version line for promptDrift', () => {
  const prompt = `---
catalogueId: "assistant-prompt.standard"
version: "2.2.0"
builtinId: "assistant-system-prompt"
name: "Neova Assistant"
description: "Standard prompt"
---
# Neova Assistant
(Version 2.2, date 16-09-2026)
`;
  assert.deepEqual(validateItem('assistant-prompt', 'system-prompt.md', prompt).errors, []);
  const noLine = prompt.replace('(Version 2.2, date 16-09-2026)', '');
  assert.ok(validateItem('assistant-prompt', 'system-prompt.md', noLine).errors.length > 0);
});

test('oversized item fails', () => {
  const huge = SKILL + 'x'.repeat(256 * 1024);
  assert.ok(validateItem('skill', 'thing.md', huge).errors.some((e) => e.includes('limit')));
});

test('build writes items and an index with matching checksums', async () => {
  const { src, out } = await tmpCatalogue({ 'agents/helper.md': AGENT, 'skills/thing.md': SKILL });
  const result = await buildCatalogue({ srcDir: src, outDir: out, now: new Date('2026-10-01T00:00:00Z') });
  assert.equal(result.ok, true, result.errors.join('\n'));

  const index = JSON.parse(await fs.readFile(path.join(out, 'index.json'), 'utf8'));
  assert.equal(index.schemaVersion, 1);
  assert.equal(index.items.length, 2);
  for (const item of index.items) {
    const copied = await fs.readFile(path.join(out, item.file));
    assert.equal(item.sha256, createHash('sha256').update(copied).digest('hex'));
    assert.equal(item.size, copied.length);
  }
});

test('one broken item fails the whole build and writes nothing', async () => {
  const { src, out } = await tmpCatalogue({
    'skills/thing.md': SKILL,
    'skills/broken.md': SKILL.replace('skill.thing', 'skill.broken').replace('name: "Thing"\n', ''),
  });
  const result = await buildCatalogue({ srcDir: src, outDir: out });
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.startsWith('skills/broken.md')));
  await assert.rejects(fs.access(out));
});

test('duplicate catalogueId fails', async () => {
  const { src, out } = await tmpCatalogue({ 'skills/a.md': SKILL, 'skills/b.md': SKILL });
  const result = await buildCatalogue({ srcDir: src, outDir: out });
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.includes('also used by')));
});
