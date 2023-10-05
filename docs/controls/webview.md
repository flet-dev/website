---
title: WebView
sidebar_label: WebView
slug: webview
---

Easily load webpages while allowing user interaction.

:::info
This control is supporting mobile only, a desktop and browser version is in the development.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples
A simple webview implementation using this class could be like:
```python
import flet, time

def main (page:flet.Page):
    wv = flet.WebView("https://flet.dev", width=400, height=650)
    page.add(wv)

flet.app(target=main, view=flet.AppView.WEB_BROWSER, port=8550)
```


## Properties
### `url`
Start the webview by loading the `url` value.

### `width` & `height`
The width and height of the webview.

### `javascript_enabled`
Enable or disable the javascript execution of the page. Note that disabling the javascript execution of the page may result unexpected webpage behaviour.

### `prevent_link`
Specify a link to prevent it from downloading.

### `bgcolor`
Set the background color of the webview.

## Events
### `on_page_started`
Fires soon as the first loading process of the webpage is started.

### `on_page_ended`
Fires when all the webpage loading processes are ended.

### `on_web_resource_error`
Fires when there is error with loading a webpage resource.