---
title: LineChartData
sidebar_label: LineChartData
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`LineChartData` class has the following properties:

### `above_line`

A vertical line drawn between a line point and the top edge of the chart.

Value is of type [`ChartPointLine`](/docs/reference/types/chartpointline).

### `above_line_bgcolor`

Fill the area above chart line with the specified [color](/docs/reference/colors).

### `above_line_cutoff_y`

Cut off filled area above line chart at specific Y value.

### `above_line_gradient`

Fill the area above chart line with the specified gradient.

### `below_line`

A vertical line drawn between a line point and the bottom edge of the chart.

Value is of type [`ChartPointLine`](/docs/reference/types/chartpointline).

### `below_line_bgcolor`

Fill the area below chart line with the specified [color](/docs/reference/colors).

### `below_line_cutoff_y`

Cut off filled area below line chart at specific Y value.

### `below_line_gradient`

Fill the area below chart line with the specified gradient.

### `color`

A [color](/docs/reference/colors) of chart line.

### `curved`

Set to `True` to draw chart line as a curve.

Defaults to `False`.

### `dash_pattern`

Defines dash effect of the line. The value is a circular list of dash offsets and lengths. For example, the list `[5, 10]` would result in dashes 5 pixels long followed by blank spaces 10 pixels long. By default, a solid line is drawn.

### `data_points`

A list of points (dots) of [`LineChartDataPoint`](/docs/reference/types/linechartdatapoint) type representing a single chart line.

### `gradient`

Gradient to draw line's background. 

Value is of type [`Gradient`](/docs/reference/types/gradient).

### `point`

Defines the appearance and shape of a line point (dot). 

Value is of type bool (`True` - draw a point with default style or `False` - do not draw a line point) or of type [`ChartPointShape`](/docs/reference/types/chartpointshape).

### `prevent_curve_over_shooting`

Whether to prevent overshooting when draw curve line on linear sequence spots.

Defaults to `False`.

### `prevent_curve_over_shooting_threshold`

Threshold to prevent overshooting algorithm.

Defaults to `10.0`.

### `shadow`

Shadow to drop by a chart line.

Value is of type [`BoxShadow`](/docs/reference/types/boxshadow).

### `selected_below_line`

A vertical line drawn between selected line point and the bottom adge of the chart. The value is either `True` - draw a line with default style, `False` - do not draw a line under selected point, or an instance of [`ChartPointLine`](/docs/reference/types/chartpointline) class to specify line style to draw.

### `selected_point`

Defines the appearance and shape of a selected line point.

Value is of type [`ChartPointShape`](/docs/reference/types/chartpointshape).

### `stroke_cap_round`

Set to `True` to draw rounded line caps.

Defaults to `False`.

### `stroke_width`

The width of a chart line.
