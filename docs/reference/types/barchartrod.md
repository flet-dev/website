---
title: BarChartRod
sidebar_label: BarChartRod
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`BarChartRod` class has the following properties:


### `bg_color`

An optional [color](/docs/reference/colors) of a background behind this rod.

### `bg_from_y`

An optional starting position of a background behind this rod.

### `bg_gradient`

An optional gradient to draw a background with.

### `bg_to_y`

An optional ending position of a background behind this rod.

### `border_radius`

Border radius of a bar rod.

Defaults to `4`.

### `border_side`

Border to draw around rod.

Value is of type [`BorderSide`](/docs/reference/types/borderside) class.

### `color`

Rod [color](/docs/reference/colors).

Defaults to `Colors.CYAN`.

### `from_y`

Specifies a starting position of this rod on Y axis.

Defaults to `0`.

### `gradient`

Gradient to draw rod's background. 

Value is of type [`Gradient`](/docs/reference/types/gradient).

### `rod_stack_items`

Optional list of [`BarChartRodStackItem`](/docs/reference/types/barchartrodstackitem) objects to draw a stacked bar.

### `selected`

If set to `True` a tooltip is always shown on top of the bar when `BarChart.interactive` is set to `False`.

### `show_tooltip`

Whether a tooltip should be shown on top of hovered bar.

Defaults to `True`.

### `to_y`

Specifies an ending position of this rod on Y axis.

### `tooltip`

A custom tooltip value.

Defaults to `to_y`.

### `tooltip_align`

An align for the tooltip.

Value is of type [`TextAlign`](/docs/reference/types/textalign).

### `tooltip_style`

A text style to display tooltip with.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

### `width`

The width of this rod.

Defaults to `8`.
