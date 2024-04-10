---
title: BoxShadow
sidebar_label: BoxShadow
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`BoxShadow` class has the following properties:

* `spread_radius` - The amount the box should be inflated prior to applying the blur. Default is `0.0.`.
* `blur_radius` - The standard deviation of the Gaussian to convolve with the shadow's shape. Default is `0.0.`.
* `color` - [Color](/docs/reference/colors) that the shadow will be drawn with.
* `offset` - An instance of `ft.Offset` class - the displacement of the shadow from the casting element. Positive x/y offsets will shift the shadow to the right and down, while negative offsets shift the shadow to the left and up. The offsets are relative to the position of the element that is casting it. Default is `ft.Offset(0,0)`.
* `blur_style` - The value is [`ShadowBlurStyle`](/docs/reference/types/shadowblurstyle) enum. Defaults to `NORMAL`.

Example:

```python
ft.Container(
    border_radius=10,
    width=100,
    height=100,
    shadow=ft.BoxShadow(
        spread_radius=1,
        blur_radius=15,
        color=ft.colors.BLUE_GREY_300,
        offset=ft.Offset(0, 0),
        blur_style=ft.ShadowBlurStyle.OUTER,
    )
)
```