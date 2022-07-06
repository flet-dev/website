---
title: Overview
sidebar_label: Overview
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

All Flet controls have the following properties:

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

### `opacity`

Makes a control partially transparent. `0.0` - control is completely transparent, not painted at all. `1.0` (default) - a control is fully painted without any transparency.

### `data`

Arbitrary data that can be attached to a control.