---
title: GestureDetector
sidebar_label: GestureDetector
slug: gesturedetector
---

A control that detects gestures.

Attempts to recognize gestures that correspond to its non-null callbacks.

If this control has a `content`, it defers to that child control for its sizing behavior. If it does not have a `content`, it grows to fit the parent instead.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Draggable containers

The following example demonstraits how a control can be freelly dragged inside a Stack.

The sample also shows that GestureDetector can have a child control (blue container) as well as be nested inside another control (yellow container) giving the same results.

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import (
    Container,
    DragUpdateEvent,
    GestureDetector,
    MouseCursor,
    Page,
    Stack,
    colors,
)

def main(page: Page):
    def on_pan_update1(e: DragUpdateEvent):
        c.top = max(0, c.top + e.delta_y)
        c.left = max(0, c.left + e.delta_x)
        c.update()

    def on_pan_update2(e: DragUpdateEvent):
        e.control.top = max(0, e.control.top + e.delta_y)
        e.control.left = max(0, e.control.left + e.delta_x)
        e.control.update()

    gd = GestureDetector(
        mouse_cursor=MouseCursor.MOVE,
        drag_interval=50,
        on_pan_update=on_pan_update1,
    )

    c = Container(gd, bgcolor=colors.AMBER, width=50, height=50, left=0, top=0)

    gd1 = GestureDetector(
        mouse_cursor=MouseCursor.MOVE,
        drag_interval=10,
        on_vertical_drag_update=on_pan_update2,
        left=100,
        top=100,
        content=Container(bgcolor=colors.BLUE, width=50, height=50),
    )

    page.add(Stack([c, gd1], width=1000, height=500))

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `content`

A child Control contained by the gesture detector.

### `mouse_cursor`

The mouse cursor for mouse pointers that are hovering over the control. Possible values of `MouseCursor` enum:

* `ALIAS`
* `ALL_SCROLL`
* `BASIC`
* `CELL`
* `CLICK`
* `CONTEXT_MENU`
* `COPY`
* `DISAPPEARING`
* `FORBIDDEN`
* `GRAB`
* `GRABBING`
* `HELP`
* `MOVE`
* `NO_DROP`
* `NONE`
* `PRECISE`
* `PROGRESS`
* `RESIZE_COLUMN`
* `RESIZE_DOWN`
* `RESIZE_DOWN_LEFT`
* `RESIZE_DOWN_RIGHT`
* `RESIZE_LEFT`
* `RESIZE_LEFT_RIGHT`
* `RESIZE_RIGHT`
* `RESIZE_ROW`
* `RESIZE_UP`
* `RESIZE_UP_DOWN`
* `RESIZE_UP_LEFT`
* `RESIZE_UP_LEFT_DOWN_RIGHT`
* `RESIZE_UP_RIGHT`
* `RESIZE_UP_RIGHT_DOWN_LEFT`
* `TEXT`
* `VERTICAL_TEXT`
* `WAIT`
* `ZOOM_IN`
* `ZOOM_OUT`

### `drag_interval`

Throttling in milliseconds for horizontal drag, vertical drag and pan update events. When a user moves a pointer a lot of events are being generated to do precise tracking. `drag_interval` allows sending drag update events to a Flet program every X milliseconds, thus preserving the bandwidth (web and mobile apps). Default is `0` - no throttling, all events are sent to a Flet program, very smooth tracking.

### `hover_interval`

Throttling in milliseconds for `on_hover` event.

## Events

### `on_tap`

A tap with a primary button has occurred.

### `on_tap_down`

A pointer that might cause a tap with a primary button has contacted the screen at a particular location.

Event handler argument is an instance of `TapEvent` class with the following properties:

* `local_x` - x component of the local position at which the pointer contacted the screen.
* `local_y` - y component of the local position at which the pointer contacted the screen.
* `global_x` - x component of the global position at which the pointer contacted the screen.
* `global_y` - y component of the global position at which the pointer contacted the screen.
* `kind` - The kind of the device that initiated the event.

### `on_tap_up`

### `on_secondary_tap`

### `on_secondary_tap_down`

### `on_secondary_tap_up`

### `on_long_press_start`

### `on_long_press_end`

### `on_secondary_long_press_start`

### `on_secondary_long_press_end`

### `on_double_tap`

### `on_double_tap_down`

### `on_horizontal_drag_start`

### `on_horizontal_drag_update`

### `on_horizontal_drag_end`

### `on_vertical_drag_start`

### `on_vertical_drag_update`

### `on_vertical_drag_end`

### `on_pan_start`

### `on_pan_update`

### `on_pan_end`

### `on_scale_start`

### `on_scale_update`

### `on_scale_end`

### `on_hover`

### `on_enter`

### `on_exit`