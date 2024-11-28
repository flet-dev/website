---
title: PieChartSection
sidebar_label: PieChartSection
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`PieChartSection` class has the following properties:

### `value`

Determines how much the section should occupy. This depends on sum of all sections, each section should
occupy (`value` / sum of all values) * `360` degrees.

### `radius`

External radius of the section.

### `color`

Background [color](/docs/reference/colors) of the section.

### `border_side`

The border around section shape.

Value is of type [`BorderSide`](/docs/reference/types/borderside).

### `title`

A title drawn at the center of the section. No title is drawn if `title` is empty.

### `title_style`

The style to draw `title` with. The value is an instance of [`TextStyle`](/docs/reference/types/textstyle) class.

### `title_position`

By default title is drawn in the middle of the section, but its position can be changed
with `title_position` property which value must be between `0.0` (near the center) and `1.0`(near the outside of the pie
chart).

### `badge`

An optional `Control` drawn in the middle of a section.

### `badge_position`

By default the badge is drawn in the middle of the section, but its position can be changed with `badge_position`
property which value must be between `0.0` (near the center) and `1.0`(near the outside of the pie chart).