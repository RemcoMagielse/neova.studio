---
title: Containers
description: See every Docker container on your Mac, how much processor and memory it uses, and start or stop it without opening Docker Desktop.
sidebar:
  order: 9
---

Containers shows every Docker container on your Mac, grouped by project, with how much processor and memory each one uses. Start and stop them right here, without opening Docker Desktop.

Open it from **Sidebar › Tools › Containers**. The page is only in the sidebar when Docker is installed on your Mac. It works with Docker Desktop, OrbStack and Colima.

## What you see

Three cards at the top show what all containers use together:

- **Memory**: a dial of the memory your containers use, out of all the memory in your Mac. The small mark on the dial is how much Docker may use at most, which is set in Docker Desktop.
- **CPU**: a dial of the processor use out of all your Mac's cores. If Docker may use fewer cores than your Mac has, a mark shows that limit too.
- **Running**: how many containers are running, out of all of them.

Each project that has something running gets a card. A project is a set of containers started together with `docker compose`; the card shows its name and the folder it was started from. Containers that were started on their own share one card, **Started on their own**.

| Column | Shows |
|---|---|
| Ports | The ports you can open on your Mac, such as **:3001**. Click one to open it in [Browser](/tools/browser/). |
| CPU | Processor use. 100% is one full processor core. |
| Memory | Memory the container uses now. |
| Status | How long it has been running, or **Not healthy** in red when the container's own health check fails. |

The card header shows the same numbers for the whole project, in the same columns.

Stopped containers are folded away under **Show _n_ stopped**. Projects with nothing running sit at the bottom under **Nothing running**, one line each.

## Start and stop

Every container has two buttons: start and stop. The one that doesn't apply is greyed out. **Start all** and **Stop all** on a card do the same for the whole project.

Stopping a container frees its processor time right away. Docker Desktop may keep the memory for a while: to give it back to your Mac, lower the memory limit in Docker Desktop's settings.

## Refreshing

The page asks Docker for the list and the numbers every 10 seconds, but only while it is on screen. It costs nothing when you're on another page or tab. **Check again** in the header asks right away.

## When Docker isn't running

The page says **Docker isn't running**, with **Open Docker Desktop** to start it. The list appears a few seconds after Docker is up.
