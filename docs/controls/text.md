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
        ft.Text("Size 30, Italic", size=20, color="pink600", italic=True),
        ft.Text(
            "Size 40, w100",
            size=40,
            color= ft.colors.WHITE,
            bgcolor = ft.colors.BLUE_600,
            weight="w100",
        ),
        ft.Text(
            "Size 50, Normal",
            size=50,
            color= ft.colors.WHITE,
            bgcolor = ft.colors.ORANGE_800,
            weight="normal",
        ),
        ft.Text(
            "Size 60, Bold, Italic",
            size=50,
            color= ft.colors.WHITE,
            bgcolor = ft.colors.GREEN_700,
            weight="bold",
            italic=True,
        ),
        ft.Text("Size 70, w900, selectable", size=70, weight="w900", selectable=True),
        ft.Text("Limit long text to 1 line with ellipsis", style="headlineSmall"),
        ft.Text(
            "Proin rutrum, purus sit amet elementum volutpat, nunc lacus vulputate orci, cursus ultrices neque dui quis purus. Ut ultricies purus nec nibh bibendum, eget vestibulum metus varius. Duis convallis maximus justo, eu rutrum libero maximus id. Donec ullamcorper arcu in sapien molestie, non pellentesque tellus pellentesque. Nulla nec tristique ex. Maecenas euismod nisl enim, a convallis arcu laoreet at. Ut at tortor finibus, rutrum massa sit amet, pulvinar velit. Phasellus diam lorem, viverra vitae leo vitae, consequat suscipit lorem.",
            max_lines=1,
            overflow="ellipsis",
        ),
        ft.Text("Limit long text to 2 lines and fading", style="headlineSmall"),
        ft.Text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh vitae purus consectetur facilisis sed vitae ipsum. Quisque faucibus sed nulla placerat sagittis. Phasellus condimentum risus vitae nulla vestibulum auctor. Curabitur scelerisque, nibh eget imperdiet consequat, odio ante tempus diam, sed volutpat nisl erat eget turpis. Sed viverra, diam sit amet blandit vulputate, mi tellus dapibus lorem, vitae vehicula diam mauris placerat diam. Morbi sit amet pretium turpis, et consequat ligula. Nulla velit sem, suscipit sit amet dictum non, tincidunt sed nulla. Aenean pellentesque odio porttitor sagittis aliquam. Nam varius at metus vitae vulputate. Praesent faucibus nibh lorem, eu pretium dolor dictum nec. Phasellus eget dui laoreet, viverra magna vitae, pellentesque diam.",
            max_lines=2,
        ),
        ft.Text("Limit the width and height of long text", style="headlineSmall"),
        ft.Text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh vitae purus consectetur facilisis sed vitae ipsum. Quisque faucibus sed nulla placerat sagittis. Phasellus condimentum risus vitae nulla vestibulum auctor. Curabitur scelerisque, nibh eget imperdiet consequat, odio ante tempus diam, sed volutpat nisl erat eget turpis. Sed viverra, diam sit amet blandit vulputate, mi tellus dapibus lorem, vitae vehicula diam mauris placerat diam. Morbi sit amet pretium turpis, et consequat ligula. Nulla velit sem, suscipit sit amet dictum non, tincidunt sed nulla. Aenean pellentesque odio porttitor sagittis aliquam. Nam varius at metus vitae vulputate. Praesent faucibus nibh lorem, eu pretium dolor dictum nec. Phasellus eget dui laoreet, viverra magna vitae, pellentesque diam.",
            width = 700,
            height = 100,
        ),
    )

ft.app(target = main)
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
        ft.Text("Display Large", style="displayLarge"),
        ft.Text("Display Medium", style="displayMedium"),
        ft.Text("Display Small", style="displaySmall"),
        ft.Text("Headline Large", style="headlineLarge"),
        ft.Text("Headline Medium", style="headlineMedium"),
        ft.Text("Headline Small", style="headlineMedium"),
        ft.Text("Title Large", style="titleLarge"),
        ft.Text("Title Medium", style="titleMedium"),
        ft.Text("Title Small", style="titleSmall"),
        ft.Text("Label Large", style="labelLarge"),
        ft.Text("Label Medium", style="labelMedium"),
        ft.Text("Label Small", style="labelSmall"),
        ft.Text("Body Large", style="bodyLarge"),
        ft.Text("Body Medium", style="bodyMedium"),
        ft.Text("Body Small", style="bodySmall"),
    )

ft.app(target = main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/text/predefined-text-styles.png" className="screenshot-40" />

## Properties

### `value`

The text displayed.

### `semantics_label`

An alternative semantics label for this text.

If present, the semantics of this control will contain this value instead of the actual text.

This is useful for replacing abbreviations or shorthands with the full text value:

```python
Text("$$", semantics_label="Double dollars")
```

### `text_align`

Text horizontal align. Supported values: `left` (default), `right`, `center`, `justify`, `start`, `end`.

### `font_family`

System or custom font family to render text with. Check [`page.fonts`](/docs/controls/page#fonts) for instructions on how to import and use custom fonts in your application.

#### Using system fonts

You can use the fonts installed on your computer, e.g. "Consolas", "Arial", "Verdana", "Tahoma", etc. For example:

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Text("This text is rendered with Consolas font", font_family = "Consolas")
    )

ft.app(target = main)
```

There is one limitation though - system fonts cannot be used in a Flet web app with "CanvasKit" renderer.

Flet web app can render its UI with one of these renderers:

* **HTML renderer** - uses a combination of HTML elements, CSS, Canvas elements, and SVG elements. This renderer has a smaller download size.
* **CanvasKit renderer** - this renderer is fully consistent with Flutter mobile and desktop, has faster performance with higher widget density, but adds about 2MB in download size.

By default, Flet uses `CanvasKit` renderer for both desktop and mobile browsers.

You can explicitly set what renderer to use when running a Flet program:

```python
# ...
ft.app(target = main, view = ft.WEB_BROWSER, web_renderer="html")
```

Now, when you run the same program you'll see "Consolas" font is used.

Supported `web_renderer` values:

* `canvaskit` (default) - prioritizing performance and pixel-perfect consistency on both desktop and mobile browsers.
* `html` - optimizing download size over performance on both desktop and mobile browsers.
* `auto` - optimizing for download size on mobile browsers and optimizing for performance on desktop browsers.

### `size`

Text size in virtual pixels. Default is `14`.

### `weight`

Font weight. Supported values: `normal` (default), `bold`, `w100`, `w200`, `w300`, `w400`, `w500`, `w600`, `w700`, `w800`, `w900`.

### `italic`

`True` to use italic typeface.

### `no_wrap`

If `False` (default) the text should break at soft line breaks.

If `True`, the glyphs in the text will be positioned as if there was unlimited horizontal space.

### `style`

One of the pre-defined theme styles:

* `displayLarge`
* `displayMedium`
* `displaySmall`
* `headlineLarge`
* `headlineMedium`
* `headlineSmall`
* `titleLarge`
* `titleMedium`
* `titleSmall`
* `labelLarge`
* `labelMedium`
* `labelSmall`
* `bodyLarge`
* `bodyMedium`
* `bodySmall`

### `max_lines`

An optional maximum number of lines for the text to span, wrapping if necessary. If the text exceeds the given number of lines, it will be truncated according to `overflow`.

If this is 1, text will not wrap. Otherwise, text will be wrapped at the edge of the box.

### `overflow`

How visual overflow should be handled. Supported values: `fade` (default), `ellipsis`, `clip`, `visible`.

### `selectable`

`True` if text should be selectable.

### `color`

Text foreground color.

### `bgcolor`

Text background color.
