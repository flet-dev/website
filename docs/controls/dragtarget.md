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

<img src="/img/docs/controls/drag-and-drop/drag-drop.gif" className="screenshot-50" />


```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/utility/drag-target-draggable/dragabble-target-example.py
```


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