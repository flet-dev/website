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
import flet
from flet import Text, colors, icons, AppBar, IconButton, FloatingActionButton, SnackBar, Page, ListTile

def main(page: Page):
    page.title = "Floating Action Button"
    page.theme_mode = "light"
    page.horizontal_alignment = "center"
    page.auto_scroll = True
    page.scroll = "hidden"
    page.appbar = AppBar(
        title=Text("Floating Action Button", weight="bold", color=colors.BLACK87),
        bgcolor=colors.BLUE,
        center_title=True,
        actions=[IconButton(icons.MENU, tooltip="Menu", icon_color=colors.BLACK87)], color=colors.WHITE
    )

    # keeps track of the number of tiles already added
    page.count = 0

    def fab_pressed(e):
        page.add(
            ListTile(title=Text(f"Tile {page.count}"))
        )
        page.show_snack_bar(
            SnackBar(Text('Tile was added successfully!'), open=True)
        )
        page.count += 1

    page.floating_action_button = FloatingActionButton(icon=icons.ADD, on_click=fab_pressed, bgcolor=colors.LIME_300)
    page.add(
        Text("Press the FAB to add a tile!")
    )

flet.app(target=main)
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