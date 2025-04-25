---
title: MenuBar
sidebar_label: MenuBar
---

A menu bar that manages cascading child menus.

It could be placed anywhere but typically resides above the main body of the application and defines a menu system for invoking callbacks in response to user selection of a menu item.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/navigation/menubar)


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/navigation/menu-bar/menu-bar-example.py
```


<img src="/img/docs/controls/menu-bar/menu-bar.gif" className="screenshot-40" />

## Properties

### `clip_behavior`

Whether to clip the content of this control or not.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior) and defaults to `ClipBehavior.NONE`.

### `controls`

The list of menu items that are the top level children of the `MenuBar`.

### `style`

Value is of type [`MenuStyle`](/docs/reference/types/menustyle). 
