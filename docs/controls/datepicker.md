---
title: DatePicker
sidebar_label: DatePicker
slug: datepicker
---

A Material-style date picker dialog.

It is added to [`page.overlay`](page#overlay) and called using its `pick_date()` method.

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

### `content`

The (optional) content of the dialog is displayed in the center of the dialog in a lighter font. Typically this is a [`Column`](column) that contains the dialog's [`Text`](text) message.

### `content_padding`

Padding around the content.

If there is no content, no padding will be provided. Otherwise, padding of 20 pixels is provided above the content to separate the content from the title, and padding of 24 pixels is provided on the left, right, and bottom to separate the content from the other edges of the dialog.

See [`Container.padding`](container#padding) for more information about padding and possible values.

### `modal`

Whether dialog can be dismissed by clicking the area outside of it.

### `open`

Set to `True` to display a dialog.

### `shape`

The shape of the dialog's border.

The value is an instance of one of the following implementations:
  * `StadiumBorder`
  * `RoundedRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.
  * `CircleBorder`
  * `BeveledRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.
  * `ContinuousRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.

The default shape is a `RoundedRectangleBorder` with a radius of 4.0.

### `title`

The (optional) title of the dialog is displayed in a large font at the top of the dialog.

Typically a [`Text`](text) control.

### `title_padding`

Padding around the title.

If there is no title, no padding will be provided. Otherwise, this padding is used.

This property defaults to providing 24 pixels on the top, left, and right of the title. If the content is not null, then no bottom padding is provided (but see `content_padding`). If it is not set, then an extra 20 pixels of bottom padding is added to separate the title from the actions.

See [`Container.padding`](container#padding) for more information about padding and possible values.

## Methods

### `pick_date()`

Opens a date picker dialog.

## Events

### `on_change`

Fires when user clicks confirm button. `value` property is updated with selected date. 

### `on_dismiss`

Fires when dialog is dismissed by clicking on the cancel button or outside of date picker dialog.