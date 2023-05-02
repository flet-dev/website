---
title: DragTarget
sidebar_label: DragTarget
slug: dragtarget
---

A control that completes drag operation when a [Draggable](#draggable) widget is dropped.

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

    def drag_accept(e):
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

A group this drag target belongs to. For [DragTarget](dragtarget) to accept incoming drag both `Draggable` and `DragTarget` must be in the same `group`.

## Events

### `on_accept`

Fires when the user does drop the draggable on top of the drag target (and the drag target is in the same `group` with draggable). Event handler argument is an instance of `DragTargetAcceptEvent` class with the following fields:

* `src_id` - unique control ID of draggable.
* `x` - x component of the global position when the specific pointer event occurred on the draggable.
* `y` - y component of the global position when the specific pointer event occurred on the draggable.

Use `page.get_control(e.src_id)` to retrieve Control reference by its ID.

### `on_leave`

Fires when a mouse pointer during ongoing drag event leaves the target.

### `on_will_accept`

Fires when draggable is dragged on top of a drag target. `data` field of event details contains `true` (String) if both `Draggable` and `DragTarget` has the same `group`; otherwise `false` (String).