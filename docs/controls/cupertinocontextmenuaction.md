---
title: CupertinoContextMenuAction
sidebar_label: CupertinoContextMenuAction
---

An action button typically used in [`CupertinoContextMenu`](/docs/controls/cupertinocontextmenu).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinocontextmenu)

### Basic Example


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-dialogs-alerts-panels/cupertino-context-menu-example.py
```


<img src="/img/docs/controls/cupertino-context-menu/basic-cupertino-context-menu.gif" className="screenshot-40"/>

## Properties

### `content`

The child control to be shown in this action button. In case both `text` and `content` are provided, then `content` will be used.

### `is_default_action`

Whether this action should receive the style of an emphasized, default action.

### `is_destructive_action`

Whether this action should receive the style of a destructive action.

### `text`

The text to be shown in the button. In case both `text` and `content` are provided, then `content` will be used.

### `trailing_icon`

An optional icon to display at the right of the `text` or `content` control. 

## Events

### `on_click`

Fires when this action button is clicked.