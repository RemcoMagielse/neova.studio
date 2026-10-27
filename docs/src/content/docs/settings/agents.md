---
title: Agents, Skills, Assistant and Agent tools
description: Global agents, event messages and detection profiles, skills and actions, the Neova Assistant, and the tools your agents can reach.
sidebar:
  order: 3
---

The **Agents** group in the Settings rail holds four pages: **Agents**, **Skills**, **Assistant** and **Agent tools**. They set how Neova talks to your agents, what your agents know and can do, how the Assistant runs, and which tools your agents can reach.

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

## Skills

Open it from **Settings › Skills**, or **Actions › Skills...** in the menu bar.

One place for what your agents know and what you ask them to do. The page has two sections: **Skills** at the top, and [Actions](#actions) below.

### Skills

A skill is know-how an agent loads when it needs it, with `list_skills` and `get_skill`. It can contain replacement fields such as `{task.title}`. To send a message from chat or a task button, use an [action](#actions) instead; an action can ask the agent to use a skill. The section has two tabs at the top: **Global Skills** and **Project Skills**.

#### Global Skills and Project Skills

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

#### Skill fields

**New skill**, **Edit skill** and **Duplicate skill** show the same form. All three fields are required.

| Field | What it holds |
|---|---|
| **Title** | The skill's name, for example "Explain Task". |
| **Description** | What the skill does, up to 120 characters. A counter shows how many you have used. |
| **Skill Content** | The instruction itself. The editor suggests replacement fields when you type `{`. Below it, a counter shows characters and lines. When you edit a skill, the file name shows too; click it to reveal the file in Finder. |

For the full list of fields you can use in **Skill Content**, see [Replacement fields](/reference/replacement-fields/).

#### How to create a skill

1. Open **Global Skills** or **Project Skills**.
2. Click **Create Skill**.
3. Fill in **Title**, **Description** and **Skill Content**.
4. Click **Create skill**, or press ⌘S.

To change a skill, click its row, edit it and click **Save Changes**. To remove it, click **Delete skill** in the form or the bin in the table, then confirm. If you close the form with unsaved changes, Neova asks whether to discard them.

### Actions

The **Actions** section sits below Skills. Open it from **Actions › Edit Actions...** in the menu bar too.

An action is a message you send often, such as "Brainstorm this task" or "Commit and close". It can contain replacement fields such as `{task.id}`, which Neova fills in when you use it. One list of actions feeds:

- `/` in the [Chat](/agents/chat/#slash-commands) input,
- [Search](/getting-started/find-your-way-around/#search) (⌘K), under **Actions**, before you type,
- the **Actions** menu of the menu bar,
- the buttons on a task, for the actions you add to its stage in [Settings › Board](/settings/workflow/#how-to-add-an-action-to-a-stage).

The section has two groups. **Project** actions belong to the open project; **Global** actions are available in every project. Project actions come first everywhere they are listed.

Each row shows the action's name and description, and labels for the stages where it is a button on tasks. An action that is turned off is greyed out with **Off**: it stays in the list but is not offered in chat, ⌘K or the menu bar.

| Control | What it does |
|---|---|
| Drag handle | Drag a row to change the order within its group. |
| Row | Opens the action to edit it. |
| **⋯** | **Edit**, **Turn off** or **Turn on**, and **Delete**. |
| **New action** | Creates a project action. The arrow next to it has **New global action**. |

#### Action fields

| Field | What it holds |
|---|---|
| **Title** | The action's name. This is what you type after `/`. |
| **Description** | Optional. A short line shown under the name. |
| **Text** | The message itself. The editor suggests replacement fields when you type `{`. Under it, a line says on which stages the action is a button. |

Deleting an action that is a button on a stage leaves that button greyed out with **Action not available**.

## Assistant

Open it from **Settings › Assistant**.

The Neova Assistant runs a coding agent in its own terminal, so you can ask it about the page you are on. See [Assistant](/agents/assistant/) for how to use it.

### Your Assistant

The Assistant's **Name** and **Voice**, the same in every project. Changes apply the next time it starts. To hear the voice before you pick it, download the voices on [Settings › Voice](/settings/general/#agent-voices).

The other sections on this page apply to the open project.

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

## Agent tools

Open it from **Settings › Agent tools**, or click **MCP** in the status bar.

Everything your agents can reach, on one page. Agents reach tools through MCP servers. Claude Code loads them when an agent starts, so running agents pick up changes after a restart. The page has two sections:

- **Built in**, for every project: Neova's own MCP server, who may connect to it, and how to add it to your coding agent.
- **Added to this project**: the other MCP servers in the project's `.mcp.json`. The file is shared with teammates through git.

### Built in

The Neova MCP server is how coding agents connect to Neova. Each open project runs its own server.

#### Server status

The top card shows **Server running** with the port and the number of connected agents, or **Server stopped**.

| Part | What it does |
|---|---|
| **Port (leave empty for auto)** | Shown while the server is stopped. Type a port from 21700 to 21899, or leave it empty and Neova picks one. If another project uses the port, its name shows under the field. |
| **Projects** | Lists all known projects with their port and when they were opened. |
| **Start Server** / **Stop Server** | Starts or stops the server. |

To change the port, click **Stop Server**, type the new port and click **Start Server**.

#### Access

**Access** sets who can connect to this server and which tools they get. Every connection presents a key.

| Part | What it does |
|---|---|
| **Require access keys** | When on, a connection with no key or a revoked key is refused. When off, any client that reaches the server gets every tool. Start the server before you turn it on. |
| **Grants** tab | The keys you have issued. |
| **Presets** tab | Named sets of tools that you apply to grants. |
| **Recent refusals** | Connections that were refused, with the agent's name, the reason and when. Shown when there are any. |

When another Neova project asks to connect, **Connection requests** shows at the top of **Access**. Click **Review** to choose what they may do and approve, or **Decline**. See [Other projects](/settings/system/#other-projects).

When you turn on **Require access keys**, Neova asks you to confirm. It then gives this project's own agents a key and adds it to `.mcp.json`. Agents that are running stay connected and use the key after their next restart. Config files of other tools, such as Cursor's or Gemini's, are not changed.

If this project's agents use a key from one of your grants, a banner says so. Click **Use this project's key** to give them the project's own key.

#### Grants

The table shows each grant's name (**Grant**), its **Scope preset**, how many connections are live (**Connected**) and when it was last used (**Last used**). The **⋯** menu on a grant has:

- **Change scope**: apply another preset. This replaces the grant's tool list with a copy of the preset's.
- **Rotate key**: issue a new key for the grant.
- **Revoke**: the key stops working at once and cannot be restored.

Changing or revoking a grant closes its live connections. They reconnect under the new scope.

#### How to issue a key

1. On the **Grants** tab, click **New grant**.
2. Type a **Name**, for example "Team B".
3. Pick a **Scope preset**, or choose **New preset — pick the tools yourself…**.
4. Click **Create grant**.
5. Copy the **Key**. It is shown only once. Neova keeps a hash of it, so if the key is lost, rotate the grant.
6. Copy the snippet under **Add this to the other project's .mcp.json**, or click **Or write it into a project for me…** and pick a project folder. Neova merges the entry into that folder's `.mcp.json`.
7. Click **Done**, and restart the other project's agents.

#### Presets

A preset is a named set of tools. Neova ships the presets **Read-only board**, **Tasks**, **Collaborate** and **Full**, marked **Built-in**. Each preset shows its number of tools. Presets that include tools which control the machine (`terminal_send`, `schedule_action`, `restart_agent`, `start_agent`) are flagged.

Applying a preset copies its tools into the grant. Editing the preset later does not change grants that already use it.

Click **New preset**, or **Edit**, **Duplicate** or **Delete** on a preset. In the preset dialog, type a **Name**, filter with **Filter tools**, tick the tools to allow, and click **Save preset**. Tools you do not tick are denied.

#### Agent Configuration

Add Neova as an MCP server in your coding agent's configuration. Pick your agent from the tabs: **Claude Code**, **Cursor**, **Gemini**, **Mistral Vibe** or **OpenCode**.

Each tab shows the configuration to add, with a **Copy** button, a line that says where it goes, and a **View docs** link to the agent's own documentation.

| Tab | Where the configuration goes |
|---|---|
| **Claude Code** | `.mcp.json` in your project |
| **Cursor** | `.cursor/mcp.json` in your project |
| **Gemini** | Your Gemini CLI configuration |
| **Mistral Vibe** | Your Mistral Vibe configuration |
| **OpenCode** | Your OpenCode MCP configuration |

On **Claude Code** and **Cursor**, a card writes the file for you:

| Card says | Button | What it does |
|---|---|---|
| **Configure the MCP connection in this project directory** | **Add to Project** | Creates the file with the Neova entry. |
| **Add Neova to your existing MCP configuration** | **Add Neova** | Adds the Neova entry to your existing file. |
| **Update Neova in your MCP configuration** | **Update** | Replaces an old Neova entry. |
| **Neova is configured in this project** | **Configured** | Nothing to do. |

On **Claude Code**, the row **Status for a Claude you start yourself** adds Neova's status hooks to `.claude/settings.local.json`, so a `claude` you start by hand in a Neova terminal shows working and idle too. Agents that Neova starts already report their status. The row shows three checks: the settings file is in the project, Neova's status hooks are in it, and they are up to date with this version of Neova. When all three are ticked it says **All set**. Otherwise one button says what it will do: **Create the file**, **Add the hooks** or **Update the hooks**. Once the hooks are in, Neova updates them by itself when you open the project after an app update.

For a step-by-step guide per agent, see [Connect a coding agent](/reference/connect-a-coding-agent/).

#### Available Tools

A list of all MCP tools that coding agents can use, grouped by category. Search with **Search tools…**. Click a category to see its tools and their descriptions. See [MCP tools](/reference/mcp-tools/).

### Added to this project

The other MCP servers your agents can use, one card per server in this project's `.mcp.json`. Every agent started in the project can use them.

A line at the top shows `.mcp.json`, the number of servers, and a reminder that running agents pick up changes after a restart.

| Button | What it does |
|---|---|
| Reload (circular arrow) | Reads `.mcp.json` from disk again. |
| **Edit JSON** | Opens the whole file in a JSON editor. Click **Show cards** to go back. |
| **Add server** | Opens the **Add server** window. |

#### Server cards

Each card shows:

- The server name.
- **Built-in** next to the server Neova uses to reach your agents. The Neova card above can repair it if it stops working.
- One line with the command and arguments, or the URL.
- The connection type for HTTP and SSE servers, and the number of environment variables or headers. Their values are not shown on the card.

Click a card to edit the server. The **⋯** menu on a card has:

| Item | What it does |
|---|---|
| **Edit** | Opens the server in the edit window. |
| **Duplicate** | Opens **Add server** with a copy, named `<name>-copy`. |
| **Copy command** / **Copy URL** | Copies the start command (Command servers) or the URL (HTTP and SSE servers). |
| **Remove** | Removes the server from `.mcp.json`, after you confirm. |

When Claude Code won't load a server, its card says why: **Off in Claude Code**, **Not approved** or **Waiting for approval**, with what to do. Where Neova can fix it for you, click **Turn on**, then restart the agent.

When there are no servers yet, the section shows **No MCP servers yet** with an **Add server** button.

#### The server window

**Add server** and **Edit <name>** open the same window. Switch between **Form** and **JSON** at the top right.

In **Form**, fill in the fields on the left. On the right, **Preview** shows exactly what will be written for this server. Secrets are masked and changed lines are highlighted.

| Field | What it does |
|---|---|
| **Name** | The server's key in `.mcp.json`, for example `github`. |
| **Connection** | **Command (stdio)**, **HTTP** or **SSE**. |
| **Command** | The program that starts the server, for example `npx`. Command servers only. |
| **Arguments (one per line)** | The arguments for the command. Command servers only. |
| **URL** | The server address. HTTP and SSE servers only. |
| **Environment variables** / **Headers** | Name and value pairs. Command servers get environment variables, HTTP and SSE servers get headers. Values are hidden. Click the eye icon to show one. Click **Add** for a new row and **×** to remove one. |

In **JSON**, you edit only this server's entry, as `{ "name": { … } }`. Secrets are shown in full here.

Fields the form doesn't show stay in the file unchanged.

#### How to add a server

1. Click **Add server**.
2. Enter a **Name**.
3. Choose the **Connection**.
4. Enter the **Command** and **Arguments**, or the **URL**.
5. Add any environment variables or headers.
6. Click **Save**.

The server is written to `.mcp.json`. Restart running agents to give them access.

#### How to edit a server

1. Click the server's card.
2. Change the fields, or switch to **JSON**.
3. Check the **Preview**.
4. Click **Save**.

To rename a server, change its **Name**. If another server already has that name, Neova shows an error and saves nothing.

#### How to remove a server

1. Open the card's **⋯** menu.
2. Click **Remove**.
3. In **Remove "<name>"?**, click **Remove**.

Agents lose access to the server after their next restart.

#### How to edit the whole file

1. Click **Edit JSON**.
2. Edit `.mcp.json` in the editor.
3. Click **Save**, or **Cancel** to go back to the cards.

If `.mcp.json` is not valid JSON, the section opens the JSON editor and shows what is wrong. Fix it and click **Save**.

If the file changed on disk after Neova read it, for example because an agent or your editor wrote to it, Neova saves nothing and shows a message. Click **Reload** to read the latest version, then make your change again.

## Related

- [Assistant](/agents/assistant/)
- [Team](/agents/team/) and [Agent Editor](/agents/agent-editor/)
- [Replacement fields](/reference/replacement-fields/)
- [Settings › Board](/settings/workflow/#stages) to add actions to stages
- [Connect a coding agent](/reference/connect-a-coding-agent/)
- [Other projects](/settings/system/#other-projects), to hand work to another Neova project
- [Agent Insights](/agents/agent-insights/): the **MCP servers & tools** permission rules
- [MCP tools](/reference/mcp-tools/) such as `list_skills`, `get_skill`, `assistant_reply` and `assistant_typing`
