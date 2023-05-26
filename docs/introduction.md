---
id: introduction
title: Introduction
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What is Flet

Flet is a framework that allows building interactive multi-user web, desktop and mobile applications in your favorite language without prior experience in frontend development.

You build a UI for your program with Flet [controls](/docs/controls) which are based on [Flutter](https://flutter.dev) by Google. Flet does not just "wrap" Flutter widgets, but adds its own "opinion" by combining smaller widgets, hiding complexities, implementing UI best-practices, applying reasonable defaults - all to ensure your apps look cool and professional without extra efforts.

## Flet app example

At the moment you can write Flet apps in Python and other languages will be added soon.

Here is a sample "Counter" app:

```python title="counter.py"
import flet as ft

def main(page: ft.Page):
    page.title = "Flet counter example"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

    txt_number = ft.TextField(value="0", text_align=ft.TextAlign.RIGHT, width=100)

    def minus_click(e):
        txt_number.value = str(int(txt_number.value) - 1)
        page.update()

    def plus_click(e):
        txt_number.value = str(int(txt_number.value) + 1)
        page.update()

    page.add(
        ft.Row(
            [
                ft.IconButton(ft.icons.REMOVE, on_click=minus_click),
                txt_number,
                ft.IconButton(ft.icons.ADD, on_click=plus_click),
            ],
            alignment=ft.MainAxisAlignment.CENTER,
        )
    )

ft.app(target=main)
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
ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

run again and now you instantly get a web app:

<img src="/img/docs/getting-started/flet-counter-safari.png" className="screenshot-50" />

## Tutorials

Want to learn how to build a real app? Jump to a getting started guide for your language:

* [Python](/docs/guides/python/getting-started)