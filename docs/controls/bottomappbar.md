---
title: BottomAppBar
sidebar_label: BottomAppBar
---

A material design bottom app bar.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/navigation/bottomappbar)

### BottomAppBar

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.horizontal_alignment = page.vertical_alignment = "center"

    page.floating_action_button = ft.FloatingActionButton(icon=ft.icons.ADD)
    page.floating_action_button_location = ft.FloatingActionButtonLocation.CENTER_DOCKED

    page.appbar = ft.AppBar(
        title=ft.Text("Bottom AppBar Demo"),
        center_title=True,
        bgcolor=ft.colors.GREEN_300,
        automatically_imply_leading=False,
    )
    page.bottom_appbar = ft.BottomAppBar(
        bgcolor=ft.colors.BLUE,
        shape=ft.NotchShape.CIRCULAR,
        content=ft.Row(
            controls=[
                ft.IconButton(icon=ft.icons.MENU, icon_color=ft.colors.WHITE),
                ft.Container(expand=True),
                ft.IconButton(icon=ft.icons.SEARCH, icon_color=ft.colors.WHITE),
                ft.IconButton(icon=ft.icons.FAVORITE, icon_color=ft.colors.WHITE),
            ]
        ),
    )

    page.add(ft.Text("Body!"))


ft.app(target=main)

```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/bottom-app-bar/bottom-app-bar.png" className="screenshot-40"/>

## Properties

### `bgcolor`

The fill [color](/docs/reference/colors) to use for the BottomAppBar. Default color is defined by current theme.

### `clip_behavior`

The content will be clipped (or not) according to this option.

Property value is [`ClipBehavior`](/docs/reference/types/clipbehavior) enum.

Default is `NONE`.

### `content`

A child Control contained by the BottomAppBar.

### `elevation`

This property controls the size of the shadow below the BottomAppBar. Default value is `4`.

### `height`

The height of the BottomAppBar. Defaults to `80.0` when in material 3.

### `notch_margin`

The margin between the `FloatingActionButton` and the BottomAppBar's notch.

Will not be visible if the `shape` is not `None`.

### `padding`

Empty space to inscribe inside a container decoration (background, border). Padding is an instance of [`padding.Padding`](/docs/reference/types/padding) class.

Defaults to `padding.symmetric(vertical=12.0, horizontal=16.0)`.

### `shadow_color`

The [color](/docs/reference/colors) of the shadow below the BottomAppBar. 

### `shape`

The notch that is made for the floating action button. The value is `NotchShape` enum:

* `CIRCULAR`
* `AUTO`

### `surface_tint_color`

The [color](/docs/reference/colors) used as an overlay on `bgcolor` to indicate elevation.

If this is `None`, no overlay will be applied. Otherwise this color will be composited on top of `bgcolor` with an opacity related to `elevation` and used to paint the BottomAppBar's background.

The default is `None`.