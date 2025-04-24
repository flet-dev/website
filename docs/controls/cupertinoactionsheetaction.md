---
title: CupertinoActionSheetAction
sidebar_label: CupertinoActionSheetAction
---

An action button typically used in [`CupertinoActionSheet`](/docs/controls/cupertinoactionsheet).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/cupertinoactionsheetaction)

### Basic Example


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-dialogs-alerts-panels/cupertino-action-sheet-example.py
```

 

<img src="/img/docs/controls/cupertino-action-sheet/basic-cupertino-action-sheet.png" className="screenshot-40"/>

## Properties

### `content`

The child control to be shown in this action button. In case both `text` and `content` are provided, then `content` will
be used.

### `is_default_action`

Whether this action should receive the style of an emphasized, default action.

Defaults to `False`.

### `is_destructive_action`

Whether this action should receive the style of a destructive action.

Defaults to `False`.

### `text`

The text to be shown in the button. In case both `text` and `content` are provided, then `content` will be used.

## Events

### `on_click`

Fires when this action button is clicked.