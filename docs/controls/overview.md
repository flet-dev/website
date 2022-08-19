---
title: Controls reference
sidebar_label: Controls reference
slug: /controls
---

Flet UI is built of controls. Controls are organized into hierarchy, or a tree, where each control has a parent (except [Page](controls/page)) and container controls like [Column](controls/column), [Dropdown](controls/dropdown) can contain child controls, for example:

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

## Controls by categories

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

## Common control properties

Flet controls have the following properties:

### `width`

Imposed Control width in virtual pixels.

### `height`

Imposed Control height in virtual pixels.

### `left`

Effective inside [`Stack`](controls/stack) only. The distance that the child's left edge is inset from the left of the stack.

### `top`

Effective inside [`Stack`](controls/stack) only. The distance that the child's top edge is inset from the top of the stack.

### `right`

Effective inside [`Stack`](controls/stack) only. The distance that the child's right edge is inset from the right of the stack.

### `bottom`

Effective inside [`Stack`](controls/stack) only. The distance that the child's bottom edge is inset from the bottom of the stack.

### `visible`

Every control has `visible` property which is `True` by default - control is rendered on the page. Setting `visible` to `False` completely prevents control (and all its children if any) from rendering on a page canvas. Hidden controls cannot be focused or selected with a keyboard or mouse and they do not emit any events.

### `disabled`

Every control has `disabled` property which is `False` by default - control and all its children are enabled.
`disabled` property is mostly used with data entry controls like `TextField`, `Dropdown`, `Checkbox`, buttons.
However, `disabled` could be set to a parent control and its value will be propagated down to all children recursively.

For example, if you have a form with multiple entry controls you can disable them all together by disabling container:

```python
c = Column(controls=[
    TextField(),
    TextField()
])
c.disabled = True
page.add(c)
```

### `expand`

When a child Control is placed into a [`Column`](controls/column) or [`Row`](controls/row) you can "expand" it to fill the available space. `expand` property could be a boolean value (`True` - expand control to fill all available space) or an integer - an "expand factor" specifying how to divide a free space with other expanded child controls.

For more information and examples about `expand` property see "Expanding children" sections in [`Column`](controls/column#expanding-children) or [`Row`](controls/row#expanding-children).

### `data`

Arbitrary data that can be attached to a control.

## Transformations

### `opacity`

Makes a control partially transparent. `0.0` - control is completely transparent, not painted at all. `1.0` (default) - a control is fully painted without any transparency.

### `scale`

Scale control along the 2D plane. Default scale factor is `1.0` - control is not scaled. `0.5` - the control is twice smaller, `2.0` - the control is twice larger.

Different scale multipliers can be specified for `x` and `y` axis, but setting `Control.scale` property to an instance of `transform.Scale` class:

```python
class Scale:
    scale: float = field(default=None)
    scale_x: float = field(default=None)
    scale_y: float = field(default=None)
    alignment: Alignment = field(default=None)
```

Either `scale` or `scale_x` and `scale_y` could be specified, but not all of them, for example:

```python
Image(
    src="https://picsum.photos/100/100",
    width=100,
    height=100,
    border_radius=5,
    scale=Scale(scale_x=2, scale_y=0.5)
)
```

### `rotate`

Transforms control using a rotation around the center.

The value of `rotate` property could be one of the following types:

* `number` - a rotation in clockwise radians.
* `transform.Rotate` - allows to specify rotation `angle` as well as `alignment` - the location of rotation center.

For example:

```python
Image(
    src="https://picsum.photos/100/100",
    width=100,
    height=100,
    border_radius=5,
    rotate=Rotate(angle=0.25 * pi, alignment=alignment.center_left)
)
```