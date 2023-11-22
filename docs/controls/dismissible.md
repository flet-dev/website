---
title: Dismissible
sidebar_label: Dismissible
slug: dismissible
---

A control that can be dismissed by dragging in the indicated `dismiss_direction`. 
When dragged or flung in the specified `dismiss_direction`, it's content smoothly slides out of view.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[//]: # ([Live example]&#40;https://flet-controls-gallery.fly.dev/controls/dismissible&#41;)

### Dismissible ListView Tiles

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page):
    page.window_height, page.window_width = 370, 150

    def handle_dismiss(e):
        lv.controls.remove(e.control)
        page.update()

    def handle_update(e):
        print("update")

    def handle_resize(e):
        print("resize")

    page.add(
        lv := ft.ListView(
            controls=[
                ft.Dismissible(
                    content=ft.ListTile(title=ft.Text(f"Item {i}")),
                    dismiss_direction=ft.DismissDirection.HORIZONTAL,
                    background=ft.Container(bgcolor=ft.colors.GREEN),
                    secondary_background=ft.Container(bgcolor=ft.colors.RED),
                    on_dismiss=handle_dismiss,
                    on_update=handle_update,
                    on_resize=handle_resize,
                    dismiss_thresholds={
                        ft.DismissDirection.HORIZONTAL: 0.1,
                        ft.DismissDirection.START_TO_END: 0.1
                    }
                )
                for i in range(5)
            ]
        )
    )


ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/dismissible/dismissible-listview.gif" className="screenshot-40"/>

## Properties

### `background`

A Control that is stacked behind the `content`. 

If `secondary_background` is also specified, then this control only appears when the content has been dragged down or to the right.

### `content`

A child Control contained by the Dismissible.

### `cross_axis_end_offset`

Specifies the end offset along the main axis once the card has been dismissed.

If non-zero value is given then widget moves in cross direction depending on whether it is positive or negative.

### `direction`

The direction in which the control can be dismissed. Specified using the `DismissDirection` enum:

- `DismissDirection.UP`
- `DismissDirection.DOWN`
- `DismissDirection.LEFT`
- `DismissDirection.RIGHT`
- `DismissDirection.START_TO_END`
- `DismissDirection.END_TO_START`

### `dismiss_thresholds`

The offset threshold the item has to be dragged in order to be considered dismissed. 

Ex: a threshold of `0.4` (the default) means that the item has to be dragged _at least_ 40% in order for it to be dismissed.

It is specified as a dictionary where the key is of type `DismissDirection` and the value is the threshold(fractional/decimal value between `0.0` and `1.0`).:

```python
ft.Dismissible(
    # ...
    dismiss_thresholds={
        ft.DismissDirection.VERTICAL: 0.1,
        ft.DismissDirection.START_TO_END: 0.7
    }
)
```

### `movement_duration`

The duration for card to dismiss or to come back to original position if not dismissed.

### `resize_duration`

The amount of time the control will spend contracting before `on_dismiss` is called.

### `secondary_background`

A control that is stacked behind the `content` and is exposed when the `content` has been dragged up or to the left. 
It may only be specified when `background` has also been specified.

## Events

### `on_dismiss`

Fires when this control has been dismissed, after finishing resizing.

### `on_resize`

Fires when this control changes size, for example, when contracting before being dismissed.

### `on_update`

Fires when this control has been dragged.
