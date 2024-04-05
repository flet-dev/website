---
title: SelectionArea
sidebar_label: SelectionArea
slug: selectionarea
---

Flet controls are not selectable by default. `SelectionArea` is used to enable selection for its `content`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Selectable Text controls

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.SelectionArea(
            content=ft.Column([ft.Text("Selectable text"), ft.Text("Also selectable")])
        )
    )
    page.add(ft.Text("Not selectable"))

ft.app(main)
```
  </TabItem>
</Tabs>

## Properties

### `content`

A child Control contained by the SelectionArea. If you need to have multiple selectable controls, use `Row`, `Column`, or `Stack`, which have a `controls` property, and then provide multiple controls to that control.

## Events

### `on_change`

Fires when the selected content changes.

