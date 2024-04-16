---
title: OutlinedBorder
sidebar_label: OutlinedBorder
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`OutlinedBorder` class has the following implementations:

  * `StadiumBorder`
  * `RoundedRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.
  * `CircleBorder`
  * `BeveledRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.
  * `ContinuousRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.

### Example of usage

```python
import flet as ft

def main(page: ft.Page):

    page.floating_action_button = ft.FloatingActionButton(
        content=ft.Row(
            [ft.Icon(ft.icons.ADD), ft.Text("Add")], alignment="center", spacing=5
        ),
        bgcolor=ft.colors.AMBER_300,
        shape=ft.RoundedRectangleBorder(radius=5),
        width=100,
        mini=True,
    )

    page.add(ft.Text("Just a text!"))

ft.app(target=main)
```

<img src="/img/docs/controls/floatingactionbutton/fab-with-custom-shape.png" className="screenshot-20" />