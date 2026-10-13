---
title: API Tester
description: Build and send HTTP requests, keep them in collections, and share them with an agent.
sidebar:
  order: 9
---

The API Tester sends HTTP requests and shows the response. You keep requests in collections inside the project, and you can hand a request and its response to an agent.

Open it from **Sidebar › Tools › API Tester**.

## Header

The subtitle shows the name of the open request. It adds **not saved yet** for a request that has no file, and **unsaved** when it has changes.

| Button | What it does |
|---|---|
| **Share to agent** | Sends the saved request and its last response to an agent. |
| **Save** | Saves the open request. ⌘S does the same. |

## Collections and History

The left column has two tabs.

### Collections

**Collections** shows your collections as a tree of folders and requests. Each request shows its method (GET, POST, PUT, PATCH, DELETE, HEAD or OPTIONS) and name. Click a folder or collection to fold it. Click a request to open it.

At the top:

- **+ Request** opens a blank request that is not saved to any collection.
- **+ Collection** creates a collection.

Hover over a row and click **⋮** for its menu:

| Row | Menu items |
|---|---|
| Collection | **New request**, **New subfolder**, **Rename collection** |
| Folder | **New request**, **New subfolder** |
| Request | **Rename**, **Duplicate**, **Move to…**, **Delete** |

Drag a request onto a folder or collection to move it there.

At the bottom of the column is the environment selector. See [Environments](#environments).

### History

**History** lists every request you sent, newest first. Each row shows the method, the URL, the status code (or **Failed**), the time in milliseconds and how long ago it was sent.

- Click a row to load that request into the editor as an unsaved request.
- Hover over a row and click the folder icon to **Save to collection**.
- Click **Clear** to remove all recorded sends. Requests saved in collections are not affected.

## Request editor

The top bar has the method, the URL field and **Send**.

Below it are three tabs:

| Tab | What it holds |
|---|---|
| **Params** | Query parameters, added to the URL when you send. |
| **Headers** | Request headers. |
| **Body** | **None**, **JSON** or **TEXT**, and an editor for the body. |

**Params** and **Headers** are rows of name and value. Untick a row to leave it out without deleting it. Click **Add** for a new row and the trash icon to remove one. The tab label shows how many rows are active, for example **Headers · 2**.

The body is not sent with GET or HEAD requests. With **JSON**, Neova adds `Content-Type: application/json` unless you set that header yourself.

Drag the handle between the editor and the response to resize them.

## Response viewer

After you send a request, the response viewer shows:

- The status code and text, the time in milliseconds and the size.
- **Body**: the response body, read-only. JSON is formatted.
- **Headers**: the response headers, with a count.

On the **Body** tab:

- **Fold** (JSON only) has **Expand all** and **Collapse to level 1**, **2** or **3**.
- The search icon searches the body (⌘F).

If the request fails, the viewer shows the error.

Neova remembers the last response of each request until you quit, so switching between requests keeps their responses.

## Environments

An environment is a set of variables for one collection. Pick one in the selector at the bottom of **Collections**, or choose **No environment**.

Write a variable as `{{name}}` in the URL, a parameter, a header or the body. When you send, Neova replaces it with the value from the selected environment. A variable the environment doesn't define is sent as written.

Environments are JSON files in the collection's folder: `.neova/collections/<collection>/environments/<name>.json`, with a `name` and a `vars` object.

## How to send a request

1. Click **+ Request**, or open a request from **Collections**.
2. Choose the method and enter the URL.
3. Add parameters, headers or a body if you need them.
4. Pick an environment if the request uses `{{variables}}`.
5. Click **Send**, or press Enter in the URL field.

The response appears below, and the send is added to **History**.

## How to save a request to a collection

For a request that already has a file, click **Save** or press ⌘S.

For a new request:

1. Click **Save**.
2. In **Save request**, enter a name and choose a collection or folder.
3. Click **Save**.

You need a collection first. Click **+ Collection**, enter a name and click **Create**.

To keep a request from **History**, hover over its row, click the folder icon, choose a name and destination in **Save to collection**, and click **Save**.

If you leave a request with unsaved changes, Neova asks whether to save or discard them.

## How to share a request with an agent

1. Save the request.
2. Send it if you want the agent to see the response.
3. Click **Share to agent**.
4. Choose an agent.

Neova saves the last response to a file and sends the agent a message with the method, the URL, the request file and the response file. The message is submitted, and the agent's terminal opens.

## Related

- [Neova folder](/reference/neova-folder/): where collections and history are stored.
- [Sessions](/agents/sessions/): the agent terminals that receive shared requests.
