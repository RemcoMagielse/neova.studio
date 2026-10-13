---
title: Whiteboard
description: A shared Excalidraw canvas that you and your agents draw on.
sidebar:
  order: 3
---

The Whiteboard is one shared drawing canvas for the project. You draw on it with Excalidraw, and agents can read and redraw it.

Open it from **Sidebar › Tools › Whiteboard**.

## Toolbar

A strip above the canvas holds one button:

| Button | What it does |
|---|---|
| **Clear whiteboard** | Asks **Clear the whiteboard?** Click **Clear** to remove everything from the canvas. This cannot be undone. |

## Canvas

The rest of the page is an Excalidraw canvas, with Excalidraw's own tools and menus. It follows Neova's light or dark theme.

Neova saves the canvas a few seconds after you stop drawing. The project has one whiteboard, stored in `.neova/whiteboard.excalidraw`.

When an agent changes the whiteboard, the canvas reloads and shows the agent's version.

## How to sketch an idea with an agent

1. Draw on the canvas.
2. Ask the agent to look at the whiteboard. It reads the drawing with `get_whiteboard`.
3. Ask the agent to add to it or redraw it. It writes a new version with `update_whiteboard`, and the canvas updates on your screen.

## How agents use the whiteboard

Agents work with the whiteboard through three MCP tools:

| Tool | What it does |
|---|---|
| `get_whiteboard` | Reads the whole whiteboard as an Excalidraw scene: all elements, the app state and the files. |
| `update_whiteboard` | Replaces the whole whiteboard with a new Excalidraw scene. The canvas reloads. |
| `clear_whiteboard` | Empties the whiteboard. |

`update_whiteboard` replaces the scene; it does not merge. An agent that wants to add to your drawing reads it first with `get_whiteboard`, then writes back the full scene.

## How to start over

1. Click **Clear whiteboard**.
2. Click **Clear**.

## Related

- [MCP tools › Whiteboard](/reference/mcp-tools/#whiteboard)
- [The .neova folder](/reference/neova-folder/)
