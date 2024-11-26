---
title: Page
sidebar_label: Page
---

Page is a container for [`View`](/docs/controls/view) controls.

A page instance and the root view are automatically created when a new user session started.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Properties

### `auto_scroll`

`True` if scrollbar should automatically move its position to the end when children updated. Must be `False` for `scroll_to()` method to work.

### `appbar`

An [`AppBar`](/docs/controls/appbar) control to display at the top of the Page.

### ~~`banner`~~

A [`Banner`](/docs/controls/banner) control to display at the top of the Page.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.overlay.append(banner)`](#overlay) instead.**

### `bgcolor`

Background color of the Page.

A color value could be a hex value in `#ARGB` format (e.g. `#FFCC0000`), `#RGB` format (e.g. `#CC0000`) or a named color from `flet.colors` module.

### `bottom_appbar`

[`BottomAppBar`](/docs/controls/bottomappbar) control to display at the bottom of the Page. If both [`bottom_appbar`](#bottom_appbar) and [`navigation_bar`](#navigation_bar) properties are provided, `NavigationBar` will be displayed.

### ~~`bottom_sheet`~~

[`BottomSheet`](/docs/controls/bottomsheet) control to display.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.overlay.append(bottom_sheet)`](#overlay) instead.**

### `browser_context_menu`

Used to enable or disable the context menu that appears when the user right-clicks on the web page.

Value is of type [`BrowserContextMenu`](/docs/reference/types/browsercontextmenu).

🌎 Web only.

### `client_ip`

IP address of the connected user.

🌎 Web only.

### `client_user_agent`

Browser details of the connected user.

🌎 Web only.

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

or to get the same result as above using [`page.add()`](#addcontrols) method

To remove the top most control on the page:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.controls.pop()
page.update()
```

</TabItem>
</Tabs>

### `dark_theme`

Customizes the theme of the application when in dark theme mode.

Value is an instance of the `Theme()` class - more information in the [theming](/docs/cookbook/theming) guide.

### `debug`

`True` if Flutter client of Flet app is running in debug mode.

### `decoration`

The background decoration.

Value is of type [`BoxDecoration`](/docs/reference/types/boxdecoration).

### `design`

Reserved for future use.

### ~~`dialog`~~

An [`AlertDialog`](/docs/controls/alertdialog) control to display.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.overlay.append(dialog)`](#overlay) instead.**

### `drawer`

A [`NavigationDrawer`](/docs/controls/navigationdrawer) control to display as a panel sliding from the start edge of the page.

### `end_drawer`

A [`NavigationDrawer`](/docs/controls/navigationdrawer) control to display as a panel sliding from the end edge of the page.

### `floating_action_button`

A [`FloatingActionButton`](/docs/controls/floatingactionbutton) control to display on top of Page content.

### `floating_action_button_location`

Defines a position for the `FloatingActionButton`.

Value is of type [`FloatingActionButtonLocation`](/docs/reference/types/floatingactionbuttonlocation) enum.
Default is `FloatingActionButtonLocation.END_FLOAT`.

### `fonts`

Defines the custom fonts to be used in the application.

Value is a dictionary, in which the keys represent the font family name used for reference and the values
- **Key**: The font family name used for reference.
- **Value**: The font source, either an absolute URL or a relative path to a local asset. The following font file formats are supported `.ttc`, `.ttf` and `.otf`.

Usage example [here](/docs/cookbook/fonts#importing-fonts).

### `height`

A height of a web page or content area of a native OS window containing Flet app. This property is read-only. It's usually being used inside [`page.on_resize`](#on_resize) handler.

### `horizontal_alignment`

How the child Controls should be placed horizontally.

Property value is [`CrossAxisAlignment`](/docs/reference/types/crossaxisalignment) enum. Default is `START`.

### `locale_configuration`

A locale configuration for the app. 

Value is of type [`LocaleConfiguration`](/docs/reference/types/localeconfiguration).

### `media`

Provides details about app media (screen, window). See [MediaQueryData](https://api.flutter.dev/flutter/widgets/MediaQueryData-class.html) in Flutter docs for more info.

Value is of type [`PageMediaData`](/docs/reference/types/pagemediadata).

:::note
In most cases you should be fine by wrapping your content into [`SafeArea`](/docs/controls/safearea) control.
:::

### `name`

Page name as specified in `ft.app()` call. Page name is set when Flet app is running as web app. This is a portion of the URL after host name.

### `navigation_bar`

[`NavigationBar`](/docs/controls/navigationbar) control to display at the bottom of the page. If both [`bottom_appbar`](#bottom_appbar) and [`navigation_bar`](#navigation_bar) properties are provided, `NavigationBar` will be displayed.

### `on_scroll_interval`

Throttling in milliseconds for `on_scroll` event.

Defaults to `10`.

### `overlay`

A list of `Control`s displayed as a stack on top of main page contents.

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

Value is of type [`Padding`](/docs/reference/types/padding).

### `platform`

Operating system the application is running on.

Value is of type [`PagePlatform`](/docs/reference/types/pageplatform).

This property can be used to create adaptive UI with different controls depending on the operating system:
```python
def main(page: ft.Page):
    if page.platform == ft.PagePlatform.MACOS:
        page.add(ft.CupertinoDialogAction("Cupertino Button"))
    else:
        page.add(ft.TextButton("Material Button"))
```

You can also set this property for testing purposes:
```python
import flet as ft


def main(page):
    def set_android(e):
        page.platform = ft.PagePlatform.ANDROID
        page.update()
        print("New platform:", page.platform)

    def set_ios(e):
        page.platform = "ios"
        page.update()
        print("New platform:", page.platform)

    page.add(
        ft.Switch(label="Switch A", adaptive=True),
        ft.ElevatedButton("Set Android", on_click=set_android),
        ft.ElevatedButton("Set iOS", on_click=set_ios),
    )

    print("Default platform:", page.platform)


ft.app(main)
```

### `platform_brightness`

The current brightness mode of the host platform.

Value is read-only and of type [`Brightness`](/docs/reference/types/brightness).

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

### `pwa`

`True` if the application is running as Progressive Web App (PWA).

Value is read-only.

### `query`

A part of app URL after `?`. The value is an instance of `QueryString` with helper methods for fetching query parameters.

### `route`

Get or sets page's navigation route. See [Navigation and routing](/docs/getting-started/navigation-and-routing) section for 
more information and examples.

### `rtl`

`True` to set text direction to right-to-left.

Defaults to `False`.

### `scroll`

Enables a vertical scrolling for the Page to prevent its content overflow.

Value is of type [`ScrollMode`](/docs/reference/types/scrollmode).

### `session`

A simple key-value storage for session data.

### `session_id`

A unique ID of user's session. This property is read-only.

### ~~`snack_bar`~~

A [`SnackBar`](/docs/controls/snackbar) control to display.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.overlay.append(snack_bar)`](#overlay) instead.**

### `spacing`

Vertical spacing between controls on the Page. Default value is 10 virtual pixels. Spacing is applied only when `alignment` is set to `start`, `end` or `center`.

### ~~`splash`~~

A `Control` that will be displayed on top of Page contents. [`ProgressBar`](/docs/controls/progressbar) or [`ProgressRing`](/docs/controls/progressring) could be used as an indicator for some lengthy operation, for example:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from time import sleep
import flet as ft


def main(page: ft.Page):
    progress_bar = ft.ProgressBar(visible=False)
    page.overlay.append(progress_bar)

    def button_click(e):
        progress_bar.visible = True
        e.control.disabled = True
        page.update()
        sleep(3)
        progress_bar.visible = False
        e.control.disabled = False
        page.update()

    page.add(ft.ElevatedButton("Do some lengthy task!", on_click=button_click))


ft.app(main)
```

</TabItem>
</Tabs>

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.overlay.append(splash)`](#overlay) instead.**

### `show_semantics_debugger`

`True` turns on an overlay that shows the accessibility information reported by the framework.

### `theme`

Customizes the theme of the application when in light theme mode. Currently, a theme can only be automatically generated from a "seed" color. For example, to generate light theme from a green color.

Value is an instance of the `Theme()` class - more information in the [theming](/docs/cookbook/theming) guide.

### `theme_mode`

The page's theme mode.

Value is of type [`ThemeMode`](/docs/reference/types/thememode) and defaults to `ThemeMode.SYSTEM`.

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

### `url`

The complete web app's URL.

### `vertical_alignment`

How the child Controls should be placed vertically.

Value is of type [`MainAxisAlignment`](/docs/reference/types/mainaxisalignment) and defaults
to `MainAxisAlignment.START`.

### `views`

A list of [`View`](/docs/controls/view) controls to build navigation history.

The last view in the list is the one displayed on a page.

The first view is a "root" view which cannot be popped.

### `web`

`True` if the application is running in the web browser.

### `width`

A width of a web page or content area of a native OS window containing Flet app. This property is read-only. It's usually being used inside [`page.on_resize`](#on_resize) handler.

### `window`

A class with properties/methods/events to control app's native OS window.

Value is of type [`Window`](/docs/reference/types/window).

### ~~`window_always_on_top`~~

🖥️ Desktop only. Sets whether the window should show always on top of other windows.

Defaults to `False`.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.always_on_top`](#window) instead.**

### ~~`window_bgcolor`~~

🖥️ Desktop only. Sets background color of an application window.

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

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.bgcolor`](#window) instead.**

### ~~`window_focused`~~

🖥️ Desktop only. Set to `True` to focus a native OS window with a Flet app.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.focused`](#window) instead.**

### ~~`window_frameless`~~

🖥️ Desktop only. Set to `True` to make app window frameless.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.frameless`](#window) instead.**

### ~~`window_full_screen`~~

🖥️ Desktop only. Set to `True` to switch app's native OS window to a fullscreen mode.

Defaults to `False`.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.full_screen`](#window) instead.**

### ~~`window_height`~~

🖥️ Desktop only. Get or set the height of a native OS window containing Flet app.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.height`](#window) instead.**

### ~~`window_left`~~

🖥️ Desktop only. Get or set a horizontal position of a native OS window - a distance in virtual pixels from the left edge of the screen.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.left`](#window) instead.**

### ~~`window_maximizable`~~

🖥️ Desktop only. Set to `False` to hide/disable native OS window's "Maximize" button.

Defaults to `True`.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.maximizable`](#window) instead.**

### ~~`window_maximized`~~

🖥️ Desktop only. `True` if a native OS window containing Flet app is maximized; otherwise `False`. Set this property to `True` to programmatically maximize the window and set it to `False` to unmaximize it.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.maximized`](#window) instead.**

### ~~`window_max_height`~~

🖥️ Desktop only. Get or set the maximum height of a native OS window containing Flet app.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.max_height`](#window) instead.**

### ~~`window_max_width`~~

🖥️ Desktop only. Get or set the maximum width of a native OS window containing Flet app.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.max_width`](#window) instead.**

### ~~`window_minimizable`~~

🖥️ Desktop only. Set to `False` to hide/disable native OS window's "Minimize" button.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.minimizable`](#window) instead.**

Defaults to `True`.

### ~~`window_minimized`~~

🖥️ Desktop only. `True` if a native OS window containing Flet app is minimized; otherwise `False`. Set this property to `True` to programmatically minimize the window and set it to `False` to restore it.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.minimized`](#window) instead.**

### ~~`window_min_height`~~

🖥️ Desktop only. Get or set the minimum height of a native OS window containing Flet app.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.min_height`](#window) instead.**

### ~~`window_min_width`~~

🖥️ Desktop only. Get or set the minimum width of a native OS window containing Flet app.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.min_width`](#window) instead.**

### ~~`window_movable`~~

🖥️ Desktop only. macOS only. Set to `False` to prevent user from changing a position of a native OS window containing
Flet app.

Defaults to `True`.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.movable`](#window) instead.**

### ~~`window_opacity`~~

🖥️ Desktop only. Sets the opacity of a native OS window. The value must be between `0.0` (fully transparent) and `1.0` (fully opaque).

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.opacity`](#window) instead.**

### ~~`window_resizable`~~

🖥️ Desktop only. Set to `False` to prevent user from resizing a native OS window containing Flet app.

Defaults to `True`.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.resizable`](#window) instead.**

### ~~`window_title_bar_hidden`~~

🖥️ Desktop only. Set to `True` to hide window title bar. See [`WindowDragArea`](/docs/controls/windowdragarea) control that allows moving
an app window with hidden title bar.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.title_bar_hidden`](#window) instead.**

### ~~`window_title_bar_buttons_hidden`~~

🖥️ Desktop only. Set to `True` to hide window action buttons when a title bar is hidden.

Has effect on macOS only.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.title_bar_buttons_hidden`](#window) instead.**

### ~~`window_top`~~

🖥️ Desktop only. Get or set a vertical position of a native OS window - a distance in virtual pixels from the top edge of the screen.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.top`](#window) instead.**

### ~~`window_prevent_close`~~

🖥️ Desktop only. Set to `True` to intercept the native close signal. Could be used together with [`page.on_window_event (close)`](#on_window_event) event handler and [`page.window_destroy()`](#window_destroy) to implement app exit confirmation logic - see [`page.window_destroy()`](#window_destroy) for code example.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.prevent_close`](#window) instead.**

### ~~`window_progress_bar`~~

🖥️ Desktop only. The value from `0.0` to `1.0` to display a progress bar on Task Bar (Windows) or Dock (macOS) application button.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.progress_bar`](#window) instead.**

### ~~`window_skip_task_bar`~~

🖥️ Desktop only. Set to `True` to hide application from the Task Bar (Windows) or Dock (macOS).

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.skip_task_bar`](#window) instead.**

### ~~`window_visible`~~

🖥️ Desktop only. Set to `True` to make application window visible. Used when the app is starting with a hidden window.

The following program starts with a hidden window and makes it visible in 3 seconds:

```python
from time import sleep

import flet as ft

def main(page: ft.Page):
    page.add(ft.Text("Hello!"))

    sleep(3)
    page.window.visible = True
    page.update()  

ft.app(main, view=ft.AppView.FLET_APP_HIDDEN)
```

Note `view=ft.AppView.FLET_APP_HIDDEN` which hides app window on start.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.visible`](#window) instead.**

### ~~`window_width`~~

🖥️ Desktop only. Get or set the width of a native OS window containing Flet app.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.width`](#window) instead.**

## Methods

### `add(*controls)`

Adds controls to page

```python
page.add(ft.Text("Hello!"), ft.FilledButton("Button"))
```

### `can_launch_url(url)`

Checks whether the specified URL can be handled by some app installed on the device.

Returns `True` if it is possible to verify that there is a handler available. A `False` return value can indicate either that there is no handler available, or that the application does not have permission to check. For example:

* On recent versions of Android and iOS, this will always return `False` unless the application has been configuration to allow querying the system for launch support.
* On web, this will always return `False` except for a few specific schemes that are always assumed to be supported (such as http(s)), as web pages are never allowed to query installed applications.

### `close(control)`

Closes the provided control.

It sets the `control.open=False` and calls `update()`.

### ~~`close_banner()`~~

Closes active banner.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.close(banner)`](#closecontrol) instead.**

### ~~`close_bottom_sheet()`~~

Closes active bottom sheet.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.close(bottom_sheet)`](#closecontrol) instead.**

### ~~`close_dialog()`~~

Closes active dialog.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.close(dialog)`](#closecontrol) instead.**

### ~~`close_drawer()`~~

Closes active drawer.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.close(drawer)`](#closecontrol) instead.**

### ~~`close_end_drawer()`~~

Closes active end drawer.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.close(end_drawer)`](#closecontrol) instead.**

### ~~`close_snack_bar()`~~

Closes active end drawer.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.close(snack_bar)`](#closecontrol) instead.**

### `close_in_app_web_view()`

Closes in-app web view opened with `launch_url()`.

📱 Mobile only. 

### `error(message)`


### `fetch_page_details()`


### `get_clipboard()`

Get the last text value saved to a clipboard on a client side.

### `get_control(id)`


### `get_upload_url(file_name, expires)`

Generates presigned upload URL for built-in upload storage:

* `file_name` - a relative to upload storage path.
* `expires` - a URL time-to-live in seconds.

For example:

```python
upload_url = page.get_upload_url("dir/filename.ext", 60)
```

To enable built-in upload storage provide `upload_dir` argument to `flet.app()` call:

```python
ft.app(main, upload_dir="uploads")
```

### `go(route)`

A helper method that updates [`page.route`](#route), calls [`page.on_route_change`](#on_route_change) event handler to update views and finally calls `page.update()`.

### `insert(at, *controls)`

Inserts controls at specific index of `page.controls` list.

### `launch_url(url)`

Opens `url` in a new browser window.

Optional method arguments:

* `web_window_name` - window tab/name to open URL in: [`UrlTarget.SELF`](/docs/reference/types/urltarget#self) - the
  same browser tab, [`UrlTarget.BLANK`](/docs/reference/types/urltarget#blank) - a new browser tab (or in external
  application on mobile device) or `<your name>` - a named tab.
* `web_popup_window` - set to `True` to display a URL in a browser popup window. Defaults to `False`.
* `window_width` - optional, popup window width.
* `window_height` - optional, popup window height.

### `login(provider, fetch_user, fetch_groups, scope, saved_token, on_open_authorization_url, complete_page_html, redirect_to_page, authorization)`

Starts OAuth flow. See [Authentication](/docs/cookbook/authentication) guide for more information and examples.

### `logout()`

Clears current authentication context. See [Authentication](/docs/cookbook/authentication#signing-out) guide for more information and examples.

### `open(control)`

Opens the provided control.

Adds this control to the [`page.overlay`](#overlay), sets the `control.open=True`, then calls `update()`.

### `remove(*controls)`

Removes specific controls from `page.controls` list.

### `remove_at(index)`

Remove controls from `page.controls` list at specific index.

### `run_task(handler, *args, **kwargs)`

Run `handler` coroutine as a new Task in the event loop associated with the current page.

### `run_thread(handler, *args)`

Run `handler` function as a new Thread in the executor associated with the current page.

### `scroll_to(offset, delta, key, duration, curve)`

Moves scroll position to either absolute `offset`, relative `delta` or jump to the control with specified `key`.

See [`Column.scroll_to()`](/docs/controls/column#scroll_tooffset-delta-key-duration-curve) for method details and examples.

### `set_clipboard(data)`

Set clipboard data on a client side (user's web browser or a desktop), for example:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.set_clipboard("This value comes from Flet app")
```

</TabItem>
</Tabs>

### ~~`show_banner(banner: Banner)`~~

Displays the banner at the top of the page.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.open(banner)`](#opencontrol) instead.**

### ~~`show_bottom_sheet(bottom_sheet: BottomSheet)`~~

Displays bottom sheet at the bottom of the page.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.open(bottom_sheet)`](#opencontrol) instead.**

### ~~`show_dialog(dialog: AlertDialog)`~~

Displays dialog.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.open(dialog)`](#opencontrol) instead.**

### ~~`show_drawer(drawer: NavigationDialog)`~~

Displays [`drawer`](#drawer).

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.open(drawer)`](#opencontrol) instead.**

### ~~`show_end_drawer(drawer: NavigationDialog)`~~

Displays [`end_drawer`](#end_drawer).

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.open(end_drawer)`](#opencontrol) instead.**

### ~~`show_snack_bar(snack_bar: SnackBar)`~~

Displays [`SnackBar`](/docs/controls/snackbar) at the bottom of the page.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`page.open(snack_bar)`](#opencontrol) instead.*

### ~~`window_center()`~~

🖥️ Desktop only. Move app's native OS window to a center of the screen.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.center()`](#window) instead.**

### ~~`window_close()`~~

🖥️ Desktop only. Closes application window.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.close()`](#window) instead.**

### ~~`window_destroy()`~~

🖥️ Desktop only. Forces closing app's native OS window. This method could be used with `page.window_prevent_close = True` to implement app exit confirmation:

```python
import flet as ft

def main(page: ft.Page):
    page.title = "MyApp"

    def handle_window_event(e):
        if e.data == "close":
            page.open(confirm_dialog)

    page.window.prevent_close = True
    page.window.on_event = handle_window_event

    def handle_yes(e):
        page.window.destroy()

    def handle_no(e):
        page.close(confirm_dialog)

    confirm_dialog = ft.AlertDialog(
        modal=True,
        title=ft.Text("Please confirm"),
        content=ft.Text("Do you really want to exit this app?"),
        actions=[
            ft.ElevatedButton("Yes", on_click=handle_yes),
            ft.OutlinedButton("No", on_click=handle_no),
        ],
        actions_alignment=ft.MainAxisAlignment.END,
    )

    page.add(ft.Text('Try exiting this app by clicking window\'s "Close" button!'))

ft.app(main)
```

### ~~`window_to_front()`~~

🖥️ Desktop only. Brings application window to a foreground.

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.to_front()`](#window) instead.**

## Events

### `on_app_lifecycle_state_change`

Triggers when app lifecycle state changes.

You can use this event to know when the app becomes active (brought to the front) to update UI with the latest information. This event works on iOS, Android, all desktop platforms and web.

Event handler argument is of type [`AppLifecycleStateChangeEvent`](/docs/reference/types/applifecyclestatechangeevent).

### `on_close`

Fires when a session has expired after configured amount of time (60 minutes by default).

### `on_connect`

Fires when a web user (re-)connects to a page session. It is not triggered when an app page is first opened, but is triggered when the page is refreshed, or Flet web client has re-connected after computer was unlocked. This event could be used to detect when a web user becomes "online".

### `on_disconnect`

Fires when a web user disconnects from a page session, i.e. closes browser tab/window.

### `on_error`

Fires when unhandled exception occurs.

### `on_keyboard_event`

Fires when a keyboard key is pressed. 

Event handler argument is of type [`KeyboardEvent`](/docs/reference/types/keyboardevent).

### `on_login`

Fires upon successful or failed OAuth authorization flow. 

See [Authentication](/docs/cookbook/authentication#checking-authentication-results) guide for more information and examples.

### `on_logout`

Fires after `page.logout()` call.

### `on_media_change`

Fires when `page.media` has changed. 

Event handler argument is of type [`PageMediaData`](/docs/reference/types/pagemediadata).

### `on_platform_brigthness_change`

Fires when brightness of app host platform has changed.

### ~~`on_resize`~~

Fires when a browser or native OS window containing Flet app is resized by a user, for example:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
def page_resize(e):
    print("New page size:", page.window.width, page.window_height)

page.on_resize = page_resize
```

</TabItem>
</Tabs>

Event handler argument is of type [`WindowResizeEvent`](/docs/reference/types/windowresizeevent).

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.on_resized`](#on_resized) instead.**

### `on_resized`

Fires when a browser or native OS window containing Flet app is resized by a user, for example:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
def page_resized(e):
    print("New page size:", page.window.width, page.window_height)

page.on_resized = page_resized
```

Event handler argument is of type [`WindowResizeEvent`](/docs/reference/types/windowresizeevent).

</TabItem>
</Tabs>

### `on_route_change`

Fires when page route changes either programmatically, by editing application URL or using browser Back/Forward buttons.

Event handler argument is of type [`RouteChangeEvent`](/docs/reference/types/routechangeevent).

### `on_scroll`

Fires when page's scroll position is changed by a user.

Event handler argument is of type [`OnScrollEvent`](/docs/reference/types/onscrollevent).

### `on_view_pop`

Fires when the user clicks automatic "Back" button in [`AppBar`](/docs/controls/appbar) control.

Event handler argument is of type [`ViewPopEvent`](/docs/reference/types/viewpopevent).

### ~~`on_window_event`~~

Fires when an application's native OS window changes its state: position, size, maximized, minimized, etc.

Event handler argument is of type [`WindowEvent`](/docs/reference/types/windowevent).

**Deprecated in v0.23.0 and will be removed in v0.26.0. Use [`Page.window.on_event`](#window) instead.**

## Magic methods

### `__contains__(control)`

Checks if a control is present on the page, for example:

```python
import flet as ft


def main(page: ft.Page):
    hello = ft.Text("Hello, World!")
    page.add(hello)
    print(hello in page)  # True
    
    
ft.app(main)
```
