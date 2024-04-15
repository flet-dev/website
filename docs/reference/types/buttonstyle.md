---
title: ButtonStyle
sidebar_label: ButtonStyle
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

 `ButtonStyle` class has the following properties:

* `color` - The color for the button's Text and Icon control descendants.
* `bgcolor` - The button's background fill color.
* `overlay_color` - The highlight color that's typically used to indicate that the button is focused, hovered, or pressed.
* `shadow_color` - The shadow color of the button's Material.
* `surface_tint_color` - The surface tint color of the button's Material.
* `elevation` - The elevation of the button's Material.
* `animation_duration` - Defines the duration in milliseconds of animated changes for shape and elevation.
* `padding` - The padding between the button's boundary and its child.
* `side` - An instance of [`BorderSide`](/docs/reference/types/borderside) class, the color and weight of the button's outline.
* `shape` - The shape of the button's underlying Material. The value is an instance of [`OutlinedBorder`](/docs/reference/types/outlinedborder) class.

### Example of usage

This is an example demonstrating various button shapes:

<img src="/img/blog/gradients/button-shapes.png" className="screenshot-20" />

```python
import flet as ft

def main(page: ft.Page):
    page.padding = 30
    page.spacing = 30
    page.add(
        ft.FilledButton(
            "Stadium",
            style=ft.ButtonStyle(
                shape=ft.StadiumBorder(),
            ),
        ),
        ft.FilledButton(
            "Rounded rectangle",
            style=ft.ButtonStyle(
                shape=ft.RoundedRectangleBorder(radius=10),
            ),
        ),
        ft.FilledButton(
            "Continuous rectangle",
            style=ft.ButtonStyle(
                shape=ft.ContinuousRectangleBorder(radius=30),
            ),
        ),
        ft.FilledButton(
            "Beveled rectangle",
            style=ft.ButtonStyle(
                shape=ft.BeveledRectangleBorder(radius=10),
            ),
        ),
        ft.FilledButton(
            "Circle",
            style=ft.ButtonStyle(shape=ft.CircleBorder(), padding=30),
        ),
    )

ft.app(target=main)
```