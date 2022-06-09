---
title: Page
sidebar_label: Page
slug: page
---

Page is the top most container for all other controls.

A page instance is automatically created when a new user session started. From layout perspective the Page represents a [Column](column) control, so it has a similar behavior and shares same properties.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Properties

### `controls`

A list of Controls to display on the Page.

For example, to add a new control to a page:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.controls.append(Text("Hello!"))
page.update()
```

  </TabItem>
</Tabs>

or to get the same result as above using `page.add()` shortcut method:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(Text("Hello!"))
```

  </TabItem>
</Tabs>

To remove the top most control on the page:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.controls.pop()
page.update()
```

  </TabItem>
</Tabs>

### `title`

A title of browser or native OS window, for example:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.title = "My awesome app"
page.update()
```

  </TabItem>
</Tabs>

### `horizontal_alignment`

How the child Controls should be placed horizontally.

Default value is `start` which means on the left side of the Page. Supported values: `start`, `center`, `end`, `stretch`, `baseline`.

### `vertical_alignment`

How the child Controls should be placed vertically.

For example, `start`, the default, places the children at the top of a Page. Supported values: `start`, `end`, `center`, `spaceBetween`, `spaceAround`, `spaceEvenly`.

### `spacing`

Vertical spacing between controls on the Page. Default value is 10 virtual pixels. Spacing is applied only when `alignment` is set to `start`, `end` or `center`.

### `padding`

A space between page contents and its edges. Default value is 10 pixels from each side. To set zero padding:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.padding = 0
page.update()
```

  </TabItem>
</Tabs>

See [`Container.padding`](container#padding) for more information and possible values.

### `bgcolor`

Background color of the Page.

A color value could be a hex value in `#ARGB` format (e.g. `#FFCC0000`), `#RGB` format (e.g. `#CC0000`) or a named color from `flet.colors` module.

### `scroll`

Enables a vertical scrolling for the Page to prevent its content overflow. Supported values:

* `none` (default) - the Page is non-scrollable and its content could overflow.
* `auto` - scrolling is enabled and scroll bar is only shown when scrolling occurs.
* `adaptive` - scrolling is enabled and scroll bar is always shown when running app as web or desktop.
* `always` - scrolling is enabled and scroll bar is always shown.

### `auto_scroll`

`True` if scrollbar should automatically move its position to the end when children update.

### `theme_mode`

A theme to use: `system` (default), `light` or `dark`.

### `theme`

Set this property to an instance of `theme.Theme` to customize light theme. Currently, a theme can only be automatically generated from a "seed" color. For example, to generate light theme from a green color:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from flet import theme

page.theme = theme.Theme(color_scheme_seed="green")
page.update()
```

  </TabItem>
</Tabs>

### `dark_theme`

Set this property to an instance of `theme.Theme` to customize dark theme.

### `clipboard`

Changing this property sends its value to a clipboard on a client side (user's web browser or a desktop), for example:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.clipboard = "This value comes from Flet app"
page.update()
```

  </TabItem>
</Tabs>

### `splash`

A `Control` that will be displayed on top of Page contents. [`ProgressBar`](/docs/controls/progressbar) or [`ProgressRing`](/docs/controls/progressring) could be used as an indicator for some lengthy operation, for example:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from time import sleep
import flet
from flet import ElevatedButton, ProgressBar

def main(page):
    def button_click(e):
        page.splash = ProgressBar()
        btn.disabled = True
        page.update()
        sleep(3)
        page.splash = None
        btn.disabled = False
        page.update()

    btn = ElevatedButton("Do some lengthy task!", on_click=button_click)
    page.add(btn)

flet.app(target=main)
```

  </TabItem>
</Tabs>

### `floating_action_button`

A [`FloatingActionButton`](/docs/controls/floatingactionbutton) control to display on top of Page content.

### `banner`

A [`Banner`](/docs/controls/banner) control to display at the top of the Page.

### `snack_bar`

A [`SnackBar`](/docs/controls/snackbar) control to display at the bottom of the Page.

### `dialog`

An [`AlertDialog`](/docs/controls/alertdialog) control to display.

### `session_id`

A unique ID of user's session. This property is read-only.

### `window_width`

A width of a browser or native OS window containing Flet app. This property is read-only. It's usually being used inside [`page.on_resize`](#on_resize) handler.

### `window_height`

A height of a browser or native OS window containing Flet app. This property is read-only. It's usually being used inside [`page.on_resize`](#on_resize) handler.

## Events

### `on_resize`

Fires when a browser or native OS window containing Flet app is resized by a user, for example:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
def page_resize(e):
    print("New page size:", page.window_width, page.window_height)

page.on_resize = page_resize
```

  </TabItem>
</Tabs>

### `on_connect`

Fires when a web user (re-)connects to a page session. It is not triggered when an app page is first opened, but is triggered when the page is refreshed, or Flet web client has re-connected after computer was unlocked. This event could be used to detect when a web user becomes "online".

### `on_disconnect`

Fires when a web user disconnects from a page session, i.e. closes browser tab/window.

### `on_close`

Fires when a session has expired after configured amount of time (60 minutes by default).