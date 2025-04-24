---
title: RangeSlider
sidebar_label: RangeSlider
---

A Material Design range slider. Used to select a range from a range of values.
A range slider can be used to select from either a continuous or a discrete set of values.
The default is to use a continuous range of values from min to max.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/rangeslider)

### Range slider with divisions and labels


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/range-slider/range-slider-example.py
```


<img src="/img/docs/controls/rangeslider/rangeslider.gif" className="screenshot-70"/>

### RangeSlider with events



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/range-slider/range-slider-with-event.py
```


## Properties

### `active_color`

The [color](/docs/reference/colors) to use for the portion of the slider track that is active.

The "active" segment of the range slider is the span between the thumbs.

### `divisions`

The number of discrete divisions.

Typically used with `label` to show the current discrete values.

If not set, the slider is continuous.

### `end_value`

The currently selected end value for the slider.

The slider's right thumb is drawn at a position that corresponds to this value.

### `inactive_color`

The [color](/docs/reference/colors) for the inactive portions of the slider track.

The "inactive" segments of the slider are the span of tracks between the min and the start thumb, and the end thumb and the max.

### `label`

A label to show above the slider thumbs when the slider is active. The value of `label` may contain `{value}` which will be replaced with a current slider `start_value` and `end_value`.

If not set, then the labels will not be displayed.

### `max`

The maximum value the user can select. Must be greater than or equal to `min`.

If the `max` is equal to the `min`, then the slider is disabled.

Defaults to `1.0`.

### `min`

The minimum value the user can select.

Defaults to `0.0`. Must be less than or equal to `max`.

If the `max` is equal to the `min`, then the slider is disabled.

### `mouse_cursor`

The cursor for a mouse pointer entering or hovering over this control. It's value can be made to depend on the slider's [`ControlState`](/docs/reference/types/controlstate).

Value is of type [`MouseCursor`](/docs/reference/types/mousecursor).

### `overlay_color`

The highlight [color](/docs/reference/colors) that's typically used to indicate that the range slider thumb is
in `HOVERED` or `DRAGGED` [`ControlState`](/docs/reference/types/controlstate)s.

### `round`

The number of decimals displayed on the `label` containing `{value}`. The default is 0 (displays value rounded to the nearest integer).

### `start_value`

The currently selected start value for the slider.

The slider's left thumb is drawn at a position that corresponds to this value.

## Events

### `on_change`

Fires when the state of the Slider is changed.

### `on_change_end`

Fires when the user is done selecting a new value for the slider.

### `on_change_start`

Fires when the user starts selecting a new value for the slider.