---
title: Window
sidebar_label: Window
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This class is meant to be used as a property of [`Page.window`](/docs/controls/page#window).

All properties and methods of the `Window` class are available only on Desktop 🖥️ platforms.

`Window` class has the following properties:

### `alignment`

Defines the alignment of the app window.

Value is of type [`Alignment`](/docs/reference/types/alignment).

### `always_on_bottom`

Whether the app window should always be displayed below other windows.

Defaults to `False`.

**Has effect on Linux and Windows only.**

### `always_on_top`

Whether the app window should always be displayed on top of other windows.

Defaults to `False`.

### `badge_label`

Sets a badge label on the app window.

**Has effect on macOS only.**

### `bgcolor`

Sets background [color](/docs/reference/colors) of an application window.

Use together with `page.bgcolor` to make a window transparent:

```python
import flet as ft

def main(page: ft.Page):
    page.window.bgcolor = ft.Colors.TRANSPARENT
    page.bgcolor = ft.Colors.TRANSPARENT
    page.window.title_bar_hidden = True
    page.window.frameless = True
    page.window.left = 400
    page.window.top = 200
    page.add(ft.ElevatedButton("I'm a floating button!"))

ft.app(main)
```

### `focused`

Set to `True` to focus a native OS window.

### `frameless`

Whether the app window should be frameless.

### `full_screen`

Whether to switch app's native OS window to a fullscreen mode.

Defaults to `False`.

### `height`

Defines the height of the app window.

### `icon`

The icon of the app window.

**Has effect on Windows only.**

### `ignore_mouse_events`

Whether the app window should ignore mouse events, passing them to the window below it. 
If this window has focus, it will still receive keyboard events.

Defaults to `False`.

### `left`

Defines the horizontal position of the app window - a distance in virtual pixels from the left edge of the screen.

### `maximizable`

Whether to hide/disable native OS window's "Maximize" button.

Defaults to `True`.

### `maximized`

Whether the app window containing is maximized. Set this property to `True` to programmatically maximize the window and
set it to `False` to unmaximize it.

### `max_height`

Defines the maximum height of the app window.

### `max_width`

Defines the maximum width of the app window.

### `minimizable`

Whether the app window can be minimized through the window's "Minimize" button.

Defaults to `True`.

### `minimized`

Whether the app window is minimized. Set this property to `True` to programmatically minimize the window and set it
to `False` to restore it.

### `min_height`

Defines the minimum height of the app window.

### `min_width`

Defines the minimum width of the app window.

### `movable`

Whether the app window can be moved.

Defaults to `True`.

**Has effect on macOS only.**

### `opacity`

Defines the opacity of a native OS window.

Value must be between `0.0` (fully transparent) and `1.0` (fully opaque).

### `resizable`

Whether the app window can be resized.

Defaults to `True`.

### `shadow`

Whether to display a shadow around the app window.

On Windows, doesn't do anything unless window is `frameless`.

**Has effect on macOS and Windows only.**

### `title_bar_hidden`

Whether to hide the app window's title bar.

See [`WindowDragArea`](/docs/controls/windowdragarea) control that allows moving an app window with hidden title bar.

### `title_bar_buttons_hidden`

Whether to hide the app window's title bar buttons.

**Has effect on macOS only.**

### `top`

Defines the vertical position of a native OS window - a distance in virtual pixels from the top edge of the screen.

### `prevent_close`

Set to `True` to intercept the native close signal. Could be used together with [`page.window.on_event()`](#on_event)
event handler and [`page.window-destroy()`](#destroy) to implement app exit confirmation logic -
see [`page.window.destroy()`](#destroy) for code example.

### `progress_bar`

The value from `0.0` to `1.0` to display a progress bar on Task Bar (Windows) or Dock (macOS) application button.

**Has effect on Windows and macOS only.**

### `skip_task_bar`

Set to `True` to hide application from the Task Bar (Windows) or Dock (macOS).

### `visible`

Whether to make the app window visible. Used when the app is starting with a hidden window.

The following program starts with a hidden window and makes it visible in 3 seconds:

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/layout/page/window-hidden-on-start.py
```

Note `view=ft.AppView.FLET_APP_HIDDEN` which hides app window on start.

### `width`

Defines the width of the app window.

## Methods

### `center()`

Move app window to the center of the screen.

### `close()`

Closes app window.

### `destroy()`

Forces closing app window.

This method could be used with `page.window.prevent_close = True` to implement app exit confirmation:

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/layout/page/app-exit-confirm-dialog.py
```

### `to_front()`

Brings app window to the foreground (on top of other windows).

## Events

### `on_event`

Fires when app window changes its state: position, size, maximized, minimized, etc.

Event handler argument is of type [`WindowEvent`](/docs/reference/types/windowevent).
