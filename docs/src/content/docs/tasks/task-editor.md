---
title: Task editor
description: Edit a task's title, details and description, run stage actions, and manage links, attachments and history.
sidebar:
  order: 3
---

The task editor is where you write and manage one task: its title, details, description, stage, skills, linked tasks, attachments and history.

Open a task from [Boards](/tasks/boards/), [Tasks](/tasks/tasks/) or search (⌘K). On the board, a task first opens in the task panel; press **⌘E** to open it in the full editor. Each task opens in its own tab.

The task panel on the board and the full editor have the same areas. The full editor also has the **Tasks** back button, the outline and the **Save & release** prompt.

## Top bar

| Item | What it does |
|---|---|
| **Tasks** | Full editor only. Goes back to the [Tasks](/tasks/tasks/) page. |
| Save status | Shows **Unsaved changes**, **Saving…** or when the task was last saved, for example **Saved 2 mins ago**. |
| **Save** | Appears when the title or description has unsaved changes. Same as **⌘S**. |
| **More actions** (⋮) | **Mark as done**, **Reload from disk**, **Archive** and **Delete**. See [More actions menu](#more-actions-menu). |
| **Open actions** | Appears when the window is too narrow to show the actions rail. Opens the rail as a drawer. |

## Title

The large field at the top is the task title. Click it and type. The title saves when you save.

## Metadata strip

The row under the title shows the task's details. Changes here save straight away.

| Item | What it does |
|---|---|
| **Type** | Click **+ Type** to give the task a type, such as a bug or a feature. Search the list, or type a new name and choose **Create "…"**. Choose **None** to remove the type. |
| Task ID | Shows `#` and the task ID. Click it to copy the ID. |
| File name | The task's file in `.neova/tasks/`. Click it to show the file in Finder. |
| **Completed** | Shown when the task is done. |
| Tags | The task's tags. Click **+ Tags** (or **+** when the task has tags) to open **Manage Tags**. Type a tag and press comma or ↵ to add it, click a tag to change its colour, then click **Save Tags**. |
| **Assign** | Click **+ Assign** to choose who works on the task: **You** under **People**, or agents under **Agents**. Click a name again to remove it. When the task has assignees, their avatars show here; click them to change the list. |
| **Goal** | Click **+ Goal** to add the task to an active goal. The goal's name then shows here, with **Remove from goal** (×) next to it. |
| Contributors | Avatars of the agents that wrote content in the task, taken from its history. Hover over one to see who it is. |

Assigning an agent here saves it to the task. It doesn't send the agent a message. To hand the task to an agent, use a stage action with **Send to Agent**, or tell the agent in its terminal.

## Description

The description is a markdown editor. It has a toolbar with headings, bold, italic, inline code, strikethrough, lists, checklist, quote, link and image, plus **Search in text (⌘F)** and **Switch to raw markdown (⌘⇧M)**.

While you type:

- Type **/** at the start of a line to insert a heading, list, checklist, table, code block or other block.
- Type **@** to link to another task.
- Type **{** to insert a replacement field. See [Replacement fields](/reference/replacement-fields/).
- Paste or drop an image to add it.

Under the editor, Neova shows the length of the description, for example **420 words (2 min)**.

The description saves when you save.

### Send to agent

Select text in the description. A button with a sparkle appears above the selection. Click it, or right-click the selection, and choose **Send to agent**.

The **Ask agent for help** window opens:

1. Choose a running agent from the list at the top.
2. Type what you want in **Ask or instruct...**.
3. Press **↵** or click **Send**.

The agent receives your request, the selected text and a reference to the task. The window then shows the agent's terminal output.

## Outline

In the full editor, when the description has headings, an outline shows on the left. Click a heading to jump to it. Click **Hide outline** to close it and **Show outline** to bring it back.

## Actions rail

The rail on the right has four sections. Click a section header to open or close it. Click **Hide actions** to close the rail and **Show actions** to bring it back.

### Agent Actions

**Stage** shows the task's stage. Choose another stage to move the task. The change saves straight away.

**Stage Actions** lists the [actions](/settings/agents/#actions) added to the current stage. Each action is a split button:

| Part | What it does |
|---|---|
| Action name | Fills in the action's text for this task and copies it to the clipboard. |
| **▾** › **Copy to clipboard** | The same as clicking the action name. |
| **▾** › **Edit action** | Opens the action in **Settings › Skills**, under **Actions**. |
| **▾** › **Send to Agent** | Fills in the prompt and sends it to an agent's terminal, then shows that terminal. If you have more than one agent, choose one in the **Send to Agent** window. If the agent isn't running, Neova starts it first. |

An action that no longer exists is greyed out and shows **Action not available**. A stage without actions shows **No actions available**.

### Linked tasks

Lists the tasks linked to this one. Click a linked task to open it. Hover over it and click **×** to unlink it. Click **Link task** to open **Attach Tasks**, select one or more tasks and click **Attach**. Links save straight away.

### Attachments

Shows the task's images. To add one, click **Click to upload**, drag an image onto the drop area, or paste it with ⌘V. PNG and JPG files up to 10 MB work. When you drop a single image, **Annotate image** opens first so you can mark it up.

Each image has **Open image**, **Copy image reference** and **Remove image** buttons. When you remove an image, choose **Delete from disk** or **Keep file**. Attachments save straight away.

### History

Lists what happened to the task and who did it. If [Neova Git](/tools/git/) is on, a row with a saved version has **View changes**. It opens the version with two views: **Changes** and **Full version**. Click **Restore this version** to put that description back. The current version stays in the history.

## More actions menu

| Option | What it does |
|---|---|
| **Mark as done** | Sets the task's status to completed. The stage stays the same. Shows **Marked as done** when the task is already done. |
| **Reload from disk** | Reads the task again from its file. **⌘⇧R** does the same in the full editor. |
| **Archive** | Moves the task to the [archive](/tasks/archive/). If the task has images, choose **Delete images** or **Keep images**, then click **Archive**. |
| **Delete** | Asks you to confirm, then deletes the task and its images. Click **Delete Permanently**. This can't be undone. |

## Saving

- The title and description wait for **Save** or **⌘S**.
- Everything else saves as soon as you change it: stage, type, tags, assignees, goal, linked tasks, attachments and status.
- A tab with unsaved changes shows a dot. If you close it, Neova asks whether to save or discard.

### When an agent writes to the task

While the full editor has unsaved changes, agents can't write to the task. If an agent tries, a message says that the agent is waiting to write to this task. Click **Save & release** to save your changes and let the agent continue.

If the task's description changes on disk while you are editing it, a bar appears: **This task was changed outside the editor.** Click **Load their version** to replace your edits with the new text, or **Keep my edits** to keep working on yours.

When an agent is reading or writing the task, a banner at the top shows it.

## How to write a task

1. Press **⌘T**, or click **+** (**Add task**) on a column in [Boards](/tasks/boards/).
2. Replace **New Task** with a title.
3. Describe the work in the description. Use **/** for headings and lists, **@** to link other tasks.
4. Add a type, tags and a goal in the metadata strip.
5. Press **⌘S**.

## How to send a task to an agent with a skill

1. Check that the task is in the right stage under **Agent Actions › Stage**.
2. Under **Stage Actions**, click **▾** next to the skill.
3. Choose **Send to Agent** and pick the agent.

Neova shows the agent's terminal with the prompt sent. To paste the prompt yourself, click the skill name and paste it where you need it.

## How to link two tasks

1. Open **Linked tasks** in the actions rail.
2. Click **Link task**.
3. In **Attach Tasks**, search for the task by title and select it.
4. Click **Attach**.

## How to restore an earlier description

1. Open **History** in the actions rail.
2. Click **View changes** on the version you want.
3. Check the text under **Changes** or **Full version**.
4. Click **Restore this version** and confirm.

## Related

- [Boards](/tasks/boards/): the task panel and the board.
- [Settings › Board](/settings/workflow/#board): stages, task types and tags.
- [Settings › Skills › Actions](/settings/agents/#actions): the actions behind the stage buttons.
- [Replacement fields](/reference/replacement-fields/): fields you can use in descriptions and skill templates.
- [MCP tools](/reference/mcp-tools/#task-management): agents use `get_task`, `update_task`, `add_to_task`, `replace_section_in_task`, `link_task` and `assign_task` to work on tasks.
