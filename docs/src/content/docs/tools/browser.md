---
title: Browser
description: Browser sessions with their own login, which you or an agent can use, with a debug panel for console, network, cookies and headers.
sidebar:
  order: 5
---

Browser runs web pages inside Neova. Each session is a separate browser with its own login. You can use a session yourself, share it with an agent, or let an agent open its own, and take over at any time.

Open it from **Sidebar › Tools › Browser**.

## Session tabs

With no sessions, the page shows **No browser sessions** and a **New session** button.

Your sessions sit in a slim rail on the left of the page, one icon per session: the site's own icon, or the session's first letter. A small dot says who else is on the page: blue while an agent looks along on a page you shared, terracotta and pulsing while an agent drives, grey while an agent holds it idle, and amber on your own pages while an agent asks to see one. A dimmed icon is a page that went to sleep (see below).

**Hover the rail** and it opens over the page, with:

| Part | What it shows or does |
|---|---|
| **New session** | Opens the **New browser session** dialog. |
| Folder icon (**New group**) | Makes a group and asks for its name. |
| A session | Click to open it. Shows the agent that uses it, or **Shared with <Agent>**. |
| **⋯** on a session | **Move to group**, **Remove from group**, **Rename**, **Close**. |
| **×** on a session | Closes it. Closing a **Saved** session asks first, because it signs you out. |

While the rail is open, the page shows as a still image; it is live again when you move away.

### Groups

Groups are yours: give each a name and a colour, like tab groups in Chrome.

- **Put a session in a group**: **⋯** › **Move to group** › a group, or **New group…**.
- **Fold a group**: click its header. A folded group shows in the rail as one coloured chip with its number of sessions; click the chip to unfold it.
- **Rename, recolour or ungroup**: the **⋯** on the group's header. **Ungroup** removes the group; its sessions stay open.

Groups are kept with the project on this computer.

### Up to 20 sessions

A window holds up to 20 sessions. A page you haven't looked at, and no agent has used, for 15 minutes goes to sleep to save memory: it keeps its login and opens again when you click it or an agent uses it. Anything you typed on a sleeping page and didn't submit is lost.

## Address bar

| Control | What it does |
|---|---|
| **Back**, **Forward**, **Reload** | Move through the session's history or reload the page. |
| **Address** | Type an address and press **↵**. A bare host such as `localhost:9011` opens with `http://`; other bare hosts open with `https://`. Only `http` and `https` addresses open. **Esc** puts back the current address. |
| **Saved** / **Temporary** | Shows whether the session keeps its login after you close Neova. |
| Zoom (for example **100%**) | Choose a zoom level: 25%, 50%, 75%, 100%, 125%, 150% or 200%. |
| **Full screen** | Shows the page alone over the whole window. |
| **Show debug panel** / **Hide debug panel** | Opens or closes the [debug panel](#debug-panel) below the page. |
| **Session options** (**⋯**) | **Rename**, **Clear login**, **Share with an agent…** or **Stop sharing** (your own sessions only), **Close**. |

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

Sessions that belong to an agent, or that you shared with one, show a bar below the address bar. A coloured frame round the page says the same at a glance: blue while the agent looks along, terracotta while it drives.

| Bar says | Button |
|---|---|
| **<Agent> is looking along.** You drive; it sees what you see. (a page you shared) | **Let <Agent> drive**, **Stop sharing** |
| **<Agent> is driving.** or **<Agent> has the wheel, idle right now.** | **Take over** |
| **You're in control.** <Agent> is paused until you give it back. | **Give back to <Agent>** |

Where an agent clicks or types, its pointer shows on the page for a moment, with its name, so you can follow what it does.

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

1. Click **New session** (or **+** at the top of the rail).
2. Fill in the **New browser session** dialog:
   - **Name**, for example `Penpot`.
   - **Who uses it**: **You**, or one of your agents.
   - **Keep login**: on keeps the login after you close Neova. Off makes the session temporary: its cookies and login are wiped when you close it.
3. Click **Create session**.
4. Type an address in the address bar and press **↵**.

**Saved** sessions reopen when you open the project again. **Temporary** sessions do not.

## How to share your session with an agent

Use this to show an agent what you see, or to let it work in a page where you are signed in, without signing in again.

1. Open your session and click **⋯** › **Share with an agent…**.
2. Choose an **Agent** and click **Share with <Agent>**.

The session stays yours and you keep driving. The agent gets a note in its backlog and can look along: it reads the page, takes screenshots, and sees the console and network. It can't close the session or see its cookies.

- **Let <Agent> drive**: hands the agent the wheel. Click **Take over** to get it back.
- **Stop sharing** (in the bar or in **⋯**): the agent loses access at once.

Sharing ends when you close Neova. One agent at a time: sharing with another agent moves the share.

### When an agent asks for a session

An agent can ask to see one of your pages. You get a notification with an **Open browser** button, and the request waits in Browser, in an amber bar above your page: **<Agent> asks to see this page.** with its reason.

- **Share this page**: shares the page you are on with that agent.
- **Decline**: the agent gets a note that you declined.

On an agent's own page the bar says to open one of your own pages first. Several requests wait in turn, oldest first.

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
