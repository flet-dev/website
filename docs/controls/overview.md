---
title: Controls reference
sidebar_label: Controls reference
slug: /controls
---

Flet UI is built of controls. Controls are organized into hierarchy, or a tree, where each control has a parent (except [Page](/docs/controls/page)) and container controls like [Column](/docs/controls/column), [Dropdown](/docs/controls/dropdown) can contain child controls, for example:

```
Page
 ├─ TextField
 ├─ Dropdown
 │   ├─ Option
 │   └─ Option
 └─ Row
     ├─ ElevatedButton
     └─ ElevatedButton
```

[Control gallery live demo](https://flet-controls-gallery.fly.dev/layout)

## Controls by categories

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

## Common control properties

Flet controls have the following properties:

### `bottom`

Effective inside [`Stack`](/docs/controls/stack) only. The distance that the child's bottom edge is inset from the bottom of the stack.

### `data`

Arbitrary data that can be attached to a control.

### `disabled`

Every control has `disabled` property which is `False` by default - control and all its children are enabled.
`disabled` property is mostly used with data entry controls like `TextField`, `Dropdown`, `Checkbox`, buttons.
However, `disabled` could be set to a parent control and its value will be propagated down to all children recursively.

For example, if you have a form with multiple entry controls you can disable them all together by disabling container:

```python
c = ft.Column(controls=[
    ft.TextField(),
    ft.TextField()
])
c.disabled = True
page.add(c)
```

### `expand`

When a child Control is placed into a [`Column`](/docs/controls/column) or [`Row`](/docs/controls/row) you can "expand" it to fill the available space. `expand` property could be a boolean value (`True` - expand control to fill all available space) or an integer - an "expand factor" specifying how to divide a free space with other expanded child controls.

For more information and examples about `expand` property see "Expanding children" sections in [`Column`](/docs/controls/column#expanding-children) or [`Row`](/docs/controls/row#expanding-children).

### `height`

Imposed Control height in virtual pixels.

### `left`

Effective inside [`Stack`](/docs/controls/stack) only. The distance that the child's left edge is inset from the left of the stack.

### `right`

Effective inside [`Stack`](/docs/controls/stack) only. The distance that the child's right edge is inset from the right of the stack.

### `top`

Effective inside [`Stack`](/docs/controls/stack) only. The distance that the child's top edge is inset from the top of the stack.

### `visible`

Every control has `visible` property which is `True` by default - control is rendered on the page. Setting `visible` to `False` completely prevents control (and all its children if any) from rendering on a page canvas. Hidden controls cannot be focused or selected with a keyboard or mouse and they do not emit any events.

### `width`

Imposed Control width in virtual pixels.

## Transformations

### `offset`

Applies a translation transformation before painting the control.

The translation is expressed as a `transform.Offset` scaled to the control's size. For example, an `Offset` with a `x` of `0.25` will result in a horizontal translation of one quarter the width of the control.

The following example displays container at `0, 0` top left corner of a stack as transform applies `-1 * 100, -1 * 100` (`offset * control_size`) horizontal and vertical translations to the control:

```python
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.Stack(
            [
                ft.Container(
                    bgcolor="red",
                    width=100,
                    height=100,
                    left=100,
                    top=100,
                    offset=ft.transform.Offset(-1, -1),
                )
            ],
            width=1000,
            height=1000,
        )
    )

ft.app(target=main)
```

### `opacity`

Makes a control partially transparent. `0.0` - control is completely transparent, not painted at all. `1.0` (default) - a control is fully painted without any transparency.

### `rotate`

Transforms control using a rotation around the center.

The value of `rotate` property could be one of the following types:

* `number` - a rotation in clockwise radians. Full circle `360°` is `math.pi * 2` radians, `90°` is `pi / 2`, `45°` is `pi / 4`, etc.
* `transform.Rotate` - allows to specify rotation `angle` as well as `alignment` - the location of rotation center.

For example:

```python
ft.Image(
    src="https://picsum.photos/100/100",
    width=100,
    height=100,
    border_radius=5,
    rotate=Rotate(angle=0.25 * pi, alignment=ft.alignment.center_left)
)
```

### `scale`

Scale control along the 2D plane. Default scale factor is `1.0` - control is not scaled. `0.5` - the control is twice smaller, `2.0` - the control is twice larger.

Different scale multipliers can be specified for `x` and `y` axis, but setting `Control.scale` property to an instance of `transform.Scale` class:

```python
from dataclasses import field

class Scale:
    scale: float = field(default=None)
    scale_x: float = field(default=None)
    scale_y: float = field(default=None)
    alignment: Alignment = field(default=None)
```

Either `scale` or `scale_x` and `scale_y` could be specified, but not all of them, for example:

```python
ft.Image(
    src="https://picsum.photos/100/100",
    width=100,
    height=100,
    border_radius=5,
    scale=Scale(scale_x=2, scale_y=0.5)
)
```
