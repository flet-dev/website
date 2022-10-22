---
id: introduction
title: 介绍
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 什么是Flet

Flet是一个允许用户在没有前端开发经验的情况下用他们熟悉的语言构建交互式多用户的Web端、桌面端和移动端应用的框架。

你用来构建应用的Flet [controls](/docs/controls)基于Google的[Flutter](https://flutter.dev)。Flet并非仅仅“封装”了Flutter的widgets，还通过组合更小的widgets，隐藏其复杂的部分，实现UI的最好实践以及应用合理的预设来提供它独特的“见解”——这一切都是为了保证您的应用看起来更酷更专业且没有其他副作用。

## Flet应用示例

目前你可以用Python来写Flet应用，其他语言的支持将随后添加。

我们以一个计数器程序为例：

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

要运行这个程序你需要安装名为`flet`的包：

```bash
pip install flet
```

之后运行这个程序：

```bash
python counter.py
```

这个应用将打开一个系统的原生窗口——多么好的Electron多替代品啊！

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

现在，如果你想要以Webapp的形式来运行这个程序，只需要把最后一行替换成：

```python
flet.app(target=main, view=flet.WEB_BROWSER)
```

再次运行这个程序，你马上就将得到一个Webapp：

<img src="/img/docs/getting-started/flet-counter-safari.png" className="screenshot-50" />

## 教程

想要学习如何构建一个真正的应用吗？接下来按你所使用的语言开始吧：

* [Python](/docs/guides/python/getting-started)