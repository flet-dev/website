---
title: GestureDetector
sidebar_label: GestureDetector
---

A control that detects gestures.

Attempts to recognize gestures that correspond to its non-null callbacks.

If this control has a `content`, it defers to that child control for its sizing behavior. If it does not have a `content`, it grows to fit the parent instead.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/utility/gesturedetector)

[Solitare game tutorial](https://flet.dev/docs/tutorials/python-solitaire)

### Draggable containers

The following example demonstrates how a control can be freely dragged inside a Stack.

The sample also shows that GestureDetector can have a child control (blue container) as well as be nested inside another control (yellow container) giving the same results.

<img src="/img/docs/controls/gesture-detector/gesture-detector-two-containers.gif" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def on_pan_update1(e: ft.DragUpdateEvent):
        c.top = max(0, c.top + e.delta_y)
        c.left = max(0, c.left + e.delta_x)
        c.update()

    def on_pan_update2(e: ft.DragUpdateEvent):
        e.control.top = max(0, e.control.top + e.delta_y)
        e.control.left = max(0, e.control.left + e.delta_x)
        e.control.update()

    gd = ft.GestureDetector(
        mouse_cursor=ft.MouseCursor.MOVE,
        drag_interval=50,
        on_pan_update=on_pan_update1,
    )

    c = ft.Container(gd, bgcolor=ft.colors.AMBER, width=50, height=50, left=0, top=0)

    gd1 = ft.GestureDetector(
        mouse_cursor=ft.MouseCursor.MOVE,
        drag_interval=10,
        on_vertical_drag_update=on_pan_update2,
        left=100,
        top=100,
        content=ft.Container(bgcolor=ft.colors.BLUE, width=50, height=50),
    )

    page.add( ft.Stack([c, gd1], width=1000, height=500))

ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `content`

A child Control contained by the gesture detector.

### `mouse_cursor`

The mouse cursor for mouse pointers that are hovering over the control. The value is [`MouseCursor`](/docs/reference/types/mousecursor) enum.

### `drag_interval`

Throttling in milliseconds for horizontal drag, vertical drag and pan update events. When a user moves a pointer a lot of events are being generated to do precise tracking. `drag_interval` allows sending drag update events to a Flet program every X milliseconds, thus preserving the bandwidth (web and mobile apps). Default is `0` - no throttling, all events are sent to a Flet program, very smooth tracking.

### `hover_interval`

Throttling in milliseconds for `on_hover` event.

## Events

### `multi_tap_touches`

The minimum number of pointers to trigger `on_multi_tap` event.

### `on_double_tap`

The user has tapped the screen with a primary button at the same location twice in quick succession.

### `on_double_tap_down`

A pointer that might cause a double tap has contacted the screen at a particular location.

Triggered immediately after the down event of the second tap.

Event handler argument is an instance of `TapEvent` class.

### `on_enter`

Triggered when a mouse pointer has entered this control.

Event handler argument is an instance of `HoverEvent` class.

### `on_exit`

Triggered when a mouse pointer has exited this control.

Event handler argument is an instance of `HoverEvent` class.

### `on_horizontal_drag_end`

A pointer that was previously in contact with the screen with a primary button and moving horizontally is no longer in contact with the screen and was moving at a specific velocity when it stopped contacting the screen.

Event handler argument is an instance of `DragEndEvent` class with the following properties:

* `primary_velocity` - the velocity the pointer was moving along the primary axis when it stopped contacting the screen, in logical pixels per second.
* `velocity_x` - x component of the pointer's velocity when it stopped contacting the screen.
* `velocity_y` - y component of the pointer's velocity when it stopped contacting the screen.

### `on_horizontal_drag_start`

A pointer has contacted the screen with a primary button and has begun to move horizontally.

Event handler argument is an instance of `DragStartEvent` class with the following properties:

* `local_x` - x component of the local position at which the pointer contacted the screen.
* `local_y` - y component of the local position at which the pointer contacted the screen.
* `global_x` - x component of the global position at which the pointer contacted the screen.
* `global_y` - y component of the global position at which the pointer contacted the screen.
* `timestamp` - Recorded timestamp of the source pointer event that triggered the drag event.

### `on_horizontal_drag_update`

A pointer that is in contact with the screen with a primary button and moving horizontally has moved in the horizontal direction.

Event handler argument is an instance of `DragUpdateEvent` class with the following properties:

* `delta_x` - x component of the amount the pointer has moved in the coordinate space of the event receiver since the previous update.
* `delta_y` - y component of the amount the pointer has moved in the coordinate space of the event receiver since the previous update.
* `local_x` - x component of the local position in the coordinate system of the event receiver at which the pointer contacted the screen.
* `local_y` - y component of the local position in the coordinate system of the event receiver at which the pointer contacted the screen.
* `global_x` - x component of the pointer's global position when it triggered this update.
* `global_y` - y component of the pointer's global position when it triggered this update.
* `primary_delta` - the amount the pointer has moved along the primary axis in the coordinate space of the event receiver since the previous update.
* `timestamp` - recorded timestamp of the source pointer event that triggered the drag event.

### `on_hover`

Triggered when a mouse pointer has entered this control.

Event handler argument is an instance of `HoverEvent` class with the following properties:

* `local_x` - x component of the local position of the pointer.
* `local_y` - y component of the local position of the pointer.
* `global_x` - x component of the global position of the pointer.
* `global_y` - y component of the global position of the pointer.
* `delta_x` - x component of the distance in logical pixels that the pointer moved since the last hover event.
* `delta_x` - y component of the distance in logical pixels that the pointer moved since the last hover event.
* `timestamp` - event's timestamp.

### `on_long_press_end`

A pointer that has triggered a long-press with a primary button has stopped contacting the screen.

Event handler argument is an instance of `LongPressEndEvent` class with the following properties:

* `local_x` - x component of the local position at which the pointer contacted the screen.
* `local_y` - y component of the local position at which the pointer contacted the screen.
* `global_x` - x component of the global position at which the pointer contacted the screen.
* `global_y` - y component of the global position at which the pointer contacted the screen.
* `velocity_x` - x component of the pointer's velocity when it stopped contacting the screen.
* `velocity_y` - y component of the pointer's velocity when it stopped contacting the screen.

### `on_long_press_start`

Called when a long press gesture with a primary button has been recognized.

Triggered when a pointer has remained in contact with the screen at the same location for a long period of time.

Event handler argument is an instance of `LongPressStartEvent` class with the following properties:

* `local_x` - x component of the local position at which the pointer contacted the screen.
* `local_y` - y component of the local position at which the pointer contacted the screen.
* `global_x` - x component of the global position at which the pointer contacted the screen.
* `global_y` - y component of the global position at which the pointer contacted the screen.

### `on_pan_end`

A pointer that was previously in contact with the screen with a primary button and moving is no longer in contact with the screen and was moving at a specific velocity when it stopped contacting the screen.

Event handler argument is an instance of `DragEndEvent` class.

### `on_pan_start`

A pointer has contacted the screen with a primary button and has begun to move.

Event handler argument is an instance of `DragStartEvent` class.

### `on_pan_update`

A pointer that is in contact with the screen with a primary button and moving has moved again.

Event handler argument is an instance of `DragUpdateEvent` class.

### `on_scale_end`

Event handler argument is an instance of `ScaleEndEvent` class with the following properties:

* `pointer_count` - the number of pointers being tracked by the gesture recognizer.
* `velocity_x` - x component of the velocity of the last pointer to be lifted off of the screen.
* `velocity_y` - y component of the velocity of the last pointer to be lifted off of the screen.

### `on_scale_start`

The pointers in contact with the screen have established a focal point and initial scale of 1.0.

Event handler argument is an instance of `ScaleStartEvent` class with the following properties:

* `focal_point_x` - x component of the initial focal point of the pointers in contact with the screen.
* `focal_point_y` - y component of the initial focal point of the pointers in contact with the screen.
* `local_focal_point_x` - x component of the initial focal point of the pointers in contact with the screen.
* `local_focal_point_y` - y component of the initial focal point of the pointers in contact with the screen.
* `pointer_count` - the number of pointers being tracked by the gesture recognizer.

### `on_scale_update`

Event handler argument is an instance of `ScaleUpdateEvent` class with the following properties:

* `focal_point_x` - x component of the focal point of the pointers in contact with the screen.
* `focal_point_y` - y component of the focal point of the pointers in contact with the screen.
* `focal_point_delta_x` - x component of the amount the gesture's focal point has moved in the coordinate space of the event receiver since the previous update.
* `focal_point_delta_y` - y component of the amount the gesture's focal point has moved in the coordinate space of the event receiver since the previous update.
* `local_focal_point_x` - x component of the focal point of the pointers in contact with the screen.
* `local_focal_point_y` - y component of the focal point of the pointers in contact with the screen.
* `pointer_count` - the number of pointers being tracked by the gesture recognizer.
* `horizontal_scale` - the scale implied by the average distance along the horizontal axis between the pointers in contact with the screen.
* `vertical_scale` - the scale implied by the average distance along the vertical axis between the pointers in contact with the screen.
* `scale` - the scale implied by the average distance between the pointers in contact with the screen.

### `on_secondary_long_press_end`

A pointer that has triggered a long-press with a secondary button has stopped contacting the screen.

Event handler argument is an instance of `LongPressEndEvent` class.

### `on_secondary_long_press_start`

Called when a long press gesture with a secondary button has been recognized.

Triggered when a pointer has remained in contact with the screen at the same location for a long period of time.

Event handler argument is an instance of `LongPressStartEvent` class.

### `on_secondary_tap`

A tap with a secondary button has occurred.

### `on_secondary_tap_down`

A pointer that might cause a tap with a secondary button has contacted the screen at a particular location.

Event handler argument is an instance of `TapEvent` class.

### `on_secondary_tap_up`

A pointer that will trigger a tap with a secondary button has stopped contacting the screen at a particular location.

Event handler argument is an instance of `TapEvent` class.

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

A pointer that will trigger a tap with a primary button has stopped contacting the screen at a particular location.

Event handler argument is an instance of `TapEvent` class.

### `on_vertical_drag_end`

A pointer that was previously in contact with the screen with a primary button and moving vertically is no longer in contact with the screen and was moving at a specific velocity when it stopped contacting the screen.

Event handler argument is an instance of `DragEndEvent` class.

### `on_vertical_drag_start`

A pointer has contacted the screen with a primary button and has begun to move vertically.

Event handler argument is an instance of `DragStartEvent` class.

### `on_vertical_drag_update`

A pointer that is in contact with the screen with a primary button and moving vertically has moved in the vertical direction.

Event handler argument is an instance of `DragUpdateEvent` class.

### `on_multi_long_press`

Called when a long press gesture with multiple pointers has been recognized.

### `on_multi_tap`

Triggered when multiple pointers contacted the screen.

Event handler argument is an instance of `MultiTapEvent` class with the following properties:

* `correct_touches` - `True` a `multi_tap_touches` number of pointers touched the screen; otherwise `False`.

### `on_scroll`

Event handler argument is an instance of `ScrollEvent` class with the following properties:

* `local_x` - x component of the local position of the pointer.
* `local_y` - y component of the local position of the pointer.
* `global_x` - x component of the global position of the pointer.
* `global_y` - y component of the global position of the pointer.
* `scroll_delta_x` - x component of the the amount to scroll, in logical pixels.
* `scroll_delta_y` - y component of the the amount to scroll, in logical pixels.
