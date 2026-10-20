---
title: Composer
description: Write a prompt with replacement fields, see it filled in, copy it, or save it as a snippet, template or standard.
sidebar:
  order: 2
---

Composer is where you write a prompt and see it with every replacement field filled in. Start from a template, add a task for context, then copy the result or save it.

Open it from **Sidebar › Tools › Composer**.

## Template and Task Context

Two cards sit at the top of the page.

| Card | What it does |
|---|---|
| **Template** | Click **Select a template...** to pick a template. Its text replaces what is in the **Editor**. The list shows project templates and global templates (**Global: …**). |
| **Task Context** (optional) | Click **Select a task for context...** to pick a task. The task fills in the `{task.…}` fields in the **Preview**. It does not change the **Editor**. |

Both pickers have a search box. Use **↑ ↓** to move, **↵** to select and **Esc** to close.

On a selected card:

- **Edit template** opens the template in **Settings › Skills**.
- **Clear selection** removes the selection. Clearing the template keeps the text in the **Editor**.

## Editor

The left pane is where you write. It has line numbers and suggests fields while you type:

- `{task.…}` for task fields
- `{app.…}` for project folders and files
- `{snippet-key}` for snippets that have a replacement key

The footer shows the number of characters and lines.

| Button | What it does |
|---|---|
| **Save As...** | Saves the editor text as a snippet, template or standard. See [How to save as a snippet, template or standard](#how-to-save-as-a-snippet-template-or-standard). |
| **Clear** | Empties the editor and clears the template and task. |

## Preview

The right pane shows the editor text with every field replaced. Filled-in fields are highlighted. The preview updates while you type. **Processing...** shows while it updates.

Click **Copy** to copy the preview to the clipboard, without the highlights. The button shows **Copied!** for a moment.

Composer remembers the editor text, template and task when you leave the page or restart Neova.

## How to compose a prompt for a task

1. Click **Select a template...** and choose a template.
2. Click **Select a task for context...** and choose a task.
3. Edit the text in the **Editor** if you need to.
4. Check the **Preview**.
5. Click **Copy** and paste the prompt where you need it.

## How to save as a snippet, template or standard

1. Click **Save As...**.
2. Choose **Snippet**, **Template** or **Standard**.
3. Choose one:
   - **Create new**: type a name.
   - **Replace existing**: pick the item to overwrite. A warning shows which item will be replaced.
4. Click **Create** or **Replace**.

| Type | Where it goes |
|---|---|
| **Snippet** | A new snippet in [Snippets](/tools/snippets/). |
| **Template** | A new template in the first project category of **Settings › Skills**. With **Replace existing** you can pick a global or a project template. |
| **Standard** | A new page in the [Wiki](/project/wiki/). |

Click the back arrow to choose a different type.

## Related

- [Replacement fields](/reference/replacement-fields/): every field you can use in the editor.
- [Snippets](/tools/snippets/): give a snippet a replacement key to use it here.
- [Settings › Skills](/settings/agents/): edit the templates you pick in Composer.
