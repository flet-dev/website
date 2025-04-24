---
title: WindowDragArea
sidebar_label: WindowDragArea
---

A control for drag to move, maximize and restore application window.

When you have hidden the title bar with [`page.window.title_bar_hidden`](/docs/reference/types/window#title_bar_hidden),
you can add this control to move the window position.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### App window without a title that can be moved

<img src="/img/docs/controls/window-drag-area/no-title-draggable-window.png" className="screenshot-50" />


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/utility/window-drag-area/no-frame-window.py
```


## Properties

### `content`

A control to use for dragging/maximizing/restoring app window.

Value is of type `Control`.

### `maximizable`

Whether double-clicking on a window drag area causes window to maximize/restore.

Value is of type `bool` and defaults to `True`.
