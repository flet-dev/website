---
title: Text
sidebar_label: Text
---

Text is a control for displaying text.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/text)

### Custom text styles

<img src="/img/docs/controls/text/custom-text-styles.gif" className="screenshot-40"/>

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/text/text-custom-styles.py
```

### Pre-defined theme text styles

<img src="/img/docs/controls/text/predefined-text-styles.png" className="screenshot-40" />

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/text/text-theme-styles.py
```

### Font with variable weight

<img src="/img/docs/controls/text/variable-weight-font.gif" className="screenshot-50" />

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/text/variable-weight-font.py
```

### Rich text basics

<img src="/img/docs/controls/text/richtext.png" className="screenshot-70" />

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/text/richtext.py
```

### Rich text with borders and stroke

<img src="/img/docs/controls/text/richtext-borders-stroke.png" className="screenshot-50" />

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/text/richtext-borders-stroke.py
```

### Rich text with gradient

<img src="/img/docs/controls/text/richtext-gradient.png" className="screenshot-50" />

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/text/richtext-gradient.py
```

## Properties

### `bgcolor`

Text background [color](/docs/reference/colors).

### `color`

Text foreground [color](/docs/reference/colors).

### `font_family`

System or custom font family to render text with. See [`Fonts`](/docs/controls/page#fonts) cookbook guide for instructions on how to import and use custom fonts in your application.

### `italic`

`True` to use italic typeface.

Value is of type `bool` and defaults to `False`.

### `max_lines`

An optional maximum number of lines for the text to span, wrapping if necessary. If the text exceeds the given number of lines, it will be truncated according to `overflow`.

If this is 1, text will not wrap. Otherwise, text will be wrapped at the edge of the box.

### `no_wrap`

If `False` (default) the text should break at soft line breaks.

If `True`, the glyphs in the text will be positioned as if there was unlimited horizontal space.

Value is of type `bool` and defaults to `False`.

### `overflow`

Controls how text overflows.

Value is of type [`TextOverflow`](/docs/reference/types/textoverflow) and defaults to `TextOverflow.FADE`.

### `rtl`

`True` to set text direction to right-to-left.

Defaults to `False`.

### `selectable`

Whether the text should be selectable.

Defaults to `False`.

### `semantics_label`

An alternative semantics label for this text.

If present, the semantics of this control will contain this value instead of the actual text. This will overwrite any of the `TextSpan.semantics_label`s.

This is useful for replacing abbreviations or shorthands with the full text value:

Value is of type `str`.

```python
ft.Text("$$", semantics_label="Double dollars")
```

### `size`

Text size in virtual pixels.

Value is of type `OptionalNumber` and defaults to `14`.

### `spans`

The list of [`TextSpan`](/docs/reference/types/textspan) objects to build a rich text paragraph.

### `style`

The text's style.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

### `text_align`

Text horizontal align.

Value is of type [`TextAlign`](/docs/reference/types/textalign) and defaults to `TextAlign.LEFT`.

### `theme_style`

Pre-defined text style.

Value is of type [`TextThemeStyle`](/docs/reference/types/textthemestyle).

### `value`

The text displayed.

Value is of type `str`.

### `weight`

Font weight.

Value is of type [`FontWeight`](/docs/reference/types/fontweight) and defaults to `FontWeight.NORMAL`.

