---
title: Goals
description: Group tasks under a goal, follow its progress, and give a goal its own folder and branch.
sidebar:
  order: 3
---

A goal is something you work toward that takes several tasks. Goals collects the tasks for each goal and shows how far along they are.

Open it from **Sidebar › Project › Goals**.

## Goal list

The list on the left shows your goals in four groups:

| Group | Goals in it |
|---|---|
| **In progress** | Goals you started with **Start working**. |
| **Not started** | New goals, and goals you stopped. |
| **Achieved** | Goals you marked achieved. |
| **Archived** | Goals you archived. This group is folded. Click its header to open it. |

Each goal shows its title, a progress bar and how many tasks are done, for example **3/8 done**. A goal without tasks says **No tasks yet**.

- Click **+** next to **Goals** to create a goal.
- Type in **Search goals** to filter the list by title. While you search, the **Archived** group opens.
- Drag a goal to change its order within its group.

Click a goal to open it on the right.

## Goal header

The header of an open goal has the title, a row of details and the actions.

- **Title**: click it and type to rename the goal.
- **Status**: **Not started**, **In progress**, **Achieved** or **Archived**.
- **Goal ID**: click the `#…` chip to copy the ID.
- **Start working** sets the goal to **In progress**. On a goal in progress the button says **Stop working**, which sets it back to **Not started**.
- The arrow next to it opens more options. On a goal in progress, choose **Mark achieved**.
- **Save** saves the title and description. A dot on the button means there are unsaved changes.

The **⋯** menu has:

| Option | What it does |
|---|---|
| **Discard changes** | Throws away unsaved changes. Only shows when there are changes. |
| **Open on board** | Opens **Tasks › Boards**, filtered to this goal's tasks. |
| **Reopen** | Sets an achieved goal back to **Not started**. |
| **Archive** / **Unarchive** | Moves the goal to **Archived**, or back to **Not started**. |
| **Open in file explorer** | Shows the goal's file in Finder. |
| **Copy file location** | Copies the path, `.neova/goals/<id>.md`. |
| **Delete goal** | Deletes the goal after you confirm. Its tasks stay. |

## Description

Below the header is the goal's description, in a text editor with Markdown formatting and replacement fields. Click the **Expand the goal text** button at the bottom right to give the description the full page. The task list folds into one line. Click that line, or the button again, to show the tasks.

## Tasks

The **Tasks** section lists the tasks linked to the goal. Its header shows how many are done, for example **3 of 8 done**.

| Control | What it does |
|---|---|
| **List** / **Board** | Switches between the list and the board view. |
| **Create** | Creates a task called **New Task** in the default stage, links it to the goal and opens it in a side panel. |
| **Link** | Opens a picker with your other tasks. Choose one to link it to the goal. |

### List view

Each row shows the task title, its stage, a small track of the board columns and its percentage.

- Click the checkbox to mark the task done. Click it again to reopen it.
- Click a row to open the task in a side panel.
- Drag a row by its handle to change the order of open tasks.
- Hover over a row and click **×** (**Unlink task**) to remove it from the goal. The task itself stays.

Open tasks come first, then done tasks. Done tasks show with a line through them. An archived task shows an **Archived** badge. A task that was deleted shows as **Deleted task** until you unlink it.

### Board view

The board view shows the goal's tasks in the board columns they are in. Only columns with tasks show. The line below says how many empty columns are hidden.

Click a card to open the task. To move cards between columns, click **Open on board**.

## Progress

The progress bar has three parts: **Done**, **Underway** and **To go**.

Every task on a goal counts for an equal share. A done task counts in full. An open task counts for part of its share, by the board column it is in: a task in the first column counts for nothing, and each column further to the right counts for more. An open task never counts in full.

The percentage on each task row shows how far that task is. Hover over it to see what it counts for, for example **Counts for 12% of this goal**.

A task counts as done when it is in the **Done** stage, marked done, or archived.

## Own folder for a goal

A goal can get its own folder and git branch. Agents working on the goal work in that folder, so their changes can't clash with work on other goals. Your main project folder is not touched.

These options show when **Work on goals in separate folders** is on in **Settings › Git**, under **Goal worktrees**. The project must be a git repository.

With goal folders on:

- The arrow next to **Start working** offers **Start in its own folder…**.
- On a goal in progress without a folder, it offers **Move to its own folder…**.
- A goal with its own folder shows a branch icon in the goal list. An amber dot means there are uncommitted changes in its folder.
- The goal header shows a chip with the branch name. Click it for the folder's details and actions.

### Folder chip

The chip's panel shows the folder, the agents working in it, how far the branch is ahead of or behind the main branch, and whether it is on GitHub. An amber dot on the chip means the branch is behind or has uncommitted files.

| Action | What it does |
|---|---|
| **Update from main** | Brings new commits from the main branch into the goal's branch. If files clash, nothing changes. |
| **Merge into main** | Moves your local main branch forward with the goal's commits. Nothing is sent to GitHub. |
| **Push to GitHub** | Pushes the goal's branch to GitHub. |
| **Copy branch name** | Copies the branch name. |
| **Show in Finder** | Opens the goal's folder in Finder. |
| **Show in graph** | Opens **Tools › Git** with the branch highlighted. |
| **Close folder…** | Removes the folder. See below. |

The main branch shows under its own name, for example **Update from main** or **Merge into master**. Each action says below its name what it will do, or why it can't run.

If the folder was deleted outside Neova, the chip says **Folder missing**. Click it and choose **Clean up**. The branch and its commits stay.

## How to create a goal

1. Click **+** next to **Goals**.
2. Type a **Goal Title**, for example `Launch customer portal`.
3. Click **Create**. The goal opens.
4. Describe the goal and click **Save**.

## How to add tasks to a goal

1. Open the goal.
2. Under **Tasks**, click **Link** and choose an existing task. Repeat for each task.
3. To add a new task, click **Create**. The task opens in a side panel. Give it a title and save it.

You can also link a task to a goal from the task editor.

## How to start a goal in its own folder

1. Turn on **Work on goals in separate folders** in **Settings › Git**.
2. Open a goal that is **Not started**.
3. Click the arrow next to **Start working** and choose **Start in its own folder…**.
4. Click **Start in own folder**.

Neova makes a folder next to your project with a new branch, taken from the branch your main folder has checked out. The goal moves to **In progress**. The window shows what was made. Click **Show in Finder** to open the folder, or **Done**.

To put an agent in the goal's folder, start the agent in that goal from its **Start Terminal** menu. A running agent can also move itself into the goal when it picks up one of the goal's tasks.

## How to finish work in a goal's folder

1. Click the branch chip in the goal header.
2. If the main branch has moved on, click **Update from main**.
3. Click **Merge into main**.
4. Click the chip again and choose **Close folder…**.

The **Close work** window depends on the state of the folder:

- **Uncommitted files**: closing is blocked. The window lists the files. Click **Show files**, commit or discard them, then close again.
- **Commits not in the main branch**: choose **Close, keep branch** to remove the folder and keep the branch, or **Merge, then close**.
- **Nothing left to merge**: click **Close work**. The folder and the branch are removed.

Closing is refused while an agent is still working in the folder.

## Related

- [Settings › Git](/settings/system/#git) to turn on goal folders.
- [Boards](/tasks/boards/) to move a goal's tasks between columns.
- [Git](/tools/git/) for the goal branches and **Worktrees**.
- MCP tools for goals: `create_goal`, `get_goal`, `list_goals`, `update_goal`, `delete_goal`, `link_task_to_goal`, `unlink_task_from_goal`, `get_goal_progress`, `enter_goal` and `request_merge`. See [MCP tools](/reference/mcp-tools/).
