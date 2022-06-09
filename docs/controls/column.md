---
title: Column
sidebar_label: Column
slug: column
---

A control that displays its children in a vertical array.

To cause a child control to expand and fill the available vertical space set its `expand` property.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Column spacing

<img src="/img/docs/controls/column/column-spacing.gif" className="screenshot-50"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Column, Container, Page, Slider, Text, alignment, border_radius, colors

def main(page: Page):
    def items(count):
        items = []
        for i in range(1, count + 1):
            items.append(
                Container(
                    content=Text(value=i),
                    alignment=alignment.center,
                    width=50,
                    height=50,
                    bgcolor=colors.AMBER,
                    border_radius=border_radius.all(5),
                )
            )
        return items

    def spacing_slider_change(e):
        col.spacing = int(e.control.value)
        col.update()

    gap_slider = Slider(
        min=0,
        max=100,
        divisions=10,
        value=0,
        label="{value}",
        width=500,
        on_change=spacing_slider_change,
    )

    col = Column(spacing=0, controls=items(5))

    page.add(Column([Text("Spacing between items"), gap_slider]), col)

flet.app(target=main)
```
  </TabItem>
</Tabs>

### Column wrapping

<img src="/img/docs/controls/column/column-wrapping.gif" className="screenshot-70"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import (
    Column,
    Container,
    Page,
    Row,
    Slider,
    Text,
    alignment,
    border_radius,
    colors,
)

HEIGHT = 400

def main(page: Page):
    def items(count):
        items = []
        for i in range(1, count + 1):
            items.append(
                Container(
                    content=Text(value=i),
                    alignment=alignment.center,
                    width=30,
                    height=30,
                    bgcolor=colors.AMBER,
                    border_radius=border_radius.all(5),
                )
            )
        return items

    def slider_change(e):
        col.height = float(e.control.value)
        col.update()

    width_slider = Slider(
        min=0,
        max=HEIGHT,
        divisions=20,
        value=HEIGHT,
        label="{value}",
        width=500,
        on_change=slider_change,
    )

    col = Column(
        wrap=True,
        spacing=10,
        run_spacing=10,
        controls=items(10),
        height=HEIGHT,
    )

    page.add(
        Column(
            [
                Text(
                    "Change the column height to see how child items wrap onto multiple columns:"
                ),
                width_slider,
            ]
        ),
        Container(content=col, bgcolor=colors.AMBER_100),
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

### Column vertical alignments

<img src="/img/docs/controls/column/column-alignment.png"  className="screenshot-70"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Column, Container, Page, Row, Text, alignment, colors

def main(page: Page):
    def items(count):
        items = []
        for i in range(1, count + 1):
            items.append(
                Container(
                    content=Text(value=i),
                    alignment=alignment.center,
                    width=50,
                    height=50,
                    bgcolor=colors.AMBER_500,
                )
            )
        return items

    def column_with_alignment(align):
        return Column(
            [
                Text(align, size=16),
                Container(
                    content=Column(items(3), alignment=align),
                    bgcolor=colors.AMBER_100,
                    height=400,
                ),
            ]
        )

    page.add(
        Row(
            [
                column_with_alignment("start"),
                column_with_alignment("center"),
                column_with_alignment("end"),
                column_with_alignment("spaceBetween"),
                column_with_alignment("spaceAround"),
                column_with_alignment("spaceEvenly"),
            ],
            spacing=30,
            alignment="start",
        )
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

### Column horizontal alignments

<img src="/img/docs/controls/column/column-horiz-alignment.png"  className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Column, Container, Page, Row, Text, alignment, colors

def main(page: Page):
    def items(count):
        items = []
        for i in range(1, count + 1):
            items.append(
                Container(
                    content=Text(value=i),
                    alignment=alignment.center,
                    width=50,
                    height=50,
                    bgcolor=colors.AMBER_500,
                )
            )
        return items

    def column_with_horiz_alignment(align):
        return Column(
            [
                Text(align, size=16),
                Container(
                    content=Column(
                        items(3), alignment="start", horizontal_alignment=align
                    ),
                    bgcolor=colors.AMBER_100,
                    width=100,
                ),
            ]
        )

    page.add(
        Row(
            [
                column_with_horiz_alignment("start"),
                column_with_horiz_alignment("center"),
                column_with_horiz_alignment("end"),
            ],
            spacing=30,
            alignment="start",
        )
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `controls`

A list of Controls to display inside the Column.

### `alignment`

How the child Controls should be placed vertically.

For example, `start`, the default, places the children at the top of a Column. Supported values: `start`, `end`, `center`, `spaceBetween`, `spaceAround`, `spaceEvenly`.

### `horizontal_alignment`

How the child Controls should be placed horizontally.

Default value is `start`. Supported values: `start`, `center`, `end`, `stretch`, `baseline`.

### `tight`

Specifies how much space should be occupied vertically. Default is `False` - allocate all space to children.

### `spacing`

Spacing between controls in a Column. Default value is 10 virtual pixels. Spacing is applied only when `alignment` is set to `start`, `end` or `center`.

### `wrap`

When set to `True` the Column will put child controls into additional columns (runs) if they don't fit a single column.

### `run_spacing`

Spacing between runs when `wrap=True`. Default value is 10.

### `scroll`

Enables a vertical scrolling for the Column to prevent its content overflow. Supported values:

* `none` (default) - the Column is non-scrollable and its content could overflow.
* `auto` - scrolling is enabled and scroll bar is only shown when scrolling occurs.
* `adaptive` - scrolling is enabled and scroll bar is always shown when running app as web or desktop.
* `always` - scrolling is enabled and scroll bar is always shown.

### `auto_scroll`

`True` if scrollbar should automatically move its position to the end when children update.

## Expanding children

When a child Control is placed into a Column you can "expand" it to fill the available space. Every Control has `expand` property that can have either a boolean value (`True` - expand control to fill all available space) or an integer - an "expand factor" specifying how to divide a free space with other expanded child controls. For example, this code creates a column with a Container taking all available space and a Text control at the bottom serving as a status bar:

```python
r = Column([
  Container(expand=True, content=Text("Here is search results")),
  Text("Records found: 10")
])
```

The following example with numeric expand factors creates a Column with 3 containers in it and having heights of `20% (1/5)`, `60% (3/5)` and `20% (1/5)` respectively:

```python
r = Column([
  Container(expand=1, content=Text("Header")),
  Container(expand=3, content=Text("Body")),
  Container(expand=1, content=Text("Footer"))
])
```

In general, the resulting height of a child in percents is calculated as `expand / sum(all expands) * 100%`.