---
title: CupertinoActionSheet
sidebar_label: CupertinoActionSheet
---

An iOS-style action sheet.

To open this control, simply call the [`page.open()`](/docs/controls/page#opencontrol) helper-method.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinoactionsheet)

### Basic Example


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-dialogs-alerts-panels/cupertino-action-sheet-example.py
```


<img src="/img/docs/controls/cupertino-action-sheet/basic-cupertino-action-sheet.png" className="screenshot-40"/>

## Properties

### `actions`

A list of action buttons to be shown in the sheet. These actions are typically [`CupertinoActionSheetAction`](/docs/controls/cupertinoactionsheetaction)s. This list must have at least one action.

### `cancel`

An optional control to be shown below the actions but grouped separately from them. Typically a [`CupertinoActionSheetAction`](/docs/controls/cupertinoactionsheetaction) button.

### `message`

A control containing a descriptive message that provides more details about the reason for the alert. Typically
a [`Text`](/docs/controls/text) control.

### `title`

A control containing the title of the action sheet. Typically a [`Text`](/docs/controls/text) control.
