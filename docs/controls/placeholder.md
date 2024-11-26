---
title: Placeholder
sidebar_label: Placeholder
---

A control that draws a box that represents where other widgets will one day be added.

Useful during development to indicate that the interface is not yet complete.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/placeholder)

### Basic example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.add(
        ft.Placeholder(
            expand=True,
            color=ft.Colors.random_color()  # random material color
        )
    )


ft.app(main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/placeholder/basic-example.png" className="screenshot-100"/>

## Properties

### `content`

An optional `Control` to display inside the placeholder.

### `color`

The [color](/docs/reference/colors) of the placeholder box.

### `fallback_height`

The height to use when the placeholder is in a situation with an unbounded height.

Value is of `float` and defaults to `400.0`.

### `fallback_width`

The width to use when the placeholder is in a situation with an unbounded width.

Value is of `float` and defaults to `400.0`.

### `stroke_width`

The width of the lines in the placeholder box.

Value is of `float` and defaults to `2.0`.