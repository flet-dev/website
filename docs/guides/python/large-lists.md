---
title: Large lists
sidebar_label: Large lists
---

You can use [`Column`](/docs/controls/column) and [`Row`](/docs/controls/row) controls to display lists in the most cases, but if the list contains hundreds or thousands of items `Column` and `Row` will be ineffective with lagging UI as they render all items at once even they are not visible at the current scrolling position.

In the following example we are adding 5,000 text controls to a page. Page uses `Column` as a default layout container:

```python
import flet
from flet import Page, Text

def main(page: Page):
    for i in range(5000):
        page.controls.append(Text(f"Line {i}"))
    page.scroll = "always"
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

Run the program and notice that it's not just it takes a couple of seconds to initially load and render all text lines on a page, but scrolling is slow and laggy too:

<img src="/img/docs/getting-started/scroll-column.gif" className="screenshot-50" />

For displaying lists with a lot of items use [`ListView`](/docs/controls/listview) and [`GridView`](/docs/controls/gridview) controls which render items on demand, visible at the current scrolling position only.

## ListView

[`ListView`](/docs/controls/listview) could be either vertical (default) or horizontal. ListView items are displayed one after another in the scroll direction.

ListView already implements effective on demand rendering of its children, but scrolling performance could be further improved if you can set the same fixed height or width (for `horizontal` ListView) for all items ("extent"). This could be done by either setting absolute extent with `item_extent` property or making the extent of all children equal to the extent of the first child by setting `first_item_prototype` to `True`.

Let's output a list of 5,000 items using ListView control:

```python
import flet
from flet import ListView, Page, Text

def main(page: Page):
    lv = ListView(expand=True, spacing=10)
    for i in range(5000):
        lv.controls.append(Text(f"Line {i}"))
    page.add(lv)

flet.app(target=main, view=flet.WEB_BROWSER)
```

Now the scrolling is smooth and fast enough to follow mouse movements:

<img src="/img/docs/getting-started/scroll-listview.gif" className="screenshot-50" />

:::note
We used `expand=True` in ListView constructor. In order to function properly, ListView must have a height (or width if `horizontal`) specified. You could set an absolute size, e.g. `ListView(height=300, spacing=10)`, but in the example above we make ListView to take all available space on the page, i.e. expand. Read more about [`Control.expand`](/docs/controls#expand) property.
:::

## GridView

[`GridView`](/docs/controls/gridview) allows arranging controls into a scrollable grid.

You can make a "grid" with `Column(wrap=True)` or `Row(wrap=True)`, for example:

```python
import os
import flet
from flet import Container, Page, Row, Text, alignment, border, border_radius, colors

os.environ["FLET_WS_MAX_MESSAGE_SIZE"] = "8000000"

def main(page: Page):
    r = Row(wrap=True, scroll="always", expand=True)
    page.add(r)

    for i in range(5000):
        r.controls.append(
            Container(
                Text(f"Item {i}"),
                width=100,
                height=100,
                alignment=alignment.center,
                bgcolor=colors.AMBER_100,
                border=border.all(1, colors.AMBER_400),
                border_radius=border_radius.all(5),
            )
        )
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

<img src="/img/docs/getting-started/row-wrap-as-grid.png" className="screenshot-50" />

Try scrolling and resizing the browser window - everything works, but very laggy.

:::note
At the start of the program we are setting the value of `FLET_WS_MAX_MESSAGE_SIZE` environment variable to `8000000` - this is the maximum size of WebSocket message in bytes that can be received by Flet Server rendering the page. Default size is 1 MB, but the size of JSON message describing 5,000 container controls would exceed 1 MB, so we are increasing allowed size to 8 MB.

Squeezing large messages through WebSocket channel is, generally, not a good idea, so use [batched updates](#batch-updates) aproach to control channel load.
:::

GridView, similar to ListView, is very effective to render a lot of children. Let's implement the example above using GridView:

```python
import os
import flet
from flet import Container, GridView, Page, Text, alignment, border, border_radius, colors

os.environ["FLET_WS_MAX_MESSAGE_SIZE"] = "8000000"

def main(page: Page):
    gv = GridView(expand=True, max_extent=100, child_aspect_ratio=0.5)
    page.add(gv)

    for i in range(5000):
        gv.controls.append(
            Container(
                Text(f"Item {i}"),
                alignment=alignment.center,
                bgcolor=colors.AMBER_100,
                border=border.all(1, colors.AMBER_400),
                border_radius=border_radius.all(5),
            )
        )
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

With GridView scrolling and window resizing are smooth and responsive!

You can specify either fixed number of rows or columns (runs) with `runs_count` property or the maximum size of a "tile" with `max_extent` property, so the number of runs can vary automatically. In our example we set the maximum tile size to 150 pixels and set its shape to "square" with `child_aspect_ratio=1`. `child_aspect_ratio` is the ratio of the cross-axis to the main-axis extent of each child. Try changing it to `0.5` or `2`.

## Batch updates

When `page.update()` is called a message is being sent to Flet server over WebSockets containing page updates since the last `page.update()`. Sending a large message with thousands of added controls could make a user waiting for a few seconds until the messages is fully received and controls rendered.

To increase usability of your program and present the results to a user as soon as possible you can send page updates in batches. For example, the following program adds 5,100 child controls to a ListView in batches of 500 items:

```python
import flet
from flet import ListView, Page, Text

def main(page: Page):

    # add ListView to a page first
    lv = ListView(expand=1, spacing=10, item_extent=50)
    page.add(lv)

    for i in range(5100):
        lv.controls.append(Text(f"Line {i}"))
        # send page to a page
        if i % 500 == 0:
            page.update()
    # send the rest to a page
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```
