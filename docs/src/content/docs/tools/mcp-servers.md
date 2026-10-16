---
title: MCP Servers
description: Add, edit and remove the MCP servers in this project's .mcp.json.
sidebar:
  order: 7
---

MCP Servers shows the servers in this project's `.mcp.json` file, one card per server. Every agent started in the project can use them.

Open it from **Sidebar › Tools › MCP Servers**.

## Header

Under the title, a line shows `.mcp.json`, the number of servers, and a reminder that running agents pick up changes after a restart.

| Button | What it does |
|---|---|
| Reload (circular arrow) | Reads `.mcp.json` from disk again. |
| **Edit JSON** | Opens the whole file in a JSON editor. Click **Show cards** to go back. |
| **Add server** | Opens the **Add server** window. |

## Server cards

Each card shows:

- The server name.
- **Built-in** next to the server Neova uses to reach your agents. **Settings › Server** can repair it if it stops working.
- One line with the command and arguments, or the URL.
- The connection type for HTTP and SSE servers, and the number of environment variables or headers. Their values are not shown on the card.

Click a card to edit the server. The **⋯** menu on a card has:

| Item | What it does |
|---|---|
| **Edit** | Opens the server in the edit window. |
| **Duplicate** | Opens **Add server** with a copy, named `<name>-copy`. |
| **Copy command** / **Copy URL** | Copies the start command (Command servers) or the URL (HTTP and SSE servers). |
| **Remove** | Removes the server from `.mcp.json`, after you confirm. |

When there are no servers yet, the page shows **No MCP servers yet** with an **Add server** button.

## The server window

**Add server** and **Edit <name>** open the same window. Switch between **Form** and **JSON** at the top right.

In **Form**, fill in the fields on the left. On the right, **Preview** shows exactly what will be written for this server. Secrets are masked and changed lines are highlighted.

| Field | What it does |
|---|---|
| **Name** | The server's key in `.mcp.json`, for example `github`. |
| **Connection** | **Command (stdio)**, **HTTP** or **SSE**. |
| **Command** | The program that starts the server, for example `npx`. Command servers only. |
| **Arguments (one per line)** | The arguments for the command. Command servers only. |
| **URL** | The server address. HTTP and SSE servers only. |
| **Environment variables** / **Headers** | Name and value pairs. Command servers get environment variables, HTTP and SSE servers get headers. Values are hidden. Click the eye icon to show one. Click **Add** for a new row and **×** to remove one. |

In **JSON**, you edit only this server's entry, as `{ "name": { … } }`. Secrets are shown in full here.

Fields the form doesn't show stay in the file unchanged.

## How to add a server

1. Click **Add server**.
2. Enter a **Name**.
3. Choose the **Connection**.
4. Enter the **Command** and **Arguments**, or the **URL**.
5. Add any environment variables or headers.
6. Click **Save**.

The server is written to `.mcp.json`. Restart running agents to give them access.

## How to edit a server

1. Click the server's card.
2. Change the fields, or switch to **JSON**.
3. Check the **Preview**.
4. Click **Save**.

To rename a server, change its **Name**. If another server already has that name, Neova shows an error and saves nothing.

## How to remove a server

1. Open the card's **⋯** menu.
2. Click **Remove**.
3. In **Remove "<name>"?**, click **Remove**.

Agents lose access to the server after their next restart.

## How to edit the whole file

1. Click **Edit JSON**.
2. Edit `.mcp.json` in the editor.
3. Click **Save**, or **Cancel** to go back to the cards.

If `.mcp.json` is not valid JSON, the page opens the JSON editor and shows what is wrong. Fix it and click **Save**.

If the file changed on disk after the page read it, for example because an agent or your editor wrote to it, Neova saves nothing and shows a message. Click **Reload** to read the latest version, then make your change again.

## Related

- [Settings › Server](/settings/system/#server) adds and repairs the Neova server in `.mcp.json`.
- [Connect a coding agent](/reference/connect-a-coding-agent/)
- [Agent Insights](/agents/agent-insights/): the **MCP servers & tools** permission rules.
