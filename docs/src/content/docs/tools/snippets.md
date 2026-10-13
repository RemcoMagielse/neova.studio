---
title: Snippets
description: Keep reusable text and code, and insert it into prompts with a replacement key.
sidebar:
  order: 1
---

Snippets is your library of reusable text and code. Give a snippet a replacement key and you can insert its content anywhere replacement fields work, by typing `{key}`.

Open it from **Sidebar › Tools › Snippets**, or choose **File › New Snippet** in the menu bar to open it with the **Create New Snippet** dialog.

## Snippet list

The list on the left shows every snippet in the project. Each row shows the title, the language and, if set, the replacement key as `{key}`.

| Control | What it does |
|---|---|
| **+** (**Create new snippet**) | Opens the **Create New Snippet** dialog. |
| **Search snippets** | Filters the list by title, replacement key or tag. |

Click a snippet to open it on the right.

## Snippet editor

The top of the editor has two rows.

**Row 1** is the title. Click it to edit.

**Row 2** holds the snippet's settings on the left and the actions on the right:

| Control | What it does |
|---|---|
| Language | Sets the language for syntax highlighting. Click it and search for a language. |
| **Add key** | Adds a replacement key. Type the key; letters, numbers, `-` and `_` are allowed. Press **↵** to confirm or **Esc** to remove the key. The copy button next to the key copies `{key}` to the clipboard. |
| Tags | Click **+ Add** to open **Manage Tags**. Click the **×** on a tag to remove it. |
| `N chars` | The length of the content. |
| **Save** | Saves your changes. An amber dot on the button means there are unsaved changes. |
| **More actions** (**⋯**) | **Discard changes**, **Open in file explorer**, **Copy file location**, **Delete snippet**. |

Below that is the content editor, with line numbers. While you type, it suggests replacement fields after `{` and project files after `@`.

When an agent is working on the snippet, a banner above the editor says so.

## How to create a snippet

1. Click **+** at the top of the list.
2. Type a **Snippet Title**.
3. Click **Create**, or press **↵**.
4. Type the content, set the language, and add a key and tags if you want.
5. Click **Save**.

## How to import a Markdown file

Drag a `.md` file onto the Snippets page and drop it. Neova creates a snippet from it.

- If the file has frontmatter, Neova reads `title`, `language`, `tags` and `replacementKey` from it.
- Without a `title`, the file name becomes the title.

## How to use a snippet in a prompt

1. Open the snippet and click **Add key**.
2. Type a key, for example `release-notes`, and click **Save**.
3. In a prompt, template or Composer, type `{release-notes}`.

When the prompt is filled in, `{release-notes}` is replaced with the snippet's content.

## How to delete a snippet

1. Open the snippet.
2. Click **⋯** and choose **Delete snippet**.
3. Click **Delete** to confirm.

## Related

- [Replacement fields](/reference/replacement-fields/): all fields you can use next to `{key}`.
- [Composer](/tools/composer/): write a prompt with snippets and save text as a snippet.
- Snippets are stored as files in `.neova/snippets/`. See [The .neova folder](/reference/neova-folder/).
- Agents read and edit snippets with `list_snippets`, `get_snippet`, `create_snippet`, `update_snippet` and `delete_snippet`. See [MCP tools](/reference/mcp-tools/#snippets).
