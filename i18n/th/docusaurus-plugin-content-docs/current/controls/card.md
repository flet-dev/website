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
import flet
from flet import Card, Column, Container, Icon, ListTile, Row, Text, TextButton, icons

def main(page):
    page.title = "Card Example"
    page.add(
        Card(
            content=Container(
                content=Column(
                    [
                        ListTile(
                            leading=Icon(icons.ALBUM),
                            title=Text("The Enchanted Nightingale"),
                            subtitle=Text(
                                "Music by Julie Gable. Lyrics by Sidney Stein."
                            ),
                        ),
                        Row(
                            [TextButton("Buy tickets"), TextButton("Listen")],
                            alignment="end",
                        ),
                    ]
                ),
                width=400,
                padding=10,
            )
        )
    )

flet.app(target=main, view=flet.WEB_BROWSER)

```
  </TabItem>
</Tabs>

## Properties

### `content`

The `Control` that should be displayed inside the card.

This control can only have one child. To lay out multiple children, let this control's child be a control such as [`Row`](row), [`Column`](column), or [`Stack`](stack), which have a children property, and then provide the children to that control.

### `margin`

The empty space that surrounds the card.

See [`Container.margin`](container#margin) property for more information and possible values.

### `elevation`

Controls the size of the shadow below the card. Default value is `1.0`.