// Run: node --test catalogue/versions.test.mjs
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { validateItem } from './build.mjs';
import { bumpItemText, bumpPatch, compareToPublished, compareVersions, readVersion } from './versions.mjs';

const WIKI = `---
catalogueId: "wiki.thing"
version: "1.0.9"
name: "Thing"
description: "A page"
category: "standards"
updatedAt: "2026-01-01"
---
## Body
`;

const AGENT = `---
catalogueId: "agent.helper"
version: "2.1.0"
name: "Helper"
description: "Helps"
startCommand: "claude"
---
# Helper
`;

test('bumpPatch and compareVersions', () => {
  assert.equal(bumpPatch('1.0.9'), '1.0.10');
  assert.ok(compareVersions('1.0.10', '1.0.9') > 0);
  assert.equal(compareVersions('2.0.0', '2.0.0'), 0);
  assert.throws(() => bumpPatch('1.0'));
});

test('bumpItemText raises the version and updatedAt of a wiki page, nothing else', () => {
  const out = bumpItemText('wiki', WIKI, '2026-10-18');
  assert.equal(readVersion('wiki', out), '1.0.10');
  assert.match(out, /^updatedAt: "2026-10-18"$/m);
  assert.equal(out.replace(/^(version|updatedAt):.*$/gm, ''), WIKI.replace(/^(version|updatedAt):.*$/gm, ''));
  assert.deepEqual(validateItem('wiki', 'thing.md', out).errors, []);
});

test('bumpItemText adds updatedAt when missing, but never to an agent', () => {
  const noDate = WIKI.replace(/^updatedAt:.*\n/m, '');
  assert.match(bumpItemText('wiki', noDate, '2026-10-18'), /^updatedAt: "2026-10-18"$/m);
  const agent = bumpItemText('agent', AGENT, '2026-10-18');
  assert.equal(readVersion('agent', agent), '2.1.1');
  assert.doesNotMatch(agent, /updatedAt/);
  assert.deepEqual(validateItem('agent', 'helper.md', agent).errors, []);
});

test('bumpItemText handles a detection profile', () => {
  const json = JSON.stringify({ catalogueId: 'detection-profile.x', version: '1.2.3' });
  const out = JSON.parse(bumpItemText('detection-profile', json, '2026-10-18'));
  assert.equal(out.version, '1.2.4');
  assert.equal(out.updatedAt, '2026-10-18');
});

test('compareToPublished: changed bytes need a higher version', () => {
  const item = (version, sha256) => ({ catalogueId: 'wiki.thing', file: 'wiki/thing.md', version, sha256 });
  const live = { items: [item('1.0.0', 'aaa')] };
  assert.deepEqual(compareToPublished({ items: [item('1.0.0', 'aaa')] }, live), []);
  assert.deepEqual(compareToPublished({ items: [item('1.0.1', 'bbb')] }, live), []);
  assert.match(compareToPublished({ items: [item('1.0.0', 'bbb')] }, live)[0], /still 1\.0\.0/);
  assert.match(compareToPublished({ items: [item('0.9.0', 'aaa')] }, live)[0], /lower/);
  // New items and an empty/missing live index pass.
  assert.deepEqual(compareToPublished({ items: [item('1.0.0', 'bbb')] }, { items: [] }), []);
  assert.deepEqual(compareToPublished({ items: [item('1.0.0', 'bbb')] }, null), []);
});
