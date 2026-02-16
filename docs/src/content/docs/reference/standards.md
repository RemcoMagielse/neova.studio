---
title: Standards
description: Reference for project standards and guidelines.
sidebar:
  order: 4
---

Standards are project-level guidelines that define how work should be done. They capture coding conventions, architectural decisions, API patterns, and other reusable knowledge that agents can reference when working on tasks.

Standards are stored as markdown files in `.neova/standards/`.

## Managing Standards

Go to **Settings → Standards** to:

- Create new standards
- Edit existing standards
- Delete standards you no longer need

Each standard has a unique ID (kebab-case) used to reference it in templates.

## Standard Fields

| Field | Description |
|-------|-------------|
| `id` | Unique identifier in kebab-case (e.g., `api-design`). |
| `title` | Display name shown in the UI. |
| `description` | Short summary of what the standard covers. |
| `content` | Full markdown content with guidelines and examples. |

## Using Standards in Templates

Reference standards in activity templates using replacement fields:

| Pattern | Description |
|---------|-------------|
| `{standards.key}` | File path to the standard |
| `{standards.key.title}` | Display name |
| `{standards.key.description}` | Short description |
| `{standards.key.content}` | Full markdown content |

**Example:**

```markdown
Follow these API guidelines:

{standards.api-design.content}
```

When the template renders, the replacement field is replaced with the full content of your `api-design` standard.

## Example Standards

Common standards you might create:

| Standard | Purpose |
|----------|---------|
| `coding-style` | Code formatting, naming conventions, file organization |
| `api-design` | REST conventions, error handling, versioning |
| `testing` | Test coverage requirements, testing patterns |
| `security` | Security guidelines, input validation, authentication |
| `architecture` | System design decisions, component boundaries |

## File Format

Standards are stored as markdown files in `.neova/standards/`:

```markdown
---
id: api-design
title: API Design Guidelines
description: REST API conventions and patterns for this project.
---

## Endpoints

- Use plural nouns for resources (`/users`, not `/user`)
- Use kebab-case for multi-word paths (`/user-profiles`)

## Response Format

Always return JSON with consistent structure:

\`\`\`json
{
  "data": { ... },
  "meta": { "timestamp": "..." }
}
\`\`\`

## Error Handling

Return appropriate HTTP status codes...
```
