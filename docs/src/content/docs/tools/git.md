---
title: Git
description: Commit, switch branches, sync and handle pull requests for your code, see which agent works where, and browse the history of Neova's own project data.
sidebar:
  order: 8
---

Git has two tabs. **Project** is a small Git desktop app for your code: see which agent works in which folder and on which branch, commit your changes, switch branches, sync with the server and handle pull requests. **Neova** shows the history of the Neova repository that versions your tasks, wiki pages, agent notes, goals and skills. It only reads.

It works with code on GitHub, GitLab and Forgejo (such as Codeberg). Committing, branches and sync work with any Git server.

Open it from **Sidebar › Tools › Git**. It opens in the [bottom panel](/getting-started/find-your-way-around/#bottom-panel), next to Terminal, so you can see your changes while you work on another page.

## Header and tabs

The subtitle sums up the open tab. **Refresh** reads the repository again. The page also refreshes each time you open it.

On the **Project** tab, when the checked-out branch has a pull request, the header shows **Open PR #**_n_ with the pull request's state. See [Pull requests](#pull-requests).

| Tab | Shows |
|---|---|
| **Project** | Your code repository, as a Git desktop. The subtitle shows the number of branches, commits and unpushed commits. |
| **Neova** | The Neova repository in `.neova/`, on the branch `neova`. The subtitle shows the number of commits and whether the history is synced or on this machine only. |

## Set up Git

When something is missing for everyday Git, **Set up Git** sits at the top of the **Project** tab. It lists only what is missing, with one button per row, and goes away once everything is done:

| Row | Button | What it does |
|---|---|---|
| **Git repository** | **Start one** | Makes the project folder a Git repository, on `main`. |
| **Your name and email** | **Add** | Sets the name and email Git puts on your commits, for every repository on this computer. |
| **Connected to** _server_ | **Connect** | Points the project at its repository online. Paste the address from the **Code** or **Clone** button on GitHub, GitLab or Forgejo. |
| **Access to** _server_ | **Add token** | Gives Neova a token for this repository. See [How to give Neova access](#how-to-give-neova-access-to-your-repository). **Not now** hides this row. |

## How to give Neova access to your repository

The repository you work in has its own connection, separate from the Issues connections in [Settings › Apps](/settings/system/#apps). One token lets Neova pull, push and handle pull requests for this repository only.

1. Under **Set up Git**, click **Add token**.
2. If Neova can't tell which service hosts your code, pick **GitHub**, **GitLab** or **Forgejo**.
3. Click **Open GitHub** (or GitLab, Forgejo). GitHub and GitLab open with the right settings filled in:
   - **GitHub**: pick this repository and keep **Contents** and **Pull requests** on **Read and write**.
   - **GitLab**: keep the scopes **api** and **write_repository**.
   - **Forgejo**: under **Generate new token**, give **repository** Read and write.
4. Copy the token, paste it into Neova and click **Check token**. Neova asks the service what the token may do, and says so in plain words when it can't push or can't see the repository.
5. Click **Done**.

The token is kept in your computer's keychain, never in the project. Without a token, Git uses your computer's own sign-in, such as an SSH key. With a token, Neova uses it for its own pulls and pushes, also when your repository's address is an SSH one.

## Where work happens

The top of the **Project** tab lists every folder work happens in:

- The **Project folder**: your project itself.
- Each **Goal worktree**: a copy of the project for one goal, on its own branch, so agents on different goals don't get in each other's way. Worktrees appear when **Work on goals in separate folders** is on in **Settings › Version history**.

Each row shows the branch **checked out** there, how many commits it is behind (↓) or ahead (↑) of the server, how many files changed, and the agents working in it, with their avatars. Click a row to look at that folder: the toolbar and the views below follow it.

A worktree's **⋯** menu has **Open in Finder**, **Open the goal**, **Update from main**, **Merge into main**, **Push to the server** and **Close worktree…**. A folder that is gone shows **Clean up**; a folder that matches no goal shows **Open in Finder**.

## Toolbar

| Item | What it does |
|---|---|
| **Checked out** _branch_ ▾ | Switch to another branch, or **New branch…**, which starts from the checked-out branch and takes your changes along. A branch in use by another folder says so and can't be picked. |
| **Sync** ↓ ↑ | Pulls what the server has, then pushes your commits. **Up to date** when there is nothing to do; **Push branch** when the branch isn't on the server yet. |
| **Checked** _time_ **ago** | When Neova last asked the server for new commits. Click it to check now. |
| **Changes** · **History** · **Pull requests** | The three views. GitLab calls them **Merge requests**. |

Neova asks the server for new commits when you open Git, and every 5 minutes while Neova is open. It never changes your files when it checks. The status bar's Git item shows ↓ and a number when commits are waiting.

When agents work in the folder, switching branch or throwing away changes first names them and shows their avatars. **Switch anyway** (or **Discard anyway**) goes ahead; the safer route is to give the work a goal with its own folder.

## Changes

**Changes** works like Forgejo's **Files changed**:

- On the left, the changed files grouped by folder, each with a tick box and a letter: **M** changed, **A** new, **D** deleted, **R** renamed, **U** conflict. Click a file to jump to its changes.
- On the right, every file's changes one after another, with old and new line numbers. Each file has a header with the number of lines changed, a small green and red bar and its state. Click the header to fold it. **Collapse all** folds every file.

To commit:

1. Untick the files you want to leave out. All files are ticked to start with.
2. Write what you changed.
3. Click **Commit**. The ▾ menu has **Commit and push**, and **Amend last commit**, which adds the files to your last commit with this message.

Right-click a file and choose **Discard changes…** to throw its changes away. This can't be undone.

## Coming from the server

When the server has commits you don't have yet, **Coming from** _GitHub_ lists them above the view, with who made them and when. Click **Pull** to bring them in, or **Sync**.

When a pull hits a conflict, it stops with **Pull stopped: 2 files conflict** and **Open Terminal**. Sort out the conflict there, or ask an agent. Neova doesn't resolve conflicts itself.

## History

**History** shows the repository view below. The **Neova** tab uses the same layout: branches and working tree on the left, the commit graph in the middle, commit details on the right. In a narrow pane, the commit details replace the graph. Click **All commits** to go back.

### Branches

**Branches** lists the local branches. The checked-out branch is bold and has a **HEAD** badge. ↑ and ↓ show how many commits the branch is ahead of or behind its remote.

Click a branch to highlight its line in the graph. The other lines fade and the graph scrolls to the branch's latest commit. Click the branch again to clear the highlight.

A branch with a pull request shows a chip with its number. See [Pull requests](#pull-requests).

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

You can also start set-up from **Settings › Version history**.

## Neova Git settings

**Settings › Version history** has these cards for Neova Git:

| Card | What it shows |
|---|---|
| **Neova Git repository** | Whether Neova Git is set up, and **Open in Tools › Git**. |
| **Back up to GitHub** | Whether the history is pushed to a remote (**Backing up to …** or **Not backed up**), and **This computer’s name**, which is shown next to each change. Click **Change** to rename it. |
| **What gets backed up** | Checkboxes for `tasks/`, `wiki/`, `agents/ (incl. notebooks)`, `goals/ · skills/` and `snippets/`, and the folders that are never included. |

## How to bring a goal's work into main

In **Where work happens**, open the goal worktree's **⋯** menu:

1. If main has moved on, choose **Update from main**. This brings main's new commits into the goal branch. Main is not touched.
2. Choose **Merge into main**. This moves your local main forward by the goal's commits. Nothing is sent to the server.
3. To back up or share the branch, choose **Push to the server**.

Open and close work on a goal from [Goals](/project/goals/).

## Pull requests

When your code is on GitHub, GitLab or a Forgejo server such as Codeberg, the **Pull requests** view lists every open pull request (merge request on GitLab), the checked-out branch's first, and **History** shows each branch's chip. Click a chip, or **Open PR #**_n_ in the header, to open it in your browser.

With a token (see [Set up Git](#set-up-git)) you can also:

- **Create pull request**: for the checked-out branch, once it is on the server. Give it a title and a description; it goes into `main`.
- **Merge**: on an open pull request whose checks aren't failing or running. Its changes go into `main` on the server; pull afterwards to have them here.

The chip shows the number and an icon for the state:

| State | Icon |
|---|---|
| Open | Green pull request icon |
| Draft | Grey draft icon |
| Merged | Merge icon in your accent colour |
| Closed | Grey closed icon |

A dot after the number shows the checks: green when they pass, yellow while they run, red when one fails. Hover over the chip to see the state, the checks and the title. When a branch has more than one pull request, the chip shows the newest open one, otherwise the most recently updated one.

Neova looks up pull requests when you open the page, when you click **Refresh**, and once a minute while the page is on screen. When the lookup fails, for example offline, the chips stay as they were.

Public repositories work without signing in. For a private repository, Neova uses the repository's own token, or else the token of a GitHub or Forgejo connection in [Settings › Apps](/settings/system/#apps). Without one, there are no chips: the header shows **Pull requests**, which opens the host's list of pull requests for the checked-out branch. An expired token shows the same.

## Related

- [Settings › Version history](/settings/workflow/#version-history) turns goal worktrees on and sets up Neova Git.
- [Settings › Apps](/settings/system/#apps): GitHub and Forgejo Issues connections. Their tokens show pull requests here when the repository has no token of its own.
- [Goals](/project/goals/): open and close work on a goal.
- [MCP tools](/reference/mcp-tools/#goals): `enter_goal` and `request_merge` let agents work in a goal's folder and merge it.
