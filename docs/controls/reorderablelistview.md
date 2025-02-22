---
title: ReorderableListView
sidebar_label: ReorderableListView
---

A control that allows the user to reorder its children by dragging a handle.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/autofillgroup)

### Basic example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "ReorderableListView Demo"
    
    # the primary color is the color of the reorder handle
    page.theme = page.dark_theme = ft.Theme(color_scheme=ft.ColorScheme(primary=ft.Colors.BLUE))

    def handle_reorder(e: ft.OnReorderEvent):
        print(f"Reordered from {e.old_index} to {e.new_index}")

    get_color = lambda i: ft.Colors.ERROR if i % 2 == 0 else ft.Colors.ON_ERROR_CONTAINER

    # horizontal
    h = ft.ReorderableListView(
        expand=True,
        horizontal=True,
        on_reorder=handle_reorder,
        controls=[
            ft.Container(
                content=ft.Text(f"Item {i}", color=ft.Colors.BLACK),
                bgcolor=get_color(i),
                margin=ft.margin.symmetric(horizontal=5, vertical=10),
                width=100,
                alignment=ft.alignment.center,
            )
            for i in range(10)
        ],
    )

    # vertical
    v = ft.ReorderableListView(
        expand=True,
        on_reorder=handle_reorder,
        controls=[
            ft.ListTile(
                title=ft.Text(f"Item {i}", color=ft.Colors.BLACK),
                leading=ft.Icon(ft.Icons.CHECK, color=ft.Colors.RED),
                bgcolor=get_color(i),
            )
            for i in range(10)
        ],
    )

    page.add(h, v)


ft.app(main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/autofillgroup/autofillgroup-example.gif" className="screenshot-40"/>

## Properties

### `anchor`

The relative position of the zero scroll offset.

Defaults to `0.0`.

### `auto_scroller_velocity_scalar`

The velocity scalar per pixel over scroll. It represents how the velocity scale with the over scroll distance. The auto-scroll velocity = (distance of overscroll) * velocity scalar.

### `build_controls_on_demand`

Whether the `controls` should be built lazily/on-demand, i.e. only when they are about to become visible. 
This is particularly useful when dealing with a large number of controls.

Defaults to `True`.

### `cache_extent`

The viewport has an area before and after the visible area to cache items that are about to become visible when the user scrolls.

Items that fall in this cache area are laid out even though they are not (yet) visible on screen. The `cache_extent` describes how many pixels the cache area extends before the leading edge and after the trailing edge of the viewport.

The total extent, which the viewport will try to cover with children, is `cache_extent` before the leading edge + extent of the main axis + `cache_extent` after the trailing edge.

The cache area is also used to implement implicit accessibility scrolling on iOS: When the accessibility focus moves from an item in the visible viewport to an invisible item in the cache area, the framework will bring that item into view with an (implicit) scroll action.

### `controls`

The controls to be reordered.

### `clip_behavior`

The content will be clipped (or not) according to this option.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior) and defaults to `ClipBehavior.HARD_EDGE`.

### `first_item_prototype`

`True` if the dimensions of the first item should be used as a "prototype" for all other items, i.e. their height or
width will be the same as the first item.

Defaults to `False`.

### `footer`

A non-reorderable footer item to show after the `controls`.

Value is of type `Control`.

### `header`

A non-reorderable header item to show before the `controls`.

Value is of type `Control`.

### `horizontal`

Whether the `controls` should be laid out horizontally.

Defaults to `False`.

### `item_extent`

If non-null, forces the children to have the given extent in the scroll direction.

Specifying an `item_extent` is more efficient than letting the children determine their own extent because the scrolling machinery can make use of the foreknowledge of the children's extent to save work, for example when the scroll position changes drastically.

### `padding`

The amount of space by which to inset the `controls`.

Value is of type [`Padding`](/docs/reference/types/padding).

## Events

### `on_reorder`

Fires when a child control has been dragged to a new location in the list and the application should update the order of the items.

### `on_reorder_end`

Fires when the dragged item is dropped.

### `on_reorder_start`

Fires when an item drag has started.

Event handler argument is of type [`OnReorderEvent`](/docs/reference/types/onreorderevent).

