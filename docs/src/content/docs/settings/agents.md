---
title: Agents, Skills and Assistant
description: Global agents, event messages, detection profiles, actions, skills and the Neova Assistant.
sidebar:
  order: 3
---

The **Agents** group in the Settings rail holds four pages: **Agents**, **Actions**, **Skills** and **Assistant**. They set how Neova talks to your agents, which messages and know-how you can give them, and how the Assistant runs.

## Agents

Open it from **Settings › Agents**.

### Global Agents

A list of the agents in your global library. These agents are reusable across every project on this Mac. Each row shows the agent's avatar, name and description, and an **In this project** badge when the open project uses it.

| Button | What it does |
|---|---|
| **Refresh** | Reloads the list. |
| **Reveal file** | Shows the agent's definition file in Finder. |
| **Delete from library** | Removes the global definition from this Mac after you confirm. Projects that use the agent keep their own copy, but it no longer receives updates and shows as a detached (orphaned) agent. |

When the list is empty, it says to open an agent's editor and choose **Make global**. To add a global agent to a project, or to edit it, use the Agent Library at the bottom of **Agents › Team**. See [Team](/agents/team/) and [Agent Editor](/agents/agent-editor/).

### Linking

| Setting | What it does |
|---|---|
| **Auto-link on name match** | Links a terminal agent to an MCP agent automatically when their names match exactly. |

### History

| Setting | What it does |
|---|---|
| **History retention** | How many days of agent activity history Neova keeps: **7 days**, **14 days**, **21 days** or **30 days**. The default is 7 days. |

### Event Messages

The messages Neova types into an agent's terminal when something happens. The list on the left groups the events:

| Group | Events |
|---|---|
| **Chat** | **User messages**, **Agent messages**, **Mentions** |
| **Tasks** | **Task assigned**, **Task unassigned** |
| **Stages** | **Task entered stage** |
| **Agent Workspace** | **Question answered**, **Backlog reminder** |

Click an event to edit its message on the right. Under the text box, **Variables:** lists the variables this event can fill in. Click a variable to insert it at the cursor. If you type a `{token}` that is not a variable for this event, a warning shows: the token is sent to the agent exactly as written.

An event with unsaved changes shows a dot in the list. Click **Save** at the top of the section to save all changed messages. **Reset** puts one event's message back to the default: click it, then click **Confirm**.

Which events an agent receives is set per agent in the [Agent Editor](/agents/agent-editor/).

### Detection profiles

A detection profile tells Neova how to read a CLI's terminal output, so it can show whether an agent is working, idle or needs your attention. The built-in **Generic** profile detects working and idle from the flow of output alone. Changes take effect immediately, without restarting the agent.

The **Profiles** list is on the left. Click **New** to create a profile, or use the arrow next to it and choose **Add profile from catalogue**. **Starter patterns for common CLIs** opens a set of ready-made Claude Code patterns with a **Copy** button for each.

Click a profile to edit it on the right:

| Part | What it does |
|---|---|
| Name | Rename the profile. Saved when you leave the field. |
| **Clone** | Makes a copy under a new name. |
| **Reset** | Puts a profile that ships with Neova back to how it shipped. Only shown on those profiles. |
| **Delete** | Deletes the profile after you confirm. Not available on **Generic**, which every agent falls back to. A profile that agents use cannot be deleted; a dialog lists those agents. |
| **Attention patterns** | Text that means the agent is waiting for you, such as a permission prompt. Any match shows **Needs Attention**, even while output is still flowing. |
| **Working patterns** | Text that means the agent is producing output. |
| **Byte-flow window (ms)** and **Byte-flow threshold** | How much output, over what time, counts as working. |
| **Idle patterns** | Text that means the agent is back at its ready prompt. A match shows **Idle** right away. |
| **Input ready patterns** | Text that means the CLI is ready for the next message. Neova waits for it before it sends a message. |
| **Ready-signal timeout (ms)** | How long Neova waits for the input-ready signal before it sends anyway. From 500 to 30000. The default is 10000. |

Each pattern list has **Add pattern**. A pattern has a name, an **Enabled** check box, a regular expression and a remove button. Patterns in one list are combined with OR: any one match is enough. Matching is case-sensitive. Enter the expression without surrounding slashes. Click **Test against recent terminal output** to try the expression on a running agent's output.

## Actions

Open it from **Settings › Actions**, or **Actions › Edit Actions...** in the menu bar.

An action is a message you send often, such as "Brainstorm this task" or "Commit and close". It can contain replacement fields such as `{task.id}`, which Neova fills in when you use it. One list of actions feeds:

- `/` in the [Chat](/agents/chat/#slash-commands) input,
- [Search](/getting-started/find-your-way-around/#search) (⌘K), under **Actions**, before you type,
- the **Actions** menu of the menu bar,
- the buttons on a task, for the actions you add to its stage in [Settings › Stages](/settings/workflow/#how-to-add-an-action-to-a-stage).

The page has two groups. **Project** actions belong to the open project; **Global** actions are available in every project. Project actions come first everywhere they are listed.

Each row shows the action's name and description, and labels for the stages where it is a button on tasks. An action that is turned off is greyed out with **Off**: it stays in the list but is not offered in chat, ⌘K or the menu bar.

| Control | What it does |
|---|---|
| Drag handle | Drag a row to change the order within its group. |
| Row | Opens the action to edit it. |
| **⋯** | **Edit**, **Turn off** or **Turn on**, and **Delete**. |
| **New action** | Creates a project action. The arrow next to it has **New global action**. |

### Action fields

| Field | What it holds |
|---|---|
| **Title** | The action's name. This is what you type after `/`. |
| **Description** | Optional. A short line shown under the name. |
| **Text** | The message itself. The editor suggests replacement fields when you type `{`. Under it, a line says on which stages the action is a button. |

Deleting an action that is a button on a stage leaves that button greyed out with **Action not available**.

## Skills

Open it from **Settings › Skills**, or **Actions › Skills...** in the menu bar.

A skill is know-how an agent loads when it needs it, with `list_skills` and `get_skill`. It can contain replacement fields such as `{task.title}`. To send a message from chat or a task button, use an [action](#actions) instead; an action can ask the agent to use a skill. The page has two tabs at the top: **Global Skills** and **Project Skills**.

### Global Skills and Project Skills

**Global Skills** are available in every project. **Project Skills** belong to the open project.

Both tabs show the same table:

| Column | What it shows |
|---|---|
| **Title** | The skill's name. Skills that ship with Neova show **System default**. A global skill from the catalogue shows **Update available** when there is a newer version. |
| **Description** | A short description. |
| **Skill** | The start of the skill's text. Hover to see all of it. |
| Buttons | **Duplicate skill** and **Delete skill**. A system default shows a lock instead: it is read-only. |

Above the table, **Search skills...** filters by name and description.

Click a row to open the skill. A system default opens in **View skill**, read-only.

On **Global Skills**, the arrow next to **Create Skill** has **Add skill from catalogue**. On **Project Skills**, **Import Skills** copies skills from another project folder: pick the folder, select the skills, and resolve any conflicts with skills you already have.

### Skill fields

**New skill**, **Edit skill** and **Duplicate skill** show the same form. All three fields are required.

| Field | What it holds |
|---|---|
| **Title** | The skill's name, for example "Explain Task". |
| **Description** | What the skill does, up to 120 characters. A counter shows how many you have used. |
| **Skill Content** | The instruction itself. The editor suggests replacement fields when you type `{`. Below it, a counter shows characters and lines. When you edit a skill, the file name shows too; click it to reveal the file in Finder. |

For the full list of fields you can use in **Skill Content**, see [Replacement fields](/reference/replacement-fields/).

### How to create a skill

1. Open **Global Skills** or **Project Skills**.
2. Click **Create Skill**.
3. Fill in **Title**, **Description** and **Skill Content**.
4. Click **Create skill**, or press ⌘S.

To change a skill, click its row, edit it and click **Save Changes**. To remove it, click **Delete skill** in the form or the bin in the table, then confirm. If you close the form with unsaved changes, Neova asks whether to discard them.

## Assistant

Open it from **Settings › Assistant**.

The Neova Assistant runs a coding agent in its own terminal, so you can ask it about the page you are on. These settings apply to the open project. See [Assistant](/agents/assistant/) for how to use it.

### Neova Assistant

The header shows **on** or **off**. Changes in this section are saved when you click **Save**. **Revert** discards them.

| Setting | What it does |
|---|---|
| **Turn the Assistant on** | Runs the Assistant. Saving a start command does not turn it on by itself. |
| **System prompt** | The Assistant's behaviour, tone and rules. The text says whether it uses the packaged default or is customised for this project. **Reset to default** puts the default back. |
| **Message template** | What Neova types into the Assistant's terminal each time you send it something. `{context}` is what you are looking at (view, target, cursor) and is left out when there is nothing to report. `{user_prompt}` is what you typed. **Reset to default** puts the default back. |
| **Start command** | The command you would type in a terminal to start your coding agent, for example `claude`, `claude --permission-mode auto`, `opencode` or `gemini`. It runs in this project with your terminal's setup. The agent must support MCP. |
| **Start automatically when this project opens** | Starts the Assistant terminal in the background when the project loads. Saved per project. If **Start command** is empty, a warning shows. |

Notices can show above the system prompt:

- **A newer standard prompt is available**, with **See what changed**, when the catalogue has a newer default prompt.
- A notice that this project's prompt is based on an older version of the default. Click **Reset to default** to take the new one; your own edits are lost.

If the message template has no `{user_prompt}`, a warning shows and Neova uses the default template until you add the token back.

The Assistant can call any Neova MCP tool its agent has access to. Write in the system prompt when it should ask before it changes things.

### Setup

A list of checks that must pass for the Assistant to work. The header shows **ready** or **needs attention**. Click **Re-check** to run them again. A failed check has a **Fix** button that opens the page where you fix it.

| Check | Passes when |
|---|---|
| **Start command** | A start command is set. |
| **Command found** | The command's program is found in your terminal's PATH. Shows the path. |
| **Neova MCP server** | The MCP server is running. Shows the port. |
| **Project MCP config** | `.mcp.json` in the project points at this project. |
| **Assistant registered** | The running Assistant has connected to Neova. |

A check that cannot be answered shows a question mark, not a failure.

### Assistant terminal

The Assistant's live terminal. You can type into it directly.

| Part | What it does |
|---|---|
| **Detection profile** | The detection profile the Assistant uses. Saved when you change it. |
| **Reset** | Stops the Assistant terminal and starts it again with a fresh context. |

When the Assistant is off, the area says **Turn the Assistant on above to start its terminal.**

### How to turn on the Assistant

1. Check **Turn the Assistant on**.
2. Type a **Start command**, for example `claude`.
3. Optionally check **Start automatically when this project opens**.
4. Click **Save**. The header shows **on**, and the terminal shows under **Assistant terminal**.
5. Look at **Setup**. If a check fails, click **Fix**.

## Related

- [Assistant](/agents/assistant/)
- [Team](/agents/team/) and [Agent Editor](/agents/agent-editor/)
- [Replacement fields](/reference/replacement-fields/)
- [Settings › Stages](/settings/workflow/#stages) to attach skills to stages
- [Settings › Server](/settings/system/#server) for the MCP server the Assistant uses
- [MCP tools](/reference/mcp-tools/) such as `list_skills`, `get_skill`, `assistant_reply` and `assistant_typing`
