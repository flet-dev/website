---
title: Datatable
sidebar_label: Datatable
slug: datatable
---

A Material Design data table.

## Examples

### A styled DataTable

<img src="/img/docs/controls/datatable/datatable.png" className="screenshot-70"/>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.DataTable(
            width=700,
            bgcolor="yellow",
            border=ft.border.all(2, "red"),
            border_radius=10,
            vertical_lines=ft.border.BorderSide(3, "blue"),
            horizontal_lines=ft.border.BorderSide(1, "green"),
            sort_column_index=0,
            sort_ascending=True,
            heading_row_color=ft.colors.BLACK12,
            heading_row_height=100,
            data_row_color={"hovered": "0x30FF0000"},
            show_checkbox_column=True,
            divider_thickness=0,
            column_spacing=200,
            columns=[
                ft.DataColumn(
                    ft.Text("Column 1"),
                    on_sort=lambda e: print(f"{e.column_index}, {e.ascending}"),
                ),
                ft.DataColumn(
                    ft.Text("Column 2"),
                    tooltip="This is a second column",
                    numeric=True,
                    on_sort=lambda e: print(f"{e.column_index}, {e.ascending}"),
                ),
            ],
            rows=[
                ft.DataRow(
                    [ft.DataCell(ft.Text("A")), ft.DataCell(ft.Text("1"))],
                    selected=True,
                    on_select_changed=lambda e: print(f"row select changed: {e.data}"),
                ),
                ft.DataRow([ft.DataCell(ft.Text("B")), ft.DataCell(ft.Text("2"))]),
            ],
        ),
    )

ft.app(target=main)
```


## `DataTable` properties

### `bgcolor`

The background color for the table.

### `border`

The border around the table. An instance of `ft.Border` class.

See [`Container.border`](/docs/controls/container#border) property for more information and examples.

### `border_radius`

Border corners.

See [`Container.border`](/docs/controls/container#border) property for more information and examples.

### `checkbox_horizontal_margin`

Horizontal margin around the checkbox, if it is displayed.

### `column_spacing`

The horizontal margin between the contents of each data column.

### `columns`

A list of [`DataColumn`](#datacolumn-properties) controls describing table columns.

### `data_row_color`

The background color for the data rows.

The effective background color can be made to depend on the `MaterialState` state, i.e. if the row is selected, pressed, hovered, focused, disabled or enabled. The color is painted as an overlay to the row. To make sure that the row's InkWell is visible (when pressed, hovered and focused), it is recommended to use a translucent background color.

See [`Checkbox.fill_color`](/docs/controls/checkbox#fill_color) property for more information and examples.

### `data_row_height`

The height of each row (excluding the row that contains column headings).

### `data_text_style`

The text style for data rows. An instance of `ft.TextStyle` class.

### `divider_thickness`

The width of the divider that appears between `TableRow`s.

Must be greater than or equal to zero. This value defaults to 1.0.

### `gradient`

The background gradient for the table.

See [`Container.gradient`](/docs/controls/container#gradient) property for more information and examples.

### `heading_row_color`

The background color for the heading row.

The effective background color can be made to depend on the `MaterialState` state, i.e. if the row is pressed, hovered, focused when sorted. The color is painted as an overlay to the row. To make sure that the row's InkWell is visible (when pressed, hovered and focused), it is recommended to use a translucent color.

See [`Checkbox.fill_color`](/docs/controls/checkbox#fill_color) property for more information and examples.

### `heading_row_height`

The height of the heading row.

### `heading_text_style`

The text style for the heading row. An instance of `ft.TextStyle` class.

### `horizontal_lines`

Set the color and width of horizontal lines between rows. An instance of `ft.BorderSide` class.

### `horizontal_margin`

The horizontal margin between the edges of the table and the content in the first and last cells of each row.

When a checkbox is displayed, it is also the margin between the checkbox the content in the first data column.

### `rows`

A list of [`DataRow`](#datarow-properties) controls defining table rows.

### `show_bottom_border`

Whether a border at the bottom of the table is displayed.

By default, a border is not shown at the bottom to allow for a border around the table defined by decoration.

### `show_checkbox_column`

Whether the control should display checkboxes for selectable rows.

If `True`, a `Checkbox` will be placed at the beginning of each row that is selectable. However, if `DataRow.on_select_changed` is not set for any row, checkboxes will not be placed, even if this value is `True`.

If `False`, all rows will not display a `Checkbox`.

### `sort_ascending`

Whether the column mentioned in `sort_column_index`, if any, is sorted in ascending order.

If `True`, the order is ascending (meaning the rows with the smallest values for the current sort column are first in the table).

If `False`, the order is descending (meaning the rows with the smallest values for the current sort column are last in the table).

### `sort_column_index`

The current primary sort key's column.

If specified, indicates that the indicated column is the column by which the data is sorted. The number must correspond to the index of the relevant column in `columns`.

Setting this will cause the relevant column to have a sort indicator displayed.

When this is `None`, it implies that the table's sort order does not correspond to any of the columns.

### `vertical_lines`

Set the color and width of vertical lines between columns. An instance of `ft.BorderSide` class.

## `DataTable` events

### `on_select_all`

Invoked when the user selects or unselects every row, using the checkbox in the heading row.

If this is `None`, then the `DataRow.on_select_changed` callback of every row in the table is invoked appropriately instead.

To control whether a particular row is selectable or not, see `DataRow.on_select_changed`. This callback is only relevant if any row is selectable.

## `DataColumn` properties

### `prop1`

## `DataColumn` events

### `event1`

## `DataRow` properties

### `prop1`

## `DataRow` events

### `event1`

## `DataCell` properties

### `prop1`

## `DataCell` events

### `event1`