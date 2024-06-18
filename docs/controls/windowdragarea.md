---
title: WindowDragArea
sidebar_label: WindowDragArea
---

A control for drag to move, maximize and restore application window.

When you have hidden the title bar with [`page.window_title_bar_hidden`](/docs/controls/page#window_title_bar_hidden), you can add this control to move the window position.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### App window without a title that can be moved

<img src="/img/docs/controls/window-drag-area/no-title-draggable-window.png" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.window_title_bar_hidden = True
    page.window_title_bar_buttons_hidden = True

    page.add(
        ft.Row(
            [
                ft.WindowDragArea(ft.Container(ft.Text("Drag this area to move, maximize and restore application window."), bgcolor=ft.colors.AMBER_300, padding=10), expand=True),
                ft.IconButton(ft.icons.CLOSE, on_click=lambda _: page.window_close())
            ]
        )
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `content`

A control to use for dragging/maximizing/restoring app window.

### `maximizable`

Whether double-clicking on a window drag area causes window to maximize/restore.

Defaults to `True`.