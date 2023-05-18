---
title: Colors
sidebar_label: Colors
---
<img src="/img/docs/colors/color_palettes.png"className="screenshot-100" />

## Color value

There are 2 ways to define color property value in Flet: hex value and named colors.

### Hex value

Hex value should be in format `#aarrggbb` (`0xaarrggbb`) or `#rrggbb` (`0xeeggbb`). In case `aa` ([opacity](/docs/guides/python/colors#color-opacity)) is omitted, it is set to `ff` (not transparent).

```python
c1 = ft.Container(bgcolor='#ff0000')
```

[Live example](https://flet-controls-gallery.fly.dev/colors/controlcolors)

### Named colors

Named colors are the Material Design [theme colors](https://m3.material.io/styles/color/the-color-system/color-roles) and [colors palettes](https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes). They can be set with a string value or using flet.colors module.

```
c1 = ft.Container(bgcolor=ft.colors.YELLOW)
c2 = ft.Container(bgcolor='yellow')
```

#### Theme colors

<img src="/img/docs/colors/theme_colors.png"className="screenshot-100" />

[Live Example](https://flet-controls-gallery.fly.dev/colors/themecolors)

There are 30 named theme colors in [`theme.color_scheme`](/docs/controls/page#colorscheme-class) that are are generated based on the `color_scheme_seed` property. The default seed color value is "blue".

```
# example for generating page theme colors based on the seed color
page.theme = theme.Theme(color_scheme_seed='green')
page.update()
```

Any of the 30 colors can be overridden, in which case they will have an absolute value that will not be dependent on the seed color.
```
page.theme = ft.Theme(
    color_scheme=ft.ColorScheme(
        primary=ft.colors.GREEN,
        primary_container=ft.colors.GREEN_200
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
color = ft.colors.with_opacity(0.5, ft.colors.PRIMARY)
color = ft.colors.with_opacity(0.5, '#ff6666')
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
c = ft.Container(width=100, height=100, bgcolor=ft.colors.GREEN_200)
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
    
    container = ft.Container(
        width=200,
        height=200,
        border=ft.border.all(1, ft.colors.BLACK),
        content=ft.FilledButton("Primary color"),
        theme=ft.Theme(color_scheme=ft.ColorScheme(primary=ft.colors.YELLOW)))
    
    page.add(container)

ft.app(target=main)   
```

If control's color property, control-specific theme or nearest ancestor's theme is not specified, the nearest ancestor will be the page and the colors from the default page `color_scheme` will be used.  