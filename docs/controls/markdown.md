---
title: Markdown
sidebar_label: Markdown
slug: markdown
---

Control for rendering text in markdown format.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Markdown with GitHubWeb extensions and clickable links

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

````python
import flet
from flet import Markdown, Page

md1 = """
# Markdown Example
Markdown allows you to easily include formatted text, images, and even formatted Dart code in your app.

## Titles

Setext-style

This is an H1
=============

This is an H2
-------------

Atx-style

# This is an H1

## This is an H2

###### This is an H6

Select the valid headers:

- [x] `# hello`
- [ ] `#hello`

## Links

[inline-style](https://www.google.com)

## Images

![Image from Flet assets](/icons/icon-192.png)

![Test image](https://picsum.photos/200/300)

## Tables

|Syntax                                 |Result                               |
|---------------------------------------|-------------------------------------|
|`*italic 1*`                           |*italic 1*                           |
|`_italic 2_`                           | _italic 2_                          |
|`**bold 1**`                           |**bold 1**                           |
|`__bold 2__`                           |__bold 2__                           |
|`This is a ~~strikethrough~~`          |This is a ~~strikethrough~~          |
|`***italic bold 1***`                  |***italic bold 1***                  |
|`___italic bold 2___`                  |___italic bold 2___                  |
|`***~~italic bold strikethrough 1~~***`|***~~italic bold strikethrough 1~~***|
|`~~***italic bold strikethrough 2***~~`|~~***italic bold strikethrough 2***~~|

## Styling

Style text as _italic_, __bold__, ~~strikethrough~~, or `inline code`.

- Use bulleted lists
- To better clarify
- Your points

## Code blocks

Formatted Dart code looks really pretty too:

```
void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: Markdown(data: markdownData),
    ),
  ));
}
```
"""

def main(page: Page):
    page.add(
        Markdown(
            md1,
            selectable=True,
            extension_set="gitHubWeb",
            on_tap_link=lambda e: page.launch_url(e.data),
            expand=True,
        ),
    )

flet.app(target=main)
````

  </TabItem>
</Tabs>

:::info
As Markdown control is a scrollable control (with "infinite" height) it must have `expand` property set or be put inside a container with a fixed height.
:::

## Properties

### `value`

Markdown content to render.

### `extension_set`

Markdown extension set: `none` (default), `commonMark`, `gitHubWeb`, `gitHubFlavored`.

### `selectable`

Whether rendered text is selectable or not.

## Events

### `on_tap_link`

Fires when a link within Markdown document is clicked/tapped. `data` property of event contains URL.

The following example opens markdown URLs in a new window:

```python
import flet
from flet import Markdown, Page

def main(page: Page):
    def open_url(e):
        page.launch_url(e.data)

    page.add(
        Markdown(
            "[inline-style](https://www.google.com)",
            extension_set="gitHubWeb",
            on_tap_link=open_url,
            expand=True,
        ),
    )

flet.app(target=main)
```