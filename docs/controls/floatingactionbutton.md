---
title: FloatingActionButton
sidebar_label: FloatingActionButton
slug: floatingactionbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A material design floating action button. A floating action button is a circular icon button that hovers over content to promote a primary action in the application.
Floating action button is usually set to `page.floating_action_button`, but can also be added as a regular control at any place on a page.

## Examples

### Basic FAB

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Floating Action Button"
    page.theme_mode = "light"
    page.horizontal_alignment = "center"
    page.auto_scroll = True
    page.scroll = "hidden"
    page.appbar = ft.AppBar(
        title=ft.Text("Floating Action Button", weight="bold", color= ft.colors.BLACK87),
        bgcolor = ft.colors.BLUE,
        center_title=True,
        actions=[ft.IconButton(ft.icons.MENU, tooltip = "Menu", icon_color = ft.colors.BLACK87)], color= ft.colors.WHITE
    )

    # keeps track of the number of tiles already added
    page.count = 0

    def fab_pressed(e):
        page.add(
            ft.ListTile(title=ft.Text(f"Tile {page.count}"))
        )
        page.show_snack_bar(
            SnackBar(ft.Text('Tile was added successfully!'), open=True)
        )
        page.count += 1

    page.floating_action_button = ft.FloatingActionButton(icon = ft.icons.ADD, on_click = fab_pressed, bgcolor = ft.colors.LIME_300)
    page.add(
        ft.Text("Press the FAB to add a tile!")
    )

ft.app(target = main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/floatingactionbutton/custom-fab.gif"/>

## Properties

### `text`

The text displayed on a button.

### `icon`

Icon shown in the button.

### `bgcolor`

Button background color.

### `tooltip`

The text displayed when hovering the mouse over the button.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `content`

A Control representing custom button content.

## Events

### `on_click`

Fires when a user clicks the button.