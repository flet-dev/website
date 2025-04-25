---
title: PieChart
sidebar_label: PieChart
---

Draws a pie chart.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/charts/piechart)

### PieChart 1

<img src="/img/docs/controls/charts/piechart-sample-1.gif" className="screenshot-30"/>

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/charts/pie-chart/piechart-example.py
```

### PieChart 2

<img src="/img/docs/controls/charts/piechart-sample-2.gif" className="screenshot-30"/>

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/charts/pie-chart/piechart-with-titles.py
```

### PieChart 3

<img src="/img/docs/controls/charts/piechart-sample-3.gif" className="screenshot-30"/>

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/charts/pie-chart/piechart-with-icons.py
```

## Properties

<img src="/img/docs/controls/charts/piechart-diagram.svg" className="screenshot-40"/>

### `animate`

Controls chart implicit animation. 

Value is of type [`AnimationValue`](/docs/reference/types/animationvalue).

### `center_space_color`

Free space [color](/docs/reference/colors) in the middle of a chart.

### `center_space_radius`

Free space radius in the middle of a chart.

### `sections_space`

A gap between `sections`.

### `start_degree_offset`

By default, `sections` are drawn from zero degree (right side of the circle) clockwise.
You can change the starting point, by setting `start_degree_offset` (in degrees).

### `sections`

A list of [`PieChartSection`](/docs/reference/types/piechartsection) controls drawn in a circle.

## Events

### `on_chart_event`

Fires when a chart section is hovered or clicked.

Event data is an instance [`PieChartEvent`](/docs/reference/types/piechartevent).
