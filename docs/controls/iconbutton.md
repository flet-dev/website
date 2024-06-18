---
title: IconButton
sidebar_label: IconButton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An icon button is a round button with an icon in the middle that reacts to touches by filling with color (ink).

Icon buttons are commonly used in the toolbars, but they can be used in many other places as well.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/iconbutton)

### Icon buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Icon buttons"
    page.add(
        ft.Row(
            [
                ft.IconButton(
                    icon=ft.icons.PAUSE_CIRCLE_FILLED_ROUNDED,
                    icon_color="blue400",
                    icon_size=20,
                    tooltip="Pause record",
                ),
                ft.IconButton(
                    icon=ft.icons.DELETE_FOREVER_ROUNDED,
                    icon_color="pink600",
                    icon_size=40,
                    tooltip="Delete record",
                ),
            ]
        ),
    )


ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/icon-button/icon-buttons.gif" className="screenshot-50" />

### Icon button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Icon button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = ft.IconButton(
        icon=ft.icons.PLAY_CIRCLE_FILL_OUTLINED, on_click=button_clicked, data=0
    )
    t = ft.Text()

    page.add(b, t)

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/icon-button/icon-button-with-click-event.gif" className="screenshot-50" />

## Properties

### `adaptive`

If the value is `True`, an adaptive button is created based on whether the target platform is iOS/macOS.

On iOS and macOS, a [`CupertinoButton`](/docs/controls/cupertinobutton) is created, which matches the functionality and presentation of this button. On other platforms, a Material `IconButton` is created.

Defaults to `False`.

### `alignment`

Defines how the icon is positioned within the IconButton. Alignment is an instance
of [`Alignment`](/docs/reference/types/alignment) class.

Defaults to `alignment.center`.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `content`

A Control representing custom button content.

### `disabled_color`

The [color](/docs/reference/colors) to use for the icon inside the button when disabled.

### `enable_feedback`

Whether detected gestures should provide acoustic and/or haptic feedback. On Android, for example, setting this to `True` produce a click sound and a long-press will produce a short vibration. 

Defaults to `True`.

### `focus_color`

The button's [color](/docs/reference/colors) when in focus.

### `highlight_color`

The button's [color](/docs/reference/colors) when the button is pressed. The highlight fades in quickly as the button is held down.

### `hover_color`

The button's [color](/docs/reference/colors) when hovered.

### `icon`

Icon shown in the button.

### `icon_color`

Icon [color](/docs/reference/colors).

### `icon_size`

Icon size in virtual pixels.

### `mouse_cursor`

The cursor to be displayed when a mouse pointer enters or is hovering over this control.

Value is of type [`MouseCursor`](/docs/reference/types/mousecursor).

### `padding`

Defines the padding around this button. The entire padded icon will react to input gestures.

Value is of type [`Padding`](/docs/reference/types/padding) and defaults to `padding.all(8)`.

### `selected`

Turns icon button to a toggle button: `True` - the button is in selected state, `False` - in normal.

### `selected_icon`

Icon shown in the button in selected state.

### `selected_icon_color`

Icon [color](/docs/reference/colors) for the selected state.

An example of icon toggle button:

<img src="/img/blog/gradients/toggle-icon-button.gif" className="screenshot-10" />

```python
import flet as ft

def main(page: ft.Page):

    def toggle_icon_button(e):
        e.control.selected = not e.control.selected
        e.control.update()

    page.add(
        ft.IconButton(
            icon=ft.icons.BATTERY_1_BAR,
            selected_icon=ft.icons.BATTERY_FULL,
            on_click=toggle_icon_button,
            selected=False,
            style=ft.ButtonStyle(color={"selected": ft.colors.GREEN, "": ft.colors.RED}),
        )
    )

ft.app(target=main)
```

### `splash_color`

The primary [color](/docs/reference/colors) of the button when the button is in the down (pressed) state.

### `splash_radius`

The splash radius. Honoured only when in Material 2.

### `style`

Value is of type [`ButtonStyle`](/docs/reference/types/buttonstyle).

### `tooltip`

The text displayed when hovering the mouse over the button.

### `url`

The URL to open when the button is clicked. If registered, `on_click` event is fired after that.

### `url_target`

Where to open URL in the web mode.

Value is of type [`UrlTarget`](/docs/reference/types/urltarget) and defaults to `UrlTarget.BLANK`.

### `visual_density`

Defines how compact the control's layout will be.

Value is of type [`ThemeVisualDensity`](/docs/reference/types/themevisualdensity).

## Methods

### `focus()`

Moves focus to a button.

## Events

### `on_blur`

Fires when the control has lost focus.

### `on_click`

Fires when a user clicks the button.

### `on_focus`

Fires when the control has received focus.