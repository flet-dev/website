---
title: ListTile
sidebar_label: ListTile
slug: listtile
---

A single fixed-height row that typically contains some text as well as a leading or trailing icon.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/listtile)

<img src="/img/docs/controls/listtile/listtiles.png" className="screenshot-50"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.title = "ListTile Examples"
    page.add(
        ft.Card(
            content=ft.Container(
                width=500,
                content=ft.Column(
                    [
                        ft.ListTile(
                            title=ft.Text("One-line list tile"),
                        ),
                        ft.ListTile(title=ft.Text("One-line dense list tile"), dense=True),
                        ft.ListTile(
                            leading=ft.Icon(ft.icons.SETTINGS),
                            title=ft.Text("One-line selected list tile"),
                            selected=True,
                        ),
                        ft.ListTile(
                            leading=ft.Image(src="/icons/icon-192.png", fit="contain"),
                            title=ft.Text("One-line with leading control"),
                        ),
                        ft.ListTile(
                            title=ft.Text("One-line with trailing control"),
                            trailing=ft.PopupMenuButton(
                                icon=ft.icons.MORE_VERT,
                                items=[
                                    ft.PopupMenuItem(text="Item 1"),
                                    ft.PopupMenuItem(text="Item 2"),
                                ],
                            ),
                        ),
                        ft.ListTile(
                            leading=ft.Icon(ft.icons.ALBUM),
                            title=ft.Text("One-line with leading and trailing controls"),
                            trailing=ft.PopupMenuButton(
                                icon=ft.icons.MORE_VERT,
                                items=[
                                    ft.PopupMenuItem(text="Item 1"),
                                    ft.PopupMenuItem(text="Item 2"),
                                ],
                            ),
                        ),
                        ft.ListTile(
                            leading=ft.Icon(ft.icons.SNOOZE),
                            title=ft.Text("Two-line with leading and trailing controls"),
                            subtitle=ft.Text("Here is a second title."),
                            trailing=ft.PopupMenuButton(
                                icon=ft.icons.MORE_VERT,
                                items=[
                                    ft.PopupMenuItem(text="Item 1"),
                                    ft.PopupMenuItem(text="Item 2"),
                                ],
                            ),
                        ),
                    ],
                    spacing=0,
                ),
                padding=ft.padding.symmetric(vertical=10),
            )
        )
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `autofocus`

`True` if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `content_padding`

The tile's internal padding. Insets a ListTile's contents: its `leading`, `title`, `subtitle`, and `trailing` controls.

If not set, `padding.symmetric(horizontal=16)` is used.

See [`Container.padding`](container#padding) property for more information and possible values.

### `dense`

Whether this list tile is part of a vertically dense list. Dense list tiles default to a smaller height.

### `is_three_line`

Whether this list tile is intended to display three lines of text.

If `True`, then subtitle must be non-null (since it is expected to give the second and third lines of text).

If `False`, the list tile is treated as having one line if the subtitle is null and treated as having two lines if the subtitle is non-null.

When using a Text control for title and subtitle, you can enforce line limits using [Text.max_lines](text#max_lines).

### `leading`

A `Control` to display before the title.

### `selected`

If this tile is also enabled then icons and text are rendered with the same color. By default the selected color is the theme's primary color.

### `subtitle`

Additional content displayed below the title. Typically a [Text](text) widget.

If `is_three_line` is `False`, this should not wrap. If `is_three_line` is `True`, this should be configured to take a maximum of two lines. For example, you can use [Text.max_lines](text#max_lines) to enforce the number of lines.

### `title`

A `Control` to display as primary content of the list tile. Typically a [Text](text) control. This should not wrap. To enforce the single line limit, use [Text.max_lines](text#max_lines).

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

### `on_long_press`

Fires when the user long-presses on this list tile.