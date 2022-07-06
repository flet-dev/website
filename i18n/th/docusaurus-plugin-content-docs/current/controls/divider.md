---
title: Divider
sidebar_label: Divider
slug: divider
---

A thin horizontal line, with padding on either side.

In the material design language, this represents a divider.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Column, Container, Divider, Page, alignment, colors

def main(page: Page):

    page.add(
        Column(
            [
                Container(
                    bgcolor=colors.AMBER,
                    alignment=alignment.center,
                    expand=True,
                ),
                Divider(),
                Container(bgcolor=colors.PINK, alignment=alignment.center, expand=True),
                Divider(height=1, color="white"),
                Container(
                    bgcolor=colors.BLUE_300,
                    alignment=alignment.center,
                    expand=True,
                ),
                Divider(height=9, thickness=3),
                Container(
                    bgcolor=colors.DEEP_PURPLE_200,
                    alignment=alignment.center,
                    expand=True,
                ),
            ],
            spacing=0,
            expand=True,
        ),
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `height`

The divider's height extent. The divider itself is always drawn as a horizontal line that is centered within the height specified by this value. If this is null, then this defaults to `16.0`.

### `thickness`

The thickness of the line drawn within the divider. A divider with a thickness of `0.0` is always drawn as a line with a height of exactly one device pixel. If this is null, then this defaults to `0.0`.

### `color`

The color to use when painting the line.