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
    page.scroll = "auto"
    page.add(
        Markdown(
            md1,
            selectable=True,
            extension_set="gitHubWeb",
            on_tap_link=lambda e: page.launch_url(e.data),
        )
    )

flet.app(target=main)
````

  </TabItem>
</Tabs>

<img src="/img/docs/controls/markdown/custom-markdown.gif" className="screenshot-40"/>

:::info
As Markdown control is a scrollable control (with "infinite" height) it must have `expand` property set or be put inside a container with a fixed height.
:::

## Properties

### `value`

Markdown content to render.

### `extension_set`

Markdown extension set: `none` (default), `commonMark`, `gitHubWeb`, `gitHubFlavored`.

### `code_theme`

A syntax highlighting theme for code blocks.

Supported themes:

* `a11y-dark`
* `a11y-light`
* `agate`
* `an-old-hope`
* `androidstudio`
* `arduino-light`
* `arta`
* `ascetic`
* `atelier-cave-dark`
* `atelier-cave-light`
* `atelier-dune-dark`
* `atelier-dune-light`
* `atelier-estuary-dark`
* `atelier-estuary-light`
* `atelier-forest-dark`
* `atelier-forest-light`
* `atelier-heath-dark`
* `atelier-heath-light`
* `atelier-lakeside-dark`
* `atelier-lakeside-light`
* `atelier-plateau-dark`
* `atelier-plateau-light`
* `atelier-savanna-dark`
* `atelier-savanna-light`
* `atelier-seaside-dark`
* `atelier-seaside-light`
* `atelier-sulphurpool-dark`
* `atelier-sulphurpool-light`
* `atom-one-dark-reasonable`
* `atom-one-dark`
* `atom-one-light`
* `brown-paper`
* `codepen-embed`
* `color-brewer`
* `darcula`
* `dark`
* `default`
* `docco`
* `dracula`
* `far`
* `foundation`
* `github-gist`
* `github` (default)
* `gml`
* `googlecode`
* `gradient-dark`
* `grayscale`
* `gruvbox-dark`
* `gruvbox-light`
* `hopscotch`
* `hybrid`
* `idea`
* `ir-black`
* `isbl-editor-dark`
* `isbl-editor-light`
* `kimbie.dark`
* `kimbie.light`
* `lightfair`
* `magula`
* `mono-blue`
* `monokai-sublime`
* `monokai`
* `night-owl`
* `nord`
* `obsidian`
* `ocean`
* `paraiso-dark`
* `paraiso-light`
* `pojoaque`
* `purebasic`
* `qtcreator_dark`
* `qtcreator_light`
* `railscasts`
* `rainbow`
* `routeros`
* `school-book`
* `shades-of-purple`
* `solarized-dark`
* `solarized-light`
* `sunburst`
* `tomorrow-night-blue`
* `tomorrow-night-bright`
* `tomorrow-night-eighties`
* `tomorrow-night`
* `tomorrow`
* `vs`
* `vs2015`
* `xcode`
* `xt256`
* `zenburn`

### `code_style`

Code block text style. An instance of `TextStyle` class.

An example of configuring monospace font for Markdown code blocks:

```python
    page.fonts = {
        "Roboto Mono": "RobotoMono-VariableFont_wght.ttf",
    }

    page.add(
        Markdown(
            table,
            selectable=True,
            extension_set="gitHubWeb",
            code_theme="atom-one-dark",
            code_style=TextStyle(font_family="Roboto Mono"),
            on_tap_link=lambda e: page.launch_url(e.data),
        )
    )
```

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