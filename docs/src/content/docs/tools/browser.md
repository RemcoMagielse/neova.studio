---
title: Browser
description: Browser sessions with their own login, which you or an agent can use, with a debug panel for console, network, cookies and headers.
sidebar:
  order: 5
---

Browser runs web pages inside Neova. Each session is a separate browser with its own login. You can use a session yourself or give it to an agent, watch what the agent does, and take over at any time.

Open it from **Sidebar › Tools › Browser**.

## Session tabs

With no sessions, the page shows **No browser sessions** and a **New session** button.

Each open session has a tab at the top.

| Part | What it shows or does |
|---|---|
| Dot | Green: you are in control. Pulsing: the agent is using it. Grey: the agent is in control but idle. |
| Avatar | The agent that uses the session, or a person icon for you. |
| Name | The session name. |
| **×** | Closes the session. Closing a **Saved** session asks first, because it signs you out. |
| **+** (**New browser session**) | Opens the **New browser session** dialog. |

Hover a tab to see its name, who uses it and who is in control.

## Address bar

| Control | What it does |
|---|---|
| **Back**, **Forward**, **Reload** | Move through the session's history or reload the page. |
| **Address** | Type an address and press **↵**. A bare host such as `localhost:9011` opens with `http://`; other bare hosts open with `https://`. Only `http` and `https` addresses open. **Esc** puts back the current address. |
| **Saved** / **Temporary** | Shows whether the session keeps its login after you close Neova. |
| Zoom (for example **100%**) | Choose a zoom level: 25%, 50%, 75%, 100%, 125%, 150% or 200%. |
| **Full screen** | Shows the page alone over the whole window. |
| **Show debug panel** / **Hide debug panel** | Opens or closes the [debug panel](#debug-panel) below the page. |
| **Session options** (**⋯**) | **Rename**, **Clear login**, **Give to an agent…** (your own sessions only), **Close**. |

While an agent is in control, the address field is read-only and **Back**, **Forward** and **Reload** are off. Zoom keeps working.

### Zoom shortcuts

Click in the page, then:

| Keys | Action |
|---|---|
| ⌘+ (or ⌘=) | Zoom in one step |
| ⌘− | Zoom out one step |
| ⌘0 | Back to 100% |

The session keeps its zoom level when you go to another site.

## Control bar

Sessions that belong to an agent show a bar below the address bar.

| Bar says | Button |
|---|---|
| **<Agent> is using this browser.** or **<Agent> has this browser, idle right now.** | **Take over** |
| **You're in control.** <Agent> is paused until you give it back. | **Give back to <Agent>** |

While the agent is in control, you cannot click or type in the page. If you click it, a message says **<Agent> is using this page. Take over to use it yourself.**, with a **Take over** button.

Sessions you own have no control bar. You are always in control of them.

## Page

The page fills the rest of the screen. If the same session is on screen in the other pane of a split view, this pane shows **Showing in the other pane**.

Downloads do not start. When a page tries to download a file, Neova shows a message with the file name.

## Debug panel

The debug panel opens below the page. Drag the handle between them to resize. Each tab shows its count, for example **Console · 3**.

| Tab | What it shows |
|---|---|
| **Console** | The page's log lines, warnings and errors, with their level and source. |
| **Network** | Every request: **Method**, **Status**, **URL**, **Type** and **Time**. Failed requests show **failed**. Click a row to see its response headers and request headers. Credential headers are hidden. |
| **Cookies** | The cookies for the current site. Edit a name or value, or click **Add** to add a cookie. Untick or remove a row to delete the cookie. Changes apply on the next request. |
| **Headers** | Extra headers that this session adds to every request. Click **Add** to add one. They stay until Neova closes. |

Changes in **Cookies** and **Headers** apply a moment after you stop typing.

## How to open a session

1. Click **New session** (or **+** next to the tabs).
2. Fill in the **New browser session** dialog:
   - **Name**, for example `Penpot`.
   - **Who uses it**: **You**, or one of your agents.
   - **Keep login**: on keeps the login after you close Neova. Off makes the session temporary: its cookies and login are wiped when you close it.
3. Click **Create session**.
4. Type an address in the address bar and press **↵**.

**Saved** sessions reopen when you open the project again. **Temporary** sessions do not.

## How to give your session to an agent

Use this when you are signed in to a page and want an agent to work in it, without signing in again.

1. Open your session and click **⋯** › **Give to an agent…**.
2. Choose an **Agent** and click **Give to <Agent>**.

The session, with your login, now belongs to the agent and the agent is in control. The agent gets a note in its backlog. You can take over at any time. To use the page as your own again, open a new session: a session you gave away stays the agent's.

## How to take control from an agent

1. Open the agent's session.
2. Click **Take over**. The bar turns green and says **You're in control.**
3. Use the page.
4. Click **Give back to <Agent>** when you are done.

Neither button asks for confirmation.

## How to view a page full screen

1. Click **Full screen** in the address bar.
2. To leave, click **Exit full screen** or press **Esc**.

**Esc** works only when focus is in Neova. If you are typing in the page, click the **Exit full screen** button.

## How to sign out of a session

- **Clear login** (in **⋯**): deletes the session's cookies and stored data. The page reloads signed out and the session stays open. Confirm with **Clear login**.
- **Close** on a **Saved** session: closes the session and deletes its login. Confirm with **Close and sign out**.

A **Temporary** session closes without asking.

## How to rename a session

1. Click **⋯** and choose **Rename**.
2. Type a **Name** and click **Rename**.

## Related

- Agents open and drive sessions with the browser tools, for example `browser_open_session`, `browser_navigate`, `browser_snapshot`, `browser_click` and `browser_type`. They can read the console and network, set cookies and headers, and take screenshots. See [MCP tools › Browser](/reference/mcp-tools/#browser).
- An agent only acts on its own sessions, and only while it is in control. Reading the page, the console and screenshots also work while you are in control.
- [API Tester](/tools/api-tester/): send single requests outside a browser.
