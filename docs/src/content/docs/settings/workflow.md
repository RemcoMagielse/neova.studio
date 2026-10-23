---
title: Workflow
description: Set up the stages of your board, add actions to stages, and manage task types and tags.
sidebar:
  order: 2
---

The **Workflow** group in the Settings rail holds three pages: **Stages**, **Types** and **Tags**. They set up how tasks move through your project and how you label them. All three apply to the open project.

## Stages

Open it from **Settings › Stages**.

Stages are the columns of your board. Each stage can have **Activities**: [actions](/settings/agents/#actions) that show as one-click buttons on tasks in that stage. A new project starts with the stages Backlog (the default), Prepare, Implement, Verify and Done.

Changes save as soon as you make them. The stages are stored in `.neova/stages.json`, shown at the bottom of the page as **Storage location**.

### Stage list

Each stage shows as a row, in board order:

| Part | What it does |
|---|---|
| Drag handle | Drag to move the stage up or down. The board columns follow this order. |
| Arrow | Opens or closes the stage's **Activities**. |
| Colour dot and name | The stage's colour and name. |
| **Default** badge | Shows on the default stage. New tasks start in this stage. |
| Activity count | How many activities the stage has. |
| **Set as default** (check mark) | Makes this stage the default. Not shown on the stage that is already the default. |
| **Edit stage** (pencil) | Opens the stage form. |
| **Delete stage** (bin) | Deletes the stage after you confirm. |

### Stage form

**Add Stage** and **Edit stage** open the same form.

| Field | What it does |
|---|---|
| **Stage Name** | The name shown on the board. Each stage needs a unique name. When you rename a stage, its tasks move with it. |
| **Color Theme** | Pick one of ten colours: Blue, Green, Orange, Purple, Pink, Gray, Red, Yellow, Teal, Indigo. |
| **Preview** | Shows the name in the chosen colour. |

### Activities

Open a stage with its arrow to see its activities. Each activity is an action from **Settings › Actions**. It shows:

- Its display name, and a **Global** or **Project** badge for where the action comes from.
- The action's name and description.
- A drag handle to reorder, **Edit activity** to change its display name, and **Delete activity** to remove it from the stage.

The activities of a task's stage show in the task under **Agent Actions › Stage Actions**, and in the right-click menu of the task card. With more than five, the right-click menu groups them under **Agent Prompts**.

### How to add a stage

1. Click **Add Stage**.
2. Type a **Stage Name** and pick a **Color Theme**.
3. Click **Add Stage**. The stage is added at the bottom of the list.
4. Drag it to the place you want.

### How to change the default stage

Click the check mark (**Set as default**) on the stage. The **Default** badge moves to that stage.

### How to delete a stage

1. Click the bin (**Delete stage**) on the stage.
2. If the stage has active tasks, the dialog tells you how many. These tasks become unassigned.
3. Click **Delete**.

You cannot delete the last remaining stage.

### How to add an action to a stage

1. Click the arrow on the stage to open its **Activities**.
2. Click **Add Activity**. The **Add an action** dialog opens.
3. Search with **Search actions...** or scroll the lists **Global actions** and **Project actions**. Only actions that are turned on are listed. Actions already in the stage are greyed out.
4. Click an action. It is added to the stage.
5. To show a different name on tasks, click **Edit activity**, type a **Display Name** and click **Save**. Leave it empty to use the action's name.

## Types

Open it from **Settings › Types**.

The page is titled **Task types**. It lists every type in use across the project, with the number of tasks that carry it. Types have no separate list to maintain: a type exists once you set it on a task.

When no task has a type, the page shows **No task types yet**.

| Button | What it does |
|---|---|
| **Rename** (pencil) | Edit the name inline. Press Return or click the check mark to save, Esc or the cross to cancel. Every task with the type is updated. If the new name is an existing type, the two are merged. |
| **Delete** (bin) | After you confirm, clears the type from every task that carries it. The type no longer exists. |

## Tags

Open it from **Settings › Tags**.

The page lists every tag used across your tasks, with its colour and the number of tasks that use it. A tag is created when you add it to a task. When there are none, the page shows **No tags found**.

Tag colours are stored in `.neova/tag-colors.json`, shown at the bottom of the page as **Storage location**.

| Part | What it does |
|---|---|
| Colour swatch (**Change color**) | Opens the colour picker: a grid of preset colours, a system colour picker, and a field for a hex code such as `#000000`. |
| Tag name | The tag in its colour. |
| Task count | How many tasks use the tag. |
| **Rename tag** (pencil) | Edit the name inline. Names are saved in lowercase. Press Return to save or Esc to cancel. Every task with the tag is updated. You cannot rename a tag to a name that already exists. |
| **Delete tag** (bin) | After you confirm, removes the tag from every task that uses it. |

## Related

- [Boards](/tasks/boards/)
- [Task editor](/tasks/task-editor/)
- [Actions](/settings/agents/#actions)
- [MCP tools](/reference/mcp-tools/) such as `list_stages`, `move_to_stage` and `get_tags`
