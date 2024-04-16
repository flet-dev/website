---
title: AnimationValue
sidebar_label: AnimationValue
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`AnimationValue` can be one of the following:

* `bool` - `True` to enable chart animation with `LINEAR` curve and `1000` milliseconds duration.
* `int` - enables chart animation with `LINEAR` curve and specified number of milliseconds.
* `ft.Animation(duration: int, curve: AnimationCurve)` - enables chart animation with specified duration and transition curve of [`AnimationCurve`](/docs/reference/types/animationcurve) type.

If `animate` is `None` then `LINEAR` animation with `150` milliseconds duration is enabled by default.

### Example of usage

<img src="/img/docs/controls/container/animate-container.gif" className="screenshot-20" />

```python
import flet as ft

def main(page: ft.Page):

    c = ft.Container(
        width=200,
        height=200,
        bgcolor="red",
        animate=ft.animation.Animation(1000, ft.AnimationCurve.BOUNCE_OUT),
    )

    def animate_container(e):
        c.width = 100 if c.width == 200 else 200
        c.height = 100 if c.height == 200 else 200
        c.bgcolor = "blue" if c.bgcolor == "red" else "red"
        c.update()

    page.add(c, ft.ElevatedButton("Animate container", on_click=animate_container))

ft.app(target=main)
```