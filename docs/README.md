# Neova

A workflow tool for developers who work with AI coding agents.

## The Problem

You've got Claude Code, Cursor, or another coding agent. It works. But every session, you're back to square one — re-explaining your codebase, re-stating conventions, copy-pasting from old chats. Your agent is only as good as the context you give it.

**Neova fixes this.**

## What It Does

Neova is a visual workflow tool that sits alongside your coding agents. It gives them **persistent context**, **structured tasks**, and **reusable prompts** — so you spend less time explaining and more time shipping.

- **You** define the workflow: stages, templates, standards
- **You** create tasks with goals and requirements
- **Agents** pick up tasks, follow your templates, and write back their output
- **Everything** is saved, versioned, and ready for the next session

## Features

- **Task Board** — Kanban-style boards with customizable workflow stages
- **Activity Templates** — Reusable prompts with dynamic replacement fields
- **Project Standards** — Coding conventions and guidelines agents can reference
- **MCP Server** — Direct integration with Claude Code, Cursor, Windsurf, and other MCP-compatible agents

## 100% Local

Everything is stored in a `.neova/` folder inside your project:

- No cloud sync
- No external database
- No telemetry
- Full version control with Git

## Download

Download the latest release for macOS from [GitHub Releases](https://github.com/RemcoMagielse/neova.studio/releases).

## Documentation

Visit [neova.studio](https://neova.studio) for full documentation.

## Website Development

The docs site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

```bash
cd website
npm install
npm run dev
```

## License

© 2025 Neova. All rights reserved.

This software is proprietary. Use of this application is subject to the End User License Agreement (EULA) included with the software.
