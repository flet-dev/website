---
title: ListTile
sidebar_label: ListTile
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

### `adaptive`

If the value is `True`, an adaptive ListTile is created based on whether the target platform is iOS/macOS.

On iOS and macOS, a [`CupertinoListTile`](/docs/controls/cupertinolisttile) is created, which has matching functionality and presentation as `ListTile`, and the graphics as expected on iOS. On other platforms, a Material ListTile is created.

If a `CupertinoListTile` is created, the following parameters are ignored: `autofocus`, `dense`, `is_three_line`, `selected` and `on_long_press` event.

The default value is `False`.

### `autofocus`

`True` if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `bgcolor`

The list tile's background [color](/docs/reference/colors).

### `bgcolor_activated`

The list tile's splash [color](/docs/reference/colors) after the tile was tapped.

### `content_padding`

The tile's internal padding. Insets a ListTile's contents: its `leading`, `title`, `subtitle`, and `trailing` controls.

Padding is an instance of [`padding.Padding`](/docs/reference/types/padding) class. If not set, `padding.symmetric(horizontal=16)` is used.

### `dense`

Whether this list tile is part of a vertically dense list. Dense list tiles default to a smaller height.

### `enable_feedback`

Whether detected gestures should provide acoustic and/or haptic feedback. On Android, for example, setting this to `True` produce a click sound and a long-press will produce a short vibration. 

Defaults to `True`.

### `horizontal_spacing`

The horizontal gap between the `title` and the `leading`/`trailing` controls. Defaults to `16`.

### `hover_color`

The tile's [color](/docs/reference/colors) when hovered.

### `icon_color`

Defines the default [color](/docs/reference/colors) for the `Icon`s present in `leading` and `trailing`.

### `is_three_line`

Whether this list tile is intended to display three lines of text.

If `True`, then subtitle must be non-null (since it is expected to give the second and third lines of text).

If `False`, the list tile is treated as having one line if the subtitle is null and treated as having two lines if the subtitle is non-null.

When using a Text control for title and subtitle, you can enforce line limits using [Text.max_lines](/docs/controls/text#max_lines).

### `leading`

A `Control` to display before the title.

### `leading_and_trailing_text_style`

The [`TextStyle`](/docs/reference/types/textstyle) for the `leading` and `trailing` controls.

### `min_leading_width`

The minimum width allocated for the `leading` control. Defaults to `40`.

### `min_vertical_padding`

The minimum padding on the top and bottom of the `title` and `subtitle` controls. Defaults to `4`.

### `mouse_cursor`

The cursor to be displayed when a mouse pointer enters or is hovering over this control.
The value is [`MouseCursor`](/docs/reference/types/mousecursor) enum.

### `selected`

If this tile is also enabled then icons and text are rendered with the same color. By default the selected color is the theme's primary color.

### `selected_color`

Defines the [color](/docs/reference/colors) used for icons and text when `selected=True`.

### `selected_tile_color`

Defines the background [color](/docs/reference/colors) of ListTile when `selected=True`.

### `shape`

The tile's shape. The value is an instance of [`OutlinedBorder`](/docs/reference/types/outlinedborder) class.

### `subtitle`

Additional content displayed below the title. Typically a [Text](/docs/controls/text) widget.

If `is_three_line` is `False`, this should not wrap. If `is_three_line` is `True`, this should be configured to take a maximum of two lines. For example, you can use [Text.max_lines](/docs/controls/text#max_lines) to enforce the number of lines.

### `subtitle_text_style`

The [`TextStyle`](/docs/reference/types/textstyle) for the `subtitle` control.

### `style`

Defines the font used for the title. Value is `ListTileStyle` enum, which has two possible values: 

* `LIST`(default) - uses a title font that's appropriate for a ListTile in a list
* `DRAWER`: uses a title font that's appropriate for a ListTile that appears in a `Drawer`.

### `text_color`

The [color](/docs/reference/colors) used for text. Defines the color of `Text` controls found in `title`, `subtitle`, `leading`, and `trailing`.

### `title`

A `Control` to display as primary content of the list tile. Typically a [Text](/docs/controls/text) control. This should not wrap. To enforce the single line limit, use [Text.max_lines](/docs/controls/text#max_lines).

### `title_alignment`

Defines how `leading` and `trailing` are vertically aligned relative to the titles (`title` and `subtitle`). Value is `ListTileAlignment` enum, which has three possible values:

* `TOP` - the tops of the `leading` and `trailing` controls are placed `min_vertical_padding` below the top of `title`
* `CENTER` - centers the `leading` and `trailing` controls relative to the titles
* `BOTTOM` - the bottoms of the `leading` and `trailing` controls are placed `min_vertical_padding` above the bottom of `title`
* `THREE_LINE` (default in Material3) - the top of the `leading` and `trailing` controls are placed `min_vertical_padding` below the top of the `title` if `is_three_line=True`, otherwise they're centered relative to the titles
* `TITLE_HEIGHT` (default in Material2) - the tops of the `leading` and `trailing` controls are placed `16` units below the top of the `title` if the titles' overall height is greater than `72`, otherwise they're centered relative to the titles.

### `title_text_style`

The [`TextStyle`](/docs/reference/types/textstyle) for the `title` control.

### `toggle_inputs`

Whether clicking on a list tile should toggle the state of `Radio`, `Checkbox` or `Switch` inside the tile. Default is `False`.

### `trailing`

A `Control` to display after the title. Typically an [Icon](/docs/controls/icon) control.

### `url`

The URL to open when the list tile is clicked. If registered, `on_click` event is fired after that.

### `url_target`

Where to open URL in the web mode.

Value is of type [`UrlTarget`](/docs/reference/types/urltarget) and defaults to `UrlTarget.BLANK`.

### `visual_density`

Defines how compact the control's layout will be. Value is of [`ThemeVisualDensity`](/docs/reference/types/themevisualdensity) enum.

## Events

### `on_click`

Fires when a user clicks or taps the list tile.

### `on_long_press`

Fires when the user long-presses on this list tile.