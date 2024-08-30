---
title: InteractiveViewer
sidebar_label: InteractiveViewer
---

Allows users to pan, zoom, and rotate the provided `content`.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/animation/interactiveviewer)

### Basic Example

```python
import flet as ft


def main(page: ft.Page):
    page.add(
        ft.InteractiveViewer(
            min_scale=0.1,
            max_scale=15,
            boundary_margin=ft.margin.all(20),
            on_interaction_start=lambda e: print(e),
            on_interaction_end=lambda e: print(e),
            on_interaction_update=lambda e: print(e),
            content=ft.Image(
                src="https://picsum.photos/500/500",
            ),
        )
    )


ft.app(main)

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

Changes the deceleration behavior after a gesture.

Value is of type `float` and defaults to `0.0000135`.

### `max_scale`

The maximum allowed scale.

Value is of type `float` and defaults to `2.5`.

### `min_scale`

The minimum allowed scale.

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
