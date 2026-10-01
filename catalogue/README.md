# Neova Catalogue

The official catalogue of agents, skills, wiki pages, detection profiles and the standard Assistant prompt for Neova Studio. The Neova app reads it from `https://neova.studio/catalogue/index.json`. Users can then browse items, install them, and get updates offered.

## How to publish

1. Add or edit a file in the right folder (see below).
2. If you changed an existing item, **raise its `version`**. The app offers an update only when the version goes up.
3. Check it locally: `node catalogue/build.mjs --check`
4. Commit and push to `main`. The deploy workflow runs the same check. A broken item stops the deploy, so nothing broken goes live.

The generated output (`docs/public/catalogue/`) is not committed. The workflow builds it on every deploy.

## Folders

| Folder | Type | File |
|---|---|---|
| `agents/` | agent | `.md`: the global-agent format |
| `skills/` | skill | `.md`: frontmatter + the skill instructions as body |
| `wiki/` | wiki page | `.md`: frontmatter + page body |
| `detection-profiles/` | detection profile | `.json`: a profile object |
| `assistant/` | standard Assistant prompt | `.md`: frontmatter + the prompt |

## Fields every item has

| Field | Required | Example | Notes |
|---|---|---|---|
| `catalogueId` | yes | `skill.neova-studio` | `<type>.<kebab-slug>`. **Never change it**: installed copies are linked by it. |
| `version` | yes | `"1.0.0"` | Semver, quoted. Raise it on every change. |
| `name` | yes | `Neova Studio` | |
| `description` | yes | | One line, shown in the catalogue list. |
| `minAppVersion` | no | `"2.2.0"` | Older apps do not offer the item. |
| `builtinId` | no | `builtin-neova-studio` | Only for items the app ships as built-ins. |
| `updatedAt` | no | `"2026-10-01"` | Shown to users. |

## Per type

- **Agent:** also needs `startCommand`. It is shown to users before installing, because it runs in their terminal.
  - Optional: `avatar` (icon only: `type: icon`, `icon`, `color`, or a built-in `@standard/avatar-XX` image) and `eventSubscriptions`.
  - Do **not** include `id`, `globalHash`, `createdAt` or `updatedAt` from your own agent file. The app creates them.
  - Copying an agent from `~/Library/Application Support/Neova Studio/Neova/agents/` works if you remove those four lines and add `catalogueId` and `version`.
- **Skill:** optional `isQuickAction: true`.
- **Wiki page:** optional `category`, the suggested category when installing (e.g. `standards`).
- **Detection profile:** JSON with `displayName`, plus `attention`, `working` (`window_ms`, `threshold`), `idle` and `inputReady`, each with `patterns`. Every regex must compile and be at most 500 characters.
- **Assistant prompt:** needs `builtinId: assistant-system-prompt` and keeps its `(Version X.Y, date ...)` line within the first 5 lines. The app uses that line to tell users their own edited prompt is behind.

## Built-ins

`assistant/system-prompt.md` and `skills/neova-studio.md` / `skills/neova-onboarding.md` are copies of the files the app ships (`electron/defaults/` in neova-flows), with catalogue frontmatter added. When you improve one here and raise its version, users are offered it before the next app release. Copy the change back into the app as well, so new installs ship it.

## Tests

`node --test catalogue/build.test.mjs`
