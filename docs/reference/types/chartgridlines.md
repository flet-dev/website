---
title: ChartGridLines
sidebar_label: ChartGridLines
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Configures the appearance of horizontal and vertical grid lines within the chart.

`ChartGridLines` class has the following properties:

### `color`

The [color](/docs/reference/colors) of a grid line.

### `dash_pattern`

Defines dash effect of the line. The value is a circular list of dash offsets and lengths. For example, the
list `[5, 10]` would result in dashes 5 pixels long followed by blank spaces 10 pixels long. By default, a solid line is
drawn.

### `interval`

The interval between grid lines.

Defaults to `1`.

### `width`

The width of a grid line.

Defaults to `1`.
