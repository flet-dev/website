---
title: BottomSheet
sidebar_label: BottomSheet
slug: bottomsheet
---

Shows a modal Material Design bottom sheet.

A modal bottom sheet is an alternative to a menu or a dialog and prevents the user from interacting with the rest of the app.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Simple BottomSheet

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import BottomSheet, Column, Container, ElevatedButton, Page, Text

def main(page: Page):
    def bs_dismissed(e):
        print("Dismissed!")

    def show_bs(e):
        bs.open = True
        bs.update()

    def close_bs(e):
        bs.open = False
        bs.update()

    bs = BottomSheet(
        Container(
            Column(
                [
                    Text("This is content!"),
                    ElevatedButton("Close bottom sheet", on_click=close_bs),
                ],
                tight=True,
            ),
            padding=10,
        ),
        open=True,
        on_dismiss=bs_dismissed,
    )
    page.overlay.append(bs)
    page.add(ElevatedButton("Display bottom sheet", on_click=show_bs))

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `open`

Set to `True` to display a bottom sheet.

### `content`

The content of the bottom sheet.

## Events

### `on_dismiss`

Fires when bottom sheet is dimissed.