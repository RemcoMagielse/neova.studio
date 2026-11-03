---
title: Snippets
description: Keep text and code you paste often, one click from your clipboard.
sidebar:
  order: 1
---

Snippets is your library of text and code you paste often: a reply you send every week, a command, a piece of code. A snippet is plain text. What you copy is exactly what you wrote.

Open it from **Sidebar › Tools › Snippets**, or choose **File › New Snippet** in the menu bar to open it with the **Create New Snippet** dialog.

## Snippet list

The list on the left shows every snippet in the project, with its title and first line.

| Control | What it does |
|---|---|
| **+** (**Create new snippet**) | Opens the **Create New Snippet** dialog. |
| **Search snippets** | Filters the list by title, tag or text. |
| Copy button (on hover) | Copies the snippet's text without opening it. |

Click a snippet to open it on the right.

## Read a snippet

A snippet opens ready to copy. Code shows line numbers and colours; text does not.

| Control | What it does |
|---|---|
| **Edit** | Switches to the editor. |
| **Copy** | Copies the text to the clipboard. |
| **Expand** | Lets the text fill the panel. **Esc** brings the rest back. |
| **More actions** (**⋯**) | **Open in file explorer**, **Copy file location**, **Delete snippet**. |

When an agent is working on the snippet, a banner above the text says so.

## Edit a snippet

Click **Edit**. You can change the title, the text, the language and the tags.

| Control | What it does |
|---|---|
| Language | Sets the language. **Text** shows plain text; any other language shows code with line numbers. |
| Tags | Click **+ Add** to open **Manage Tags**. Click the **×** on a tag to remove it. |
| **Save** (floppy disk) | Saves and stays in the editor. An amber dot means there are unsaved changes. |
| **Done** | Saves and goes back to reading. |
| **More actions** (**⋯**) | Adds **Discard changes**, which drops your edits and goes back to reading. |

If the text looks like an API key, Neova offers to move it to [Secrets](/project/secrets/).

## Use a snippet elsewhere

- **⌘K**: search for the snippet and press **↵** to copy it. **⌘↵** opens it in Snippets.
- **⌘⇧K** (**Insert Reference**): pick the snippet to put its text where your cursor is: a task, the chat, a text box or an agent's terminal.

## How to create a snippet

1. Click **+** at the top of the list.
2. Type a **Snippet Title**.
3. Click **Create**, or press **↵**. The snippet opens in the editor.
4. Type or paste the text, and set the language and tags if you want.
5. Click **Done**.

## How to import a Markdown file

Drag a `.md` file onto the Snippets page and drop it. Neova creates a snippet from it.

- If the file has frontmatter, Neova reads `title`, `language` and `tags` from it.
- Without a `title`, the file name becomes the title.

## How to delete a snippet

1. Open the snippet.
2. Click **⋯** and choose **Delete snippet**.
3. Click **Delete** to confirm.

## Related

- Snippets are stored as files in `.neova/snippets/`. See [The .neova folder](/reference/neova-folder/).
- Agents read and edit snippets with `list_snippets`, `get_snippet`, `create_snippet`, `update_snippet` and `delete_snippet`. See [MCP tools](/reference/mcp-tools/#snippets).
