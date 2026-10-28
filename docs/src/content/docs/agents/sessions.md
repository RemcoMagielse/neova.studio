---
title: Sessions
description: The agent list and each agent's live terminal, where you start, stop and talk to agents.
sidebar:
  order: 4
---

Sessions shows each agent's live terminal. You start and stop agents here, link a terminal to the agent's MCP connection, and type straight into a running session.

Open it from **Sidebar › Agents › Sessions**. Clicking a tile on **Agents › Team** also opens the agent here. An amber dot on **Sessions** in the sidebar means an agent needs your attention.

## Agent list

The list on the left has the heading **Agents**.

| Part | What it does |
|---|---|
| Collapse button | **Collapse to avatars** shrinks the list to avatars. Click it again (**Expand agent rail**) to expand. |
| **Search agents** | Filters the list by name. |
| **Online (n)** | Agents with a running terminal. |
| **Offline (n)** | Agents without a terminal. |
| **Add Agent** | Opens the [Agent Editor](/agents/agent-editor/) to create an agent. |

Each row shows:

- The avatar, with a ring for the status and a green link badge when the terminal is linked to the agent.
- The name. Another run of the same agent shows a small label with the original agent's name.
- For a running agent: the status (**Working**, **Needs Attention**, **Idle** or **Error**), the goal it was started in, and **User typing** when you have unsent text in its terminal.
- A muted bell when the agent receives no events.

Hover over a row for its buttons:

| Button | Shows when | What it does |
|---|---|---|
| **Start** | The agent is offline | Starts the agent. |
| **Run another** | The agent is running | Starts a second run of the same agent and selects it. |
| **Stop** | The agent is running | Stops the agent's terminal. |

Right-click a row for **Start**, **Start on goal**, **Edit** and **Delete**, the same menu as on **Agents › Team**. The Start items are greyed out while the agent runs; a folded list adds **Run another** and **Stop** for a running agent. **Delete** asks first; a global agent only leaves this project and stays in your Agent Library.

Drag a row by its handle to change the order. The order is also used by **Order** sorting on **Agents › Team**. Dragging is off while you search.

## Agent header

Above a running terminal:

| Part | What it shows or does |
|---|---|
| Avatar | The agent's avatar. |
| Name menu | The name of the linked agent with a green dot, or **No agent linked** with a grey dot. Click it for the agent menu. See [Name menu](#name-menu). |
| Status | The agent's status. Click it to open **Session details**, with tabs **Overview**, **Signals**, **Patterns** and **Raw**. |
| Prompt cache | The time left on the prompt cache, for example `42 min left`. |
| Context meter | How much of the context is used, for example `62% context`. From 75% it turns amber. Click it to **Redeploy instructions**. |
| **Recording** | Shows while terminal logs are captured. |
| Backlog button | The number of items in the agent's backlog. Hover to preview, click to open the backlog in a side panel. You can add, edit, remove and reorder items there. |
| Notebook button | Hover to preview, click to read the agent's notebook in a side panel. |
| **Requests** | The agent's open questions and notifications. The badge counts questions. See [Activity](/agents/activity/). |
| **⋮** | The terminal menu. See [Terminal menu](#terminal-menu). |

### Name menu

| Item | What it does |
|---|---|
| **Edit agent…** | Opens the Agent Editor. |
| **Run another** | Starts a second run of this agent. |
| **Start in goal** / **Run another in goal** | Lists goals that have their own folder. Starts the agent, or another run, in that goal's folder. |
| **Available Agents** | MCP agents that are connected but not linked. Click one to link it to this terminal. |
| **Unlink agent** | Removes the link. |

When nothing is connected and nothing is linked, the menu says **No agents connected**.

### Terminal menu

| Item | What it does |
|---|---|
| **Open conversation** | Opens the agent's conversation in **Agents › Agent Insights**. Shows when Neova has one. |
| **Deploy instructions** | Sends the agent's instructions to the terminal. |
| **Redeploy instructions** | Clears the agent's context, then sends its instructions again. |
| **Capture terminal logs** / **Stop capturing logs** | Records the terminal output to a log file. When you stop, Neova shows the file name. |
| **Restart terminal** | Closes the shell and opens a new one. The start command does not run again. |
| **Close terminal** | Stops the session after you confirm with **Close**. |

## Terminal

The agent's live terminal. Click in it to type.

When the agent's backlog has items and the terminal has just started, a banner shows **n items waiting**, **Queued while this terminal was closed.** Click **Resume** to have the agent pull them, **Review** to see them, or **Discard** to clear them. Neova asks you to confirm. The **×** hides the banner until the next session.

## Offline agent

When you select an agent that isn't running, the page shows its overview instead of a terminal:

- The name, description, when it was last active and its start command.
- **Instructions**: the first line, with **Edit instructions**.
- **Events**, **Backlog** and **Notebook** cards, with **Manage**, **Open backlog** and **Open notebook**. Each opens that tab in the Agent Editor.
- **Edit Agent** and **Start Terminal** buttons, and **⋯** with **Delete**.

## How to start an agent

1. Select the agent in the list, or hover over its row.
2. Click **Start Terminal**, or **Start** on the row.

Neova opens a terminal and runs the start command. A Claude Code agent gets its instructions with that command and starts on them straight away. Any other agent gets them sent once it is ready.

## How to start an agent in a goal's folder

When a goal has its own folder, the start buttons get an arrow.

1. Select the offline agent.
2. Click the arrow next to **Start Terminal**. The menu says **Start in a goal’s own folder**.
3. Choose the goal.

The agent's row then shows the goal's title. For a running agent, use **Run another in goal** in the name menu. See [Goals](/project/goals/#own-folder-for-a-goal).

## How to stop or restart an agent

- To stop: hover over the row and click **Stop**, or choose **Close terminal** in the **⋮** menu and confirm.
- To restart the shell: choose **Restart terminal** in the **⋮** menu.
- To give the agent a clean context with its instructions: choose **Redeploy instructions** in the **⋮** menu.

## How to link a terminal to an agent

A linked terminal receives chat messages and events for that agent. When an agent connects, Neova can link it for you. With **Auto-link on name match** on, it links when the names match. Neova can also ask **Link Agent to Terminal?** Click **Yes, link agent**, or **Not now**.

To link by hand:

1. Click the name menu (**No agent linked**) above the terminal.
2. Under **Available Agents**, click the agent.

The dot turns green and the name shows. To undo it, choose **Unlink agent**.

## How to type into a live session

1. Click in the agent's terminal.
2. Type your message and press **Enter**.

While you type, the agent shows **User typing** on Team and in the list. To add an image, drag it onto the terminal (**Drop image here**). Neova saves it and types a reference to it at the cursor, without sending. To add a task, wiki page or other item, press **⌘⇧K**. See [Insert Reference](/getting-started/find-your-way-around/#insert-reference).

## Related

- [Team](/agents/team/) and [Agent Editor](/agents/agent-editor/)
- [Settings › Agents](/settings/agents/#linking) for **Auto-link on name match** and detection profiles
- [Tools › Terminal](/tools/terminal/) for plain shells without an agent
- [MCP tools](/reference/mcp-tools/) agents use for terminals: `start_agent`, `restart_agent` and `terminal_send`
