---
title: AppBar
sidebar_label: AppBar
slug: appbar
---

แถบดีไซน์ Material

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## ตัวอย่าง

### AppBar (แถบแอป)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import (
    AppBar,
    Icon,
    IconButton,
    Page,
    PopupMenuButton,
    PopupMenuItem,
    Text,
    colors,
    icons,
)

def main(page: Page):
    def check_item_clicked(e):
        e.control.checked = not e.control.checked
        page.update()

    page.appbar = AppBar(
        leading=Icon(icons.PALETTE),
        leading_width=40,
        title=Text("AppBar Example"),
        center_title=False,
        bgcolor=colors.SURFACE_VARIANT,
        actions=[
            IconButton(icons.WB_SUNNY_OUTLINED),
            IconButton(icons.FILTER_3),
            PopupMenuButton(
                items=[
                    PopupMenuItem(text="Item 1"),
                    PopupMenuItem(),  # divider
                    PopupMenuItem(
                        text="Checked item", checked=False, on_click=check_item_clicked
                    ),
                ]
            ),
        ],
    )
    page.add(Text("Body!"))

flet.app(target=main)
```
  </TabItem>
</Tabs>

## คุณสมบัติ

### `leading`

A `Control` to display before the toolbar's title.

Typically the leading control is an [`Icon`](icon) หรือ [`IconButton`](iconbutton).

### `leading_width`

กำหนดความกว้างของการควบคุมคุณสมบัติโดยค่าเริ่มต้นของ "leading_width" คือ "56.0"

### `title`

The primary `Control` displayed in the app bar. Typically a [`Text`](text) control that contains a description of the current contents of the app.

### `center_title`

Whether the title should be centered. Default is `False`.

### `actions`

A list of `Control`s to display in a row after the title control.

Typically these controls are [`IconButtons`](iconbutton) representing common operations. For less common operations, consider using a [`PopupMenuButton`](popupmenubutton) as the last action.

### `toolbar_height`

กำหนดความสูงของส่วนประกอบแถบเครื่องมือของ AppBar โดยค่าเริ่มต้น ของความสูงของแถบเครื่องมือคือ "56.0"

### `color`

สีเริ่มต้นสำหรับข้อความและไอคอนภายในแถบแอปโดยที่สีเริ่มต้นจะถูกกำหนดโดยธีมปัจจุบัน

### `bgcolor`

สีที่จะใช้สำหรับ AppBar โดยที่สีเริ่มต้นจะถูกกำหนดโดยธีมปัจจุบัน