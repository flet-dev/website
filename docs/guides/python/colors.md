---
title: Colors
sidebar_label: Colors
---

## Color value

There are 2 ways to define color property value in Flet: Hex value and Named colors.

### Hex value

Hex value should be in format #AARRGGBB (0xAARRGGBB) or #RRGGBB (0xRRGGBB). In case the AA is omitted, it is set to FF (transparent).

[Example code]

[Live example]

### Named colors

Named colors are the Material Design Theme colors and Palettes colors. They can be set with a string value or using a flet.colors module.

```
ft.Container(bgcolor=ft.colors.YELLOW)
```

#### Theme colors

There are 30 named Theme colors (`ColorScheme`) that are are generated based on the `Theme.seed_color` property of the `page.theme`. The default `seed_color` value is 'blue'.

[code example]
[Screen shot for default theme colors]

Any of the 30 colors can be overriden, in which case they will have a absolute value that will not be dependent on seed_color.
[code example]
[Live Example]

Theme colors define default values for most Flet controls colors.

#### Color palettes

Originally created by Material Design in 2014, color palettes are comprised of colors designed to work together harmoniously. There are 21 color swatches (groups), that consist of different shades of a certain color, with a total of N colors. 

There 16 color palettes that have 9 shades and 4 accent shades each, 3 palettes that have 9 shades each and also Black (N shades) and White (N shades) palettes for which shade is defined by their transparency.
[picture]

Palette colors can be used for setting individual controls color property or as a seed color for generating Theme colors.
[code example]
[live example]

## How the colors are defined for Flet controls

Most Flet controls have default colors defined by the page ColorScheme that can be overridden on different levels.

<img src="/img/docs/colors/colors_fallback.svg"className="screenshot-70" />

### Control level

If the color is defined on the control level, it will be used. In the example below, one ElevatedButton property is not specified and displayed as a default value (TBD) and the other ElevatedButton `bgcolor` property is set to a named color 'deep_purple_900':

[picture]
[code example]

Not every Flet control has a color property. For example, FilledButton always has a default 'Primary' color defined by the nearest ancestor Theme.

### Control Theme level

[example with Tabs]

### Theme level

Flet will check for the nearest ancestor that has a Theme defined, and will take color from the ColorScheme. In example below, a Checkbox is wrapped in a Container, for which there is a Theme defined, and the Checkbox color from its ColorScheme will be used: 

[example with Container]


If you don't define control color property, ControlTheme or Theme anywhere, the nearest ancestor will be the page and colors from the default page ColorScheme will be used.  

* Link to an app

`ft.colors.with_opacity` - works on a client