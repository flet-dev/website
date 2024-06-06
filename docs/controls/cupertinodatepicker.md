---
title: CupertinoDatePicker
sidebar_label: CupertinoDatePicker
---

An iOS-style date and time picker dialog.

See [`date_picker_mode`](/docs/controls/cupertinodatepicker#date_picker_mode) property for details on the available modes.

To open this control, simply call the [`page.open()`](/docs/controls/page#opencontrol) helper-method.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinodatepicker)

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    def handle_date_change(e: ft.ControlEvent):
        page.add(ft.Text(f"Date changed: {e.control.value.strftime('%Y-%m-%d %H:%M %p')}"))

    cupertino_date_picker = ft.CupertinoDatePicker(
        date_picker_mode=ft.CupertinoDatePickerMode.DATE_AND_TIME,
        on_change=handle_date_change,
    )
    page.add(
        ft.CupertinoFilledButton(
            "Open CupertinoDatePicker",
            on_click=lambda e: page.open(
                ft.CupertinoBottomSheet(
                    cupertino_date_picker,
                    height=216,
                    padding=ft.padding.only(top=6),
                )
            ),
        )
    )


ft.app(main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertino-date-picker/basic-cupertino-date-picker.png" className="screenshot-50" />

## Properties

### `bgcolor`

The background [color](/docs/reference/colors) of the date picker.

### `current_date`

The date representing today. It will be highlighted in the day grid.

### `date_order`

The order in which the columns inside this picker are displayed.

Value is of type [`CupertinoDatePickerDateOrder`](/docs/reference/types/cupertinodatepickerdateorder).

:::note
The final order in which the columns are displayed is also influenced by the `date_picker_mode`. For example, when using `date_picker_mode=CupertinoDatePickerMode.MONTH_YEAR`, both `CupertinoDatePickerDateOrder.DAY_MONTH_YEAR` and `CupertinoDatePickerDateOrder.MONTH_DAY_YEAR` will result in the month|year order.
:::

### `date_picker_mode`

The mode of the date picker.

Value is of type [`CupertinoDatePickerMode`](/docs/reference/types/cupertinodatepickermode) and defaults
to `CupertinoDatePickerMode.DATE_AND_TIME`.

### `first_date`

The earliest allowable date that the user can select.

Defaults to `None` - no limit.

When not `None`, one can still scroll the picker to dates earlier than `first_date`, with the exception that the `on_change` will not be called. Once let go, the picker will scroll back to `first_date`.

In `CupertinoDatePickerMode.TIME` mode, a time becomes unselectable if the datetime produced by combining that particular time and the date part of initialDateTime is earlier than `last_date`. So typically `first_date` needs to be set to a datetime that is on the same date as initialDateTime.

### `item_extent`

The uniform height of all children.

Defaults to `32`.

### `last_date`

The latest allowable date that the user can select.

When not `None`, one can still scroll the picker to dates later than `last_date`, with the exception that the `on_change` will not be called. Once let go, the picker will scroll back to `last_date`.

In `CupertinoDatePickerMode.TIME` mode, a time becomes unselectable if the datetime produced by combining that particular time and the date part of initialDateTime is later than `last_date`. So typically `last_date` needs to be set to a datetime that is on the same date as initialDateTime.

Defaults to `None` - no limit.

### `max_year`

Maximum year to which the picker can be scrolled when in `CupertinoDatePickerMode.DATE` mode.

Defaults to `1`. Defaults to `None` - no limit.

### `min_year`

Minimum year to which the picker can be scrolled when in `CupertinoDatePickerMode.DATE` mode.

Defaults to `1`.

### `min_interval`

The granularity of the minutes spinner, if it is shown in the current `date_picker_mode`. Must be an integer factor of
60.

Defaults to `1`.

### `show_day_of_week`

Whether to to show day of week alongside day.

Defaults to `False`.

### `use_24h_format`

If `True`, 24-hour time format is used else 12-hour time format is used.

Defaults to `False`.

### `value`

The initial date and/or time of the picker. It must conform to the intervals set in `first_date`, `last_date`, `min_year`, and `max_year` else an error will be `ValueError` will be raised.

Defaults to the present date and time. 

## Events

### `on_change`

Fires when the selected date and/or time changes. Will not fire if the new selected value is not valid, or is not in the range of `first_date` and `last_date`.