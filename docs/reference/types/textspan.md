---
title: TextSpan
sidebar_label: TextSpan
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## `TextSpan` properties

A span of [Text](/docs/controls/text).

### `semantics_label`

An alternative semantics label for this text.

If present, the semantics of this control will contain this value instead of the actual text.

This is useful for replacing abbreviations or shorthands with the full text value:

```python
ft.Text("$$", semantics_label="Double dollars")
```

### `spans`

Additional spans to include as children.

If both `text` and `spans` are defined, the `text` will precede the `spans`.

### `style`

The [`TextStyle`](/docs/reference/types/textstyle) to apply to this span.

### `text`

The text contained in this span.

If both `text` and `spans` are defined, the `text` will precede the `spans`.

### `url`

The URL to open when the span is clicked. If registered, `on_click` event is fired after that.

### `url_target`

Where to open URL in the web mode. Value is of [`UrlTarget`](/docs/reference/types/urltarget) enum. Defaults to `UrlTarget.BLANK`.

## `TextSpan` events

### `on_click`

Fires when the span is clicked.

### `on_enter`

Triggered when a mouse pointer has entered the span.

### `on_exit`

Triggered when a mouse pointer has exited the span.
