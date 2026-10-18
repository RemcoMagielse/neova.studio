/**
 * Version helpers for the Neova Catalogue.
 *
 * - bumpItemText: raise an item's patch version (and its updatedAt, where the
 *   type allows one). Used by the pre-commit hook (bump-changed.mjs).
 * - compareToPublished: the deploy guard. An item whose bytes changed since the
 *   live index must carry a higher version, or users are never offered it.
 *
 * No dependencies on purpose, like build.mjs.
 */

const SEMVER_RE = /^(\d+)\.(\d+)\.(\d+)$/;

/** Compare two X.Y.Z strings: negative, 0 or positive. */
export function compareVersions(a, b) {
  const pa = a.match(SEMVER_RE).slice(1).map(Number);
  const pb = b.match(SEMVER_RE).slice(1).map(Number);
  for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pa[i] - pb[i];
  return 0;
}

export function bumpPatch(version) {
  const m = version.match(SEMVER_RE);
  if (!m) throw new Error(`not an X.Y.Z version: ${version}`);
  return `${m[1]}.${m[2]}.${Number(m[3]) + 1}`;
}

/** The item's version, read without a full parse. Null when there is none. */
export function readVersion(type, text) {
  if (type === 'detection-profile') {
    try {
      const v = JSON.parse(text).version;
      return typeof v === 'string' ? v : null;
    } catch {
      return null;
    }
  }
  const fm = text.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---/);
  const line = fm && fm[1].match(/^version:\s*["']?([^"'\s]+)["']?\s*$/m);
  return line ? line[1] : null;
}

/**
 * Raise the patch version of one item file and set updatedAt to `today`
 * (YYYY-MM-DD). Agents never get updatedAt: the app creates its own.
 */
export function bumpItemText(type, text, today) {
  if (type === 'detection-profile') {
    const data = JSON.parse(text);
    data.version = bumpPatch(data.version);
    data.updatedAt = today;
    return `${JSON.stringify(data, null, 2)}\n`;
  }
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  const lines = text.split(/\r?\n/);
  if (lines[0] !== '---') throw new Error('missing frontmatter');
  const end = lines.indexOf('---', 1);
  if (end === -1) throw new Error('unterminated frontmatter');

  const vIdx = lines.findIndex((l, i) => i > 0 && i < end && /^version:/.test(l));
  if (vIdx === -1) throw new Error('no version line in frontmatter');
  lines[vIdx] = `version: "${bumpPatch(readVersion(type, text))}"`;

  if (type !== 'agent') {
    const uIdx = lines.findIndex((l, i) => i > 0 && i < end && /^updatedAt:/.test(l));
    const updated = `updatedAt: "${today}"`;
    if (uIdx === -1) lines.splice(vIdx + 1, 0, updated);
    else lines[uIdx] = updated;
  }
  return lines.join(eol);
}

/**
 * Deploy guard: compare the freshly built index with the live one.
 * @returns {string[]} one error per item that changed without a higher version
 */
export function compareToPublished(index, published) {
  const live = new Map((published?.items ?? []).map((it) => [it.catalogueId, it]));
  const errors = [];
  for (const item of index.items) {
    const prev = live.get(item.catalogueId);
    if (!prev || !SEMVER_RE.test(prev.version ?? '')) continue;
    const cmp = compareVersions(item.version, prev.version);
    if (cmp < 0) {
      errors.push(`${item.file}: version ${item.version} is lower than the published ${prev.version}`);
    } else if (cmp === 0 && item.sha256 !== prev.sha256) {
      errors.push(`${item.file}: changed since it was published, but its version is still ${item.version}. Raise it.`);
    }
  }
  return errors;
}
