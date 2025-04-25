---
title: MatplotlibChart
sidebar_label: MatplotlibChart
---

Displays [Matplotlib](https://matplotlib.org/) chart.

## Examples

### Bar color chart

The following example is based on [original example from Matplotlib docs](https://matplotlib.org/stable/gallery/lines_bars_and_markers/bar_colors.html#sphx-glr-gallery-lines-bars-and-markers-bar-colors-py).

<img src="/img/docs/controls/charts/matplotlib-barchart.png" className="screenshot-60"/>

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/charts/matplotlib-chart/mpl-barchart-example.py
```

### Line chart

The following example is based on [original example from Matplotlib docs](https://matplotlib.org/stable/gallery/lines_bars_and_markers/cohere.html#sphx-glr-gallery-lines-bars-and-markers-cohere-py).

<img src="/img/docs/controls/charts/matplotlib-linechart.png" className="screenshot-60"/>

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/charts/matplotlib-chart/mpl-linechart-example.py
```

## Properties

### `figure`

Matplotlib figure to draw - an instance of `matplotlib.figure.Figure` class.

### `isolated`

Every time when a page or parent chart control are updated with `page.update()` or `Control.update()` methods respectively the chart is re-drawn by calling Matplotlib API. Frequent re-drawings of large charts could affect the performance of the entire Flet app.

Set `isolated` to `True` to enable explicit chart updates. To re-draw the chart call its `update()` method. For example the first example on this page could be modified as following:

```python
def main(page: ft.Page):

    # ...

    # set initial axis legent
    ax.legend(title="Fruit color")

    # enable explicit updates
    # and add chart to a page
    chart1 = MatplotlibChart(fig, isolated=True, expand=True)
    page.add(chart1)

    sleep(5)

    # update chart axis
    ax.legend(title="Colors")
    chart1.update()

ft.app(main)
```

### `original_size`

Whether to display chart in original size.

Defaults to `False` - display a chart that fits configured bounds.

### `transparent`

Whether to remove the background from the chart.

Defaults to `False` - display a chart with background.
