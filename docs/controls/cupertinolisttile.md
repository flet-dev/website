---
title: CupertinoListTile
sidebar_label: CupertinoListTile
---

An iOS-style list tile. The CupertinoListTile is a Cupertino equivalent of Material [ListTile](listtile).

It comes in two forms, an old-fashioned edge-to-edge variant known from iOS Settings app and in a new, "Inset Grouped" form, known from either iOS Notes or Reminders app. The first form is created if `notched` property is `False` (default value) and the second form is created is [`notched`](cupertinolisttile#notched) is `True`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/cupertinolisttile)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    def tile_clicked(e):
        print("Tile clicked")

    page.add(
        ft.CupertinoListTile(
            additional_info=ft.Text("Wed Jan 24"),
            bgcolor_activated=ft.colors.AMBER_ACCENT,
            leading=ft.Icon(name=ft.cupertino_icons.GAME_CONTROLLER),
            title=ft.Text("CupertinoListTile not notched"),
            subtitle=ft.Text("Subtitle"),
            trailing=ft.Icon(name=ft.cupertino_icons.ALARM),
            on_click=tile_clicked,
        ),
        ft.CupertinoListTile(
            notched=True,
            additional_info=ft.Text("Thu Jan 25"),
            leading=ft.Icon(name=ft.cupertino_icons.GAME_CONTROLLER),
            title=ft.Text("CupertinoListTile notched"),
            subtitle=ft.Text("Subtitle"),
            trailing=ft.Icon(name=ft.cupertino_icons.ALARM),
            on_click=tile_clicked,
        ),
    )


ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertinolisttile/cupertinolisttile-example.png" className="screenshot-70"/>

## Properties

### `additional_info`

A `Control` to display on the right of the list tile, before `trailing`. Similar to `subtitle`, an `additional_info` is used to display additional information. Usually a [Text](text) control.

### `bgcolor`

The list tile's background [color](/docs/reference/colors).

### `bgcolor_activated`

The list tile's background [color](/docs/reference/colors) after the tile was tapped.

### `leading`

A `Control` to display before the `title`.

### `leading_size`

The `leading_size` is used to constrain the width and height of `leading` control. The default value is `28.0`.

### `leading_to_title`

The horizontal space between `leading` and `title`. The default value is `16.0`.

### `notched`

If `True`, list tile will be created in an "Inset Grouped" form, known from either iOS Notes or Reminders app. The default value is `False`.

### `padding`

The tile's internal padding. Insets a CupertinoListTile's contents: its `leading`, `title`, `subtitle`, `additional_info` and `trailing` controls.

See [`Container.padding`](container#padding) property for more information and possible values.

### `subtitle`

Additional content displayed below the title. Typically a [Text](text) control.

### `title`

A `Control` to display as primary content of the list tile. Typically a [Text](text) control.

### `toggle_inputs`

Whether clicking on a list tile should toggle the state of `Radio`, `Checkbox` or `Switch` inside the tile. Default is `False`.

### `trailing`

A `Control` to display after the title. Typically an [Icon](icon) control.

### `url`

The URL to open when the list tile is clicked. If registered, `on_click` event is fired after that.

### `url_target`

Where to open URL in the web mode:

* `_blank` (default) - new tab/window.
* `_self` - the current tab/window.

## Events

### `on_click`

Fires when a user clicks or taps the list tile.