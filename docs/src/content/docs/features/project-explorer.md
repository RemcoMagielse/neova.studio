---
title: Project Explorer
description: Navigate your project files and manage your workspace with the Project Explorer.
---

The Project Explorer is your central hub for managing project files and navigating your codebase. It provides a familiar file tree interface with powerful features for organizing and accessing your work.

## Opening a Project

To start working with Neova, you first need to open a project folder:

1. Click **Load Folder** in the Project Explorer
2. Select your project directory
3. If the folder doesn't have a `.neova` folder yet, Neova will offer to set it up

### Project Setup

When opening a folder without Neova configuration:

- **Set up project**: Creates a `.neova` folder with default configuration (stages, templates, and sample content)
- **Cancel**: Returns to the previous project or empty state

:::tip
The `.neova` folder stores all your tasks, snippets, templates, and settings. It's safe to commit to version control.
:::

### Recent Projects

Neova remembers your recently opened projects for quick access:

- Click the **dropdown arrow** next to Load Folder to see recent projects
- Click any project to switch to it instantly
- Projects are stored locally and persist across sessions

## File Tree Navigation

The file tree displays your project structure with intuitive controls:

### Expanding Folders

- Click the **chevron icon** to expand or collapse folders
- Folders load their contents on-demand for better performance with large projects
- Expansion state is preserved during your session

### File Preview

Click any file to preview its contents in the right panel:

- **Code files**: Syntax-highlighted with language detection
- **Images**: Displayed inline (PNG, JPG, SVG, etc.)
- **JSON files**: Formatted and syntax-highlighted
- **Markdown files**: Rendered with formatting

### Filtering Files

Use the search and filter controls to find files quickly:

#### Search

Type in the search box to filter the file tree. Matching files are shown in a flat list for easy access.

:::note[Limitation]
Search currently matches file names only, not folder names.
:::

#### Important Files

Mark frequently accessed files as "important" for quick filtering:

1. Hover over any file to reveal the **star icon**
2. Click the star to toggle importance
3. Click the **Important** button to show only starred files

:::note[Limitation]
Important file markers are session-only and are not persisted when you close Neova.
:::

## Project Info Bar

The statistics bar at the bottom of the Project Explorer shows key metrics:

| Statistic | Description |
|-----------|-------------|
| **Tasks** | Total tasks across all stages |
| **Features** | Number of features in your backlog |
| **Snippets** | Available snippets in your library |
| **Templates** | Activity templates configured |

Click any statistic to navigate directly to that section.

## Toolbar Actions

### Sync Project

Click the **refresh icon** to reload the file tree. Use this when:

- Files were added or removed outside Neova
- You want to ensure the tree reflects the current filesystem state

### Clear Project

Click the **trash icon** to close the current project and return to the welcome screen. This doesn't delete any files—it simply unloads the project from Neova.

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Search files | Focus search box and type |
| Toggle important filter | Click Important button |

## Best Practices

### Organizing Your Project

- Keep your `.neova` folder at the project root
- Use meaningful task titles that match your development goals
- Mark key configuration files as "important" for quick access

### Large Projects

Neova handles large codebases efficiently:

- Folders load on-demand (lazy loading)
- Common directories like `node_modules`, `dist`, and `build` are hidden by default
- Hidden files (starting with `.`) are hidden except for `.neova`

### Multiple Projects

When working across multiple projects:

- Use the recent projects dropdown for quick switching
- Each project maintains its own tasks, snippets, and templates
- Settings are project-specific, stored in `.neova/`
