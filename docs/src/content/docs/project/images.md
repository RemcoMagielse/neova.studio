---
title: Images
description: See every image stored in the project, where each one is used, and clean up the ones nothing uses.
sidebar:
  order: 6
---

Images shows every image file stored in the project's `.neova/images/` folder, and where each one is used. Use it to find and remove images that nothing uses any more.

Open it from **Sidebar › Project › Images**.

Images land in this folder when you or an agent add one to a task, a wiki page, a chat message, a notification, a question's answer or an agent's terminal, and when you upload an icon for a link.

## Summary

The top of the page shows the number of files and their total size. If some images are unused, it also shows how many, and how much space removing them frees, for example **12 unused · 4.2 MB reclaimable**.

## Toolbar

| Control | What it does |
|---|---|
| **All** | Shows every image. |
| **Unused** | Shows only images that nothing refers to. |
| **Used** | Shows only images that something refers to. |
| **Select all (n)** | Selects every image the filter shows. When they are all selected, it says **Deselect all**. |
| Sort | Sorts by **Date modified**, **Size** or **Name**. Choose the same option again to reverse the order. |
| **Rescan images** | Reads the folder again and checks again where each image is used. |

## Image grid

Each tile shows a thumbnail, the file name, its size and how long ago it changed.

Below that, the tile says where the image is used:

- **Unused** when nothing refers to it.
- **Used in** and the first place it is used, for example **Used in Fix the login page**. **+2** means it is used in two more places. Hover over the line to see them all.

The places are named like this:

| Shown as | Where the image is used |
|---|---|
| The task title | A task, also an archived one. |
| **Chat · 2026-10-01** | A chat message on that day. |
| **Notification · 2026-10-01** | A notification or question on that day. |
| **Project links** | A link icon on [Overview](/project/overview/#links). |
| A file path | Another file in `.neova/`, such as a wiki page. |

Neova checks every text file in `.neova/` for the image's file name.

- Click a tile, or its checkbox, to select it. ⇧-click selects every tile between the last one you clicked and this one.
- Hover over a tile and click the **Open in default viewer** button to see the image at full size. In that view, click **Open in default app** to open it outside Neova.

## How to clean up unused images

1. Click **Unused**.
2. Click **Select all**.
3. Check the selection. Click a tile to leave it out.
4. In the bar that shows the selection, click **Move to Trash**.
5. Click **Move to Trash** again to confirm.

The files go to the system Trash, so you can put them back from there.

## How to remove a single image

1. Click the image's tile to select it.
2. Click **Move to Trash** in the selection bar.
3. Confirm with **Move to Trash**.

If an image you remove is still used, the confirmation says how many of the selected images are still referenced. Where they were used, a placeholder shows instead of the image.

The selection bar shows how many images are selected and their size. Click **Clear** to deselect them all.

## Related

- [Files](/project/files/) to look at any file in the project.
- [Wiki](/project/wiki/#images) for adding images to a page.
- [The .neova folder](/reference/neova-folder/).
