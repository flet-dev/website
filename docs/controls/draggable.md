---
title: Draggable
sidebar_label: Draggable
---

A control that can be dragged from to a [DragTarget](/docs/controls/dragtarget).

When a draggable control recognizes the start of a drag gesture, it displays a [`content_feedback`](#content_feedback) control that tracks the user's finger across the screen. If the user lifts their finger while on top of a [DragTarget](/docs/controls/dragtarget), that target is given the opportunity to complete drag-and-drop flow.

This control displays [`content`](#content) when zero drags are under way.
If [`content_when_dragging`](#content_when_dragging) is not `None`, this control instead
displays `content_when_dragging` when one or more drags are underway. Otherwise, this widget always displays `content`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/utility/draggable)

### Drag and drop colors

<img src="/img/docs/controls/drag-and-drop/drag-drop.gif" className="screenshot-50" />


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/utility/drag-target-draggable/dragabble-target-example.py
```


## Properties

### `axis`

The axis to restrict this draggable's movement.

When axis is set to `Axis.HORIZONTAL`, this control can only be dragged horizontally. 
When axis is set to `Axis.VERTICAL`, this control can only be dragged vertically.

Value is of type [`Axis`](/docs/reference/types/axis) and defaults to `None` - no restriction.

### `affinity`

Controls how this control competes with other gestures to initiate a drag.
If set to `None`, this widget initiates a drag as soon as it recognizes a tap down gesture, regardless of any directionality. 
If set to `Axis.HORIZONTAL` or `Axis.VERTICAL`, then this control will compete with other horizontal (or vertical, respectively) gestures.

Value is of type [`Axis`](/docs/reference/types/axis).

### `content`

`Draggable` control displays [`content`](#content) when zero drags are under way.
If [`content_when_dragging`](#content_when_dragging) is not `None`, this control instead
displays `content_when_dragging` when one or more drags are underway. Otherwise, this control always displays `content`.

### `content_feedback`

The `Control` to show under the pointer when a drag is under way.

### `content_when_dragging`

The `Control` to display instead of `content` when one or more drags are under way.

If this is `None`, then this widget will always display `content` (and so the drag source representation will not change while a drag is under way).

### `group`

A group this draggable belongs to. For [`DragTarget`](/docs/controls/dragtarget) to accept incoming drag
both `Draggable` and `DragTarget` must be in the same `group`.

### `max_simultaneous_drags`

The number of simultaneous drags to support.

- Set this to `0` if you want to prevent the draggable from actually being dragged.
- Set this to `1` if you want to only allow the drag source to have one item dragged at a time. In this case, consider supplying an "empty" widget for `content_when_dragging` to create the illusion of actually moving `content`.

Defaults to `None` - no limit.

## `Events`

### `on_drag_complete`

Fires when this draggable is dropped and accepted by a DragTarget.

### `on_drag_start`

Fires when this draggable starts being dragged.
