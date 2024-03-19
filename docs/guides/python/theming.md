---
title: Theming
sidebar_label: Theming
---

Defines the configuration of the overall visual Theme.

The MaterialApp theme property can be used to configure the appearance of the entire app.

:::note
Read this [note about system fonts](/docs/controls/text#using-system-fonts) if you like to use them in `font_family` of your theme.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.theme = theme.Theme(color_scheme_seed="green")
page.update()
```

</TabItem>
</Tabs>

## `Theme` class

`Theme` class has the following properties:

* `color_scheme_seed` - a seed color to algorithmically derive the rest of theme colors from.
* `color_scheme` - an instance of [`ColorScheme`](#colorscheme-class) class that allows to customize Material colors scheme derived from `color_scheme_seed`.
* `text_theme` - an instance of [`TextTheme`](#texttheme-class) class to customize text styles that contrasts with the card and canvas colors.
* `primary_text_theme` - an instance of [`TextTheme`](#texttheme-class) class describing a text theme that contrasts with the primary color.
* `scrollbar_theme` - an instance of [`ScrollbarTheme`](#scrollbartheme-class)
* `tabs_theme` - an instance of [`TabsTheme`](#tabstheme-class) 
* `font_family` - the base font for all UI elements.
* `use_material3` - `True` (default) to use Material 3 design; otherwise Material 2.
* `visual_density` - `ThemeVisualDensity` enum: `STANDARD` (default), `COMPACT`, `COMFORTABLE`, `ADAPTIVE_PLATFORM_DENSITY`.
* `page_transitions` - an instance of [`PageTransitionsTheme`](#pagetransitionstheme-class)
* `system_overlay_style` - an instance of [`SystemOverlayStyle`](#systemoverlaystyle-class)

### `ColorScheme` class

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

### `TextTheme` class

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

### `ScrollbarTheme` class

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

### `TabsTheme` class

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

### `PageTransitionTheme` class

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

### `SystemOverlayStyle` class

Allows the customization of the mobile's system overlay (which consists of the system status and navigation bars) appearance.

It has the following properties:

* `system_navigation_bar_color` - the [color](/docs/guides/python/colors) of the system navigation bar.
* `system_navigation_bar_divider_color` - the [color](/docs/guides/python/colors) of the divider between the system navigation bar and the app
  content.
* `enforce_system_navigation_bar_contrast` - indicates whether the system should enforce contrast for the status bar
  when setting a transparent status bar.
* `enforce_system_status_bar_contrast` - indicates whether the system should enforce contrast for the navigation bar
  when setting a transparent navigation bar.
* `system_navigation_bar_icon_brightness` - the `Brightness` of the system navigation bar icons.
  Either `Brightness.DARK` or `Brightness.LIGHT`.
* `status_bar_brightness` - the `Brightness` of the status bar. Either `Brightness.DARK` or `Brightness.LIGHT`.
* `status_bar_icon_brightness` - the `Brightness` of the status bar icons. Either `Brightness.DARK`
  or `Brightness.LIGHT`.
