---
title: BarChart
sidebar_label: BarChart
slug: barchart
---

Draws a bar chart.

## Examples

### BarChart 1

<img src="/img/docs/controls/charts/barchart-sample-1.png" className="screenshot-50"/>

```python
import flet as ft

def main(page: ft.Page):
    chart = ft.BarChart(
        bar_groups=[
            ft.BarChartGroup(
                x=0,
                bar_rods=[
                    ft.BarChartRod(
                        from_y=0,
                        to_y=40,
                        width=40,
                        color=ft.colors.AMBER,
                        tooltip="Apple",
                        border_radius=0,
                    ),
                ],
            ),
            ft.BarChartGroup(
                x=1,
                bar_rods=[
                    ft.BarChartRod(
                        from_y=0,
                        to_y=100,
                        width=40,
                        color=ft.colors.BLUE,
                        tooltip="Blueberry",
                        border_radius=0,
                    ),
                ],
            ),
            ft.BarChartGroup(
                x=2,
                bar_rods=[
                    ft.BarChartRod(
                        from_y=0,
                        to_y=30,
                        width=40,
                        color=ft.colors.RED,
                        tooltip="Cherry",
                        border_radius=0,
                    ),
                ],
            ),
            ft.BarChartGroup(
                x=3,
                bar_rods=[
                    ft.BarChartRod(
                        from_y=0,
                        to_y=60,
                        width=40,
                        color=ft.colors.ORANGE,
                        tooltip="Orange",
                        border_radius=0,
                    ),
                ],
            ),
        ],
        border=ft.border.all(1, ft.colors.GREY_400),
        left_axis=ft.ChartAxis(
            labels_size=40, title=ft.Text("Fruit supply"), title_size=40
        ),
        bottom_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(
                    value=0, label=ft.Container(ft.Text("Apple"), padding=10)
                ),
                ft.ChartAxisLabel(
                    value=1, label=ft.Container(ft.Text("Blueberry"), padding=10)
                ),
                ft.ChartAxisLabel(
                    value=2, label=ft.Container(ft.Text("Cherry"), padding=10)
                ),
                ft.ChartAxisLabel(
                    value=3, label=ft.Container(ft.Text("Orange"), padding=10)
                ),
            ],
            labels_size=40,
        ),
        horizontal_grid_lines=ft.ChartGridLines(
            color=ft.colors.GREY_300, width=1, dash_pattern=[3, 3]
        ),
        tooltip_bgcolor=ft.colors.with_opacity(0.5, ft.colors.GREY_300),
        max_y=110,
        interactive=True,
        expand=True,
    )

    page.add(chart)

ft.app(main)
```

### BarChart 2

<img src="/img/docs/controls/charts/barchart-sample-2.gif" className="screenshot-50"/>

```python
import flet as ft

class SampleRod(ft.BarChartRod):
    def __init__(self, y: float, hovered: bool = False):
        super().__init__()
        self.hovered = hovered
        self.y = y

    def _before_build_command(self):
        self.to_y = self.y + 1 if self.hovered else self.y
        self.color = ft.colors.YELLOW if self.hovered else ft.colors.WHITE
        self.border_side = (
            ft.BorderSide(width=1, color=ft.colors.GREEN_400)
            if self.hovered
            else ft.BorderSide(width=0, color=ft.colors.WHITE)
        )
        super()._before_build_command()

    def _build(self):
        self.tooltip = str(self.y)
        self.width = 22
        self.color = ft.colors.WHITE
        self.bg_to_y = 20
        self.bg_color = ft.colors.GREEN_300


def main(page: ft.Page):
    def on_chart_event(e: ft.BarChartEvent):
        for group_index, group in enumerate(chart.bar_groups):
            for rod_index, rod in enumerate(group.bar_rods):
                rod.hovered = e.group_index == group_index and e.rod_index == rod_index
        chart.update()

    chart = ft.BarChart(
        bar_groups=[
            ft.BarChartGroup(
                x=0,
                bar_rods=[SampleRod(5)],
            ),
            ft.BarChartGroup(
                x=1,
                bar_rods=[SampleRod(6.5)],
            ),
            ft.BarChartGroup(
                x=2,
                bar_rods=[SampleRod(5)],
            ),
            ft.BarChartGroup(
                x=3,
                bar_rods=[SampleRod(7.5)],
            ),
            ft.BarChartGroup(
                x=4,
                bar_rods=[SampleRod(9)],
            ),
            ft.BarChartGroup(
                x=5,
                bar_rods=[SampleRod(11.5)],
            ),
            ft.BarChartGroup(
                x=6,
                bar_rods=[SampleRod(6)],
            ),
        ],
        bottom_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(value=0, label=ft.Text("M")),
                ft.ChartAxisLabel(value=1, label=ft.Text("T")),
                ft.ChartAxisLabel(value=2, label=ft.Text("W")),
                ft.ChartAxisLabel(value=3, label=ft.Text("T")),
                ft.ChartAxisLabel(value=4, label=ft.Text("F")),
                ft.ChartAxisLabel(value=5, label=ft.Text("S")),
                ft.ChartAxisLabel(value=6, label=ft.Text("S")),
            ],
        ),
        on_chart_event=on_chart_event,
        interactive=True,
    )

    page.add(
        ft.Container(
            chart, bgcolor=ft.colors.GREEN_200, padding=10, border_radius=5, expand=True
        )
    )

ft.app(main)
```

## `BarChart` properties

### `prop1`

Duration of animation in milliseconds of swtiching between tabs. Default is `50`.

### `sections`

A list of `PieChartSection` controls.

## `BarChart` events

### `on_chart_event`

Fires when ...

## `BarChartGroup` properties

### `prop1`

TBD

## `BarChartRod` properties

### `prop1`

TBD

## `BarChartRodStackItem` properties

### `prop1`

TBD

