---
title: PlotlyChart
sidebar_label: PlotlyChart
---

Displays [Plotly](https://plotly.com/python/) chart.

## Examples

### Line chart

The following example is based on [original example from Plotly docs](https://plotly.com/python/line-charts/).

<img src="/img/docs/controls/charts/plotly-linechart.png" className="screenshot-60"/>

```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/charts/plotly-chart/plotly-linechart.py
```

### Bar chart

The following example is based on [original example from Plotly docs](https://plotly.com/python/bar-charts/).

<img src="/img/docs/controls/charts/plotly-barchart.png" className="screenshot-60"/>

```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/charts/plotly-chart/plotly-barchart.py
```

### Pie chart

The following example is based on [original example from Plotly docs](https://plotly.com/python/pie-charts/).

<img src="/img/docs/controls/charts/plotly-piechart.png" className="screenshot-60"/>

```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/charts/plotly-chart/plotly-piechart.py
```

### Box chart

The following example is based on [original example from Plotly docs](https://plotly.com/python/box-plots/).

<img src="/img/docs/controls/charts/plotly-boxchart.png" className="screenshot-70"/>

```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/charts/plotly-chart/plotly-boxchart.py
```

## Properties

### `figure`

Plotly figure to draw - an instance of `plotly.graph_objects.Figure` class.

### `original_size`

`True` to display chart in original size. `False` (default) to display a chart that fits configured bounds.

### `isolated`

Every time when a page or parent chart control are updated with `page.update()` or `Control.update()` methods respectively the chart is re-drawn by calling Plotly API. Frequent re-drawings of large charts could affect the performance of the entire Flet app.

Set `isolated` to `True` to enable explicit chart updates. To re-draw the chart call its `update()` method.