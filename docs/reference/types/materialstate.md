---
title: MaterialState
sidebar_label: MaterialState
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`MaterialState` enum has the following values:

* `HOVERED`
* `FOCUSED`
* `PRESSED`
* `DRAGGED`
* `SELECTED`
* `SCROLLED_UNDER`
* `DISABLED`
* `ERROR`
* `DEFAULT` - fallback state, meaning "all other states".

### Example of usage

To configure radio fill color for all Material states set `fill_color` value to a literal, for example:

```python
rd.fill_color=ft.colors.GREEN
```

To configure fill color for specific Material states set its value to a dictionary where the key is state name. For example, to configure different fill colors for `HOVERED` and `FOCUSED` states and another color for all other states:

```python
rd.fill_color={
    ft.MaterialState.HOVERED: ft.colors.GREEN,
    ft.MaterialState.FOCUSED: ft.colors.RED,
    ft.MaterialState.DEFAULT: ft.colors.BLACK,
}
```