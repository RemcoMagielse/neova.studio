---
title: What is Neova Studio
description: A desktop workspace where you and your AI coding agents share one project, one board and one chat.
---

Neova Studio is a desktop app for working with AI coding agents such as Claude Code, Gemini CLI and OpenCode. You open a project folder, and each agent runs in its own terminal inside Neova. You and the agents work from the same tasks, goals, wiki and chat.

Agents reach Neova through its MCP server. With it, an agent can read and update tasks, write to the wiki, post in the chat, ask you questions and send you notifications.

## The app at a glance

The sidebar has five sections. The docs follow the same order.

| Section | What you do there |
|---|---|
| **Project** | See the project at a glance, set goals, keep the wiki, browse files and images. |
| **Agents** | Talk to the Assistant, manage your team of agents, watch their terminals, chat with them, answer their questions, schedule prompts and see what they keep on disk. |
| **Tasks** | Plan work on boards with stages, open and edit tasks, and look up archived tasks. |
| **Tools** | Snippets, Whiteboard, Terminal, Browser, MCP Servers, Git and API Tester. |
| **Settings** | Appearance, workflow (stages, types, tags), agents and skills, and connections to other apps. |

## Where your data lives

Neova stores a project's tasks, goals, wiki, agents, skills and settings in a `.neova/` folder inside the project folder. The files are Markdown and JSON, so you can read them, and commit them to Git along with your code. See [The `.neova/` folder](/reference/neova-folder/) for the full layout.

## Next steps

- [Install](/getting-started/install/) Neova Studio.
- [Open a project](/getting-started/open-a-project/).
- Follow the [Quick start](/getting-started/quick-start/) to get your first agent working on a task.
