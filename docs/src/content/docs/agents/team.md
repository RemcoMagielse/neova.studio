---
title: Team
description: All agents in the project on one board, grouped by what they need from you.
sidebar:
  order: 2
---

Team shows every agent in the project on a board, in a column for what it needs from you: an answer, your attention, nothing because it's working, or work because it's free. You add and start agents here.

Open it from **Sidebar › Agents › Team**, or press **⌘2**.

## Toolbar

| Control | What it does |
|---|---|
| **Search agents** | Filters the board and the Agent Library by name. |
| Sort menu | Orders the cards in each column by **Name** or **Order**. **Order** is the order you set by dragging agents in **Agents › Sessions**. |
| **Add Agent** | Opens the [Agent Editor](/agents/agent-editor/) to create a new agent. |
| Arrow next to **Add Agent** | Opens a menu with **Add agent from catalogue**. When catalogue agents you installed have updates, the item shows the number, for example **Add agent from catalogue (1 update)**. |

## The board

Each running agent has one card, in exactly one column:

| Column | Who is in it | The card's button |
|---|---|---|
| **Waiting for you** | Agents that asked you a question, also while they keep working | **Answer**, on each question |
| **Needs attention** | Agents that ask you to approve something in their terminal, or stopped with an error | **Open terminal** |
| **Working** | Agents that are working and need nothing from you | None |
| **Free** | Running agents that are idle with nothing open | **Assign a task** |

An agent that asked you something is never under **Free**, so you don't hand it more work before you answer. Each column is at least 272 pixels wide. When they don't fit, for example with the chat open, the board scrolls sideways.

Each card shows:

| Part | What it shows or does |
|---|---|
| Avatar | A ring around it shows the status and whether the agent's prompt cache is still warm. |
| Name | A small label shows when the card is another run of the same agent. The pencil (**Edit agent**) shows on hover and opens the Agent Editor. |
| State | For example **working · 34 min** or **waiting on you · 4 min**. |
| Goal and task | The task the agent works on, with its goal above it. Click it to open the task. |
| Questions | One amber row per open question, with how long it has waited and **Answer**. **Answer** opens the same answer window as Activity. |
| Last message | The agent's latest chat message on one line, and how long ago it was. |
| **Up next** | The next task assigned to the agent, if there is one. |
| Context meter | A thin line at the bottom shows how much of the agent's context is used. |

A card has an amber edge on the left when it has something for you. Hover over a card to see **Run another**, which starts another run of the same agent, and **Stop**. Click a card to open the agent's terminal in **Agents › Sessions**. When an agent celebrates a milestone, confetti bursts from its card.

### Not running

Agents that aren't running are listed in one line under the board, after **Not running**, with their avatar and name. Click a name to start the agent. Click the arrow next to it to start it in a goal's folder instead.

## Agent Library

Below the board, under the **Agent Library** line, are the global agents from your library that this project doesn't use yet. Global agents are shared by every project on this Mac.

- Click a card to edit the global agent in the Agent Editor. Saving updates it for every project that uses it.
- Hover over a card to see its full description, start command and when it last changed.
- Click **Add** to add the agent to this project. It moves up to the board.

The section says **Every agent in your library is already in this project.** when there is nothing left to add.

## Add agent from catalogue

The catalogue lists ready-made agents published by Neova. Adding one saves it to your Agent Library and adds it to this project.

The list shows each agent's name, description and version, with one of these on the right:

| Label | Meaning |
|---|---|
| **Install** | Not installed. Opens the agent's details. |
| **Installed** | Already in your library. |
| **Update available** with **Update** | A newer version exists. Opens the update. |
| **Needs a newer Neova** | The agent needs a newer version of Neova Studio. |

The details show the **Start command** and the **Instructions**. Adding an agent does not start it.

If you already have an agent with that name, you choose:

- **Replace mine**: the catalogue version takes over your agent in every project that uses it. Your agent keeps its name. Only offered when your agent is in your Agent Library.
- **Install as new**: under another name. Neova fills in a free one, like "Coach 2", which you can change.

Changes you make to an agent never go back to the catalogue.

An update shows **What changes**. If the start command changes, it shows the old and the new command. Click **Update**, or **Skip this version**. If you changed your copy since you installed it, the buttons are **Update and replace my changes** and **Keep mine**.

## How to add an agent

1. Click **Add Agent**.
2. Fill in the Agent Editor and click **Create Agent**. See [Agent Editor](/agents/agent-editor/).

The new agent shows under **Not running**.

## How to add an agent from the catalogue

1. Click the arrow next to **Add Agent** and choose **Add agent from catalogue**.
2. Click **Install** on an agent.
3. Read the start command and instructions.
4. Click **Install**.

## How to start an agent

1. Find the agent under **Not running**.
2. Click its name.

Neova opens a terminal for the agent, runs its start command and sends its instructions. When goals have their own folder, click the arrow next to the name to start the agent in a goal's folder instead. See [Sessions](/agents/sessions/#how-to-start-an-agent-in-a-goals-folder).

## How to add a global agent to this project

1. Scroll down to **Agent Library**.
2. Click **Add** on the agent.

## Related

- [Agent Editor](/agents/agent-editor/) to change an agent
- [Sessions](/agents/sessions/) to watch and use an agent's terminal
- [Settings › Agents](/settings/agents/#global-agents) for the global agent library
- [MCP tools](/reference/mcp-tools/) agents use for the team, such as `list_active_agents`, `start_agent` and `celebrate`
