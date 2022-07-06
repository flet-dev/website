---
id: introduction
title: บทนำ
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Flet คืออะไร

Flet เป็นเฟรมเวิร์กที่อนุญาตให้สร้างแอปพลิเคชันบนเว็บ เดสก์ท็อป และบนมือถือ ที่ผู้ใช้สามารถโต้ตอบได้มากกว่าหนึ่งคนพร้อมกัน ในภาษาที่คุณชื่นชอบ โดยไม่ต้องมีประสบการณ์ frontend พัฒนามาก่อน

คุณสร้าง UI สำหรับโปรแกรมของคุณด้วย Flet [controls](/docs/controls) ซึ่งมีพื้นฐานมาจาก [Flutter](https://flutter.dev) ของ Google แต่ Flet ไม่ได้เพียงแค่ห่อหุ้มวิดเจ็ตจาก Flutter เพียงเท่านั้น แต่ยังเพิ่มสิ่งที่พิเศษเป็นเอกลักษณ์ของตัวเองด้วยการรวมวิดเจ็ตให้มีขนาดเล็ก ลบความซับซ้อน และนำแนวทางปฏิบัติที่ดีที่สุดในการวาง UI ใช้ค่าเริ่มต้นที่เหมาะสม ทั้งหมดนี้เพื่อให้แน่ใจว่าแอปของคุณจะดูดีและเป็นมืออาชีพโดยไม่ต้องใช้ความพยายามอะไรมากมาย

## ตัวอย่างแอป Flet

ในขณะนี้ คุณสามารถเขียนแอป Flet ด้วยภาษา ไพธอน ได้แล้ว ส่วนภาษาอื่นๆ จะถูกเพิ่มมาในไม่ช้า

นี่คือตัวอย่างแอป "เครื่องนับจํานวน" :

```python title="ไฟล์ counter.py"
import flet
from flet import IconButton, Page, Row, TextField, icons

def main(page: Page):
    page.title = "ตัวอย่างเครื่องนับจํานวน"
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

เพื่อเรียกใช้งานติดตั้งโมดูลแอป `flet` ก่อนด้วยคำสั่ง:

```bash
pip install flet
```

และเรียกใช้งานโปรแกรมได้เลย:

```bash
python counter.py
```

แอปนี้จะเริ่มทำงานเปิดหน้าต่าง native OS ขึ้นมา - ทางเลือกที่เหมือน Electron

<div className="row">
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>macOS</h3>
    <img src="https://github.com/watchakorn-18k/website/blob/main/static/img/docs/getting-started/flet-counter-macos.png?raw=true" className="screenshot-70" />
  </div>
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>Windows</h3>
    <img src="https://github.com/watchakorn-18k/website/blob/main/static/img/docs/getting-started/flet-counter-windows.png?raw=true"className="screenshot-60" />
  </div>  
</div>

ตอนนี้ ถ้าคุณต้องการเรียกใช้แอปเป็นเว็บแอปล่ะก็ เพียงแค่แทนที่บรรทัดสุดท้ายด้วยคำสั่ง :

```python
flet.app(target=main, view=flet.WEB_BROWSER)
```

เรียกใช้แอปอีกครั้งและตอนนี้คุณจะได้รับเว็บแอปทันที:

<img src="https://github.com/watchakorn-18k/website/blob/main/static/img/docs/getting-started/flet-counter-safari.png?raw=true" className="screenshot-50" />

## บทช่วยสอน

ต้องการเรียนรู้วิธีสร้างแอปจริงๆใช่มั้ย สามารถข้ามไปดูที่คู่มือเริ่มต้นใช้งานภาษาของคุณได้เลย :

* [ไพธอน](/docs/getting-started/python)