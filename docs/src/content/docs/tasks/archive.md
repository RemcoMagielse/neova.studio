---
title: Archive
description: Search archived tasks, read them, and restore a task to the board.
sidebar:
  order: 4
---

The Archive holds the tasks you archived. Search it to find finished work, read an archived task, or put it back on the board.

Open it from **Sidebar › Tasks › Archive**.

## Header

The header shows the project name and the number of archived tasks.

## Search field

Type in **Search the archive by title, id, tag or description…**. The results update as you type. Press **Esc** to clear the search.

Under the field:

- With an empty search, the line reads **Most recently finished first. Archived tasks are read-only.**
- While you search, it shows the number of matches. If there are more than 60, it says **showing the first 60**.

## Cards

Archived tasks show as cards in a grid. Each card shows the stage the task was in, an **Archived** label and how long ago it changed. A check icon marks tasks that were completed when they were archived.

- Rest the pointer on a card to see a preview of the description.
- Click a card to open it in the reader.

If the archive is empty, the page says **Nothing has been archived yet.**

## Reader

The reader shows an archived task without editing it. At the top it says **Archived · read-only** with the task ID. Below that are the title, the tags and the description.

Click **Restore** to put the task back on the board.

## How to find an archived task

1. Type part of the title, the task ID, a tag or a word from the description.
2. Click the card to read the task.

## How to restore a task to the board

1. Click the task's card to open the reader.
2. Click **Restore**.
3. **Restore to the board?** shows the stage the task goes back to. Click **Restore to board**.

The task returns to the stage it was archived from. If that stage no longer exists, it goes to the default stage. A message confirms where it went. Click **Open** in that message to open the task in the task editor.

## How to archive a task

You archive tasks from the board or the task editor:

- On [Boards](/tasks/boards/), right-click a card and choose **Archive**, or select several cards and click **Archive**.
- In the [task editor](/tasks/task-editor/), open **More actions** (⋮) and choose **Archive**.

When you archive a single task that has images, choose **Delete images** or **Keep images** before you confirm. Archiving several tasks at once follows **Delete images when archiving**.

## Related

- [Boards](/tasks/boards/): archive tasks from the board.
- [Settings › General](/settings/general/): **Delete images when archiving**.
- [The .neova folder](/reference/neova-folder/): archived tasks are kept in `.neova/tasks/archive`.
- [MCP tools](/reference/mcp-tools/#search): agents search archived tasks with `search` using the `archive` scope, and read one with `get_task`.
