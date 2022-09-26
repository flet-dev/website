---
title: VerticalDivider
sidebar_label: VerticalDivider
slug: verticaldivider
---

A thin vertical line, with padding on either side.

In the material design language, this represents a divider.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Container, Page, Row, VerticalDivider, alignment, colors

def main(page: Page):

    page.add(
        Row(
            [
                Container(
                    bgcolor=colors.ORANGE_300,
                    alignment=alignment.center,
                    expand=True,
                ),
                VerticalDivider(),
                Container(
                    bgcolor=colors.BROWN_400,
                    alignment=alignment.center,
                    expand=True,
                ),
                VerticalDivider(width=1, color="white"),
                Container(
                    bgcolor=colors.BLUE_300,
                    alignment=alignment.center,
                    expand=True,
                ),
                VerticalDivider(width=9, thickness=3),
                Container(
                    bgcolor=colors.GREEN_300,
                    alignment=alignment.center,
                    expand=True,
                ),
            ],
            spacing=0,
            expand=True,
        )
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/vertical-divider/vertical-divider.png" width="40%" />

## Properties

### `width`

The divider's width. The divider itself is always drawn as a vertical line that is centered within the width specified by this value. If this is null, then this defaults to `16.0`.

### `thickness`

The thickness of the line drawn within the divider. A divider with a thickness of `0.0` is always drawn as a line with a width of exactly one device pixel. If this is null, then this defaults to `0.0`.

### `color`

The color to use when painting the line.