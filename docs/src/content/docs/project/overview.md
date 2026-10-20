---
title: Overview
description: The project description, search, the Assistant, running agents, recent work, goals, usage limits and links on one page.
sidebar:
  order: 1
---

Overview shows what is going on in the project on one page: what the project is, which agents are running, what changed last, and the links you use most.

Open it from **Sidebar › Project › Overview**.

The page shows these parts, from top to bottom. Parts with nothing to show stay hidden.

## Header

The header shows the project name. Click **Sync** to read the project folder and the `.neova/` folder from disk again. Your agents and terminals keep running. **File › Sync Project** (⌘⇧R) does the same.

## Project description

The **Project description** card shows the start of the project description. Click the text or **Show more** to read all of it, and **Show less** to fold it again.

The description is the file `.neova/project.md`. Agents read it when they ask Neova for project info.

To edit it, hover over the card and click **Edit**. If the project has no description yet, the card says **Describe your project**. Click it to start one.

The **Project Description** window opens with a text editor:

| Control | What it does |
|---|---|
| **Save** | Saves the description to `.neova/project.md`. |
| **Close** / **Discard** | Closes the window. With unsaved changes the button says **Discard**, and Neova asks before throwing the changes away. |
| **Unsaved changes** | Shows when you have changed the text since the last save. |

## Search

The search box searches tasks, agents, wiki pages, goals, links, snippets and agent templates.

When you type, the rest of the page makes room for the results:

- The number of results shows at the right of the box. Click **×** to clear the search.
- Chips filter the results by type: **All**, **Tasks**, **Agents**, **Wiki**, **Goals**, **Links**, **Snippets** and **Agent Templates**. Each chip shows its count. Only types with results get a chip.
- The first nine results show as cards. Click **Show all results ›** to see the rest.
- **↑ ↓** moves through the results and **↵** opens the selected one. **Esc** clears the search.
- Click a result to open it. ⌘-click opens it in a new tab.

A result opens where it lives: a task in the task editor, a wiki page in the Wiki, a link in your browser. An agent result opens its terminal.

⌘K opens the search window from here too. See [Find your way around](/getting-started/find-your-way-around/#search).

## Assistant card

The **Assistant** card is the same conversation as the Assistant in the status bar. The header shows the Assistant's status.

- If the Assistant isn't running, click **Start assistant**.
- When it runs, the card shows the last question and answer, with a box to type a new one.
- Click **Show all** to see the whole conversation in the card. **Show less** folds it again.
- Click the **Enlarge chat** button (⌘J) to open the conversation in a large window.

See [Assistant](/agents/assistant/).

## Agents

The agents strip shows the agents that are running. Its label reads **Agents · 2 online of 5**, for example. The strip is hidden when no agent is running.

Each card shows:

- The agent's avatar, name and status: **Working**, **Needs Attention**, **Idle** or **Error**.
- The task the agent is on. Below it, **assigned, not picked up** when the agent has the task but hasn't started it, or **+ 2 more assigned** when it has more tasks.
- **nothing assigned** when the agent has no tasks.

Click a card to open the agent's terminal in **Agents › Sessions**. **+ Start an agent** and **See the team ›** both go to **Agents › Team**.

When there are more cards than fit, hover over the strip and click the arrow at the edge to scroll. With a card selected, the arrow keys move between cards and **↵** opens one.

## Recent activity

**Recent activity · what moved last** shows the eight tasks that changed most recently, newest first. Archived tasks are left out. A change by an agent counts too.

Each card shows the task and its stage. Click a card to open the task in the task editor. ⌘-click opens it in a new tab. **Open the board ›** goes to **Tasks › Boards**.

## Goals

The goals strip shows up to four goals with the status **Not started**: the ones whose tasks changed most recently. Its label reads **Goals · 4 most active of 9**, for example.

Each card shows the goal's title, a progress bar, the number of tasks and the percentage done. Click a card to open the goal in **Project › Goals**. **See all goals ›** opens **Project › Goals**.

See [Goals](/project/goals/) for how progress is counted.

## Claude usage limits

The **Claude usage limits** card shows how much of your Claude plan you have used. Neova reads this from the Claude Code login on this computer. The card is hidden when Claude Code isn't logged in.

- The badge in the header shows your plan.
- Each limit has a bar, the percentage used, and when it resets. **Current session** comes first, then the **Weekly limits**.
- A bar turns amber when Claude flags the limit as a warning.
- The footer shows when the numbers were last read. Click the **Refresh usage** button to read them again. Neova also reads them every five minutes while Overview is on screen.

If the login has expired, the card says **Your Claude login has expired. Open Claude Code to refresh it.**

## Links

**Links** holds the web addresses you use for this project, such as the staging site, the API docs or the design file. Links are saved with the project in `.neova/links.json`, so everyone with the repository sees them.

Links show as tiles under their group name. Groups show in the order of their first link. Links without a group show last, under **Ungrouped**.

Each tile shows the icon, title, description (up to two lines) and website. A link can also have a **badge**, a short label of up to 16 characters such as *New* or *Staging*, shown on the tile's top-right corner. Hover over a tile to see the full address. Click a tile to open the link in your browser.

Hover over a tile and click **⋯** for these options:

| Option | What it does |
|---|---|
| **Edit** | Opens the link in the **Edit link** window. |
| **Copy URL** | Copies the address. |
| **Remove** | Removes the link after you confirm. An uploaded icon stays in **Project › Images**. |

### Link fields

**Add link** and **Edit** open a window with these fields:

| Field | What to enter |
|---|---|
| **Title** | The name on the tile. If you leave it empty, the address is used. |
| **Description** | Optional. Shows on the tile and is found by search. |
| **Address** | The web address. Neova adds `https://` if you leave it off. |
| **Group** | Pick a group or type a new name and choose **Create "…"**. Choose **Ungrouped** to take the link out of its group. |
| **Icon** | Paste an image address, or click **Upload…** to pick a PNG, JPEG or WebP file. Click **×** to remove the icon. Without an icon, the tile shows a globe. |

## Everything else

The line at the bottom of the page shows counts, each linking to its page:

| Item | Shows | Click goes to |
|---|---|---|
| **Wiki** | The number of wiki pages | Project › Wiki |
| **Snippets** | The number of snippets | Tools › Snippets |
| **Files** | The number of starred files | Project › Files |
| **Team** | The number of agents | Agents › Team |
| **Git** | The current branch and the number of uncommitted files | Tools › Git |

**Git** only shows when the project is a git repository. Its dot is green when everything is committed and amber when there are uncommitted files.

## How to describe your project

1. Hover over the **Project description** card and click **Edit**. In a new project, click **Describe your project**.
2. Write what the project is, the tech stack, the architecture and the conventions agents should follow. Markdown formatting works.
3. Click **Save**.

## How to add a link

1. In the **Links** card, click **Add link**.
2. Type an **Address**, for example `staging.example.com`.
3. Fill in a **Title** and, if you like, a **Description**.
4. Under **Group**, pick a group or type a new name and choose **Create "…"**.
5. Add an **Icon**: paste an image address or click **Upload…**.
6. Click **Add link**.

## How to group links

1. Hover over a link tile, click **⋯** and choose **Edit**.
2. Under **Group**, type the group name. Choose an existing group, or **Create "…"** for a new one.
3. Click **Save**.

To rename a group, give each of its links the new group name. A group disappears when no link uses it.

## Related

- [Assistant](/agents/assistant/) and [Settings › Agents](/settings/agents/) to set up the Assistant.
- [Goals](/project/goals/), [Wiki](/project/wiki/) and [Files](/project/files/).
- MCP tools: agents read the project description with `get_project_info` and the links with `list_links`. See [MCP tools](/reference/mcp-tools/).
