---
title: DragTarget
sidebar_label: DragTarget
---

A control that completes drag operation when a [`Draggable`](/docs/controls/draggable) widget is dropped.

When a draggable is dragged on top of a drag target, the drag target is asked whether it will accept the data the draggable is carrying. The drag target will accept incoming drag if it belongs to the same `group` as draggable. If the user does drop the draggable on top of the drag target (and the drag target has indicated that it will accept the draggable's data), then the drag target is asked to accept the draggable's data.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/utility/draggable)

### Drag and drop colors

<img src="/img/docs/controls/drag-and-drop/drag-and-drop-colors.gif" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Drag and Drop example"

    def drag_will_accept(e):
        e.control.content.border = ft.border.all(
            2, ft.colors.BLACK45 if e.data == "true" else ft.colors.RED
        )
        e.control.update()

    def drag_accept(e: ft.DragTargetEvent):
        src = page.get_control(e.src_id)
        e.control.content.bgcolor = src.content.bgcolor
        e.control.content.border = None
        e.control.update()

    def drag_leave(e):
        e.control.content.border = None
        e.control.update()

    page.add(
        ft.Row(
            [
                ft.Column(
                    [
                        ft.Draggable(
                            group="color",
                            content=ft.Container(
                                width=50,
                                height=50,
                                bgcolor=ft.colors.CYAN,
                                border_radius=5,
                            ),
                            content_feedback=ft.Container(
                                width=20,
                                height=20,
                                bgcolor=ft.colors.CYAN,
                                border_radius=3,
                            ),
                        ),
                        ft.Draggable(
                            group="color",
                            content=ft.Container(
                                width=50,
                                height=50,
                                bgcolor=ft.colors.YELLOW,
                                border_radius=5,
                            ),
                        ),
                        ft.Draggable(
                            group="color1",
                            content=ft.Container(
                                width=50,
                                height=50,
                                bgcolor=ft.colors.GREEN,
                                border_radius=5,
                            ),
                        ),
                    ]
                ),
                ft.Container(width=100),
                ft.DragTarget(
                    group="color",
                    content=ft.Container(
                        width=50,
                        height=50,
                        bgcolor=ft.colors.BLUE_GREY_100,
                        border_radius=5,
                    ),
                    on_will_accept=drag_will_accept,
                    on_accept=drag_accept,
                    on_leave=drag_leave,
                ),
            ]
        )
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `content`

The `Control` that is a visual representation of the drag target.

### `group`

The group this target belongs to. Note that for this target to accept an incoming drop from a [`Draggable`](/docs/controls/draggable), they must both be in thesame group.

## Events

### `on_accept`

Fires when the user does drop an acceptable(same `group`) draggable on this target.

Event handler argument is an instance of [`DragTargetEvent`](/docs/reference/types/dragtargetevent).

Use `page.get_control(e.src_id)` to retrieve Control reference by its ID.

### `on_leave`

Fires when a draggable leaves this target.

### `on_move`

Fires when a draggable moves within this target.

Event handler argument is of type [`DragTargetEvent`](/docs/reference/types/dragtargetevent).

### `on_will_accept`

Fires when a draggable is dragged on this target. `data` field of event details contains `true` (String) if both the draggable and this target are in the same `group`; otherwise `false` (String).