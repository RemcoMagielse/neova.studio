---
title: Agent Editor
description: Create an agent or change its name, start command, skills and wiki pages, instructions, events, backlog and avatar.
sidebar:
  order: 3
---

The Agent Editor is where you create an agent and change everything about it: its identity, its instructions, the events it hears about, and its backlog. It opens as a full page in its own tab.

The Agent Editor has no sidebar entry. Open it from an agent:

- **Agents › Team**: click an agent's avatar, or the pencil (**Edit agent**) on its tile. Click **Add Agent** to create a new agent.
- **Agents › Team › Agent Library**: click a card to edit a global agent that this project doesn't use.
- **Agents › Sessions**: click the agent's name above its terminal and choose **Edit agent…**. When the agent isn't running, click **Edit Agent**. Click **Add Agent** below the agent list to create one.
- **Agents › Chat**: hover over an agent's name and click **Agent Settings**.

## Layout

On the left is the agent list, as in **Agents › Sessions**. Click an agent to open its terminal in Sessions.

The header shows the agent's avatar and name, with **Agents** above it (**Agent Library** for a library agent). It has these buttons:

| Button | What it does |
|---|---|
| Back arrow | Goes back to the page you came from. |
| **Cancel** | Goes back without saving. |
| **Create Agent** / **Save Changes** | Saves and goes back. Disabled while the name is empty or already taken. |

If you leave with unsaved changes, Neova asks **Discard changes?** Choose **Keep editing** or **Discard**.

Below the header are the tabs:

| Tab | Shows when |
|---|---|
| **General** | Always. |
| **Events** | Always. Shows the number of events, or **(none)**. |
| **Backlog** | When you edit an existing agent. Shows the number of items. |
| **Notebook** | When you edit an existing agent. |

## General

### Banners

- When you create an agent: **Reuse a global agent** with **Add from global library**. It lists the agents you made global in other projects. Choose one to add it to this project.
- When the agent is global: a notice that edits update the agent across all projects that use it.
- When you edit a library agent: a notice that it is not in this project and that saving updates it for every project that uses it.

### Identity

| Field | What it does |
|---|---|
| Avatar | Click it to choose an avatar. Tabs: **Standard** (illustrated avatars), **Icons** (an icon and a **Color**) and **Upload** (JPEG, PNG or WebP, max 2MB; for existing agents only). **Reset to Default** removes your choice. |
| **Agent Name** | Required. Must be unique in the project. |
| **Description** | Up to 100 characters. Shows on hover cards and tiles. |
| **Start command** | The command Neova runs when the agent's terminal starts, for example `claude`. |
| **Detection profile** | How Neova reads the agent's terminal output to tell whether it is working, idle or needs you. **Open profile in global Settings** goes to **Settings › Agents**. Not shown for library agents. |

### Voice

How the agent sounds when it speaks to you.

| Field | What it does |
|---|---|
| **Can send voice messages** | Lets the agent send short spoken updates in the chat. Turning it on downloads the voice model if it isn't there yet. |
| **Voice** | Choose one of ten voices, for example **Nova** or **Atlas**. Click the play button to hear it. The agent uses the same voice in every project, and for **Read aloud**. |
| **Language** | **English** or **Dutch**. |

### Skills & Knowledge

What the agent loads when it starts, in two groups: **Skills** and **Wiki pages**.

- **Neova Studio** is always the first skill. It shows **Always** and can't be removed.
- Click **Add** to search skills and wiki pages, and click one to add it. Click **×** to remove it.
- A new agent has the **Agent Code of Conduct** wiki page already added, when the project has that page.
- A global agent keeps its picks in every project. A wiki page that a project doesn't have shows **Not in this project** and is skipped there.

### Tool servers

The tool (MCP) servers the agent starts with, such as Playwright, Penpot or shadcn, each with a switch. Every agent starts its own copy of every server, so switching off the ones a role doesn't need makes it start faster and use less memory.

- Everything is on by default. Switch one off and the agent starts without it from its next start.
- Each server shows where it comes from: **This project**, **All projects** (added for every project) or **Plugin**.
- Neova itself is always on and not listed.
- A global agent keeps its switches in every project. A server that is off but that a project doesn't have shows **Not in this project**, so you can switch it back on.
- Works for agents started with `claude`. A start command that doesn't begin with `claude` starts with every server.

### Instructions

What the agent does, in a Markdown editor. You only write its role: when the agent starts, Neova puts a short start-up section in front of it. That section has the agent register under its name, load Neova Studio and the skills you picked, read the wiki pages you picked, and say so if it can't reach Neova Studio. Older agents that still have a Preparation section keep working; doing the steps twice does no harm.

A Claude Code agent starts with its instructions built in, and its first message asks it to follow them. Other agents get the instructions sent to their terminal when they start.

Click **Insert** to add a reference to a standard, skill, MCP tool or snippet at the cursor.

### Make global

Shows for agents that belong only to this project. Click **Make global** and confirm. The agent's identity (name, description, instructions, start command, avatar and default events) moves to your global agent library and becomes available in every project. The notebook, backlog, detection profile and terminal link stay with this project.

### Updated in another project

When you change a global agent in one project, the other projects that use it keep running their own version until you choose. The agent shows **Updated elsewhere** on Team and in Sessions, and the editor shows **Review changes**. It lists what changed, old next to new, with a changed start command on its own.

- **Take the update**: this project runs the new version.
- **Keep mine here**: this project keeps its version as an agent of its own, which no longer follows the global agent.

You choose before you can edit the agent in that project, so you never overwrite a change made elsewhere.

### Delete agent

Click **Delete Agent** and confirm with **Delete**. This removes the agent and its configuration from the project. It cannot be undone.

For a library agent the section is **Remove from library**. It removes the agent from your library on this Mac. Projects that already use it keep their own copy, but it no longer receives updates.

## Events

The events Neova types into the agent's terminal. Check an event to turn it on. With no events checked, a warning says the agent won't receive any notifications, and the agent shows a muted bell in the Sessions list.

| Section | Event | Sent when | On for new agents |
|---|---|---|---|
| **Chat** | **User messages** | You send a message in Chat. | Yes |
| | **Agent messages** | Another agent sends a message in Chat. | Yes |
| | **Mentions** | The agent is @mentioned. Included when either of the two above is on. | Yes |
| **Tasks** | **Task assigned** | The agent is added to a task. | Yes |
| | **Task unassigned** | The agent is removed from a task. | Yes |
| **Stages** | **Task entered stage** | A task moves into one of the chosen stages. Click **All stages** or a stage name to add it. Click **×** on a chip to remove it. | No |
| **Agent Workspace** | **Question answered** | You answer a question the agent asked. | Yes |
| | **Backlog reminder** | The agent is idle and has items waiting in its backlog. | Yes |
| | **Scheduled actions** | A schedule runs on this agent. Turn it off and the agent skips its schedules. | Yes |
| | **Context alerts** | The agent's context use passes a level set in **Settings › Agents**. | Yes |
| | **Keep cache warm** | The agent is idle and its prompt cache is about to go cold. Only when **Keep cache warm** is on in **Settings › Agents**. | Yes |

The text of each message is set in **Settings › Agents › Event Messages**.

## Backlog

The agent's to-do list. The top item has the highest priority.

- Drag an item by its handle to reorder.
- Click an item's text to edit it. **Enter** saves, **Esc** cancels.
- A label shows who added the item: **Agent** or **User**.
- Click **×** (**Remove item**) to remove it.
- Click **Add item** to add one. With an empty backlog, click **Add first item**.

Changes are saved when you click **Save Changes**.

## Notebook

Notes the agent writes for itself. You can read them here but not edit them. With no notes, it says **No notes yet. The agent can write notes here.**

## How to create an agent

1. Go to **Agents › Team** and click **Add Agent**.
2. Type an **Agent Name**, for example `Software Engineer`.
3. Type a **Start command**, for example `claude`.
4. Under **Skills & Knowledge**, click **Add** to pick the skills and wiki pages it should load.
5. Write its role under **Instructions**.
6. Optionally choose an avatar, a **Detection profile** and the events on the **Events** tab.
7. Click **Create Agent**.

## How to change an agent's instructions

1. On **Agents › Team**, click the agent's avatar.
2. Edit the text under **Instructions**.
3. Click **Save Changes**.

A running agent gets the new instructions when you redeploy them. See [Sessions](/agents/sessions/#terminal-menu).

## How to make an agent global

1. Open the agent in the Agent Editor.
2. On **General**, click **Make global**.
3. Click **Make global** in the confirmation.

To use it in another project, open that project and click **Add** on the agent under **Agents › Team › Agent Library**.

## How to let an agent create or change agents

Ask any agent in chat, for example *"Create a Release Manager that cuts our releases"* or *"Give the Reviewer a shorter description"*. The agent asks you first and shows what it will create or change. It can set an agent's description, instructions, skills and wiki pages, start command and events. Renaming and deleting stay with you, here in the Agent Editor.

To have every new agent set up your way, write your standard setup on the wiki page **Agent Template** (under **Standards**). Agents that create an agent start from that page and fill in the role. Without the page, they use Neova's standard setup.

When an agent changes a global agent, your other projects see **Updated elsewhere** and you review the change there.

## How to choose which events an agent receives

1. Open the agent and click **Events**.
2. Check or uncheck the events.
3. Under **Stages**, click the stages the agent should hear about.
4. Click **Save Changes**.

## Related

- [Team](/agents/team/) and [Sessions](/agents/sessions/)
- [Settings › Agents](/settings/agents/#agents) for global agents, event messages and detection profiles
- [MCP tools](/reference/mcp-tools/) agents use for their own backlog and notebook: `get_backlog`, `add_backlog_item`, `get_notebook`, `append_to_notebook` and more
