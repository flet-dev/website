---
title: Tabs
sidebar_label: Tabs
slug: tabs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Control description goes here.

## Examples

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Container, Icon, Page, Tab, Tabs, Text, alignment, icons

def main(page: Page):

    t = Tabs(
        selected_index=1,
        animation_duration=300,
        tabs=[
            Tab(
                text="Tab 1",
                content=Container(
                    content=Text("This is Tab 1"), alignment=alignment.center
                ),
            ),
            Tab(
                tab_content=Icon(icons.SEARCH),
                content=Text("This is Tab 2"),
            ),
            Tab(
                text="Tab 3",
                icon=icons.SETTINGS,
                content=Text("This is Tab 3"),
            ),
        ],
        expand=1,
    )

    page.add(t)

flet.app(target=main)
```
  </TabItem>
</Tabs>

## `Tabs` properties

### `tabs`

A list of `Tab` controls.

### `selected_index`

The index of currently selected tab.

### `animation_duration`

Duration of animation in milliseconds of swtiching between tabs. Default is `50`.

## `Tabs` events

### `on_change`

Fires when `selected_index` changes.

## `Tab` properties

### `text`

Tab's display name.

### `icon`

An icon to display on the left of Tab text.

### `content`

A `Control` to display below the Tab when it is selected.

### `tab_content`

A `Control` representing custom tab content replacing `text` and `icon`.