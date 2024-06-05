---
title: CupertinoPicker
sidebar_label: CupertinoPicker
---

An iOS-styled picker.

To open this control, simply call the [`page.open()`](/docs/controls/page#open) helper-method.

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

    cupertino_picker = ft.CupertinoPicker(
        selected_index=3,
        magnification=1.22,
        squeeze=1.2,
        use_magnifier=True,
        on_change=handle_picker_change,
        controls=[ft.Text(value=f) for f in fruits],
    )

    page.add(
        ft.Row(
            tight=True,
            controls=[
                ft.Text("Selected Fruit:", size=23),
                ft.TextButton(
                    content=ft.Text(value=fruits[3], ref=selected_fruit_ref, size=23),
                    style=ft.ButtonStyle(color=ft.colors.BLUE),
                    on_click=lambda e: page.open(
                        ft.CupertinoBottomSheet(
                            cupertino_picker,
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

### `bgcolor`

The background [color](/docs/reference/colors) of the timer picker.

### `controls`

A list of controls representing items in this picker.

### `diameter_ratio`

Relative ratio between this picker's height and the simulated cylinder's diameter.

Smaller values creates more pronounced curvatures in the scrollable wheel.

### `item_extent`

The uniform height of all children. Defaults to `32`.

### `looping`

If `TRUE`, children on a wheel can be scrolled in a loop. Defaults to `FALSE`.

### `magnification`

The zoomed-in rate of the magnifier, if it is used.

The default value is `1.0`, which will not change anything. If the value is > `1.0`, the center item will be zoomed in by that rate, and it will also be rendered as flat, not cylindrical like the rest of the list. The item will be zoomed out if magnification < `1.0`.

Must be positive.

### `off_axis_fraction`

How much the wheel is horizontally off-center, as a fraction of its width.

### `selected_index`

The index (starting from 0) of the selected item in the `controls` list.

### `squeeze`

The angular compactness of the children on the wheel.

### `use_magnifier`

Whether to use the magnifier for the center item of the wheel.

## Events

### `on_change`

Fires when the selection changes.