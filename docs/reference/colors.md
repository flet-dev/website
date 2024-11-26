---
title: Colors
sidebar_label: Colors
---
<img src="/img/docs/colors/color_palettes.png"className="screenshot-100" />

## Color value

There are 2 ways to define color property value in Flet: hex value and named colors.

### Hex value

Hex value should be in format `#aarrggbb` (`0xaarrggbb`) or `#rrggbb` (`0xeeggbb`). In case `aa` ([opacity](/docs/reference/colors#color-opacity)) is omitted, it is set to `ff` (not transparent).

```python
c1 = ft.Container(bgcolor='#ff0000')
```

[Live example](https://flet-controls-gallery.fly.dev/colors/controlcolors)

### Named colors

Named colors are the Material Design [theme colors](https://m3.material.io/styles/color/the-color-system/color-roles) and [colors palettes](https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes). 
They can either be set with a string value or using the `Colors` or `CupertinoColors` enums.

```
c1 = ft.Container(bgcolor=ft.Colors.YELLOW)
c2 = ft.Container(bgcolor='yellow')
```

#### Theme colors

<img src="/img/docs/colors/theme_colors.png"className="screenshot-100" />

[Live Example](https://flet-controls-gallery.fly.dev/colors/themecolors)

There are 30 named theme colors in [`Theme.color_scheme`](/docs/reference/types/colorscheme) that are are generated based on the `color_scheme_seed` property. The default seed color value is "blue".

```
# example for generating page theme colors based on the seed color
page.theme = Theme(color_scheme_seed=ft.Colors.GREEN)
page.update()
```

Any of the 30 colors can be overridden, in which case they will have an absolute value that will not be dependent on the seed color.
```
page.theme = ft.Theme(
    color_scheme=ft.ColorScheme(
        primary=ft.Colors.GREEN,
        primary_container=ft.Colors.GREEN_200
        # ...
    ),
)
```

<img src="/img/docs/colors/theme_colors_green.png"className="screenshot-100" />

Theme colors define fallback colors for most of Flet controls.

#### Color palettes

<img src="/img/docs/colors/color_palettes_2.png"className="screenshot-100" />

[Live example](https://flet-controls-gallery.fly.dev/colors/colorspalettes)

Originally created by Material Design in 2014, color palettes are comprised of colors designed to work together harmoniously. 

Color swatches (palettes) consist of different shades of a certain color. Most swatches have shades from `100` to `900` in increments of one hundred, plus the color `50`. The smaller the number, the more pale the color. The greater the number, the darker the color. The accent swatches (e.g. `redAccent`) only have the values `100`, `200`, `400`, and `700`.

In addition, a series of blacks and whites with common opacities are available. For example, `black54` is a pure black with 54% opacity.

Palette colors can be used for setting individual controls color property or as a seed color for generating Theme colors.

## Color opacity

You can specify opacity for any color (hex value or named) using `with_opacity` method. Opacity value should be between `0.0` (completely transparent) and `1.0` (not transparent).

```python
color = ft.Colors.with_opacity(0.5, ft.Colors.PRIMARY)
color = ft.Colors.with_opacity(0.5, '#ff6666')
```

Another way to specify opacity for string value:

```python
color = "surface,0.5"
```

For hex value, you can specify `aa` channel with values between `00` and `ff`, for example:

```python
color = "#7fff6666"
``` 

## Defining colors for Flet controls

Most Flet controls have default colors defined by the `color_scheme` that can be overridden on different levels.

[Live example](https://flet-controls-gallery.fly.dev/colors/controlcolors)

<img src="/img/docs/colors/colors_fallback.svg"className="screenshot-80" />

### Control level

If the color is defined on the control level, it will be used.

```python
c = ft.Container(width=100, height=100, bgcolor=ft.Colors.GREEN_200)
```

Not every Flet control has a color property that can be set on the control level. For example, `FilledButton` always has a default "primary" color defined by the nearest ancestor's `theme`.

### Control Theme level

For `ScrollBar` (used in scrollable controls: `Page`, `View`, `Column`, `Row`, `ListView` and `GridView`), `Tabs` and `Text` controls, Flet will check if the [nearest anscestor](/blog/scrolling-controls-and-theming#nested-themes) theme has [ScrollBar Theme](/blog/scrolling-controls-and-theming#scrollbar-theme), [Tabs theme](/blog/scrolling-controls-and-theming#tabs-theming) or [Text theme](/blog/scrolling-controls-and-theming#text-theming) specified.

:::note
If you need to change theme for a particular ScrollBar, Text or Tabs control, you can wrap this control in a Container and customize `scrollbar_theme`, `text_theme` or `tabs_theme` for this Container `theme`.
:::

### Theme level

Flet will check for the nearest ancestor that has `theme` defined, and will take color from the `ColorScheme`. In the example below, the nearest anscestor for the `FilledButton` is `Container`, and the `primary` color that is used for the button will be taken from the Container's `theme`.

```python
import flet as ft

def main(page: ft.Page):          
    page.add(
        ft.Container(
            width=200,
            height=200,
            border=ft.border.all(1, ft.Colors.BLACK),
            content=ft.FilledButton("Primary color"),
            theme=ft.Theme(color_scheme=ft.ColorScheme(primary=ft.Colors.YELLOW))
        )
    )

ft.app(main)   
```

If control's color property, control-specific theme or nearest ancestor's theme is not specified, the nearest ancestor will be the page and the colors from the default page `color_scheme` will be used.  

## Methods

### `random()`

Returns a random color, with optional exclusions and weights.

**Method Parameters:**
* `exclude` - A list of icons members to exclude from the random selection.
* `weights` - A dictionary mapping icon members to their respective weights for weighted random selection.

## Example
    
```python
>>> import flet as ft
>>> ft.Icons.ABC
>>> ft.CupertinoIcons.BACK
>>> ft.Icons.random()
>>> ft.CupertinoIcons.random()
>>> ft.Icons.random(exclude=[ft.Icons.FAVORITE, ft.Icons.SCHOOL], weights={ft.Icons.SCHOOL: 150, ft.Icons.ADJUST: 5})
>>> ft.CupertinoIcons.random(exclude=[ft.CupertinoIcons.CAMERA, ft.CupertinoIcons.TABLE], weights={ft.CupertinoIcons.TABLE: 150, ft.CupertinoIcons.PENCIL: 5})
```

## Material Colors

The following material colors are available in Flet through the `colors` module:

#### `AMBER`

#### `AMBER_100`

#### `AMBER_200`

#### `AMBER_300`

#### `AMBER_400`

#### `AMBER_50`

#### `AMBER_500`

#### `AMBER_600`

#### `AMBER_700`

#### `AMBER_800`

#### `AMBER_900`

#### `AMBER_ACCENT`

#### `AMBER_ACCENT_100`

#### `AMBER_ACCENT_200`

#### `AMBER_ACCENT_400`

#### `AMBER_ACCENT_700`

#### `BACKGROUND`

#### `BLACK`

#### `BLACK12`

#### `BLACK26`

#### `BLACK38`

#### `BLACK45`

#### `BLACK54`

#### `BLACK87`

#### `BLUE`

#### `BLUE_100`

#### `BLUE_200`

#### `BLUE_300`

#### `BLUE_400`

#### `BLUE_50`

#### `BLUE_500`

#### `BLUE_600`

#### `BLUE_700`

#### `BLUE_800`

#### `BLUE_900`

#### `BLUE_ACCENT`

#### `BLUE_ACCENT_100`

#### `BLUE_ACCENT_200`

#### `BLUE_ACCENT_400`

#### `BLUE_ACCENT_700`

#### `BLUE_GREY`

#### `BLUE_GREY_100`

#### `BLUE_GREY_200`

#### `BLUE_GREY_300`

#### `BLUE_GREY_400`

#### `BLUE_GREY_50`

#### `BLUE_GREY_500`

#### `BLUE_GREY_600`

#### `BLUE_GREY_700`

#### `BLUE_GREY_800`

#### `BLUE_GREY_900`

#### `BROWN`

#### `BROWN_100`

#### `BROWN_200`

#### `BROWN_300`

#### `BROWN_400`

#### `BROWN_50`

#### `BROWN_500`

#### `BROWN_600`

#### `BROWN_700`

#### `BROWN_800`

#### `BROWN_900`

#### `CYAN`

#### `CYAN_100`

#### `CYAN_200`

#### `CYAN_300`

#### `CYAN_400`

#### `CYAN_50`

#### `CYAN_500`

#### `CYAN_600`

#### `CYAN_700`

#### `CYAN_800`

#### `CYAN_900`

#### `CYAN_ACCENT`

#### `CYAN_ACCENT_100`

#### `CYAN_ACCENT_200`

#### `CYAN_ACCENT_400`

#### `CYAN_ACCENT_700`

#### `DEEP_ORANGE`

#### `DEEP_ORANGE_100`

#### `DEEP_ORANGE_200`

#### `DEEP_ORANGE_300`

#### `DEEP_ORANGE_400`

#### `DEEP_ORANGE_50`

#### `DEEP_ORANGE_500`

#### `DEEP_ORANGE_600`

#### `DEEP_ORANGE_700`

#### `DEEP_ORANGE_800`

#### `DEEP_ORANGE_900`

#### `DEEP_ORANGE_ACCENT`

#### `DEEP_ORANGE_ACCENT_100`

#### `DEEP_ORANGE_ACCENT_200`

#### `DEEP_ORANGE_ACCENT_400`

#### `DEEP_ORANGE_ACCENT_700`

#### `DEEP_PURPLE`

#### `DEEP_PURPLE_100`

#### `DEEP_PURPLE_200`

#### `DEEP_PURPLE_300`

#### `DEEP_PURPLE_400`

#### `DEEP_PURPLE_50`

#### `DEEP_PURPLE_500`

#### `DEEP_PURPLE_600`

#### `DEEP_PURPLE_700`

#### `DEEP_PURPLE_800`

#### `DEEP_PURPLE_900`

#### `DEEP_PURPLE_ACCENT`

#### `DEEP_PURPLE_ACCENT_100`

#### `DEEP_PURPLE_ACCENT_200`

#### `DEEP_PURPLE_ACCENT_400`

#### `DEEP_PURPLE_ACCENT_700`

#### `ERROR`

#### `ERROR_CONTAINER`

#### `GREEN`

#### `GREEN_100`

#### `GREEN_200`

#### `GREEN_300`

#### `GREEN_400`

#### `GREEN_50`

#### `GREEN_500`

#### `GREEN_600`

#### `GREEN_700`

#### `GREEN_800`

#### `GREEN_900`

#### `GREEN_ACCENT`

#### `GREEN_ACCENT_100`

#### `GREEN_ACCENT_200`

#### `GREEN_ACCENT_400`

#### `GREEN_ACCENT_700`

#### `GREY`

#### `GREY_100`

#### `GREY_200`

#### `GREY_300`

#### `GREY_400`

#### `GREY_50`

#### `GREY_500`

#### `GREY_600`

#### `GREY_700`

#### `GREY_800`

#### `GREY_900`

#### `INDIGO`

#### `INDIGO_100`

#### `INDIGO_200`

#### `INDIGO_300`

#### `INDIGO_400`

#### `INDIGO_50`

#### `INDIGO_500`

#### `INDIGO_600`

#### `INDIGO_700`

#### `INDIGO_800`

#### `INDIGO_900`

#### `INDIGO_ACCENT`

#### `INDIGO_ACCENT_100`

#### `INDIGO_ACCENT_200`

#### `INDIGO_ACCENT_400`

#### `INDIGO_ACCENT_700`

#### `INVERSE_PRIMARY`

#### `INVERSE_SURFACE`

#### `LIGHT_BLUE`

#### `LIGHT_BLUE_100`

#### `LIGHT_BLUE_200`

#### `LIGHT_BLUE_300`

#### `LIGHT_BLUE_400`

#### `LIGHT_BLUE_50`

#### `LIGHT_BLUE_500`

#### `LIGHT_BLUE_600`

#### `LIGHT_BLUE_700`

#### `LIGHT_BLUE_800`

#### `LIGHT_BLUE_900`

#### `LIGHT_BLUE_ACCENT`

#### `LIGHT_BLUE_ACCENT_100`

#### `LIGHT_BLUE_ACCENT_200`

#### `LIGHT_BLUE_ACCENT_400`

#### `LIGHT_BLUE_ACCENT_700`

#### `LIGHT_GREEN`

#### `LIGHT_GREEN_100`

#### `LIGHT_GREEN_200`

#### `LIGHT_GREEN_300`

#### `LIGHT_GREEN_400`

#### `LIGHT_GREEN_50`

#### `LIGHT_GREEN_500`

#### `LIGHT_GREEN_600`

#### `LIGHT_GREEN_700`

#### `LIGHT_GREEN_800`

#### `LIGHT_GREEN_900`

#### `LIGHT_GREEN_ACCENT`

#### `LIGHT_GREEN_ACCENT_100`

#### `LIGHT_GREEN_ACCENT_200`

#### `LIGHT_GREEN_ACCENT_400`

#### `LIGHT_GREEN_ACCENT_700`

#### `LIME`

#### `LIME_100`

#### `LIME_200`

#### `LIME_300`

#### `LIME_400`

#### `LIME_50`

#### `LIME_500`

#### `LIME_600`

#### `LIME_700`

#### `LIME_800`

#### `LIME_900`

#### `LIME_ACCENT`

#### `LIME_ACCENT_100`

#### `LIME_ACCENT_200`

#### `LIME_ACCENT_400`

#### `LIME_ACCENT_700`

#### `ON_BACKGROUND`

#### `ON_ERROR`

#### `ON_ERROR_CONTAINER`

#### `ON_INVERSE_SURFACE`

#### `ON_PRIMARY`

#### `ON_PRIMARY_CONTAINER`

#### `ON_SECONDARY`

#### `ON_SECONDARY_CONTAINER`

#### `ON_SURFACE`

#### `ON_SURFACE_VARIANT`

#### `ON_TERTIARY`

#### `ON_TERTIARY_CONTAINER`

#### `ORANGE`

#### `ORANGE_100`

#### `ORANGE_200`

#### `ORANGE_300`

#### `ORANGE_400`

#### `ORANGE_50`

#### `ORANGE_500`

#### `ORANGE_600`

#### `ORANGE_700`

#### `ORANGE_800`

#### `ORANGE_900`

#### `ORANGE_ACCENT`

#### `ORANGE_ACCENT_100`

#### `ORANGE_ACCENT_200`

#### `ORANGE_ACCENT_400`

#### `ORANGE_ACCENT_700`

#### `OUTLINE`

#### `OUTLINE_VARIANT`

#### `PINK`

#### `PINK_100`

#### `PINK_200`

#### `PINK_300`

#### `PINK_400`

#### `PINK_50`

#### `PINK_500`

#### `PINK_600`

#### `PINK_700`

#### `PINK_800`

#### `PINK_900`

#### `PINK_ACCENT`

#### `PINK_ACCENT_100`

#### `PINK_ACCENT_200`

#### `PINK_ACCENT_400`

#### `PINK_ACCENT_700`

#### `PRIMARY`

#### `PRIMARY_CONTAINER`

#### `PURPLE`

#### `PURPLE_100`

#### `PURPLE_200`

#### `PURPLE_300`

#### `PURPLE_400`

#### `PURPLE_50`

#### `PURPLE_500`

#### `PURPLE_600`

#### `PURPLE_700`

#### `PURPLE_800`

#### `PURPLE_900`

#### `PURPLE_ACCENT`

#### `PURPLE_ACCENT_100`

#### `PURPLE_ACCENT_200`

#### `PURPLE_ACCENT_400`

#### `PURPLE_ACCENT_700`

#### `RED`

#### `RED_100`

#### `RED_200`

#### `RED_300`

#### `RED_400`

#### `RED_50`

#### `RED_500`

#### `RED_600`

#### `RED_700`

#### `RED_800`

#### `RED_900`

#### `RED_ACCENT`

#### `RED_ACCENT_100`

#### `RED_ACCENT_200`

#### `RED_ACCENT_400`

#### `RED_ACCENT_700`

#### `SCRIM`

#### `SECONDARY`

#### `SECONDARY_CONTAINER`

#### `SHADOW`

#### `SURFACE`

#### `SURFACE_CONTAINER_HIGHEST`

#### `SURFACE_TINT`

#### `SURFACE_VARIANT`

#### `TEAL`

#### `TEAL_100`

#### `TEAL_200`

#### `TEAL_300`

#### `TEAL_400`

#### `TEAL_50`

#### `TEAL_500`

#### `TEAL_600`

#### `TEAL_700`

#### `TEAL_800`

#### `TEAL_900`

#### `TEAL_ACCENT`

#### `TEAL_ACCENT_100`

#### `TEAL_ACCENT_200`

#### `TEAL_ACCENT_400`

#### `TEAL_ACCENT_700`

#### `TERTIARY`

#### `TERTIARY_CONTAINER`

#### `TRANSPARENT`

#### `WHITE`

#### `WHITE10`

#### `WHITE12`

#### `WHITE24`

#### `WHITE30`

#### `WHITE38`

#### `WHITE54`

#### `WHITE60`

#### `WHITE70`

#### `YELLOW`

#### `YELLOW_100`

#### `YELLOW_200`

#### `YELLOW_300`

#### `YELLOW_400`

#### `YELLOW_50`

#### `YELLOW_500`

#### `YELLOW_600`

#### `YELLOW_700`

#### `YELLOW_800`

#### `YELLOW_900`

#### `YELLOW_ACCENT`

#### `YELLOW_ACCENT_100`

#### `YELLOW_ACCENT_200`

#### `YELLOW_ACCENT_400`

#### `YELLOW_ACCENT_700`

## Cupertino Colors

The following Cupertino colors are available in Flet through the `cupertino_colors` module:

#### `ACTIVE_BLUE`

#### `ACTIVE_GREEN`

#### `ACTIVE_ORANGE`

#### `BLACK`

#### `DARK_BACKGROUND_GRAY`

#### `DESTRUCTIVE_RED`

#### `EXTRA_LIGHT_BACKGROUND_GRAY`

#### `INACTIVE_GRAY`

#### `LABEL`

#### `LIGHT_BACKGROUND_GRAY`

#### `LINK`

#### `ON_PRIMARY`

#### `OPAQUE_SEPARATOR`

#### `PLACEHOLDER_TEXT`

#### `PRIMARY`

#### `QUATERNARY_LABEL`

#### `QUATERNARY_SYSTEM_FILL`

#### `SECONDARY_LABEL`

#### `SECONDARY_SYSTEM_BACKGROUND`

#### `SECONDARY_SYSTEM_FILL`

#### `SECONDARY_SYSTEM_GROUPED_BACKGROUND`

#### `SEPARATOR`

#### `SYSTEM_BACKGROUND`

#### `SYSTEM_BLUE`

#### `SYSTEM_BROWN`

#### `SYSTEM_CYAN`

#### `SYSTEM_FILL`

#### `SYSTEM_GREEN`

#### `SYSTEM_GREY`

#### `SYSTEM_GREY2`

#### `SYSTEM_GREY3`

#### `SYSTEM_GREY4`

#### `SYSTEM_GREY5`

#### `SYSTEM_GREY6`

#### `SYSTEM_GROUPED_BACKGROUND`

#### `SYSTEM_INDIGO`

#### `SYSTEM_MINT`

#### `SYSTEM_ORANGE`

#### `SYSTEM_PINK`

#### `SYSTEM_PURPLE`

#### `SYSTEM_RED`

#### `SYSTEM_TEAL`

#### `SYSTEM_YELLOW`

#### `TERTIARY_LABEL`

#### `TERTIARY_SYSTEM_BACKGROUND`

#### `TERTIARY_SYSTEM_FILL`

#### `TERTIARY_SYSTEM_GROUPED_BACKGROUND`

#### `WHITE`
