---
title: CupertinoContextMenu
sidebar_label: CupertinoContextMenu
---

A full-screen modal route that opens when it's content is long-pressed.

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


ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertino-context-menu/basic-cupertino-context-menu.gif" className="screenshot-40"/>

## Properties

### `actions`

A list of action buttons to be shown in the menu. These actions are typically [`CupertinoContextMenuAction`](/docs/controls/cupertinocontextmenuaction)s. This list must have at least one action.

### `content`

The child control to be shown. This is a required property.

When the `CupertinoContextMenu` is long-pressed, the menu will open and this widget will be moved to the new route and be expanded. This allows the child to resize to fit in its place in the new route, if it doesn't size itself.

### `enable_haptic_feedback`

Whether a click on the `actions` should produce haptic feedback.
