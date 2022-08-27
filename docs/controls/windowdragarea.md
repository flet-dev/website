---
title: WindowDragArea
sidebar_label: WindowDragArea
---

A control for drag to move, maximize and restore application window.

When you have hidden the title bar with [`page.window_title_bar_hidden`](page#window_title_bar_hidden), you can add this control to move the window position.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### App window without a title that can be moved

<img src="/img/docs/controls/window-drag-area/no-title-draggable-window.png" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Container, IconButton, Page, Row, Text, WindowDragArea, colors, icons

def main(page: Page):
    page.window_title_bar_hidden = True
    page.window_title_bar_buttons_hidden = True

    page.add(
        Row(
            [
                WindowDragArea(Container(Text("Drag this area to move, maximize and restore application window."), bgcolor=colors.AMBER_300, padding=10), expand=True),
                IconButton(icons.CLOSE, on_click=lambda _: page.window_close())
            ]
        )
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `content`

A control to use for dragging/maximizing/restoring app window.