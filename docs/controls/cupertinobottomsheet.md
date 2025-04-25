---
title: CupertinoBottomSheet
sidebar_label: CupertinoBottomSheet
---

An iOS-style bottom sheet.

To open this control, simply call the [`page.open()`](/docs/controls/page#opencontrol) helper-method.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinobottomsheet)

### Basic Example


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-dialogs-alerts-panels/cupertino-action-sheet-example.py
```



<img src="/img/docs/controls/cupertino-action-sheet/basic-cupertino-action-sheet.png" className="screenshot-40"/>

## Properties

### `bgcolor`

The sheet's background [color](/docs/reference/colors).

### `content`

The content of the bottom sheet.

### `height`

The height of the bottom sheet.

### `modal`

Whether this bottom sheet can be dismissed/closed by clicking the area outside of it.

### `open`

Set to `True` to display a bottom sheet.

### `padding`

The sheet's padding. The value is an instance of [`Padding`](/docs/reference/types/padding) class or a number.

## Events

### `on_dismiss`

Fires when bottom sheet is dismissed.