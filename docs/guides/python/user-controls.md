---
title: User controls
sidebar_label: User controls
---

User control (`UserControl`) allows building isolated re-usable components by combining existing Flet controls. User control behaves like a `Control`, could have methods and properties.

Below is a minimal example of user control:

```python
import flet as ft

class GreeterControl(ft.UserControl):
    def build(self):
        return ft.Text("Hello!")

def main(page):
    page.add(GreeterControl())

ft.app(target = main)
```

UserControl must implement `build()` method that is called to build control's UI and should returns a single `Control` instance or a `List` of controls. `UserControl` is inherited from [`Stack`](/docs/controls/stack), so multiple children will be arranged on top of each other. If you need to arrange control's UI differently use [`Row`](/docs/controls/row), [`Column`](/docs/controls/column) or other [layout controls](/docs/controls/layout), for example:

```python
class GreeterControl(ft.UserControl):
    def build(self):
        return ft.Column([
            ft.TextField(label="Your name"),
            ft.ElevatedButton("Login")
        ])
```

UserControl is isolated from outside layout, i.e. when `update()` method is called for the parent control any changes inside the UserControl are not included into the update digest. UserControl should call `self.update()` to push its changes to a Flet page, for example:

```python
import flet as ft

class Counter(ft.UserControl):
    def add_click(self, e):
        self.counter += 1
        self.text.value = str(self.counter)
        self.update()

    def build(self):
        self.counter = 0
        self.text = ft.Text(str(self.counter))
        return ft.Row([self.text, ft.ElevatedButton("Add", on_click = self.add_click)])

def main(page):
    page.add(Counter(), Counter())

ft.app(target = main)
```

<img src="/img/docs/getting-started/user-control-counter.gif" className="screenshot-40" />

You could either declare event handlers (e.g. `def add_click(self, e)`) and control references (e.g. `self.text`) as class members or implement all UserControl's logic inside `build()` method using local variables and inner functions. For example, the code above could be rewritten as:

```python
class Counter(ft.UserControl):
    def build(self):

        self.counter = 0
        text = ft.Text(str(self.counter))

        def add_click(e):
            self.counter += 1
            text.value = str(self.counter)
            self.update()

        return ft.Row([text, ft.ElevatedButton("Add", on_click = add_click)])
```

:::note
`counter` cannot be declared as a local variable as it won't be visible inside `add_click` method, so it must be declared as a class field `self.counter`.
:::

User control can have a constructor to pass custom data, for example:

```python
class Counter(ft.UserControl):
    def __init__(self, initial_count):
        super().__init__()
        self.counter = initial_count

    def build(self):
        text = ft.Text(str(self.counter))
        def add_click(e):
            self.counter += 1
            text.value = str(self.counter)
            self.update()

        return ft.Row([text, ft.ElevatedButton("Add", on_click = add_click)])

# then use the control
def main(page):
    page.add(
        Counter(100),
        Counter(200))
```

:::note
`super().__init__()` must be always called in your own constructor.
:::

User control provides life-cycle "hook" methods:

* `did_mount()` - called after the `UserControl` added to a page and assigned transient `id`.
* `will_unmount()` - called before the `UserControl` is removed from a page.

Using those methods we could implement a simple "countdown" control:

```python
import flet as ft
import time, threading

class Countdown(ft.UserControl):
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
        self.countdown = ft.Text()
        return self.countdown

def main(page):
    page.add(Countdown(120), Countdown(60))

ft.app(target = main)
```

<img src="/img/docs/getting-started/user-control-countdown.gif" className="screenshot-40" />
