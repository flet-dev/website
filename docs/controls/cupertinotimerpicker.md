---
title: CupertinoTimerPicker
sidebar_label: CupertinoTimerPicker
---

A countdown timer picker in iOS style.

To open this control, simply call the [`page.open()`](/docs/controls/page#opencontrol) helper-method.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinotimerpicker)

### Basic Example



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-dialogs-alerts-panels/cupertino-time-picker-example.py
```


<img src="/img/docs/controls/cupertino-timer-picker/cupertino-time-picker-example.gif" className="screenshot-50" />

## Properties

### `alignment`

Defines how the timer picker should be positioned within its parent. 

Value is of type [`Alignment`](/docs/reference/types/alignment) and defaults to `alignment.center`.

### `bgcolor`

The background [color](/docs/reference/colors) of the timer picker.

### `mode`

The mode of the timer picker. Value is of
type [`CupertinoTimerPickerMode`](/docs/reference/types/cupertinotimerpickermode) and defaults
to `CupertinoTimerPickerMode.HOUR_MINUTE_SECOND`.

### `item_extent`

The uniform height of all children.

Defaults to `32`.

### `second_interval`

The granularity of the second spinner. Must be a positive integer factor of 60.

Defaults to `1`.

### `minute_interval`

The granularity of the minute spinner. Must be a positive integer factor of 60.

Defaults to `1`.

### `value`

The initial duration in seconds of the countdown timer.

Defaults to `0`.

## Events

### `on_change`

Fires when the timer duration changes.