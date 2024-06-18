---
title: LineChart
sidebar_label: LineChart
---

Draws a line chart.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/charts/linechart)

### LineChart 1

<img src="/img/docs/controls/charts/linechart-sample-1.gif" className="screenshot-50"/>

```python
import flet as ft

class State:
    toggle = True

s = State()

def main(page: ft.Page):
    data_1 = [
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 1),
                ft.LineChartDataPoint(3, 1.5),
                ft.LineChartDataPoint(5, 1.4),
                ft.LineChartDataPoint(7, 3.4),
                ft.LineChartDataPoint(10, 2),
                ft.LineChartDataPoint(12, 2.2),
                ft.LineChartDataPoint(13, 1.8),
            ],
            stroke_width=8,
            color=ft.colors.LIGHT_GREEN,
            curved=True,
            stroke_cap_round=True,
        ),
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 1),
                ft.LineChartDataPoint(3, 2.8),
                ft.LineChartDataPoint(7, 1.2),
                ft.LineChartDataPoint(10, 2.8),
                ft.LineChartDataPoint(12, 2.6),
                ft.LineChartDataPoint(13, 3.9),
            ],
            color=ft.colors.PINK,
            below_line_bgcolor=ft.colors.with_opacity(0, ft.colors.PINK),
            stroke_width=8,
            curved=True,
            stroke_cap_round=True,
        ),
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 2.8),
                ft.LineChartDataPoint(3, 1.9),
                ft.LineChartDataPoint(6, 3),
                ft.LineChartDataPoint(10, 1.3),
                ft.LineChartDataPoint(13, 2.5),
            ],
            color=ft.colors.CYAN,
            stroke_width=8,
            curved=True,
            stroke_cap_round=True,
        ),
    ]

    data_2 = [
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 1),
                ft.LineChartDataPoint(3, 4),
                ft.LineChartDataPoint(5, 1.8),
                ft.LineChartDataPoint(7, 5),
                ft.LineChartDataPoint(10, 2),
                ft.LineChartDataPoint(12, 2.2),
                ft.LineChartDataPoint(13, 1.8),
            ],
            stroke_width=4,
            color=ft.colors.with_opacity(0.5, ft.colors.LIGHT_GREEN),
            stroke_cap_round=True,
        ),
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 1),
                ft.LineChartDataPoint(3, 2.8),
                ft.LineChartDataPoint(7, 1.2),
                ft.LineChartDataPoint(10, 2.8),
                ft.LineChartDataPoint(12, 2.6),
                ft.LineChartDataPoint(13, 3.9),
            ],
            color=ft.colors.with_opacity(0.5, ft.colors.PINK),
            below_line_bgcolor=ft.colors.with_opacity(0.2, ft.colors.PINK),
            stroke_width=4,
            curved=True,
            stroke_cap_round=True,
        ),
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 3.8),
                ft.LineChartDataPoint(3, 1.9),
                ft.LineChartDataPoint(6, 5),
                ft.LineChartDataPoint(10, 3.3),
                ft.LineChartDataPoint(13, 4.5),
            ],
            color=ft.colors.with_opacity(0.5, ft.colors.CYAN),
            stroke_width=4,
            stroke_cap_round=True,
        ),
    ]

    chart = ft.LineChart(
        data_series=data_1,
        border=ft.Border(
            bottom=ft.BorderSide(4, ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE))
        ),
        left_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(
                    value=1,
                    label=ft.Text("1m", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=2,
                    label=ft.Text("2m", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=3,
                    label=ft.Text("3m", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=4,
                    label=ft.Text("4m", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=5,
                    label=ft.Text("5m", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=6,
                    label=ft.Text("6m", size=14, weight=ft.FontWeight.BOLD),
                ),
            ],
            labels_size=40,
        ),
        bottom_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(
                    value=2,
                    label=ft.Container(
                        ft.Text(
                            "SEP",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
                ft.ChartAxisLabel(
                    value=7,
                    label=ft.Container(
                        ft.Text(
                            "OCT",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
                ft.ChartAxisLabel(
                    value=12,
                    label=ft.Container(
                        ft.Text(
                            "DEC",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
            ],
            labels_size=32,
        ),
        tooltip_bgcolor=ft.colors.with_opacity(0.8, ft.colors.BLUE_GREY),
        min_y=0,
        max_y=4,
        min_x=0,
        max_x=14,
        # animate=5000,
        expand=True,
    )

    def toggle_data(e):
        if s.toggle:
            chart.data_series = data_2
            chart.data_series[2].point = True
            chart.max_y = 6
            chart.interactive = False
        else:
            chart.data_series = data_1
            chart.max_y = 4
            chart.interactive = True
        s.toggle = not s.toggle
        chart.update()

    page.add(ft.IconButton(ft.icons.REFRESH, on_click=toggle_data), chart)

ft.app(main)
```

### LineChart 2

<img src="/img/docs/controls/charts/linechart-sample-2.gif" className="screenshot-50"/>

```python
import flet as ft

class State:
    toggle = True

s = State()

def main(page: ft.Page):
    data_1 = [
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(0, 3),
                ft.LineChartDataPoint(2.6, 2),
                ft.LineChartDataPoint(4.9, 5),
                ft.LineChartDataPoint(6.8, 3.1),
                ft.LineChartDataPoint(8, 4),
                ft.LineChartDataPoint(9.5, 3),
                ft.LineChartDataPoint(11, 4),
            ],
            stroke_width=5,
            color=ft.colors.CYAN,
            curved=True,
            stroke_cap_round=True,
        )
    ]

    data_2 = [
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(0, 3.44),
                ft.LineChartDataPoint(2.6, 3.44),
                ft.LineChartDataPoint(4.9, 3.44),
                ft.LineChartDataPoint(6.8, 3.44),
                ft.LineChartDataPoint(8, 3.44),
                ft.LineChartDataPoint(9.5, 3.44),
                ft.LineChartDataPoint(11, 3.44),
            ],
            stroke_width=5,
            color=ft.colors.CYAN,
            curved=True,
            stroke_cap_round=True,
        )
    ]

    chart = ft.LineChart(
        data_series=data_1,
        border=ft.border.all(3, ft.colors.with_opacity(0.2, ft.colors.ON_SURFACE)),
        horizontal_grid_lines=ft.ChartGridLines(
            interval=1, color=ft.colors.with_opacity(0.2, ft.colors.ON_SURFACE), width=1
        ),
        vertical_grid_lines=ft.ChartGridLines(
            interval=1, color=ft.colors.with_opacity(0.2, ft.colors.ON_SURFACE), width=1
        ),
        left_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(
                    value=1,
                    label=ft.Text("10K", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=3,
                    label=ft.Text("30K", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=5,
                    label=ft.Text("50K", size=14, weight=ft.FontWeight.BOLD),
                ),
            ],
            labels_size=40,
        ),
        bottom_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(
                    value=2,
                    label=ft.Container(
                        ft.Text(
                            "MAR",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
                ft.ChartAxisLabel(
                    value=5,
                    label=ft.Container(
                        ft.Text(
                            "JUN",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
                ft.ChartAxisLabel(
                    value=8,
                    label=ft.Container(
                        ft.Text(
                            "SEP",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
            ],
            labels_size=32,
        ),
        tooltip_bgcolor=ft.colors.with_opacity(0.8, ft.colors.BLUE_GREY),
        min_y=0,
        max_y=6,
        min_x=0,
        max_x=11,
        # animate=5000,
        expand=True,
    )

    def toggle_data(e):
        if s.toggle:
            chart.data_series = data_2
            chart.interactive = False
        else:
            chart.data_series = data_1
            chart.interactive = True
        s.toggle = not s.toggle
        chart.update()

    page.add(ft.ElevatedButton("avg", on_click=toggle_data), chart)

ft.app(main)
```

## `LineChart` properties

<img src="/img/docs/controls/charts/linechart-diagram.svg" className="screenshot-100"/>

### `animate`

Controls chart implicit animation.

Value is of type [`AnimationValue`](/docs/reference/types/animationvalue).

### `baseline_x`

Baseline value for X axis.

Defaults to `0`.

### `baseline_y`

Baseline value for Y axis.

Defaults to `0`.

### `bgcolor`

Background [color](/docs/reference/colors) of the chart.

### `border`

The border around the chart.

Value is of type [`Border`](/docs/reference/types/border).

### `bottom_axis`

Configures the appearance of the bottom axis, its title and labels.

Value is of type [`ChartAxis`](#chartaxis-properties).

### `data_series`

A list of [`LineChartData`](#linechartdata-properties) controls drawn as separate lines on a chart.

### `horizontal_grid_lines`

Controls drawing of chart's horizontal lines.

Value is of type [`ChartGridLines`](#chartgridlines-properties).

### `interactive`

Enables automatic tooltips and points highlighting when hovering over the chart.

### `left_axis`

Configures the appearance of the left axis, its title and labels.

Value is of type [`ChartAxis`](#chartaxis-properties) class.

### `max_x`

Configures the maximum displayed value for X axis.

### `max_y`

Configures the maximum displayed value for Y axis.

### `min_x`

Configures the minimum displayed value for X axis.

### `min_y`

Configures the minimum displayed value for Y axis.

### `point_line_end`

The end of the vertical line drawn at selected point position.

Defaults to data point's `y` value.

### `point_line_start`

The start of the vertical line drawn under the selected point.

Defaults to chart's bottom edge.

### `right_axis`

Configures the appearance of the right axis, its title and labels.

Value is of type [`ChartAxis`](#chartaxis-properties) class.

### `tooltip_bgcolor`

Background [color](/docs/reference/colors) of tooltips.

### `top_axis`

Configures the appearance of the top axis, its title and labels.

Value is of type [`ChartAxis`](#chartaxis-properties).

### `vertical_grid_lines`

Controls drawing of chart's vertical lines.

Value is of type [`ChartGridLines`](#chartgridlines-properties).

## `LineChart` events

### `on_chart_event`

Fires when a chart line is hovered or clicked.

Event data is an instance `ft.LineChartEvent` class with the following properties:

* `type` event type such as `PointerHoverEvent`, `PointerExitEvent`, etc.
* `bar_index` - line's index or `-1` if no line hovered.
* `spot_index` - line point's index or `-1` if no point hovered.

## `LineChartData` properties

### `above_line`

A vertical line drawn between a line point and the top edge of the chart.

Value is of type [`ChartPointLine`](#chartpointline-properties).

### `above_line_bgcolor`

Fill the area above chart line with the specified [color](/docs/reference/colors).

### `above_line_cutoff_y`

Cut off filled area above line chart at specific Y value.

### `above_line_gradient`

Fill the area above chart line with the specified gradient.

### `below_line`

A vertical line drawn between a line point and the bottom edge of the chart.

Value is of type [`ChartPointLine`](#chartpointline-properties).

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

A list of points (dots) of [`LineChartDataPoint`](#linechartdatapoint-properties) type representing a single chart line.

### `gradient`

Gradient to draw line's background. Value is of type [`Gradient`](/docs/reference/types/gradient).

### `point`

Configures the appearance and shape of a line point (dot). The value of this property is either `True` - draw a point with default style, `False` - do not draw a line point, or one of the implementations of `ChartPointShape` class:

* `ChartCirclePoint` - circle point
* `ChartSquarePoint` - square point
* `ChartCrossPoint` - cross point

### `prevent_curve_over_shooting`

Whether to prevent overshooting when draw curve line on linear sequence spots.

Defaults to `False`.

### `prevent_curve_over_shooting_threshold`

Threshold for applying prevent overshooting algorithm.

Defaults to `10.0`.

### `shadow`

Shadow to drop by a chart line.

Value is of type [`BoxShadow`](/docs/reference/types/boxshadow).

### `selected_below_line`

A vertical line drawn between selected line point and the bottom adge of the chart. The value is either `True` - draw a line with default style, `False` - do not draw a line under selected point, or an instance of [`ChartPointLine`](#chartpointline-properties) class to specify line style to draw.

### `selected_point`

Configures the appearance and shape of a selected line point. See [`LineChartData.point`](#point) for supported property values.

### `stroke_cap_round`

Set to `True` to draw rounded line caps.

Defaults to `False`.

### `stroke_width`

The width of a chart line.

## `LineChartDataPoint` properties

### `point`

Configures the appearance and shape of a line point.

See [`LineChartData.point`](#point) for supported property values.

### `selected`

Draw the point as selected when `LineChart.interactive` is set to False.

### `selected_below_line`

A vertical line drawn between selected line point and the bottom adge of the chart. The value is either `True` - draw a line with default style, `False` - do not draw a line under selected point, or an instance of [`ChartPointLine`](#chartpointline-properties) class to specify line style to draw.

### `selected_point`

Configures the appearance and shape of a selected line point. See [`LineChartData.point`](#point) for supported property values.

### `show_above_line`

`True` to display a line above data point.

Defaults to `True`.

### `show_below_line`

`True` to display a line below data point.

Defaults to `True`.

### `show_tooltip`

`True` (default) if a tooltip should be shown on top of hovered data point.

### `tooltip`

A custom tooltip value.

Default is `y`.

### `tooltip_align`

An align for the tooltip.

Value is of type [`TextAlign`](/docs/reference/types/textalign).

### `tooltip_style`

A text style to display tooltip with.

Value is of type [`ft.TextStyle`](/docs/reference/types/textstyle).

### `x`

The position of a point on `X` axis.

### `y`

The position of a point on `Y` axis.

## `ChartGridLines` properties

Configures the appearance of horizontal and vertical grid lines within the chart.

### `color`

[Color](/docs/reference/colors) of a grid line.

### `dash_pattern`

Defines dash effect of the line. The value is a circular list of dash offsets and lengths. For example, the list `[5, 10]` would result in dashes 5 pixels long followed by blank spaces 10 pixels long. By default, a solid line is drawn.

### `interval`

Interval between grid lines.

Defaults to `1`.

### `width`

Width of a grid line.

Defaults to `1`.

## `ChartAxis` properties

Configures chart axis.

### `labels`

The list of [`ft.ChartAxisLabel`](#chartaxislabel-properties) objects to set custom axis labels for only specific values.

### `labels_interval`

The interval between automatic labels.

### `labels_size`

Width or height of labels area.

### `show_labels`

`True` to display labels along the axis. If `labels` is empty then automatic labels are displayed. 

### `title`

A `Control` to display as axis title.

### `title_size`

Width or height of title area.

## `ChartAxisLabel` properties

Configures a custom label for specific value.

### `label`

A `Control` to draw as a label.

### `value`

A value to draw label for.

## `ChartPointLine` properties

### `color`

[Color](/docs/reference/colors) of the line.

### `dash_pattern`

Dash pattern of the line.

### `width`

Width of the line.