---
title: File Structure
description: Reference for the .neova folder structure and file formats.
sidebar:
  order: 1
---

Neova stores all project data in a `.neova/` folder inside your project directory. Everything is plain files — JSON and Markdown — that you can inspect, edit, and version control.

## Overview

```
.neova/
├── activities/          # Activity templates
├── snippets/            # Reusable snippets
├── standards/           # Project standards
├── tasks/
│   ├── archive/         # Archived tasks
│   └── *.json           # Active tasks
├── stages.json          # Stage configuration
├── tag-colors.json      # Tag color mappings
├── quickactions.json    # Quick actions
├── project.md           # Project description
└── agent-quickstart.md  # Agent instructions
```

## Folders

| Folder | Description |
|--------|-------------|
| `activities/` | Activity template files. Each `.json` file defines a reusable prompt template with placeholders. |
| `snippets/` | Reusable text snippets that can be inserted into tasks or templates. |
| `standards/` | Project standards as Markdown files. Referenced by agents to follow project conventions. |
| `tasks/` | Active task files. Each task is stored as a separate `.json` file. |
| `tasks/archive/` | Archived or completed tasks moved out of the active board. |

## Configuration Files

| File | Description |
|------|-------------|
| `stages.json` | Defines workflow stages, their order, and which activities are assigned to each stage. |
| `tag-colors.json` | Maps tag names to colors for visual organization on the board. |
| `quickactions.json` | Configures quick action buttons available in the UI. |
| `project.md` | Project description shown on the dashboard. Editable in Settings. |
| `agent-quickstart.md` | Instructions provided to agents when they connect via MCP. |
