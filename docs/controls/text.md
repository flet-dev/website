---
title: Text
sidebar_label: Text
slug: text
---

Text is a control for displaying text.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/text)

### Custom text styles

<img src="/img/docs/controls/text/custom-text-styles.gif" className="screenshot-40"/>

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

### Pre-defined theme text styles

<img src="/img/docs/controls/text/predefined-text-styles.png" className="screenshot-40" />

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

### Font with variable weight

<img src="/img/docs/controls/text/variable-weight-font.gif" className="screenshot-50" />

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

### Rich text basics

<img src="/img/docs/controls/text/richtext.png" className="screenshot-70" />

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Text("Plain text with default style"),
        ft.Text(
            "Some text",
            size=30,
            spans=[
                ft.TextSpan(
                    "here goes italic",
                    ft.TextStyle(italic=True, size=20, color=ft.colors.GREEN),
                    spans=[
                        ft.TextSpan(
                            "bold and italic",
                            ft.TextStyle(weight=ft.FontWeight.BOLD),
                        ),
                        ft.TextSpan(
                            "just italic",
                            spans=[
                                ft.TextSpan("smaller italic", ft.TextStyle(size=15))
                            ],
                        ),
                    ],
                )
            ],
        ),
        ft.Text(
            disabled=False,
            spans=[
                ft.TextSpan(
                    "underlined and clickable",
                    ft.TextStyle(decoration=ft.TextDecoration.UNDERLINE),
                    on_click=lambda e: print(f"Clicked span: {e.control.uid}"),
                    on_enter=lambda e: print(f"Entered span: {e.control.uid}"),
                    on_exit=lambda e: print(f"Exited span: {e.control.uid}"),
                ),
                ft.TextSpan(" "),
                ft.TextSpan(
                    "underlined red wavy",
                    ft.TextStyle(
                        decoration=ft.TextDecoration.UNDERLINE,
                        decoration_color=ft.colors.RED,
                        decoration_style=ft.TextDecorationStyle.WAVY,
                    ),
                    on_enter=lambda e: print(f"Entered span: {e.control.uid}"),
                    on_exit=lambda e: print(f"Exited span: {e.control.uid}"),
                ),
                ft.TextSpan(" "),
                ft.TextSpan(
                    "overlined blue",
                    ft.TextStyle(
                        decoration=ft.TextDecoration.OVERLINE, decoration_color="blue"
                    ),
                ),
                ft.TextSpan(" "),
                ft.TextSpan(
                    "overlined and underlined",
                    ft.TextStyle(
                        decoration=ft.TextDecoration.OVERLINE
                        | ft.TextDecoration.UNDERLINE
                    ),
                ),
                ft.TextSpan(" "),
                ft.TextSpan(
                    "line through thick",
                    ft.TextStyle(
                        decoration=ft.TextDecoration.LINE_THROUGH,
                        decoration_thickness=3,
                    ),
                ),
            ],
        ),
    )

    def highlight_link(e):
        e.control.style.color = ft.colors.BLUE
        e.control.update()

    def unhighlight_link(e):
        e.control.style.color = None
        e.control.update()

    page.add(
        ft.Text(
            disabled=False,
            spans=[
                ft.TextSpan("AwesomeApp 1.0 "),
                ft.TextSpan(
                    "Visit our website",
                    ft.TextStyle(decoration=ft.TextDecoration.UNDERLINE),
                    url="https://google.com",
                    on_enter=highlight_link,
                    on_exit=unhighlight_link,
                ),
                ft.TextSpan(" All rights reserved. "),
                ft.TextSpan(
                    "Documentation",
                    ft.TextStyle(decoration=ft.TextDecoration.UNDERLINE),
                    url="https://google.com",
                    on_enter=highlight_link,
                    on_exit=unhighlight_link,
                ),
            ],
        ),
    )

ft.app(main)
```

### Rich text with borders and stroke

<img src="/img/docs/controls/text/richtext-borders-stroke.png" className="screenshot-50" />

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Stack(
            [
                ft.Text(
                    spans=[
                        ft.TextSpan(
                            "Greetings, planet!",
                            ft.TextStyle(
                                size=40,
                                weight=ft.FontWeight.BOLD,
                                foreground=ft.Paint(
                                    color=ft.colors.BLUE_700,
                                    stroke_width=6,
                                    stroke_join=ft.StrokeJoin.ROUND,
                                    style=ft.PaintingStyle.STROKE,
                                ),
                            ),
                        ),
                    ],
                ),
                ft.Text(
                    spans=[
                        ft.TextSpan(
                            "Greetings, planet!",
                            ft.TextStyle(
                                size=40,
                                weight=ft.FontWeight.BOLD,
                                color=ft.colors.GREY_300,
                            ),
                        ),
                    ],
                ),
            ]
        )
    )

ft.app(main)
```

### Rich text with gradient

<img src="/img/docs/controls/text/richtext-gradient.png" className="screenshot-50" />

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Text(
            spans=[
                ft.TextSpan(
                    "Greetings, planet!",
                    ft.TextStyle(
                        size=40,
                        weight=ft.FontWeight.BOLD,
                        foreground=ft.Paint(
                            gradient=ft.PaintLinearGradient(
                                (0, 20), (150, 20), [ft.colors.RED, ft.colors.YELLOW]
                            )
                        ),
                    ),
                ),
            ],
        )
    )

ft.app(main)
```

## Properties

### `bgcolor`

Text background [color](/docs/guides/python/colors).

### `color`

Text foreground [color](/docs/guides/python/colors).

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
ft.app(target=main, view=ft.AppView.WEB_BROWSER, web_renderer=ft.WebRenderer.HTML)
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

### `bgcolor`

See [`Text.bgcolor`](#bgcolor).

### `color`

See [`Text.color`](#color).

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

The [color](/docs/guides/python/colors) in which to paint the text decorations.

### `decoration_style`

The style in which to paint the text decorations (e.g., dashed).

The value is the instance of `ft.TextDecorationStyle` enum:

* `SOLID` (default) - Draw a solid line.
* `DOUBLE` - Draw two lines.
* `DOTTED` - Draw a dotted line.
* `DASHED` - Draw a dashed line.
* `WAVY` - Draw a sinusoidal line.

### `decoration_thickness`

The thickness of the decoration stroke as a multiplier of the thickness defined by the font.

### `font_family`

See [`Text.font_family`](#font_family).

### `foreground`

The paint drawn as a foreground for the text.

The value is of [`ft.Paint`](canvas#paint) class.

### `italic`

`True` to use italic typeface.

### `shadow`

See [`Container.shadow`](container#shadow).

### `size`

The size of glyphs (in logical pixels) to use when painting the text. Default is 14.

### `weight`

Font weight - see [Text.weight](#weight) for possible values.

## `TextSpan` properties

A span of text.

### `spans`

Additional spans to include as children.

If both `text` and `spans` are defined, the `text` will precede the `spans`.

### `style`

The [`TextStyle`](#textstyle-properties) to apply to this span.

### `text`

The text contained in this span.

If both `text` and `spans` are defined, the `text` will precede the `spans`.

### `url`

The URL to open when the span is clicked. If registered, `on_click` event is fired after that.

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