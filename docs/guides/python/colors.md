---
title: Colors
sidebar_label: Colors
---

## Color value

There are 2 ways to define color property value in Flet: Hex value and named colors.

### Hex value

Hex value should be in format #AARRGGBB (0xAARRGGBB) or #RRGGBB (0xRRGGBB). In case AA is omitted, it is set to FF (transparent).

[Example code]

[Live example]

### Named colors

Named colors are the Material Design Theme colors and Palettes colors. They can be set with a string value or using a flet.colors module.

```
c1 = ft.Container(bgcolor=ft.colors.YELLOW)
c2 = ft.Container(bgcolor='yellow')
```

#### Theme colors

There are 30 named Theme colors in `theme.ColorScheme` that are are generated based on the `color_scheme_seed` property. The default seed color value is 'blue'.

```
# example for generating page theme colors based on seed color
page.theme = theme.Theme(color_scheme_seed="green")
page.update()
```

Any of the 30 colors can be overriden, in which case they will have an absolute value that will not be dependent on seed color.
```
page.theme = ft.Theme(
    color_scheme=ft.ColorScheme(
        primary=ft.colors.GREEN,
        primary_container=ft.colors.GREEN_200
        # ...
    ),
)
```

Theme colors define default values for most Flet controls colors.

[Live Example](https://flet-controls-gallery.fly.dev/colors/themecolors)

#### Color palettes

Originally created by Material Design in 2014, color palettes are comprised of colors designed to work together harmoniously. 

Color swatches (palettes) consist of different shades of a certain color. Most swatches have shades from 100 to 900 in increments of one hundred, plus the color 50. The smaller the number, the more pale the color. The greater the number, the darker the color. The accent swatches (e.g. redAccent) only have the values 100, 200, 400, and 700.

In addition, a series of blacks and whites with common opacities are available. For example, black54 is a pure black with 54% opacity.

Palette colors can be used for setting individual controls color property or as a seed color for generating Theme colors.

[live example](https://flet-controls-gallery.fly.dev/colors/palettecolors)

## How the colors are defined for Flet controls

Most Flet controls have default colors defined by the page ColorScheme that can be overridden on different levels.

<img src="/img/docs/colors/colors_fallback.svg"className="screenshot-80" />

[live example](https://flet-controls-gallery.fly.dev/colors/controlcolors)

### Control level

If the color is defined on the control level, it will be used.

```
c = ft.Container(width=100, height=100, bgcolor = ft.colors.GREEN_200)
```

Not every Flet control has a color property that can be set on the control level. For example, FilledButton always has a default 'Primary' color defined by the nearest ancestor's Theme.

### Control Theme level

#### Scrollbar theme

You can customize the look and fill of scrollbars in your application using [`page.theme.scrollbar_theme`](/docs/controls/page#scrollbartheme-class) property, for example:

```python
page.theme = ft.Theme(
    scrollbar_theme=ft.ScrollbarTheme(
        track_color={
            ft.MaterialState.HOVERED: ft.colors.AMBER,
            ft.MaterialState.DEFAULT: ft.colors.TRANSPARENT,
        },
        track_visibility=True,
        track_border_color=ft.colors.BLUE,
        thumb_visibility=True,
        thumb_color={
            ft.MaterialState.HOVERED: ft.colors.RED,
            ft.MaterialState.DEFAULT: ft.colors.GREY_300,
        },
        thickness=30,
        radius=15,
        main_axis_margin=5,
        cross_axis_margin=10,
    )
)
```

<img src="/img/docs/controls/column/column-scroll-to.png"  className="screenshot-60" />

#### Text theming

Material 3 design defines [5 groups of text styles with 3 sizes in each group](/docs/controls/text#pre-defined-theme-text-styles): "Display", "Headline", "Title", "Label" and "Body" which are used across Flet controls. You can customize each of those styles with `page.theme.text_theme`, for example:

```python
import flet as ft

def main(page: ft.Page):
    page.theme = ft.Theme(
        text_theme=ft.TextTheme(body_medium=ft.TextStyle(color=ft.colors.GREEN))
    )

    page.add(ft.Text("Hello, green world!"))

ft.app(main)
```

<img src="/img/blog/theme-scrolling/text-theme.png"  className="screenshot-50" />

Apparently, `Body Medium` is used by `Text` control as a default style.

See [`TextTheme` class](/docs/controls/page#texttheme-class) for more details.

#### Tabs theming

You can control the look and feel of `Tabs` control using [`page.theme.tabs_theme`](/docs/controls/page#tabstheme-class) property to style all tabs in your app:

```python
page.theme = ft.Theme(
    tabs_theme=ft.TabsTheme(
        divider_color=ft.colors.BLUE,
        indicator_color=ft.colors.RED,
        indicator_tab_size=True,
        label_color=ft.colors.GREEN,
        unselected_label_color=ft.colors.AMBER,
        overlay_color={
            ft.MaterialState.FOCUSED: ft.colors.with_opacity(0.2, ft.colors.GREEN),
            ft.MaterialState.DEFAULT: ft.colors.with_opacity(0.2, ft.colors.PINK),
        },
    )
)
```

<img src="/img/blog/theme-scrolling/tabs-theme.png"  className="screenshot-60" />

See [`TabsTheme` class](/docs/controls/page#tabstheme-class) for more details.

:::note
If you need to change theme for a particular ScrollBar, Text or Tabs control, you can wrap this control in a container and customize `scrollbar_theme`, `text_theme` or `tabs_theme` for this container only.
:::


### Theme level

Flet will check for the nearest ancestor that has a Theme defined, and will take color from the ColorScheme. In example below, a FilledButton is wrapped in a Container, for which there is a Theme defined, and primary color from Container ColorScheme will be used: 

[example with Container]


If control color property, ControlTheme or Theme is not specified, the nearest ancestor will be the page and the colors from the default page ColorScheme will be used.  

* Link to an app

`ft.colors.with_opacity` - works on a client