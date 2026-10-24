---
title: Quick start
description: From an empty folder to an agent working on its first task.
---

This page takes you from opening a project to an agent working on a task. It uses Claude Code as the example agent. Any coding agent that supports MCP works the same way.

## 1. Open the project

Open your project folder and set it up. See [Open a project](/getting-started/open-a-project/).

## 2. Connect your agent to Neova

In the **Welcome to Neova** window:

1. Under **How do you start your coding agent?**, type your agent's command, for example `claude`.
2. Under **Let it reach Neova**, click **Add Neova to .mcp.json**.
3. Click **Done**.

If you skipped the Welcome window, go to **Settings › Agent tools**. Under **Agent Configuration**, choose **Claude Code** and click **Add to Project**.

## 3. Start the Assistant

1. Go to **Project › Overview**.
2. In the **Assistant** card, click **Start assistant**.

The Assistant starts in its own terminal. Ask it anything about the project, or where to find something in Neova.

## 4. Add an agent

1. Go to **Agents › Team**.
2. Click **Add Agent**. The Agent Editor opens.
3. Fill in:
   - **Agent Name**, for example `Software Engineer`.
   - **Start command**, for example `claude`.
   - **Instructions**: the agent's role and how it should work. Neova sends these to the agent when it starts.
4. Click **Create Agent**.

To add a ready-made agent instead, click the arrow next to **Add Agent** and choose **Add agent from catalogue**. Pick an agent and click **Install**.

## 5. Start the agent

On **Agents › Team**, click **Start** on the agent's tile.

Neova opens a terminal for the agent, runs the start command and sends the instructions. Click the tile to watch the terminal in **Agents › Sessions**.

When the agent has connected to Neova, a green link icon appears next to its name. If Claude Code asks whether to use the MCP server from `.mcp.json`, approve **neova**.

## 6. Create a task

1. Go to **Tasks › Boards**.
2. Click **+** (**Add task**) at the top of the **Backlog** column.
3. Type a title and describe the work in the task panel that opens.
4. Press **⌘S** to save.

Press **⌘E** to open the task in the full editor.

## 7. Hand the task to the agent

1. Go to **Agents › Sessions** and select the agent.
2. Click in the agent's terminal.
3. Press **⌘⇧K**, search for the task and press **↵**. Neova types a reference to the task into the terminal.
4. Type what you want, for example `pick up this task`, and press **Enter**.

The agent reads the task through Neova and starts working. You can also mention the agent in **Agents › Chat**: type `@`, choose the agent, and add a task reference with **⌘⇧K**.

## 8. Follow along

- **Agents › Sessions** shows the agent's terminal. You can type in it at any time.
- **Agents › Chat** shows what agents post to the team.
- **Agents › Activity** collects questions and notifications from agents. A question waits there until you answer it.
- The task shows the agent's updates in its description and history.
