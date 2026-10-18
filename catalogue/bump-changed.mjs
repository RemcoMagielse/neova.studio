#!/usr/bin/env node
/**
 * Pre-commit hook body: raise the patch version of every staged catalogue item
 * that changed since HEAD but kept its version. Works on the staged blob, so
 * unstaged edits in the same file are never swept into the commit; the
 * working-tree file gets the same version + updatedAt lines.
 *
 * Enable once per clone: git config core.hooksPath .githooks
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { TYPE_FOLDERS } from './build.mjs';
import { bumpItemText, readVersion } from './versions.mjs';

const git = (args, input) => execFileSync('git', args, { encoding: 'utf8', input });

const today = new Date().toISOString().slice(0, 10);
const staged = git(['diff', '--cached', '--name-only', '--diff-filter=M', '--', 'catalogue/'])
  .split('\n')
  .filter(Boolean);

for (const file of staged) {
  const [, folder, name] = file.split('/');
  const type = TYPE_FOLDERS[folder];
  if (!type || !name || name.startsWith('.') || name === 'README.md') continue;

  const before = git(['show', `HEAD:${file}`]);
  const after = git(['show', `:${file}`]);
  const version = readVersion(type, after);
  if (!version || version !== readVersion(type, before)) continue; // new, broken, or already raised

  const bumped = bumpItemText(type, after, today);
  const mode = git(['ls-files', '-s', '--', file]).split(' ')[0];
  const blob = git(['hash-object', '-w', '--stdin'], bumped).trim();
  git(['update-index', '--cacheinfo', `${mode},${blob},${file}`]);

  // Mirror the bump into the working tree when it still has the old version.
  const working = fs.readFileSync(file, 'utf8');
  if (readVersion(type, working) === version) fs.writeFileSync(file, bumpItemText(type, working, today));

  console.log(`catalogue: ${file} ${version} -> ${readVersion(type, bumped)}`);
}
