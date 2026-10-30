---
title: Terminal
description: Plain shell terminals in the project folder, without an agent.
sidebar:
  order: 4
---

Terminal gives you plain shells inside Neova, for example a dev server in one and free commands in another. No agent runs in them.

Open it from **Sidebar › Tools › Terminal**, or press **Ctrl+`**. The first time you open it, one terminal starts.

Terminal opens in the [bottom panel](/getting-started/find-your-way-around/#bottom-panel), under your other pages, so it stays in view while you switch tabs. To have it open in a pane instead, right-click its tab and choose **Move to main pane**, then **Always open in this pane**.

## Terminal tabs

A row of tabs runs along the top. Each tab is one terminal.

| Part | What it shows or does |
|---|---|
| Dot | Green while the shell runs. Grey after it has exited. |
| Name | The title the shell reports. Without one, **Terminal 1**, **Terminal 2**, and so on. |
| **×** | Closes the terminal and stops its shell. |
| **+** (**New terminal**) | Opens another terminal and switches to it. |

Click a tab to switch to it.

## Terminal

Below the tabs is the active terminal.

- The header shows the terminal's name, its shell and its process ID, for example `(zsh · PID 4211)`.
- The shell starts in the project folder.
- Links in the output open in your web browser.
- When the shell exits, the terminal shows **Process exited with code N**. Close the tab and open a new one to continue.

Terminals keep running when you go to another page or another tab. Every Neova tab shows the same terminals.

## How to open several terminals

1. Click **+** next to the tabs.
2. A new terminal opens and becomes active.
3. Click a tab to switch between terminals.

## How to close a terminal

Click the **×** on its tab. The shell stops and the next terminal becomes active. If you close the last one, the page shows **No open terminals.** Click **New terminal** to start one.

## How to run a command from a notification

Some agent notifications have a button that runs a command. Click it. Neova opens a new terminal, goes to **Tools › Terminal** and runs the command there.

## Related

- [Sessions](/agents/sessions/): the terminals your agents run in.
- [Activity](/agents/activity/): where agent notifications show up.
