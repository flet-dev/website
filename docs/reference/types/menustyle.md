---
title: MenuStyle
sidebar_label: MenuStyle
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`MenuStyle` allows controlling the menu's visual aspects, such as shape, background and shadow colors, content padding, border width and radius.

Each individual style attribute could be configured for all or
particular [Material states](/docs/reference/types/controlstate) of a menu, such as `HOVERED`, `FOCUSED`, `DISABLED` and
others.

`MenuStyle` class has the following properties:

### `alignment`

Defines the desired alignment of the submenu when opened relative to the button that opens it.

### `bgcolor`

The menu's background fill color.

### `elevation`

The elevation of the menu's Material.

### `padding`

The padding between the menu's boundary and its child.

### `shadow_color`

The shadow color of the menu's Material.

### `shape`

The shape of the menu's underlying Material, an instance of [`OutlinedBorder`](/docs/reference/types/outlinedborder) class.

### `side`

An instance of [`BorderSide`](/docs/reference/types/borderside) class, the color and weight of the menu's outline.

### `surface_tint_color`

The surface tint color of the menu's Material.

## Usage example

You can configure a different shape, background color for a `HOVERED` state and configure fallback values for all other states.

To configure style attribute for all [Material states](/docs/reference/types/controlstate), set its value to a literal (
or class instance).

For example, if you set `bgcolor` property to a literal the value will be applied to all menu states:

```python
ft.MenuStyle(bgcolor=ft.Colors.RED)
```

To configure style attribute for specific Material states set its value to a dictionary where the key is state name. 

For example, to configure different background colors for `HOVERED` and `FOCUSED` states and another colors for all other states:

```python
ft.MenuStyle(
    bgcolor={
        ft.ControlState.HOVERED: ft.Colors.WHITE,
        ft.ControlState.FOCUSED: ft.Colors.BLUE,
        ft.ControlState.DEFAULT: ft.Colors.BLACK,
    }
)
```
