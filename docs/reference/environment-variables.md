---
title: Environment variables
sidebar_label: Environment variables
---

Below is the list of useful environment variables and their default values:

#### `FLET_ASSETS_DIR`

Absolute path to app "assets" directory.

Defaults to `assets`.

#### `FLET_FORCE_WEB_SERVER`

Set to `true` to force running app as a web app. Automatically set on headless Linux hosts.

#### `FLET_OAUTH_CALLBACK_HANDLER_ENDPOINT`

Custom path for OAuth handler.

Defaults to `/oauth_callback`.

#### `FLET_OAUTH_STATE_TIMEOUT`

Maximum allowed time (in seconds) to complete OAuth web flow.

Defaults to `600`.

#### `FLET_MAX_UPLOAD_SIZE`

Maximum allowed size (in bytes) of uploaded files.

Default is unlimited.

#### `FLET_SECRET_KEY`

A secret key to sign temporary upload URLs.

#### `FLET_SERVER_IP`

IP address to listen web app on, e.g. `127.0.0.1`.

Defaults to `0.0.0.0` - bound to all server IPs.

#### `FLET_SERVER_PORT`

TCP port to run app on. `8000` if the program is running on a Linux server or `FLET_FORCE_WEB_SERVER` is set; otherwise
random port.

#### `FLET_SESSION_TIMEOUT`

Session lifetime in seconds. Default is `3600`.

#### `FLET_UPLOAD_DIR`

Absolute path to app "upload" directory.

#### `FLET_UPLOAD_HANDLER_ENDPOINT`

Custom path for upload handler. Default is `/upload`.

#### `FLET_WEB_APP_PATH`

A URL path after domain name to host web app under, e.g. `/apps/myapp`. Default is `/` - host app in the root.

#### `FLET_WEBSOCKET_HANDLER_ENDPOINT`

Custom path for WebSocket handler. Default is `/ws`.

#### `FLET_WEB_RENDERER`

Web rendering mode: `canvaskit` (default), `html` or `auto`.

#### `FLET_WEB_USE_COLOR_EMOJI`

Set to `True`, `true` or `1` to load web font with colorful emojis.

#### `FLET_WEB_ROUTE_URL_STRATEGY`

The URL strategy of the web application: `path` (default) or `hash`.

