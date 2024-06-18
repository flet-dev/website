---
title: Border
sidebar_label: Border
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`Border` class has the following properties describing 4 sides of the rectangle:

### `bottom`
### `left`
### `right`
### `top`

## Helper methods

Each side of the border is described by an instance of [`BorderSide`](/docs/reference/types/borderside) class.

The below helper methods are available to ease the creation of `Border` objects:

### `border.all(width, color)`

Sets the same border for all 4 sides of the rectangle.

### `border.symmetric(vertical, horizontal)`

Sets `vertical` border for top and bottom sides and `horizontal` for the left and right sides of the rectangle.

### `border.only(left: BorderSide, top: BorderSide, right: BorderSide, bottom: BorderSide)`

Sets different borders for each side of the rectangle.

## Usage example

```python
container_1.border = ft.border.all(10, ft.colors.PINK_600)
container_1.border = ft.border.only(bottom=ft.border.BorderSide(1, "black"))
```