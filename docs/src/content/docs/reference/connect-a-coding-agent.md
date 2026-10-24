---
title: Connect a coding agent
description: How a coding agent reaches Neova through its MCP server, and how to check that it is connected.
sidebar:
  order: 1
---

Coding agents work with Neova through its MCP server. Each Neova window runs its own server for the project it has open. An agent reaches that server through a small connector script that ships with Neova. The connector is listed as an MCP server in the agent's configuration file.

Set it up in **Settings › Server**, or in the **Welcome to Neova** window the first time you open a project.

## The MCP server

The server card at the top of **Settings › Server** shows the state of the server.

| State | What you see |
|---|---|
| **Server running** | The port and the number of connected agents, for example `Port 21700 · 2 connected agents`. |
| **Server stopped** | A **Port (leave empty for auto):** field. Type a port, or leave it empty to let Neova pick one. |

| Button | What it does |
|---|---|
| **Projects** | Opens the list of known projects and the ports they use. |
| **Start Server** / **Stop Server** | Starts or stops the server for this window. |

Neova writes the port the server runs on to `.neova/mcp-port` in the project folder. The connector reads this file each time it connects, so the agent finds the server even when the port changes.

## The `.mcp.json` entry

The agent's configuration needs one entry, named `neova`, under `mcpServers`:

```json
{
  "mcpServers": {
    "neova": {
      "command": "node",
      "args": [
        "/Applications/Neova Studio.app/Contents/Resources/mcp-connector/index.js",
        "--project",
        "/Users/you/code/my-project"
      ]
    }
  }
}
```

| Field | Value |
|---|---|
| `command` | `node` |
| `args[0]` | The path to Neova's connector script. Copy it from the status bar: hover over **MCP** and click **Copy connector path**. |
| `--project` | The project folder. The connector connects to the Neova window that has this folder open. |
| `env.NEOVA_MCP_KEY` | Only present when **Require access keys** is on in **Settings › Server**. Neova then writes the key into this entry. |

When Neova writes the entry, it merges it into the file. Other servers in the file stay as they are. If the file is not valid JSON, Neova does not change it and shows an error.

If the project is not open in Neova, the agent's connector logs `<folder> is not open in Neova. Open that project and restart this agent.`

## Add the entry from the Welcome window

The **Welcome to Neova** window shows the first time you use Neova.

1. Under **1. How do you start your coding agent?**, type the command you use to start your agent, for example `claude`.
2. Under **2. Let it reach Neova**, click **Add Neova to .mcp.json**. When the entry is in place, the window shows **Already set up**.
3. Click **Done**.

If the server is not running, the window says so, and you can add the entry later from **Settings › Server**.

## Add the entry from Settings › Server

1. Go to **Settings › Server**.
2. Under **Agent Configuration**, choose the tab for your agent.
3. For **Claude Code** and **Cursor**, click the button in the card below the configuration. For the other tabs, click **Copy** and paste the configuration into the agent's file yourself.

| Tab | Target file | Add from Neova |
|---|---|---|
| **Claude Code** | `.mcp.json` | Yes |
| **Cursor** | `.cursor/mcp.json` | Yes |
| **Gemini** | `.gemini/settings.json` | No, copy the configuration |
| **Mistral Vibe** | `.vibe/mcp.json` | No, copy the configuration |
| **OpenCode** | `.opencode/mcp.json` | No, copy the configuration |

The card shows the state of the target file in the project folder:

| Card title | Button |
|---|---|
| **Configure the MCP connection in this project directory** | **Add to Project**. The file does not exist yet; Neova creates it. |
| **Add Neova to your existing MCP configuration** | **Add Neova**. The file exists and the note **(file exists, will merge)** shows. |
| **Update Neova in your MCP configuration** | **Update**. The entry exists but points to another connector path or project folder. |
| **Neova is configured in this project** | **Configured**. Nothing to do. |

On the **Claude Code** tab, a second card, **Report agent status for Claude sessions you start yourself**, adds status hooks to `.claude/settings.local.json`. Click **Add to settings**. Agents that Neova starts report their status without it.

Restart the agent after you add or update the entry, so it reads the new configuration. Claude Code asks whether to use the servers in `.mcp.json`; approve **neova**.

## How agents are linked

An agent that you start from Neova, on **Agents › Team** or **Agents › Sessions**, runs in a terminal that Neova opens. Neova sets two environment variables in that terminal:

| Variable | Holds |
|---|---|
| `NEOVA_AGENT_ID` | The ID of the agent the terminal belongs to. |
| `NEOVA_TERMINAL_TOKEN` | A secret for that one terminal. |

The agent passes both on to the connector. Neova checks the token and links the connection to that agent. The agent then works under the name it has on **Agents › Team**.

An agent that you start in a terminal outside Neova connects as an external agent. Its name gets the name of its own project in brackets, for example `Designer (presenter)`, so you can see where it comes from. An agent whose project Neova can't tell gets **(external)**. It can use the tools, but it is not linked to an agent on **Agents › Team**.

## register_agent

An agent can call `register_agent` with a `preferredName` to choose the name it shows in Neova. Without a call, Neova gives it a generated name.

The result contains `success` and `name`. When the name is already in use by another connected agent, `success` is `false` and the agent keeps its current name. An agent that is linked to an agent on **Agents › Team** keeps that agent's name; rename it in the Agent Editor instead.

## Check the connection

| Where | What to look for |
|---|---|
| Status bar, **MCP** | `2 agents · :21700` when the server runs, `off` when it is stopped. Hover for the port and the names of the connected agents, plus **Copy connector path** and **Restart**. Click it to open **Settings › Server**. |
| **Agents › Team** | A green link icon next to the agent's name. Hover over it to see **Linked to** and the name of the connection. |
| **Agents › Sessions** | A green link badge on the agent's avatar, with the same **Linked to** tooltip. |
| **Settings › Server** | The number of connected agents in the server card. |

If an agent does not show up:

1. Check that the **MCP** item in the status bar is not `off`. If it is, click **Restart** in its hover card, or **Start Server** in **Settings › Server**.
2. Check that the card under **Agent Configuration** says **Neova is configured in this project**. If it says **Update Neova in your MCP configuration**, click **Update**.
3. Restart the agent.

## Related

- [Settings › Server](/settings/system/)
- [MCP tools](/reference/mcp-tools/)
- [Team](/agents/team/)
- [Sessions](/agents/sessions/)
