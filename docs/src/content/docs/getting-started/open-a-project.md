---
title: Open a project
description: Open a folder in Neova Studio, set it up, and switch between projects.
---

A project in Neova is a folder on your computer, usually the root of a code repository. Neova keeps the project's data in a `.neova/` folder inside it.

## Open your first project

When no project is open, Neova shows **Welcome to Neova Studio**.

1. Click **Open project**.
2. Choose the folder and click **Open**.

The **Recent** list below the button shows the last projects you opened. Click one to open it. To remove a project from the list, hover over it and click the **×**.

## Set up a new project

If the folder has no `.neova/` folder yet, Neova shows **Set up Neova Project**.

1. Click **Set up project**. Neova creates the `.neova/` folder.
2. When it shows **Project Ready**, click **Continue**.

A new project starts with five stages on the board: **Backlog** (the default stage for new tasks), **Prepare**, **Implement**, **Verify** and **Done**. The wiki starts with two categories: **Standards** and **Reference**.

If setup can't create everything, it shows **Setup Incomplete** with what failed. Choose **Retry**, **Choose different folder**, or **Continue anyway**.

When you open a project whose `.neova/` folder is missing some parts, Neova adds them without asking.

## The Welcome window

The first time you use Neova, a **Welcome to Neova** window asks two things:

1. **How do you start your coding agent?** Type the command you use in your terminal, for example `claude` or `claude --permission-mode auto`. The Assistant uses this command.
2. **Let it reach Neova.** Click **Add Neova to .mcp.json**. Neova adds its MCP server to `.mcp.json` in the project folder, so your agent can use Neova's tools. Anything already in that file is kept.

Click **Done** to save, or **Skip for now** to close the window without saving. You can set both later: the start command in **Settings › Assistant** and the MCP entry in **Settings › Server**.

The Welcome window shows once per installation.

## Switch projects

Click the project name at the top of the sidebar. The menu lists your recent projects, with a check mark next to the current one.

- Click a project to switch to it.
- Click **Open different project...** to choose another folder.

If agents or terminals are running, Neova asks **Close active terminal(s)?** and lists them. Click **Switch Project** to stop them and switch, or **Cancel** to stay.

You can also use **File › Open Project...** (⌘O) and **File › Recent Projects** in the menu bar.

## Work in several projects at once

**File › New Window** (⌘N) opens a new window, with its own project. A project can be open in one window at a time. If you open a project that is already open, Neova brings its window to the front.

## If Neova can't access the folder

If macOS blocks access to the folder, Neova shows **Neova can't access this folder**.

- **Open Privacy Settings** opens macOS System Settings, where you can give Neova access.
- **Re-select project folder** lets you choose the folder again.
