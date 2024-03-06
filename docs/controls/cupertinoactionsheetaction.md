---
title: CupertinoActionSheetAction
sidebar_label: CupertinoActionSheetAction
slug: cupertinoactionsheetaction
---

An action button typically used in [`CupertinoActionSheet`](cupertinoactionsheet).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/navigation/cupertinoactionsheet)

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python

```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertino-action-sheet/basic-cupertino-action-sheet.png" className="screenshot-40"/>

## Properties

### `content`

The child control to be shown in this action button. In case both `text` and `content` are provided, then `content` will
be used.

### `is_default_action`

Whether this action should receive the style of an emphasized, default action.

### `is_destructive_action`

Whether this action should receive the style of a destructive action.

### `text`

The text to be shown in the button. In case both `text` and `content` are provided, then `content` will be used.

## Events

### `on_click`

Fires when this action button is clicked.