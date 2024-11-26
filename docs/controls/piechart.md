---
title: PieChart
sidebar_label: PieChart
---

Draws a pie chart.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/charts/piechart)

### PieChart 1

<img src="/img/docs/controls/charts/piechart-sample-1.gif" className="screenshot-30"/>

```python
import flet as ft

def main(page: ft.Page):
    normal_border = ft.BorderSide(0, ft.Colors.with_opacity(0, ft.Colors.WHITE))
    hovered_border = ft.BorderSide(6, ft.Colors.WHITE)

    def on_chart_event(e: ft.PieChartEvent):
        for idx, section in enumerate(chart.sections):
            section.border_side = (
                hovered_border if idx == e.section_index else normal_border
            )
        chart.update()

    chart = ft.PieChart(
        sections=[
            ft.PieChartSection(
                25,
                color=ft.Colors.BLUE,
                radius=80,
                border_side=normal_border,
            ),
            ft.PieChartSection(
                25,
                color=ft.Colors.YELLOW,
                radius=65,
                border_side=normal_border,
            ),
            ft.PieChartSection(
                25,
                color=ft.Colors.PINK,
                radius=60,
                border_side=normal_border,
            ),
            ft.PieChartSection(
                25,
                color=ft.Colors.GREEN,
                radius=70,
                border_side=normal_border,
            ),
        ],
        sections_space=1,
        center_space_radius=0,
        on_chart_event=on_chart_event,
        expand=True,
    )

    page.add(chart)

ft.app(main)
```

### PieChart 2

<img src="/img/docs/controls/charts/piechart-sample-2.gif" className="screenshot-30"/>

```python
import flet as ft

def main(page: ft.Page):
    normal_radius = 50
    hover_radius = 60
    normal_title_style = ft.TextStyle(
        size=16, color=ft.Colors.WHITE, weight=ft.FontWeight.BOLD
    )
    hover_title_style = ft.TextStyle(
        size=22,
        color=ft.Colors.WHITE,
        weight=ft.FontWeight.BOLD,
        shadow=ft.BoxShadow(blur_radius=2, color=ft.Colors.BLACK54),
    )

    def on_chart_event(e: ft.PieChartEvent):
        for idx, section in enumerate(chart.sections):
            if idx == e.section_index:
                section.radius = hover_radius
                section.title_style = hover_title_style
            else:
                section.radius = normal_radius
                section.title_style = normal_title_style
        chart.update()

    chart = ft.PieChart(
        sections=[
            ft.PieChartSection(
                40,
                title="40%",
                title_style=normal_title_style,
                color=ft.Colors.BLUE,
                radius=normal_radius,
            ),
            ft.PieChartSection(
                30,
                title="30%",
                title_style=normal_title_style,
                color=ft.Colors.YELLOW,
                radius=normal_radius,
            ),
            ft.PieChartSection(
                15,
                title="15%",
                title_style=normal_title_style,
                color=ft.Colors.PURPLE,
                radius=normal_radius,
            ),
            ft.PieChartSection(
                15,
                title="15%",
                title_style=normal_title_style,
                color=ft.Colors.GREEN,
                radius=normal_radius,
            ),
        ],
        sections_space=0,
        center_space_radius=40,
        on_chart_event=on_chart_event,
        expand=True,
    )

    page.add(chart)

ft.app(main)
```

### PieChart 3

<img src="/img/docs/controls/charts/piechart-sample-3.gif" className="screenshot-30"/>

```python
import flet as ft

def main(page: ft.Page):
    normal_radius = 100
    hover_radius = 110
    normal_title_style = ft.TextStyle(
        size=12, color=ft.Colors.WHITE, weight=ft.FontWeight.BOLD
    )
    hover_title_style = ft.TextStyle(
        size=16,
        color=ft.Colors.WHITE,
        weight=ft.FontWeight.BOLD,
        shadow=ft.BoxShadow(blur_radius=2, color=ft.Colors.BLACK54),
    )
    normal_badge_size = 40
    hover_badge_size = 50

    def badge(icon, size):
        return ft.Container(
            ft.Icon(icon),
            width=size,
            height=size,
            border=ft.border.all(1, ft.Colors.BROWN),
            border_radius=size / 2,
            bgcolor=ft.Colors.WHITE,
        )

    def on_chart_event(e: ft.PieChartEvent):
        for idx, section in enumerate(chart.sections):
            if idx == e.section_index:
                section.radius = hover_radius
                section.title_style = hover_title_style
            else:
                section.radius = normal_radius
                section.title_style = normal_title_style
        chart.update()

    chart = ft.PieChart(
        sections=[
            ft.PieChartSection(
                40,
                title="40%",
                title_style=normal_title_style,
                color=ft.Colors.BLUE,
                radius=normal_radius,
                badge=badge(ft.icons.AC_UNIT, normal_badge_size),
                badge_position=0.98,
            ),
            ft.PieChartSection(
                30,
                title="30%",
                title_style=normal_title_style,
                color=ft.Colors.YELLOW,
                radius=normal_radius,
                badge=badge(ft.icons.ACCESS_ALARM, normal_badge_size),
                badge_position=0.98,
            ),
            ft.PieChartSection(
                15,
                title="15%",
                title_style=normal_title_style,
                color=ft.Colors.PURPLE,
                radius=normal_radius,
                badge=badge(ft.icons.APPLE, normal_badge_size),
                badge_position=0.98,
            ),
            ft.PieChartSection(
                15,
                title="15%",
                title_style=normal_title_style,
                color=ft.Colors.GREEN,
                radius=normal_radius,
                badge=badge(ft.icons.PEDAL_BIKE, normal_badge_size),
                badge_position=0.98,
            ),
        ],
        sections_space=0,
        center_space_radius=0,
        on_chart_event=on_chart_event,
        expand=True,
    )

    page.add(chart)

ft.app(main)
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
