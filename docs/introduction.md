---
id: introduction
title: Introduction
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What is Flet?

Flet is a framework that allows building web, desktop and mobile applications in Python without prior experience in frontend development.

You can build a UI for your program with Flet [controls](/docs/controls) which are based on [Flutter](https://flutter.dev) by Google. Flet goes beyond merely wrapping Flutter widgets. It adds its own touch by combining smaller widgets, simplifying complexities, implementing UI best practices, and applying sensible defaults. This ensures that your applications look stylish and polished without requiring additional design efforts on your part.

## Flet app example

Create a sample "Counter" app:

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
                ft.IconButton(ft.Icons.REMOVE, on_click=minus_click),
                txt_number,
                ft.IconButton(ft.Icons.ADD, on_click=plus_click),
            ],
            alignment=ft.MainAxisAlignment.CENTER,
        )
    )

ft.app(main)
```

To run the app install `flet` module ([create a new Flet environment](/docs/getting-started)):

```bash
pip install flet
```

and [run the program](/docs/getting-started/running-app):

```bash
flet run counter.py
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

Now, run your app as a web app:

```
flet run --web counter.py
```

A new browser window or tab will be opened:

<img src="/img/docs/getting-started/flet-counter-safari.png" className="screenshot-50" />
