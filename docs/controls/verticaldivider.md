---
title: VerticalDivider
sidebar_label: VerticalDivider
---

A thin vertical line, with padding on either side.

In the material design language, this represents a divider.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/verticaldivider)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.Row(
            [
                ft.Container(
                    bgcolor=ft.colors.ORANGE_300,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
                 ft.VerticalDivider(),
                ft.Container(
                    bgcolor=ft.colors.BROWN_400,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
                 ft.VerticalDivider(width=1, color="white"),
                ft.Container(
                    bgcolor=ft.colors.BLUE_300,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
                 ft.VerticalDivider(width=9, thickness=3),
                ft.Container(
                    bgcolor=ft.colors.GREEN_300,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
            ],
            spacing=0,
            expand=True,
        )
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/vertical-divider/vertical-divider.png" className="screenshot-40" />

## Properties

### `color`

The [color](/docs/reference/colors) to use when painting the line.

### `leading_indent`

The amount of empty space to the leading edge of the divider.

Defaults to `0.0`.

### `thickness`

The thickness of the line drawn within the divider. A divider with a thickness of `0.0` is always drawn as a line with a
width of exactly one device pixel.

Defaults to `0.0`.

### `trailing_indent`

The amount of empty space to the trailing edge of the divider.

Defaults to `0.0`.

### `width`

The divider's width. The divider itself is always drawn as a vertical line that is centered within the width specified
by this value. I

Defaults to `16.0`.