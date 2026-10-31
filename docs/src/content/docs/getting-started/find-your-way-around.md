---
title: Find your way around
description: The sidebar, tabs, split view and the bottom panel, search, Insert Reference, the Assistant and the status bar.
---

The Neova window has three parts: the **sidebar** on the left, the **tabs** with the page you're working on in the middle, and the **status bar** at the bottom.

## Sidebar

At the top of the sidebar:

- The **search** button opens [Search](#search) (⌘K).
- The **collapse** button shrinks the sidebar to a rail of icons. Click the logo to expand it again. ⌘\ toggles it.
- The **project name** opens the project menu. See [Switch projects](/getting-started/open-a-project/#switch-projects).

Below that are the sections and their pages:

| Section | Pages |
|---|---|
| **Project** | Overview, Timeline, Goals, Wiki, Files, Images |
| **Agents** | Assistant, Team, Sessions, Chat, Activity, Schedules, Agent Insights |
| **Tasks** | Boards, Tasks, Archive |
| **Tools** | Snippets, Whiteboard, Terminal, Browser, Git, API Tester |
| **Settings** | Pinned at the bottom of the sidebar |

Click a section header to open or close it. Click a page to show it.

Pages show badges when something is waiting:

- **Chat**: the number of unread messages.
- **Activity**: the number of open questions and unread notifications.
- **Sessions**: an amber dot when an agent needs your attention.

When the sidebar is collapsed, a section icon shows a dot if one of its pages has a badge.

### Keyboard

| Keys | Action |
|---|---|
| ⌘1 to ⌘5 | Go to Project, Agents, Tasks, Tools or Settings |
| ⌘⌥← / ⌘⌥→ | Go to the previous or next page in the sidebar |
| ⌘\ | Collapse or expand the sidebar |

## Tabs

Every page opens in a tab, at the top of the content area.

- **Click** a page in the sidebar to show it in the current tab.
- **⌘-click** a page to open it in a new tab. This also works on search results, task links, and tasks on the **Tasks** page.
- If a page is already open in a tab, Neova switches to that tab.
- Each task opens in its own tab, so you can have several tasks open at once. Settings and the Agent Editor each use one tab.

Drag a tab to move it along the tab bar. Click the **×** on a tab to close it. A tab with unsaved changes shows a dot. If you close it, Neova asks whether to save or discard the changes.

Neova keeps up to 12 tabs open. When you open a 13th, it closes the tab you haven't used for the longest time. It never closes a tab with unsaved changes or a tab that is on screen.

When you open a project again, Neova restores its tabs and split view. Turn this off in **Settings › Appearance**, under **Tabs**, with **Reopen my tabs when I open a project**.

## Split view

Click the **Split the view** button at the right end of the tab bar. A second pane opens on the right and becomes the active pane: the next page you open shows there. The active pane has a tinted tab bar.

- To move a tab to the other pane, click the arrow on the active tab (**Move this tab to the right pane** or **Move this tab to the left pane**).
- To go back to one pane, click **Close the split**. The tabs from the right pane move to the left pane.

## Bottom panel

The bottom panel sits under the left pane and keeps pages in view while you switch tabs above. With the view split, the right pane (often Chat) keeps its full height. **Terminal** and **Git** open there. The panel has its own tab bar.

- **Ctrl+`** shows the panel, or folds it to a thin bar. When the panel is closed and empty, Ctrl+` opens Terminal in it.
- **Show the bottom panel**, the button at the top right next to **Split the view**, opens the panel the same way. Click it again to close the panel.
- **Fold the panel** (at the right of its tab bar) folds it to a bar that shows the open page and the number of tabs. Click the bar to bring the panel back as it was.
- **Close the panel** hides it. Its pages keep running, so a terminal goes on with what it was doing. Ctrl+` brings it back. Closing the panel's last tab also closes it.
- Drag the line above the panel to change its height. Neova remembers the height.
- To move a page into the panel, right-click its tab and choose **Move to bottom panel**. From the panel, choose **Move to main pane**.
- **Always open in bottom panel** in the same menu makes a page open there from now on.

Pages you open from the sidebar still open in the panes above, also while you are working in the panel.

## Search

Press **⌘K** or click the search button. Search finds tasks, goals, wiki pages, agents, agent templates, snippets and links.

- **↑ ↓** moves through the results. A preview of the selected result shows next to the list.
- **↵** opens the result. **⌘↵** opens it in a new tab.
- **Esc** closes search.

Opening a result goes to the matching page: a task opens in the task editor, a wiki page in the Wiki, a link in your browser. An agent opens its terminal. If the agent isn't running, the result says **Start** and starts it.

With an empty search box, search shows your **Actions**. Choosing one copies its text for the task you're looking at.

## Insert Reference

Press **⌘⇧K** to insert a reference to a task, wiki page, goal, snippet, agent, skill or image. Agents can look up anything you reference this way.

1. Click where the reference should go: an editor, a text field or an agent's terminal.
2. Press **⌘⇧K** and search for the item.
3. Press **↵**.

The line above the results shows where the reference goes, for example **Editor** or **Terminal — Software Engineer**. If nothing has focus, Neova copies the reference to the clipboard.

A reference looks like `[task:1791809147323-jc, title:"Write the docs"]`.

## Assistant

The Assistant answers questions about your project and about where things are in Neova. It knows which page you're on.

- Click **Assistant** in the status bar to open it in a small window.
- Press **⌘J** to open it in a large window, from any page.
- Open **Agents › Assistant** to have it in a tab.

If the Assistant isn't running, click **Start assistant**. See [Quick start](/getting-started/quick-start/) for setting it up.

## Status bar

The status bar shows the state of Neova and your agents. Hover over an item for details, and click it to go to the page that belongs to it.

| Item | Shows | Click goes to |
|---|---|---|
| **Assistant** | The Assistant's status | Opens the Assistant |
| **Activity** | Open questions and notifications | Agents › Activity |
| **Agents** | Which agents are running | Agents › Team |
| **Terminals** | Running tool terminals | Tools › Terminal |
| **Email**, **Telegram**, **GitHub** | Connected apps | Settings › Apps |
| **Web** | The web server and its port | Settings › Phone & browser |
| **Git** | Your code's branch and uncommitted changes, and backups of the `.neova/` folder | Tools › Git |
| **MCP** | The MCP server, its port and the connected agents | Settings › Agent tools |

The dot next to **Activity** is amber when a question is waiting for you. The dot next to **Agents** is green when an agent is running, amber when one needs your attention, and red when one has an error.

## Keyboard shortcuts

Press **⌘/** for the list of keyboard shortcuts. The most used ones:

| Keys | Action |
|---|---|
| ⌘K | Search |
| ⌘⇧K | Insert Reference |
| ⌘J | Assistant |
| ⌘T | New task |
| ⌘N | New window |
| ⌘O | Open project |
| ⌘S | Save |
| ⌘, | Settings |
| ⌘/ | Keyboard shortcuts |
