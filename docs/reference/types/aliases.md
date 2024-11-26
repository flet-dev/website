---
title: Aliases
sidebar_label: Aliases
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page provides information about type aliases used throughout Flet code.

Below are the aliases.

### `AnimationValue`

Union of `bool`, `int`, `Animation` and `None`

### `BorderRadiusValue`

Union of `int`, `float`, [`BorderRadius`](/docs/reference/types/borderradius) and `None`

### `ColorValue`

Union of `str`, [`Colors`](/docs/reference/colors#material-colors), [`CupertinoColors`](/docs/reference/colors#cupertino-colors)

### `DurationValue`

Union of `int` (milliseconds) and [`Duration`](/docs/reference/types/duration)

### `MarginValue`

Union of `int`, `float`, [`Margin`](/docs/reference/types/margin) and `None`

### `Number`

Union of `int`, `float`

### `OffsetValue`

Union of [`Offset`](/docs/reference/types/offset), `None`, and union of two; two valued tuples of 1st element of type `float` and 2nd of type `int`

### `OptionalEventCallback`

Union of `None` and callable with single argument of type `ControlEvent` and return value of `None`

### `OptionalNumber`

Union of `int`, `float` and `None`

### `OptionalString`

Union of `str` and `None`

### `PaddingValue`

Union of `int`, `float`, [`Padding`](/docs/reference/types/padding) and `None`

### `ResponsiveNumber`

Union of `dict` of `str` and [`Number`](#number), and [`Number`](#number).

### `RotateValue`

Union of `int`, `float`, [`Rotate`](/docs/reference/types/rotate) and `None`

### `ScaleValue`

Union of `int`, `float`, [`Scale`](/docs/reference/types/scale) and `None`

### `Wrapper`

Callable with arbitrary number of parameters and return type of `typing.Any`.
