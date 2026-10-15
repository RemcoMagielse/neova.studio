---
title: Files
description: Browse the project folder, edit text files and star the files you use most.
sidebar:
  order: 5
---

Files shows the files in your project folder. You can open and edit text files, look at images, and star the files you use most.

Open it from **Sidebar › Project › Files**.

## File tree

The column on the left shows the project folder as a tree.

- Click the arrow next to a folder to open or close it.
- Click a file to open it on the right.
- Images and other files you can't edit show in grey.
- Type in **Search files** to find files anywhere in the project by name or path. Up to 200 matches show.

### Starred files

Hover over a file and click the star (**Mark as important**) to star it. A starred file shows a star after its name and in bold. Click the star again (**Remove from important files**) to take it off.

Click the star button next to **Files** at the top of the column to show only starred files. The tooltip shows how many there are, for example **Show important only (4)**. Click it again (**Show all files**) to see the whole tree.

Starred files are saved in `.neova/starred-files.json`. The number of starred files also shows at the bottom of [Overview](/project/overview/#everything-else).

## Editor

The right side shows the open file. With no file open, the header says **No file open**.

The header shows:

| Item | What it shows |
|---|---|
| Name | The file name, with a dot when there are unsaved changes. Below it, the path in the project. |
| Language | The file type, for example **TypeScript**, **Markdown** or **JSON**. |
| **Ln 12, Col 4** | Where the cursor is. |
| **Save** | Saves the file. ⌘S does the same. |
| **Revert** | Throws away your changes and reads the file from disk again, after you confirm. |

Text files open in a code editor with line numbers and syntax colours.

Other files open like this:

| File | What you see |
|---|---|
| Image | A preview of the image. |
| Binary file | **This file cannot be edited** |
| File over 5 MB | **This file is too large to edit**, with its size. |

## How to edit a file

1. Find the file in the tree, or type its name in **Search files**.
2. Click the file.
3. Make your changes.
4. Press ⌘S or click **Save**.

If you open another file or leave the page with unsaved changes, Neova asks what to do: **Save Changes**, **Discard Changes** or cancel.

## How to star a file

1. Hover over the file in the tree.
2. Click the star.

To see only your starred files, click the star button next to **Files** at the top of the tree.

## Related

- [Images](/project/images/) for the images Neova stores in `.neova/images/`.
- [Git](/tools/git/) to commit the changes you make here.
- [The .neova folder](/reference/neova-folder/).
