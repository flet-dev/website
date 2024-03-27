---
title: ExpansionTile
sidebar_label: ExpansionTile
slug: expansiontile
---

A single-line ListTile with an expansion arrow icon that expands or collapses the tile to reveal or hide its children.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/expansiontile)

<img src="/img/docs/controls/expansion-tile/expansion-tile.png" className="screenshot-50"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.spacing = 0
    page.theme_mode = ft.ThemeMode.LIGHT
    page.padding = ft.padding.only(top=0)

    def handle_expansion_tile_change(e):
        page.show_snack_bar(
            ft.SnackBar(ft.Text(f"ExpansionTile was {'expanded' if e.data=='true' else 'collapsed'}"), duration=1000)
        )
        if e.control.trailing:
            e.control.trailing.name = (
                ft.icons.ARROW_DROP_DOWN
                if e.control.trailing.name == ft.icons.ARROW_DROP_DOWN_CIRCLE
                else ft.icons.ARROW_DROP_DOWN_CIRCLE
            )
            page.update()

    page.add(
        ft.ExpansionTile(
            title=ft.Text("ExpansionTile 1"),
            subtitle=ft.Text("Trailing expansion arrow icon"),
            affinity=ft.TileAffinity.PLATFORM,
            maintain_state=True,
            collapsed_text_color=ft.colors.RED,
            text_color=ft.colors.RED,
            controls=[ft.ListTile(title=ft.Text("This is sub-tile number 1"))],
        ),
        ft.ExpansionTile(
            title=ft.Text("ExpansionTile 2"),
            subtitle=ft.Text("Custom expansion arrow icon"),
            trailing=ft.Icon(ft.icons.ARROW_DROP_DOWN),
            collapsed_text_color=ft.colors.GREEN,
            text_color=ft.colors.GREEN,
            on_change=handle_expansion_tile_change,
            controls=[ft.ListTile(title=ft.Text("This is sub-tile number 2"))],
        ),
        ft.ExpansionTile(
            title=ft.Text("ExpansionTile 3"),
            subtitle=ft.Text("Leading expansion arrow icon"),
            affinity=ft.TileAffinity.LEADING,
            initially_expanded=True,
            collapsed_text_color=ft.colors.BLUE,
            text_color=ft.colors.BLUE,
            controls=[
                ft.ListTile(title=ft.Text("This is sub-tile number 3")),
                ft.ListTile(title=ft.Text("This is sub-tile number 4")),
                ft.ListTile(title=ft.Text("This is sub-tile number 5")),
            ],
        ),
    )


ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `affinity`

Typically used to force the expansion arrow icon to the tile's leading or trailing edge. 

Property value is `TileAffinity` enum with supported values:

* `LEADING`
* `TRAILING`
* `PLATFORM` (default)

### `bgcolor`

The  [color](/docs/guides/python/colors) to display behind the sublist when expanded.

### `controls`

The controls to be displayed when the tile expands. Typically `ListTile` controls.

### `controls_padding`

Defines the padding around the `controls`.

See [`Container.padding`](container#padding) for more information and possible values.

### `clip_behavior`

The content will be clipped (or not) according to this option. Property value is `ClipBehavior` enum. See [`Container.clip_behavior`](container#clip_behavior) for possible values.

Defaults to `ClipBehavior.NONE`.

### `collapsed_bgcolor`

Defines the background [color](/docs/guides/python/colors) of tile when the sublist is collapsed.

### `collapsed_icon_color`

The icon [color](/docs/guides/python/colors) of tile's expansion arrow icon when the sublist is collapsed.

### `collapsed_shape`

The tile's border shape when the sublist is collapsed. The value is an instance of type `OutlinedBorder` from which the below inherit:

* `StadiumBorder`
* `RoundedRectangleBorder`
  * `radius` - border radius, an instance of `BorderRadius` class or a number.
* `CircleBorder`
* `BeveledRectangleBorder`
  * `radius` - border radius, an instance of `BorderRadius` class or a number.
* `ContinuousRectangleBorder`
  * `radius` - border radius, an instance of `BorderRadius` class or a number.

### `collapsed_text_color`

The [color](/docs/guides/python/colors) of the tile's titles when the sublist is collapsed.

### `expanded_alignment`

Defines the alignment of children, which are arranged in a column when the tile is expanded.

See [`Container.alignment`](container#alignment) property for more information and possible values.


### `expanded_cross_axis_alignment`

Defines the alignment of each child control within `controls` when the tile is expanded.

Property value is `CrossAxisAlignment` enum with the following values:

* `START` 
* `CENTER` (default)
* `END`
* `STRETCH`
* `BASELINE`

### `icon_color`

The icon [color](/docs/guides/python/colors) of tile's expansion arrow icon when the sublist is expanded.

### `initially_expanded`

A boolean value which defines whether the tile is initially expanded or collapsed. Default value is `False`.

### `leading`

A `Control` to display before the title.

### `maintain_state`

A boolean value which defines whether the state of the `controls` is maintained when the tile expands and collapses. Default value is `False`.

### `shape`

The tile's border shape when the sublist is expanded. The value is an instance of type `OutlinedBorder` from which the below inherit:

* `StadiumBorder`
* `RoundedRectangleBorder`
  * `radius` - border radius, an instance of `BorderRadius` class or a number.
* `CircleBorder`
* `BeveledRectangleBorder`
  * `radius` - border radius, an instance of `BorderRadius` class or a number.
* `ContinuousRectangleBorder`
  * `radius` - border radius, an instance of `BorderRadius` class or a number.

### `subtitle`

Additional content displayed below the title. Typically a [Text](text) widget.

### `text_color`

The [color](/docs/guides/python/colors) of the tile's titles when the sublist is expanded.

### `tile_padding`

Defines the tile's padding. Default value is `padding.symmetric(horizontal=16.0)`.

See [`Container.padding`](container#padding) for more information and possible values.

### `title`

A `Control` to display as primary content of the tile. Typically a [Text](text) control.

### `trailing`

A `Control` to display after the title. Typically an [Icon](icon) control.

## Events

### `on_change`

Fires when a user clicks or taps the list tile.

### `on_long_press`

Fires when the user long-presses on this list tile.