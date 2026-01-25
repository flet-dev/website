---import flet as ft
from datetime import datetime, timedelta

def main(page: ft.Page):
    # إعدادات التطبيق الأساسية
    page.title = "المساعد القانوني العراقي الشامل"
    page.theme_mode = ft.ThemeMode.LIGHT
    page.rtl = True  # دعم اللغة العربية
    page.window_width = 450
    page.window_height = 850
    page.scroll = ft.ScrollMode.AUTO
    page.theme = ft.Theme(color_scheme_seed=ft.colors.BLUE_GREY_900)

    # 1. قاعدة بيانات مدونة الأحكام الشرعية (الأحوال الشخصية)
    sharia_code = {
        "أحكام الزواج": "• المادة 3: الزواج عقد بين رجل وامرأة تحل له شرعاً.\n• ركن العقد: الإيجاب والقبول الصريحين.\n• المادة 10: يجب تسجيل عقد الزواج في المحكمة المختصة.",
        "أحكام الطلاق": "• المادة 34: الطلاق رفع قيد الزواج بإيقاع من الزوج أو الزوجة إن وكلت.\n• المادة 39: يجب مراجعة المحكمة لتسجيل الطلاق خلال فترة العدة.\n• أنواع الطلاق: رجعي وبائن.",
        "الحضانة والنفقة": "• المادة 57: الأم أحق بحضانة الولد لتربيته حال قيام الزوجية وبعد الفرقة.\n• سن الحضانة: يمتد إلى العاشرة ويجوز للمحكمة تمديده لـ15 سنة.\n• النفقة: تجب للزوجة على زوجها من تاريخ العقد الصحيح.",
        "الميراث والوصية": "• تطبق أحكام الشريعة الإسلامية حسب المذهب.\n• الوصية: تجوز بالثلث لغير الوارث، وما زاد يتوقف على إجازة الورثة."
    }

    # 2. قاعدة بيانات العرائض والدعاوي
    petitions_db = {
        "أحوال شخصية": {
            "نفقة زوجية": "السيد قاضي محكمة الأحوال الشخصية في .... المحترم\nالمدعية: ....\nالمدعى عليه: ....\nجهة الدعوى: ان المدعى عليه زوجي... وحيث انه ممتنع عن الانفاق عليّ... اطلب الحكم بنفقة زوجية مستمرة.",
            "تصديق زواج": "اطلب تصديق زواجي الخارجي الواقع بتاريخ .... حيث انني دخلت بالمدعى عليها ورزقت منها بأطفال...",
            "دعوى تفريق": "اطلب التفريق للضرر وفق المادة 40 من قانون الاحوال الشخصية لسوء المعاملة..."
        },
        "بداءة (مدني)": {
            "تثبيت ملكية": "اطلب تثبيت ملكيتي للعقار المرقم .... حيث انني قمت بشرائه بموجب عقد خارجي...",
            "دعوى دين": "المدعى عليه مدين لي بمبلغ قدره .... بموجب كمبيالة، واطلب الحكم بإلزامه بالسداد.",
            "إزالة شيوع": "اطلب إزالة شيوع العقار المرقم .... لعدم قابليته للقسمة بين الشركاء."
        },
        "جزائية (تحقيق)": {
            "شكوى تحرير صك": "المشتكى عليه اعطاني صكاً بدون رصيد بمبلغ .... اطلب اتخاذ الاجراءات القانونية بحقه.",
            "شكوى تشهير": "قام المشتكى عليه بنشر منشورات مسيئة بحقي عبر فيسبوك، اطلب الشكوى بحقه وفق القانون."
        }
    }

    # 3. قاعدة بيانات المدد القانونية والطعون
    deadlines = [
        ("الاستئناف (مدني/أحوال)", "15 يوماً", "من اليوم التالي للتبليغ بالحكم"),
        ("التمييز (أحوال شخصية)", "30 يوماً", "من اليوم التالي للتبليغ بالحكم"),
        ("تصحيح القرار التمييزي", "7 أيام", "من تاريخ التبلغ بالقرار التمييزي"),
        ("التظلم من الأوامر الولائية", "3 أيام", "من تاريخ التبلغ بالأمر"),
        ("الاعتراض على الحكم الغيابي", "10 أيام", "من تاريخ التبلغ بالحكم الغيابي"),
        ("تمييز قرارات المنفذ العدل", "7 أيام", "من تاريخ التبلغ بالقرار")
    ]

    # 4. قانون الإثبات والتنفيذ (المهمات)
    legal_tasks = {
        "قانون الإثبات العراقي": "• المادة 1: الدليل الكتابي هو الحجة الأقوى.\n• السندات الرسمية: لا يجوز الطعن بها إلا بالتزوير.\n• الشهادة: لا تقبل في التصرفات التي تزيد عن مبلغ معين إلا بوجود سند.\n• اليمين الحاسمة: يوجهها خصم لخصمه لحسم النزاع.",
        "قانون التنفيذ العراقي": "• المادة 9: لا ينفذ الحكم إلا إذا اكتسب الدرجة القطعية.\n• حجز أموال المدين: يجوز للمنفذ العدل حجز الراتب بنسبة الربع.\n• الحبس التنفيذي: يجوز حبس المدين إذا امتنع عن السداد وكان موسراً."
    }

    # --- بناء الواجهات ---

    # واجهة الأحكام الشرعية
    sharia_view = ft.Column([
        ft.Text("مدونة الأحكام الشرعية", size=22, weight="bold", color="blue900"),
        ft.Divider(),
        *[ft.ExpansionTile(title=ft.Text(k), controls=[ft.Padding(padding=15, content=ft.Text(v))]) for k, v in sharia_code.items()]
    ], scroll=True)

    # واجهة العرائض
    petition_text = ft.TextField(label="نص العريضة", multiline=True, min_lines=10, read_only=True)
    
    def update_petitions(e):
        pet_type_drop.options = [ft.dropdown.Option(k) for k in petitions_db[pet_cat_drop.value].keys()]
        pet_type_drop.value = None
        page.update()

    def show_content(e):
        petition_text.value = petitions_db[pet_cat_drop.value][pet_type_drop.value]
        page.update()

    pet_cat_drop = ft.Dropdown(label="تصنيف المحكمة", options=[ft.dropdown.Option(k) for k in petitions_db.keys()], on_change=update_petitions)
    pet_type_drop = ft.Dropdown(label="نوع الدعوى", on_change=show_content)
    
    petitions_view = ft.Column([
        ft.Text("دليل العرائض القانونية", size=22, weight="bold", color="blue900"),
        pet_cat_drop, pet_type_drop, petition_text,
        ft.ElevatedButton("نسخ نص العريضة", icon=ft.icons.COPY, on_click=lambda _: page.set_clipboard(petition_text.value))
    ], scroll=True)

    # واجهة المدد
    deadlines_view = ft.Column([
        ft.Text("جدول المدد القانونية والطعون", size=22, weight="bold", color="red900"),
        ft.DataTable(
            columns=[ft.DataColumn(ft.Text("الطعن")), ft.DataColumn(ft.Text("المدة")), ft.DataColumn(ft.Text("الملاحظة"))],
            rows=[ft.DataRow(cells=[ft.DataCell(ft.Text(d[0])), ft.DataCell(ft.Text(d[1])), ft.DataCell(ft.Text(d[2]))]) for d in deadlines]
        )
    ], scroll=True)

    # واجهة الإثبات والتنفيذ
    laws_view = ft.Column([
        ft.Text("مهمات قوانين الإثبات والتنفيذ", size=22, weight="bold", color="green900"),
        *[ft.ExpansionTile(title=ft.Text(k), controls=[ft.Padding(padding=15, content=ft.Text(v))]) for k, v in legal_tasks.items()]
    ], scroll=True)

    # التجميع في تبويبات (Tabs)
    tabs = ft.Tabs(
        selected_index=0,
        tabs=[
            ft.Tab(text="الشرعية", icon=ft.icons.MENU_BOOK, content=ft.Container(sharia_view, padding=20)),
            ft.Tab(text="العرائض", icon=ft.icons.DESCRIPTION, content=ft.Container(petitions_view, padding=20)),
            ft.Tab(text="المدد", icon=ft.icons.ACCESS_TIME, content=ft.Container(deadlines_view, padding=20)),
            ft.Tab(text="القوانين", icon=ft.icons.GAVEL, content=ft.Container(laws_view, padding=20)),
        ], expand=1
    )

    page.add(tabs)

# تشغيل التطبيق
ft.app(target=main)

slug: using-custom-fonts-in-flet-app
title: Using custom fonts in a Flet app
authors: feodor
tags: [how-to]
---

You can now use your own fonts in a Flet app!

The following font formats are supported:

* `.ttc`
* `.ttf`
* `.otf`

Use [`page.fonts`](https://docs.flet.dev/controls/page/#flet.Page.fonts) property to import fonts.

<!-- truncate -->

Set `page.fonts` property to a dictionary where key is the font family name to refer that font and the value is the URL of the font file to import:

```python
def main(page: ft.Page):
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
import flet as ft

def main(page: ft.Page):
    page.title = "Custom fonts"

    page.fonts = {
        "Kanit": "https://raw.githubusercontent.com/google/fonts/master/ofl/kanit/Kanit-Bold.ttf",
        "Open Sans": "fonts/OpenSans-Regular.ttf",
    }

    page.theme = ft.Theme(font_family="Kanit")

    page.add(
        ft.Text("This is rendered with Kanit font"),
        ft.Text("This is Open Sans font example", font_family="Open Sans"),
    )

ft.run(main, assets_dir="assets")
```

<img src="/img/blog/using-custom-fonts-in-flet-app/custom-fonts-example.png" className="screenshot-50" />

## Static vs Variable fonts

At the moment only [static](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#standard_or_static_fonts) fonts are supported, i.e. fonts containing only one specific width/weight/style combination, for example "Open Sans Regular" or "Roboto Bold Italic".

[Variable](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#variable_fonts) fonts support is still [work in progress](https://github.com/flutter/flutter/issues/33709).

However, if you need to use a variable font in your app you can create static "instantiations" at specific weights using [fonttools](https://pypi.org/project/fonttools/), then use those:

    fonttools varLib.mutator ./YourVariableFont-VF.ttf wght=140 wdth=85

To explore available font features (e.g. possible options for `wght`) use [Wakamai Fondue](https://wakamaifondue.com/beta/) online tool.

[Give Flet a try](https://docs.flet.dev/) and [let us know](https://discord.gg/dzWXP8SHG8) what you think!

