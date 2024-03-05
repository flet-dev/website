---
title: CupertinoTimerPicker
sidebar_label: CupertinoTimerPicker
slug: cupertinotimerpicker
---

A countdown timer picker in iOS style.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinotimerpicker)

### Basic date picker

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python

```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertino-timer-picker/basic-cupertino-timer-picker.png" className="screenshot-50" />

## Properties

### `alignment`

Defines how the timer picker should be positioned within its parent. Defaults to `ft.alignment.center`.

### `bgcolor`

The background [color](/docs/guides/python/colors) of the timer picker.

### `mode`

The mode of the timer picker. Property value is `CupertinoTimerPickerMode` enum with the following values:

* `HOUR_MINUTE` - shows the timer duration in hour and minute.
* `MINUTE_SECOND` -  shows the timer duration in minute and second.
* `HOUR_MINUTE_SECOND` (default) - shows the timer duration in hour, minute, and second.

### `item_extent`

The uniform height of all children. Defaults to `32`.

### `second_interval`

The granularity of the second spinner. Must be a positive integer factor of 60. Defaults to `1`.

### `minute_interval`

The granularity of the minute spinner. Must be a positive integer factor of 60. Defaults to `1`.

### `value`

The initial duration in seconds of the countdown timer. Defaults to `0`.

## Events

### `on_change`

Fires when the timer duration changes.