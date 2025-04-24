---
title: WebView
sidebar_label: WebView
---

Easily load web pages while allowing user interaction.

:::info Packaging
To build your Flet app that uses ads control add `flet-webview` to `dependencies` key of the `[project]` section of your `pyproject.toml` file, for
example:

```toml
[project]
...
dependencies = [
  "flet==0.27.6",
  "flet-webview==0.1.0",
]
```
:::

## Examples

A simple implementation that loads the [flet.dev](https://flet.dev) website:

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/web-view/web-view-example.py
```

## Properties

### `bgcolor`

Set the background [color](/docs/reference/colors) of the WebView.

### `enable_javascript`

Enable or disable the JavaScript execution on the page. 
Note that disabling the JavaScript execution on the page may result to unexpected web page behaviour.

Value is of type `bool`.

### ~~`javascript_enabled`~~

Enable or disable the JavaScript execution on the page. 
Note that disabling the JavaScript execution on the page may result to unexpected web page behaviour.

Value is of type `bool`.

**Deprecated in v0.25.0 and will be removed in v0.28.0. Use [`enable_javascript`](#enable_javascript) instead.**

### `prevent_link`

Specify a prefix for links to prevent navigating or downloading.

Value is of type `str`.

### `url`

Start the WebView by loading the `url` value.

Value is of type `str`.

## Methods

### `can_go_back()`

Whether there's a back history item. Only for Android, iOS and macOS platforms.

Returns a `bool`.

### `can_go_forward()`

Whether there's a forward history item. Only for Android, iOS and macOS platforms.

### `clear_cache()`

Clears all caches used by the WebView. Only for Android, iOS and macOS platforms.

The following caches are cleared: 
- Browser HTTP Cache
- [Cache API](https://web.dev/articles/cache-api-quick-guide) caches. Service workers tend to use this cache.
- Application cache

### `clear_local_storage()`

Clears the local storage used by the WebView. Only for Android, iOS and macOS platforms.

### `disable_zoom()`

Disable zooming using the on-screen zoom controls and gestures. Only for Android, iOS and macOS platforms.

### `enable_zoom()`

Enable zooming using the on-screen zoom controls and gestures. Only for Android, iOS and macOS platforms.

### `get_current_url()`

Returns the current URL that the WebView is displaying or `None` if no URL was ever loaded. Only for Android, iOS and macOS platforms.

### `get_title()`

The title of the currently loaded page. Only for Android, iOS and macOS platforms.

### `get_user_agent()`

Gets the value used for the HTTP `User-Agent:` request header. Only for Android, iOS and macOS platforms.

### `go_back()`

Go back in the history of the webview, if `can_go_back()` is `True`. Only for Android, iOS and macOS platforms.

### `go_forward()`

Go forward in the history of the webview, if `can_go_forward()` is `True`. Only for Android, iOS and macOS platforms.

### `load_file()`

Loads the provided local file. Only for Android, iOS and macOS platforms.

It has the following parameters:
- `absolute_path`: The path to the local file to load.

### `load_html()`

Loads the provided HTML string. Only for Android, iOS and macOS platforms.

It has the following parameters:
- `html`: The HTML string to load.
- `base_url` (optional): Used when resolving relative URLs within the HTML string.

### `load_request()`

Makes an HTTP request and loads the response in the webview. Only for Android, iOS and macOS platforms.

It has the following parameters:
- `url`: The URL of the webview to load.
- `method`: The method of the request. Value is of type `WebviewRequestMethod` and defaults to `WebviewRequestMethod.GET`.

### `reload()`

Reload the current URL. Only for Android, iOS and macOS platforms.

### `run_javascript()`

Runs the given JavaScript in the context of the current page. Only for Android, iOS and macOS platforms.

It has the following parameters:
- `value`: The JavaScript code to run.

### `scroll_by()`

Scroll by the provided amount of webview pixels. Only for Android, iOS and macOS platforms.

It has the following parameters:
- `x`: The amount of pixels to scroll by on the x-axis.
- `y`: The amount of pixels to scroll by on the y-axis.

### `scroll_to()`

Scroll to the provided position of webview pixels. Only for Android, iOS and macOS platforms.

It has the following parameters:
- `x`: The x-coordinate of the scroll position.
- `y`: The y-coordinate of the scroll position.

## Events

### `on_console_message`

Fires when a console message is logged. Only for Android, iOS and macOS platforms.

Event handler argument is of type [`WebviewConsoleMessageEvent`](/docs/reference/types/webviewconsolemessageevent).

### `on_javascript_alert_dialog`

Fires when a JavaScript alert dialog is about to be shown. Only for Android, iOS and macOS platforms.

Event handler argument is of type [`WebviewJavascriptEvent`](/docs/reference/types/webviewjavascriptevent).

### `on_page_ended`

Fires when all the webview page loading processes are ended. Only for Android, iOS and macOS platforms.

### `on_page_started`

Fires soon as the first loading process of the webview page is started. Only for Android, iOS and macOS platforms.

### `on_progress`

Fires when the progress of the webview page loading is changed. Only for Android, iOS and macOS platforms.

### `on_scroll`

Fires when the scroll position changes. Only for Android, iOS and macOS platforms.

Event handler argument is of type [`WebviewScrollEvent`](/docs/reference/types/webviewscrollevent).

### `on_url_change`

Fires when the URL of the webview page is changed. Only for Android, iOS and macOS platforms.

### `on_web_resource_error`

Fires when there is error with loading a webview page resource. Only for Android, iOS and macOS platforms.
