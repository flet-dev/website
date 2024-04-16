---
title: DatePicker
sidebar_label: DatePicker
---

A Material-style date picker dialog.

It is added to [`page.overlay`](/docs/controls/page#overlay) and called using its [`pick_date()`](/docs/controls/datepicker#pick_date) method.

Depending on the [`date_picker_entry_mode`](/docs/controls/datepicker#date_picker_entry_mode), it will show either a Calendar or an Input (TextField) for picking a date.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/datepicker)

### Basic date picker

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import datetime
import flet as ft

def main(page: ft.Page):
    def change_date(e):
        print(f"Date picker changed, value is {date_picker.value}")

    def date_picker_dismissed(e):
        print(f"Date picker dismissed, value is {date_picker.value}")

    date_picker = ft.DatePicker(
        on_change=change_date,
        on_dismiss=date_picker_dismissed,
        first_date=datetime.datetime(2023, 10, 1),
        last_date=datetime.datetime(2024, 10, 1),
    )

    page.overlay.append(date_picker)

    date_button = ft.ElevatedButton(
        "Pick date",
        icon=ft.icons.CALENDAR_MONTH,
        on_click=lambda _: date_picker.pick_date(),
    )

    page.add(date_button)

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/datepicker/basic-datepicker.png" className="screenshot-50" />

## Properties

### `cancel_text`

The text that is displayed on the cancel button. The default value is "Cancel".

### `confirm_text`

The text that is displayed on the confirm button. The default value is "OK".

### `current_date`

The date representing today. It will be highlighted in the day grid.


### `date_picker_mode`

Initial display of a calendar date picker.

Property value is `DatePickerMode` enum with the following values:

* `DAY` (default)
* `YEAR`

In `DAY` mode, a monthly calendar is displayed. In `YEAR` mode, a grid of available years is displayed.

### `date_picker_entry_mode`

The initial mode of date entry method for the date picker dialog.

Property value is `DatePickerEntryMode` enum with the following values:

* `CALENDAR` (default)
* `INPUT`
* `CALENDAR_ONLY`
* `INPUT_ONLY`

In `CALENDAR` mode, a calendar grid is displayed and the user taps the day they wish to select. In `INPUT` mode a `TextField` is displayed and the user types in the date they wish to select.

`CALENDAR_ONLY` and `INPUT_ONLY` are variants of the above that don't allow the user to change to the mode.

### `error_format_text`

The error message displayed below the TextField if the entered date is not in the correct format. The default value is "Invalid format."

### `error_invalid_text`

The error message displayed below the TextField if the date is earlier than `first_date` or later than `last_date`. The default value is "Out of range."

### `field_hint_text`

The hint text displayed in the TextField.

The default value is the date format string that depends on your locale. For example, 'mm/dd/yyyy' for en_US.

### `field_label_text`

The label text displayed in the TextField. The default value is "Enter Date".

### `first_date`

The earliest allowable date that the user can select. The default value is January 1, 1900.

### `help_text`

The text that is displayed at the top of the header.

This is used to indicate to the user what they are selecting a date for. The default value is "Select date".

### `keyboard_type`

The type of keyboard to use for editing the text. The property value is [`KeyboardType`](/docs/reference/types/keyboardtype) enum.

Defaults to `DATETIME`.

### `last_date`

The latest allowable date that the user can select. The default value is January 1, 2050.

### `switch_to_calendar_icon`

Name of the icon displayed in the corner of the dialog when `DatePickerEntryMode` is `DatePickerEntryMode.INPUT`. Clicking on icon changes the `DatePickerEntryMode` to `DatePickerEntryMode.CALENDAR`. If null, `ft.icons.CALENDAR_TODAY` is used.

### `switch_to_input_icon`

Name of the icon displayed in the corner of the dialog when `DatePickerEntryMode` is `DatePickerEntryMode.CALENDAR`. Clicking on icon changes the `DatePickerEntryMode` to `DatePickerEntryMode.INPUT`. If null, `ft.icons.EDIT_OUTLINED` is used.

### `value`

The selected date that the picker should display. The default value is equal to `current_date`.

## Methods

### `pick_date()`

Opens a date picker dialog.

## Events

### `on_change`

Fires when user clicks confirm button. `value` property is updated with selected date. `e.data` also contains the selected date.

### `on_dismiss`

Fires when dialog is dismissed by clicking on the cancel button or outside of date picker dialog.

### `on_entry_mode_change`

Fires when the `date_picker_entry_mode` is changed. The event handler (`e`) is of type `DatePickerEntryModeChangeEvent` and the new entry mode could be gotten from `e.entry_mode` (value of type `DatePickerEntryMode` enum).