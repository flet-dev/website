---
title: Container
sidebar_label: Container
slug: container
---

Container allows to decorate a control with background color and border and position it with padding, margin and alignment. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Containers with different background color

<img src="/img/docs/controls/container/containers-background-color.png" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Container, ElevatedButton, OutlinedButton, Page, colors


def main(page: Page):
    page.title = "Containers with background color"

    c1 = Container(
        content=ElevatedButton("Elevated Button in Container"),
        bgcolor=colors.YELLOW,
        padding=5,
    )

    c2 = Container(
        content=ElevatedButton(
            "Elevated Button with opacity=0.5 in Container", opacity=0.5
        ),
        bgcolor=colors.YELLOW,
        padding=5,
    )

    c3 = Container(
        content=OutlinedButton("Outlined Button in Container"),
        bgcolor=colors.YELLOW,
        padding=5,
    )
    page.add(c1, c2, c3)


flet.app(target=main)
```
  </TabItem>
</Tabs>

### Clickable container

<img src="/img/docs/controls/container/clickable-container.gif"className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Container, Page, Row, Text, alignment, colors

def main(page: Page):
    page.title = "Containers - clickable and not"
    page.horizontal_alignment = "center"
    page.vertical_alignment = "center"

    page.add(
        Row(
            [
                Container(
                    content=Text("Non clickable"),
                    margin=10,
                    padding=10,
                    alignment=alignment.center,
                    bgcolor=colors.AMBER,
                    width=150,
                    height=150,
                    border_radius=10,
                ),
                Container(
                    content=Text("Clickable without Ink"),
                    margin=10,
                    padding=10,
                    alignment=alignment.center,
                    bgcolor=colors.GREEN_200,
                    width=150,
                    height=150,
                    border_radius=10,
                    on_click=lambda e: print("Clickable without Ink clicked!"),
                ),
                Container(
                    content=Text("Clickable with Ink"),
                    margin=10,
                    padding=10,
                    alignment=alignment.center,
                    bgcolor=colors.CYAN_200,
                    width=150,
                    height=150,
                    border_radius=10,
                    ink=True,
                    on_click=lambda e: print("Clickable with Ink clicked!"),
                ),
                Container(
                    content=Text("Clickable transparent with Ink"),
                    margin=10,
                    padding=10,
                    alignment=alignment.center,
                    width=150,
                    height=150,
                    border_radius=10,
                    ink=True,
                    on_click=lambda e: print("Clickable transparent with Ink clicked!"),
                ),
            ],
            alignment="center",
        ),
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

<img src="/img/docs/controls/container/container-diagram.png" width="60%" />

### `content`

A child Control contained by the container.

### `padding`

Empty space to inscribe inside a container decoration (background, border). The child control is placed inside this padding.

Padding is an instance of `padding.Padding` class with properties set padding for all sides of the rectangle: `left`, `top`, `right`, `bottom`. An instance of `padding.Padding` can be created via constructor with values for specific sides or created with helper methods:

* `padding.all(value: float)`
* `padding.symmetric(vertical, horizontal)`
* `padding.only(left, top, right, bottom)`

For example:

```python
from flet import padding

container_1.padding = padding.all(10)
container_2.padding = 20 # same as padding.all(20)
container_3.padding = padding.symmetric(horizontal=10)
container_4.padding=padding.only(left=10)
```

<img src="/img/docs/controls/container/container-padding-diagram.png" width="60%" />

### `margin`

Empty space to surround the decoration and child control.

Margin is an instance of `margin.Margin` class with properties set margins for all sides of the rectangle: `left`, `top`, `right`, `bottom`. An instance of `margin.Margin` can be created via constructor with values for specific sides or created with helper methods:

* `margin.all(value)`
* `margin.symmetric(vertical, horizontal)`
* `margin.only(left, top, right, bottom)`

For example:

```python
from flet import margin

container_1.margin = margin.all(10)
container_2.margin = 20 # same as margin.all(20)
container_3.margin = margin.symmetric(vertical=10)
container_3.margin = margin.only(left=10)
```
<img src="/img/docs/controls/container/container-margin-diagram.png" width="60%" />

### `alignment`

Align the child control within the container.

Alignment is an instance of `alignment.Alignment` class object with `x` and `y` properties representing the distance from the center of a rectangle. `x=0`, `y=0` represents the center of the rectangle. `x=-1`, `y=-1` represents the top left of the rectangle, `x=1.0`, `y=1.0` represents the bottom right of the rectangle. There are pre-defined alignment constants in `flet.alignment` module: `topLeft`, `topCenter`, `topRight`, `centerLeft`, `center`, `centerRight`, `bottomLeft`, `bottomCenter`, `bottomRight`.

<img src="/img/docs/controls/container/container-alignments-diagram.png" width="40%" />

For example:

```python
from flet import alignment

container_1.alignment = alignment.center
container_2.alignment = alignment.top_left
container_3.alignment = alignment.Alignment(-0.5, -0.5)
```
<img src="/img/docs/controls/container/containers-alignments.png" width="60%" />

### `bgcolor`

Background color of the container.

A color value could be a hex value in `#ARGB` format (e.g. `#FFCC0000`), `#RGB` format (e.g. `#CC0000`) or a named color from `flet.colors` module.

### `border`

A border to draw above the background color.

Each side of the container border is described by an instance of `border.BorderSide` class with two properties: `width` (number) and `color` (string). The value of `border` property is an instance of `border.Border` class describing all 4 sides of the rectangle. Helper methods available to set border styles:

* `border.all(width, color)`
* `border.symmetric(vertical: BorderSide, horizontal: BorderSide)`
* `border.only(left: BorderSide, top: BorderSide, right: BorderSide, bottom: BorderSide)`.

For example:

```python
from flet import border, colors
container_1.border = border.all(10, colors.PINK_600)
container_1.border = border.only(bottom=border.BorderSide(1, "black"))
```

### `border_radius`

If specified, the corners of the container are rounded by this radius. Border radius is an instance of `border_radius.BorderRadius` class with 4 properties: `topLeft`, `topRight`, `bottomLeft`, `bottomRight`. The object could be created with a constructor where all corner values set separately or with helper methods:

* `border_radius.all(value)`
* `border_radius.horizontal(left: float = 0, right: float = 0)`
* `border_radius.vertical(top: float = 0, bottom: float = 0)`
* `border_radius.only(topLeft, topRight, bottomLeft, bottomRight)`

For example:

```python
from flet import border_radius
container_1.border_radius = border_radius.all(30)
```

### `ink`

`True` to produce ink ripples effect when user clicks the container. Default is `False`.

## Events

### `on_click`

Fires when a user clicks the container.