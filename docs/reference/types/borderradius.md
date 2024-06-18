---
title: BorderRadius
sidebar_label: BorderRadius
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`BorderRadius` class has the following properties describing 4 corner values:

### `top_left`
### `top_right`
### `bottom_left`
### `bottom_right`

## Helper methods

The object could be created with a constructor where all corner values set separately or with helper methods:

### `ft.border_radius.all(value)`

Sets the same border radius of `value` for all 4 corners of the rectangle.

### `ft.border_radius.horizontal(left, right)`

Sets the border radius horizontally for the left and right corners of the rectangle.

Both `left` and `right` default to `0`.

### `ft.border_radius.vertical(top: float = 0, bottom: float = 0)`

Sets the border radius vertically for the top and bottom corners of the rectangle.

Both `top` and `bottom` default to `0`.

### `ft.border_radius.only(top_left, top_right, bottom_left, bottom_right)`

Sets different border radius for each corner of the rectangle.

## Usage example

```python
container_1.border_radius= ft.border_radius.all(30)
```