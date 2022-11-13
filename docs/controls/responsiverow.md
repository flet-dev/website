---
title: ResponsiveRow
sidebar_label: ResponsiveRow
slug: responsiverow
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A control that displays its children bound to virtual columns.

A child can span a variable number of columns depending on current page size and configured "breakpoints".

Breakpoints:

* `xs` - 0
* `sm` - 576
* `md` - 768
* `lg` - 992
* `xl` - 1200
* `xxl` - 1400

## Examples

### ResponsiveRow

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Container, Page, ResponsiveRow, Text, TextField, colors

def main(page: Page):
    def page_resize(e):
        pw.value = f"{page.width} px"
        pw.update()

    page.on_resize = page_resize

    pw = Text(bottom=50, right=50, style="displaySmall")
    page.overlay.append(pw)
    page.add(
        ResponsiveRow(
            [
                Container(
                    Text("Column 1"),
                    padding=5,
                    bgcolor=colors.YELLOW,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
                Container(
                    Text("Column 2"),
                    padding=5,
                    bgcolor=colors.GREEN,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
                Container(
                    Text("Column 3"),
                    padding=5,
                    bgcolor=colors.BLUE,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
                Container(
                    Text("Column 4"),
                    padding=5,
                    bgcolor=colors.PINK_300,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
            ],
        ),
        ResponsiveRow(
            [
                TextField(label="TextField 1", col={"md": 4}),
                TextField(label="TextField 2", col={"md": 4}),
                TextField(label="TextField 3", col={"md": 4}),
            ],
            run_spacing={"xs": 10},
        ),
    )
    page_resize(None)


flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `controls`

A list of Controls to display inside the ResponsiveRow.

### `columns`

The numner of virtual columns to layout children. Default is 12.

### `alignment`

How the child Controls should be placed horizontally.

For example, `start`, the default, places the children on the left of a Row. Supported values: `start`, `end`, `center`, `spaceBetween`, `spaceAround`, `spaceEvenly`.

### `vertical_alignment`

How the child Controls should be placed vertically.

Default value is `start`. Supported values: `start`, `center`, `end`, `stretch`, `baseline`.

### `spacing`

Spacing between controls in a row. Default value is 10 virtual pixels. Spacing is applied only when `alignment` is set to `start`, `end` or `center`.

### `run_spacing`

Spacing between runs when row content is wrapped on multiple lines. Default value is 10.