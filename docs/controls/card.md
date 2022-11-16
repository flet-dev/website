---
title: Card
sidebar_label: Card
slug: card
---

A material design card: a panel with slightly rounded corners and an elevation shadow.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

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
                            alignment="end",
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

### `content`

The `Control` that should be displayed inside the card.

This control can only have one child. To lay out multiple children, let this control's child be a control such as [`Row`](row), [`Column`](column), or [`Stack`](stack), which have a children property, and then provide the children to that control.

### `margin`

The empty space that surrounds the card.

See [`Container.margin`](container#margin) property for more information and possible values.

### `elevation`

Controls the size of the shadow below the card. Default value is `1.0`.