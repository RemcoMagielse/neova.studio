---
title: To do
description: Small actions your agents need from you, one paragraph each. Tick them off when they're done.
sidebar:
  order: 5
---

To do is your list of small actions: things only you can do, like entering a token, logging in somewhere, or clicking **Allow** on a prompt. Agents put them here instead of making a whole task for each one. You can add your own too.

Open it from **Sidebar › Tasks › To do**. The number next to **To do** in the sidebar is how many are open.

## Adding a to-do

Type in **Add a to-do** and press **Enter** or click **Add**. A to-do is one paragraph of at most 600 characters.

## Each to-do

A card shows the text, in full. Inline code copies when you click it.

Under the text:

- who added it: an agent's name and picture, or **You**;
- how long ago;
- the task it belongs to, if any. Click it to open the task;
- a bell, when the agent waits to hear that it's done. Rest the pointer on it to see who.

Open to-dos are listed oldest first, so you can work down the list.

## Ticking off

Click the checkbox. The to-do is crossed off and moves under **Show n done**. If it has a bell, the agent gets a message that it's done and carries on.

Ticked one off by mistake? Click **Show n done** and untick it.

Done to-dos are cleared automatically seven days after you ticked them off.

## Removing

Rest the pointer on a to-do and click **×**. If it has a bell, the agent is told you removed it without doing it.

## What agents do

Agents add to-dos with the `add_todo` tool, and can tick off or remove the ones they added themselves, for example when they can see you've done it. They can't change your own to-dos or another agent's. See [MCP tools](/reference/mcp-tools/#to-do).

The list is saved in the project, in `.neova/todos.json`.
