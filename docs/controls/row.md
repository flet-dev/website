---
title: Row
sidebar_label: Row
slug: row
---

A control that displays its children in a horizontal array.

To cause a child control to expand and fill the available horizontal space set its `expand` property.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Row spacing

<img src="/img/docs/controls/row/row-spacing.gif" className="screenshot" />

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

    def gap_slider_change(e):
        row.spacing = int(e.control.value)
        row.update()

    gap_slider = Slider(
        min=0,
        max=50,
        divisions=50,
        value=0,
        label="{value}",
        on_change=gap_slider_change,
    )

    row = Row(spacing=0, controls=items(10))

    page.add(Column([Text("Spacing between items"), gap_slider]), row)

flet.app(target=main)
```
  </TabItem>
</Tabs>

### Row wrapping

<img src="/img/docs/controls/row/row-wrap.gif" className="screenshot" />

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

    def slider_change(e):
        row.width = float(e.control.value)
        row.update()

    width_slider = Slider(
        min=0,
        max=page.window_width,
        divisions=20,
        value=page.window_width,
        label="{value}",
        on_change=slider_change,
    )

    row = Row(
        wrap=True,
        spacing=10,
        run_spacing=10,
        controls=items(30),
        width=page.window_width,
    )

    page.add(
        Column(
            [
                Text(
                    "Change the row width to see how child items wrap onto multiple rows:"
                ),
                width_slider,
            ]
        ),
        row,
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

### Row horizontal alignments

<img src="/img/docs/controls/row/row-alignment.png" className="screenshot" />

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

    def row_with_alignment(align):
        return Column(
            [
                Text(align, size=16),
                Container(
                    content=Row(items(3), alignment=align),
                    bgcolor=colors.AMBER_100,
                ),
            ]
        )

    page.add(
        row_with_alignment("start"),
        row_with_alignment("center"),
        row_with_alignment("end"),
        row_with_alignment("spaceBetween"),
        row_with_alignment("spaceAround"),
        row_with_alignment("spaceEvenly"),
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

### Row vertical 

<img src="/img/docs/controls/row/row-vertical-alignment.png" className="screenshot-70" />

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

    def row_with_vertical_alignment(align):
        return Column(
            [
                Text(align, size=16),
                Container(
                    content=Row(items(3), vertical_alignment=align),
                    bgcolor=colors.AMBER_100,
                    height=150,
                ),
            ]
        )

    page.add(
        row_with_vertical_alignment("start"),
        row_with_vertical_alignment("center"),
        row_with_vertical_alignment("end"),
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `controls`

A list of Controls to display inside the Row.

### `alignment`

How the child Controls should be placed horizontally.

For example, `start`, the default, places the children on the left of a Row. Supported values: `start`, `end`, `center`, `spaceBetween`, `spaceAround`, `spaceEvenly`.

### `vertical_alignment`

How the child Controls should be placed vertically.

Default value is `start`. Supported values: `start`, `center`, `end`, `stretch`, `baseline`.

### `tight`

Specifies how much space should be occupied horizontally. Default is `False` - allocate all space to children.

### `spacing`

Spacing between controls in a row. Default value is 10 virtual pixels. Spacing is applied only when `alignment` is set to `start`, `end` or `center`.

### `wrap`

When set to `True` the Row will put child controls into additional rows (runs) if they don't fit a single row.

### `run_spacing`

Spacing between runs when `wrap=True`. Default value is 10.

### `scroll`

Enables horizontal scrolling for the Row to prevent its content overflow. Supported values:

* `none` (default) - the Row is non-scrollable and its content could overflow.
* `auto` - scrolling is enabled and scroll bar is only shown when scrolling occurs.
* `adaptive` - scrolling is enabled and scroll bar is always shown when running app as web or desktop.
* `always` - scrolling is enabled and scroll bar is always shown.

### `auto_scroll`

`True` if scrollbar should automatically move its position to the end when children update.

## Expanding children

When a child Control is placed into a Row you can "expand" it to fill the available space. Every Control has `expand` property that can have either a boolean value (`True` - expand control to fill all available space) or an integer - an "expand factor" specifying how to divide a free space with other expanded child controls. For example, this code creates a row with a TextField taking all available space and an ElevatedButton next to it:

```python
r = Row([
  TextField(hint_text="Enter your name", expand=True),
  ElevatedButton(text="Join chat")
])
```

The following example with numeric expand factors creates a Row with 3 containers in it and having widths of `20% (1/5)`, `60% (3/5)` and `20% (1/5)` respectively:

```python
r = Row([
  Container(expand=1, content=Text("A")),
  Container(expand=3, content=Text("B")),
  Container(expand=1, content=Text("C"))
])
```

In general, the resulting width of a child in percents is calculated as `expand / sum(all expands) * 100%`.