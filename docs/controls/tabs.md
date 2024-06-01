---
title: Tabs
sidebar_label: Tabs
---

The Tabs control is used for navigating frequently accessed, distinct content categories. Tabs allow for navigation between two or more content views and relies on text headers to articulate the different sections of content.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/tabs)

### Tabs

<img src="/img/docs/controls/tabs/tabs-simple.gif" className="screenshot-60"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):

    t = ft.Tabs(
        selected_index=1,
        animation_duration=300,
        tabs=[
            ft.Tab(
                text="Tab 1",
                content=ft.Container(
                    content=ft.Text("This is Tab 1"), alignment=ft.alignment.center
                ),
            ),
            ft.Tab(
                tab_content=ft.Icon(ft.icons.SEARCH),
                content=ft.Text("This is Tab 2"),
            ),
            ft.Tab(
                text="Tab 3",
                icon=ft.icons.SETTINGS,
                content=ft.Text("This is Tab 3"),
            ),
        ],
        expand=1,
    )

    page.add(t)

ft.app(target=main)
```
  </TabItem>
</Tabs>

## `Tabs` properties

### `animation_duration`

Duration of animation in milliseconds of switching between tabs.

Defaults to `50`.

### `clip_behavior`

The content will be clipped (or not) according to this option. Property value is [`ClipBehavior`](/docs/reference/types/clipbehavior) enum.

### `divider_color`

The [color](/docs/reference/colors) of the divider.

### `divider_height`

The height of the divider. Defaults to `1.0`.

### `enable_feedback`

Whether detected gestures should provide acoustic and/or haptic feedback. On Android, for example, setting this to `True` produce a click sound and a long-press will produce a short vibration. 

Defaults to `True`.

### `indicator_border_radius`

The radius of the indicator's corners.

### `indicator_border_side`

The [color](/docs/reference/colors) and weight of the horizontal line drawn below the selected tab.

### `indicator_color`

The [color](/docs/reference/colors) of the indicator(line that appears below the selected tab).

### `indicator_padding`

Locates the selected tab's underline relative to the tab's boundary. The `indicator_tab_size` property can be used to define the tab indicator's bounds in terms of its (centered) tab widget with `False`, or the entire tab with `True`.

### `indicator_tab_size`

`True` for indicator to take entire tab.

### `indicator_thickness`

The thickness of the indicator. Value must be greater than zero. It defaults to `3.0` when `secondary=False`, else `3.0`.

### `is_secondary`

Whether to create a secondary/nested tab bar. Secondary tabs are used within a content area to further separate related
content and establish hierarchy.

Defaults to `False`.

### `label_color`

The [color](/docs/reference/colors) of selected tab labels.

### `mouse_cursor`

The cursor to be displayed when a mouse pointer enters or is hovering over this control.
The value is [`MouseCursor`](/docs/reference/types/mousecursor) enum.

### `overlay_color`

Defines the ink response focus, hover, and splash [colors](/docs/reference/colors) in
various [`ControlState`](/docs/reference/types/controlstate) states.
The following `ControlState` values are supported: `PRESSED`, `HOVERED` and `FOCUSED`.

### `selected_index`

The index of currently selected tab.

### `scrollable`

Whether this tab bar can be scrolled horizontally.

If `scrollable` is `True`, then each tab is as wide as needed for its label and the entire Tabs controls is scrollable. Otherwise each tab gets an equal share of the available space.

### `tab_alignment`

Specifies the horizontal alignment of the tabs within the Tabs control.

Property value is `TabAlignment` enum with the following values:

* `NONE` 
* `START` (default, if `scrollable` is `True`)
* `START_OFFSET`
* `FILL` (default, if `scrollable` is `False`)
* `CENTER`

### `tabs`

A list of `Tab` controls.

### `unselected_label_color`

The [color](/docs/reference/colors) of unselected tab labels.

## `Tabs` events

### `on_change`

Fires when `selected_index` changes.

## `Tab` properties

### `content`

A `Control` to display below the Tab when it is selected.

### `icon`

An icon to display on the left of Tab text.

### `tab_content`

A `Control` representing custom tab content replacing `text` and `icon`.

### `text`

Tab's display name.