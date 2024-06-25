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

Union of `int`, `float`, `BorderRadius` and `None`

### `MarginValue`

Union of `int`, `float`, `Margin` and `None`

### `Number`

Union of `int`, `float`

### `OffsetValue`

Union of `Offset`, union of two, two valued tuples each  and `None`

### `OptionalEventCallback`

Union of callable with single argument of type `ControlEvent` and return value of `None`, and `None`

### `OptionalNumber`

Union of `int`, `float` and `None`

### `OptionalString`

Union of str

### `PaddingValue`

Union of `int`, `float`, [`Padding`](/docs/reference/types/padding) and `None`

### `ResponsiveNumber`

Union of `dict` of `str` and [`Number`](#number), and [`Number`](#number).

### `RotateValue`

Union of `int`, `float`, `Rotate` and `None`

### `ScaleValue`

Union of `int`, `float`, `Scale` and `None`

### `Wrapper`

Callable with arbitrary number of parameters and return type of `typing.Any`.
