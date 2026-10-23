---
title: Keyboard shortcuts
description: Every keyboard shortcut in Neova, and the items in the menu bar.
sidebar:
  order: 5
---

This page lists every keyboard shortcut in Neova, grouped by where it works, followed by the menus in the menu bar.

## Everywhere

| Keys | Action |
|---|---|
| ⌘K | Open or close Search |
| ⌘⇧K | Insert Reference. Also works while a terminal has focus. |
| ⌘J | Open or close the Assistant |
| ⌘\ | Collapse or expand the sidebar |
| ⌘1 to ⌘5 | Go to Project, Agents, Tasks, Tools or Settings |
| ⌘⌥← / ⌘⌥→ | Go to the previous or next page in the sidebar. After the last page it continues at the first. |
| ⌘-click | Open a page, search result, task card or task link in a new tab |

⌘1 to ⌘5 and ⌘⌥← / ⌘⌥→ do nothing while a dialog is open.

## Menu shortcuts

| Keys | Menu item | Action |
|---|---|---|
| ⌘N | **File › New Window** | Opens a new Neova window |
| ⌘T | **File › New Task** | Creates a task called "New Task" in the default stage and opens it in the task editor |
| ⌘O | **File › Open Project...** | Opens a project folder |
| ⌘S | **File › Save** | Saves what you are editing. See [Save](#save). |
| ⌘⇧R | **File › Sync Project** | Reloads the file tree on **Project › Files** |
| ⌘, | **Neova Studio › Settings...** | Opens Settings |
| ⌘⇧A | **Task › Archive Task** | Archives the task you are looking at |
| ⌘⌫ | **Task › Delete Task** | Deletes the task you are looking at |
| ⌘⇧E | **Connectors › Refresh email connectors** | Imports new mail from every email connector into its stage |
| ⌘/ | **Help › Keyboard Shortcuts** | Shows the shortcuts window |
| ⌥⌘I | **Help › Toggle Developer Tools** | Opens or closes the developer tools |

⌘T does nothing while a dialog is open. The **Task** items work on the task you are looking at.

## Save

⌘S saves the item you are working on:

| Where | What ⌘S saves |
|---|---|
| Task editor | The task |
| Task side panel | The task |
| **Project › Files** | The open file, when it can be edited |
| Project description editor | The project description |
| **Tools › API Tester** | The open request |
| Snippet form | The snippet |
| Skill form | The skill |

## Search

| Keys | Action |
|---|---|
| ↑ / ↓ | Move through the results |
| Enter | Open the result |
| ⌘Enter | Open the result in a new tab |
| Esc | Close Search |

## Task side panel

| Keys | Action |
|---|---|
| ⌘S | Save the task |
| ⌘E | Open the task in the full task editor |
| Esc | Close the panel. With unsaved changes, Neova asks first. |

## Boards

| Keys | Action |
|---|---|
| ⌘-click a card | Add the card to the selection, or remove it |
| ⇧-click a card | Select all cards from the last selected card to this one |

## Text editor

These work in the editor for task descriptions, wiki pages and other Markdown text.

| Keys | Action |
|---|---|
| ⌘B | Bold |
| ⌘I | Italic |
| ⌘F | Search in the text |
| ⌘⇧M | Switch between the formatted view and raw Markdown |
| `/` at the start of a line | Open the block menu: Heading 1 to 3, Bulleted list, Numbered list, Checklist, Table, Code block, Mermaid diagram, Quote |
| `@` | Link a task: type part of its title and pick it |
| `{` | Insert a [replacement field](/reference/replacement-fields/), in editors that support them |
| ⌘-click a task link | Open the task in a new tab |

In a Mermaid diagram:

| Keys | Action |
|---|---|
| ⌘Enter | Apply the changes |
| Esc | Cancel the changes |

## Chat

| Keys | Action |
|---|---|
| Enter | Send the message |
| ⇧Enter | New line |
| `@` | Mention an agent. Use ↑ / ↓ to choose, Enter or Tab to pick, Esc to close the list. |
| `/` at the start of the message | Pick a skill to insert |

## Terminal

| Keys | Action |
|---|---|
| ⇧Enter, ⌘Enter or ⌃Enter | New line in the agent's input, without sending |

## Tools › Browser

These work while the page in a browser session has focus, and you are in control.

| Keys | Action |
|---|---|
| ⌘+ or ⌘= | Zoom in |
| ⌘- | Zoom out |
| ⌘0 | Reset the zoom |

## Menu bar

### Neova Studio

| Item | Keys |
|---|---|
| **About Neova Studio** | |
| **Check for Updates…** | |
| **Settings...** | ⌘, |
| **Services** | |
| **Hide Neova Studio** | ⌘H |
| **Hide Others** | ⌥⌘H |
| **Show All** | |
| **Quit Neova Studio** | ⌘Q |

### File

| Item | Keys | Action |
|---|---|---|
| **New Window** | ⌘N | Opens a new window |
| **New Task** | ⌘T | Creates a task and opens it |
| **New Snippet** | | Opens **Tools › Snippets** with a new snippet |
| **Open Project...** | ⌘O | Opens a project folder |
| **Recent Projects** | | Lists recent projects. Pick one to open it. |
| **Save** | ⌘S | Saves what you are editing |
| **Sync Project** | ⌘⇧R | Reloads the file tree on **Project › Files** |

### Edit

**Undo** (⌘Z), **Redo** (⇧⌘Z), **Cut** (⌘X), **Copy** (⌘C), **Paste** (⌘V) and **Select All** (⌘A).

### Task

The items are available when a task is open.

| Item | Keys | Action |
|---|---|---|
| **Move to Stage** | | Lists the stages. Pick one to move the task there. |
| **Add Tag** | | Lists the tags. Pick one to add it to the task. |
| **Archive Task** | ⌘⇧A | Archives the task |
| **Delete Task** | ⌘⌫ | Deletes the task |

### Actions

| Item | Action |
|---|---|
| *Your actions* | One item per action that is turned on. Pick one to copy its text, filled in for the open task. Without an open task, Neova copies the text as it is. |
| **New Action...** | Opens **Settings › Actions** with a new action |
| **Edit Actions...** | Opens **Settings › Actions** |
| **Skills...** | Opens **Settings › Skills** |

### Connectors

| Item | Keys | Action |
|---|---|---|
| **Refresh email connectors** | ⌘⇧E | Imports new mail from every email connector into its stage |
| **Manage connectors…** | | Opens **Settings › Connectors** |

### Window

**New Window**, **Minimize** (⌘M), **Zoom** and **Bring All to Front**.

### Help

| Item | Keys | Action |
|---|---|---|
| **Documentation** | | Opens the Neova documentation in your browser |
| **Keyboard Shortcuts** | ⌘/ | Shows the shortcuts window |
| **Toggle Developer Tools** | ⌥⌘I | Opens or closes the developer tools |

Right-click Neova in the Dock for **New Window**.

## Related

- [Find your way around](/getting-started/find-your-way-around/)
- [Replacement fields](/reference/replacement-fields/)
