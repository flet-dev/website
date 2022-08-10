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

<img src="/img/docs/controls/container/clickable-container.gif" className="screenshot-50" />

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

<img src="/img/docs/controls/container/container-diagram.png" className="screenshot-50" />

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

<img src="/img/docs/controls/container/container-padding-diagram.png" className="screenshot-50" />

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
<img src="/img/docs/controls/container/container-margin-diagram.png" className="screenshot-50" />

### `alignment`

Align the child control within the container.

Alignment is an instance of `alignment.Alignment` class object with `x` and `y` properties representing the distance from the center of a rectangle. `x=0`, `y=0` represents the center of the rectangle. `x=-1`, `y=-1` represents the top left of the rectangle, `x=1.0`, `y=1.0` represents the bottom right of the rectangle. There are pre-defined alignment constants in `flet.alignment` module: `topLeft`, `topCenter`, `topRight`, `centerLeft`, `center`, `centerRight`, `bottomLeft`, `bottomCenter`, `bottomRight`.

<img src="/img/docs/controls/container/container-alignments-diagram.png" className="screenshot-40" />

For example:

```python
from flet import alignment

container_1.alignment = alignment.center
container_2.alignment = alignment.top_left
container_3.alignment = alignment.Alignment(-0.5, -0.5)
```
<img src="/img/docs/controls/container/containers-alignments.png" className="screenshot-50" />

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

### `gradient`

Configures gradient background. The value must be an instance of one of the following classes:

* `LinearGradient`
* `RadialGradient`
* `SweepGradient`

#### `LinearGradient`

<img src="/img/docs/controls/container/linear-gradient.png" className="screenshot-20" />

```python
Container(
    gradient=LinearGradient(
        begin=alignment.top_center,
        end=alignment.bottom_center,
        colors=[colors.BLUE, colors.YELLOW],
    ),
    width=150,
    height=150,
    border_radius=5,
)
```

`LinearGradient` class has the following properties:

* `begin` - An instance of `Alignment` class. The offset at which stop 0.0 of the gradient is placed.
* `end` - An instance of `Alignment` class. The offset at which stop 1.0 of the gradient is placed.
* `colors` - The colors the gradient should obtain at each of the stops. If stops is non-null, this list must have the same length as stops. This list must have at least two colors in it (otherwise, it's not a gradient!).
* `stops` - A list of values from 0.0 to 1.0 that denote fractions along the gradient. If non-null, this list must have the same length as `colors`. If the first value is not 0.0, then a stop with position 0.0 and a color equal to the first color in `colors` is implied. If the last value is not 1.0, then a stop with position 1.0 and a color equal to the last color in `colors` is implied.
* `tile_mode` - How this gradient should tile the plane beyond in the region before `begin` and after `end`. Supported values: `clamp` (default), `decal`, `mirror`, `repeated`. More info [here](https://api.flutter.dev/flutter/dart-ui/TileMode.html).
* `rotation` - rotation for the gradient, in [radians](https://en.wikipedia.org/wiki/Radian), around the center-point of its bounding box.

More information:

* [Linear gradient](https://api.flutter.dev/flutter/painting/LinearGradient-class.html) in Flutter documentation.
* [Radian measuring unit](https://en.wikipedia.org/wiki/Radian) on Wikipedia.

#### `RadialGradient`

<img src="/img/docs/controls/container/radial-gradient.png" className="screenshot-20" />

```python
Container(
    gradient=RadialGradient(
        colors=[colors.YELLOW, colors.BLUE],
    ),
    width=150,
    height=150,
    border_radius=5,
)
```

`RadialGradient` class has the following properties:

* `colors`, `stops`, `tile_mode`, `rotation` - see [Linear gradient](#lineargradient) for description of these properties.
* `center` - An instance of `Alignment` class. The center of the gradient, as an offset into the (-1.0, -1.0) x (1.0, 1.0) square describing the gradient which will be mapped onto the paint box. For example, an alignment of (0.0, 0.0) will place the radial gradient in the center of the box.
* `radius` - The radius of the gradient, as a fraction of the shortest side of the paint box. For example, if a radial gradient is painted on a box that is 100.0 pixels wide and 200.0 pixels tall, then a radius of 1.0 will place the 1.0 stop at 100.0 pixels from the `center`.
* `focal` - The focal point of the gradient. If specified, the gradient will appear to be focused along the vector from `center` to focal.
* `focal_radius` - The radius of the focal point of gradient, as a fraction of the shortest side of the paint box. For example, if a radial gradient is painted on a box that is 100.0 pixels wide and 200.0 pixels tall, then a radius of 1.0 will place the 1.0 stop at 100.0 pixels from the focal point.

More information:

* [Radial gradient](https://api.flutter.dev/flutter/painting/RadialGradient-class.html) in Flutter documentation.

#### `SweepGradient`

<img src="/img/docs/controls/container/sweep-gradient.png" className="screenshot-20" />

```python
Container(
    gradient=SweepGradient(
        center=alignment.center,
        start_angle=0.0,
        end_angle=math.pi * 2,
        colors=[colors.YELLOW, colors.BLUE],
    ),
    width=150,
    height=150,
    border_radius=5,
)
```

`SweepGradient` class has the following properties:

* `colors`, `stops`, `tile_mode`, `rotation` - see [Linear gradient](#lineargradient) for description of these properties.
* `center` - The center of the gradient, as an offset into the (-1.0, -1.0) x (1.0, 1.0) square describing the gradient which will be mapped onto the paint box. For example, an alignment of (0.0, 0.0) will place the sweep gradient in the center of the box.
* `start_angle` - The angle in radians at which stop 0.0 of the gradient is placed. Defaults to 0.0.
* `end_angle` - The angle in radians at which stop 1.0 of the gradient is placed. Defaults to math.pi * 2.

More information:

* [Sweep gradient](https://api.flutter.dev/flutter/painting/SweepGradient-class.html) in Flutter documentation.

### `image_src`

Sets an image as a container background. See [`Image.src`](image#src) for more details.

### `image_src_base64`

Sets an image encoded as Base-64 string as a container background. See [`Image.src_base64`](image#src_base64) for more details.

### `image_repeat`

See [`Image.repeat`](image#repeat) for more details.

### `image_fit`

See [`Image.fit`](image#fit) for more details.

### `image_opacity`

Sets image opacity when blending with a background: value between `0.0` and `1.0`.

### `blend_mode`

The blend mode applied to the `color` or `gradient` background of the container. See [`ShaderMask.blend_mode`](shadermask#blend_mode) for more details. 

### `animate`

Enables container "implicit" animation that gradually changes its values over a period of time.

The value of `animate` property could be one of the following types:

* `bool` - `True` to enable container animation with `linear` curve with `1000` milliseconds duration.
* `int` - enable container animation with `linear` curve and specified number of milliseconds. 
* `animation.Animation(duration: int, curve: str)` - enable container animation with specified duration and transition curve.

For example:

<img src="/img/docs/controls/container/animate-container.gif" className="screenshot-20" />

```python
import flet
from flet import Container, ElevatedButton, Page, animation

def main(page: Page):

    c = Container(
        width=200,
        height=200,
        bgcolor="red",
        animate=animation.Animation(1000, "bounceOut"),
    )

    def animate_container(e):
        c.width = 100 if c.width == 200 else 200
        c.height = 100 if c.height == 200 else 200
        c.bgcolor = "blue" if c.bgcolor == "red" else "red"
        c.update()

    page.add(c, ElevatedButton("Animate container", on_click=animate_container))

flet.app(target=main)
```

### `ink`

`True` to produce ink ripples effect when user clicks the container. Default is `False`.

## Events

### `on_click`

Fires when a user clicks the container.

### `on_long_press`

Fires when the container is long-pressed.

### `on_hover`

Fires when a mouse pointer enters or exists the container area. `data` property of event object contains `true` (string) when cursor enters and `false` when it exits.

A simple example of a container changing its background color on mouse hover:

```python
import flet
from flet import Container, Page

def main(page: Page):
    def on_hover(e):
        e.control.bgcolor = "blue" if e.data == "true" else "red"
        e.control.update()

    page.add(
        Container(width=100, height=100, bgcolor="red", ink=False, on_hover=on_hover)
    )

flet.app(target=main)
```