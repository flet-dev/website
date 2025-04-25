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


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/utility/gesture-detector/draggable-containers.py
```


## Properties

### `content`

A child Control contained by the gesture detector.

### `mouse_cursor`

The mouse cursor for mouse pointers that are hovering over the control.

Value is of type [`MouseCursor`](/docs/reference/types/mousecursor).

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

Event handler argument is of type [`MapTapEvent`](/docs/reference/types/tapevent).

### `on_enter`

Triggered when a mouse pointer has entered this control.

Event handler argument is of type [`HoverEvent`](/docs/reference/types/hoverevent).

### `on_exit`

Triggered when a mouse pointer has exited this control.

Event handler argument is of type [`HoverEvent`](/docs/reference/types/hoverevent).

### `on_horizontal_drag_end`

A pointer that was previously in contact with the screen with a primary button and moving horizontally is no longer in contact with the screen and was moving at a specific velocity when it stopped contacting the screen.

Event handler argument is of type [`DragEndEvent`](/docs/reference/types/dragendevent).

### `on_horizontal_drag_start`

A pointer has contacted the screen with a primary button and has begun to move horizontally.

Event handler argument is of type [`DragStartEvent`](/docs/reference/types/dragstartevent).

### `on_horizontal_drag_update`

A pointer that is in contact with the screen with a primary button and moving horizontally has moved in the horizontal direction.

Event handler argument is of type [`DragUpdateEvent`](/docs/reference/types/dragupdateevent).

### `on_hover`

Triggered when a mouse pointer has entered this control.

Event handler argument is of type [`HoverEvent`](/docs/reference/types/hoverevent).

### `on_long_press_end`

A pointer that has triggered a long-press with a primary button has stopped contacting the screen.

Event handler argument is of type [`LongPressEndEvent`](/docs/reference/types/longpressendevent).

### `on_long_press_start`

Called when a long press gesture with a primary button has been recognized.

Triggered when a pointer has remained in contact with the screen at the same location for a long period of time.

Event handler argument is of type [`LongPressStartEvent`](/docs/reference/types/longpressstartevent).

### `on_pan_end`

A pointer that was previously in contact with the screen with a primary button and moving is no longer in contact with the screen and was moving at a specific velocity when it stopped contacting the screen.

Event handler argument is of type [`DragEndEvent`](/docs/reference/types/dragendevent).

### `on_pan_start`

A pointer has contacted the screen with a primary button and has begun to move.

Event handler argument is of type [`DragStartEvent`](/docs/reference/types/dragstartevent).

### `on_pan_update`

A pointer that is in contact with the screen with a primary button and moving has moved again.

Event handler argument is of type [`DragUpdateEvent`](/docs/reference/types/dragupdateevent).

### `on_scale_end`

Event handler argument is of type [`ScaleEndEvent`](/docs/reference/types/scaleendevent).

### `on_scale_start`

The pointers in contact with the screen have established a focal point and initial scale of `1.0`.

Event handler argument is of type [`ScaleStartEvent`](/docs/reference/types/scalestartevent).

### `on_scale_update`

Event handler argument is of type [`ScaleUpdateEvent`](/docs/reference/types/scaleupdateevent).

### `on_secondary_long_press_end`

A pointer that has triggered a long-press with a secondary button has stopped contacting the screen.

Event handler argument is of type [`LongPressEndEvent`](/docs/reference/types/longpressendevent).

### `on_secondary_long_press_start`

Called when a long press gesture with a secondary button has been recognized.

Triggered when a pointer has remained in contact with the screen at the same location for a long period of time.

Event handler argument is of type [`LongPressStartEvent`](/docs/reference/types/longpressstartevent).

### `on_secondary_tap`

A tap with a secondary button has occurred.

### `on_secondary_tap_down`

A pointer that might cause a tap with a secondary button has contacted the screen at a particular location.

Event handler argument is of type [`MapTapEvent`](/docs/reference/types/tapevent).

### `on_secondary_tap_up`

A pointer that will trigger a tap with a secondary button has stopped contacting the screen at a particular location.

Event handler argument is of type [`MapTapEvent`](/docs/reference/types/tapevent).

### `on_tap`

A tap with a primary button has occurred.

### `on_tap_down`

A pointer that might cause a tap with a primary button has contacted the screen at a particular location.

Event handler argument is of type [`MapTapEvent`](/docs/reference/types/tapevent).

### `on_tap_up`

A pointer that will trigger a tap with a primary button has stopped contacting the screen at a particular location.

Event handler argument is of type [`MapTapEvent`](/docs/reference/types/tapevent).

### `on_vertical_drag_end`

A pointer that was previously in contact with the screen with a primary button and moving vertically is no longer in contact with the screen and was moving at a specific velocity when it stopped contacting the screen.

Event handler argument is of type [`DragEndEvent`](/docs/reference/types/dragendevent).

### `on_vertical_drag_start`

A pointer has contacted the screen with a primary button and has begun to move vertically.

Event handler argument is of type [`DragStartEvent`](/docs/reference/types/dragstartevent).

### `on_vertical_drag_update`

A pointer that is in contact with the screen with a primary button and moving vertically has moved in the vertical direction.

Event handler argument is of type [`DragUpdateEvent`](/docs/reference/types/dragupdateevent).

### `on_multi_long_press`

Called when a long press gesture with multiple pointers has been recognized.

### `on_multi_tap`

Triggered when multiple pointers contacted the screen.

Event handler argument is of type [`MultiTapEvent`](/docs/reference/types/multitapevent).

### `on_scroll`

Event handler argument is of type [`ScrollEvent`](/docs/reference/types/scrollevent).

