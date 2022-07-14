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

### Drag and drop colors

<img src="/img/docs/controls/drag-and-drop/drag-and-drop-colors.gif"className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Column, Container, Draggable, DragTarget, Page, Row, border, colors

def main(page: Page):
    page.title = "Drag and Drop example"

    def drag_will_accept(e):
        e.control.content.border = border.all(
            2, colors.BLACK45 if e.data == "true" else colors.RED
        )
        e.control.update()

    def drag_accept(e):
        src = page.get_control(e.data)
        e.control.content.bgcolor = src.content.bgcolor
        e.control.content.border = None
        e.control.update()

    def drag_leave(e):
        e.control.content.border = None
        e.control.update()

    page.add(
        Row(
            [
                Column(
                    [
                        Draggable(
                            group="color",
                            content=Container(
                                width=50,
                                height=50,
                                bgcolor=colors.CYAN,
                                border_radius=5,
                            ),
                            content_feedback=Container(
                                width=20,
                                height=20,
                                bgcolor=colors.CYAN,
                                border_radius=3,
                            ),
                        ),
                        Draggable(
                            group="color",
                            content=Container(
                                width=50,
                                height=50,
                                bgcolor=colors.YELLOW,
                                border_radius=5,
                            ),
                        ),
                        Draggable(
                            group="color1",
                            content=Container(
                                width=50,
                                height=50,
                                bgcolor=colors.GREEN,
                                border_radius=5,
                            ),
                        ),
                    ]
                ),
                Container(width=100),
                DragTarget(
                    group="color",
                    content=Container(
                        width=50,
                        height=50,
                        bgcolor=colors.BLUE_GREY_100,
                        border_radius=5,
                    ),
                    on_will_accept=drag_will_accept,
                    on_accept=drag_accept,
                    on_leave=drag_leave,
                ),
            ]
        )
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `group`

A group this drag target belongs to. For [DragTarget](dragtarget) to accept incoming drag both `Draggable` and `DragTarget` must be in the same `group`.

### `content`

The `Control` that is a visual representation of the drag target.

## Events

### `on_will_accept`

Fires when draggable is dragged on top of a drag target. `data` field of event details contains `true` (String) if both `Draggable` and `DragTarget` has the same `group`; otherwise `false` (String).

### `on_accept`

Fires when the user does drop the draggable on top of the drag target (and the drag target is in the same `group` with draggable). `data` field of event details contains ID of draggable control. Use `page.get_control(id)` to retrieve Control reference by its ID.

### `on_leave`

Fires when a mouse pointer during ongoing drag event leaves the target.