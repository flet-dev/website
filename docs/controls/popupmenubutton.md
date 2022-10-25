---
title: PopupMenuButton
sidebar_label: PopupMenuButton
slug: popupmenubutton
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An icon button which displays a menu when clicked.

## Examples

### PopupMenuButton

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Icon, Page, PopupMenuButton, PopupMenuItem, Row, Text, icons

def main(page: Page):
    def check_item_clicked(e):
        e.control.checked = not e.control.checked
        page.update()

    pb = PopupMenuButton(
        items=[
            PopupMenuItem(text="Item 1"),
            PopupMenuItem(icon=icons.POWER_INPUT, text="Check power"),
            PopupMenuItem(
                content=Row(
                    [
                        Icon(icons.HOURGLASS_TOP_OUTLINED),
                        Text("Item with a custom content"),
                    ]
                ),
                on_click=lambda _: print("Button with a custom content clicked!"),
            ),
            PopupMenuItem(),  # divider
            PopupMenuItem(
                text="Checked item", checked=False, on_click=check_item_clicked
            ),
        ]
    )
    page.add(pb)

flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/popup-menu-button/popup-menu-button-with-custom-content.gif" className="screenshot-30"/>

## `PopupMenuButton` properties

### `content`

A `Control` that will be displayed instead of "more" icon.

### `icon`

If provided an icon to draw on the button.

### `items`

A collection of `PopupMenuItem` controls to display in a dropdown menu.

## `PopupMenuButton` events

### `on_cancelled`

Called when the user dismisses the popup menu without selecting an item.

## `PopupMenuItem` properties

### `check`

If set to `True` or `False` a menu item draws a checkmark.

### `icon`

An icon to draw before menu item text label.

### `text`

Menu item text label.

### `content`

A `Control` representing menu item's custom content. If specified both `icon` and `text` properties are ignored.

## `PopupMenuItem` events

### `on_click`

Called when a user clicks a popup menu item.