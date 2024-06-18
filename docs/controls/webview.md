---
title: WebView
sidebar_label: WebView
---

Easily load web pages while allowing user interaction.

:::info Work in progress
This control supports iOS and Android only; a desktop and browser versions are in the development.
:::

:::info Packaging
To build your Flet app that uses `WebView` control add `--include-packages flet_webview` to `flet build` command, for example:

```
flet build apk --include-packages flet_webview
```
:::

## Examples

A simple webview implementation using this class could be like:

```python
import flet as ft

def main(page: ft.Page):
    wv = ft.WebView(
        "https://flet.dev",
        expand=True,
        on_page_started=lambda _: print("Page started"),
        on_page_ended=lambda _: print("Page ended"),
        on_web_resource_error=lambda e: print("Page error:", e.data),
    )
    page.add(wv)

ft.app(main)
```


## Properties

### `bgcolor`

Set the background [color](/docs/reference/colors) of the WebView.

### `javascript_enabled`

Enable or disable the JavaScript execution on the page. Note, that disabling the JavaScript execution on the page may result to unexpected web page behaviour.

### `prevent_link`

Specify a prefix for links to prevent navigating or downloading.

### `url`

Start the WebView by loading the `url` value.

## Events

### `on_page_ended`

Fires when all the web page loading processes are ended.

### `on_web_resource_error`

Fires when there is error with loading a web page resource.

### `on_page_started`

Fires soon as the first loading process of the web page is started.