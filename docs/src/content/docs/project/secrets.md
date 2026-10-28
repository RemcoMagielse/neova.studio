---
title: Secrets
description: Keep API keys and passwords in your Mac's Keychain, and hand them to agents as environment variables.
sidebar:
  order: 7
---

Secrets holds API keys, tokens and passwords for your agents. The values are kept in your Mac's Keychain (Windows Credential Manager, or your system's keyring on Linux), not in the project files. Nothing about a secret is written to `.neova`, so it never ends up in Neova's version history, a backup of the project folder, or a chat message.

Open it from **Sidebar › Project › Secrets**.

## Project and Global

| Group | Where it applies |
|---|---|
| **Project** | This project only. |
| **Global** | Every project. |

A project secret with the same name as a global one takes its place in this project. Its row says **Overrides global**, and the global row says **Overridden in this project**.

Each row shows the name, the note and `••••••••`. **Copy value** copies the value without showing it. **⋯** has **Edit**, **Reveal** (or **Hide**) and **Delete**. A revealed value is hidden again when you leave the page.

## How agents use a secret

In an agent's terminal, `neova-secret NAME` gives the secret's current value. An agent puts it inside a command, so the value goes to the command and never into the agent's conversation:

```sh
curl -H "Authorization: Bearer $(neova-secret MY_API_KEY)" https://api.example.com/items
```

It always gives the value as it is now, so a secret you add or change works on the agent's next command, without a restart. An unknown name gives nothing and an error.

Every terminal Neova starts in the project also gets each secret as an environment variable with its name, such as `$MY_API_KEY`. Code reads it from the environment, for example `process.env.MY_API_KEY`. Command-line tools that read a variable, such as `gh` with `GH_TOKEN`, pick it up by themselves. These variables are set when the terminal starts.

Agents can list the names with `list_secrets`. No tool gives them a value.

:::caution
This keeps keys out of chat, tasks and files by accident. An agent could still print a variable on purpose, so only add the keys your agents need.
:::

Environment variables don't change in an agent that was already running. A program that reads `$NAME` instead of using `neova-secret` gets the new value after you restart that agent.

## How to add a secret

1. Click **New secret** for this project, or the arrow next to it and **New global secret**.
2. Type a **Name**. It's turned into capitals and may only hold letters, digits and `_`, for example `MY_API_KEY`. Names the terminal itself uses, such as `PATH` or `HOME`, aren't allowed.
3. Paste the **Value**, and add a **Note** if you like.
4. Click **Save**.

To change the value later, click **Edit** and type a new one. Leave **Value** empty to keep the current one.

## Moving a key out of a snippet

When a snippet looks like it holds a key, its editor shows **This looks like a key. Move it to Secrets**. Saving the secret replaces the key in the snippet with `$NAME`. Change the key at its source too: the old value is still in Neova's version history.
