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


````python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/markdown/markdown-basic.py
````



<img src="/img/docs/controls/markdown/custom-markdown.gif" className="screenshot-40"/>

### Markdown with code syntax highlight

````python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/markdown/markdown-code-highligh.py
````

<img src="/img/docs/controls/markdown/markdown-highlight.png" className="screenshot-60"/>

## Properties

### `auto_follow_links`

Automatically open URLs in the document. Default is `False`. If registered, `on_tap_link` event is fired after that.

### `auto_follow_links_target`

Where to open URL in the web mode

Value is of type [`UrlTarget`](/docs/reference/types/urltarget) and defaults to `UrlTarget.SELF`.

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

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/markdown/markdown-event-example.py
```

### `on_selection_change`

Fires when the text selection changes.

Event handler argument is of type [`MarkdownSelectionChangeEvent`](/docs/reference/types/markdownselectionchangeevent).

### `on_tap_text`

Fires when some text is clicked/tapped.
