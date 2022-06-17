---
title: การสร้างแอป Flet บน Python
description: เรียนรู้วิธีสร้างแอป Flet บน Python
sidebar_label: Python
slug: python
---

ในการเขียนแอป Flet คุณไม่จำเป็นต้องเป็นผู้เชี่ยวชาญด้าน Front-end แต่เราขอแนะนำให้คุณมีความรู้พื้นฐานเกี่ยวกับ Python และการเขียนโปรแกรมเชิงวัตถุไว้ก่อน

ในคู่มือนี้ เราจะพาคุณศึกษาโครงสร้างของแอป Flet และเรียนรู้วิธีการส่งออกข้อมูลโดยใช้ตัวควบคุมของ Flet การรับคำขอข้อมูลจากผู้ใช้ และสร้างหน้าเค้าโครงพื้นฐาน นอกจากนี้ เราจะ
ครอบคลุมตัวเลือกรวมรวบและการปรับใช้งานเพื่อส่งมอบแอปที่พร้อมใช้งานให้กับผู้ใช้ของคุณ

## การติดตั้งโมดูล `flet` 

Flet จำต้องใช้ Python 3.7 ขึ้นไป ในการเริ่มต้นใช้งาน Flet คุณต้องติดตั้งโมดูล `flet` ก่อนโดยใช้คำสั่ง:

```bash
pip install flet
```

:::note
ในการอัพเกรดโมดูล `flet` สามารถใช้คำสั่ง:

```bash
pip install flet --upgrade
```
:::

## โครงสร้างแอปพื้นฐาน

แอป Flet มีโครงสร้างที่เรียบง่ายมากๆมีโครงสร้างดังต่อไปนี้:

```python
import flet
from flet import Page

def main(page: Page):
    # เพิ่ม/อัปเดตตัวควบคุมใน Page
    pass

flet.app(target=main)
```

:::note
ส่วนนี้เรียกได้ว่าคือ `พื้นฐาน` ในคู่มือนี้ เราจะทำให้ดูเป็นแนวทางที่ใช้จริงในโลกแห่งความเป็นจริงด้วยโครงสร้างแอปจากการใช้ตัวควบคุมที่นำกลับมาใช้ใหม่ได้ใน Page
:::

โปรแกรม Flet ทั่วๆไปลงท้ายด้วยการเรียกคำสั่ง `flet.app()` เมื่อแอปเริ่มต้นก็จะรอเซสชันผู้ใช้ใหม่โดยในฟังก์ชัน `main()` เป็นจุดเริ่มต้นในการพัฒนาแอปพลิเคชัน Flet มันจะเริ่มเรียกใช้งานเธรดใหม่จากทุกเซสชันของผู้ใช้กับ `Page` อินสแตนซ์ที่ส่งผ่านเข้ามา หากเรียกใช้แอป Flet บนเบราว์เซอร์ เซสชันผู้ใช้ใหม่จะเริ่มต้นขึ้นใหม่เมื่อเปิดแท็บใหม่หรือเปิดหน้าใหม่ เมื่อทำงานเป็นแอปเดสก์ท็อปจะมีการสร้างเซสชันเดียวเท่านั้น

`Page` เป็นเหมือน `canvas` ส่วนเฉพาะสำหรับผู้ใช้ ซึ่งเป็นสถานะภาพของเซสชันของผู้ใช้ ในการสร้าง UI ของแอปพลิเคชันที่คุณสามารถเพิ่มและลบตัวควบคุมไปยัง Page ได้จากการอัปเดตคุณสมบัติของ Page ตัวอย่างโค้ดด้านบนจะแสดงเพียงหน้าว่างให้กับผู้ใช้ทุกคน

โดยค่าเริ่มต้นของแอป Flet จะเริ่มทำงานในหน้าต่าง native OS ซึ่งสะดวกมากสำหรับการพัฒนา อย่างไรก็ตาม คุณสามารถเปิดในหน้าต่างเบราว์เซอร์ใหม่ได้โดยแก้ไขที่ `flet.app` โดยเป็นดังต่อไปนี้:

```python
flet.app(target=main, view=flet.WEB_BROWSER)
```

:::info
ภายใน แอป Flet ทุกแอปคือเว็บแอป และแม้ว่าจะเปิดในหน้าต่าง native OS ตัวเว็บเซิร์ฟเวอร์ภายในเริ่มต้นทำงานในพื้นหลัง Flet เว็บเซิร์ฟเวอร์นี้เรียกว่า `Fletd` โดยค่าเริ่มต้นจะเชื่อมต่อกับพอร์ต TCP แบบสุ่ม คุณสามารถระบุพอร์ต TCP ที่กำหนดเองได้ จากนั้นเปิดแอปในเบราว์เซอร์พร้อมกับมุมมองเดสก์ท็อปได้หมือนกัน:

```python
flet.app(port=8550, target=main)
```

เปิด `http://localhost:<พอร์ต>` ในเบราว์เซอร์ของคุณเพื่อดูเวอร์ชันเว็บของแอป Flet ของคุณ
:::

## ตัวควบคุม

หน้าจอผู้ใช้สามารถสร้างมันได้จาก **ตัวควบคุม** (หรืออีกชื่อคือวิดเจ็ต) หากต้องการให้ผู้ใช้มองเห็นตัวควบคุม จะต้องเพิ่มตัวควบคุมดังกล่าวใน "Page" หรือในตัวควบคุมอื่นๆ Page คือตัวควบคุมที่อยู่สูงสุด ตัวควบคุมที่ซ้อนกันสามารถแสดงเป็นต้นไม้ได้โดย Page ก็คือ Root นั่นเอง

ตัวควบคุมเป็นเพียงคลาสใน Python ปกติ สร้างอินสแตนซ์ตัวควบคุมผ่านตัวสร้างด้วยพารามิเตอร์ที่ตรงกับคุณสมบัติ เช่น:

```python
t = Text(value="สวัสดีชาวโลก!", color="green")
```

หากต้องการแสดงตัวควบคุมบน Page ให้คุณเพิ่มตัวควบคุมลงไปใน list Page ก็คือ `page.controls.append(ตัวควบคุม)` และเรียกใช้เมธอด `page.update()` เพื่ออัปเดตหรือเปลี่ยนแปลง Page ไปยังเบราว์เซอร์หรือไคลเอนต์เดสก์ท็อป:

```python
import flet
from flet import Page

def main(page: Page):
    t = Text(value="สวัสดีชาวโลก!", color="green")
    page.controls.append(t) # เพิ่มตัวควบคุมลงไปใน list Page
    page.update()

flet.app(target=main)
```

:::note
ในตัวอย่างต่อไปนี้ เราจะแสดงเฉพาะเนื้อหาของฟังก์ชัน `main`
:::

คุณสามารถแก้ไขคุณสมบัติของคัวควบคุมและ UI อัปเดตการเปลี่ยนแปลงด้วย `page.update()`:

```python
t = Text()
page.add(t) # นี่คือเขียนโค้ดแบบลัดของ page.controls.add(t) และ page.update() ก็คือเพิ่มและอัปเดตในตัวเดียว
for i in range(10):
    t.value = f"Step {i}"
    page.update()
    sleep(1)
```

ตัวควบคุมบางตัวเป็นตัวควบคุมแบบ "คอนเทนเนอร์" (คล้าย Page) ซึ่งอาจมีตัวควบคุมอื่นๆ ตัวอย่างเช่น `Row` ตัวควบคุมที่ช่วยให้เราจัดตัวควบคุมตัวอื่นๆให้เป็นแถวทีละรายการ:

```python
page.add(
    Row(controls=[
        Text("A"),
        Text("B"),
        Text("C")
    ])
)
```

หรือ `TextField` และ `ElevatedButton` จะได้แบบนี้:

```python
page.add(
    Row(controls=[
        TextField(label="Your name"),
        ElevatedButton(text="Say my name!")
    ])
)
```

`page.update()` นั้นฉลาดพอที่จะส่งแค่สิ่งที่มีการเปลี่ยนแปลงตั้งแต่การเรียกครั้งล่าสุด ดังนั้นคุณสามารถเพิ่มตัวควบคุมใหม่สักสองสามตัวลงไปใน Page หรือจะลบบางส่วนเพื่อเปลี่ยนคุณสมบัติของตัวควบคุมอื่น ๆ แล้วจากนั้นไปเรียก `page.update()` เพื่อทำการอัปเดตเป็นเป็นหมวดๆไป เช่น:

```python
for i in range(10):
    page.controls.append(Text(f"Line {i}"))
    if i > 4:
        page.controls.pop(0)
    page.update()
    sleep(0.3)
```

ตัวควบคุมบางตัวตัว อย่างเช่น ปุ่ม อาจมีตัวที่ใช้จัดการเหตุการณ์ไว้ตอบสนองต่อกับข้อมูล Input ที่ได้มาจากผู้ใช้ ตัวอย่างเช่น `ElevatedButton.on_click`:

```python
def button_clicked(e):
    page.add(Text("Clicked!"))

page.add(ElevatedButton(text="Click me", on_click=button_clicked))
```

และตัวอย่างขั้นสูงอย่าง แอป To-Do ง่ายๆ:

```python
import flet
from flet import Checkbox, ElevatedButton, Row, TextField

def main(page):
    def add_clicked(e):
        page.add(Checkbox(label=new_task.value))

    new_task = TextField(hint_text="ต้องการทำอะไรบ้าง?", width=300)
    page.add(Row([new_task, ElevatedButton("เพิ่ม", on_click=add_clicked)]))

flet.app(target=main)
```

:::info
Flet ดำเนินการแบบ *Imperative* หรือทำไปทีละขั้นตอน โมเดล UI ที่คุณต้องกำหนด "ขึ้นมาเอง" สร้าง UI ของแอปพลิเคชันด้วยตัวควบคุมแบบเก็บสถานะแล้วเปลี่ยนรูปแบบโดยอัปเดตด้วยคุณสมบัติของตัวควบคุม Flutter ดำเนินการแบบ *declarative* หรือไม่รู้ว่าเป็นยังไงแต่รู้ว่าต้องใส่อะไรไป โมเดลที่ UI ถูกสร้างขึ้นใหม่โดยอัตโนมัติจากการเปลี่ยนแปลงข้อมูลในแอปพลิเคชัน
การจัดการสถานะแอปพลิเคชันในแอปพลิเคชัน front-end ที่ทันสมัยนั้นเป็นงานที่ซับซ้อนมาก แนวทางของ Flet อาจจะดูเก่าแต่อาจน่าสนใจสำหรับโปรแกรมเมอร์ที่ไม่มีประสบการณ์ด้าน front-end
:::

### คุณสมบัติ `visible` (การมองเห็น)

ทุกตัวควบคุมจะมีคุณสมบัติ `visible` โดยค่าเริ่มต้นจะเป็น `true` ตัวควบคุมจะแสดงบน Page การตั้งค่าให้ `visible` เป็น `false` ถูกป้องกันไว้ให้อยู่แค่ในตัวควบคุม (และโหนดลูกทั้งหมดถ้าหากมี) จากการแสดงผลบน canvas ตัวควบคุมที่ถูกซ่อนไว้จะไม่สามารถโฟกัสหรือเลือกมันด้วยแป้นพิมพ์หรือเมาส์ได้ และพวกมันจะไม่ปล่อยเหตุการณ์ใดๆออกมา

### คุณสมบัติ `disabled` (ปิดการใช้งาน)

ทุกตัวควบคุมจะมีคุณสมบัติ `disabled` โดยค่าเริ่มต้นจะเป็น `false` ตัวควบคุมและโหนดลูกทั้งหมดจะถูกเปิดใช้งาน
คุณสมบัติ `disabled` ส่วนใหญ่จะใช้งานกับตัวควบคุมจำพวกการรับข้อมูลเช่น `TextField`, `Dropdown`, `Checkbox`, buttons
อย่างไรก็ตาม `disabled` สามารถตั้งค่ากับตัวควบคุมแม่ได้ และค่าพวกนั้นจะถูกกระจายไปยังโหลดระดับล่างทั้งหมดจะถูกปิดการใช้งานจนครบ

ตัวอย่างเช่น หากคุณมีแบบฟอร์มที่มีตัวควบคุมรายการหลายรายการ คุณสามารถตั้งค่าคุณสมบัติ `disabled` สำหรับตัวควบคุมแต่ละรายการได้:

```python
first_name = TextField()
last_name = TextField()
first_name.disabled = True
last_name.disabled = True
page.add(first_name, last_name)
```

หรือไม่คุณก็สามารถใส่ตัวควบคุมฟอร์มลงไปใน container เช่น `Column` แล้วตั้งค่า `disabled` ใน Column แบบ:

```python
first_name = TextField()
last_name = TextField()
c = Column(controls=[
    first_name,
    last_name
])
c.disabled = True
page.add(c)
```

## การแสดงข้อมูล

### Text (ข้อความ)

ตัวควบคุม `Text` ใช้เพื่อส่งออกข้อมูลที่เป็นข้อความ คุณสมบัติหลักๆของมันคือ `value` และ `size` แต่ยังมีคุณสมบัติในการจัดรูปแบบหลายอย่างเพื่อควบคุมลักษณะที่จะแสดงผลออกมา ตัวอย่างเช่น:

```python
t = Text(
    value="นี่คือตัวอย่างตัวควบคุม Text",
    size=30,
    color="white",
    bgcolor="pink",
    weight="bold",
    italic=True,
)
page.add(t)
```

#### Text styles (รูปแบบข้อความ)

[จะเขียนในภายหลัง]

### Icon (ไอคอน)

* รายการไอคอน
* ลิงก์ไปยังแอป

### Image (รูปภาพ)

บันทึกเกี่ยวกับ การแบ่งปันทรัพยากรข้ามต้นทาง (CORS)
สินทรัพย์โหลดด้านข้าง

## Layout (เค้าโครง)

* Row
* Column
* Stack
* Container
* padding, margin, border ฯลฯ

## Colors (สี)

* รายการสี
* ลิงก์ไปยังแอป

## รับข้อมูลจากผู้ใช้

การสร้างเว็บแอปแบบโต้ตอบด้วย Flet นั้นง่ายมาก ไม่ได้จำกัดแค่เพียงแค่การแสดงข้อมูลเท่านั้น แต่คุณสามารถรับคำขอข้อมูลจากผู้ใช้และตอบสนองด้วยเหตุการณ์ต่างๆได้ ที่สร้างจากตัวควบคุมใน Page ได้

### Buttons (ปุ่ม)

`Button` เป็นตัวควบคุมรับข้อมูลที่สำคัญที่สุดหลังจาก `คลิก` จะเกิดเหตุการณ์ขึ้นหลังจากกดมันลงไป:

```python
btn = ElevatedButton("คลิกฉัน")
page.add(btn)
```

[SCREENSHOT?]

เหตุการณ์ทั้งหมดที่สร้างจากตัวควบคุมบนหน้าเว็บจะถูกส่งกลับไปยังสคริปต์ของคุณอย่างต่อเนื่อง ดังนั้นคุณจะตอบสนองกับการคลิกปุ่มยังไง?

### Event handlers (ตัวจัดการเหตุการณ์)

ปุ่มกับเหตุการณ์ในแอป "เครื่องนับจํานวน":

```python
import flet
from flet import IconButton, Page, Row, TextField, icons

def main(page: Page):
    page.title = "ตัวอย่างเครื่องนับจํานวนจาก Flet"
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

### Textbox (กล่องข้อความ)

Flet มี[ตัวควบคุม](/docs/controls)หลายหลายรูปแบบในการสร้างแบบฟอร์มเช่น : [TextField](/docs/controls/textfield), [Checkbox](/docs/controls/checkbox), [Dropdown](/docs/controls/dropdown), [ElevatedButton](/docs/controls/elevatedbutton)

มาลองถามชื่อของผู้ใช้กัน:

```python title="greeter.py"
import flet
from flet import ElevatedButton, Text, TextField

def main(page):
    def btn_click(e):
        if not txt_name.value:
            txt_name.error_text = "กรุณากรอกชื่อของคุณ"
            page.update()
        else:
            name = txt_name.value
            page.clean()
            page.add(Text(f"สวัสดี {name}!"))

    txt_name = TextField(label="ชื่อของคุณ")

    page.add(txt_name, ElevatedButton("ทักทาย", on_click=btn_click))

flet.app(target=main)
```

### Checkbox (ช่องทำเครื่องหมาย)

จะเขียนในภายหลัง

### Dropdown (รายการเลือกแบบดึงลง)

จะเขียนในภายหลัง

## Large lists (รายการขนาดใหญ่)

คุณสามารถใช้ตัวควบคุม [`Column`](/docs/controls/column) และ [`Row`](/docs/controls/row) ในกรณีนี้ส่วนใหญ่จะใช้เพื่อแสดงเป็นรายการ แต่ถ้าหากว่ารายการมีหลายร้อยหรือหลายพันรายการ `Column` และ `Row` UI จะไม่มีประสิทธิภาพเพราะมันจะหน่วงและช้า เพราะว่ามันจะแสดงรายการทั้งหมดพร้อมกันถึงแม้ว่าตำแหน่งปัจจุบันจะยังไม่ถึงข้อมูลนั้น

ในตัวอย่างต่อไปนี้ เรากำลังเพิ่มตัวควบคุม`Text` กับรายการทั้งหมด 5,000 รายการไปเพิ่มไปที่ Page โดยใช้ `Column` เป็น container เป็นเค้าโครงเริ่มต้น:

```python
import flet
from flet import Page, Text

def main(page: Page):
    for i in range(5000):
        page.controls.append(Text(f"บรรทัด {i}"))
    page.scroll = "always"
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

เรียกใช้งานโปรแกรมและสังเกตว่ามัน มันไม่ได้ใช้เวลาแค่ 2-3 วินาทีในการเริ่มโหลดและแสดงข้อความแต่ละบรรทัดทั้งหมด แต่ว่าการเลื่อนก็ช้าและกระตุกอีกด้วย:

<img src="/img/docs/getting-started/TH-scroll-column.gif" className="screenshot-50" />

สำหรับการแสดงรายการที่มีรายการจำนวนมาก แนะนำให้ใช้ตัวควบคุม [`ListView`](/docs/controls/listview) และ [`GridView`](/docs/controls/gridview) ซึ่งจะแสดงรายการได้ตามต้องการ และมองเห็นได้แค่ตำแหน่งหรือจุดที่เลื่อนอยู่ในปัจจุบันเท่านั้น

### ListView (มุมมองรายการ)

[`ListView`](/docs/controls/listview) อาจเป็นแนวตั้ง(ค่าเริ่มต้น) หรือแนวนอนก็ได้ รายการใน ListView จะแสดงทีละรายการตามทิศทางที่ไปเลื่อน
ListView จะแสดงผลโหนดลูกของมันอย่างมีประสิทธิภาพ แต่ประสิทธิภาพของการเลื่อนสามารถปรับปรุงเพิ่มเติมได้หากคุณสามารถตั้งค่าความสูงหรือความกว้างได้ (ด้วย `horizontal` ใน ListView) ของทุกรายการ ("ขอบเขต") สามารถทำได้โดยการกำหนดขอบเขตโดยสมบูรณ์ด้วยคุณสมบัติ `item_extent` จะทำให้ขอบเขตของโหนดลูกทุกตัวให้เท่ากับขอบเขตของโหนดลูกตัวแรกโดยกำหนดคุณสมบัติ `first_item_prototype` เป็นจริง `True`

มาลองแสดงรายการ 5,000 รายการโดยใช้ตัวควบคุม ListView กัน:

```python
import flet
from flet import ListView, Page, Text

def main(page: Page):
    lv = ListView(expand=True, spacing=10)
    for i in range(5000):
        lv.controls.append(Text(f"บรรทัด {i}"))
    page.add(lv)

flet.app(target=main, view=flet.WEB_BROWSER)
```

ตอนนี้การเลื่อนเป็นไปอย่างราบรื่นและเร็วพอที่จะเคลื่อนไหวตามเมาส์ทัน:

<img src="/img/docs/getting-started/TH-scroll-listview.gif" className="screenshot-50" />

:::note
เราใช้ `expand=True` ใน เพื่อให้ทำงาน ListView ได้อย่างถูกต้อง จะต้องระบุความสูง (หรือความกว้าง ถ้าเป็น `horizontal`) คุณสามารถกำหนดขนาดที่แน่นอนได้ เช่น `ListView(height=300, spacing=10)`ต่ในตัวอย่างด้านบน เรากำหนดให้ ListView ใช้พื้นที่ทั้งหมดในหน้า เช่น expand อ่านเพิ่มเติมเกี่ยวกับคุณสมบัติ [`Control.expand`](/docs/controls#expand)
:::

### GridView

[`GridView`](/docs/controls/gridview) allows arranging controls into a scrollable grid.

You can make a "grid" with `Column(wrap=True)` or `Row(wrap=True)`, for example:

```python
import os
import flet
from flet import Container, Page, Row, Text, alignment, border, border_radius, colors

os.environ["FLET_WS_MAX_MESSAGE_SIZE"] = "8000000"

def main(page: Page):
    r = Row(wrap=True, scroll="always", expand=True)
    page.add(r)

    for i in range(5000):
        r.controls.append(
            Container(
                Text(f"Item {i}"),
                width=100,
                height=100,
                alignment=alignment.center,
                bgcolor=colors.AMBER_100,
                border=border.all(1, colors.AMBER_400),
                border_radius=border_radius.all(5),
            )
        )
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

<img src="/img/docs/getting-started/row-wrap-as-grid.png" className="screenshot-50" />

Try scrolling and resizing the browser window - everything works, but very laggy.

:::note
At the start of the program we are setting the value of `FLET_WS_MAX_MESSAGE_SIZE` environment variable to `8000000` - this is the maximum size of WebSocket message in bytes that can be received by Flet Server rendering the page. Default size is 1 MB, but the size of JSON message describing 5,000 container controls would exceed 1 MB, so we are increasing allowed size to 8 MB.

Squeezing large messages through WebSocket channel is, generally, not a good idea, so use [batched updates](#batch-updates) aproach to control channel load.
:::

GridView, similar to ListView, is very effective to render a lot of children. Let's implement the example above using GridView:

```python
import os
import flet
from flet import Container, GridView, Page, Text, alignment, border, border_radius, colors

os.environ["FLET_WS_MAX_MESSAGE_SIZE"] = "8000000"

def main(page: Page):
    gv = GridView(expand=True, max_extent=100, child_aspect_ratio=0.5)
    page.add(gv)

    for i in range(5000):
        gv.controls.append(
            Container(
                Text(f"Item {i}"),
                alignment=alignment.center,
                bgcolor=colors.AMBER_100,
                border=border.all(1, colors.AMBER_400),
                border_radius=border_radius.all(5),
            )
        )
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

With GridView scrolling and window resizing are smooth and responsive!

You can specify either fixed number of rows or columns (runs) with `runs_count` property or the maximum size of a "tile" with `max_extent` property, so the number of runs can vary automatically. In our example we set the maximum tile size to 150 pixels and set its shape to "square" with `child_aspect_ratio=1`. `child_aspect_ratio` is the ratio of the cross-axis to the main-axis extent of each child. Try changing it to `0.5` or `2`.

### Batch updates

When `page.update()` is called a message is being sent to Flet server over WebSockets containing page updates since the last `page.update()`. Sending a large message with thousands of added controls could make a user waiting for a few seconds until the messages is fully received and controls rendered.

To increase usability of your program and present the results to a user as soon as possible you can send page updates in batches. For example, the following program adds 5,100 child controls to a ListView in batches of 500 items:

```python
import flet
from flet import ListView, Page, Text

def main(page: Page):

    # add ListView to a page first
    lv = ListView(expand=1, spacing=10, item_extent=50)
    page.add(lv)

    for i in range(5100):
        lv.controls.append(Text(f"Line {i}"))
        # send page to a page
        if i % 500 == 0:
            page.update()
    # send the rest to a page
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

## Communicating between sessions

If you build a chat app using Flet you need somehow to pass user messages between sessions. When a user sends a message it should be broadcasted to all other app sessions and displayed on their pages.

Flet provides a simple built-in PubSub mechanism for asynchronous communication between page sessions.

Flet PubSub allows broadcasting messages to all app sessions or sending only to specific "topic" (or "channel") subscribers.

A typical PubSub usage would be:

* [subscribe](/docs/controls/page#subscribehandler) to broadcast messages or [subscribe to a topic](/docs/controls/page#subscribe_topictopic-handler) on app session start.
* [send](/docs/controls/page#send_allmessage) broadcast message or [send to a topic](/docs/controls/page#send_all_on_topictopic-message) on some event, like "Send" button click.
* [unsubscribe](/docs/controls/page#unsubscribe) from broadcast messages or [unsubscribe from a topic](/docs/controls/page#unsubscribe_topictopic) on some event, like "Leave" button click.
* [unsubscribe](/docs/controls/page#unsubscribe_all) from everything on [`page.on_close`](#on_close).

This is an example of a simple chat application:

```python
import flet
from flet import Column, ElevatedButton, Page, Row, Text, TextField

def main(page: Page):
    page.title = "Flet Chat"

    # subscribe to broadcast messages
    def on_message(msg):
        messages.controls.append(Text(msg))
        page.update()

    page.pubsub.subscribe(on_message)

    def send_click(e):
        page.pubsub.send_all(f"{user.value}: {message.value}")
        # clean up the form
        message.value = ""
        page.update()

    messages = Column()
    user = TextField(hint_text="Your name", width=150)
    message = TextField(hint_text="Your message...", expand=True)  # fill all the space
    send = ElevatedButton("Send", on_click=send_click)
    page.add(messages, Row(controls=[user, message, send]))

flet.app(target=main, view=flet.WEB_BROWSER)
```

<img src="/img/docs/getting-started/chat-app-example.gif" className="screenshot-70" />

## User controls

User control (`UserControl`) allows building isolated re-usable components by combining existing Flet controls. User control behaves like a `Control`, could have methods and properties.

Below is a minimal example of user control:

```python
class GreeterControl(UserControl):
    def build(self):
        return Text("Hello!")

def main(page):
    page.add(GreeterControl())

flet.app(target=main)
```

UserControl must implement `build()` method that is called to build control's UI and should returns a single `Control` instance or a `List` of controls. `UserControl` is inhrited from [`Stack`](/docs/controls/stack), so multiple children will be arranged on top of each other. If you need to arrange control's UI differently use [`Row`](/docs/controls/row), [`Column`](/docs/controls/column) or other [layout controls](/docs/controls/layout), for example:

```python
class GreeterControl(UserControl):
    def build(self):
        return Column([
            TextField(label="Your name"),
            ElevatedButton("Login")
        ])
```

UserControl is isolated from outside layout, i.e. when `update()` method is called for the parent control any changes inside the UserControl are not included into the update digest. UserControl should call `self.update()` to push its changes to a Flet page, for example:

```python
class Counter(UserControl):
    def add_click(self, e):
        self.counter += 1
        self.text.value = str(self.counter)
        self.update()

    def build(self):
        self.counter = 0
        self.text = Text(str(self.counter))
        return Row([self.text, ElevatedButton("Add", on_click=self.add_click)])

def main(page):
    page.add(Counter(), Counter())

flet.app(target=main)
```

<img src="/img/docs/getting-started/user-control-counter.gif" className="screenshot-40" />

You could either declare event handlers (e.g. `def add_click(self, e)`) and control references (e.g. `self.text`) as class members or implement all UserControl's logic inside `build()` method using local variables and inner functions. For example, the code above could be rewritten as:

```python
class Counter(UserControl):
    def build(self):

        self.counter = 0
        text = Text(str(self.counter))

        def add_click(e):
            self.counter += 1
            text.value = str(self.counter)
            self.update()

        return Row([text, ElevatedButton("Add", on_click=add_click)])
```

:::note
`counter` cannot be declared as a local variable as it won't be visible inside `add_click` method, so it must be declared as a class field `self.counter`.
:::

User control can have a constructor to pass custom data, for example:

```python
class Counter(UserControl):
    def __init__(self, initial_count):
        super().__init__()
        self.counter = initial_count

    def build(self):
        text = Text(str(self.counter))
        def add_click(e):
            self.counter += 1
            text.value = str(self.counter)
            self.update()

        return Row([text, ElevatedButton("Add", on_click=add_click)])

# then use the control
def main(page):
    page.add(
        Counter(100),
        Counter(200))
```

:::note
`super().__init__()` must be always called in your own constructor.
:::

User control provides lifecycle "hook" methods:

* `did_mount()` - called after the UserControl added to a page and assigned transient `id`.
* `will_unmount()` - called before the UserControl is removed from a page.

Using those methods we could implement a simple "countdown" control:

```python
class Countdown(UserControl):
    def __init__(self, seconds):
        super().__init__()
        self.seconds = seconds

    def did_mount(self):
        self.running = True
        self.th = threading.Thread(target=self.update_timer, args=(), daemon=True)
        self.th.start()

    def will_unmount(self):
        self.running = False

    def update_timer(self):
        while self.seconds and self.running:
            mins, secs = divmod(self.seconds, 60)
            self.countdown.value = "{:02d}:{:02d}".format(mins, secs)
            self.update()
            time.sleep(1)
            self.seconds -= 1

    def build(self):
        self.countdown = Text()
        return self.countdown

def main(page):
    page.add(Countdown(120), Countdown(60))

flet.app(target=main)
```

<img src="/img/docs/getting-started/user-control-countdown.gif" className="screenshot-40" />

## Deploying web app

Flet app can be deployed as a "standalone" web app which means both your Python app and Flet web server are deployed together as a bundle.

Flet apps use WebSockets for real-time partial updates of their UI and sending events back to your program.
When choosing a hosting provider for your Flet app you should pay attention to their support of WebSockets. Sometimes WebSockets are not allowed or come as a part of more expensive offering, sometimes there is a proxy that periodically breakes WebSocket connection by a timeout (Flet implements re-connection logic, but it could be unpleasant behavior for users of your app anyway).

Another important factor while choosing a hosting provider for Flet app is latency. Every user action on UI sends a message to Flet app and the app sends udpdated UI back to user. Make sure your hosting provider has multiple data centers, so you can run your app closer to the majority of your users.

:::note
We are not affiliated with hosting providers in this section - we just use their service and love it.
:::

### Fly.io

[Fly.io](https://fly.io) has robust WebSocket support and can deploy your app to a [data center](https://fly.io/docs/reference/regions/) that is close to your users. They have very attractive pricing with a [generous free tier](https://fly.io/docs/about/pricing/#free-allowances) which allows you to host up to 3 applications for free.

To get started with Fly install [flyctl](https://fly.io/docs/getting-started/installing-flyctl/) and then authenticate:

    flyctl auth login

To deploy the app with `flyctl` you have to add the following 3 files into the folder with your Python app.

Create `requirements.txt` with a list of application dependencies. At minimum it should contain `flet` module:

```txt title="requirements.txt"
flet>=0.1.29
```

Create `fly.toml` describing Fly application:

```toml title="fly.toml" {1,8}
app = "<your-app-name>"

kill_signal = "SIGINT"
kill_timeout = 5
processes = []

[env]
  FLET_SERVER_PORT = "8080"

[experimental]
  allowed_public_ports = []
  auto_rollback = true

[[services]]
  http_checks = []
  internal_port = 8080
  processes = ["app"]
  protocol = "tcp"
  script_checks = []

  [services.concurrency]
    hard_limit = 25
    soft_limit = 20
    type = "connections"

  [[services.ports]]
    force_https = true
    handlers = ["http"]
    port = 80

  [[services.ports]]
    handlers = ["tls", "http"]
    port = 443

  [[services.tcp_checks]]
    grace_period = "1s"
    interval = "15s"
    restart_limit = 0
    timeout = "2s"
```

Replace `<your-app-name>` with desired application name which will be also used in application URL, such as `https://<your-app-name>.fly.dev`.

Note we are setting the value of `FLET_SERVER_PORT` environment variable to `8080` which is an internal TCP port Flet web app is going to run on.

Create `Dockerfile` containing the commands to build your application container:

```Dockerfile title="Dockerfile"
FROM python:3-alpine

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["python", "./main.py"]
```

`main.py` is a file with your Python program.

:::note
Fly.io deploys every app as a Docker container, but a great thing about Fly is that it provides a free remote Docker builder, so you don't need Docker installed on your machine.
:::

Next, switch command line to a folder with your app and run the following command to create and initialize a new Fly app:

    flyctl apps create --name <your-app-name>

Deploy the app by running:

    flyctl deploy

That's it! Open your app in the browser by running:

    flyctl apps open

### Replit

[Replit](https://replit.com/) is an online IDE and hosting platform for web apps written in any language. Their free tier allows running any number of apps with some performance limitations.

To run your app on Replit:

* [Sign up](https://replit.com/signup?from=landing) on Replit.
* Click "New repl" button.
* Select "Python" language from a list and provide repl name, e.g. `my-app`.
* Click "Packages" tab and search for `flet` package; select its latest version.
* Click "Secrets" tab and add `FLET_SERVER_PORT` variable with value `5000`.
* Switch back to "Files" tab and copy-paste your app into `main.py`.
* Run the app. Enjoy.

## สรุป

ในบทช่วยสอนนี้ คุณจะได้เรียนรู้วิธี

* สร้างหน้าที่สามารถแชร์เว็บแอปที่มีผู้ใช้หลายคนได้
* ทำงานกับส่วนประกอบ UI ที่นำกลับมาใช้ใหม่ได้
* ออกแบบเค้าโครง UI โดยใช้ตัวควบคุม 'Stack'
* Work with lists: view, edit and delete items, filtering;
* Deploy your app two ways: Flet Service and Replit;

หากต้องการอ่านเพิ่มเติมคุณสามารถสำรวจได้ที่ [controls](/docs/controls) และ [examples repository](https://github.com/pglet/examples/tree/main/python)

We would love to hear your feedback! Please drop us an [email](mailto:hello@flet.dev), join the discussion on [Discord](https://discord.gg/dzWXP8SHG8), follow on [Twitter](https://twitter.com/fletdev).