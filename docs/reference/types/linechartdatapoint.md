---
title: LineChartDataPoint
sidebar_label: LineChartDataPoint
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`LineChartDataPoint` class has the following properties:

### `point`

Defines the appearance and shape of a line point.

Value is of type [`ChartPointShape`](/docs/reference/types/chartpointshape).

### `selected`

Draw the point as selected when `LineChart.interactive` is set to False.

### `selected_below_line`

A vertical line drawn between selected line point and the bottom adge of the chart. The value is either `True` - draw a line with default style, `False` - do not draw a line under selected point, or an instance of [`ChartPointLine`](/docs/reference/types/chartpointline) class to specify line style to draw.

### `selected_point`

Defines the appearance and shape of a selected line point. 

Value is of type [`ChartPointShape`](/docs/reference/types/chartpointshape).

### `show_above_line`

Whether to display a line above data point.

Defaults to `True`.

### `show_below_line`

Whether to display a line below data point.

Defaults to `True`.

### `show_tooltip`

Whether a tooltip should be shown on top of hovered data point.

Defaults to `True`.

### `tooltip`

A custom tooltip value.

Default is `y`.

### `tooltip_align`

An align for the tooltip.

Value is of type [`TextAlign`](/docs/reference/types/textalign).

### `tooltip_style`

A text style to display tooltip with.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

### `x`

The position of a point on `X` axis.

### `y`

The position of a point on `Y` axis.
