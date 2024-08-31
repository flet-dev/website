---
title: TextStyle
sidebar_label: TextStyle
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A style describing how to format and paint text.

### `baseline`

The common baseline that should be aligned between this text span and its parent text span, or, for the root text spans,
with the line box.

Value is of type [`TextBaseline`](/docs/reference/types/textbaseline).

### `bgcolor`

Text background [color](/docs/reference/colors).

### `color`

Text foreground [color](/docs/reference/colors).

### `decoration`

The decorations to paint near the text (e.g., an underline).

Value is of type [`TextDecoration`](/docs/reference/types/textdecoration).

### `decoration_color`

The [color](/docs/reference/colors) in which to paint the text decorations.

### `decoration_style`

The style in which to paint the text decorations (e.g., dashed).

Value is of type [`TextDecorationStyle`](/docs/reference/types/textdecorationstyle) and defaults
to `TextDecorationStyle.SOLID`.

### `decoration_thickness`

The thickness of the decoration stroke as a multiplier of the thickness defined by the font.

### `font_family`

See [`Text.font_family`](/docs/controls/text#font_family).

### `foreground`

The paint drawn as a foreground for the text.

Value is of type [`Paint`](/docs/reference/types/paint).

### `height`

The height of this text span, as a multiple of the font size.

See detailed explanation [here](https://api.flutter.dev/flutter/painting/TextStyle/height.html).

### `italic`

`True` to use italic typeface.

### `letter_spacing`

The amount of space (in logical pixels) to add between each letter. A negative value can be used to bring the letters closer.

### `overflow`

How visual text overflow should be handled.

Value is of type [`TextOverflow`](/docs/reference/types/textoverflow).

### `shadow`

The value of this property is a single instance or a list of [`BoxShadow`](/docs/reference/types/boxshadow) class instances.

### `size`

The size of glyphs (in logical pixels) to use when painting the text.

Defaults to `14`.

### `weight`

Value is of type [`FontWeight`](/docs/reference/types/fontweight) and defaults to `FontWeight.NORMAL`.

### `word_spacing`

The amount of space (in logical pixels) to add at each sequence of white-space (i.e. between each word). A negative
value can be used to bring the words closer.