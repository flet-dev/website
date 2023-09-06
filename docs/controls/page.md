---
title: Page
sidebar_label: Page
slug: page
---

Page is a container for [`View`](/docs/controls/view) controls.

A page instance and the root view are automatically created when a new user session started.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Properties

### `auto_scroll`

`True` if scrollbar should automatically move its position to the end when children updated. Must be `False` for `scroll_to()` method to work.

### `appbar`

A [`AppBar`](/docs/controls/appbar) control to display at the top of the Page.

### `banner`

A [`Banner`](/docs/controls/banner) control to display at the top of the Page.

### `bgcolor`

Background color of the Page.

A color value could be a hex value in `#ARGB` format (e.g. `#FFCC0000`), `#RGB` format (e.g. `#CC0000`) or a named color from `flet.colors` module.

### `bottom_sheet`

[`BottomSheet`](bottomsheet) control to display.

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

Set this property to an instance of `theme.Theme` to customize dark theme.

### `debug`

`True` if Flutter client of Flet app is running in debug mode.

### `design`

Reserved for future use.

### `dialog`

An [`AlertDialog`](/docs/controls/alertdialog) control to display.

### `floating_action_button`

A [`FloatingActionButton`](/docs/controls/floatingactionbutton) control to display on top of Page content.

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

Default value is `CrossAxisAlignment.START` which means on the left side of the Page.

Property value is `CrossAxisAlignment` enum with the following values:

* `START` (default)
* `CENTER`
* `END`
* `STRETCH`
* `BASELINE`

### `name`

Page name as specified in `ft.app()` call. Page name is set when Flet app is running as web app. This is a portion of the URL after host name.

### `navigation_bar`

[`NavigationBar`](navigationbar) control to display at the bottom of the page.

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

See [`Container.padding`](container#padding) for more information and possible values.

### `platform`

Operating system the application is running on:

* `ios`
* `android`
* `macos`
* `linux`
* `windows`

### `platform_brightness`

The current brightness mode of the host platform: `ft.ThemeMode.LIGHT` or `ft.ThemeMode.DARK`.

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

Get or sets page's navigation route. See [Navigation and routing](/docs/guides/python/navigation-and-routing) section for 
more information and examples.

### `rtl`

`True` to set text direction to right-to-left. Default is `False`.

### `scroll`

Enables a vertical scrolling for the Page to prevent its content overflow.

Property value is an optional `ScrollMode` enum with `None` as default.

Supported values:

* `None` (default) - the Row is non-scrollable and its content could overflow.
* `AUTO` - scrolling is enabled and scroll bar is only shown when scrolling occurs.
* `ADAPTIVE` - scrolling is enabled and scroll bar is always shown when running app as web or desktop.
* `ALWAYS` - scrolling is enabled and scroll bar is always shown.
* `HIDDEN` - scrolling is enabled, but scroll bar is always hidden.

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

Set this property to an instance of `theme.Theme` to customize light theme. Currently, a theme can only be automatically generated from a "seed" color. For example, to generate light theme from a green color:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.theme = theme.Theme(color_scheme_seed="green")
page.update()
```

</TabItem>
</Tabs>

`Theme` class has the following properties:

* `color_scheme_seed` - a seed color to algorithmically derive the rest of theme colors from.
* `color_scheme` - an instance of [`ft.ColorScheme`](#colorscheme-class) class that allows to customize Material colors scheme derived from `color_scheme_seed`.
* `text_theme` - an instance of [`ft.TextTheme`](#texttheme-class) class to customize text styles that contrasts with the card and canvas colors.
* `primary_text_theme` - an instance of [`ft.TextTheme`](#texttheme-class) class describing a text theme that contrasts with the primary color.
* `scrollbar_theme` - an instance of [`ft.ScrollbarTheme`](#scrollbartheme-class) class customizing the appearance of scrollbars across the app.
* `tabs_theme` - an instance of [`ft.TabsTheme`](#tabstheme-class) class customizing the appearance of `Tabs` control across the app.
* `font_family` - the base font for all UI elements.
* `use_material3` - `True` (default) to use Material 3 design; otherwise Material 2.
* `visual_density` - `ThemeVisualDensity` enum: `STANDARD` (default), `COMPACT`, `COMFORTABLE`, `ADAPTIVE_PLATFORM_DENSITY`.
* `page_transitions` - an instance of `PageTransitionsTheme` that allows customizing navigation page transitions for different platforms. See section [below](#navigation-transitions).

:::note
Read this [note about system fonts](/docs/controls/text#using-system-fonts) if you like to use them in `font_family` of your theme.
:::

#### `ColorScheme` class

A set of 30 colors based on the [Material spec](https://m3.material.io/styles/color/the-color-system/color-roles) that can be used to configure the color properties of most components. Read more about `ColorScheme` in [Flutter docs](https://api.flutter.dev/flutter/material/ColorScheme-class.html).

`ColorScheme` class has the following properties:

* `primary` - The color displayed most frequently across your app’s screens and components.
* `on_primary` - A color that's clearly legible when drawn on `primary`.
* `primary_container` - A color used for elements needing less emphasis than `primary`.
* `on_primary_container` - A color that's clearly legible when drawn on `primary_container`.
* `secondary` - An accent color used for less prominent components in the UI, such as filter chips, while expanding the opportunity for color expression.
* `on_secondary` - A color that's clearly legible when drawn on `secondary`.
* `secondary_container` - A color used for elements needing less emphasis than `secondary`.
* `on_secondary_container` - A color that's clearly legible when drawn on `secondary_container`.
* `tertiary` - A color used as a contrasting accent that can balance `primary` and `secondary` colors or bring heightened attention to an element, such as an input field.
* `on_tertiary` - A color that's clearly legible when drawn on `tertiary`.
* `tertiary_container` - A color used for elements needing less emphasis than `tertiary`.
* `on_tertiary_container` - A color that's clearly legible when drawn on `tertiary_container`.
* `error` - The color to use for input validation errors, e.g. for `TextField.error_text`.
* `on_error` - A color that's clearly legible when drawn on `error`.
* `error_container` - A color used for error elements needing less emphasis than `error`.
* `on_error_container` - A color that's clearly legible when drawn on `error_container`.
* `background` - A color that typically appears behind scrollable content.
* `on_background` - A color that's clearly legible when drawn on `background`.
* `surface` - The background color for widgets like `Card`.
* `on_surface` - A color that's clearly legible when drawn on `surface`.
* `surface_variant` - A color variant of `surface` that can be used for differentiation against a component using `surface`.
* `on_surface_variant` - A color that's clearly legible when drawn on `surface_variant`.
* `outline` - A utility color that creates boundaries and emphasis to improve usability.
* `outline_variant` - A utility color that creates boundaries for decorative elements when a 3:1 contrast isn’t required, such as for dividers or decorative elements.
* `shadow` - A color use to paint the drop shadows of elevated components.
* `scrim` - A color use to paint the scrim around of modal components.
* `inverse_surface` - A surface color used for displaying the reverse of what’s seen in the surrounding UI, for example in a `SnackBar` to bring attention to an alert.
* `on_inverse_surface` - A color that's clearly legible when drawn on `inverse_surface`.
* `inverse_primary` - An accent color used for displaying a highlight color on `inverse_surface` backgrounds, like button text in a `SnackBar`.
* `surface_tint` - A color used as an overlay on a surface color to indicate a component's elevation.

#### `TextTheme` class

Customizes text styles.

`TextTheme` class has the following properties of `ft.TextStyle` type:

* `body_large` - Largest of the body styles. Body styles are used for longer passages of text.
* `body_medium` - Middle size of the body styles. Body styles are used for longer passages of text. The default text style for Material.
* `body_small` - Smallest of the body styles.
* `display_large` - Largest of the display styles. As the largest text on the screen, display styles are reserved for short, important text or numerals. They work best on large screens.
* `display_medium` - Middle size of the display styles.
* `display_small` - Smallest of the display styles.
* `headline_large` - Largest of the headline styles. Headline styles are smaller than display styles. They're best-suited for short, high-emphasis text on smaller screens.
* `headline_medium` - Middle size of the headline styles.
* `headline_small` - Smallest of the headline styles.
* `label_large` - Largest of the label styles. Label styles are smaller, utilitarian styles, used for areas of the UI such as text inside of components or very small supporting text in the content body, like captions. Used for text on `ElevatedButton`, `TextButton` and `OutlinedButton`.
* `label_medium` - Middle size of the label styles.
* `label_small` - Smallest of the label styles.
* `title_large` - Largest of the title styles. Titles are smaller than headline styles and should be used for shorter, medium-emphasis text.
* `title_medium` - Middle size of the title styles.
* `title_small` - Smallest of the title styles.

#### `ScrollbarTheme` class

Customizes the colors, thickness, and shape of scrollbars across the app.

`ScrollbarTheme` class has the following properties:

* `thumb_visibility` - Indicates that the scrollbar thumb should be visible, even when a scroll is not underway. When `False`, the scrollbar will be shown during scrolling and will fade out otherwise. When `True`, the scrollbar will always be visible and never fade out. Property value could be either a single boolean value or a dictionary with `ft.MaterialState` as keys and boolean as values.
* `thickness` - the thickness of the scrollbar in the cross axis of the scrollable. Property value could be either a single float value or a dictionary with `ft.MaterialState` as keys and float as values.
* `track_visibility` - Indicates that the scrollbar track should be visible. When `True`, the scrollbar track will always be visible so long as the thumb is visible. If the scrollbar thumb is not visible, the track will not be visible either. Defaults to `False` when `None`. If this property is `None`, then `ScrollbarTheme.track_visibility` of `Theme.scrollbar_theme` is used. If that is also `None`, the default value is `False`. Property value could be either a single boolean value or a dictionary with `ft.MaterialState` as keys and boolean as values.
* `radius` - The Radius of the scrollbar thumb's rounded rectangle corners.
* `thumb_color` - Overrides the default Color of the Scrollbar thumb. The value is either a single color string or `ft.MaterialState` dictionary.
* `track_color` - Overrides the default Color of the Scrollbar track. The value is either a single color string or `ft.MaterialState` dictionary.
* `track_border_color` - Overrides the default Color of the Scrollbar track border. The value is either a single color string or `ft.MaterialState` dictionary.
* `cross_axis_margin` - Distance from the scrollbar thumb to the nearest cross axis edge in logical pixels. The scrollbar track consumes this space. Must not be null and defaults to 0.
* `main_axis_margin` - Distance from the scrollbar thumb's start and end to the edge of the viewport in logical pixels. It affects the amount of available paint area. The scrollbar track consumes this space. Mustn't be null and defaults to 0.
* `min_thumb_length` - The preferred smallest size the scrollbar thumb can shrink to when the total scrollable extent is large, the current visible viewport is small, and the viewport is not overscrolled.
* `interactive` - Whether the Scrollbar should be interactive and respond to dragging on the thumb, or tapping in the track area. When `False`, the scrollbar will not respond to gesture or hover events, and will allow to click through it. Defaults to `True` when `None`, unless on Android, which will default to `False` when `None`.

#### `TabsTheme` class

Customizes the appearance of `Tabs` control across the app.

`TabsTheme` class has the following properties:

* `divider_color` - The color of the divider.
* `indicator_border_radius` - The radius of the indicator's corners.
* `indicator_border_side` - The color and weight of the horizontal line drawn below the selected tab.
* `indicator_padding` - Locates the selected tab's underline relative to the tab's boundary. The `indicator_tab_size` property can be used to define the tab indicator's bounds in terms of its (centered) tab widget with `False`, or the entire tab with `True`.
* `indicator_color` - The color of the line that appears below the selected tab.
* `indicator_tab_size` - `True` for indicator to take entire tab.
* `label_color` - The color of selected tab labels.
* `unselected_label_color` - The color of unselected tab labels.
* `overlay_color` - Defines the ink response focus, hover, and splash colors. If specified, it is resolved against one of `MaterialState.FOCUSED`, `MaterialState.HOVERED`, and `MaterialState.PRESSED`.

#### Navigation transitions

`theme.page_transitions` allows customizing navigation page transitions for different platforms. The value is an instance of `PageTransitionsTheme` class with the following optional properties:

* `android` (default value is `FADE_UPWARDS`)
* `ios` (default value is `CUPERTINO`)
* `macos` (default value is `ZOOM`)
* `linux` (default value is `ZOOM`)
* `windows` (default value is `ZOOM`)

Supported transitions is `ft.PageTransitionTheme` enum: `NONE` (zero delay transition without any animation), `FADE_UPWARDS`, `OPEN_UPWARDS`, `ZOOM`, `CUPERTINO`.

An simple example:

```python
theme = ft.Theme()
theme.page_transitions.android = ft.PageTransitionTheme.OPEN_UPWARDS
theme.page_transitions.ios = ft.PageTransitionTheme.CUPERTINO
theme.page_transitions.macos = ft.PageTransitionTheme.FADE_UPWARDS
theme.page_transitions.linux = ft.PageTransitionTheme.ZOOM
theme.page_transitions.windows = ft.PageTransitionTheme.NONE
page.theme = theme
page.update()
```

### `theme_mode`

Page theme.

Property value is an optional `ThemeMode` enum with `SYSTEM` as default.

Supported values: `SYSTEM` (default), `LIGHT` or `DARK`.

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

For example, `MainAxisAlignment.START`, the default, places the children at the top of a Page.

Property value is `MainAxisAlignment` enum with the following values:

* `START` (default)
* `END`
* `CENTER`
* `SPACE_BETWEEN`
* `SPACE_AROUND`
* `SPACE_EVENLY`

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

🖥️ Desktop only. Set to `True` to hide window title bar. See [`WindowDragArea`](windowdragarea) control that allows moving
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

Starts OAuth flow. See [Authentication](/docs/guides/python/authentication) guide for more information and examples.

### `logout()`

Clears current authentication context. See [Authentication](/docs/guides/python/authentication#signing-out) guide for more information and examples.

### `remove(*controls)`

Removes specific controls from `page.controls` list.

### `remove_at(index)`

Remove controls from `page.controls` list at specific index.

### `scroll_to(offset, delta, key, duration, curve)`

Moves scroll position to either absolute `offset`, relative `delta` or jump to the control with specified `key`.

See [`Column.scroll_to()`](column#scroll_tooffset-delta-key-duration-curve) for method details and examples.

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

Fires upon successful or failed OAuth authorization flow. See [Authentication](/docs/guides/python/authentication#checking-authentication-results) guide for more information and examples.

### `on_logout`

Fires after `page.logout()` call.

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

See [`Column.on_scroll`](docs/controls/column#on_scroll) for event details and examples.

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
