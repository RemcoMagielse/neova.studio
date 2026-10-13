---
title: Git
description: Browse the commit history of your code and of Neova's own project data, and follow work on goal branches.
sidebar:
  order: 8
---

Git shows the history of two repositories: your project's code, and the Neova repository that versions your tasks, wiki pages, agent notes, goals and skills. It also lists the folders where agents work on goals. The page reads history. It does not check out branches or change your code repository.

Open it from **Sidebar › Tools › Git**.

## Header and tabs

The subtitle sums up the open tab. **Refresh** reads the repository again. The page also refreshes each time you open it.

| Tab | Shows |
|---|---|
| **Project** | Your code repository. The subtitle shows the number of branches, commits and unpushed commits. |
| **Neova** | The Neova repository in `.neova/`, on the branch `neova`. The subtitle shows the number of commits and whether the history is synced or on this machine only. |
| **Worktrees** | The folders where goals have open work, with a count. This tab appears when **Work on goals in separate folders** is on in **Settings › Git**, or when a goal folder exists. |

## Repository view

The **Project** and **Neova** tabs use the same layout: branches and working tree on the left, the commit graph in the middle, commit details on the right. In a narrow pane, the commit details replace the graph. Click **All commits** to go back.

### Branches

**Branches** lists the local branches. The checked-out branch is bold and has a **HEAD** badge. ↑ and ↓ show how many commits the branch is ahead of or behind its remote.

Click a branch to highlight its line in the graph. The other lines fade and the graph scrolls to the branch's latest commit. Click the branch again to clear the highlight.

### Working tree

**Working tree** lists files that are not committed, under **Staged**, **Changed** and **Untracked**. Each file has a letter: **A** added, **M** modified, **D** deleted, **R** renamed, **?** untracked. When there is nothing to commit, it says **Clean — nothing to commit**.

### Commit graph

Each row is one commit, with a coloured line per branch. A row shows:

- Labels for branches, remote branches and tags that point at the commit. The checked-out branch label is filled.
- The commit subject.
- An **unpushed** badge and a hollow dot for commits that are not on the remote.
- The short hash, the author and how long ago it was committed.

The graph shows 50 commits. Click **Load more** at the bottom for the next 50.

### Commit details

Click a commit to see its details:

| Field | Shows |
|---|---|
| **Commit** | The short hash. When the repository has a remote, click it to open the commit in your browser. |
| **Author** | Name and email. |
| **Date** | When it was committed. |
| **Parent** | The parent commit or commits. |
| **Message** | The full commit message. |
| **Files changed** | Each file with lines added and removed. Binary files show **bin**. |

## How to find a commit on a branch

1. Open the **Project** tab.
2. Under **Branches**, click the branch.
3. Click a commit on the highlighted line to see its details.

## Neova Git

Neova Git keeps a version history of your project data in its own repository, inside `.neova/`. It does not touch your code repository: no new files, no commits, no branch changes. Neova hides `.neova` from your code repository with a local entry in `.git/info/exclude`.

Once it is set up, Neova commits changes by itself. A few seconds after files under `.neova/` stop changing, Neova records them as one commit. The subject names what changed, for example `neova: 3 tasks, 1 wiki page`. Runtime files such as logs and workspace state are not committed.

When Neova Git is not set up, the **Neova** tab shows **Neova Git is not set up for this project** with a **Set up Neova Git** button. It shows a warning instead when:

- Project files under `.neova/` are still tracked by your code repository. The tab shows how many and the commands to run in the project folder to untrack them. Nothing is deleted from disk. Neova notices when it's done and offers set-up.
- `.neova` belongs to another git repository. Set-up stays unavailable until you move it out by hand.

## How to set up Neova Git

1. Open the **Neova** tab.
2. Click **Set up Neova Git**.
3. Read **What happens**. It lists each step and the command it runs:
   - **Create the repository**: `git init -b neova .neova`
   - **Write the Neova-managed ignore rules**: `.neova/.gitignore`
   - **Record the first version of your data**: `git commit`
   - **Hide .neova from your code repository**: `.git/info/exclude`
4. Click **Set up**. Each step shows its progress.
5. When **Neova Git is set up** appears, click **Done**.

If set-up fails, Neova undoes the parts it already created and shows what went wrong. Click **Try again** when it is offered.

You can also start set-up from **Settings › Git**.

## Neova Git settings

**Settings › Git** has these cards for Neova Git:

| Card | What it shows |
|---|---|
| **Neova Git repository** | Whether Neova Git is set up, and **Open in Tools › Git**. |
| **Back up to GitHub** | Whether the history is pushed to a remote (**Backing up to …** or **Not backed up**), and **This computer’s name**, which is shown next to each change. Click **Change** to rename it. |
| **What gets backed up** | Checkboxes for `tasks/`, `wiki/`, `agents/ (incl. notebooks)`, `goals/ · skills/` and `snippets/`, and the folders that are never included. |

## Worktrees

When goal worktrees are on, each goal you open work on gets its own folder next to the project and its own branch. The **Worktrees** tab lists every folder:

| Row | Shows and offers |
|---|---|
| **Your main folder** | The **MAIN** folder and branch, and how many files are uncommitted. |
| A goal | The goal title, the initials of agents working there, the branch and folder, and **N uncommitted**. Hover over the count to see the files. **Go to goal** opens the goal. |
| **Not on a goal** | A folder whose name matches no goal, with the commits it has that its base doesn't. **Link to goal…** links it to a goal. |
| Folder is gone | A folder that no longer exists but git still lists. **Clean up** removes git's record of it. The branch and its commits stay. |

Every row with a folder has **Copy path** and **Reveal in Finder**. Click the branch chip to copy the branch name.

A goal row also shows a sketch of its branch against the base branch, a line such as **Started from main at a1b2c3d** with whether the branch is on GitHub, and the result of the last action you ran.

## How to bring a goal's work into main

On the goal's row in **Worktrees**, the buttons name the branch the goal started from, usually `main`:

1. If main has moved on, click **Update from main**. This brings main's new commits into the goal branch. Main is not touched.
2. Click **Merge into main**. This moves your local main forward by the goal's commits. Nothing is sent to GitHub.
3. To back up or share the branch, click **Push to GitHub**.

Hover over a button to preview what it will do in the sketch. A greyed-out button shows why it can't run when you hover over it. Click **Show in graph** to open the **Project** tab with the goal's branch highlighted.

Open and close work on a goal from [Goals](/project/goals/).

## Related

- [Settings › Git](/settings/system/#git) turns goal worktrees on and sets up Neova Git.
- [Goals](/project/goals/): open and close work on a goal.
- [MCP tools](/reference/mcp-tools/#goals): `enter_goal` and `request_merge` let agents work in a goal's folder and merge it.
