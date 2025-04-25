---
title: TimePicker
sidebar_label: TimePicker
---

A Material-style time picker dialog.

To open this control, simply call the [`page.open()`](/docs/controls/page#opencontrol) helper-method.

Depending on the [`time_picker_entry_mode`](/docs/controls/timepicker#time_picker_entry_mode), it will show either a Dial or an Input (hour and minute text fields) for picking a time.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/timepicker)

### Basic time picker


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/dialogs-alerts-panels/time-picker/time-picker-basic.py
```


<img src="/img/docs/controls/timepicker/time-picker.png" className="screenshot-50" />

## Properties

### `cancel_text`

The text that is displayed on the cancel button. The default value is "Cancel".

### `confirm_text`

The text that is displayed on the confirm button. The default value is "OK".

### `error_invalid_text`

The error message displayed below the input text field if the input is not a valid hour/minute. The default value is "Enter a valid time".

### `hour_label_text`

The text that is displayed below the hour input text field.

The default value is "Hour".

### `help_text`

The text that is displayed at the top of the header.

This is used to indicate to the user what they are selecting a time for. The default value is "Enter time".

### `minute_label_text`

The text that is displayed below the minute input text field.

The default value is "Minute".

### `orientation`

The orientation of the dialog when displayed. Value is of type `Orientation` enum which has the following possible values: `PORTRAIT` and `LANDSCAPE`.

### `time_picker_entry_mode`

The initial mode of time entry method for the time picker dialog.

Value is of type [`TimePickerEntryMode`](/docs/reference/types/timepickerentrymode) and defaults
to `TimePickerEntryMode.DIAL`.

### `value`

The selected time that the picker should display. The default value is equal to the current time.

## Events

### `on_change`

Fires when user clicks confirm button. `value` property is updated with selected time. `e.data` also contains the selected time.

### `on_dismiss`

Fires when dialog is dismissed by clicking on the cancel button or outside of time picker dialog.

### `on_entry_mode_change`

Fires when the `time_picker_entry_mode` is changed.

Event handler argument is of
type [`TimePickerEntryModeChangeEvent`](/docs/reference/types/timepickerentrymodechangeevent).