---
title: CupertinoPicker
sidebar_label: CupertinoPicker
---

An iOS-styled picker.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinotimerpicker)

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    selected_fruit_ref = ft.Ref[ft.Text]()

    fruits = [
        "Apple",
        "Mango",
        "Banana",
        "Orange",
        "Pineapple",
        "Strawberry",
    ]

    def handle_picker_change(e):
        selected_fruit_ref.current.value = fruits[int(e.data)]
        page.update()

    picker = ft.CupertinoPicker(
        selected_index=3,
        # item_extent=40,
        magnification=1.22,
        # diameter_ratio=2,
        squeeze=1.2,
        use_magnifier=True,
        # looping=False,
        on_change=handle_picker_change,
        controls=[ft.Text(f) for f in fruits],
    )

    page.add(
        ft.Row(
            tight=True,
            controls=[
                ft.Text("Selected Fruit:", size=23),
                ft.TextButton(
                    content=ft.Text(fruits[3], size=23, ref=selected_fruit_ref),
                    style=ft.ButtonStyle(color=ft.colors.BLUE),
                    on_click=lambda _: page.show_bottom_sheet(
                        ft.CupertinoBottomSheet(
                            picker,
                            height=216,
                            padding=ft.padding.only(top=6),
                        )
                    ),
                ),
            ],
        ),
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertino-picker/basic-cupertino-picker.gif" className="screenshot-40" />

## Properties

### `alignment`

Defines how the timer picker should be positioned within its parent. Defaults to `ft.alignment.center`.

### `bgcolor`

The background [color](/docs/reference/colors) of the timer picker.

### `controls`

### `diameter_ratio`

### `item_extent`

The uniform height of all children. Defaults to `32`.

### `looping`

### `magnification`

### `off_axis_fraction`

### `selected_index`

The index (starting from 0) of the selected item in the `controls` list.

### `squeeze`

### `use_magnifier`

## Events

### `on_change`

Fires when the selection changes.