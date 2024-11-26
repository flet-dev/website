---
title: WebRenderer
sidebar_label: WebRenderer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Flet web app can render its UI with one of these renderers:

- **HTML renderer**: uses a combination of HTML elements, CSS, Canvas and SVG elements. Has a smaller download size.
- **CanvasKit renderer**: a renderer fully consistent with Flutter mobile and desktop. It has faster performance with higher widget density, but adds about 2MB in download size.

By default, Flet uses `CANVAS_KIT` renderer for both desktop and mobile browsers.

`WebRenderer` enum has the following values:

### `AUTO`

Optimizes for download size on mobile browsers and optimizing for performance on desktop browsers.

### `CANVAS_KIT`

Prioritizes performance and pixel-perfect consistency on both desktop and mobile browsers.

### `HTML`

Optimizes download size over performance on both desktop and mobile browsers.

## Usage Example

You can explicitly set what renderer to use when running a Flet program in web mode using the `web_renderer` parameter of the `ft.app`.

```python
import flet as ft

def main(page: ft.Page):
    ...

ft.app(main, view=ft.AppView.WEB_BROWSER, web_renderer=ft.WebRenderer.HTML)
```