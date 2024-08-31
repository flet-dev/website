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

ft.app(main)
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

### ~~`code_style`~~

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

**Deprecated in v0.24.0 and will be removed in v0.27.0. Use [`code_style_sheet.code_text_style`](#code_style_sheet) instead.**

### `code_style_sheet`

The styles to use when displaying the code blocks.

Value is of type [`MarkdownStyleSheet`](/docs/reference/types/markdownstylesheet).

### `code_theme`

A syntax highlighting theme for code blocks.

Value is of type [`MarkdownCodeTheme`](/docs/reference/types/markdowncodetheme) and defaults to `MarkdownCodeTheme.GITHUB`.

### `extension_set`

The extensions to use when rendering the markdown content.

Value is of type [`MarkdownExtensionSet`](/docs/reference/types/markdownextensionset) and defaults
to `MarkdownExtensionSet.NONE`.

### `fit_content`

Whether to allow the widget to fit the child content.

Value is of type `bool` and defaults to `True`.

### `img_error_content`

The `Control` to display when an image fails to load.

### `md_style_sheet`

The styles to use when displaying the markdown.

Value is of type [`MarkdownStyleSheet`](/docs/reference/types/markdownstylesheet).

### `selectable`

Whether rendered text is selectable or not.

### `shrink_wrap`

Whether the extent of the scroll view in the scroll direction should be determined by the contents being viewed.

Value is of type `bool` and defaults to `True`.

### `soft_line_break`

The soft line break is used to identify the spaces at the end of aline of text and the leading spaces in the immediately following the line of text.

Value is of type `bool` and defaults to `False`.

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

ft.app(main)
```

### `on_selection_change`

Fires when the text selection changes.

Event handler argument is of type [`MarkdownSelectionChangeEvent`](/docs/reference/types/markdownselectionchangeevent).

### `on_tap_text`

Fires when some text is clicked/tapped.
