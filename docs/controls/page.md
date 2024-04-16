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

### `banner`

A [`Banner`](/docs/controls/banner) control to display at the top of the Page.

### `bgcolor`

Background color of the Page.

A color value could be a hex value in `#ARGB` format (e.g. `#FFCC0000`), `#RGB` format (e.g. `#CC0000`) or a named color from `flet.colors` module.

### `bottom_appbar`

[`BottomAppBar`](/docs/controls/bottomappbar) control to display at the bottom of the Page. If both [`bottom_appbar`](#bottom_appbar) and [`navigation_bar`](#navigation_bar) properties are provided, `NavigationBar` will be displayed.

### `bottom_sheet`

[`BottomSheet`](/docs/controls/bottomsheet) control to display.

### `client_ip`

🌎 Web only. IP address of the connected user.

### `client_user_agent`

🌎 Web only. Browser details of the connected user.

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

### `dark_theme`

Customizes the theme of the application when in dark theme mode.

Value is an instance of the `Theme()` class - more information in the [theming](/docs/cookbook/theming) guide.

### `debug`

`True` if Flutter client of Flet app is running in debug mode.

### `design`

Reserved for future use.

### `dialog`

An [`AlertDialog`](/docs/controls/alertdialog) control to display.

### `drawer`

A [`NavigationDrawer`](/docs/controls/navigationdrawer) control to display as a panel sliding from the start edge of the page.

### `end_drawer`

A [`NavigationDrawer`](/docs/controls/navigationdrawer) control to display as a panel sliding from the end edge of the page.

### `floating_action_button`

A [`FloatingActionButton`](/docs/controls/floatingactionbutton) control to display on top of Page content.

### `floating_action_button_location`

Defines a position for the `FloatingActionButton`.

Property value is [`FloatingActionButtonLocation`](/docs/reference/types/floatingactionbuttonlocation) enum. Default is `END_FLOAT`.

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

    page.theme = Theme(font_family="Kanit")

    page.add(
      ft.Text("This is rendered with Kanit font"),
      ft.Text("This is Open Sans font example", font_family="Open Sans")
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

### `height`

A height of a web page or content area of a native OS window containing Flet app. This property is read-only. It's usually being used inside [`page.on_resize`](#on_resize) handler.

### `horizontal_alignment`

How the child Controls should be placed horizontally.

Property value is [`CrossAxisAlignment`](/docs/reference/types/crossaxisalignment) enum. Default is `START`.

### `locale_configuration`

A locale configuration for the app. Value is an instance of `LocaleConfiguration` class which has the following
properties:

* `supported_locales` - a list of `Locale`s that the app plans to support. If the provided value is `None` or list is
  empty, this property internally defaults to `[Locale("en", "US")]` (American English locale) by default.
* `current_locale` - the current `Locale` of the app. If the provided locale is not present in `supported_locales`, then
  this property will be set to `supported_locales[0]` (the first item of the list).

`Locale` class has the following properties:

* `language_code` - the language code of the locale.
* `country_code` - the country code of the locale.
* `script_code` - the script code of the locale.

### `media`

Provides details about app media (screen, window). See [MediaQueryData](https://api.flutter.dev/flutter/widgets/MediaQueryData-class.html) in Flutter docs for more info.

The value of this property is an instance of `PageMediaData` class with the following fields:

* `padding` (of [`Padding`](/docs/reference/types/padding) type) - The parts of the display that are partially obscured by system UI, typically by the hardware display "notches" or the system status bar.
* `view_padding` (of [`Padding`](/docs/reference/types/padding) type) - The parts of the display that are partially obscured by system UI, typically by the hardware display "notches" or the system status bar.
* `view_insets` (of [`Padding`](/docs/reference/types/padding) type) - The parts of the display that are completely obscured by system UI, typically by the device's keyboard.

:::note
In the most cases you should be fine by wrapping your content into [`SafeArea`](/docs/controls/safearea) control.
:::

🎬 [Watch this video](https://www.youtube.com/watch?v=ceCo8U0XHqw) explaining `padding`, `view_padding` and `view_insets`.

### `name`

Page name as specified in `ft.app()` call. Page name is set when Flet app is running as web app. This is a portion of the URL after host name.

### `navigation_bar`

[`NavigationBar`](/docs/controls/navigationbar) control to display at the bottom of the page. If both [`bottom_appbar`](#bottom_appbar) and [`navigation_bar`](#navigation_bar) properties are provided, `NavigationBar` will be displayed.

### `on_scroll_interval`

Throttling in milliseconds for `on_scroll` event. Default is `10`.

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

Padding is an instance of [`padding.Padding`](/docs/reference/types/padding) class.

### `platform`

Operating system the application is running on.

Property value is `PagePlatform` enum with the following values:

* `IOS`
* `ANDROID`
* `MACOS`
* `WINDOWS`
* `LINUX`

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


ft.app(target=main)
```

### `platform_brightness`

The current brightness mode of the host platform: `ft.Brightness.LIGHT` or `ft.Brightness.DARK`. Read-only.

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

`True` if the application is running as Progressive Web App (PWA). Read-only.

### `query`

A part of app URL after `?`. The value is an instance of `QueryString` with helper methods for fetching query parameters.

### `route`

Get or sets page's navigation route. See [Navigation and routing](/docs/getting-started/navigation-and-routing) section for 
more information and examples.

### `rtl`

`True` to set text direction to right-to-left. Default is `False`.

### `scroll`

Enables a vertical scrolling for the Page to prevent its content overflow.

Property value is an optional [`ScrollMode`](/docs/reference/types/scrollmode) enum with `None` as default.

### `session`

A simple KV storage for session data.

### `session_id`

A unique ID of user's session. This property is read-only.

### `spacing`

Vertical spacing between controls on the Page. Default value is 10 virtual pixels. Spacing is applied only when `alignment` is set to `start`, `end` or `center`.

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

### `show_semantics_debugger`

`True` turns on an overlay that shows the accessibility information reported by the framework.

### `theme`

Customizes the theme of the application when in light theme mode. Currently, a theme can only be automatically generated from a "seed" color. For example, to generate light theme from a green color.

Value is an instance of the `Theme()` class - more information in the [theming](/docs/cookbook/theming) guide.

### `theme_mode`

Page theme.

The value is [`ThemeMode`](/docs/reference/types/thememode) enum. Default is `SYSTEM`.

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

Property value is [`MainAxisAlignment`](/docs/reference/types/mainaxisalignment) enum.

For example, `MainAxisAlignment.START`, the default, places the children at the top of a Page.

### `views`

A list of [`View`](/docs/controls/view) controls to build navigation history.

The last view in the list is the one displayed on a page.

The first view is a "root" view which cannot be popped.

### `web`

`True` if the application is running in the web browser.

### `width`

A width of a web page or content area of a native OS window containing Flet app. This property is read-only. It's usually being used inside [`page.on_resize`](#on_resize) handler.

### `window_always_on_top`

🖥️ Desktop only. Sets whether the window should show always on top of other windows. Default is `False`.

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

### `window_focused`

🖥️ Desktop only. Set to `True` to focus a native OS window with a Flet app.

### `window_frameless`

🖥️ Desktop only. Set to `True` to make app window frameless.

### `window_full_screen`

🖥️ Desktop only. Set to `True` to switch app's native OS window to a fullscreen mode. Default is `False`.

### `window_height`

🖥️ Desktop only. Get or set the height of a native OS window containing Flet app.

### `window_left`

🖥️ Desktop only. Get or set a horizontal position of a native OS window - a distance in virtual pixels from the left edge of the screen.

### `window_maximizable`

🖥️ Desktop only. Set to `False` to hide/disable native OS window's "Maximize" button. Default is `True`.

### `window_maximized`

🖥️ Desktop only. `True` if a native OS window containing Flet app is maximized; otherwise `False`. Set this property to `True` to programmatically maximize the window and set it to `False` to unmaximize it.

### `window_max_height`

🖥️ Desktop only. Get or set the maximum height of a native OS window containing Flet app.

### `window_max_width`

🖥️ Desktop only. Get or set the maximum width of a native OS window containing Flet app.

### `window_minimizable`

🖥️ Desktop only. Set to `False` to hide/disable native OS window's "Minimize" button. Default is `True`.

### `window_minimized`

🖥️ Desktop only. `True` if a native OS window containing Flet app is minimized; otherwise `False`. Set this property to `True` to programmatically minimize the window and set it to `False` to restore it.

### `window_min_height`

🖥️ Desktop only. Get or set the minimum height of a native OS window containing Flet app.

### `window_min_width`

🖥️ Desktop only. Get or set the minimum width of a native OS window containing Flet app.

### `window_movable`

🖥️ Desktop only. macOS only. Set to `False` to prevent user from changing a position of a native OS window containing Flet app. Default is `True`.

### `window_opacity`

🖥️ Desktop only. Sets the opacity of a native OS window. The value must be between `0.0` (fully transparent) and `1.0` (fully opaque).

### `window_resizable`

🖥️ Desktop only. Set to `False` to prevent user from resizing a native OS window containing Flet app. Default is `True`.

### `window_title_bar_hidden`

🖥️ Desktop only. Set to `True` to hide window title bar. See [`WindowDragArea`](/docs/controls/windowdragarea) control that allows moving
an app window with hidden title bar.

### `window_title_bar_buttons_hidden`

🖥️ Desktop only. Set to `True` to hide window action buttons when a title bar is hidden. macOS only.

### `window_top`

🖥️ Desktop only. Get or set a vertical position of a native OS window - a distance in virtual pixels from the top edge of the screen.

### `window_prevent_close`

🖥️ Desktop only. Set to `True` to intercept the native close signal. Could be used together with [`page.on_window_event (close)`](#on_window_event) event handler and [`page.window_destroy()`](#window_destroy) to implement app exit confirmation logic - see [`page.window_destroy()`](#window_destroy) for code example.

### `window_progress_bar`

🖥️ Desktop only. The value from `0.0` to `1.0` to display a progress bar on Task Bar (Windows) or Dock (macOS) application button.

### `window_skip_task_bar`

🖥️ Desktop only. Set to `True` to hide application from the Task Bar (Windows) or Dock (macOS).

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

ft.app(target=main, view=ft.AppView.FLET_APP_HIDDEN)
```

Note `view=ft.AppView.FLET_APP_HIDDEN` which hides app window on start.

### `window_width`

🖥️ Desktop only. Get or set the width of a native OS window containing Flet app.

## Methods

### `can_launch_url(url)`

Checks whether the specified URL can be handled by some app installed on the device.

Returns `True` if it is possible to verify that there is a handler available. A `False` return value can indicate either that there is no handler available, or that the application does not have permission to check. For example:

* On recent versions of Android and iOS, this will always return `False` unless the application has been configuration to allow querying the system for launch support.
* On web, this will always return `False` except for a few specific schemes that are always assumed to be supported (such as http(s)), as web pages are never allowed to query installed applications.

### `close_banner()`

Closes active banner.

### `close_bottom_sheet()`

Closes active bottom sheet.

### `close_dialog()`

Closes active dialog.

### `close_drawer()`

Closes active drawer.

### `close_end_drawer()`

Closes active end drawer.

### `close_in_app_web_view()`

📱 Mobile only. Closes in-app web view opened with `launch_url()`.

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
ft.app(target=main, upload_dir="uploads")
```

### `go(route)`

A helper method that updates [`page.route`](#route), calls [`page.on_route_change`](#on_route_change) event handler to update views and finally calls `page.update()`.

### `insert(at, *controls)`

Inserts controls at specific index of `page.controls` list.

### `launch_url(url)`

Opens `url` in a new browser window.

Optional method arguments:

* `web_window_name` - window tab/name to open URL in: `_self` - the same browser tab, `_blank` - a new browser tab (or in external application on mobile device) or `<your name>` - a named tab.
* `web_popup_window` - set to `True` to display a URL in a browser popup window. Default is `False`.
* `window_width` - optional, popup window width.
* `window_height` - optional, popup window height.

### `login(provider, fetch_user, fetch_groups, scope, saved_token, on_open_authorization_url, complete_page_html, redirect_to_page, authorization)`

Starts OAuth flow. See [Authentication](/docs/cookbook/authentication) guide for more information and examples.

### `logout()`

Clears current authentication context. See [Authentication](/docs/cookbook/authentication#signing-out) guide for more information and examples.

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

### `show_banner(banner: Banner)`

Displays the banner at the top of the page.

### `show_bottom_sheet(bottom_sheet: BottomSheet)`

Displays bottom sheet at the bottom of the page.

### `show_dialog(dialog: AlertDialog)`

Displays dialog.

### `show_drawer(drawer: NavigationDialog)`

Displays [`drawer`](#drawer).

### `show_end_drawer(drawer: NavigationDialog)`

Displays [`end_drawer`](#end_drawer).

### `show_snack_bar(snack_bar: SnackBar)`

Displays SnackBar at the bottom of the page.

`snack_bar` - A [`SnackBar`](/docs/controls/snackbar) control to display at the bottom of the Page.

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
        actions_alignment=ft.MainAxisAlignment.END,
    )

    page.add(ft.Text('Try exiting this app by clicking window\'s "Close" button!'))

ft.app(target=main)
```

### `window_to_front()`

🖥️ Desktop only. Brings application window to a foreground.

## Events

### `on_app_lifecycle_state_change`

Triggers when app lifecycle state changes.

You can use this event to know when the app becomes active (brought to the front) to update UI with the latest information. This event works on iOS, Android, all desktop platforms and web.

Event details is an object of `ft.AppLifecycleStateChangeEvent` type.
It contains `state` field of `AppLifecycleState` enum type which could have one of the following values:

#### `AppLifecycleState.SHOW`

The application is shown.

On mobile platforms, this is usually just before the application replaces another application in the foreground.

On desktop platforms, this is just before the application is shown after being minimized or otherwise made to show at least one view of the application.

On the web, this is just before a window (or tab) is shown.

#### `AppLifecycleState.RESUME`

The application gains input focus. Indicates that the application is entering a state where it is visible, active, and accepting user input.

#### `AppLifecycleState.HIDE`

The application is hidden.

On mobile platforms, this is usually just before the application is replaced by another application in the foreground.

On desktop platforms, this is just before the application is hidden by being minimized or otherwise hiding all views of the application.

On the web, this is just before a window (or tab) is hidden.

#### `AppLifecycleState.INACTIVE`

The application loses input focus.

On mobile platforms, this can be during a phone call or when a system dialog is visible.

On desktop platforms, this is when all views in an application have lost input focus but at least one view of the application is still visible.

On the web, this is when the window (or tab) has lost input focus.

#### `AppLifecycleState.PAUSE`

The application is paused.

On mobile platforms, this happens right before the application is replaced by another application.

On desktop platforms and the web, this function is not called.

#### `AppLifecycleState.DETACH`

The application has exited, and detached all host views from the engine.

This callback is only called on iOS and Android.

#### `AppLifecycleState.RESTART`

The application is resumed after being paused.

On mobile platforms, this happens just before this application takes over as the active application.

On desktop platforms and the web, this function is not called.

### `on_close`

Fires when a session has expired after configured amount of time (60 minutes by default).

### `on_connect`

Fires when a web user (re-)connects to a page session. It is not triggered when an app page is first opened, but is triggered when the page is refreshed, or Flet web client has re-connected after computer was unlocked. This event could be used to detect when a web user becomes "online".

### `on_disconnect`

Fires when a web user disconnects from a page session, i.e. closes browser tab/window.

### `on_error`

Fires when unhandled exception occurs.

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

### `on_login`

Fires upon successful or failed OAuth authorization flow. See [Authentication](/docs/cookbook/authentication#checking-authentication-results) guide for more information and examples.

### `on_logout`

Fires after `page.logout()` call.

### `on_media_change`

Fires when `page.media` has changed. Event object is an instance of `PageMediaData` class described in [`page.media` section](#media).

### `on_platform_brigthness_change`

Fires when brightness of app host platform has changed.

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

### `on_route_change`

Fires when page route changes either programmatically, by editing application URL or using browser Back/Forward buttons.

Event object `e` is an instance of `RouteChangeEvent` class:

```python
class RouteChangeEvent(ft.ControlEvent):
    route: str     # a new page root
```

### `on_scroll`

Fires when page's scroll position is changed by a user.

Event handler argument is an instance of [`OnScrollEvent`](/docs/reference/types/onscrollevent) class.

### `on_view_pop`

Fires when the user clicks automatic "Back" button in [`AppBar`](/docs/controls/appbar) control.

Event object `e` is an instance of `ViewPopEvent` class:

```python
class ViewPopEvent(ft.ControlEvent):
    view: ft.View
```

where `view` is an instance of [`View`](/docs/controls/view) control that contains the AppBar.

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
