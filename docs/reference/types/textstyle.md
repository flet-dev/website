---
title: TextStyle
sidebar_label: TextStyle
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## `TextStyle` properties

A style describing how to format and paint text.

### `bgcolor`

Text background [color](/docs/reference/colors).

### `color`

Text foreground [color](/docs/reference/colors).

### `decoration`

The decorations to paint near the text (e.g., an underline).

The value is the instance of `ft.TextDecoration` enum:

- `NONE` (default) - Do not draw a decoration.
- `UNDERLINE` - Draw a line underneath each line of text.
- `OVERLINE` - Draw a line above each line of text.
- `LINE_THROUGH` - Draw a line through each line of text.

The enum is a flag, so multiple decorations can be combined together, for example:

```python
style = ft.TextStyle(decoration=ft.TextDecoration.UNDERLINE | ft.TextDecoration.OVERLINE)
```

### `decoration_color`

The [color](/docs/reference/colors) in which to paint the text decorations.

### `decoration_style`

The style in which to paint the text decorations (e.g., dashed).

The value is the instance of `ft.TextDecorationStyle` enum:

- `SOLID` (default) - Draw a solid line.
- `DOUBLE` - Draw two lines.
- `DOTTED` - Draw a dotted line.
- `DASHED` - Draw a dashed line.
- `WAVY` - Draw a sinusoidal line.

### `decoration_thickness`

The thickness of the decoration stroke as a multiplier of the thickness defined by the font.

### `font_family`

See [`Text.font_family`](/docs/controls/text#font_family).

### `foreground`

The paint drawn as a foreground for the text.

The value of this property is the instance of [`Paint`](/docs/reference/types/paint) class.

### `height`

The height of this text span, as a multiple of the font size.
See complete explanation [here](https://api.flutter.dev/flutter/painting/TextStyle/height.html).

### `italic`

`True` to use italic typeface.

### `letter_spacing`

The amount of space (in logical pixels) to add between each letter. A negative value can be used to bring the letters closer.

### `shadow`

The value of this property is a single instance or a list of [`BoxShadow`](/docs/reference/types/boxshadow) class instances.

### `size`

The size of glyphs (in logical pixels) to use when painting the text. Default is 14.

### `weight`

Property value is [`FontWeight`](/docs/reference/types/fontweight) enum. Default is `NORMAL`.