---
title: ListTile
sidebar_label: ListTile
slug: listtile
---

A single fixed-height row that typically contains some text as well as a leading or trailing icon.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

<img src="/img/docs/controls/listtile/listtile.png" width="50%"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import (
    Card,
    Column,
    Container,
    Icon,
    Image,
    ListTile,
    PopupMenuButton,
    PopupMenuItem,
    Text,
    icons,
    padding,
)

def main(page):
    page.title = "ListTile Examples"
    page.add(
        Card(
            content=Container(
                width=500,
                content=Column(
                    [
                        ListTile(
                            title=Text("One-line list tile"),
                        ),
                        ListTile(title=Text("One-line dense list tile"), dense=True),
                        ListTile(
                            leading=Icon(icons.SETTINGS),
                            title=Text("One-line selected list tile"),
                            selected=True,
                        ),
                        ListTile(
                            leading=Image(src="/icons/icon-192.png", fit="contain"),
                            title=Text("One-line with leading control"),
                        ),
                        ListTile(
                            title=Text("One-line with trailing control"),
                            trailing=PopupMenuButton(
                                icon=icons.MORE_VERT,
                                items=[
                                    PopupMenuItem(text="Item 1"),
                                    PopupMenuItem(text="Item 2"),
                                ],
                            ),
                        ),
                        ListTile(
                            leading=Icon(icons.ALBUM),
                            title=Text("One-line with leading and trailing controls"),
                            trailing=PopupMenuButton(
                                icon=icons.MORE_VERT,
                                items=[
                                    PopupMenuItem(text="Item 1"),
                                    PopupMenuItem(text="Item 2"),
                                ],
                            ),
                        ),
                        ListTile(
                            leading=Icon(icons.SNOOZE),
                            title=Text("Two-line with leading and trailing controls"),
                            subtitle=Text("Here is a second title."),
                            trailing=PopupMenuButton(
                                icon=icons.MORE_VERT,
                                items=[
                                    PopupMenuItem(text="Item 1"),
                                    PopupMenuItem(text="Item 2"),
                                ],
                            ),
                        ),
                    ],
                    spacing=0,
                ),
                padding=padding.symmetric(vertical=10),
            )
        )
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `content_padding`

The tile's internal padding. Insets a ListTile's contents: its `leading`, `title`, `subtitle`, and `trailing` controls.

If not set, `padding.symmetric(horizontal=16)` is used.

See [`Container.padding`](container#padding) property for more information and possible values.

### `leading`

A `Control` to display before the title.

### `title`

A `Control` to display as primary content of the list tile. Typically a [Text](text) control. This should not wrap. To enforce the single line limit, use [Text.max_lines](text#max_lines).

### `subtitle`

Additional content displayed below the title. Typically a [Text](text) widget.

If `is_three_line` is `False`, this should not wrap. If `is_three_line` is `True`, this should be configured to take a maximum of two lines. For example, you can use [Text.max_lines](text#max_lines) to enforce the number of lines.

### `trailing`

A `Control` to display after the title. Typically an [Icon](icon) control.

### `is_three_line`

Whether this list tile is intended to display three lines of text.

If `True`, then subtitle must be non-null (since it is expected to give the second and third lines of text).

If `False`, the list tile is treated as having one line if the subtitle is null and treated as having two lines if the subtitle is non-null.

When using a Text control for title and subtitle, you can enforce line limits using [Text.max_lines](text#max_lines).

### `selected`

If this tile is also enabled then icons and text are rendered with the same color. By default the selected color is the theme's primary color.

### `dense`

Whether this list tile is part of a vertically dense list. Dense list tiles default to a smaller height.

### `autofocus`

`True` if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

## Events

### `on_click`

Fires when a user clicks or taps the list tile.