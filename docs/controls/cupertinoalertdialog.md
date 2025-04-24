---
title: CupertinoAlertDialog
sidebar_label: CupertinoAlertDialog
---

An iOS-style alert dialog.

An alert dialog informs the user about situations that require acknowledgement. An alert dialog has an optional title and an optional list of actions. The title is displayed above the content and the actions are displayed below the content.

This dialog styles its title and content (typically a message) to match the standard iOS title and message dialog text style. These default styles can be overridden by explicitly defining `text_style` property.

To open this control, simply call the [`page.open()`](/docs/controls/page#opencontrol) helper-method.

To display action buttons that look like standard iOS dialog buttons,
provide [`CupertinoDialogAction`](/docs/controls/cupertinodialogaction)s for the actions given to this dialog.

<img src="/img/docs/controls/cupertinodialogaction/cupertinoalertdialog.png" className="screenshot-50" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinoalertdialog)

### CupertinoAlertDialog and adaptive AlertDialog example



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-dialogs-alerts-panels/cupertino-alert-dialog-example.py
```


## Properties

### `actions`

The (optional) set of actions that are displayed at the bottom of the dialog.

Typically this is a list of [`CupertinoDialogAction`](/docs/controls/cupertinodialogaction) controls.

### `barrier_color`

The [color](/docs/reference/colors) of the modal barrier that darkens everything below the dialog.

If `None`, the [`DialogTheme.barrier_color`](/docs/reference/types/dialogtheme#barrier_color) is used. 
If it is also `None`, then `Colors.BLACK_54` is used.

### `content`

The (optional) content of the dialog is displayed in the center of the dialog in a lighter font. 

Typically this is a [`Column`](/docs/controls/column) that contains the dialog's [`Text`](/docs/controls/text) message.

### `inset_animation`

The animation style to be used when the system keyboard intrudes into the space that the dialog is placed in.

Value is of type [`AnimationStyle`](/docs/reference/types/animationstyle).

### `modal`

If set to True, dialog cannot be dismissed by clicking the area outside of it. The default value is False.

### `open`

Set to `True` to display a dialog.

### `title`

The (optional) title of the dialog is displayed in a large font at the top of the dialog.

Typically a [`Text`](/docs/controls/text) control.

## Events

### `on_dismiss`

Fires when the dialog is dismissed.
