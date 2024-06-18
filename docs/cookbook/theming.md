---
title: Theming
sidebar_label: Theming
---

Defines the configuration of the visual Theme.

- `page.theme` or `page.dark_theme` properties can be used to configure the appearance of the entire app in light and
  dark theme modes respectively.

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

## `Theme` properties

`Theme` class has the following properties:

#### `color_scheme_seed`

A seed color to algorithmically derive the rest of theme colors from.

#### `color_scheme`

Value is of type [`ColorScheme`](#colorscheme-class) class that allows to customize Material colors scheme derived
from `color_scheme_seed`.

#### `text_theme`

Defines text styles that contrasts with the card and canvas colors.

Value is of type [`TextTheme`](#texttheme-class).

#### `primary_text_theme`

Describes a text theme that contrasts with the primary color.

Value is of type [`TextTheme`](#texttheme-class).

#### `scrollbar_theme`

Value is of type [`ScrollbarTheme`](#scrollbartheme-class)

#### `tabs_theme`

Value is of type [`TabsTheme`](#tabstheme-class)

#### `font_family`

The base font for all UI elements.

#### `use_material3` 

True` (default) to use Material 3 design; otherwise Material 2.

#### `visual_density` 

Value is of type [`ThemeVisualDensity`](/docs/reference/types/themevisualdensity) and defaults
to `ThemeVisualDensity.STANDARD`.

#### `page_transitions`

Value is of type [`PageTransitionsTheme`](#pagetransitionstheme-class)

#### `system_overlay_style`

Value is of type [`SystemOverlayStyle`](#systemoverlaystyle-class)

#### `appbar_theme`

Value is of type [`AppBarTheme`](#appbartheme-class).

#### `badge_theme`

Value is of type [`BadgeTheme`](#badgetheme-class).

#### `banner_theme`

Value is of type [`BannerTheme`](#bannertheme-class).

#### `bottom_appbar_theme`

Value is of type [`BottomAppBarTheme`](#bottomappbartheme-class).

#### `bottom_navigation_bar_theme`

Value is of type [`BottomNavigationBarTheme`](#bottomnavigationbartheme-class).

#### `bottom_sheet_theme`

Value is of type [`BottomSheetTheme`](#bottomsheettheme-class).

#### `card_theme`

Value is of type [`CardTheme`](#cardtheme-class).

#### `checkbox_theme`

Value is of type [`CheckboxTheme`](#checkboxtheme-class).

#### `chip_theme`

Value is of type [`ChipTheme`](#chiptheme-class).

#### `date_picker_theme`

Value is of type [`DatePickerTheme`](#datepickertheme-class).

#### `dialog_theme`

Value is of type [`DialogTheme`](#dialogtheme-class).

#### `divider_theme`

Value is of type [`DividerTheme`](#dividertheme-class).

#### `expansion_tile_theme`

Value is of type [`ExpansionTileTheme`](#expansiontiletheme-class).

#### `list_tile_theme`

Value is of type [`ListTileTheme`](#listtiletheme-class).

#### `navigation_bar_theme`

Value is of type [`NavigationBarTheme`](#navigationbartheme-class).

#### `navigation_drawer_theme`

Value is of type [`NavigationDrawerTheme`](#navigationdrawertheme-class).

#### `navigation_rail_theme`

Value is of type [`NavigationRailTheme`](#navigationrailtheme-class).

#### `popup_menu_theme`

Value is of type [`PopupMenuTheme`](#popupmenutheme-class).

#### `primary_color`

#### `primary_color_dark`

#### `primary_color_light`

#### `primary_swatch`

#### `progress_indicator_theme`

Value is of type [`ProgressIndicatorTheme`](#progressindicatortheme-class).

#### `radio_theme`

Value is of type [`RadioTheme`](#radiotheme-class).

#### `search_bar_theme`

Value is of type [`SearchBarTheme`](#searchbartheme-class).

#### `search_view_theme`

Value is of type [`SearchViewTheme`](#searchviewtheme-class).

#### `segmented_button_theme`

Value is of type [`SegmentedButtonTheme`](#segmentedbuttontheme-class).

#### `slider_theme`

Value is of type [`SliderTheme`](#slidertheme-class).

#### `snackbar_theme`

Value is of type [`SnackBarTheme`](#snackbartheme-class).

#### `switch_theme`

Value is of type [`SwitchTheme`](#switchtheme-class).

#### `time_picker_theme`

Value is of type [`TimePickerTheme`](#timepickertheme-class).

#### `tooltip_theme`

Value is of type [`TooltipTheme`](#tooltiptheme-class).

### `ColorScheme` class

A set of 30 colors based on the [Material spec](https://m3.material.io/styles/color/the-color-system/color-roles) that can be used to configure the color properties of most components. Read more about `ColorScheme` in [Flutter docs](https://api.flutter.dev/flutter/material/ColorScheme-class.html).

`ColorScheme` class has the following properties:

#### `primary`

The color displayed most frequently across your app’s screens and components.

#### `on_primary`

A color that's clearly legible when drawn on `primary`.

#### `primary_container`

A color used for elements needing less emphasis than `primary`.

#### `on_primary_container`

A color that's clearly legible when drawn on `primary_container`.

#### `secondary`

An accent color used for less prominent components in the UI, such as filter chips, while expanding the opportunity for color expression.

#### `on_secondary`

A color that's clearly legible when drawn on `secondary`.

#### `secondary_container`

A color used for elements needing less emphasis than `secondary`.

#### `on_secondary_container`

A color that's clearly legible when drawn on `secondary_container`.

#### `tertiary`

A color used as a contrasting accent that can balance `primary` and `secondary` colors or bring heightened attention to an element, such as an input field.

#### `on_tertiary`

A color that's clearly legible when drawn on `tertiary`.

#### `tertiary_container`

A color used for elements needing less emphasis than `tertiary`.

#### `on_tertiary_container`

A color that's clearly legible when drawn on `tertiary_container`.

#### `error`

The color to use for input validation errors, e.g. for `TextField.error_text`.

#### `on_error`

A color that's clearly legible when drawn on `error`.

#### `error_container`

A color used for error elements needing less emphasis than `error`.

#### `on_error_container`

A color that's clearly legible when drawn on `error_container`.

#### `background`

A color that typically appears behind scrollable content.

#### `on_background`

A color that's clearly legible when drawn on `background`.

#### `surface`

The background color for widgets like `Card`.

#### `on_surface`

A color that's clearly legible when drawn on `surface`.

#### `surface_variant`

A color variant of `surface` that can be used for differentiation against a component using `surface`.

#### `on_surface_variant`

A color that's clearly legible when drawn on `surface_variant`.

#### `outline`

A utility color that creates boundaries and emphasis to improve usability.

#### `outline_variant`

A utility color that creates boundaries for decorative elements when a 3:1 contrast isn’t required, such as for dividers or decorative elements.

#### `shadow`

A color use to paint the drop shadows of elevated components.

#### `scrim`

A color use to paint the scrim around of modal components.

#### `inverse_surface`

A surface color used for displaying the reverse of what’s seen in the surrounding UI, for example in a `SnackBar` to bring attention to an alert.

#### `on_inverse_surface`

A color that's clearly legible when drawn on `inverse_surface`.

#### `inverse_primary`

An accent color used for displaying a highlight color on `inverse_surface` backgrounds, like button text in a `SnackBar`.

#### `surface_tint`

A color used as an overlay on a surface color to indicate a component's elevation.

### `TextTheme` class

Customizes text styles.

`TextTheme` class has the following properties of `ft.TextStyle` type:

#### `body_large`

Largest of the body styles. Body styles are used for longer passages of text.

#### `body_medium`

Middle size of the body styles. Body styles are used for longer passages of text. The default text style for Material.

#### `body_small`

Smallest of the body styles.

#### `display_large`

Largest of the display styles. As the largest text on the screen, display styles are reserved for short, important text or numerals. They work best on large screens.

#### `display_medium`

Middle size of the display styles.

#### `display_small`

Smallest of the display styles.

#### `headline_large`

Largest of the headline styles. Headline styles are smaller than display styles. They're best-suited for short, high-emphasis text on smaller screens.
* `headline_medium` - Middle size of the headline styles.
* `headline_small` - Smallest of the headline styles.

#### `label_large`

Largest of the label styles. Label styles are smaller, utilitarian styles, used for areas of the UI such as text inside of components or very small supporting text in the content body, like captions. Used for text on `ElevatedButton`, `TextButton` and `OutlinedButton`.

#### `label_medium`

Middle size of the label styles.

#### `label_small`

Smallest of the label styles.

#### `title_large`

Largest of the title styles. Titles are smaller than headline styles and should be used for shorter, medium-emphasis text.

#### `title_medium`

Middle size of the title styles.

#### `title_small`

Smallest of the title styles.

### `ScrollbarTheme` class

Customizes the colors, thickness, and shape of scrollbars across the app.

`ScrollbarTheme` class has the following properties:

#### `thumb_visibility`

Indicates that the scrollbar thumb should be visible, even when a scroll is not underway. When `False`, the scrollbar
will be shown during scrolling and will fade out otherwise. When `True`, the scrollbar will always be visible and never
fade out. Property value could be either a single boolean value or a dictionary with `ft.ControlState` as keys and
boolean as values.

#### `thickness`

The thickness of the scrollbar in the cross axis of the scrollable. Property value could be either a single float value
or a dictionary with `ft.ControlState` as keys and float as values.

#### `track_visibility`

Indicates that the scrollbar track should be visible. When `True`, the scrollbar track will always be visible so long as
the thumb is visible. If the scrollbar thumb is not visible, the track will not be visible either. Defaults to `False`
when `None`. If this property is `None`, then `ScrollbarTheme.track_visibility` of `Theme.scrollbar_theme` is used. If
that is also `None`, the default value is `False`. Property value could be either a single boolean value or a dictionary
with `ft.ControlState` as keys and boolean as values.

#### `radius`

The Radius of the scrollbar thumb's rounded rectangle corners.

#### `thumb_color`

Overrides the default Color of the Scrollbar thumb. The value is either a single color string or `ft.ControlState`
dictionary.

#### `track_color`

Overrides the default Color of the Scrollbar track. The value is either a single color string or `ft.ControlState`
dictionary.

#### `track_border_color`

Overrides the default Color of the Scrollbar track border. The value is either a single color string
or `ft.ControlState` dictionary.

#### `cross_axis_margin`

Distance from the scrollbar thumb to the nearest cross axis edge in logical pixels. The scrollbar track consumes this space. Must not be null and defaults to 0.

#### `main_axis_margin`

Distance from the scrollbar thumb's start and end to the edge of the viewport in logical pixels. It affects the amount of available paint area. The scrollbar track consumes this space. Mustn't be null and defaults to 0.

#### `min_thumb_length`

The preferred smallest size the scrollbar thumb can shrink to when the total scrollable extent is large, the current visible viewport is small, and the viewport is not overscrolled.

#### `interactive`

Whether the Scrollbar should be interactive and respond to dragging on the thumb, or tapping in the track area. When `False`, the scrollbar will not respond to gesture or hover events, and will allow to click through it. Defaults to `True` when `None`, unless on Android, which will default to `False` when `None`.

### `TabsTheme` class

Customizes the appearance of `Tabs` control across the app.

`TabsTheme` class has the following properties:

#### `divider_color`

The color of the divider.

#### `indicator_border_radius`

The radius of the indicator's corners.

#### `indicator_border_side`

The color and weight of the horizontal line drawn below the selected tab.

#### `indicator_padding`

Locates the selected tab's underline relative to the tab's boundary. The `indicator_tab_size` property can be used to define the tab indicator's bounds in terms of its (centered) tab widget with `False`, or the entire tab with `True`.

#### `indicator_color`

The color of the line that appears below the selected tab.

#### `indicator_tab_size` 

True` for indicator to take entire tab.

#### `label_color`

The color of selected tab labels.

#### `unselected_label_color`

The color of unselected tab labels.

#### `overlay_color`

Defines the ink response focus, hover, and splash colors. If specified, it is resolved against one
of `ControlState.FOCUSED`, `ControlState.HOVERED`, and `ControlState.PRESSED`.

### `PageTransitionsTheme` class

Allows customizing navigation page transitions for different platforms.
Supported transitions is `ft.PageTransitionTheme` enum: `NONE` (zero delay transition without any animation), `FADE_UPWARDS`, `OPEN_UPWARDS`, `ZOOM` and `CUPERTINO`.

Example:

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

#### `android`

The transition to be used on Android platforms. Defaults to `FADE_UPWARDS`.

#### `ios`

The transition to be used on iOS platforms. Defaults to `CUPERTINO`.

#### `macos`

The transition to be used on macOS platforms. Defaults to `ZOOM`.

#### `linux`

The transition to be used on Linux platforms. Defaults to `ZOOM`.

#### `windows`

The transition to be used on Windows platforms. Defaults to `ZOOM`.


### `SystemOverlayStyle` class

Allows the customization of the mobile's system overlay (which consists of the system status and navigation bars) appearance.

It has the following properties:

#### `system_navigation_bar_color`

The [color](/docs/reference/colors) of the system navigation bar.

#### `system_navigation_bar_divider_color`

The [color](/docs/reference/colors) of the divider between the system navigation bar and the app content.

#### `enforce_system_navigation_bar_contrast`

indicates whether the system should enforce contrast for the status bar when setting a transparent status bar.

#### `enforce_system_status_bar_contrast`

indicates whether the system should enforce contrast for the navigation bar when setting a transparent navigation bar.

#### `system_navigation_bar_icon_brightness`

The `Brightness` of the system navigation bar icons. Either `Brightness.DARK` or `Brightness.LIGHT`.

#### `status_bar_brightness`

The `Brightness` of the status bar. Either `Brightness.DARK` or `Brightness.LIGHT`.

#### `status_bar_icon_brightness`

The `Brightness` of the status bar icons. Either `Brightness.DARK` or `Brightness.LIGHT`.

### `AppBarTheme` class

Customizes the appearance of `AppBar` across the app.

`AppBarTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `AppBar.bgcolor` in all descendant `AppBar` controls.

#### `center_title`

Overrides the default value of `AppBar.center_title` in all descendant `AppBar` controls.

#### `color`

Overrides the default value of `AppBar.color` in all descendant `AppBar` controls.

#### `elevation`

Overrides the default value of `AppBar.elevation` in all descendant `AppBar` controls.

#### `color`

Overrides the default value of `AppBar.color` in all descendant `AppBar` controls.

#### `scroll_elevation`

Overrides the default value of `AppBar.scroll_elevation` in all descendant `AppBar` controls.

#### `shadow_color`

Overrides the default value of `AppBar.shadow_color` in all descendant `AppBar` controls.

#### `shape`

Overrides the default value of `AppBar.shape` in all descendant `AppBar` controls.

#### `surface_tint_color`

Overrides the default value of `AppBar.surface_tint_color` in all descendant `AppBar` controls.

#### `title_spacing`

Overrides the default value of `AppBar.title_spacing` in all descendant `AppBar` controls.

#### `title_text_style`

Overrides the default value of `AppBar.title_text_style` in all descendant `AppBar` controls.

#### `toolbar_height`

Overrides the default value of `AppBar.toolbar_height` in all descendant `AppBar` controls.

#### `toolbar_text_style`

Overrides the default value of `AppBar.toolbar_text_style` in all descendant `AppBar` controls.

### `BadgeTheme` class

Customizes the appearance of `Badge` across the app.

`BadgeTheme` class has the following properties:

#### `alignment`

Overrides the default value of `Badge.alignment` in all descendant `Badge` controls.

#### `bgcolor`

Overrides the default value of `Badge.bgcolor` in all descendant `Badge` controls.

#### `large_size`

Overrides the default value of `Badge.large_size` in all descendant `Badge` controls.

#### `offset`

Overrides the default value of `Badge.offset` in all descendant `Badge` controls.

#### `padding`

Overrides the default value of `Badge.padding` in all descendant `Badge` controls.

#### `small_size`

Overrides the default value of `Badge.small_size` in all descendant `Badge` controls.

#### `text_color`

Overrides the default value of `Badge.text_color` in all descendant `Badge` controls.

#### `text_style`

Overrides the default value of `Badge.text_style` in all descendant `Badge` controls.

### `BannerTheme` class

Customizes the appearance of `Banner` across the app.

`BannerTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `Banner.bgcolor` in all descendant `Banner` controls.

#### `content_text_style`

Overrides the default value of `Banner.content_text_style` in all descendant `Banner` controls.

#### `divider_color`

Overrides the default value of `Banner.divider_color` in all descendant `Banner` controls.

#### `elevation`

Overrides the default value of `Banner.elevation` in all descendant `Banner` controls.

#### `leading_padding`

Overrides the default value of `Banner.leading_padding` in all descendant `Banner` controls.

#### `padding`

Overrides the default value of `Banner.padding` in all descendant `Banner` controls.

#### `shadow_color`

Overrides the default value of `Banner.shadow_color` in all descendant `Banner` controls.

#### `surface_tint_color`

Overrides the default value of `Banner.surface_tint_color` in all descendant `Banner` controls.

### `BottomAppBarTheme` class

Customizes the appearance of `BottomAppBar` across the app.

`BottomAppBarTheme` class has the following properties:

#### `color`

Overrides the default value of `BottomAppBar.color` in all descendant `BottomAppBar` controls.

#### `elevation`

Overrides the default value of `BottomAppBar.elevation` in all descendant `BottomAppBar` controls.

#### `height`

Overrides the default value of `BottomAppBar.height` in all descendant `BottomAppBar` controls.

#### `padding`

Overrides the default value of `BottomAppBar.padding` in all descendant `BottomAppBar` controls.

#### `shadow_color`

Overrides the default value of `BottomAppBar.shadow_color` in all descendant `BottomAppBar` controls.

#### `surface_tint_color`

Overrides the default value of `BottomAppBar.surface_tint_color` in all descendant `BottomAppBar` controls.

### `BottomNavigationBarTheme` class

Customizes the appearance of `BottomNavigationBar` across the app.

`BottomNavigationBarTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `BottomNavigationBar.bgcolor` in all descendant `BottomNavigationBar` controls.

#### `elevation`

Overrides the default value of `BottomNavigationBar.elevation` in all descendant `BottomNavigationBar` controls.

#### `enable_feedback`

Overrides the default value of `BottomNavigationBar.enable_feedback` in all descendant `BottomNavigationBar` controls.

#### `show_unselected_labels`

Overrides the default value of `BottomNavigationBar.show_unselected_labels` in all descendant `BottomNavigationBar`
controls.

#### `selected_item_color`

Overrides the default value of `BottomNavigationBar.selected_item_color` in all descendant `BottomNavigationBar`
controls.

#### `selected_label_text_style`

Overrides the default value of `BottomNavigationBar.selected_label_text_style` in all descendant `BottomNavigationBar`
controls.

#### `show_selected_labels`

Overrides the default value of `BottomNavigationBar.show_selected_labels` in all descendant `BottomNavigationBar`
controls.

#### `unselected_item_color`

Overrides the default value of `BottomNavigationBar.unselected_item_color` in all descendant `BottomNavigationBar`
controls.

#### `unselected_label_text_style`

Overrides the default value of `BottomNavigationBar.unselected_label_text_style` in all descendant `BottomNavigationBar`
controls.

### `BottomSheetTheme` class

Customizes the appearance of `BottomSheet` across the app.

`BottomSheetTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `BottomSheet.bgcolor` in all descendant `BottomSheet` controls.

#### `clip_behavior`

Overrides the default value of `BottomSheet.clip_behavior` in all descendant `BottomSheet` controls.

#### `drag_handle_color`

Overrides the default value of `BottomSheet.drag_handle_color` in all descendant `BottomSheet` controls.

#### `elevation`

Overrides the default value of `BottomSheet.elevation` in all descendant `BottomSheet` controls.

#### `modal_bgcolor`

Overrides the default value of `BottomSheet.modal_bgcolor` in all descendant `BottomSheet` controls.

#### `modal_elevation`

Overrides the default value of `BottomSheet.modal_elevation` in all descendant `BottomSheet` controls.

#### `shadow_color`

Overrides the default value of `BottomSheet.shadow_color` in all descendant `BottomSheet` controls.

#### `shape`

Overrides the default value of `BottomSheet.shape` in all descendant `BottomSheet` controls.

#### `show_drag_handle`

Overrides the default value of `BottomSheet.show_drag_handle` in all descendant `BottomSheet` controls.

#### `surface_tint_color`

Overrides the default value of `BottomSheet.surface_tint_color` in all descendant `BottomSheet` controls.

### `CardTheme` class

Customizes the appearance of `Card` across the app.

`CardTheme` class has the following properties:

#### `clip_behavior`

Overrides the default value of `Card.clip_behavior` in all descendant `Card` controls.

#### `color`

Overrides the default value of `Card.color` in all descendant `Card` controls.

#### `elevation`

Overrides the default value of `Card.elevation` in all descendant `Card` controls.

#### `margin`

Overrides the default value of `Card.margin` in all descendant `Card` controls.

#### `shadow_color`

Overrides the default value of `Card.shadow_color` in all descendant `Card` controls.

#### `shape`

Overrides the default value of `Card.shape` in all descendant `Card` controls.

#### `surface_tint_color`

Overrides the default value of `Card.surface_tint_color` in all descendant `Card` controls.

### `CheckboxTheme` class

Customizes the appearance of `Checkbox` across the app.

`CheckboxTheme` class has the following properties:

#### `border_side`

Overrides the default value of `Checkbox.border_side` in all descendant `Checkbox` controls.

#### `check_color`

Overrides the default value of `Checkbox.check_color` in all descendant `Checkbox` controls.

#### `fill_color`

Overrides the default value of `Checkbox.fill_color` in all descendant `Checkbox` controls.

#### `mouse_cursor`

Overrides the default value of `Checkbox.mouse_cursor` in all descendant `Checkbox` controls.

#### `overlay_color`

Overrides the default value of `Checkbox.overlay_color` in all descendant `Checkbox` controls.

#### `shape`

Overrides the default value of `Checkbox.shape` in all descendant `Checkbox` controls.

#### `splash_radius`

Overrides the default value of `Checkbox.splash_radius` in all descendant `Checkbox` controls.

#### `visual_density`

Overrides the default value of `Checkbox.visual_density` in all descendant `Checkbox` controls.

### `ChipTheme` class

Customizes the appearance of `Chip` across the app.

`ChipTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `Chip.bgcolor` in all descendant `Chip` controls.

#### `border_side`

Overrides the default value of `Chip.border_side` in all descendant `Chip` controls.

#### `brightness`

Overrides the default value of `Chip.brightness` in all descendant `Chip` controls.

#### `checkmark_color`

Overrides the default value of `Chip.checkmark_color` in all descendant `Chip` controls.

#### `click_elevation`

Overrides the default value of `Chip.click_elevation` in all descendant `Chip` controls.

#### `delete_icon_color`

Overrides the default value of `Chip.delete_icon_color` in all descendant `Chip` controls.

#### `disabled_color`

Overrides the default value of `Chip.disabled_color` in all descendant `Chip` controls.

#### `elevation`

Overrides the default value of `Chip.elevation` in all descendant `Chip` controls.

#### `label_padding`

Overrides the default value of `Chip.label_padding` in all descendant `Chip` controls.

#### `label_text_style`

Overrides the default value of `Chip.label_text_style` in all descendant `Chip` controls.

#### `padding`

Overrides the default value of `Chip.padding` in all descendant `Chip` controls.

#### `secondary_label_text_style`

Overrides the default value of `Chip.secondary_label_text_style` in all descendant `Chip` controls.

#### `secondary_selected_color`

Overrides the default value of `Chip.secondary_selected_color` in all descendant `Chip` controls.

#### `selected_color`

Overrides the default value of `Chip.selected_color` in all descendant `Chip` controls.

#### `selected_shadow_color`

Overrides the default value of `Chip.selected_shadow_color` in all descendant `Chip` controls.

#### `shadow_color`

Overrides the default value of `Chip.shadow_color` in all descendant `Chip` controls.

#### `shape`

Overrides the default value of `Chip.shape` in all descendant `Chip` controls.

#### `show_checkmark`

Overrides the default value of `Chip.show_checkmark` in all descendant `Chip` controls.

#### `surface_tint_color`

Overrides the default value of `Chip.surface_tint_color` in all descendant `Chip` controls.

### `DatePickerTheme` class

Customizes the appearance of `DatePicker` across the app.

`DatePickerTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `DatePicker.bgcolor` in all descendant `DatePicker` controls.

#### `cancel_button_style`

Overrides the default value of `DatePicker.cancel_button_style` in all descendant `DatePicker` controls.

#### `confirm_button_style`

Overrides the default value of `DatePicker.confirm_button_style` in all descendant `DatePicker` controls.

#### `day_bgcolor`

Overrides the default value of `DatePicker.day_bgcolor` in all descendant `DatePicker` controls.

#### `day_foreground_color`

Overrides the default value of `DatePicker.day_foreground_color` in all descendant `DatePicker` controls.

#### `day_overlay_color`

Overrides the default value of `DatePicker.day_overlay_color` in all descendant `DatePicker` controls.

#### `day_text_style`

Overrides the default value of `DatePicker.day_text_style` in all descendant `DatePicker` controls.

#### `divider_color`

Overrides the default value of `DatePicker.divider_color` in all descendant `DatePicker` controls.

#### `elevation`

Overrides the default value of `DatePicker.elevation` in all descendant `DatePicker` controls.

#### `header_bgcolor`

Overrides the default value of `DatePicker.header_bgcolor` in all descendant `DatePicker` controls.

#### `header_foreground_color`

Overrides the default value of `DatePicker.header_foreground_color` in all descendant `DatePicker` controls.

#### `header_headline_text_style`

Overrides the default value of `DatePicker.header_headline_text_style` in all descendant `DatePicker` controls.

#### `header_help_text_style`

Overrides the default value of `DatePicker.header_help_text_style` in all descendant `DatePicker` controls.

#### `range_picker_bgcolor`

Overrides the default value of `DatePicker.range_picker_bgcolor` in all descendant `DatePicker` controls.

#### `range_picker_elevation`

Overrides the default value of `DatePicker.range_picker_elevation` in all descendant `DatePicker` controls.

#### `range_picker_header_bgcolor`

Overrides the default value of `DatePicker.range_picker_header_bgcolor` in all descendant `DatePicker` controls.

#### `range_picker_header_foreground_color`

Overrides the default value of `DatePicker.range_picker_header_foreground_color` in all descendant `DatePicker`
controls.

#### `range_picker_header_headline_text_style`

Overrides the default value of `DatePicker.range_picker_header_headline_text_style` in all descendant `DatePicker`
controls.

#### `range_picker_header_help_text_style`

Overrides the default value of `DatePicker.range_picker_header_help_text_style` in all descendant `DatePicker` controls.

#### `range_picker_shape`

Overrides the default value of `DatePicker.range_picker_shape` in all descendant `DatePicker` controls.

#### `range_picker_surface_tint_color`

Overrides the default value of `DatePicker.range_picker_surface_tint_color` in all descendant `DatePicker` controls.

#### `range_selection_bgcolor`

Overrides the default value of `DatePicker.range_selection_bgcolor` in all descendant `DatePicker` controls.

#### `range_selection_overlay_color`

Overrides the default value of `DatePicker.range_selection_overlay_color` in all descendant `DatePicker` controls.

#### `shadow_color`

Overrides the default value of `DatePicker.shadow_color` in all descendant `DatePicker` controls.

#### `shape`

Overrides the default value of `DatePicker.shape` in all descendant `DatePicker` controls.

#### `surface_tint_color`

Overrides the default value of `DatePicker.surface_tint_color` in all descendant `DatePicker` controls.

#### `today_bgcolor`

Overrides the default value of `DatePicker.today_bgcolor` in all descendant `DatePicker` controls.

#### `today_border_side`

Overrides the default value of `DatePicker.today_border_side` in all descendant `DatePicker` controls.

#### `today_foreground_color`

Overrides the default value of `DatePicker.today_foreground_color` in all descendant `DatePicker` controls.

#### `weekday_text_style`

Overrides the default value of `DatePicker.weekday_text_style` in all descendant `DatePicker` controls.

#### `year_bgcolor`

Overrides the default value of `DatePicker.year_bgcolor` in all descendant `DatePicker` controls.

#### `year_foreground_color`

Overrides the default value of `DatePicker.year_foreground_color` in all descendant `DatePicker` controls.

#### `year_overlay_color`

Overrides the default value of `DatePicker.year_overlay_color` in all descendant `DatePicker` controls.

#### `year_text_style`

Overrides the default value of `DatePicker.year_text_style` in all descendant `DatePicker` controls.

### `DialogTheme` class

Customizes the appearance of `Dialog` across the app.

`DialogTheme` class has the following properties:

#### `actions_padding`

Overrides the default value of `Dialog.actions_padding` in all descendant `Dialog` controls.

#### `alignment`

Overrides the default value of `Dialog.alignment` in all descendant `Dialog` controls.

#### `bgcolor`

Overrides the default value of `Dialog.bgcolor` in all descendant `Dialog` controls.

#### `content_text_style`

Overrides the default value of `Dialog.content_text_style` in all descendant `Dialog` controls.

#### `elevation`

Overrides the default value of `Dialog.elevation` in all descendant `Dialog` controls.

#### `icon_color`

Overrides the default value of `Dialog.icon_color` in all descendant `Dialog` controls.

#### `shadow_color`

Overrides the default value of `Dialog.shadow_color` in all descendant `Dialog` controls.

#### `shape`

Overrides the default value of `Dialog.shape` in all descendant `Dialog` controls.

#### `surface_tint_color`

Overrides the default value of `Dialog.surface_tint_color` in all descendant `Dialog` controls.

#### `title_text_style`

Overrides the default value of `Dialog.title_text_style` in all descendant `Dialog` controls.

### `DividerTheme` class

Customizes the appearance of `Divider` across the app.

`DividerTheme` class has the following properties:

#### `color`

Overrides the default value of `Divider.color` in all descendant `Divider` controls.

#### `leading_indent`

Overrides the default value of `Divider.leading_indent` in all descendant `Divider` controls.

#### `space`

Overrides the default value of `Divider.space` in all descendant `Divider` controls.

#### `thickness`

Overrides the default value of `Divider.thickness` in all descendant `Divider` controls.

#### `trailing_indent`

Overrides the default value of `Divider.trailing_indent` in all descendant `Divider` controls.

### `ExpansionTileTheme` class

Customizes the appearance of `ExpansionTile` across the app.

`ExpansionTileTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `ExpansionTile.bgcolor` in all descendant `ExpansionTile` controls.

#### `collapsed_bgcolor`

Overrides the default value of `ExpansionTile.collapsed_bgcolor` in all descendant `ExpansionTile` controls.

#### `collapsed_icon_color`

Overrides the default value of `ExpansionTile.collapsed_icon_color` in all descendant `ExpansionTile` controls.

#### `icon_color`

Overrides the default value of `ExpansionTile.icon_color` in all descendant `ExpansionTile` controls.

#### `text_color`

Overrides the default value of `ExpansionTile.text_color` in all descendant `ExpansionTile` controls.

### `ListTileTheme` class

Customizes the appearance of `ListTile` across the app.

`ListTileTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `ListTile.bgcolor` in all descendant `ListTile` controls.

#### `content_padding`

Overrides the default value of `ListTile.content_padding` in all descendant `ListTile` controls.

#### `dense`

Overrides the default value of `ListTile.dense` in all descendant `ListTile` controls.

#### `enable_feedback`

Overrides the default value of `ListTile.enable_feedback` in all descendant `ListTile` controls.

#### `horizontal_spacing`

Overrides the default value of `ListTile.horizontal_spacing` in all descendant `ListTile` controls.

#### `icon_color`

Overrides the default value of `ListTile.icon_color` in all descendant `ListTile` controls.

#### `is_three_line`

Overrides the default value of `ListTile.is_three_line` in all descendant `ListTile` controls.

#### `leading_and_trailing_text_style`

Overrides the default value of `ListTile.leading_and_trailing_text_style` in all descendant `ListTile` controls.

#### `min_leading_width`

Overrides the default value of `ListTile.min_leading_width` in all descendant `ListTile` controls.

#### `min_vertical_padding`

Overrides the default value of `ListTile.min_vertical_padding` in all descendant `ListTile` controls.

#### `selected_tile_color`

Overrides the default value of `ListTile.selected_tile_color` in all descendant `ListTile` controls.

#### `selected_color`

Overrides the default value of `ListTile.selected_color` in all descendant `ListTile` controls.

#### `shape`

Overrides the default value of `ListTile.shape` in all descendant `ListTile` controls.

#### `subtitle_text_style`

Overrides the default value of `ListTile.subtitle_text_style` in all descendant `ListTile` controls.

#### `text_color`

Overrides the default value of `ListTile.text_color` in all descendant `ListTile` controls.

#### `title_text_style`

Overrides the default value of `ListTile.title_text_style` in all descendant `ListTile` controls.

#### `visual_density`

Overrides the default value of `ListTile.visual_density` in all descendant `ListTile` controls.

### `NavigationBarTheme` class

Customizes the appearance of `NavigationBar` across the app.

`NavigationBarTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `NavigationBar.bgcolor` in all descendant `NavigationBar` controls.

#### `elevation`

Overrides the default value of `NavigationBar.elevation` in all descendant `NavigationBar` controls.

#### `height`

Overrides the default value of `NavigationBar.height` in all descendant `NavigationBar` controls.

#### `indicator_color`

Overrides the default value of `NavigationBar.indicator_color` in all descendant `NavigationBar` controls.

#### `indicator_shape`

Overrides the default value of `NavigationBar.indicator_shape` in all descendant `NavigationBar` controls.

#### `label_behavior`

Overrides the default value of `NavigationBar.label_behavior` in all descendant `NavigationBar` controls.

#### `label_text_style`

Overrides the default value of `NavigationBar.label_text_style` in all descendant `NavigationBar` controls.

#### `overlay_color`

Overrides the default value of `NavigationBar.overlay_color` in all descendant `NavigationBar` controls.

#### `shadow_color`

Overrides the default value of `NavigationBar.shadow_color` in all descendant `NavigationBar` controls.

#### `surface_tint_color`

Overrides the default value of `NavigationBar.surface_tint_color` in all descendant `NavigationBar` controls.

### `NavigationDrawerTheme` class

Customizes the appearance of `NavigationDrawer` across the app.

`NavigationDrawerTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `NavigationDrawer.bgcolor` in all descendant `NavigationDrawer` controls.

#### `elevation`

Overrides the default value of `NavigationDrawer.elevation` in all descendant `NavigationDrawer` controls.

#### `indicator_color`

Overrides the default value of `NavigationDrawer.indicator_color` in all descendant `NavigationDrawer` controls.

#### `indicator_shape`

Overrides the default value of `NavigationDrawer.indicator_shape` in all descendant `NavigationDrawer` controls.

#### `label_text_style`

Overrides the default value of `NavigationDrawer.label_text_style` in all descendant `NavigationDrawer` controls.

#### `shadow_color`

Overrides the default value of `NavigationDrawer.shadow_color` in all descendant `NavigationDrawer` controls.

#### `surface_tint_color`

Overrides the default value of `NavigationDrawer.surface_tint_color` in all descendant `NavigationDrawer` controls.

#### `tile_height`

Overrides the default value of `NavigationDrawer.tile_height` in all descendant `NavigationDrawer` controls.

### `NavigationRailTheme` class

Customizes the appearance of `NavigationRail` across the app.

`NavigationRailTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `NavigationRail.bgcolor` in all descendant `NavigationRail` controls.

#### `elevation`

Overrides the default value of `NavigationRail.elevation` in all descendant `NavigationRail` controls.

#### `group_alignment`

Overrides the default value of `NavigationRail.group_alignment` in all descendant `NavigationRail` controls.

#### `indicator_color`

Overrides the default value of `NavigationRail.indicator_color` in all descendant `NavigationRail` controls.

#### `indicator_shape`

Overrides the default value of `NavigationRail.indicator_shape` in all descendant `NavigationRail` controls.

#### `label_type`

Overrides the default value of `NavigationRail.label_type` in all descendant `NavigationRail` controls.

#### `min_extended_width`

Overrides the default value of `NavigationRail.min_extended_width` in all descendant `NavigationRail` controls.

#### `min_width`

Overrides the default value of `NavigationRail.min_width` in all descendant `NavigationRail` controls.

#### `selected_label_text_style`

Overrides the default value of `NavigationRail.selected_label_text_style` in all descendant `NavigationRail` controls.

#### `unselected_label_text_style`

Overrides the default value of `NavigationRail.unselected_label_text_style` in all descendant `NavigationRail` controls.

#### `use_indicator`

Overrides the default value of `NavigationRail.use_indicator` in all descendant `NavigationRail` controls.

### `PopupMenuTheme` class

Customizes the appearance of `PopupMenuButton` across the app.

`PopupMenuTheme` class has the following properties:

#### `color`

Overrides the default value of `PopupMenuButton.color` in all descendant `PopupMenuButton` controls.

#### `elevation`

Overrides the default value of `PopupMenuButton.elevation` in all descendant `PopupMenuButton` controls.

#### `enable_feedback`

Overrides the default value of `PopupMenuButton.enable_feedback` in all descendant `PopupMenuButton` controls.

#### `icon_color`

Overrides the default value of `PopupMenuButton.icon_color` in all descendant `PopupMenuButton` controls.

#### `icon_size`

Overrides the default value of `PopupMenuButton.icon_size` in all descendant `PopupMenuButton` controls.

#### `label_text_style`

Overrides the default value of `PopupMenuButton.label_text_style` in all descendant `PopupMenuButton` controls.

#### `menu_position`

Overrides the default value of `PopupMenuButton.menu_position` in all descendant `PopupMenuButton` controls.

#### `mouse_cursor`

Overrides the default value of `PopupMenuButton.mouse_cursor` in all descendant `PopupMenuButton` controls.

#### `shadow_color`

Overrides the default value of `PopupMenuButton.shadow_color` in all descendant `PopupMenuButton` controls.

#### `shape`

Overrides the default value of `PopupMenuButton.shape` in all descendant `PopupMenuButton` controls.

#### `surface_tint_color`

Overrides the default value of `PopupMenuButton.surface_tint_color` in all descendant `PopupMenuButton` controls.

#### `text_style`

Overrides the default value of `PopupMenuButton.text_style` in all descendant `PopupMenuButton` controls.

### `ProgressIndicatorTheme` class

Customizes the appearance of `ProgressIndicator` across the app.

`ProgressIndicatorTheme` class has the following properties:

#### `circular_track_color`

Overrides the default value of `ProgressIndicator.circular_track_color` in all descendant `ProgressIndicator` controls.

#### `color`

Overrides the default value of `ProgressIndicator.color` in all descendant `ProgressIndicator` controls.

#### `linear_min_height`

Overrides the default value of `ProgressIndicator.linear_min_height` in all descendant `ProgressIndicator` controls.

#### `linear_track_color`

Overrides the default value of `ProgressIndicator.linear_track_color` in all descendant `ProgressIndicator` controls.

#### `refresh_bgcolor`

TBA

### `RadioTheme` class

Customizes the appearance of `Radio` across the app.

`RadioTheme` class has the following properties:

#### `fill_color`

Overrides the default value of `Radio.fill_color` in all descendant `Radio` controls.

#### `height`

Overrides the default value of `Radio.height` in all descendant `Radio` controls.

#### `mouse_cursor`

Overrides the default value of `Radio.mouse_cursor` in all descendant `Radio` controls.

#### `overlay_color`

Overrides the default value of `Radio.overlay_color` in all descendant `Radio` controls.

#### `splash_radius`

Overrides the default value of `Radio.splash_radius` in all descendant `Radio` controls.

#### `visual_density`

Overrides the default value of `Radio.visual_density` in all descendant `Radio` controls.

### `SearchBarTheme` class

Customizes the appearance of `SearchBar` (in 'bar' mode) across the app.

`SearchBarTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `SearchBar.bar_bgcolor` in all descendant `SearchBar` controls.

#### `elevation`

Overrides the default value of `SearchBar.bar_elevation` in all descendant `SearchBar` controls.

#### `hint_style`

Overrides the default value of `SearchBar.hint_style` in all descendant `SearchBar` controls.

#### `overlay_color`

Overrides the default value of `SearchBar.overlay_color` in all descendant `SearchBar` controls.

#### `shadow_color`

Overrides the default value of `SearchBar.shadow_color` in all descendant `SearchBar` controls.

#### `surface_tint_color`

Overrides the default value of `SearchBar.surface_tint_color` in all descendant `SearchBar` controls.

#### `text_capitalization`

Overrides the default value of `SearchBar.text_capitalization` in all descendant `SearchBar` controls.

#### `text_style`

Overrides the default value of `SearchBar.text_style` in all descendant `SearchBar` controls.

#### `padding`

Overrides the default value of `SearchBar.padding` in all descendant `SearchBar` controls.

#### `shape`

Overrides the default value of `SearchBar.shape` in all descendant `SearchBar` controls.

### `SearchViewTheme` class

Customizes the appearance of `SearchView` (in 'view' mode) across the app.

`SearchViewTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `SearchBar.view_bgcolor` in all descendant `SearchBar` controls.

#### `border_side`

Overrides the default value of `SearchBar.border_side` in all descendant `SearchBar` controls.

#### `divider_color`

Overrides the default value of `SearchBar.divider_color` in all descendant `SearchBar` controls.

#### `elevation`

Overrides the default value of `SearchBar.view_elevation` in all descendant `SearchBar` controls.

#### `header_hint_text_style`

Overrides the default value of `SearchBar.header_hint_text_style` in all descendant `SearchBar` controls.

#### `header_text_style`

Overrides the default value of `SearchBar.header_text_style` in all descendant `SearchBar` controls.

#### `shape`

Overrides the default value of `SearchBar.shape` in all descendant `SearchBar` controls.

#### `surface_tint_color`

Overrides the default value of `SearchBar.surface_tint_color` in all descendant `SearchBar` controls.

### `SegmentedButtonTheme` class

Customizes the appearance of `SegmentedButton` across the app.

`SegmentedButtonTheme` class has the following properties:

#### `style`

Overrides the default value of `SegmentedButton.style` in all descendant `SegmentedButton` controls.

### `SliderTheme` class

Customizes the appearance of `Slider` across the app.

`SliderTheme` class has the following properties:

#### `active_track_color`

Overrides the default value of `Slider.active_track_color` in all descendant `Slider` controls.

#### `disabled_thumb_color`

Overrides the default value of `Slider.disabled_thumb_color` in all descendant `Slider` controls.

#### `inactive_track_color`

Overrides the default value of `Slider.inactive_track_color` in all descendant `Slider` controls.

#### `overlay_color`

Overrides the default value of `Slider.overlay_color` in all descendant `Slider` controls.

#### `thumb_color`

Overrides the default value of `Slider.thumb_color` in all descendant `Slider` controls.

#### `value_indicator_color`

Overrides the default value of `Slider.value_indicator_color` in all descendant `Slider` controls.

#### `value_indicator_text_style`

Overrides the default value of `Slider.value_indicator_text_style` in all descendant `Slider` controls.

### `SnackBarTheme` class

Customizes the appearance of `SnackBar` across the app.

`SnackBarTheme` class has the following properties:

#### `action_bgcolor`

Overrides the default value of `SnackBar.action_bgcolor` in all descendant `SnackBar` controls.

#### `action_overflow_threshold`

Overrides the default value of `SnackBar.action_overflow_threshold` in all descendant `SnackBar` controls.

#### `action_text_color`

Overrides the default value of `SnackBar.action_text_color` in all descendant `SnackBar` controls.

#### `alignment`

Overrides the default value of `SnackBar.alignment` in all descendant `SnackBar` controls.

#### `behavior`

Overrides the default value of `SnackBar.behavior` in all descendant `SnackBar` controls.

#### `bgcolor`

Overrides the default value of `SnackBar.bgcolor` in all descendant `SnackBar` controls.

#### `close_icon_color`

Overrides the default value of `SnackBar.close_icon_color` in all descendant `SnackBar` controls.

#### `content_text_style`

Overrides the default value of `SnackBar.content_text_style` in all descendant `SnackBar` controls.

#### `disabled_action_bgcolor`

Overrides the default value of `SnackBar.disabled_action_bgcolor` in all descendant `SnackBar` controls.

#### `disabled_action_text_color`

Overrides the default value of `SnackBar.disabled_action_text_color` in all descendant `SnackBar` controls.

#### `elevation`

Overrides the default value of `SnackBar.elevation` in all descendant `SnackBar` controls.

#### `dismiss_direction`

Overrides the default value of `SnackBar.dismiss_direction` in all descendant `SnackBar` controls.

#### `inset_padding`

Overrides the default value of `SnackBar.inset_padding` in all descendant `SnackBar` controls.

#### `shape`

Overrides the default value of `SnackBar.shape` in all descendant `SnackBar` controls.

#### `show_close_icon`

Overrides the default value of `SnackBar.show_close_icon` in all descendant `SnackBar` controls.

#### `width`

Overrides the default value of `SnackBar.width` in all descendant `SnackBar` controls.

### `SwitchTheme` class

Customizes the appearance of `Switch` across the app.

`SwitchTheme` class has the following properties:

#### `mouse_cursor`

Overrides the default value of `Switch.mouse_cursor` in all descendant `Switch` controls.

#### `overlay_color`

Overrides the default value of `Switch.overlay_color` in all descendant `Switch` controls.

#### `splash_radius`

Overrides the default value of `Switch.splash_radius` in all descendant `Switch` controls.

#### `thumb_color`

Overrides the default value of `Switch.thumb_color` in all descendant `Switch` controls.

#### `thumb_icon`

Overrides the default value of `Switch.thumb_icon` in all descendant `Switch` controls.

#### `track_color`

Overrides the default value of `Switch.track_color` in all descendant `Switch` controls.

#### `track_outline_color`

Overrides the default value of `Switch.track_outline_color` in all descendant `Switch` controls.

#### `track_outline_width`

Overrides the default value of `Switch.track_outline_width` in all descendant `Switch` controls.

### `TimePickerTheme` class

Customizes the appearance of `TimePicker` across the app.

`TimePickerTheme` class has the following properties:

#### `bgcolor`

Overrides the default value of `TimePicker.bgcolor` in all descendant `TimePicker` controls.

#### `cancel_button_style`

Overrides the default value of `TimePicker.cancel_button_style` in all descendant `TimePicker` controls.

#### `confirm_button_style`

Overrides the default value of `TimePicker.confirm_button_style` in all descendant `TimePicker` controls.

#### `day_period_border_side`

Overrides the default value of `TimePicker.day_period_border_side` in all descendant `TimePicker` controls.

#### `day_period_button_style`

Overrides the default value of `TimePicker.day_period_button_style` in all descendant `TimePicker` controls.

#### `day_period_color`

Overrides the default value of `TimePicker.day_period_color` in all descendant `TimePicker` controls.

#### `day_period_shape`

Overrides the default value of `TimePicker.day_period_shape` in all descendant `TimePicker` controls.

#### `day_period_text_color`

Overrides the default value of `TimePicker.day_period_text_color` in all descendant `TimePicker` controls.

#### `day_period_text_style`

Overrides the default value of `TimePicker.day_period_text_style` in all descendant `TimePicker` controls.

#### `dial_bgcolor`

Overrides the default value of `TimePicker.dial_bgcolor` in all descendant `TimePicker` controls.

#### `dial_hand_color`

Overrides the default value of `TimePicker.dial_hand_color` in all descendant `TimePicker` controls.

#### `dial_text_color`

Overrides the default value of `TimePicker.dial_text_color` in all descendant `TimePicker` controls.

#### `dial_text_style`

Overrides the default value of `TimePicker.dial_text_style` in all descendant `TimePicker` controls.

#### `elevation`

Overrides the default value of `TimePicker.elevation` in all descendant `TimePicker` controls.

#### `entry_mode_icon_color`

Overrides the default value of `TimePicker.entry_mode_icon_color` in all descendant `TimePicker` controls.

#### `help_text_style`

Overrides the default value of `TimePicker.help_text_style` in all descendant `TimePicker` controls.

#### `hour_minute_color`

Overrides the default value of `TimePicker.hour_minute_color` in all descendant `TimePicker` controls.

#### `hour_minute_text_color`

Overrides the default value of `TimePicker.hour_minute_text_color` in all descendant `TimePicker` controls.

#### `hour_minute_text_style`

Overrides the default value of `TimePicker.hour_minute_text_style` in all descendant `TimePicker` controls.

#### `hour_minute_shape`

Overrides the default value of `TimePicker.hour_minute_shape` in all descendant `TimePicker` controls.

#### `padding`

Overrides the default value of `TimePicker.padding` in all descendant `TimePicker` controls.

#### `shape`

Overrides the default value of `TimePicker.shape` in all descendant `TimePicker` controls.

### `TooltipTheme` class

Customizes the appearance of `Tooltip` across the app.

`TooltipTheme` class has the following properties:

#### `enable_feedback`

Overrides the default value of `Tooltip.enable_feedback` in all descendant `Tooltip` controls.

#### `exclude_from_semantics`

Overrides the default value of `Tooltip.exclude_from_semantics` in all descendant `Tooltip` controls.

#### `height`

Overrides the default value of `Tooltip.height` in all descendant `Tooltip` controls.

#### `text_style`

Overrides the default value of `Tooltip.text_style` in all descendant `Tooltip` controls.



