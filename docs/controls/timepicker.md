---
title: TimePicker
sidebar_label: TimePicker
slug: timepicker
---

A Material-style time picker dialog.

It is added to [`page.overlay`](page#overlay) and called using its [`pick_time()`](timepicker#pick_time) method.

Depending on the [`time_picker_entry_mode`](timepicker#time_picker_entry_mode), it will show either a Dial or an Input (hour and minute text fields) for picking a time.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/timepicker)

### Basic time picker

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import datetime
import flet as ft

def main(page: ft.Page):
    def change_time(e):
        print(f"Time picker changed, value (minute) is {time_picker.value.minute}")

    def dismissed(e):
        print(f"Time picker dismissed, value is {time_picker.value}")

    time_picker = ft.TimePicker(
        confirm_text="Confirm",
        error_invalid_text="Time out of range",
        help_text="Pick your time slot",
        on_change=change_time,
        on_dismiss=dismissed,
    )

    page.overlay.append(time_picker)

    date_button = ft.ElevatedButton(
        "Pick time",
        icon=ft.icons.TIME_TO_LEAVE,
        on_click=lambda _: time_picker.pick_time(),
    )

    page.add(date_button)


ft.app(target=main)

```
  </TabItem>
</Tabs>

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

Property value is `TimePickerEntryMode` enum with the following values:

* `DIAL` (default)
* `INPUT`
* `DIAL_ONLY`
* `INPUT_ONLY`

In `DIAL` mode, user picks time from a clock dial.
Can switch to input by activating a mode button in the dialog. 

In `INPUT` mode, user can input the time by typing it into text fields.
Can switch to dial by activating a mode button in the dialog.

`DIAL_ONLY` and `INPUT_ONLY` are variants of the above that don't allow the user to change to the mode.

### `value`

The selected time that the picker should display. The default value is equal to the current time.

## Methods

### `pick_time()`

Opens a time picker dialog.

## Events

### `on_change`

Fires when user clicks confirm button. `value` property is updated with selected time. 

### `on_dismiss`

Fires when dialog is dismissed by clicking on the cancel button or outside of time picker dialog.