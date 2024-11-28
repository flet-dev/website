---
slug: gesture-detector
title: Gesture detector
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

We've just released [Flet 0.1.62](https://pypi.org/project/flet/0.1.62/) with support of gestures processing!

There is a new control - [GestureDetector](/docs/controls/gesturedetector) which allows handling all sorts of gestures: single and double taps with a left (primary) and right (secondary) mouse (pointer) buttons, vertical, horizontal and bi-directional drags, zoom (pinch-in and pinch-out) gestures as well as hover events. Now, by wrapping it into `GestureDetector`, you can make any Flet control "clickable" and "draggable"!

Here is a simple example of an app which allows you to drag containers inside a Stack:

<img src="/img/blog/gesture-detector/gesture-detector-demo.gif" className="screenshot-50" />

```python
import flet as ft

def main(page: ft.Page):
    def on_pan_update(e: ft.DragUpdateEvent):
        e.control.top = max(0, e.control.top + e.delta_y)
        e.control.left = max(0, e.control.left + e.delta_x)
        e.control.update()

    gd = ft.GestureDetector(
        mouse_cursor=ft.MouseCursor.MOVE,
        on_vertical_drag_update=on_pan_update,
        left=100,
        top=100,
        content=ft.Container(bgcolor=ft.Colors.BLUE, width=50, height=50, border_radius=5),
    )

    page.add( ft.Stack([gd], expand=True))

ft.app(target=main)
```

Gesture detector is yet another great addition to a collection of Flet primitives that allows you to build apps limited only by your imagination. 2D drawing coming later this month is going to complete that ensemble!

That release wasn't about only gestures though - that was a "stabilization" release too. We fixed a number of bugs and added a bunch of other small features which you can [see here](https://github.com/flet-dev/flet/issues?q=is%3Aissue+milestone%3AControls-S2+is%3Aclosed).

Upgrade Flet module to the latest version (`pip install flet --upgrade`), integrate auth in your app and [let us know](https://discord.gg/dzWXP8SHG8) what you think!

Enjoy!