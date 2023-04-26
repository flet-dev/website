---
title: Text
sidebar_label: Text
slug: text
---

Text is a control for displaying text.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Custom text styles

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Text custom styles"
    page.scroll = "adaptive"

    page.add(
        ft.Text("Size 10", size=10),
        ft.Text("Size 30, Italic", size=30, color="pink600", italic=True),
        ft.Text(
            "Size 40, w100",
            size=40,
            color=ft.colors.WHITE,
            bgcolor=ft.colors.BLUE_600,
            weight=ft.FontWeight.W_100,
        ),
        ft.Text(
            "Size 50, Normal",
            size=50,
            color=ft.colors.WHITE,
            bgcolor=ft.colors.ORANGE_800,
            weight=ft.FontWeight.NORMAL,
        ),
        ft.Text(
            "Size 60, Bold, Italic",
            size=50,
            color=ft.colors.WHITE,
            bgcolor=ft.colors.GREEN_700,
            weight=ft.FontWeight.BOLD,
            italic=True,
        ),
        ft.Text("Size 70, w900, selectable", size=70, weight=ft.FontWeight.W_900, selectable=True),
        ft.Text("Limit long text to 1 line with ellipsis", style=ft.TextThemeStyle.HEADLINE_SMALL),
        ft.Text(
            "Proin rutrum, purus sit amet elementum volutpat, nunc lacus vulputate orci, cursus ultrices neque dui quis purus. Ut ultricies purus nec nibh bibendum, eget vestibulum metus varius. Duis convallis maximus justo, eu rutrum libero maximus id. Donec ullamcorper arcu in sapien molestie, non pellentesque tellus pellentesque. Nulla nec tristique ex. Maecenas euismod nisl enim, a convallis arcu laoreet at. Ut at tortor finibus, rutrum massa sit amet, pulvinar velit. Phasellus diam lorem, viverra vitae leo vitae, consequat suscipit lorem.",
            max_lines=1,
            overflow="ellipsis",
        ),
        ft.Text("Limit long text to 2 lines and fading", style=ft.TextThemeStyle.HEADLINE_SMALL),
        ft.Text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh vitae purus consectetur facilisis sed vitae ipsum. Quisque faucibus sed nulla placerat sagittis. Phasellus condimentum risus vitae nulla vestibulum auctor. Curabitur scelerisque, nibh eget imperdiet consequat, odio ante tempus diam, sed volutpat nisl erat eget turpis. Sed viverra, diam sit amet blandit vulputate, mi tellus dapibus lorem, vitae vehicula diam mauris placerat diam. Morbi sit amet pretium turpis, et consequat ligula. Nulla velit sem, suscipit sit amet dictum non, tincidunt sed nulla. Aenean pellentesque odio porttitor sagittis aliquam. Nam varius at metus vitae vulputate. Praesent faucibus nibh lorem, eu pretium dolor dictum nec. Phasellus eget dui laoreet, viverra magna vitae, pellentesque diam.",
            max_lines=2,
        ),
        ft.Text("Limit the width and height of long text", style=ft.TextThemeStyle.HEADLINE_SMALL),
        ft.Text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh vitae purus consectetur facilisis sed vitae ipsum. Quisque faucibus sed nulla placerat sagittis. Phasellus condimentum risus vitae nulla vestibulum auctor. Curabitur scelerisque, nibh eget imperdiet consequat, odio ante tempus diam, sed volutpat nisl erat eget turpis. Sed viverra, diam sit amet blandit vulputate, mi tellus dapibus lorem, vitae vehicula diam mauris placerat diam. Morbi sit amet pretium turpis, et consequat ligula. Nulla velit sem, suscipit sit amet dictum non, tincidunt sed nulla. Aenean pellentesque odio porttitor sagittis aliquam. Nam varius at metus vitae vulputate. Praesent faucibus nibh lorem, eu pretium dolor dictum nec. Phasellus eget dui laoreet, viverra magna vitae, pellentesque diam.",
            width=700,
            height=100,
        ),
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/text/custom-text-styles.gif" className="screenshot-40"/>

### Pre-defined theme text styles

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Text theme styles"
    page.scroll = "adaptive"

    page.add(
        ft.Text("Display Large", style=ft.TextThemeStyle.DISPLAY_LARGE),
        ft.Text("Display Medium", style=ft.TextThemeStyle.DISPLAY_MEDIUM),
        ft.Text("Display Small", style=ft.TextThemeStyle.DISPLAY_SMALL),
        ft.Text("Headline Large", style=ft.TextThemeStyle.HEADLINE_LARGE),
        ft.Text("Headline Medium", style=ft.TextThemeStyle.HEADLINE_MEDIUM),
        ft.Text("Headline Small", style=ft.TextThemeStyle.HEADLINE_MEDIUM),
        ft.Text("Title Large", style=ft.TextThemeStyle.TITLE_LARGE),
        ft.Text("Title Medium", style=ft.TextThemeStyle.TITLE_MEDIUM),
        ft.Text("Title Small", style=ft.TextThemeStyle.TITLE_SMALL),
        ft.Text("Label Large", style=ft.TextThemeStyle.LABEL_LARGE),
        ft.Text("Label Medium", style=ft.TextThemeStyle.LABEL_MEDIUM),
        ft.Text("Label Small", style=ft.TextThemeStyle.LABEL_SMALL),
        ft.Text("Body Large", style=ft.TextThemeStyle.BODY_LARGE),
        ft.Text("Body Medium", style=ft.TextThemeStyle.BODY_MEDIUM),
        ft.Text("Body Small", style=ft.TextThemeStyle.BODY_SMALL),
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/text/predefined-text-styles.png" className="screenshot-40" />

### Font with variable weight

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.fonts = {
        "RobotoSlab": "https://github.com/google/fonts/raw/main/apache/robotoslab/RobotoSlab%5Bwght%5D.ttf"
    }

    t = ft.Text(
        "This is rendered with Roboto Slab",
        size=30,
        font_family="RobotoSlab",
        weight=ft.FontWeight.W_100,
    )

    def width_changed(e):
        t.weight = f"w{int(e.control.value)}"
        t.update()

    page.add(
        t,
        ft.Slider(
            min=100,
            max=900,
            divisions=8,
            label="{value}",
            width=500,
            on_change=width_changed,
        ),
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/text/variable-weight-font.gif" className="screenshot-50" />

## Properties

### `bgcolor`

Text background color.

### `color`

Text foreground color.

### `font_family`

System or custom font family to render text with. Check [`page.fonts`](/docs/controls/page#fonts) for instructions on how to import and use custom fonts in your application.

#### Using system fonts

You can use the fonts installed on your computer, e.g. "Consolas", "Arial", "Verdana", "Tahoma", etc. For example:

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Text("This text is rendered with Consolas font", font_family="Consolas")
    )

ft.app(target=main)
```

There is one limitation though - system fonts cannot be used in a Flet web app with "CanvasKit" renderer.

Flet web app can render its UI with one of these renderers:

* **HTML renderer** - uses a combination of HTML elements, CSS, Canvas elements, and SVG elements. This renderer has a smaller download size.
* **CanvasKit renderer** - this renderer is fully consistent with Flutter mobile and desktop, has faster performance with higher widget density, but adds about 2MB in download size.

By default, Flet uses `CanvasKit` renderer for both desktop and mobile browsers.

You can explicitly set what renderer to use when running a Flet program:

```python
# ...
ft.app(target=main, view=ft.WEB_BROWSER, web_renderer="html")
```

Now, when you run the same program you'll see "Consolas" font is used.

Supported `web_renderer` values:

* `canvaskit` (default) - prioritizing performance and pixel-perfect consistency on both desktop and mobile browsers.
* `html` - optimizing download size over performance on both desktop and mobile browsers.
* `auto` - optimizing for download size on mobile browsers and optimizing for performance on desktop browsers.

### `italic`

`True` to use italic typeface.

### `max_lines`

An optional maximum number of lines for the text to span, wrapping if necessary. If the text exceeds the given number of lines, it will be truncated according to `overflow`.

If this is 1, text will not wrap. Otherwise, text will be wrapped at the edge of the box.

### `no_wrap`

If `False` (default) the text should break at soft line breaks.

If `True`, the glyphs in the text will be positioned as if there was unlimited horizontal space.

### `overflow`

Property value is `TextOverflow` enum with the following values:

* `FADE` (default)
* `ELLIPSIS`
* `CLIP`
* `VISIBLE`

### `selectable`

`True` if text should be selectable.

### `semantics_label`

An alternative semantics label for this text.

If present, the semantics of this control will contain this value instead of the actual text.

This is useful for replacing abbreviations or shorthands with the full text value:

```python
ft.Text("$$", semantics_label="Double dollars")
```

### `size`

Text size in virtual pixels. Default is `14`.

### `spans`

The list of [`ft.TextSpan`](#textspan-properties) objects to build a rich text paragraph.

### `style`

Property value is `TextThemeStyle` enum with one of the following values:

* `DISPLAY_LARGE`
* `DISPLAY_MEDIUM`
* `DISPLAY_SMALL`
* `HEADLINE_LARGE`
* `HEADLINE_MEDIUM`
* `HEADLINE_SMALL`
* `TITLE_LARGE`
* `TITLE_MEDIUM`
* `TITLE_SMALL`
* `LABEL_LARGE`
* `LABEL_MEDIUM`
* `LABEL_SMALL`
* `BODY_LARGE`
* `BODY_MEDIUM`
* `BODY_SMALL`

### `text_align`

Text horizontal align.

Property value is `TextAlign` enum with the following values:

* `LEFT` (default)
* `RIGHT`
* `CENTER`
* `JUSTIFY`
* `START`
* `END`

### `value`

The text displayed.

### `weight`

Font weight.

Property value is `FontWeight` enum with the following values:

* `NORMAL` (default)
* `BOLD`
* `W_100`
* `W_200`
* `W_300`
* `W_400`
* `W_500`
* `W_600`
* `W_700`
* `W_800`
* `W_900`

## `TextStyle` properties

A style describing how to format and paint text.

### `size`

The size of glyphs (in logical pixels) to use when painting the text. Default is 14.

### `weight`

Font weight - see [Text.weight](#weight) for possible values.

### `italic`

`True` to use italic typeface.

### `decoration`

The decorations to paint near the text (e.g., an underline).

The value is the instance of `ft.TextDecoration` enum:

* `NONE` (default) - Do not draw a decoration.
* `UNDERLINE` - Draw a line underneath each line of text.
* `OVERLINE` - Draw a line above each line of text.
* `LINE_THROUGH` - Draw a line through each line of text.

The enum is a flag, so multiple decorations can be combined together, for example:

```python
style = ft.TextStyle(decoration=ft.TextDecoration.UNDERLINE | ft.TextDecoration.OVERLINE)
```

### `decoration_color`

The color in which to paint the text decorations.

### `decoration_thickness`

The thickness of the decoration stroke as a multiplier of the thickness defined by the font.

### `decoration_style`

The style in which to paint the text decorations (e.g., dashed).

The value is the instance of `ft.TextDecorationStyle` enum:

* `SOLID` (default) - Draw a solid line.
* `DOUBLE` - Draw two lines.
* `DOTTED` - Draw a dotted line.
* `DASHED` - Draw a dashed line.
* `WAVY` - Draw a sinusoidal line.

### `font_family`

See [`Text.font_family`](#font_family).

### `color`

See [`Text.color`](#color).

### `bgcolor`

See [`Text.bgcolor`](#bgcolor).

### `shadow`

See [`Container.shadow`](container#shadow).

### `foreground`

The paint drawn as a foreground for the text.

The value is of [`ft.Paint`](canvas#paint) class.

## `TextSpan` properties

An span of text.

### `text`

The text contained in this span.

If both `text` and `spans` are defined, the `text` will precede the `spans`.

### `style`

The [`TextStyle`](#textstyle-properties) to apply to this span.

### `spans`

Additional spans to include as children.

If both `text` and `spans` are defined, the `text` will precede the `spans`.

### `url`

The URL to open when the span is clicked. If registered, `on_click` event is fired after redirect.

### `url_target`

Where to open URL in the web mode:

* `_blank` (default) - new tab/window.
* `_self` - the current tab/window.

## `TextSpan` events

### `on_click`

Fires when the span is clicked.

### `on_enter`

Triggered when a mouse pointer has entered the span.

### `on_exit`

Triggered when a mouse pointer has exited the span.