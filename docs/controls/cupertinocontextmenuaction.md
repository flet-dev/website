---
title: CupertinoContextMenuAction
sidebar_label: CupertinoContextMenuAction
---

An action button typically used in [`CupertinoContextMenu`](/docs/controls/cupertinocontextmenu).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinocontextmenu)

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

    page.add(
        ft.CupertinoContextMenu(
            enable_haptic_feedback=True,
            content=ft.Image("https://picsum.photos/200/200"),
            actions=[
                ft.CupertinoContextMenuAction(
                    text="Action 1",
                    is_default_action=True,
                    trailing_icon=ft.icons.CHECK,
                    on_click=lambda e: print("Action 1"),
                ),
                ft.CupertinoContextMenuAction(
                    text="Action 2",
                    trailing_icon=ft.icons.MORE,
                    on_click=lambda e: print("Action 2"),
                ),
                ft.CupertinoContextMenuAction(
                    text="Action 3",
                    is_destructive_action=True,
                    trailing_icon=ft.icons.CANCEL,
                    on_click=lambda e: print("Action 3"),
                ),
            ],
        )
    )

ft.app(main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertino-context-menu/basic-cupertino-context-menu.gif" className="screenshot-40"/>

## Properties

### `content`

The child control to be shown in this action button. In case both `text` and `content` are provided, then `content` will be used.

### `is_default_action`

Whether this action should receive the style of an emphasized, default action.

### `is_destructive_action`

Whether this action should receive the style of a destructive action.

### `text`

The text to be shown in the button. In case both `text` and `content` are provided, then `content` will be used.

### `trailing_icon`

An optional icon to display at the right of the `text` or `content` control. 

## Events

### `on_click`

Fires when this action button is clicked.