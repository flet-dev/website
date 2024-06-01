---
title: BoxShadow
sidebar_label: BoxShadow
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`BoxShadow` class has the following properties:

### `blur_radius`

The standard deviation of the Gaussian to convolve with the shadow's shape.

Defaults to `0.0.`.

### `blur_style`

Value is of type [`ShadowBlurStyle`](/docs/reference/types/shadowblurstyle) and defaults to `ShadowBlurStyle.NORMAL`.

### `color`

[Color](/docs/reference/colors) used to draw the shadow.

### `offset`

An instance of `Offset` class - the displacement of the shadow from the casting element. Positive x/y offsets will shift
the shadow to the right and down, while negative offsets shift the shadow to the left and up. The offsets are relative
to the position of the element that is casting it.

Value is of type [`Offset`](/docs/reference/types/offset) and defaults to `Offset(0,0)`.

### `spread_radius`

The amount the box should be inflated prior to applying the blur.

Defaults to `0.0.`.

## Usage example

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