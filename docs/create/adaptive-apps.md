---
title: Adaptive apps
sidebar_label: Adaptive apps
---

Flet framework allows you to develop adaptive apps which means having a single codebase that will deliver different look depending on the device's platform.

Below is the example of a very simple app that has a different look on iOS and Android platforms:

```python
import flet as ft


def main(page):

    page.adaptive = True

    page.appbar = ft.AppBar(
        leading=ft.TextButton("New", style=ft.ButtonStyle(padding=0)),
        title=ft.Text("Adaptive AppBar"),
        actions=[
            ft.IconButton(ft.cupertino_icons.ADD, style=ft.ButtonStyle(padding=0))
        ],
        bgcolor=ft.colors.with_opacity(0.04, ft.cupertino_colors.SYSTEM_BACKGROUND),
    )

    page.navigation_bar = ft.NavigationBar(
        destinations=[
            ft.NavigationDestination(icon=ft.icons.EXPLORE, label="Explore"),
            ft.NavigationDestination(icon=ft.icons.COMMUTE, label="Commute"),
            ft.NavigationDestination(
                icon=ft.icons.BOOKMARK_BORDER,
                selected_icon=ft.icons.BOOKMARK,
                label="Bookmark",
            ),
        ],
        border=ft.Border(
            top=ft.BorderSide(color=ft.cupertino_colors.SYSTEM_GREY2, width=0)
        ),
    )

    page.add(
        ft.SafeArea(
            ft.Column(
                [
                    ft.Checkbox(value=False, label="Dark Mode"),
                    ft.Text("First field:"),
                    ft.TextField(keyboard_type=ft.KeyboardType.TEXT),
                    ft.Text("Second field:"),
                    ft.TextField(keyboard_type=ft.KeyboardType.TEXT),
                    ft.Switch(label="A switch"),
                    ft.FilledButton(content=ft.Text("Adaptive button")),
                    ft.Text("Text line 1"),
                    ft.Text("Text line 2"),
                    ft.Text("Text line 3"),
                ]
            )
        )
    )


ft.app(target=main)
```

By setting just `page.adaptive = True` you can make you app looking awesome on both iOS and Android devices:

<div className="row">
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>iPhone</h3>
    <img src="/img/blog/adaptive/iphone-adaptive-app.png" className="screenshot-60" />
  </div>
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>Android</h3>
    <img src="/img/blog/adaptive/android-adaptive-app.png" className="screenshot-60" style={{ width: '57%'}} />
  </div>  
</div>

## Material and iOS controls

Most of Flet controls are based on [Material design](https://m3.material.io/). 

There is also a number of iOS-style controls in Flet that are called Cupertino controls. 

Cupertino controls usually have a matching Material control that has `adaptive` property. If `adaptive` is `True`, a different control will be created depending on the platform.

Flet checks the value of [`page.platform`](docs/controls/page#platform) property and if it is `ft.PagePlatform.IOS` or `ft.PagePlatform.MACOS`, Cupertino control will be created; in all other cases Material control will be created. 

Below is the list of adaptive Material controls and their matching Cupertino controls:

<div className="row">
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>Checkbox</h3>
    <img src="/img/docs/adaptive-apps/Checkbox.png" className="screenshot-60" />
  </div>
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>CupertinoCheckbox</h3>
    <img src="/img/docs/adaptive-apps/CupertinoCheckbox.png" className="screenshot-60" style={{ width: '57%'}} />
  </div>  
</div>
```
ft.Checkbox(adaptive=True, value=True, label="Adaptive Checkbox")
```
<div className="row">
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>Slider</h3>
    <img src="/img/docs/adaptive-apps/Checkbox.png" className="screenshot-60" />
  </div>
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>CupertinoSlider</h3>
    <img src="/img/docs/adaptive-apps/CupertinoCheckbox.png" className="screenshot-60" style={{ width: '57%'}} />
  </div>  
</div>
```
ft.Slider(adaptive=True, value=True, label="Adaptive Slider")
```


