---
title: FletApp
sidebar_label: FletApp
slug: fletapp
---

Renders another Flet app in the current app, similar to HTML IFrame, but for Flet.

## Properties

### `reconnect_interval_ms`

Delay, in milliseconds, between reconnection attempts.

### `reconnect_timeout_ms`

Total time to try reconnecting.

### `url`

Flet app URL, e.g. `http://localhost:8550` or `flet.sock`.

## Events

### `on_error`

Fires when a connection or any unhandled error occurs.