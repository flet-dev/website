---
title: SubmenuButton
sidebar_label: SubmenuButton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A menu button that displays a cascading menu.

It can be used as part of a [MenuBar](/docs/controls/menubar), or as a standalone control.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/submenubutton)

### Basic Example



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/buttons/submenu-button/submentu-button-example.py
```


<img src="/img/docs/controls/submenu-button/submenu-button-example.gif" className="screenshot-40" />

## Properties

### `alignment_offset`

The offset of the menu relative to the alignment origin determined by `MenuStyle.alignment` on the `style` attribute.

### `clip_behavior`

Whether to clip the content of this control or not.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior) and defaults to `ClipBehavior.HARD_EDGE`.

### `content`

The child control to be displayed in the middle portion of this button.

Typically this is the button's label, using a `Text` control.

### `controls`

A list of controls that appear in the menu when it is opened.

Typically either `MenuItemButton` or `SubMenuButton` controls.

If this list is empty, then the button for this menu item will be disabled.

### `leading`

An optional control to display before the `content`.

Typically an [`Icon`](/docs/controls/icon) control.

### `menu_style`

Customizes this menu's appearance.

Value is of type [`MenuStyle`](/docs/reference/types/menustyle).

### `style`

Customizes this button's appearance.

Value is of type [`ButtonStyle`](/docs/reference/types/buttonstyle).

### `trailing`

An optional control to display after the `content`.

Typically an [`Icon`](/docs/controls/icon) control.

## Events

### `on_blur`

Fired when this button loses focus.

### `on_close`

Fired when the menu is closed.

### `on_focus`

Fired when the button receives focus.

### `on_hover`

Fired when the button is hovered.

### `on_open`

Fired when the menu is opened.
