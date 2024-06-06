---
title: Markdown
sidebar_label: Markdown
---

Control for rendering text in markdown format.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/markdown)

### Markdown with GitHubWeb extensions and clickable links

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

````python
import flet as ft

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
      body: ft.Markdown(data: markdownData),
    ),
  ));
}
```
"""

def main(page: ft.Page):
    page.scroll = "auto"
    page.add(
        ft.Markdown(
            md1,
            selectable=True,
            extension_set=ft.MarkdownExtensionSet.GITHUB_WEB,
            on_tap_link=lambda e: page.launch_url(e.data),
        )
    )

ft.app(target=main)
````

  </TabItem>
</Tabs>

<img src="/img/docs/controls/markdown/custom-markdown.gif" className="screenshot-40"/>

### Markdown with code syntax highlight

[Source code](https://github.com/flet-dev/examples/blob/main/python/controls/markdown/markdown-code-highlight.py)

<img src="/img/docs/controls/markdown/markdown-highlight.png" className="screenshot-60"/>

## Properties

### `auto_follow_links`

Automatically open URLs in the document. Default is `False`. If registered, `on_tap_link` event is fired after that.

### `auto_follow_links_target`

Where to open URL in the web mode

Value is of type [`UrlTarget`](/docs/reference/types/urltarget) and defaults to `UrlTarget.SELF`.

### `code_style`

Code block text style.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

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

### `extension_set`

The extensions to use when rendering the markdown content.

Value is of type [`MarkdownExtensionSet`](/docs/reference/types/markdownextensionset) and defaults
to `MarkdownExtensionSet.NONE`.

### `selectable`

Whether rendered text is selectable or not.

### `value`

Markdown content to render.

## Events

### `on_tap_link`

Fires when a link within Markdown document is clicked/tapped. `data` property of event contains URL.

The following example opens markdown URLs in a new window:

```python
import flet as ft

def main(page: ft.Page):
    def open_url(e):
        page.launch_url(e.data)

    page.add(
        ft.Markdown(
            "[inline-style](https://www.google.com)",
            extension_set="gitHubWeb",
            on_tap_link=open_url,
            expand=True,
        ),
    )

ft.app(target=main)
```