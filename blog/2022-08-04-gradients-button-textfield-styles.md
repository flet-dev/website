---
slug: gradients-button-textfield-styles
title: Beautiful gradients, button styles and TextField rounded corners in a new Flet release
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

We've just released [Flet 0.1.44](https://pypi.org/project/flet/0.1.44/) adding new exciting features:

* Gradient backgrounds in Container
* Extensive styling for buttons, TextField and Dropdown controls

## Gradient backgrounds

### Linear gradient

<img src="/img/blog/gradients/linear-gradient.png" className="screenshot-30" />

```python
import math
import flet
from flet import Alignment, Container, LinearGradient, Page, alignment

def main(page: Page):

    page.add(
        Container(
            alignment=alignment.center,
            gradient=LinearGradient(
                begin=alignment.top_left,
                end=Alignment(0.8, 1),
                colors=[
                    "0xff1f005c",
                    "0xff5b0060",
                    "0xff870160",
                    "0xffac255e",
                    "0xffca485c",
                    "0xffe16b5c",
                    "0xfff39060",
                    "0xffffb56b",
                ],
                tile_mode="mirror",
                rotation=math.pi / 3,
            ),
            width=150,
            height=150,
            border_radius=5,
        )
    )

flet.app(target=main)
```

Check [`Container.gradient`](/docs/controls/container#lineargradient) docs for more information about `LinearGradient` properties.

### Radial gradient

<img src="/img/blog/gradients/radial-gradient.png" className="screenshot-30" />

```python
import flet
from flet import Alignment, Container, Page, RadialGradient, alignment

def main(page: Page):

    page.add(
        Container(
            alignment=alignment.center,
            gradient=RadialGradient(
                center=Alignment(0.7, -0.6),
                radius=0.2,
                colors=[
                    "0xFFFFFF00",  # yellow sun
                    "0xFF0099FF",  # blue sky
                ],
                stops=[0.4, 1.0],
            ),
            width=150,
            height=150,
            border_radius=5,
        )
    )

flet.app(target=main)
```

Check [`Container.gradient`](/docs/controls/container#radialgradient) docs for more information about `RadialGradient` properties.

### Sweep gradient

<img src="/img/blog/gradients/sweep-gradient.png" className="screenshot-30" />

```python
import math
import flet
from flet import Container, Page, SweepGradient, alignment

def main(page: Page):

    page.add(
        Container(
            alignment=alignment.center,
            gradient=SweepGradient(
                center=alignment.center,
                start_angle=0.0,
                end_angle=math.pi * 2,
                colors=[
                    "0xFF4285F4",
                    "0xFF34A853",
                    "0xFFFBBC05",
                    "0xFFEA4335",
                    "0xFF4285F4",
                ],
                stops=[0.0, 0.25, 0.5, 0.75, 1.0],
            ),
            width=150,
            height=150,
            border_radius=5,
        )
    )

flet.app(target=main)
```

Check [`Container.gradient`](/docs/controls/container#sweepgradient) docs for more information about `SweepGradient` properties.

## Buttons styling

This Flet release introduces `style` property to all button controls which is an instance of `ButtonStyle` class.
`ButtonStyle` allows controling all visual aspects of a button, such as shape, foreground, background and shadow colors, content padding, border width and radius!

Moreover, each individual style attribute could be configured for a different "Material states" of a button, such as "hovered", "focused", "disabled" and others. For example, you can configure a different shape, background color for a hovered state and configure fallback values for all other states.

Check this "extreme" styling example:

<img src="/img/blog/gradients/styled-button.gif" className="screenshot-30" />

```python
import flet
from flet import ButtonStyle, ElevatedButton, Page, colors
from flet.border import BorderSide
from flet.buttons import RoundedRectangleBorder

def main(page: Page):

    page.add(
        ElevatedButton(
            "Styled button 1",
            style=ButtonStyle(
                color={
                    "hovered": colors.WHITE,
                    "focused": colors.BLUE,
                    "": colors.BLACK,
                },
                bgcolor={"focused": colors.PINK_200, "": colors.YELLOW},
                padding={"hovered": 20},
                overlay_color=colors.TRANSPARENT,
                elevation={"pressed": 0, "": 1},
                animation_duration=500,
                side={
                    "": BorderSide(1, colors.BLUE),
                    "hovered": BorderSide(2, colors.BLUE),
                },
                shape={
                    "hovered": RoundedRectangleBorder(radius=20),
                    "": RoundedRectangleBorder(radius=2),
                },
            ),
        )
    )

flet.app(target=main)
```

Empty string (`""`) state is a fallback style.

For a complete description of `ButtonStyle` class and its properties check [`ElevatedButton.style`](/docs/controls/elevatedbutton#style) property docs.

You can change the shape of a button with `shape` property:

```python
# button styles
```

[screenshot]

## TextField and Dropdown styling

It is now possible to configure text size, border style and corners radius for normal and focused states of `TextField` and `Dropdown`.

```python
# TextField example
```

[screenshot]

```python
# Dropdown example
```

[screenshot]

## TextField improvements

`TextField` allows configuring colors for a cursor and selection:

```python
# TextField example
```

[screenshot]

Additionally, the maximum length of entered into `TextField` can now be limited with `max_length` property.

We also introduced `capitalization` property for automatic capitalization of characters as you type them into `TextField`. You can choose from 4 capitalization strategies: `none` (default), `characters`, `words` and `sentences`:

```python
code
```

[screenshot]

## Other changes

`IconButton` got `selected` state with distinctive style that can be toggled in your logic:

```python
code
```

[screenshot]

[Give Flet a try](/docs/guides/python/getting-started) and [let us know](https://discord.gg/dzWXP8SHG8) what you think!