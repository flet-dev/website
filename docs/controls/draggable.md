---
title: Draggable
sidebar_label: Draggable
slug: draggable
---

A control that can be dragged from to a [DragTarget](dragtarget).

When a draggable control recognizes the start of a drag gesture, it displays a [`content_feedback`](#content_feedback) control that tracks the user's finger across the screen. If the user lifts their finger while on top of a [DragTarget](dragtarget), that target is given the opportunity to complete drag-and-drop flow.

This control displays [`content`](#content) when zero drags are under way. If [`content_when_dragging`](#contentwhendragging) is non-null, this control instead displays `content_when_dragging` when one or more drags are underway. Otherwise, this widget always displays `content`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

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
        src = page.get_control(e.data)
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
                            content = ft.Container(
                                width = 50,
                                height = 50,
                                bgcolor = ft.colors.CYAN,
                                border_radius = 5,
                            ),
                            content_feedback=ft.Container(
                                width = 20,
                                height = 20,
                                bgcolor = ft.colors.CYAN,
                                border_radius = 3,
                            ),
                        ),
                        ft.Draggable(
                            group="color",
                            content = ft.Container(
                                width = 50,
                                height = 50,
                                bgcolor = ft.colors.YELLOW,
                                border_radius = 5,
                            ),
                        ),
                        ft.Draggable(
                            group="color1",
                            content = ft.Container(
                                width = 50,
                                height = 50,
                                bgcolor = ft.colors.GREEN,
                                border_radius = 5,
                            ),
                        ),
                    ]
                ),
                ft.Container(width = 100),
                ft.DragTarget(
                    group="color",
                    content = ft.Container(
                        width = 50,
                        height = 50,
                        bgcolor = ft.colors.BLUE_GREY_100,
                        border_radius = 5,
                    ),
                    on_will_accept=drag_will_accept,
                    on_accept=drag_accept,
                    on_leave=drag_leave,
                ),
            ]
        )
    )

ft.app(target = main)
```
  </TabItem>
</Tabs>

## Properties

### `group`

A group this draggable belongs to. For [DragTarget](dragtarget) to accept incoming drag both `Draggable` and `DragTarget` must be in the same `group`.

### `content`

`Draggable` control displays [`content`](#content) when zero drags are under way. If [`content_when_dragging`](#contentwhendragging) is non-null, this control instead displays `content_when_dragging` when one or more drags are underway. Otherwise, this control always displays `content`.

### `content_when_dragging`

The `Control` to display instead of `content` when one or more drags are under way.

If this is `None`, then this widget will always display `content` (and so the drag source representation will not change while a drag is under way).

### `content_feedback`

The `Control` to show under the pointer when a drag is under way.