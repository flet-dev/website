---
title: CupertinoDialogAction
sidebar_label: CupertinoDialogAction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A button typically used in a [CupertinoAlertDialog](/docs/controls/cupertinoalertdialog).

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/cupertinodialogaction)

### CupertinoAlertDialog example


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-dialogs-alerts-panels/cupertino-alert-dialog-simple.py
```


<img src="/img/docs/controls/cupertinodialogaction/cupertinoalertdialog.png" className="screenshot-50" />

## Properties

### `content`

A Control representing custom button content.

### `is_default_action`

If set to True, the button will have bold text. More than one action can have this property set to True in
CupertinoAlertDialog.

Defaults to `False`.

### `is_destructive_action`

If set to True, the button's text color will be red. Use it for actions that destroy objects, such as an delete that
deletes an email etc.

Defaults to `False`.

### `text`

The text displayed on a button.

### `text_style`

The text style to use for text on the button.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

## Events

### `on_click`

Fires when a user clicks the button.