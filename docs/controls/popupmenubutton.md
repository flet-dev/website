---
title: PopupMenuButton
sidebar_label: PopupMenuButton
slug: popupmenubutton
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An icon button which displays a menu when clicked.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/popupmenubutton)

### PopupMenuButton

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def check_item_clicked(e):
        e.control.checked = not e.control.checked
        page.update()

    pb = ft.PopupMenuButton(
        items=[
            ft.PopupMenuItem(text="Item 1"),
            ft.PopupMenuItem(icon=ft.icons.POWER_INPUT, text="Check power"),
            ft.PopupMenuItem(
                content=ft.Row(
                    [
                        ft.Icon(ft.icons.HOURGLASS_TOP_OUTLINED),
                        ft.Text("Item with a custom content"),
                    ]
                ),
                on_click=lambda _: print("Button with a custom content clicked!"),
            ),
            ft.PopupMenuItem(),  # divider
            ft.PopupMenuItem(
                text="Checked item", checked=False, on_click=check_item_clicked
            ),
        ]
    )
    page.add(pb)

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/popup-menu-button/popup-menu-button-with-custom-content.gif" className="screenshot-30"/>

## `PopupMenuButton` properties

### `bgcolor`

The menu's background color.

### `clip_behavior`

The `content` will be clipped (or not) according to this option. See [`Container.clip_behavior`](container#clip_behavior) for possible values.

Default value is `ClipBehavior.NONE`.

### `content`

A `Control` that will be displayed instead of "more" icon.

### `elevation`

The menu's elevation when opened. Defaults to `8`.

### `enable_feedback`

Whether detected gestures should provide acoustic and/or haptic feedback. On Android, for example, setting this to `True` produce a click sound and a long-press will produce a short vibration. 

Defaults to `True`.

### `icon`

If provided, an icon to draw on the button.

### `icon_color`

The `icon`'s color.

### `icon_size`

The `icon`'s size.

### `items`

A collection of `PopupMenuItem` controls to display in a dropdown menu.

### `menu_position`

Defines position of the popup menu relative to the button. Value can either be `PopupMenuPosition.OVER` (default) or `PopupMenuPosition.UNDER`.

### `padding`

A collection of `PopupMenuItem` controls to display in a dropdown menu.

### `shape`

The menu's shape. See [`FloatingActionButton.shape`](floatingactionbutton#shape) for possible values.

The default shape is a `CircleBorder` with a radius of `2.0`.

## `PopupMenuButton` events

### `on_cancelled`

Called when the user dismisses the popup menu without selecting an item.

### `on_opened`

Called when the popup menu is shown.

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