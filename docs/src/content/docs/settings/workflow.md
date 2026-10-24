---
title: This project
description: Set up your board's stages, task types and tags, and keep a version history with goal worktrees and Neova Git.
sidebar:
  order: 2
---

The **This project** group in the Settings rail holds two pages: **Board** and **Version history**. They apply to the open project only.

## Board

Open it from **Settings › Board**.

Shape how tasks move through your project and how you label them. The page has three sections: **Stages**, **Task types** and **Tags**.

### Stages

Stages are the columns of your board. Each stage can have **Activities**: [actions](/settings/agents/#actions) that show as one-click buttons on tasks in that stage. A new project starts with the stages Backlog (the default), Prepare, Implement, Verify and Done.

Changes save as soon as you make them. The stages are stored in `.neova/stages.json`, shown at the bottom of the section as **Storage location**.

#### Stage list

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

#### Stage form

**Add Stage** and **Edit stage** open the same form.

| Field | What it does |
|---|---|
| **Stage Name** | The name shown on the board. Each stage needs a unique name. When you rename a stage, its tasks move with it. |
| **Color Theme** | Pick one of ten colours: Blue, Green, Orange, Purple, Pink, Gray, Red, Yellow, Teal, Indigo. |
| **Preview** | Shows the name in the chosen colour. |

#### Activities

Open a stage with its arrow to see its activities. Each activity is an action from [Settings › Skills › Actions](/settings/agents/#actions). It shows:

- Its display name, and a **Global** or **Project** badge for where the action comes from.
- The action's name and description.
- A drag handle to reorder, **Edit activity** to change its display name, and **Delete activity** to remove it from the stage.

The activities of a task's stage show in the task under **Agent Actions › Stage Actions**, and in the right-click menu of the task card. With more than five, the right-click menu groups them under **Agent Prompts**.

#### How to add a stage

1. Click **Add Stage**.
2. Type a **Stage Name** and pick a **Color Theme**.
3. Click **Add Stage**. The stage is added at the bottom of the list.
4. Drag it to the place you want.

#### How to change the default stage

Click the check mark (**Set as default**) on the stage. The **Default** badge moves to that stage.

#### How to delete a stage

1. Click the bin (**Delete stage**) on the stage.
2. If the stage has active tasks, the dialog tells you how many. These tasks become unassigned.
3. Click **Delete**.

You cannot delete the last remaining stage.

#### How to add an action to a stage

1. Click the arrow on the stage to open its **Activities**.
2. Click **Add Activity**. The **Add an action** dialog opens.
3. Search with **Search actions...** or scroll the lists **Global actions** and **Project actions**. Only actions that are turned on are listed. Actions already in the stage are greyed out.
4. Click an action. It is added to the stage.
5. To show a different name on tasks, click **Edit activity**, type a **Display Name** and click **Save**. Leave it empty to use the action's name.

### Task types

This section lists every type in use across the project, with the number of tasks that carry it. Types have no separate list to maintain: a type exists once you set it on a task.

When no task has a type, the section shows **No task types yet**.

| Button | What it does |
|---|---|
| **Rename** (pencil) | Edit the name inline. Press Return or click the check mark to save, Esc or the cross to cancel. Every task with the type is updated. If the new name is an existing type, the two are merged. |
| **Delete** (bin) | After you confirm, clears the type from every task that carries it. The type no longer exists. |

### Tags

This section lists every tag used across your tasks, with its colour and the number of tasks that use it. A tag is created when you add it to a task. When there are none, the section shows **No tags found**.

Tag colours are stored in `.neova/tag-colors.json`, shown at the bottom of the section as **Storage location**.

| Part | What it does |
|---|---|
| Colour swatch (**Change color**) | Opens the colour picker: a grid of preset colours, a system colour picker, and a field for a hex code such as `#000000`. |
| Tag name | The tag in its colour. |
| Task count | How many tasks use the tag. |
| **Rename tag** (pencil) | Edit the name inline. Names are saved in lowercase. Press Return to save or Esc to cancel. Every task with the tag is updated. You cannot rename a tag to a name that already exists. |
| **Delete tag** (bin) | After you confirm, removes the tag from every task that uses it. |

## Version history

Open it from **Settings › Version history**.

Keep work on different goals apart, and keep a history of your tasks, wiki pages and other project data. The page has two parts: **Goal worktrees** and **Neova Git**. To browse the history itself, use [Tools › Git](/tools/git/).

### Goal worktrees

| Setting | What it does |
|---|---|
| **Work on goals in separate folders** | When on, each goal you open work on gets its own folder and branch, so agents on different goals never touch each other's files. Tasks that are not on a goal stay on the branch you have checked out. Off by default. |
| **Where the folders live** | Shown when on. The folders are next to the project, outside it, in `../<project>.worktrees/`. Hover to see the full path. |
| **How it works** | Shown when on. Opens five steps, from opening work on a goal to closing it. |

The switch is unavailable when no project is open, when the project is not a git repository, when it sits inside a larger repository, or when git is not installed. The page then says which.

The five steps:

1. **Open work** on a goal in **Project › Goals**. It gets its own folder and a fresh branch from what your main folder has checked out.
2. **Put an agent there**: on an offline agent's page, use **Start Terminal ▾** and pick the goal. A running Claude agent can also switch itself when it picks up a task on that goal.
3. **Update from main** when main has moved on. If files clash, nothing changes and the goal's agent resolves them.
4. **Merge into main**, one goal at a time. Your own unsaved edits in the main folder are never touched. **Push to GitHub** to back up or share the branch.
5. **Close work** to remove the folder. This is refused while there is uncommitted work or an agent inside. The branch is kept if it has commits that main does not.

Every goal folder is listed under **Tools › Git › Worktrees**. See [Goals](/project/goals/) and [Git](/tools/git/).

### Neova Git repository

Neova Git keeps a version history of your project data. It commits your tasks, wiki pages, agent notes, goals and skills to a git repository inside `.neova/`, on a branch named `neova`. Everything stays on this computer. Your code repository is not touched.

| State | What you see |
|---|---|
| Not set up | **Set up Neova Git**. |
| Project files still tracked by your code repository | How many files, and the commands to run in the project folder to untrack them. Neova notices when you have run them. |
| Git not installed | **Git is not installed on this computer**. |
| Set up | A **Set up** badge, the **Repository** row (`.neova/.git`, branch `neova`) and **Open in Tools › Git**. |

### How to set up Neova Git

1. Click **Set up Neova Git**. A dialog lists what Neova will do.
2. Click **Set up**. This usually takes a few seconds.
3. When it says **Neova Git is set up**, click **Done**. From now on, every change is recorded automatically.

If set-up does not finish, Neova undoes what it had created and shows what went wrong. Click **Try again**.

### Back up to GitHub

Shown once Neova Git is set up.

| Row | What it shows |
|---|---|
| Backup status | **Backing up to** *remote*, or **Not backed up**. Backing up pushes the history to the `neova` branch. Anyone who can read that repository can read your tasks, wiki pages and agent notebooks. |
| **This computer’s name** | The name shown next to each change, so you can tell your machines apart. Click **Change**, type a name and click **Save**. |

### What gets backed up

Tick the folders to include. All are ticked by default.

- `tasks/`
- `wiki/`
- `agents/ (incl. notebooks)`
- `goals/ · skills/`
- `snippets/`

These are never included: `logs/ · workspace/` (runtime state), `connectors/` (personal and infrastructure details), `editor-state.json` (specific to this computer) and `images/`.

## Related

- [Boards](/tasks/boards/)
- [Task editor](/tasks/task-editor/)
- [Actions](/settings/agents/#actions)
- [Git](/tools/git/)
- [Goals](/project/goals/)
- [The .neova folder](/reference/neova-folder/)
- [MCP tools](/reference/mcp-tools/) such as `list_stages`, `move_to_stage` and `get_tags`
