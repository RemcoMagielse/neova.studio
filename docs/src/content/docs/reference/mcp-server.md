---
title: MCP Server
description: Reference for the Neova MCP server and available tools.
sidebar:
  order: 5
---

Neova includes a built-in MCP (Model Context Protocol) server that allows AI coding agents to interact with your project board, tasks, and workflows programmatically.

When an agent connects via MCP, it can:

- Read and create tasks
- Move tasks through stages
- Access the project wiki and snippets
- Send notifications and questions to you

## Connecting

Neova's MCP server uses **WebSocket** transport and starts automatically when the app is running with a project open.

### Connection Details

| Property | Value |
|----------|-------|
| Protocol | WebSocket |
| Host | `localhost` |
| Port | `21700` (default) |
| Port Range | `21700-21709` (production), `21710-21719` (development) |
| Protocol Version | `2024-11-05` |

If port `21700` is in use (e.g., another Neova instance), the server automatically tries the next available port in the range.

### Claude Code

Add to `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "neova": {
      "type": "stdio",
      "command": "/Applications/Neova.app/Contents/MacOS/Neova",
      "args": ["--mcp"]
    }
  }
}
```

### WebSocket Connection (Custom Clients)

For custom integrations, connect directly via WebSocket:

```
ws://localhost:21700
```

The server expects JSON-RPC 2.0 messages. On connect:

1. Send `initialize` request
2. Receive capabilities and assigned agent ID
3. Call `tools/list` to discover available tools
4. Call `tools/call` to invoke tools

### Initialize Handshake

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2024-11-05",
    "clientInfo": {
      "name": "my-agent",
      "version": "1.0.0"
    }
  }
}
```

Response includes:

- `assignedId` — unique agent identifier
- `agentName` — display name (auto-generated or set via `register_agent`)
- `capabilities` — supported features

### Checking Connection Status

In Neova, the MCP connection status is visible in the sidebar. When agents connect, their names appear in the Agent Workspace panel.

## Project Tools

### get_project_info

Get project metadata, folder structure, wiki pages, and workflow stages.

**Parameters:** None

**Returns:** Project paths, wiki pages, stages with their activities.

## Task Tools

### list_tasks

List tasks with optional filters.

| Parameter | Type | Description |
|-----------|------|-------------|
| `stage` | string | Filter by stage name |
| `status` | string | Filter by `pending` or `completed` |
| `tags` | array | Filter by any of these tags |
| `limit` | number | Maximum results (default: 100) |

### get_task

Get full task details including description and history.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task ID |

### create_task

Create a new task.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | Task title |
| `description` | string | No | Task description (markdown) |
| `tags` | array | No | Tags for the task |
| `stage` | string | No | Stage name (defaults to default stage) |

### update_task

Update an existing task. Only provided fields are changed.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task ID |
| `title` | string | No | New title |
| `description` | string | No | New description |
| `tags` | array | No | New tags (replaces existing) |
| `stage` | string | No | New stage name |
| `status` | string | No | `pending` or `completed` |

### complete_task

Mark a task as completed.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task ID |

### move_to_stage

Move a task to a different workflow stage.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task ID |
| `stage` | string | Yes | Target stage name |

### add_to_task

Append content to a task description without reading first.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task ID |
| `content` | string | Yes | Content to append (markdown) |
| `section` | string | No | Heading to append under (e.g., "Findings") |

## Snippet Tools

### list_snippets

List snippets with optional tag filter.

| Parameter | Type | Description |
|-----------|------|-------------|
| `tag` | string | Filter by tag |
| `limit` | number | Maximum results (default: 100) |

### get_snippet

Get full snippet content.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Snippet ID |

## Wiki Tools

The wiki holds durable project knowledge as markdown pages, grouped into
categories. The "standards" category is the default.

Reads resolve an approximate name; writes take the exact page id returned by
`get_wiki` or `list_wiki`.

### list_wiki

List wiki pages with metadata. Omit the category to list every category.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category` | string | No | Restrict to one category id |
| `limit` | number | No | Maximum results (default: 100) |

### list_wiki_categories

List wiki categories with descriptions and page counts.

**Parameters:** None

### search_wiki

Search the wiki by topic. The app ranks the pages and returns the best matches.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | Free-text query |
| `category` | string | No | Restrict to one category id |
| `limit` | number | No | Maximum results (default: 6) |

### get_wiki

Fetch a page by id or name — approximate is fine. Returns candidates rather
than guessing when the name is ambiguous.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | Yes | Page id or name |
| `category` | string | No | Restrict to one category id |

### get_section_from_wiki

Read one section of a page, by heading or outline ref. Returns the content plus
a `contentHash` for `replace_section_in_wiki`.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Exact page id |
| `heading` | string | No | `## Examples` pins the level; a bare title matches any |

### create_wiki

Create a page in the given category, or "standards" by default.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Page id in kebab-case |
| `content` | string | No | Markdown content |
| `description` | string | No | Short summary |
| `category` | string | No | Category id (default: `standards`) |

### update_wiki

Overwrite a page's content wholesale.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Exact page id |
| `content` | string | Yes | New markdown content |
| `description` | string | No | Short summary |
| `category` | string | No | Category id |

### delete_wiki

Delete a page.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Exact page id |
| `category` | string | No | Category id |

### append_to_wiki

Append to the end of a page. Never clobbers; creates the page if missing.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | Yes | Page id to append to, or create |
| `content` | string | Yes | Markdown to append |
| `category` | string | No | Category id when creating (default: `standards`) |

### replace_in_wiki

Replace one exact occurrence of a string. Fails if it is missing or matches
more than once.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Exact page id |
| `find` | string | Yes | Exact substring; must match once in scope |
| `replace` | string | Yes | Replacement string |
| `section` | string | No | Heading to scope the search to one section |
| `expectedHash` | string | No | Body or section hash from a prior read |

### replace_section_in_wiki

Replace a whole section body, keeping its heading line.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Exact page id |
| `heading` | string | Yes | Section heading |
| `content` | string | Yes | New section body (no heading line) |
| `expectedHash` | string | Yes | Section hash from `get_section_from_wiki` |

## Workspace Tools

These tools enable agent-to-user communication through the Neova interface.

### register_agent

Register or update the agent's display name.

| Parameter | Type | Description |
|-----------|------|-------------|
| `preferredName` | string | Name the agent wants to use |

### notify_user

Post a notification to the user. Appears in the Agent Workspace timeline.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `message` | string | Yes | Notification message |
| `taskId` | string | No | Link to related task |
| `level` | string | No | `info`, `success`, or `warning` |
| `actions` | array | No | Up to 4 buttons the user can click (see below) |
| `images` | array | No | Up to 4 image file paths to show with the notification |

Each action is `{ "type": "command" \| "link", "label": "…", "command": "…", "url": "…" }`.
A `command` button opens a new terminal under **Tools › Terminal** and runs the
command there; a `link` button opens an http(s) URL in the browser. Nothing runs
until the user clicks, and the command is shown verbatim on the card so it can be
read first.

Each entry in `images` is a path to a `png`, `jpg` or `webp` file (absolute or
project-relative, max 10MB). Files are **copied** into `.neova/images/`, so the
original can be deleted afterwards. Thumbnails render on the card, the full image
in the detail view, and the user can open it in their system image viewer.

Malformed actions and unreadable images are dropped and reported in `warnings` —
the notification is still delivered.

```json
{
  "message": "Deploy finished, but two pods are crash-looping.",
  "level": "warning",
  "images": ["/tmp/pod-status.png"],
  "actions": [
    { "type": "command", "label": "Check pods", "command": "kubectl get pods -n neova" },
    { "type": "link", "label": "Runbook", "url": "https://example.com/runbook" }
  ]
}
```

### ask_user

Post a question to the user. Returns immediately with a question ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `question` | string | Yes | Question to ask |
| `options` | array | No | Choice options with `id` and `label` |
| `allowFreeform` | boolean | No | Allow text input (default: true) |
| `taskId` | string | No | Link to related task |
| `priority` | string | No | `normal` or `high` |

### get_response

Check if a question has been answered.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `questionId` | string | Yes | Question ID from ask_user |

### get_responses

Get all answered questions for this agent session.

**Parameters:** None

## Activity Indicators

When agents read or write data, Neova shows visual indicators on the board:

- **Read operations** — subtle glow on affected tasks/stages
- **Write operations** — highlighted glow indicating changes

This helps you see what your agent is doing in real-time.
