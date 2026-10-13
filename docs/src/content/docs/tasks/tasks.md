---
title: Tasks
description: Search all tasks, pick up a recent one, or create a new task.
sidebar:
  order: 2
---

The Tasks page is where you find a task. It shows the tasks you worked on most recently, and a search field that looks through every task on the board.

Open it from **Sidebar › Tasks › Tasks**.

## Header

The header shows the project name and the number of tasks. **New task** on the right creates a task. See [How to create a task](#how-to-create-a-task).

## Search field

Type in **Search tasks by title, id, tag or description…**. The recent tasks make way for a grid of matching cards. If nothing matches, the page says so.

| Keys | Action |
|---|---|
| ↑ ↓ | Move through the results. A preview of the highlighted task shows next to it. |
| ↵ | Open the highlighted task. |
| Esc | Clear the search. |

## Filter chips

The chips under the search field narrow both the recent tasks and the search results. Each chip shows how many tasks it covers in the whole project.

| Chip | Shows |
|---|---|
| **All** | Every task. |
| **Yours** | Tasks assigned to you. |
| **Picked up now** | Tasks an agent is working on. |
| **Any stage** | Choose a stage to show only its tasks. |
| **Any tag** | Choose a tag to show only tasks with that tag. |

## Recently worked on

With an empty search field, the page shows **Recently worked on**: a row of cards for the tasks changed most recently. Each card shows the stage and how long ago the task changed.

Click **See all *n* ›** to go to [Boards](/tasks/boards/).

## Cards

- Click a card to open the task in the [task editor](/tasks/task-editor/), in its own tab.
- **⌘-click** a card to open it in a new tab.
- Rest the pointer on a card to see a preview of the description. Click the preview to open the task.

## How to find a task

1. Type part of the title, the task ID, a tag or a word from the description.
2. Narrow the results with **Yours**, **Any stage** or **Any tag** if you need to.
3. Click the task, or use ↑ ↓ and press ↵.

## How to create a task

1. Click **New task**.
2. Neova creates a task called **New Task** in the default stage and opens it in the task editor.
3. Type a title and a description.
4. Press **⌘S** to save.

You can also press **⌘T** from anywhere in Neova.

## Related

- [Task editor](/tasks/task-editor/): edit the task you open.
- [Boards](/tasks/boards/): see all tasks by stage.
- [Archive](/tasks/archive/): search archived tasks.
- [Settings › Stages](/settings/workflow/#stages): set the default stage for new tasks.
- [MCP tools](/reference/mcp-tools/#task-management): agents use `list_tasks`, `get_task` and `search` to find tasks.
