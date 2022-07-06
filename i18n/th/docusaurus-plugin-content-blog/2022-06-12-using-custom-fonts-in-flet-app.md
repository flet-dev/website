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

แบบอักษรสามารถนำเข้าจาก assets ภายนอกได้โดยการระบุ URL หรือจาก assets ของแอปพลิเคชันโดยระบุ URL ที่เกี่ยวข้องและ `assets_dir`

ระบุ  `assets_dir` ใน `flet.app()` เรียกมาเพื่อใช้กำหนดตำแหน่งของ assets ที่ควรมีในแอปพลิเคชั่น `assets_dir` อาจจะสัมพันธ์กับ `main.py` ในไดเรกทอรีของคุณ หรือตรงกับ path ตัวอย่างเพื่อพิจารณาโครงสร้างโปรแกรม :

```
/assets
   /fonts
       /OpenSans-Regular.ttf
main.py
```

## ตัวอย่างโค้ด

โปรแกรมต่อไปนี้โหลดแบบอักษร "Kanit" จาก GitHub และ "Open Sans" จากเนื้อหา "Kanit" ถูกตั้งค่าเป็นฟอนต์เริ่มต้นของแอพ และ "Open Sans" ใช้สำหรับในตัวควบคุมข้อความโดยเฉพาะ:

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

<img src="https://github.com/watchakorn-18k/WEB-DOC-Flet-THAI/blob/main/static/img/blog/using-custom-fonts-in-flet-app/custom-fonts-example.png?raw=true" className="screenshot-50" />

## แบบอักษรคงที่และตัวแปร

ในตอนนี้ [static](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#standard_or_static_fonts) รองรับปรับแต่งฟอนต์ เช่น ฟอนต์ที่มีความกว้าง/น้ำหนัก/รูปแบบผสมกันเท่านั้น เช่น "Open Sans Regular" หรือ "Roboto Bold Italic".

[Variable](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#variable_fonts) ฟอนต์ยังรับรอง [work in progress](https://github.com/flutter/flutter/issues/33709).

อย่างไรก็ตาม หากคุณต้องการใช้ฟอนต์แบบตัวแปรในแอปของคุณ คุณสามารถสร้าง "อินสแตนซ์" ฟอนต์แบบคงที่ โดยระบุความหนาดได้โดยใช้ [fonttools](https://pypi.org/project/fonttools/)จากนั้นใช้สิ่งเหล่านั้น:

    fonttools varLib.mutator ./YourVariableFont-VF.ttf wght=140 wdth=85

To explore available font features (e.g. possible options for `wght`) use [Wakamai Fondue](https://wakamaifondue.com/beta/) online tool.

[Give Flet a try](/docs/getting-started/python) and [let us know](https://discord.gg/dzWXP8SHG8) what you think!

