---
title: OutlinedBorder
sidebar_label: OutlinedBorder
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An abstract class that can be used to create custom borders. 

`OutlinedBorder` has the following implementations:

### `StadiumBorder`

Creates a border that looks like a stadium.

### `RoundedRectangleBorder`

Creates a border with rounded rectangle corners. It accepts the following parameters:

* `radius` - border radius, an instance of [`BorderRadius`](/docs/reference/types/borderradius) or a number.

### `CircleBorder`

Creates a border with a circle shape.

### `BeveledRectangleBorder`

Creates a border with beveled rectangle corners. It accepts the following parameters:

* `radius` - border radius, an instance of [`BorderRadius`](/docs/reference/types/borderradius) or a number.

### `ContinuousRectangleBorder`

Creates a border with continuous rectangle corners. It accepts the following parameters:

* `radius` - border radius, an instance of [`BorderRadius`](/docs/reference/types/borderradius) or a number.

## Usage example

<img src="/img/docs/controls/floatingactionbutton/fab-with-custom-shape.png" className="screenshot-20" />

```python
import flet as ft

def main(page: ft.Page):
    page.floating_action_button = ft.FloatingActionButton(
        content=ft.Row(
            [ft.Icon(ft.Icons.ADD), ft.Text("Add")], alignment="center", spacing=5
        ),
        bgcolor=ft.Colors.AMBER_300,
        shape=ft.RoundedRectangleBorder(radius=5),
        width=100,
        mini=True,
    )

    page.add(ft.Text("Just a text!"))

ft.app(main)
```

