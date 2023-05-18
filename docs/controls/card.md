---
title: Card
sidebar_label: Card
slug: card
---

A material design card: a panel with slightly rounded corners and an elevation shadow.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/card)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.title = "Card Example"
    page.add(
        ft.Card(
            content=ft.Container(
                content=ft.Column(
                    [
                        ft.ListTile(
                            leading=ft.Icon(ft.icons.ALBUM),
                            title=ft.Text("The Enchanted Nightingale"),
                            subtitle=ft.Text(
                                "Music by Julie Gable. Lyrics by Sidney Stein."
                            ),
                        ),
                        ft.Row(
                            [ft.TextButton("Buy tickets"), ft.TextButton("Listen")],
                            alignment=ft.MainAxisAlignment.END,
                        ),
                    ]
                ),
                width=400,
                padding=10,
            )
        )
    )

ft.app(target=main)

```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/card/card.gif" className="screenshot-40" />

## Properties

### `color`

The card's background [color](/docs/guides/python/colors).

### `content`

The `Control` that should be displayed inside the card.

This control can only have one child. To lay out multiple children, let this control's child be a control such as [`Row`](row), [`Column`](column), or [`Stack`](stack), which have a children property, and then provide the children to that control.

### `elevation`

Controls the size of the shadow below the card. Default value is `1.0`.

### `margin`

The empty space that surrounds the card.

See [`Container.margin`](container#margin) property for more information and possible values.

### `shadow_color`

The [color](/docs/guides/python/colors) to paint the shadow below the card.

### `surface_tint_color`

The [color](/docs/guides/python/colors) used as an overlay on `color` to indicate elevation.

If this is `None`, no overlay will be applied. Otherwise this color will be composited on top of `color` with an opacity related to `elevation` and used to paint the background of the card.

The default is `None`.