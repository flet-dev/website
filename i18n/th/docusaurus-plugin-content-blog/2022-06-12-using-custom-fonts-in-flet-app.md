---
slug: using-custom-fonts-in-flet-app
title: การใช้แบบอักษรที่กำหนดเองในแอพ Flet
author: Feodor Fitsner
author_title: ผู้ก่อตั้งและนักพัฒนา Flet
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [วิธีทำ]
---

คุณสามารถใช้แบบอักษรของคุณเองในแอพ Flet ได้แล้ว!

รองรับรูปแบบฟอนต์ต่อไปนี้:

* `.ttc`
* `.ttf`
* `.otf`

ใช้ [`page.fonts`](/docs/controls/page#fonts) คุณสมบัติเพื่อนำเข้าแบบอักษร

ตั้งค่า `page.fonts` คุณสมบัติไปยัง Dict โดย`key`คือชื่อ font family เพื่ออ้างอิงถึงฟอนต์นั้นและ`value`คือ URL ของไฟล์ฟอนต์ที่จะนำเข้า:

```python
def main(page: Page):
    page.fonts = {
        "Kanit": "https://raw.githubusercontent.com/google/fonts/master/ofl/kanit/Kanit-Bold.ttf",
        "Aleo Bold Italic": "https://raw.githubusercontent.com/google/fonts/master/ofl/aleo/Aleo-BoldItalic.ttf"
    }
    page.update()

    # ...
```

Font can be imported from external resource by providing an absolute URL or from application assets by providing relative URL and `assets_dir`.

Specify `assets_dir` in `flet.app()` call to set the location of assets that should be available to the application. `assets_dir` could be a relative to your `main.py` directory or an absolute path. For example, consider the following program structure:

```
/assets
   /fonts
       /OpenSans-Regular.ttf
main.py
```

## Code sample

The following program loads "Kanit" font from GitHub and "Open Sans" from the assets. "Kanit" is set as a default app font and "Open Sans" is used for a specific Text control:

```python
import flet
from flet import Page, Text, Theme

def main(page: Page):
    page.title = "Custom fonts"

    page.fonts = {
        "Kanit": "https://raw.githubusercontent.com/google/fonts/master/ofl/kanit/Kanit-Bold.ttf",
        "Open Sans": "fonts/OpenSans-Regular.ttf",
    }

    page.theme = Theme(font_family="Kanit")

    page.add(
        Text("This is rendered with Kanit font"),
        Text("This is Open Sans font example", font_family="Open Sans"),
    )

flet.app(target=main, assets_dir="assets")
```

<img src="/img/blog/using-custom-fonts-in-flet-app/custom-fonts-example.png" className="screenshot-50" />

## Static vs Variable fonts

At the moment only [static](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#standard_or_static_fonts) fonts are supported, i.e. fonts containing only one spacific width/weight/style combination, for example "Open Sans Regular" or "Roboto Bold Italic".

[Variable](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#variable_fonts) fonts support is still [work in progress](https://github.com/flutter/flutter/issues/33709).

However, if you need to use a variable font in your app you can create static "instantiations" at specific weights using [fonttools](https://pypi.org/project/fonttools/), then use those:

    fonttools varLib.mutator ./YourVariableFont-VF.ttf wght=140 wdth=85

To explore available font features (e.g. possible options for `wght`) use [Wakamai Fondue](https://wakamaifondue.com/beta/) online tool.

[Give Flet a try](/docs/getting-started/python) and [let us know](https://discord.gg/dzWXP8SHG8) what you think!

