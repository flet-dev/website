---
title: Semantics
sidebar_label: Semantics
---

A control that annotates the control tree with a description of the meaning of the widgets.

Used by accessibility tools, search engines, and other semantic analysis software to determine the meaning of the application.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Properties

### `button`

Whether this subtree represents a button.

### `checked`

Whether this subtree represents a checkbox or similar widget with a "checked" state, and what its current state is.

### `content`

The `Control` to annotate.

### `current_value_length`

The current number of characters that have been entered into an editable text field.

### `decreased_value`

The value that the semantics node represents when it is decreased.

### `exclude_semantics`

### `expanded`

Whether this subtree represents something that can be in an "expanded" or "collapsed" state.

### `focusable`

Whether the node is able to hold input focus.

### `focused`

Whether the node currently holds input focus.

### `header`

Whether this subtree represents a header.

### `heading_level`

The heading level in the DOM document structure.

### `hidden`

Whether this subtree is currently hidden.

### `hint`

A brief textual description of the result of an action performed on the `content` control.

### `image`

Whether the node represents an image.

### `increased_value`

### `label`

A textual description of the `content` control.

### `link`

Whether this subtree represents a link.

### `live_region`

Whether this subtree should be considered a live region.

### `max_value_length`

The maximum number of characters that can be entered into an editable text field.

### `mixed`

Whether this subtree represents a checkbox or similar control with a "half-checked" state or similar, and whether it is currently in this half-checked state.

### `multiline`

Whether the `value` is coming from a field that supports multiline text editing.

### `obscured`

Whether `value` should be obscured.

### `read_only`

Whether this subtree is read only.

### `selected`

Whether this subtree represents something that can be in a selected or unselected state, and what its current state is.

### `slider`

Whether this subtree represents a slider.

### `textfield`

Whether  this subtree represents a text field.

### `toggled`

Whether this subtree represents a toggle switch or similar widget with an "on" state, and what its current state is.

### `tooltip`

A textual description of the widget's tooltip.

### `value`

A textual description of the `value` of the `content` control.

## Events

### `on_copy`

Fires when the current selection is copied to the clipboard.

### `on_cut`

Fires when the current selection is cut to the clipboard.

### `on_decrease`

Fires when the value represented by the semantics node is decreased.

### `on_did_gain_accessibility_focus`

Fires when the node has gained accessibility focus. 

### `on_did_lose_accessibility_focus`

Fires when the node has lost accessibility focus.

### `on_dismiss`

Fires when the node is dismissed.

### `on_increase`

Fires when the value represented by the semantics node is increased. 

### `on_long_press`

Fires when the node is long-pressed (pressing and holding the screen with the finger for a few seconds without moving it). 

### `on_move_cursor_backward_by_character`

Fires when the cursor is moved backward by one character.  

### `on_move_cursor_forward_by_character`

Fires when the cursor is moved forward by one character. 

### `on_paste`

Fires when the current content of the clipboard is pasted. 

### `on_set_text`

Fires when a user wants to replace the current text in the text field with a new text.

Voice access users can trigger this handler by speaking type `<text>` to their Android devices.

### `on_scroll_down`

Fires when a user moves their finger across the screen from top to bottom.

### `on_scroll_left`

Fires when a user moves their finger across the screen from right to left.

### `on_scroll_right`

Fires when a user moves their finger across the screen from left to right.

### `on_scroll_up`

Fires when a user moves their finger across the screen from bottom to top.

### `on_tap`

Fires when this control is tapped.
