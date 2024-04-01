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

An instance of [`ColorScheme`](#colorscheme-class) class that allows to customize Material colors scheme derived from `color_scheme_seed`.

#### `text_theme`

An instance of [`TextTheme`](#texttheme-class) class to customize text styles that contrasts with the card and canvas colors.

#### `primary_text_theme`

An instance of [`TextTheme`](#texttheme-class) class describing a text theme that contrasts with the primary color.

#### `scrollbar_theme`

An instance of [`ScrollbarTheme`](#scrollbartheme-class)

#### `tabs_theme`

An instance of [`TabsTheme`](#tabstheme-class) 

#### `font_family`

The base font for all UI elements.

#### `use_material3` 

True` (default) to use Material 3 design; otherwise Material 2.

#### `visual_density` 

ThemeVisualDensity enum: `STANDARD` (default), `COMPACT`, `COMFORTABLE`, `ADAPTIVE_PLATFORM_DENSITY`.

#### `page_transitions`

An instance of [`PageTransitionsTheme`](#pagetransitionstheme-class)

#### `system_overlay_style`

An instance of [`SystemOverlayStyle`](#systemoverlaystyle-class)

#### `appbar_theme`

An instance of [`AppBarTheme`](#appbartheme-class).

#### `badge_theme`

An instance of [`BadgeTheme`](#badgetheme-class).

#### `banner_theme`

An instance of [`BannerTheme`](#bannertheme-class).

#### `bottom_appbar_theme`

An instance of [`BottomAppBarTheme`](#bottomappbartheme-class).

#### `bottom_navigation_bar_theme`

An instance of [`BottomNavigationBarTheme`](#bottomnavigationbartheme-class).

#### `bottom_sheet_theme`

An instance of [`BottomSheetTheme`](#bottomsheettheme-class).

#### `card_theme`

An instance of [`CardTheme`](#cardtheme-class).

#### `checkbox_theme`

An instance of [`CheckboxTheme`](#checkboxtheme-class).

#### `chip_theme`

An instance of [`ChipTheme`](#chiptheme-class).

#### `date_picker_theme`

An instance of [`DatePickerTheme`](#datepickertheme-class).

#### `dialog_theme`

An instance of [`DialogTheme`](#dialogtheme-class).

#### `divider_theme`

An instance of [`DividerTheme`](#dividertheme-class).

#### `expansion_tile_theme`

An instance of [`ExpansionTileTheme`](#expansiontiletheme-class).

#### `list_tile_theme`

An instance of [`ListTileTheme`](#listtiletheme-class).

#### `navigation_bar_theme`

An instance of [`NavigationBarTheme`](#navigationbartheme-class).

#### `navigation_drawer_theme`

An instance of [`NavigationDrawerTheme`](#navigationdrawertheme-class).

#### `navigation_rail_theme`

An instance of [`NavigationRailTheme`](#navigationrailtheme-class).

#### `popup_menu_theme`

An instance of [`PopupMenuTheme`](#popupmenutheme-class).

#### `primary_color`

XX

#### `primary_color_dark`

XX

#### `primary_color_light`

XX

#### `primary_swatch`

XX

#### `progress_indicator_theme`

An instance of [`ProgressIndicatorTheme`](#progressindicatortheme-class).

#### `radio_theme`

An instance of [`RadioTheme`](#radiotheme-class).

#### `search_bar_theme`

An instance of [`SearchBarTheme`](#searchbartheme-class).

#### `search_view_theme`

An instance of [`SearchViewTheme`](#searchviewtheme-class).

#### `segmented_button_theme`

An instance of [`SegmentedButtonTheme`](#segmentedbuttontheme-class).

#### `slider_theme`

An instance of [`SliderTheme`](#slidertheme-class).

#### `snackbar_theme`

An instance of [`SnackBarTheme`](#snackbartheme-class).

#### `switch_theme`

An instance of [`SwitchTheme`](#switchtheme-class).

#### `time_picker_theme`

An instance of [`TimePickerTheme`](#timepickertheme-class).

#### `tooltip_theme`

An instance of [`TooltipTheme`](#tooltiptheme-class).

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

Indicates that the scrollbar thumb should be visible, even when a scroll is not underway. When `False`, the scrollbar will be shown during scrolling and will fade out otherwise. When `True`, the scrollbar will always be visible and never fade out. Property value could be either a single boolean value or a dictionary with `ft.MaterialState` as keys and boolean as values.

#### `thickness`

The thickness of the scrollbar in the cross axis of the scrollable. Property value could be either a single float value or a dictionary with `ft.MaterialState` as keys and float as values.

#### `track_visibility`

Indicates that the scrollbar track should be visible. When `True`, the scrollbar track will always be visible so long as the thumb is visible. If the scrollbar thumb is not visible, the track will not be visible either. Defaults to `False` when `None`. If this property is `None`, then `ScrollbarTheme.track_visibility` of `Theme.scrollbar_theme` is used. If that is also `None`, the default value is `False`. Property value could be either a single boolean value or a dictionary with `ft.MaterialState` as keys and boolean as values.

#### `radius`

The Radius of the scrollbar thumb's rounded rectangle corners.

#### `thumb_color`

Overrides the default Color of the Scrollbar thumb. The value is either a single color string or `ft.MaterialState` dictionary.

#### `track_color`

Overrides the default Color of the Scrollbar track. The value is either a single color string or `ft.MaterialState` dictionary.

#### `track_border_color`

Overrides the default Color of the Scrollbar track border. The value is either a single color string or `ft.MaterialState` dictionary.

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

Defines the ink response focus, hover, and splash colors. If specified, it is resolved against one of `MaterialState.FOCUSED`, `MaterialState.HOVERED`, and `MaterialState.PRESSED`.

### `PageTransitionTheme` class

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

The [color](/docs/guides/python/colors) of the system navigation bar.

#### `system_navigation_bar_divider_color`

The [color](/docs/guides/python/colors) of the divider between the system navigation bar and the app content.

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

#### `center_title`

#### `color`

#### `elevation`

#### `foreground_color`

#### `scroll_elevation`

#### `shadow_color`

#### `shape`

#### `surface_tint_color`

#### `title_spacing`

#### `title_text_style`

#### `toolbar_height`

#### `toolbar_text_style`

### `BadgeTheme` class

Customizes the appearance of `Badge` across the app.

`BadgeTheme` class has the following properties:

#### `alignment`

#### `bgcolor`

#### `large_size`

#### `offset`

#### `padding`

#### `small_size`

#### `text_color`

#### `text_style`

### `BannerTheme` class

Customizes the appearance of `Banner` across the app.

`BannerTheme` class has the following properties:

#### `bgcolor`

#### `content_text_style`

#### `divider_color`

#### `elevation`

#### `leading_padding`

#### `padding`

#### `shadow_color`

#### `surface_tint_color`

### `BottomAppBarTheme` class

Customizes the appearance of `BottomAppBar` across the app.

`BottomAppBarTheme` class has the following properties:

#### `color`

#### `elevation`

#### `height`

#### `padding`

#### `shadow_color`

#### `surface_tint_color`

### `BottomNavigationBarTheme` class

Customizes the appearance of `BottomNavigationBar` across the app.

`BottomNavigationBarTheme` class has the following properties:

#### `bgcolor`

#### `elevation`

#### `enable_feedback`

#### `show_unselected_labels`

#### `selected_item_color`

#### `selected_label_text_style`

#### `show_selected_labels`

#### `unselected_item_color`

#### `unselected_label_text_style`

### `BottomSheetTheme` class

Customizes the appearance of `BottomSheet` across the app.

`BottomSheetTheme` class has the following properties:

#### `bgcolor`

#### `clip_behavior`

#### `drag_handle_color`

#### `elevation`

#### `modal_bgcolor`

#### `modal_elevation`

#### `shadow_color`

#### `shape`

#### `show_drag_handle`

#### `surface_tint_color`

### `CardTheme` class

Customizes the appearance of `Card` across the app.

`CardTheme` class has the following properties:

#### `clip_behavior`

#### `color`

#### `elevation`

#### `margin`

#### `shadow_color`

#### `shape`

#### `surface_tint_color`

### `CheckboxTheme` class

Customizes the appearance of `Checkbox` across the app.

`CheckboxTheme` class has the following properties:

#### `border_side`

#### `check_color`

#### `fill_color`

#### `mouse_cursor`

#### `overlay_color`

#### `shape`

#### `splash_radius`

#### `visual_density`

### `ChipTheme` class

Customizes the appearance of `Chip` across the app.

`ChipTheme` class has the following properties:

#### `bgcolor`

#### `border_side`

#### `brightness`

#### `checkmark_color`

#### `click_elevation`

#### `delete_icon_color`

#### `disabled_color`

#### `elevation`

#### `label_padding`

#### `label_text_style`

#### `padding`

#### `secondary_label_text_style`

#### `secondary_selected_color`

#### `selected_color`

#### `selected_shadow_color`

#### `shadow_color`

#### `shape`

#### `show_checkmark`

#### `surface_tint_color`

### `DatePickerTheme` class

Customizes the appearance of `DatePicker` across the app.

`DatePickerTheme` class has the following properties:

#### `bgcolor`

#### `cancel_button_style`

#### `confirm_button_style`

#### `day_bgcolor`

#### `day_foreground_color`

#### `day_overlay_color`

#### `day_text_style`

#### `divider_color`

#### `elevation`

#### `header_bgcolor`

#### `header_foreground_color`

#### `header_headline_text_style`

#### `header_help_text_style`

#### `range_picker_bgcolor`

#### `range_picker_elevation`

#### `range_picker_header_bgcolor`

#### `range_picker_header_foreground_color`

#### `range_picker_header_headline_text_style`

#### `range_picker_header_help_text_style`

#### `range_picker_shape`

#### `range_picker_surface_tint_color`

#### `range_selection_bgcolor`

#### `range_selection_overlay_color`

#### `shadow_color`

#### `shape`

#### `surface_tint_color`

#### `today_bgcolor`

#### `today_border_side`

#### `today_foreground_color`

#### `weekday_text_style`

#### `year_bgcolor`

#### `year_foreground_color`

#### `year_overlay_color`

#### `year_text_style`

### `DialogTheme` class

Customizes the appearance of `Dialog` across the app.

`DialogTheme` class has the following properties:

#### `actions_padding`

#### `alignment`

#### `bgcolor`

#### `content_text_style`

#### `elevation`

#### `icon_color`

#### `shadow_color`

#### `shape`

#### `surface_tint_color`

#### `title_text_style`

### `DividerTheme` class

Customizes the appearance of `Divider` across the app.

`DividerTheme` class has the following properties:

#### `color`

#### `leading_indent`

#### `space`

#### `thickness`

#### `trailing_indent`

### `ExpansionTileTheme` class

Customizes the appearance of `ExpansionTile` across the app.

`ExpansionTileTheme` class has the following properties:

#### `bgcolor`

#### `collapsed_bgcolor`

#### `collapsed_icon_color`

#### `icon_color`

#### `text_color`

### `ListTileTheme` class

Customizes the appearance of `ListTile` across the app.

`ListTileTheme` class has the following properties:

#### `bgcolor`

#### `content_padding`

#### `dense`

#### `enable_feedback`

#### `horizontal_spacing`

#### `icon_color`

#### `is_three_line`

#### `leading_and_trailing_text_style`

#### `min_leading_width`

#### `min_vertical_padding`

#### `selected_tile_color`

#### `selected_color`

#### `shape`

#### `subtitle_text_style`

#### `text_color`

#### `title_text_style`

#### `visual_density`

### `NavigationBarTheme` class

Customizes the appearance of `NavigationBar` across the app.

`NavigationBarTheme` class has the following properties:

#### `bgcolor`

#### `elevation`

#### `height`

#### `indicator_color`

#### `indicator_shape`

#### `label_behavior`

#### `label_text_style`

#### `overlay_color`

#### `shadow_color`

#### `surface_tint_color`

### `NavigationDrawerTheme` class

Customizes the appearance of `NavigationDrawer` across the app.

`NavigationDrawerTheme` class has the following properties:

#### `bgcolor`

#### `elevation`

#### `indicator_color`

#### `indicator_shape`

#### `label_text_style`

#### `shadow_color`

#### `surface_tint_color`

#### `tile_height`

### `NavigationRailTheme` class

Customizes the appearance of `NavigationRail` across the app.

`NavigationRailTheme` class has the following properties:

#### `bgcolor`

#### `elevation`

#### `group_alignment`

#### `indicator_color`

#### `indicator_shape`

#### `label_type`

#### `min_extended_width`

#### `min_width`

#### `selected_label_text_style`

#### `unselected_label_text_style`

#### `use_indicator`

### `PopupMenuTheme` class

Customizes the appearance of `PopupMenu` across the app.

`PopupMenuTheme` class has the following properties:

#### `color`

#### `elevation`

#### `enable_feedback`

#### `icon_color`

#### `icon_size`

#### `label_text_style`

#### `menu_position`

#### `mouse_cursor`

#### `shadow_color`

#### `shape`

#### `surface_tint_color`

#### `text_style`

### `ProgressIndicatorTheme` class

Customizes the appearance of `ProgressIndicator` across the app.

`ProgressIndicatorTheme` class has the following properties:

#### `circular_track_color`

#### `color`

#### `linear_min_height`

#### `linear_track_color`

#### `refresh_bgcolor`

### `RadioTheme` class

Customizes the appearance of `Radio` across the app.

`RadioTheme` class has the following properties:

#### `fill_color`

#### `height`

#### `mouse_cursor`

#### `overlay_color`

#### `splash_radius`

#### `visual_density`

### `SearchBarTheme` class

Customizes the appearance of `SearchBar` across the app.

`SearchBarTheme` class has the following properties:

#### `bgcolor`

#### `elevation`

#### `hint_style`

#### `overlay_color`

#### `shadow_color`

#### `surface_tint_color`

#### `text_capitalization`

#### `text_style`

#### `padding`

#### `shape`

### `SearchViewTheme` class

Customizes the appearance of `SearchView` across the app.

`SearchViewTheme` class has the following properties:

#### `bgcolor`

#### `border_side`

#### `divider_color`

#### `elevation`

#### `header_hint_text_style`

#### `header_text_style`

#### `shape`

#### `surface_tint_color`

### `SegmentedButtonTheme` class

Customizes the appearance of `SegmentedButton` across the app.

`SegmentedButtonTheme` class has the following properties:

#### `style`

### `SliderTheme` class

Customizes the appearance of `Slider` across the app.

`SliderTheme` class has the following properties:

#### `active_track_color`

#### `disabled_thumb_color`

#### `inactive_track_color`

#### `overlay_color`

#### `thumb_color`

#### `value_indicator_color`

#### `value_indicator_text_style`

### `SnackBarTheme` class

Customizes the appearance of `SnackBar` across the app.

`SnackBarTheme` class has the following properties:

#### `action_bgcolor`

#### `action_overflow_threshold`

#### `action_text_color`

#### `alignment`

#### `behavior`

#### `bgcolor`

#### `close_icon_color`

#### `content_text_style`

#### `disabled_action_bgcolor`

#### `disabled_action_text_color`

#### `elevation`

#### `dismiss_direction`

#### `inset_padding`

#### `shape`

#### `show_close_icon`

#### `width`

### `SwitchTheme` class

Customizes the appearance of `Switch` across the app.

`SwitchTheme` class has the following properties:

#### `mouse_cursor`

#### `overlay_color`

#### `splash_radius`

#### `thumb_color`

#### `thumb_icon`

#### `track_color`

#### `track_outline_color`

#### `track_outline_width`

### `TimePickerTheme` class

Customizes the appearance of `TimePicker` across the app.

`TimePickerTheme` class has the following properties:

#### `bgcolor`

#### `cancel_button_style`

#### `confirm_button_style`

#### `day_period_border_side`

#### `day_period_button_style`

#### `day_period_color`

#### `day_period_shape`

#### `day_period_text_color`

#### `day_period_text_style`

#### `dial_bgcolor`

#### `dial_hand_color`

#### `dial_text_color`

#### `dial_text_style`

#### `elevation`

#### `entry_mode_icon_color`

#### `help_text_style`

#### `hour_minute_color`

#### `hour_minute_text_color`

#### `hour_minute_text_style`

#### `hour_minute_shape`

#### `padding`

#### `shape`

### `TooltipTheme` class

Customizes the appearance of `Tooltip` across the app.

`TooltipTheme` class has the following properties:

#### `enable_feedback`

#### `exclude_from_semantics`

#### `height`

#### `text_style`



