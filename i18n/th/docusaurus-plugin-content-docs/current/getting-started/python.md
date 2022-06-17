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
        page.controls.append(Text(f"บรรทัดที่ {i}"))
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
        lv.controls.append(Text(f"บรรทัดที่ {i}"))
    page.add(lv)

flet.app(target=main, view=flet.WEB_BROWSER)
```

ตอนนี้การเลื่อนเป็นไปอย่างราบรื่นและเร็วพอที่จะเคลื่อนไหวตามเมาส์ทัน:

<img src="/img/docs/getting-started/TH-scroll-listview.gif" className="screenshot-50" />

:::note
เราใช้ `expand=True` ใน เพื่อให้ทำงาน ListView ได้อย่างถูกต้อง จะต้องระบุความสูง (หรือความกว้าง ถ้าเป็น `horizontal`) คุณสามารถกำหนดขนาดที่แน่นอนได้ เช่น `ListView(height=300, spacing=10)`ต่ในตัวอย่างด้านบน เรากำหนดให้ ListView ใช้พื้นที่ทั้งหมดในหน้า เช่น expand อ่านเพิ่มเติมเกี่ยวกับคุณสมบัติ [`Control.expand`](/docs/controls#expand)
:::

### GridView (มุมมองกริด)

[`GridView`](/docs/controls/gridview) อนุญาตให้จัดการตัวควบคุมลงในตารางที่สามารถเลื่อนลงได้

คุณสามารถสร้างตาราง "กริด" ด้วย `Column(wrap=True)` หรือ `Row(wrap=True)` ได้ ตัวอย่างเช่น:

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
                Text(f"รายการที่ {i}"),
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

<img src="/img/docs/getting-started/TH-row-wrap-as-grid.png" className="screenshot-50" />

ลองเลื่อนลงและปรับขนาดหน้าต่างเบราว์เซอร์ - แน่นอนว่าทุกอย่างทำงานได้ แต่หน่วงมาก

:::note
เมื่อเริ่มต้นโปรแกรม ตั้งค่าตัวแปรสภาพแวดล้อม `FLET_WS_MAX_MESSAGE_SIZE` เป็น `8000000` - นี่คือขนาดสูงสุดของข้อความ WebSocket ในหน่วยไบต์ที่ Flet Server จะแสดงผลบนหน้า Page ได้ ขนาดเริ่มต้นคือ 1 MB แต่ขนาดของข้อความ JSON โดยตัวควบคุม container 5,000 รายการจะเกิน 1 MB ดังนั้นเราจึงเพิ่มอนุญาตให้ขนาดเป็น 8 MB

ในการบีบข้อความขนาดใหญ่ผ่านช่องทาง WebSocket โดยทั่วไปไม่ใช่ความคิดที่ดีนั้น ดังนั้นให้ใช้ [batched updates](#batch-updates) เป็นแนวทางการควบคุมช่องโหลด
:::

GridView ซึ่งคล้ายกับ ListView จะมีประสิทธิภาพมากในการแสดงข้อมูลโหลดลูกจำนวนมาก ลองใช้ตัวอย่างข้างต้นโดยใช้ GridView ดู:

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
                Text(f"รายการที่ {i}"),
                alignment=alignment.center,
                bgcolor=colors.AMBER_100,
                border=border.all(1, colors.AMBER_400),
                border_radius=border_radius.all(5),
            )
        )
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

จากการเลื่อนลงใน GridView และการปรับขนาดหน้าต่างจะเป็นไปอย่างราบรื่นและ responsive

คุณสามารถระบุจำนวนแถวหรือคอลัมน์ที่ค่าแบบคงที่ได้ด้วยคุณสมบัติ `runs_count` หรือขนาดสูงสุดของ "tile (ขนาดตัวรายการ)" ด้วย คุณสมบัติ `max_extent` ดังนั้นจำนวนคอลัมน์อาจแตกต่างกันไปโดยอัตโนมัติ ตัวอย่างเช่น เราตั้งค่าขนาด tile สูงสุดเป็น 150 พิกเซล และตั้งค่ารูปร่างเป็น "สี่เหลี่ยม" ด้วย `child_aspect_ratio=1`. คุณสมบัติ `child_aspect_ratio` คืออัตราส่วนของ cross-axis กับ main-axis ของโหนดลูกแต่ละตัว ลองเปลี่ยนเป็น `0.5` หรือ `2` เพื่อดูผลลักษณะของการแสดงผล

### Batch updates

เมื่อเรียกใช้ `page.update()` จะเรียกข้อความและส่งไปยัง Flet server ผ่าน WebSockets ที่มีการอัพเดท Page ตั้งแต่ครั้งล่าสุดของการเรียก `page.update()` การส่งข้อความขนาดใหญ่พร้อมตัวควบคุมที่เพิ่มเข้ามานับพันอาจทำให้ผู้ใช้ต้องใช้เวลารอสักครู่จนกว่าข้อความจะได้รับมาอย่างสมบูรณ์แล้วตัวควบคุมจะแสดงผล

เพื่อเพิ่มความสามารถในการใช้งานโปรแกรมของคุณและนำเสนอผลลัพธ์แก่ผู้ใช้ให้เร็วที่สุด คุณสามารถส่งการอัปเดต Page เป็นชุดๆได้ ตัวอย่าง โปรแกรมต่อไปนี้จะเป็นการเพิ่มตัวควบคุมย่อย 5,100 รายการโดยให้ ListView แบ่งเป็นชุดละ 500 รายการ:

```python
import flet
from flet import ListView, Page, Text

def main(page: Page):

    # add ListView to a page first
    lv = ListView(expand=1, spacing=10, item_extent=50)
    page.add(lv)

    for i in range(5100):
        lv.controls.append(Text(f"บรรทัดที่ {i}"))
        # send page to a page
        if i % 500 == 0:
            page.update()
    # send the rest to a page
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

## การสื่อสารระหว่างเซสชัน

หากคุณสร้างแอปแชทโดยใช้ Flet คุณจะต้องส่งข้อความของผู้ใช้ระหว่างเซสชัน เมื่อผู้ใช้ส่งข้อความ ข้อความนั้นมาแล้วควรถูกเผยแพร่ไปยังเซสชันอื่นๆทั้งหมดในแอป และแสดงพวกมันลงบนหน้า Page

Flet มีกลไกที่เรียกว่า PubSub อยู่ในตัวอยู่แล้วง่ายสำหรับการสื่อสารแบบอะซิงโครนัสระหว่างเซสชัน Page

Flet PubSub อนุญาตให้เผยแพร่ข้อความไปยังเซสชันของแอปทั้งหมดหรือจะส่งเฉพาะ สมาชิก "หัวข้อ" (หรือ "ช่อง") ที่ระบุไว้เท่านั้นก็ได้

การใช้งาน PubSub ทั่วไปจะเป็นดังนี้:

* [subscribe](/docs/controls/page#subscribehandler) เพื่อ broadcast ข้อความหรือ [subscribe to a topic](/docs/controls/page#subscribe_topictopic-handler) เมื่อเริ่มเซสชันแอป
* [send](/docs/controls/page#send_allmessage) broadcast ข้อความหรือ [send to a topic](/docs/controls/page#send_all_on_topictopic-message) กระทำในบางเหตุการณ์ เช่น คลิกปุ่ม "ส่ง"
* [unsubscribe](/docs/controls/page#unsubscribe) จาก broadcast ข้อความหรือ [unsubscribe from a topic](/docs/controls/page#unsubscribe_topictopic) กระทำในบางเหตุการณ์ เช่นปุ่ม ปุ่มคลิก "ออก"
* [unsubscribe](/docs/controls/page#unsubscribe_all) ทุกอย่างใน [`page.on_close`](#on_close)

นี่คือตัวอย่างแอปพลิเคชันแชทง่ายๆ:

```python
import flet
from flet import Column, ElevatedButton, Page, Row, Text, TextField

def main(page: Page):
    page.title = "Flet แชท"

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
    user = TextField(hint_text="ชื่อคุณ", width=150)
    message = TextField(hint_text="ข้อความของคุณ...", expand=True)  # fill all the space
    send = ElevatedButton("ส่ง", on_click=send_click)
    page.add(messages, Row(controls=[user, message, send]))

flet.app(target=main, view=flet.WEB_BROWSER)
```

<img src="/img/docs/getting-started/TH-chat-app-example.gif" className="screenshot-70" />

## UserControl (การควบคุมผู้ใช้)

การควบคุมผู้ใช้ (`UserControl`) อนุญาตให้สร้างส่วนประกอบที่นำกลับมาใช้ใหม่ได้โดยแยกการรวมตัวควบคุม Flet ออกมา การควบคุมของผู้ใช้มีลักษณะเหมือน `ตัวควบคุม` อาจมีเมธอดและคุณสมบัติ

ด้านล่างนี้คือตัวอย่างการควบคุมของผู้ใช้แบบเรียบง่าย:

```python
class GreeterControl(UserControl):
    def build(self):
        return Text("Hello!")

def main(page):
    page.add(GreeterControl())

flet.app(target=main)
```

UserControl ต้องดำเนินการด้วยเมธอด `build()` เมธอดนี้หากถูกเรียกจะให้สร้าง UI จากตัวควบคุมและควรคืนค่า `ตัวควบคุม` เดี่ยวๆเป็น instance หรือจะตัวควบคุม `List` `UserControl` สืบทอดมาจาก [`Stack`](/docs/controls/stack), ดังนั้นโหลดลูกหลายๆตัวจะถูกจัดวางทับกัน หากคุณต้องการจัดเรียง UI ของตัวควบคุมให้แตกต่างกันให้ใช้ [`Row`](/docs/controls/row) และ [`Column`](/docs/controls/column) หรือ [layout controls](/docs/controls/layout) ตัวอย่างเช่น:

```python
class GreeterControl(UserControl):
    def build(self):
        return Column([
            TextField(label="Your name"),
            ElevatedButton("Login")
        ])
```

UserControl ถูกแยกออกจากเค้าโครงภายนอก อย่างเช่น เมื่อใช้เมธอด `update()` เมธอดถูกเรียกสำหรับอัปเดทตัวควบคุมหลัก ในการเปลี่ยนแปลงใดๆภายใน UserControl จะไม่รวมอยู่ในการอัปเดทนี้ ใน UserControl ควรเรียก `self.update()` เพื่อใช้ในการอัปเดทภายใน UserControl เพื่อไปแสดงผลที่ Page ตัวอย่างเช่น:

```python
import flet
from flet import ElevatedButton, Row, Text, UserControl

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

<img src="/img/docs/getting-started/TH-user-control-counter.gif" className="screenshot-40" />

คุณสามารถประกาศตัวจัดการเหตุการณ์ได้ (เช่น `def add_click(self, e)`) และตัวควบคุมด้วยการอ้างอิงถึง (เช่น `self.text`) สมาชิกของคลาสหรือใช้ logic ของตัวควบคุม UserControl ทั้งหมดภายในเมธอด `build()` โดยใช้ตัวแปร local และฟังก์ชันที่อยู่ภายใน ตัวอย่างเช่น โค้ดด้านบนสามารถเขียนใหม่ได้เป็น:

```python
class Counter(UserControl):
    def build(self):

        self.counter = 0
        text = Text(str(self.counter))

        def add_click(e):
            self.counter += 1
            text.value = str(self.counter)
            self.update()

        return Row([text, ElevatedButton("เพิ่ม", on_click=add_click)])
```

:::note
`counter` ไม่สามารถประกาศเป็นตัวแปร local ได้เนื่องจากจะมองไม่เห็นภายในเมธอด `add_click` เพราะงั้นจึงต้องประกาศเป็นรูปแบบคลาสคือ `self.counter`
:::

User control สามารถมีส่งผ่านข้อมูลที่กำหนดเองได้ ตัวอย่างเช่น:

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

        return Row([text, ElevatedButton("เพิ่ม", on_click=add_click)])

# then use the control
def main(page):
    page.add(
        Counter(100),
        Counter(200))
```

:::note
`super().__init__()` ต้องถูกเรียกในตัว __init__ ของคุณเสมอ
:::

User control มีเมธอด "hook" lifecycle:

* `did_mount()` - จะถูกเรียกหลังจาก UserControl ถูกเพิ่มไปยัง Page และได้ถูกมอบหมายชั่วคราวเป็น `id`
* `will_unmount()` - ถูกเรียกก่อนที่ UserControl จะถูกลบออกจาก Page

การใช้เมธอดพวกนั้นทำให้เราสามารถควบคุม "เวลานับถอยหลัง" อย่างง่ายได้เช่น:

```python
import flet
from flet import Text, UserControl
import threading
import time
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

<img src="/img/docs/getting-started/TH-user-control-countdown.gif" className="screenshot-40" />

## Deploying web app (การปรับใช้เว็บแอป)

แอป Flet สามารถปรับใช้เป็นเว็บแอปแบบ "standalone" ได้ ซึ่งหมายความว่าทั้งแอป Python และเว็บเซิร์ฟเวอร์ Flet ของคุณจะถูกปรับใช้ร่วมกันเป็น bundle

แอป Flet ใช้ WebSockets สำหรับการอัปเดต UI บางส่วนเป็นแบบเรียลไทม์และส่งกิจกรรมกลับไปยังโปรแกรมของคุณ
เมื่อเลือกผู้ให้บริการโฮสต์สำหรับแอป Flet ของคุณแล้ว คุณควรให้ความสนใจเรื่องของการสนับสนุน WebSockets บางครั้ง WebSockets อาจจะไม่อนุญาตหรือเป็นอาจจะส่วนหนึ่งของข้อเสนอที่มีราคาแพงกว่าปกติ บางครั้งมีพร็อกซี่ที่หยุดการเชื่อมต่อ WebSocket เป็นระยะหรือหมดเวลาเชื่อมต่อ (Flet ใช้ logic เชื่อมต่อใหม่ แต่อาจเป็นพฤติกรรมที่ไม่พึงประสงค์สำหรับผู้ใช้แอปของคุณอยู่ดี)

ปัจจัยสำคัญอีกหนึ่งอย่างคือการเลือกผู้ให้บริการโฮสต์สำหรับแอพ Flet คือ latency ทุกการกระทำของผู้ใช้กับ UI จะส่งข้อความไปยังแอพ Flet และแอพจะส่ง UI ที่อัปเดทแล้ว กลับไปหาผู้ใช้ ตรวจสอบให้แน่ใจว่าผู้ให้บริการโฮสติ้งของคุณมีศูนย์ข้อมูลหลายแห่งเพียงพอ เพื่อให้คุณสามารถเรียกใช้แอปของคุณได้ใกล้ชิดกับผู้ใช้ส่วนใหญ่ยิ่งขึ้น

:::note
เราไม่มีส่วนเกี่ยวข้องกับผู้ให้บริการโฮสต์ในส่วนนี้ เราแค่ใช้บริการของพวกเขาและชอบที่ใช้มัน
:::

### Fly.io

[Fly.io](https://fly.io) มีการสนับสนุน WebSocket ที่แข็งแกร่งและสามารถปรับใช้แอพของคุณกับ [data center](https://fly.io/docs/reference/regions/) ที่ใกล้ชิดกับผู้ใช้ของคุณ พวกเขามีราคาที่น่าดึงดูดใจมากกับ[generous free tier](https://fly.io/docs/about/pricing/#free-allowances) ซึ่งให้คุณโฮสต์ได้ถึง 3 แอปพลิเคชั่นแบบฟรีๆ

ในการเริ่มต้นใช้งาน Fly ติดตั้ง [flyctl](https://fly.io/docs/getting-started/installing-flyctl/) แล้วตรวจสอบความถูกต้องยืนยนัตัวตน:

    flyctl auth login

ในการปรับใช้แอพกับ `flyctl` คุณต้องเพิ่ม 3 ไฟล์ต่อไปนี้ลงในโฟลเดอร์ด้วยแอพ Python ของคุณ

สร้างไฟล์ `requirements.txt` พร้อมรายการไลบรารี่ที่ต้องใช้ในแอปพลิเคชัน อย่างน้อยควรมี โมดูล `flet` อยู่ในนั้น:

```txt title="requirements.txt"
flet>=0.1.29
```

สร้างไฟล์ `fly.toml` อธิบายการใช้งาน Fly:

```toml title="fly.toml" {1,8}
app = "<ชื่อแอปของคุณ>"

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

แทนที่ `<ชื่อแอปของคุณ>` ด้วยชื่อแอปพลิเคชันที่ต้องการ ซึ่งจะใช้เป็น URL ของแอปพลิเคชัน เช่น `https://<ชื่อแอปของคุณ>.fly.dev`.

โปรดทราบว่าเราตั้งค่าตัวแปรสภาพแวดล้อม `FLET_SERVER_PORT` เป็น `8080` ซึ่งเป็นพอร์ต TCP ของเว็บแอป Flet ที่จะใช้ในการทำงานของแอปพลิเคชัน

สร้างไฟล์ `Dockerfile` และคำสั่งสำหรับสร้าง container แอปพลิเคชันของคุณ:

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
Fly.io จะปรับใช้ทุกแอปเป็น container ของ Docker แต่สิ่งที่ยอดเยี่ยมเกี่ยวกับ Fly ก็คือมันมีตัวสร้าง Docker ระยะไกลให้ฟรีอยู่แล้ว ดังนั้นคุณไม่จำเป็นต้องติดตั้ง Docker บนเครื่องของคุณ
:::

ถัดไป สลับบรรทัดคำสั่งไปยังโฟลเดอร์ที่มีแอปของคุณ แล้วเรียกใช้คำสั่งต่อไปนี้เพื่อสร้างและเริ่มต้นแอป Fly ใหม่:

    flyctl apps create --name <ชื่อแอปของคุณ>

ปรับใช้แอพโดยการเรียกใช้:

    flyctl deploy

แค่นั้นแหละ! จากนั้นเปิดแอปของคุณในเบราว์เซอร์โดยการเรียกใช้:

    flyctl apps open

### Replit

[Replit](https://replit.com/) เป็น IDE ออนไลน์และแพลตฟอร์มโฮสติ้งสำหรับเว็บแอปที่เขียนในภาษาใดก็ได้ ของพวกนี้ฟรีช่วยให้สามารถเรียกใช้แอปจำนวนเท่าใดก็ได้แต่อาจจะมีข้อจำกัดด้านประสิทธิภาพบางอย่าง

ในการเรียกใช้แอปของคุณบน Replit:

* [Sign up](https://replit.com/signup?from=landing) บน Replit.
* คลิกปุ่ม "New repl"
* เลือกภาษา "Python" จากรายการและระบุชื่อ เช่น `แอปของฉัน`.
* คลิกแท็บ "Packages" และค้นหา `flet` package; เลือกเวอร์ชันล่าสุด
* คลิกแท็บ "Secrets" และเพิ่มตัวแปร `FLET_SERVER_PORT` มีค่าเท่ากับ `5000`
* สลับกลับไปที่แท็บ "Files" แล้วคัดลอกและวางแอปของคุณลงไปใน `main.py`
* เรียกใช้แอป แล้วสนุกไปกับมัน

## สรุป

ในบทช่วยสอนนี้ คุณจะได้เรียนรู้วิธี

* สร้างหน้าที่สามารถแชร์เว็บแอปที่มีผู้ใช้หลายคนได้
* ทำงานกับส่วนประกอบ UI ที่นำกลับมาใช้ใหม่ได้
* ออกแบบเค้าโครง UI โดยใช้ตัวควบคุม 'Stack'
* ทำงานกับรายการ: ดู แก้ไข และลบรายการ การกรอง;
* ปรับใช้แอพของคุณสองวิธีด้วย: Flet Service และ Replit;

หากต้องการอ่านเพิ่มเติมคุณสามารถสำรวจได้ที่ [controls](/docs/controls) และ [examples repository](https://github.com/pglet/examples/tree/main/python)

เราชอบที่จะได้ยินความคิดเห็นจากคุณอยู่ กรุณาบอกมาที่เราได้ที่
[email](mailto:hello@flet.dev), เข้าร่วมการสนทนาได้ที่ [Discord](https://discord.gg/dzWXP8SHG8), ติดตามได้ที่ [Twitter](https://twitter.com/fletdev)