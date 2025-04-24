---
title: TransparentPointer
sidebar_label: TransparentPointer
---

TransparentPointer is the solution to ["How to pass through all gestures between two widgets in Stack"](https://stackoverflow.com/questions/65269190/pass-trough-all-gestures-between-two-widgets-in-stack) problem.

For example, if there is an [`ElevatedButton`](/docs/controls/elevatedbutton)
inside [`Container`](/docs/controls/container) with [`GestureDetector`](/docs/controls/gesturedetector) then tapping on
a button won't be "visible" to a gesture detector behind it. With `TransparentPointer` a tapping event doesn't stop on a
button, but goes up to the parent, similar to event bubbling in HTML/JS.

## Example

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/utility/transparent-pointer/transparent-pointer-example.py
```

## Properties

### `content`

The `Control` that should be displayed inside the TransparentPointer.
