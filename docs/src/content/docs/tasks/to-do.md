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
- a bell, when the agent waits to hear that it's done. Rest the pointer on it to see who;
- **Add a note**, on an agent's to-do.

Open to-dos are listed oldest first, so you can work down the list.

## Writing a note to the agent

Want to tell the agent something about a to-do, like "done, but only for the test account"? Click **Add a note** under it, type, and press **Enter** or click **Save**. **Shift+Enter** starts a new line, **Esc** cancels.

The note shows under the to-do. Click **Edit** to change it, or empty it to remove it. Once you tick the to-do off, the note goes to the agent.

## Ticking off

Click the checkbox. The to-do is crossed off and moves under **Show n done**. If it has a bell, the agent gets a message that it's done and carries on. If you wrote a note, the agent gets the note too, also without a bell.

Ticked one off by mistake? Click **Show n done** and untick it.

Done to-dos are cleared automatically seven days after you ticked them off.

## Removing

Rest the pointer on a to-do and click **×**. If it has a bell or a note, the agent is told you removed it without doing it, with your note.

## On your phone

Open to-dos also show in the **Inbox** of Neova Capsule, on the phone and in the browser, below the questions. Tap **Done** to tick one off: it's done on the Mac too, and an agent that waits for it carries on. A note you wrote on the Mac goes to the agent as well. The project has to be open in Neova Studio.

## What agents do

Agents add to-dos with the `add_todo` tool, and can tick off or remove the ones they added themselves, for example when they can see you've done it. They can't change your own to-dos or another agent's. See [MCP tools](/reference/mcp-tools/#to-do).

The list is saved in the project, in `.neova/todos.json`.
