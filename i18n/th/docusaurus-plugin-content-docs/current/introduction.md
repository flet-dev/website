---
id: introduction
title: บทนำ
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Flet คืออะไร

Flet เป็นเฟรมเวิร์กที่อนุญาตให้สร้างแอปพลิเคชันบนเว็บ เดสก์ท็อป และบนมือถือ สำหรับผู้ใช้งานหลากหลายแบบโต้ตอบในภาษาที่คุณชื่นชอบ โดยไม่ต้องมีประสบการณ์มาก่อนในการพัฒนาส่วนหน้า

คุณสร้าง UI สำหรับโปรแกรมของคุณด้วย Flet [controls](/docs/controls) ซึ่งมีพื้นฐานมาจาก [Flutter](https://flutter.dev) ของ Google แต่ Flet ไม่ได้เพียงแค่ห่อหุ้มวิดเจ็ตจาก Flutter เท่านั้น แต่ยังเพิ่มสิ่งที่พิเศษเป็นเองลักษณ์ของตัวเองด้วยการรวมวิดเจ็ตขนาดเล็ก ลบความซับซ้อน และนำแนวทางปฏิบัติที่ดีที่สุดในการวาง UI ใช้ค่าเริ่มต้นที่เหมาะสม ทั้งหมดนี้เพื่อให้แน่ใจว่าแอปของคุณดูดีและเป็นมืออาชีพโดยไม่ต้องใช้ความพยายามเพิ่มเติม

## Flet app example

At the moment you can write Flet apps in Python and other languages will be added soon.

Here is a sample "Counter" app:

```python title="counter.py"
import flet
from flet import IconButton, Page, Row, TextField, icons

def main(page: Page):
    page.title = "Flet counter example"
    page.vertical_alignment = "center"

    txt_number = TextField(value="0", text_align="right", width=100)

    def minus_click(e):
        txt_number.value = int(txt_number.value) - 1
        page.update()

    def plus_click(e):
        txt_number.value = int(txt_number.value) + 1
        page.update()

    page.add(
        Row(
            [
                IconButton(icons.REMOVE, on_click=minus_click),
                txt_number,
                IconButton(icons.ADD, on_click=plus_click),
            ],
            alignment="center",
        )
    )

flet.app(target=main)
```

To run the app install `flet` module:

```bash
pip install flet
```

and run the program:

```bash
python counter.py
```

The app will be started in a native OS window - what a nice alternative to Electron!

<div className="row">
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>macOS</h3>
    <img src="/img/docs/getting-started/flet-counter-macos.png" className="screenshot-70" />
  </div>
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>Windows</h3>
    <img src="/img/docs/getting-started/flet-counter-windows.png"className="screenshot-60" />
  </div>  
</div>

Now, if you want to run the app as a web app, just replace the last line with:

```python
flet.app(target=main, view=flet.WEB_BROWSER)
```

run again and now you instantly get a web app:

<img src="/img/docs/getting-started/flet-counter-safari.png" className="screenshot-50" />

## Tutorials

Want to learn how to build a real app? Jump to a getting started guide for your language:

* [Python](/docs/getting-started/python)