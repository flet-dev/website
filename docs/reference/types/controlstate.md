---
title: ControlState
sidebar_label: ControlState
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

For more information on each state, see
the [Material Design specification](https://m3.material.io/foundations/interaction/states).

`ControlState` enum has the following values:

### `DEFAULT`

Represents the baseline state of a control when no other states are active.
It serves as a fallback and is applied when no interaction occurs.

It has the lowest priority in the state hierarchy and can be placed anywhere in the state dictionary without affecting
its behavior.

### `DISABLED`

Indicates that the control is disabled/non-interactive and visually subdued.
This state is used when a control is unavailable for user interaction.

### `DRAGGED`

Represents a state where the user is actively dragging the control.
This is commonly used in draggable components to provide visual feedback during movement.

### `ERROR`

Indicates that the control has encountered an error or validation issue.
This state is often used to highlight input fields with invalid entries.

### `FOCUSED`

Denotes that the control has received keyboard or touch focus.
Typically used to highlight input fields or buttons when they are selected for interaction.

### `HOVERED`

Represents a state where the user is hovering over the control with a pointer device.
This state is used to provide visual feedback, such as a color change or shadow effect.

### `PRESSED`

Indicates that the control is being actively pressed or clicked.

### `SELECTED`

Denotes that the control is in a selected or activated state, such as a toggled switch, checked checkbox, or selected
radio button.

### `SCROLLED_UNDER`

Used when the control has been partially or fully scrolled under another element.
This state is useful for sticky headers or elements that change appearance when scrolled.

## Usage Example

Configuring `fill_color` can be done in two ways:

### 1. Single Value for All States

If you want to use the same color across all Material states, simply assign `fill_color` to a single color:

```python
ft.Radio(fill_color=ft.Colors.GREEN)
```

### 2. Specific Values for Each State

For more control, you can provide a dictionary where the key is the state name and the value is the corresponding color.

#### **Ordering Matters**

- The order in which states appear in the dictionary will determine their priority, allowing for flexibility and
  customization.
- The position of `DEFAULT` does not affect behavior—it always has the least priority and can be placed anywhere in the
  dictionary.

#### **Example**

To configure different fill colors of a [`Radio`](/docs/controls/radio) button for `ControlState.HOVERED` and
`ControlState.FOCUSED`, with a fallback color for all other states:

```python
ft.Radio(
    fill_color={
        ft.ControlState.HOVERED: ft.Colors.GREEN,
        ft.ControlState.FOCUSED: ft.Colors.RED,
        ft.ControlState.DEFAULT: ft.Colors.BLACK,
    }
)
```

This setup ensures that `HOVERED` and `FOCUSED` states take precedence, while all unspecified states default to `BLACK`.