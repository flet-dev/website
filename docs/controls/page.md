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

### `bgcolor`

Background color of the Page.

A color value could be a hex value in `#ARGB` format (e.g. `#FFCC0000`), `#RGB` format (e.g. `#CC0000`) or a named color from `flet.colors` module.

### `bottom_appbar`

[`BottomAppBar`](/docs/controls/bottomappbar) control to display at the bottom of the Page. If both [`bottom_appbar`](#bottom_appbar) and [`navigation_bar`](#navigation_bar) properties are provided, `NavigationBar` will be displayed.

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

A height of a web page or content area of a native OS window containing Flet app. This property is read-only. It's usually being used inside [`page.on_resized`](#on_resized) handler.

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

### `spacing`

Vertical spacing between controls on the Page. Default value is 10 virtual pixels. Spacing is applied only when `alignment` is set to `start`, `end` or `center`.

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

A width of a web page or content area of a native OS window containing Flet app. This property is read-only. It's usually being used inside [`page.on_resized`](#on_resized) handler.

### `window`

A class with properties/methods/events to control app's native OS window.

Value is of type [`Window`](/docs/reference/types/window).

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

### `close_in_app_web_view()`

Closes in-app web view opened with `launch_url()`.

📱 Mobile only. 

### `error(message)`


### `fetch_page_details()`


### `get_clipboard()`

Get the last text value saved to a clipboard on a client side.

### `get_control(id)`

Get a control by its `id`.

Example:

```python
import flet as ft

def main(page: ft.Page):
    x = ft.IconButton(ft.Icons.ADD)
    page.add(x)
    print(type(page.get_control(x.uid)))

ft.app(main)
```

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

### `on_resized`

Fires when a user resizes a browser or native OS window containing Flet app, for example:

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
