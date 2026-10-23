---
title: Boards
description: See every task as a card in its stage column, filter the board, and move, open or act on tasks.
sidebar:
  order: 1
---

Boards shows every task as a card, in one column per stage. Use it to see where work stands, move tasks between stages, and open a task to edit it.

Open it from **Sidebar › Tasks › Boards**.

## Toolbar

The toolbar runs along the top of the board.

| Control | What it does |
|---|---|
| **Search by title or ID...** | Shows only cards whose title or task ID contains the text. While you search, columns without a match are hidden. Click **×** (**Clear search**) to clear it. |
| **Filters** | Opens the filter drawer. A dot on the button means a filter is on. See [Filters](#filters). |
| **Assigned to: me** | Shows only tasks assigned to you. Click it again to turn it off. |
| **Sort** | Sorts the cards in every column by **Recent Activity**, **Name** or **Created Date**. Choose the same option again to flip the direction. |
| **Switch to compact view** / **Switch to normal view** | Compact view shows only the title of each card. |
| **Hide empty columns** / **Show empty columns** | Hides the columns that have no cards. |
| **Configure stages** | Opens the **Stages** panel, with the same stage settings as [Settings › Stages](/settings/workflow/#stages), without the skills. |
| **Refresh tasks** | Reloads all tasks from disk. |

Neova remembers compact view and hidden empty columns the next time you open the board.

## Filters

Active filters show as chips under the toolbar, for example **Tag: bug** or **Assignee: You**. Click **×** on a chip to remove it, or **Clear all** to remove every filter.

Click **Filters** to open the drawer. Each section has a **Clear** link when it has a filter set.

| Section | Choices |
|---|---|
| **Status** | **All**, **Pending** or **Completed**. |
| **Type** | One or more task types. Shown only when tasks have a type. |
| **Tags** | One or more tags. Type in **Search tags...** to find one. |
| **Goals** | **All tasks** or one active goal. |
| **Assignees** | **You** and one or more agents. |
| **Date Range** | Choose **Updated** or **Created**, then **Today**, **Last 7 days**, **Last 30 days** or **This month**, or set **From** and **To** dates. |

When you choose several tags, types or assignees, the board shows tasks that match any of them. Filters from different sections all apply together.

A goal's **Open on board** action opens the board filtered to that goal.

## Columns

Each column is a stage, in the order set in **Settings › Stages**. The column header shows:

- The stage name, with a **Default** badge on the stage new tasks go to.
- **+** (**Add task**): creates a task called **New Task** in this stage and opens it.
- The number of tasks, for example **12 tasks**. With a search or filter on, it shows **3 of 12 tasks**.

A column with no tasks says **No tasks yet**, or **No tasks found. Try different filters.** when a filter hides them.

If a task's stage doesn't match any stage on the board, it shows in an **Unassigned** column at the left, with the number of tasks that need a stage.

## Cards

A card shows the task title, the start of the description, assignees, up to three tags and the number of linked tasks. A completed task has a check icon and a struck-through title. Cards assigned to you have a coloured left edge.

Hover over a card to see its buttons:

| Button | What it does |
|---|---|
| **Mark as Done** / **Reopen Task** | Top left. Sets the task's status to completed or back to pending. The stage stays the same. |
| **Move to *stage*** | Arrows on the left and right edges. Moves the task to the previous or next stage. |

Rest the pointer on a card for a moment to see a preview of the full description. In compact view, hovering shows a card with the details and the same buttons.

Click a card to open it in the task panel. See [Task panel](#task-panel).

### Right-click menu

Right-click a card for these options:

| Option | What it does |
|---|---|
| **Copy Task ID** | Copies the task ID to the clipboard. |
| **Move to stage** | Moves the task to the stage you choose. The current stage has a check mark. |
| **Assign** | Adds or removes you or an agent as an assignee. |
| *Stage actions* | One item per action added to the stage. Choosing one copies its text, filled in for this task, to the clipboard. With more than five actions they are under **Agent Prompts**. |
| **Mark as Done** / **Reopen Task** | Sets the status. |
| **Archive** | Moves the task to the archive. If the task has images, choose **Delete images** or **Keep images**. |
| **Delete** | Deletes the task after you confirm. This can't be undone. |

## Select several tasks

- **⌘-click** a card to select it. **⇧-click** selects a range in the same column.
- While you have a selection, a click on any card adds or removes it. Each column header gets a checkbox that selects all its visible cards.
- Click an empty part of the board, or **Cancel**, to clear the selection.

With tasks selected, the toolbar shows how many are selected and these actions:

| Action | What it does |
|---|---|
| **Move to…** | Moves all selected tasks to the stage you choose. |
| **Mark as done** | Sets every selected task to completed. Their stages stay the same. |
| **Archive** | Archives the selected tasks. Their images are kept or deleted according to **Delete images when archiving**. |
| **Delete** | Deletes the selected tasks. This can't be undone. |

Each action asks you to confirm first and lists the tasks it applies to.

## Task panel

Clicking a card opens the task in a panel over the board. It has the same areas as the full [task editor](/tasks/task-editor/).

- The title and description wait until you save. Press **⌘S** or click **Save**.
- The stage, type, tags, assignees, goal, linked tasks, attachments and status save as soon as you change them.
- Click **Expand to full editor** or press **⌘E** to open the task in the full editor. Unsaved changes are saved first.
- Click **Close**, press **Esc** or click outside the panel to close it. If you have unsaved changes, Neova asks **Discard unsaved changes?** Click **Discard changes** to close without saving.

## How to add a task

1. Click **+** (**Add task**) at the top of the column for the stage the task belongs in.
2. The task panel opens with the title **New Task**. Type a title.
3. Describe the work in the editor below the title.
4. Press **⌘S** to save.

To add a task from anywhere, press **⌘T**. The new task goes into the default stage and opens in the task editor.

## How to move a task to another stage

Do one of these:

- Hover over the card and click the left or right arrow.
- Right-click the card, choose **Move to stage** and pick the stage.
- Open the task and choose a stage under **Agent Actions › Stage**.

To move several tasks at once, select them and click **Move to…**.

## How to find tasks for a goal or a person

1. Click **Filters**.
2. Under **Goals**, choose the goal. Under **Assignees**, choose **You** or an agent.
3. Close the drawer. The chips under the toolbar show what is filtered.

Click **Assigned to: me** for a one-click view of your own tasks.

## How to copy a stage prompt for a task

1. Right-click the card.
2. Choose the skill. Neova fills in the skill's prompt for this task and copies it to the clipboard.
3. Paste it into an agent's terminal.

A skill whose template can't be found shows **unavailable** and can't be chosen.

## Related

- [Task editor](/tasks/task-editor/): every area of an open task.
- [Settings › Stages, Types and Tags](/settings/workflow/).
- [Settings › Actions](/settings/agents/#actions): the actions behind the stage buttons.
- [Settings › General](/settings/general/): **Delete images when archiving**.
- [MCP tools](/reference/mcp-tools/#task-management): agents use `list_tasks`, `create_task`, `move_to_stage` and `complete_task` to work with the board.
