---
title: Page
sidebar_label: Page
slug: page
---

Page is a container for [`View`](view) controls.

A page instance and the root view are automatically created when a new user session started.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Properties

### `controls`

A list of Controls to display on the Page.

For example, to add a new control to a page:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.controls.append(ft.Text("Hello!"))
page.update()
```

</TabItem>
</Tabs>

or to get the same result as above using `page.add()` shortcut method:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(ft.Text("Hello!"))
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

### `views`

A list of [`View`](view) controls to build navigation history.

The last view in the list is the one displayed on a page.

The first view is a "root" view which cannot be poped.

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

### `route`

Get or sets page's navigation route. See [Navigation and routing](/docs/guides/python/navigation-and-routing) section for 
more information and examples.

### `session_id`

A unique ID of user's session. This property is read-only.

### `pwa`

`True` if the application is running as Progressive Web App (PWA). Read-only.

### `web`

`True` if the application is running in the web browser.

### `platform`

Operating system the application is running on:

* `ios`
* `android`
* `macos`
* `linux`
* `windows`

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
* `hidden` - scrolling is enabled, but scroll bar is always hidden.

### `auto_scroll`

`True` if scrollbar should automatically move its position to the end when children update.

### `theme_mode`

A theme to use: `system` (default), `light` or `dark`.

### `theme`

Set this property to an instance of `theme.Theme` to customize light theme. Currently, a theme can only be automatically generated from a "seed" color. For example, to generate light theme from a green color:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.theme = theme.Theme(color_scheme_seed = "green")
page.update()
```

</TabItem>
</Tabs>

`Theme` class has the following properties:

* `color_scheme_seed` - a seed color to algorithmically derive the rest of theme colors from.
* `font_family` - the base font for all UI elements.
* `use_material3` - `True` (default) to use Material 3 design; otherwise Material 2.
* `visual_density` - `standard` (default), `compact`, `comfortable`, `adaptivePlatformDensity`.
* `page_transitions` - an instance of `PageTransitionsTheme` that allows customizing navigation page transitions for different platforms. See section [below](#navigation-transitions).

:::note
Read this [note about system fonts](/docs/controls/text#using-system-fonts) if you like to use them in `font_family` of your theme.
:::

#### Navigation transitions

`theme.page_transitions` allows customizing navigation page transitions for different platforms. The value is an instance of `PageTransitionsTheme` class with the following optional properties:

* `android` (default value is `fadeUpwards`)
* `ios` (default value is `cupertino`)
* `macos` (default value is `zoom`)
* `linux` (default value is `zoom`)
* `windows` (default value is `zoom`)

Supported transitions: `fadeUpwards`, `openUpwards`, `zoom`, `cupertino`.

An simple example:

```python
theme = Theme()
theme.page_transitions.android = "openUpwards"
theme.page_transitions.ios = "cupertino"
theme.page_transitions.macos = "fadeUpwards"
theme.page_transitions.linux = "zoom"
theme.page_transitions.windows = "zoom"
page.theme = theme
page.update()
```

### `dark_theme`

Set this property to an instance of `theme.Theme` to customize dark theme.

### `fonts`

Allows importing custom fonts and use them with [`Text.font_family`](/docs/controls/text#font_family) or apply to the entire app via `theme.font_family`.

The following font formats can be used with Flet:

* `.ttc`
* `.ttf`
* `.otf`

The value of `fonts` property is a dictionary where key is the font family name to refer that font and the value is the URL of the font file to import.

Font can be imported from external resource by providing an absolute URL or from application assets by providing relative URL and `assets_dir`.

Specify `assets_dir` in `flet.app()` call to set the location of assets that should be available to the application. `assets_dir` could be a relative to your `main.py` directory or an absolute path. For example, consider the following program structure:

```
/assets
   /fonts
       /OpenSans-Regular.ttf
main.py
```

Now, the following program loads "Kanit" font from GitHub and "Open Sans" from the assets. "Kanit" is set as a default app font and "Open Sans" is used for a specific Text control:

```python
import flet as ft

def main(page: ft.Page):
    page.fonts = {
        "Kanit": "https://raw.githubusercontent.com/google/fonts/master/ofl/kanit/Kanit-Bold.ttf",
        "Open Sans": "/fonts/OpenSans-Regular.ttf"
    }

    page.theme = Theme(font_family = "Kanit")

    page.add(
      ft.Text("This is rendered with Kanit font"),
      ft.Text("This is Open Sans font example", font_family = "Open Sans")
    )

ft.app(target=main, assets_dir="assets")
```

:::note
At the moment only [**static**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#standard_or_static_fonts) fonts are supported, i.e. fonts containing only one spacific width/weight/style combination, for example "Open Sans Regular" or "Roboto Bold Italic".

[**Variable**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#variable_fonts) fonts support is still [work in progress](https://github.com/flutter/flutter/issues/33709).

However, if you need to use a variable font in your app you can create static "instantiations" at specific weights using [**fonttools**](https://pypi.org/project/fonttools/), then use those:

    fonttools varLib.mutator ./YourVariableFont-VF.ttf wght=140 wdth=85

To explore available font features (e.g. possible options for `wght`) use [**Wakamai Fondue**](https://wakamaifondue.com/beta/) online tool.
:::

### `rtl`

`True` to set text direction to right-to-left. Default is `False`.

### `show_semantics_debugger`

`True` turns on an overlay that shows the accessibility information reported by the framework.

### `overlay`

A list of `Control`s displayed as a stack on top of main page contents.

### `splash`

A `Control` that will be displayed on top of Page contents. [`ProgressBar`](/docs/controls/progressbar) or [`ProgressRing`](/docs/controls/progressring) could be used as an indicator for some lengthy operation, for example:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from time import sleep
import flet as ft

def main(page: ft.Page):
    def button_click(e):
        page.splash = ft.ProgressBar()
        btn.disabled = True
        page.update()
        sleep(3)
        page.splash = None
        btn.disabled = False
        page.update()

    btn = ft.ElevatedButton("Do some lengthy task!", on_click=button_click)
    page.add(btn)

ft.app(target=main)
```

</TabItem>
</Tabs>

### `appbar`

A [`AppBar`](/docs/controls/appbar) control to display at the top of the Page.

### `floating_action_button`

A [`FloatingActionButton`](/docs/controls/floatingactionbutton) control to display on top of Page content.

### `banner`

A [`Banner`](/docs/controls/banner) control to display at the top of the Page.

### `dialog`

An [`AlertDialog`](/docs/controls/alertdialog) control to display.

### `width`

A width of a web page or content area of a native OS window containing Flet app. This property is read-only. It's usually being used inside [`page.on_resize`](#on_resize) handler.

### `height`

A height of a web page or content area of a native OS window containing Flet app. This property is read-only. It's usually being used inside [`page.on_resize`](#on_resize) handler.

### `window_bgcolor`

🖥️ Desktop only. Sets background color of an application window.

Use together with `page.bgcolor` to make a window transparent:

```python
import flet as ft

def main(page: ft.Page):
    page.window_bgcolor = ft.colors.TRANSPARENT
    page.bgcolor = ft.colors.TRANSPARENT
    page.window_title_bar_hidden = True
    page.window_frameless = True
    page.window_left = 400
    page.window_top = 200
    page.add(ft.ElevatedButton("I'm a floating button!"))

ft.app(target=main)
```

### `window_width`

🖥️ Desktop only. Get or set the width of a native OS window containing Flet app.

### `window_height`

🖥️ Desktop only. Get or set the height of a native OS window containing Flet app.

### `window_top`

🖥️ Desktop only. Get or set a vertical position of a native OS window - a distance in virtual pixels from the top edge of the screen.

### `window_left`

🖥️ Desktop only. Get or set a horizontal position of a native OS window - a distance in virtual pixels from the left edge of the screen.

### `window_max_width`

🖥️ Desktop only. Get or set the maximum width of a native OS window containing Flet app.

### `window_max_height`

🖥️ Desktop only. Get or set the maximum height of a native OS window containing Flet app.

### `window_min_width`

🖥️ Desktop only. Get or set the minimum width of a native OS window containing Flet app.

### `window_min_height`

🖥️ Desktop only. Get or set the minimum height of a native OS window containing Flet app.

### `window_opacity`

🖥️ Desktop only. Sets the opacity of a native OS window. The value must be between `0.0` (fully transparent) and `1.0` (fully opaque).

### `window_maximized`

🖥️ Desktop only. `True` if a native OS window containing Flet app is maximized; otherwise `False`. Set this property to `True` to programmatically maximize the window and set it to `False` to unmaximize it.

### `window_minimized`

🖥️ Desktop only. `True` if a native OS window containing Flet app is minimized; otherwise `False`. Set this property to `True` to programmatically minimize the window and set it to `False` to restore it.

### `window_minimizable`

🖥️ Desktop only. Set to `False` to hide/disable native OS window's "Minimize" button. Default is `True`.

### `window_maximizable`

🖥️ Desktop only. Set to `False` to hide/disable native OS window's "Maximize" button. Default is `True`.

### `window_resizable`

🖥️ Desktop only. Set to `False` to prevent user from resizing a native OS window containing Flet app. Default is `True`.

### `window_movable`

🖥️ Desktop only. macOS only. Set to `False` to prevent user from changing a position of a native OS window containing Flet app. Default is `True`.

### `window_full_screen`

🖥️ Desktop only. Set to `True` to switch app's native OS window to a fullscreen mode. Default is `False`.

### `window_always_on_top`

🖥️ Desktop only. Sets whether the window should show always on top of other windows. Default is `False`.

### `window_prevent_close`

🖥️ Desktop only. Set to `True` to intercept the native close signal. Could be used together with [`page.on_window_event (close)`](#on_window_event) event handler and [`page.window_destroy()`](#window_destroy) to implement app exit confirmation logic - see [`page.window_destroy()`](#window_destroy) for code example.

### `window_focused`

🖥️ Desktop only. Set to `True` to focus a native OS window with a Flet app.

### `window_title_bar_hidden`

🖥️ Desktop only. Set to `True` to hide window title bar. See [`WindowDragArea`](windowdragarea) control that allows moving
an app window with hidden title bar.

### `window_title_bar_buttons_hidden`

🖥️ Desktop only. Set to `True` to hide window action buttons when a title bar is hidden. macOS only.

### `window_frameless`

🖥️ Desktop only. Set to `True` to make app window frameless.

### `window_skip_task_bar`

🖥️ Desktop only. Set to `True` to hide application from the Task Bar (Windows) or Dock (macOS).

### `window_progress_bar`

🖥️ Desktop only. The value from `0.0` to `1.0` to display a progress bar on Task Bar (Windows) or Dock (macOS) application button.

### `window_visible`

🖥️ Desktop only. Set to `True` to make application window visible. Used when the app is starting with a hidden window.

The following program starts with a hidden window and makes it visible in 3 seconds:

```python
from time import sleep

import flet as ft


def main(page: ft.Page):

    page.add(
        ft.Text("Hello!")
    )

    sleep(3)
    page.window_visible = True
    page.update()  

ft.app(target=main, view = flet.FLET_APP_HIDDEN)
```

Note `view = flet.FLET_APP_HIDDEN` which hides app window on start.

### `pubsub`

A simple PubSub implementation for passing messages between app sessions.

#### `subscribe(handler)`

Subscribe current app session for broadcast (no topic) messages. `handler` is a function or method with a single `message` argument, for example:

```python
def main(page: ft.Page):

    def on_broadcast_message(message):
        print(message)

    page.pubsub.subscribe(on_broadcast_message)
```

#### `subscribe_topic(topic, handler)`

Subscribe current app session to a specific topic. `handler` is a function or method with two arguments: `topic` and `message`, for example:

```python
def main(page: ft.Page):

    def on_message(topic, message):
        print(topic, message)

    page.pubsub.subscribe_topic("general", on_message)
```

#### `send_all(message)`

Broadcast message to all subscribers. `message` could be anything: a simple literal or a class instance, for example:

```python
@dataclass
class Message:
    user: str
    text: str

def main(page: ft.Page):

    def on_broadcast_message(message):
        page.add(ft.Text(f"{message.user}: {message.text}"))

    page.pubsub.subscribe(on_broadcast_message)

    def on_send_click(e):
        page.pubsub.send_all(Message("John", "Hello, all!"))

    page.add(ft.ElevatedButton(text="Send message", on_click=on_send_click))
```

#### `send_all_on_topic(topic, message)`

Send message to all subscribers on specific topic.

#### `send_others(message)`

Broadcast message to all subscribers except sender.

#### `send_others_on_topic(topic, message)`

Send message to all subscribers on specific topic except sender.

#### `unsubscribe()`

Unsubscribe current app session from broadcast messages, for example:

```python
@dataclass
class Message:
    user: str
    text: str

def main(page: ft.Page):

    def on_leave_click(e):
        page.pubsub.unsubscribe()

    page.add(ft.ElevatedButton(text="Leave chat", on_click=on_leave_click))
```

#### `unsubscribe_topic(topic)`

Unsubscribe current app session from specific topic.

#### `unsubscribe_all()`

Unsubscribe current app session from broadcast messages and all topics, for example:

```python
def main(page: ft.Page):
    def client_exited(e):
        page.pubsub.unsubscribe_all()

    page.on_close = client_exited
```

## Methods

### `go(route)`

A helper method that updates [`page.route`](#route), calls [`page.on_route_change`](#on_route_change) event handler to update views and finally calls `page.update()`.

### `set_clipboard(data)`

Set clipboard data on a client side (user's web browser or a desktop), for example:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.set_clipboard("This value comes from Flet app")
```

</TabItem>
</Tabs>

### `get_clipboard()`

Get the last text value saved to a clipboard on a client side.

### `launch_url(url)`

Opens `url` in a new browser window.

Optional method arguments:

* `web_window_name` - window tab/name to open URL in: `_self` - the same tab, `_blank` - a new tab or `<your name>` - a named tab.
* `web_popup_window` - set to `True` to display a URL in a browser popup window. Default is `False`.
* `window_width` - optional, popup window width.
* `window_height` - optional, popup window height.

### `show_snack_bar(snack_bar)`

Displays SnackBar at the bottom of the page.

`snack_bar` - A [`SnackBar`](/docs/controls/snackbar) control to display at the bottom of the Page.

### `page.get_upload_url(file_name, expires)`

Generates presigned upload URL for built-in upload storage:

* `file_name` - a relative to upload storage path.
* `expires` - a URL time-to-live in seconds.

For example:

```python
upload_url = page.get_upload_url("dir/filename.ext", 60)
```

To enable built-in upload storage provide `upload_dir` argument to `flet.app()` call:

```python
ft.app(target=main, upload_dir="uploads")
```

### `close_in_app_web_view()`

📱 Mobile only. Closes in-app web view opened with `launch_url()`.

### `window_to_front()`

🖥️ Desktop only. Brings application window to a foreground.

### `window_center()`

🖥️ Desktop only. Move app's native OS window to a center of the screen.

### `window_close()`

🖥️ Desktop only. Closes application window.

### `window_destroy()`

🖥️ Desktop only. Forces closing app's native OS window. This method could be used with `page.window_prevent_close = True` to implement app exit confirmation:

```python
import flet as ft

def main(page: ft.Page):
    page.title = "MyApp"

    def window_event(e):
        if e.data == "close":
            page.dialog = confirm_dialog
            confirm_dialog.open = True
            page.update()

    page.window_prevent_close = True
    page.on_window_event = window_event

    def yes_click(e):
        page.window_destroy()

    def no_click(e):
        confirm_dialog.open = False
        page.update()

    confirm_dialog = ft.AlertDialog(
        modal=True,
        title=ft.Text("Please confirm"),
        content=ft.Text("Do you really want to exit this app?"),
        actions=[
            ft.ElevatedButton("Yes", on_click=yes_click),
            ft.OutlinedButton("No", on_click=no_click),
        ],
        actions_alignment = "end",
    )

    page.add(ft.Text('Try exiting this app by clicking window\'s "Close" button!'))

ft.app(target=main)
```

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

### `on_window_event`

Fires when an application's native OS window changes its state: position, size, maximized, minimized, etc.

`data` contains window's event name:

* `close`
* `focus`
* `blur`
* `maximize`
* `unmaximize`
* `minimize`
* `restore`
* `resize`
* `resized` (macOS and Windows only)
* `move`
* `moved` (macOS and Windows only)
* `enterFullScreen`
* `leaveFullScreen`

### `on_keyboard_event`

Fires when a keyboard key is pressed. Event object `e` is an instance of `KeyboardEvent` class:

```python
@dataclass
class ft.KeyboardEvent:
    key: str
    shift: bool
    ctrl: bool
    alt: bool
    meta: bool
```

Check a [simple usage example](https://github.com/flet-dev/examples/blob/main/python/controls/page/keyboard-events.py).

### `on_route_change`

Fires when page route changes either programmatically, by editing application URL or using browser Back/Forward buttons.

Event object `e` is an instance of `RouteChangeEvent` class:

```python
class RouteChangeEvent(ControlEvent):
    route: str     # a new page root
```

### `on_view_pop`

Fires when the user clicks automatic "Back" button in [`AppBar`](/docs/controls/appbar) control.

Event object `e` is an instance of `ViewPopEvent` class:

```python
class ViewPopEvent(ControlEvent):
    view: View
```

where `view` is an instance of [`View`](/docs/controls/view) control that contains the AppBar.

### `on_connect`

Fires when a web user (re-)connects to a page session. It is not triggered when an app page is first opened, but is triggered when the page is refreshed, or Flet web client has re-connected after computer was unlocked. This event could be used to detect when a web user becomes "online".

### `on_disconnect`

Fires when a web user disconnects from a page session, i.e. closes browser tab/window.

### `on_close`

Fires when a session has expired after configured amount of time (60 minutes by default).