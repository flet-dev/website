---
title: ListView
sidebar_label: ListView
---

A scrollable list of controls arranged linearly.

ListView is the most commonly used scrolling control. It displays its children one after another in the scroll direction. In the cross axis, the children are required to fill the ListView.

:::info
ListView is very effective for large lists (thousands of items). Prefer it over [`Column`](/docs/controls/column) or [`Row`](/docs/controls/row) for smooth scrolling.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/listview)

### Auto-scrolling ListView

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from time import sleep
import flet as ft

def main(page: ft.Page):
    page.title = "Auto-scrolling ListView"

    lv = ft.ListView(expand=1, spacing=10, padding=20, auto_scroll=True)

    count = 1

    for i in range(0, 60):
        lv.controls.append(ft.Text(f"Line {count}"))
        count += 1

    page.add(lv)

    for i in range(0, 60):
        sleep(1)
        lv.controls.append(ft.Text(f"Line {count}"))
        count += 1
        page.update()

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/listview/custom-listview.gif" className="screenshot-40"/>

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

### `clip_behavior`

The content will be clipped (or not) according to this option.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior) and defaults to `HARD_EDGE`.

### `controls`

A list of `Control`s to display inside ListView.

### `divider_thickness`

If greater than `0` then Divider is used as a spacing between list view items.

### `first_item_prototype`

`True` if the dimensions of the first item should be used as a "prototype" for all other items, i.e. their height or
width will be the same as the first item.

Defaults to `False`.

### `horizontal`

`True` to layout ListView items horizontally.

### `item_extent`

A fixed height or width (for `horizontal` ListView) of an item to optimize rendering.

### `on_scroll_interval`

Throttling in milliseconds for `on_scroll` event.

Defaults to `10`.

### `padding`

The amount of space by which to inset the children.

Value is of type[`Padding`](/docs/reference/types/padding).

### `reverse`

Defines whether the scroll view scrolls in the reading direction.

Defaults to `False`.

### `semantic_child_count`

The number of children that will contribute semantic information.

### `spacing`

The height of Divider between ListView items. No spacing between items if not specified.

## Methods

### `scroll_to(offset, delta, key, duration, curve)`

Moves scroll position to either absolute `offset`, relative `delta` or jump to the control with specified `key`.

See [`Column.scroll_to()`](/docs/controls/column#scroll_tooffset-delta-key-duration-curve) for method details and examples.

## Events

### `on_scroll`

Fires when scroll position is changed by a user.

Event handler argument is an instance of [`OnScrollEvent`](/docs/reference/types/onscrollevent) class.