---
title: Agent Insights
description: See the permission rules, memory files and past conversations your coding agents keep on disk.
sidebar:
  order: 6
---

Agent Insights shows what your coding agents keep on disk: Claude Code's permission rules, the memory and configuration files of your coding agents, and this project's Claude Code conversations.

Open it from **Sidebar › Tools › Agent Insights**.

## Header

The header shows the page title, a subtitle for the open view, and three tabs: **Rules**, **Files** and **Conversations**. The page opens on **Rules**.

The buttons on the right depend on the tab:

| Tab | Buttons |
|---|---|
| **Rules** | **Refresh** reads the rule files again. |
| **Files** | A **Read-only** badge, **Scan folder…** and **Add file…**. |
| **Conversations** | **Refresh** reads the conversation list again. |

## Rules

The **Rules** tab lists the Claude Code permission rules that apply in this project. They apply to every Claude Code session in the project, including all your Neova agents. Neova reads them from these files:

- `~/.claude/settings.json`
- `.claude/settings.json`
- `.claude/settings.local.json`
- `~/.claude.json`

The subtitle counts the rules and the files they come from.

### Search and filters

Type in **Search rules…** to narrow the list. Matches are highlighted. Click the **×** to clear the search.

Below the search box, filter chips narrow the list further. Each chip shows how many rules it matches.

| Filter | Shows |
|---|---|
| **All rules** | Every rule. |
| **Added by “don’t ask again”** | Rules in `settings.local.json`, the file Claude Code writes when you pick "don't ask again". |
| **Denied** | Deny rules. |
| **Redundant** | Rules another rule already covers, for example `Bash(docker ps:*)` under `Bash(docker:*)`. |
| **Global** | Rules from files in your home folder. |
| **Project** | Rules from files in this project. |

### The table

Rules are grouped by category: **Filesystem**, **Commands (Bash)**, **Network (WebFetch)**, **MCP servers & tools** and **Other tools**. Each group header shows the number of rules and a short caption.

| Column | Shows |
|---|---|
| **Rule** | The rule as written in the file. A **covered by** badge names the rule that already covers it. |
| **Effect** | **Trusted**, **Denied**, **Ask** or **Allow**. |
| **Defined in** | The file the rule comes from. An **auto** badge marks rules in `settings.local.json`. |

Inside a group, restrictions come first. Allow rules for the same command, MCP server, domain or folder fold into one row with a chevron and a rule count. Click the row to show the rules inside it.

A long group shows the first rules and a **Show N more** link. Click **Show less** to fold it again. A search or the **Redundant** filter shows every rule.

## How to remove a permission rule

1. Hover over the rule's row.
2. Click the trash icon at the end of the row.

The rule is removed from its file and a message confirms it. Click **Undo** in that message to put the rule back. Claude Code picks up the change in running sessions and asks for the permission again the next time it needs it.

Hover over a folded row and click its trash icon to remove every rule in it.

When you remove a deny rule, Neova first asks **Remove this deny rule?**. Click **Remove** to go ahead or **Keep it** to cancel.

Some rows have a greyed-out trash icon. Hover over it to see why:

- Rules in `~/.claude.json` are managed by Claude Code. Neova only reads that file.
- Some rows are settings, not rules. Turn them off in the file named in **Defined in**.

## How to clean up redundant rules

1. Click the **Redundant** filter.
2. Check the list. Each rule shows which rule already covers it.
3. Click **Remove all N** on the right of the filter chips.

## Files

The **Files** tab shows memory and configuration files of your coding agents, such as `CLAUDE.md`, `AGENTS.md`, `settings.json` or rules files. The files are read-only here. You choose which files appear.

On the left, files are grouped by coding agent: **Claude Code**, **Cursor**, **Gemini**, **OpenCode**, **GitHub Copilot**, **Windsurf**, **Aider** or **Other**. Under each agent, click **Memory** or **Configuration** to show those files.

The main area has two columns:

- **Project**: files inside this project.
- **Global / External**: files in your home folder or elsewhere.

Each file shows as a card with its label, its path, a scope badge (**Project**, **Global** or **External**), its format, and the file contents. Click the **×** on a card to remove it from this view. The file itself is not deleted.

## How to add memory files

To find files automatically:

1. Click **Scan folder…** (or **Scan a folder** when the tab is empty).
2. Choose a folder, for example the project folder or your home folder.
3. In **Scan results**, tick the files you want.
4. Click **Add N files**.

To add one file by hand:

1. Click **Add file…** (or **Add a file** when the tab is empty).
2. Choose the file.
3. In **Add memory or permissions file**, set the fields below.
4. Click **Add file**.

| Field | What it does |
|---|---|
| **Label** | The name on the card. Defaults to the file name. |
| **Coding agent** | The agent the file belongs to. |
| **Type** | **Memory** or **Configuration**. |
| **Format** | **Markdown**, **JSON** or **Text**. |

## Conversations

The **Conversations** tab shows this project's Claude Code conversations. They are read-only.

The list on the left groups conversations under **Today**, **Yesterday**, **This week** and **Earlier**. Each row shows the title, when it was last updated and the git branch. A **Live** dot marks a conversation an agent terminal is in now.

Click a conversation to open it on the right. The header shows the title, when it started, the branch and the number of messages. Your messages appear on the right, Claude's on the left. Tool calls show as short lines under Claude's message. A conversation that is **Live** updates as the agent works. If you have scrolled up, a button shows how many new messages arrived. Click it to jump to the bottom.

## How to search conversations

1. Type in **Search conversations** at the top of the list.
2. The list shows only conversations that contain the words, with a snippet of the match.
3. Open a conversation. A find bar appears in its header with the match count, for example **2 of 7**.
4. Use the up and down arrows to step through the matches. Click the **×** to clear the search.

## How to open an agent's conversation from its terminal

1. In the agent's terminal, click the **⋮** menu.
2. Click **Open conversation**.

Agent Insights opens on the **Conversations** tab with that conversation selected.

## Related

- [Sessions](/agents/sessions/): the agent terminals with the **Open conversation** menu item.
- [MCP Servers](/tools/mcp-servers/): the servers your agents can use in this project.
