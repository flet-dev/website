---
title: BrowserContextMenu
sidebar_label: BrowserContextMenu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This class is meant to be used as a property of [`Page.browser_context_menu`](/docs/controls/page#browser_context_menu).

`BrowserContextMenu` class has the following properties:

### `disabled`

Whether the context menu is disabled.

Defaults to `False`.

## Methods

### `disable()`

Disables the context menu.

### `enable()`

Enables the context menu.

## Usage Example

```py
import flet as ft


def main(page: ft.Page):
    page.add(
        ft.OutlinedButton(
            "Disable browser context menu",
            on_click=lambda _: page.browser_context_menu.disable(),
        ),
        ft.OutlinedButton(
            "Enable browser context menu",
            on_click=lambda _: page.browser_context_menu.enable(),
        ),
    )


ft.app(main)
```