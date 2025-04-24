---
title: InteractiveViewer
sidebar_label: InteractiveViewer
---

Allows users to pan, zoom, and rotate the provided `content`.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/utility/interactiveviewer)

### Basic Example

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/utility/interactive-viewer/interactive-viewer-example.py
```

## Properties

### `alignment`

Alignment of the `content` within.

Value is of type [`Alignment`](/docs/reference/types/alignment).

### `bgcolor`

The background [color](/docs/reference/colors).

### `boundary_margin`

A margin for the visible boundaries of the `content`.

Value is of type [`Margin`](/docs/reference/types/margin).

### `clip_behavior`

How to clip the `content`.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior) and defaults to `ClipBehavior.HARD_EDGE`.

### `constrained`

Whether the normal size constraints at this point in the widget tree are applied to the child.

### `content`

The `Control` to be transformed by the `InteractiveViewer`.

### `interaction_end_friction_coefficient`

Changes the deceleration behavior after a gesture. Must be greater than `0`.

Value is of type `float` and defaults to `0.0000135`.

### `interaction_update_interval`

The interval (in milliseconds) at which the `on_interaction_update` event is fired.

Value is of type `int` and defaults to `0`.

### `max_scale`

The maximum allowed scale. Must be greater than or equal to `min_scale`.

Value is of type `float` and defaults to `2.5`.

### `min_scale`

The minimum allowed scale. Must be greater than `0` and less than or equal to `max_scale`.

Value is of type `float` and defaults to `0.8`.

### `pan_enabled`

Whether panning is enabled.

Value is of type `bool` and defaults to `True`.

### `scale_enabled`

Whether scaling is enabled.

Value is of type `bool` and defaults to `True`.

### `scale_factor`

The amount of scale to be performed per pointer scroll.

Value is of type `float` and defaults to `200.0`.

### `trackpad_scroll_causes_scale`

Whether scrolling up/down on a trackpad should cause scaling instead of panning.

Value is of type `bool` and defaults to `False`.

## Methods

### `pan(dx, dy)`

Pans the `InteractiveViewer` by a specific amount.

It has the following parameters:
- `dx`: The number of pixels to pan on the x-axis.
- `dy`: The number of pixels to pan on the y-axis.

### `reset()`

Resets the `InteractiveViewer` to its initial state. By default, the reset happens with no animation (immediately).

It has the following parameters:
- `animation_duration`: Animates the reset with the given duration. Value is of type [`DurationValue`](/docs/reference/types/aliases#durationvalue).

### `restore_state()`

Restores the state of the `InteractiveViewer` previously saved using `save_state`.

### `save_state()`

Saves the current state of the `InteractiveViewer`, which can be restored later using `restore_state`.

### `zoom(factor)`;

Zooms in or out to a specific level.

It has the following parameters:
- `factor`: The zoom factor. Values below `1` will zoom out, values above `1` will zoom in.

## Events

### `on_interaction_end`

Fires when the user ends a pan or scale gesture.

Event handler argument is of type [`InteractiveViewerInteractionEndEvent`](/docs/reference/types/interactiveviewerinteractionendevent).

### `on_interaction_start`

Fires when the user begins a pan or scale gesture.

Event handler argument is of type [`InteractiveViewerInteractionStartEvent`](/docs/reference/types/interactiveviewerinteractionstartevent).

### `on_interaction_update`

Fires when the user updates a pan or scale gesture.

Event handler argument is of type [`InteractiveViewerInteractionUpdateEvent`](/docs/reference/types/interactiveviewerinteractionupdateevent).
