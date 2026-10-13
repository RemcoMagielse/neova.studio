---
title: Team
description: All agents in the project at a glance, with their status, tasks and live terminal output.
sidebar:
  order: 2
---

Team shows every agent in the project as a tile, with its status, its tasks and the latest output of its terminal. You add and start agents here.

Open it from **Sidebar › Agents › Team**, or press **⌘2**.

## Toolbar

| Control | What it does |
|---|---|
| **Search agents** | Filters the tiles and the Agent Library by name. |
| Sort menu | Orders the tiles by **Status**, **Name** or **Order**. **Status** puts agents that need attention first, then agents with an error, then working, then idle. **Order** is the order you set by dragging agents in **Agents › Sessions**. |
| **Add Agent** | Opens the [Agent Editor](/agents/agent-editor/) to create a new agent. |
| Arrow next to **Add Agent** | Opens a menu with **Add agent from catalogue**. When catalogue agents you installed have updates, the item shows the number, for example **Add agent from catalogue (1 update)**. |

## Agent tiles

Running agents show first, in large tiles. Agents that aren't running show below the **Offline** line, in smaller tiles.

Each tile shows:

| Part | What it shows or does |
|---|---|
| Avatar | Click it to open the agent in the Agent Editor. A ring around it shows the status. |
| Name | A green link icon shows when the terminal is linked to the agent's MCP connection. A small label shows when the tile is another run of the same agent. |
| Pencil (**Edit agent**) | Shows on hover. Opens the Agent Editor. |
| Description | The agent's short description, or **No description**. |
| **From catalogue · v1.0.0** | Shows when the agent came from the catalogue. **Update available** opens the update. |
| Status badge | **Working**, **Needs Attention**, **Idle** or **Error**. Offline agents show a **Start** button instead. |
| Context meter | How much of the agent's context is used. |
| **User typing** | Shows when you have typed text in the agent's terminal that you haven't sent yet. |
| **Current tasks** | Tasks assigned to the agent. A task the agent is working on now is highlighted and listed first. Click a task to open it in a new tab. **No tasks assigned** when there are none. |
| Terminal preview | The last lines of the terminal and how long the agent has had its current status. Hover over it to see **Open in Sessions**. |

The tile border is orange when the agent needs attention or has an error, and yellow while it works. When the agent posts in **Chat**, its message shows in a speech bubble next to the avatar for 10 seconds. When an agent celebrates a milestone, confetti bursts from its tile.

Click a tile to open the agent's terminal in **Agents › Sessions**.

## Agent Library

Below the tiles, under the **Agent Library** line, are the global agents from your library that this project doesn't use yet. Global agents are shared by every project on this Mac.

- Click a card to edit the global agent in the Agent Editor. Saving updates it for every project that uses it.
- Hover over a card to see its full description, start command and when it last changed.
- Click **Add** to add the agent to this project. It moves up to the tiles.

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

If an agent with the same name already exists, Neova offers **Install as "…"** with a new name. Nothing is overwritten.

An update shows **What changes**. If the start command changes, it shows the old and the new command. Click **Update**, or **Skip this version**. If you changed your copy since you installed it, the buttons are **Update and replace my changes** and **Keep mine**.

## How to add an agent

1. Click **Add Agent**.
2. Fill in the Agent Editor and click **Create Agent**. See [Agent Editor](/agents/agent-editor/).

The new agent shows below the **Offline** line.

## How to add an agent from the catalogue

1. Click the arrow next to **Add Agent** and choose **Add agent from catalogue**.
2. Click **Install** on an agent.
3. Read the start command and instructions.
4. Click **Install**.

## How to start an agent

1. Find the agent below the **Offline** line.
2. Click **Start** on its tile.

Neova opens a terminal for the agent, runs its start command and sends its instructions. When goals have their own folder, click the arrow next to **Start** to start the agent in a goal's folder instead. See [Sessions](/agents/sessions/#how-to-start-an-agent-in-a-goals-folder).

## How to add a global agent to this project

1. Scroll down to **Agent Library**.
2. Click **Add** on the agent.

## Related

- [Agent Editor](/agents/agent-editor/) to change an agent
- [Sessions](/agents/sessions/) to watch and use an agent's terminal
- [Settings › Agents](/settings/agents/#global-agents) for the global agent library
- [MCP tools](/reference/mcp-tools/) agents use for the team, such as `list_active_agents`, `start_agent` and `celebrate`
