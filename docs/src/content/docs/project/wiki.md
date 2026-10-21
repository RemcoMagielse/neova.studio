---
title: Wiki
description: Pages of project knowledge in categories, that you and your agents read and write.
sidebar:
  order: 4
---

The Wiki holds pages of project knowledge, such as coding standards, how-tos and reference notes. You and your agents both read and write them.

Open it from **Sidebar › Project › Wiki**.

Each page is a Markdown file in `.neova/wiki/<category>/`.

## Categories

The column on the left lists the categories, each with its number of pages.

- **All pages** shows the pages of every category.
- Click a category to show only its pages.
- **New category** creates a category. Give it a **Name** and, if you like, a **Description**.
- **Manage categories** opens a window where you change a category's name and description and click **Save**. Click the bin to delete a category. Only an empty category can be deleted.

## Page list

The middle column lists the pages in the selected category, in alphabetical order. Each page shows its name, description and number of words. Under **All pages**, each page also shows its category.

- **Search the wiki** searches page names and text in the selected category. The best matches come first.
- **New page** creates a page in the selected category.
- The arrow next to **New page** has **Add page from catalogue**, to add a ready-made page from the Neova catalogue.

When the pane is narrow, the category column and the page list fold into thin strips at the left, so the page gets the full width. Click a strip and the column slides in over the page; it closes once you pick a category or a page, or with Escape. With no page open, the list takes the width.

## Page

Click a page in the list to open it.

At the top:

- **Page name**: click it and type to rename the page.
- **Description**: a short line that helps agents find the right page.

Below that is a row of details:

| Item | What it does |
|---|---|
| Category | Pick another category to move the page there. |
| `{wiki.<id>}` | Copies the page's replacement field. Use it in a prompt or snippet to insert the page. |
| `<id>.md` | Shows the page's file in Finder. |
| Words | The number of words on the page. |
| **From catalogue · v1** | Shows on pages added from the catalogue. Click **Update available** to get a newer version. |

The buttons at the top right:

| Button | What it does |
|---|---|
| **Save** | Saves the name, description and text. A dot on the button means there are unsaved changes. |
| **Hide lists for a wider page** | Hides the category column and the page list. Click again (**Show lists**) to bring them back. |
| **Version history** | Opens the page's history next to the text. |
| **⋯** | **Refresh from disk**, **Open in file explorer**, **Copy file location** and **Delete page**. |

**Refresh from disk** reads the page again from its file and throws away unsaved changes.

When an agent reads or edits a page, a banner on the page and a marker in the page list show it.

## Editor

The text editor shows the page as formatted text and saves it as Markdown. Click **Save** to write your changes.

The toolbar has **Heading 1** to **Heading 3**, **Bold** (⌘B), **Italic** (⌘I), **Inline code**, **Strikethrough**, **Bulleted list**, **Numbered list**, **Checklist**, **Quote**, **Insert link**, **Insert image** and **Search in text** (⌘F).

Type `/` at the start of a line for more blocks, including **Table**, **Code block** and **Mermaid diagram**.

### Images

To add an image, drop or paste it into the text, or click **Insert image** in the toolbar. The **Insert image** window lets you:

- Pick an image that is already in the project. **Search images…** filters them. Click **Insert**.
- Click **Upload image…** to add a new file.
- Paste a public image address and click **Insert URL**.

Neova saves dropped, pasted and uploaded images in `.neova/images/`. They show in [Images](/project/images/).

## Version history

Click **Version history** to open the **History** panel next to the page. It lists every saved version of the page, newest first. Each version shows when it was saved, who saved it, and how many lines were added and removed.

Click **View changes** on a version to open it:

- **Changes** shows what is different between that version and the page as it is now.
- **Full version** shows the page as it was.
- **Restore this version** puts that text back on the page. Confirm with **Restore**.

Restoring adds the old text as a new version. The version you replaced stays in the history, so you can go back to it. Restoring keeps the page's current description.

Versions come from Neova's backups of the `.neova/` folder. See [Git](/tools/git/).

## How to create a page

1. Click a category on the left. Pick **All pages** to create the page in the **standards** category.
2. Click **New page**.
3. Type a **Page name**, for example `API Design`. The line below shows the file Neova creates.
4. Click **Create**. The page opens.
5. Write the page and click **Save**.

Two pages can't have the same name. If the name exists, the window says **A page with this name already exists**.

## How to import a Markdown file

1. Click the category the page should go in.
2. Drag a `.md` file from Finder onto the Wiki.

The file becomes a new page. If a page with the same name exists, Neova asks whether to **Replace** it.

## How to restore an earlier version

1. Open the page and click **Version history**.
2. Click **View changes** on the version you want.
3. Check the changes, then click **Restore this version**.
4. Click **Restore**.

## How to move a page to another category

1. Open the page.
2. Click the category in the row of details.
3. Pick the new category.

The page's file moves to the new category's folder.

## Related

- [Replacement fields](/reference/replacement-fields/) for `{wiki.<id>}`.
- [The .neova folder](/reference/neova-folder/) for where wiki pages are stored.
- MCP tools for the wiki: `list_wiki`, `list_wiki_categories`, `search_wiki`, `get_wiki`, `get_section_from_wiki`, `create_wiki`, `update_wiki`, `append_to_wiki`, `replace_in_wiki`, `replace_section_in_wiki` and `delete_wiki`. See [MCP tools](/reference/mcp-tools/).
