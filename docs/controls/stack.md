---
title: Stack
sidebar_label: Stack
slug: stack
---

A control that positions its children on top of each other.

This control is useful if you want to overlap several children in a simple way, for example having some text and an image, overlaid with a gradient and a button attached to the bottom.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Transparent title over an image

<img src="/img/docs/controls/stack/image-title.png" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Image, Page, Row, Stack, Text

def main(page: Page):
    st = Stack(
        [
            Image(
                src=f"https://picsum.photos/300/300",
                width=300,
                height=300,
                fit="contain",
            ),
            Row(
                [
                    Text(
                        "Image title",
                        color="white",
                        size=40,
                        weight="bold",
                        opacity=0.5,
                    )
                ],
                alignment="center",
            ),
        ],
        width=300,
        height=300,
    )

    page.add(st)

flet.app(target=main, view=flet.WEB_BROWSER)
```

  </TabItem>
</Tabs>

### Avatar with online status

<img src="/img/docs/controls/stack/avatar-with-status.png" className="screenshot-10"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import CircleAvatar, Container, Stack, alignment, colors

def main(page):
    page.add(
        Stack(
            [
                CircleAvatar(
                    foreground_image_url="https://avatars.githubusercontent.com/u/5041459?s=88&v=4"
                ),
                Container(
                    content=CircleAvatar(bgcolor=colors.GREEN, radius=5),
                    alignment=alignment.bottom_left,
                ),
            ],
            width=40,
            height=40,
        )
    )

flet.app(target=main, view=flet.WEB_BROWSER)
```

  </TabItem>
</Tabs>

### Absolute positioning inside Stack

<img src="/img/docs/controls/stack/absolute-positioned.png" className="screenshot-50"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Container, Page, Stack, colors, Column

def main(page: Page):

    page.horizontal_alignment = "center"
    page.vertical_alignment = "center"

    page.add(
        Container(
            Stack(
                [
                    Container(width=20, height=20, bgcolor=colors.RED, border_radius=5),
                    Container(
                        width=20,
                        height=20,
                        bgcolor=colors.YELLOW,
                        border_radius=5,
                        right=0,
                    ),
                    Container(
                        width=20,
                        height=20,
                        bgcolor=colors.BLUE,
                        border_radius=5,
                        right=0,
                        bottom=0,
                    ),
                    Container(
                        width=20,
                        height=20,
                        bgcolor=colors.GREEN,
                        border_radius=5,
                        left=0,
                        bottom=0,
                    ),
                    Column(
                        [
                            Container(
                                width=20,
                                height=20,
                                bgcolor=colors.PURPLE,
                                border_radius=5,
                            )
                        ],
                        left=35,
                        top=35,
                    ),
                ]
            ),
            border_radius=8,
            padding=5,
            width=100,
            height=100,
            bgcolor=colors.BLACK,
        )
    )

flet.app(target=main)
```

  </TabItem>
</Tabs>

## Properties

### `controls`

A list of Controls to display inside the Stack. The last control in the list is displayed on top.