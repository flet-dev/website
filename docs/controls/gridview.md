---
title: GridView
sidebar_label: GridView
---

A scrollable, 2D array of controls.

:::info
GridView is very effective for large lists (thousands of items). Prefer it over wrapping [`Column`](/docs/controls/column) or [`Row`](/docs/controls/row) for smooth scrolling. See [Flet Icons Browser](https://github.com/flet-dev/examples/blob/main/python/apps/icons-browser/main.py) for GridView usage example.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/gridview)

### Photo gallery

<img src="/img/docs/controls/gridview/photo-gallery.png" className="screenshot-50"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "GridView Example"
    page.theme_mode = ft.ThemeMode.DARK
    page.padding = 50
    page.update()

    images = ft.GridView(
        expand=1,
        runs_count=5,
        max_extent=150,
        child_aspect_ratio=1.0,
        spacing=5,
        run_spacing=5,
    )

    page.add(images)

    for i in range(0, 60):
        images.controls.append(
            ft.Image(
                src=f"https://picsum.photos/150/150?{i}",
                fit=ft.ImageFit.NONE,
                repeat=ft.ImageRepeat.NO_REPEAT,
                border_radius=ft.border_radius.all(10),
            )
        )
    page.update()

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```
  </TabItem>
</Tabs>

## Properties

### `auto_scroll`

`True` if scrollbar should automatically move its position to the end when children updated. Must be `False` for `scroll_to()` method to work.

### `cache_extent`

Items that fall in the cache area (area before or after the visible area that are about to become visible when the user
scrolls) are laid out even though they are not (yet) visible on screen.
The cacheExtent describes how many pixels the cache area extends before the leading edge and after the trailing edge of
the viewport.

The total extent, which the viewport will try to cover with `controls`, is `cache_extent` before the leading edge +
extent of the main axis + `cache_extent` after the trailing edge.

### `child_aspect_ratio`

The ratio of the cross-axis to the main-axis extent of each child.

### `clip_behavior`

The content will be clipped (or not) according to this option.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior) and defaults to `ClipBehavior.HARD_EDGE`.

### `controls`

A list of `Control`s to display inside GridView.

### `horizontal`

`True` to layout GridView items horizontally.

### `max_extent`

The maximum width or height of the grid item.

### `on_scroll_interval`

Throttling in milliseconds for `on_scroll` event.

Defaults to `10`.

### `padding`

The amount of space by which to inset the children.

Padding is an instance of [`Padding`](/docs/reference/types/padding).

### `reverse`

Defines whether the scroll view scrolls in the reading direction.

Defaults to `False`.

### `run_spacing`

The number of logical pixels between each child along the cross axis.

### `runs_count`

The number of children in the cross axis.

### `semantic_child_count`

The number of children that will contribute semantic information.

### `spacing`

The number of logical pixels between each child along the main axis.

## Methods

### `scroll_to(offset, delta, key, duration, curve)`

Moves scroll position to either absolute `offset`, relative `delta` or jump to the control with specified `key`.

See [`Column.scroll_to()`](/docs/controls/column#scroll_tooffset-delta-key-duration-curve) for method details and examples.

## Events

### `on_scroll`

Fires when scroll position is changed by a user.

Event handler argument is an instance of [`OnScrollEvent`](/docs/reference/types/onscrollevent) class.