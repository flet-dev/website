---
title: Icon
sidebar_label: Icon
---

Displays a Material icon.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Icons browser](https://gallery.flet.dev/icons-browser/)

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/icon)

### Icons of different colors and sizes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Row(
            [
                ft.Icon(name=ft.icons.FAVORITE, color=ft.colors.PINK),
                ft.Icon(name=ft.icons.AUDIOTRACK, color=ft.colors.GREEN_400, size=30),
                ft.Icon(name=ft.icons.BEACH_ACCESS, color=ft.colors.BLUE, size=50),
                ft.Icon(name="settings", color="#c1c1c1"),
            ]
        )
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/icon/custom-icons.png" className="screenshot-20" />

## Properties

### `color`

Icon [color](/docs/reference/colors).

### `name`

The name of the icon. You can search through the list of all available icons using open-source [Icons browser](https://gallery.flet.dev/icons-browser/) app [written in Flet](https://github.com/flet-dev/examples/blob/main/python/apps/icons-browser/main.py).

### `semantics_label`

The semantics label for this icon. It is not shown to the in the UI, but is announced in accessibility modes (e.g TalkBack/VoiceOver).

### `size`

The icon's size.

Defaults to `24`.

### `tooltip`

The text displayed when hovering a mouse over the Icon.