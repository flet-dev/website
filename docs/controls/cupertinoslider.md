---
title: CupertinoSlider
sidebar_label: CupertinoSlider
---

An macOS style slider. It provides a visual indication of adjustable content, as well as the current setting in the total range of content.

Use a slider when you want people to set defined values (such as volume or brightness), or when people would benefit from instant feedback on the effect of setting changes.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/cupertinoslider)

### CupertinoSlider with `on_change`, `on_change_start` and `on_change_end` events


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-input-and-selections/cupertino-slider-example.py
```


<img src="/img/docs/controls/cupertinoslider/cupertino-slider-with-events.gif" className="screenshot-30"/>

## Properties

### `active_color`

The [color](/docs/reference/colors) to use for the portion of the slider track that is active.

The "active" side of the slider is the side between the thumb and the minimum value.

### `divisions`

The number of discrete divisions.

If not set, the slider is continuous.

### `max`

The maximum value the user can select.

Defaults to `1.0`. Must be greater than or equal to `min`.

If the `max` is equal to the `min`, then the slider is disabled.

### `min`

The minimum value the user can select.

Defaults to `0.0`. Must be less than or equal to `max`.

If the `max` is equal to the `min`, then the slider is disabled.

### `thumb_color`

The [color](/docs/reference/colors) of the thumb.

### `value`

The currently selected value for this slider.

The slider's thumb is drawn at a position that corresponds to this value.

## Events

### `on_blur`

Fires when the control has lost focus.

### `on_change`

Fires when the state of the Slider is changed.

### `on_change_end`

Fires when the user is done selecting a new value for the slider.

### `on_change_start`

Fires when the user starts selecting a new value for the slider.

### `on_focus`

Fires when the control has received focus.