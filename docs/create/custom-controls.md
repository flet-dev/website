---
title: Custom controls
sidebar_label: Custom controls
---

While Flet provides 100+ built-in controls that can be used on their own, the real beauty of programming with Flet is that all those controls can be utilized for creating your own reusable UI components.

You can create custom controls in Python by styling and/or combining existing Flet controls.

## Styled controls

The most simple custom control you can create is a styled control, for example, a button of a certain color and behaviour that will be used multiple times throughout your app.

To create a styled control, you need to create a new class in Python that inherits from the Flet control you are going to customize:

```python
class MyButton(ft.OutlinedButton)
    def __init__(self, text):
        super().__init__()
        self.bgcolor = ft.colors.ORANGE_300
        self.color = ft.colors.GREEN_800
        self.text = text
        self.on_click = self.button_clicked
    
    def button_clicked(self, e):
        page.add(ft.Text(f"Button {self.text} clicked"))
    
```
Your control has a constructor to customize properties and events and pass custom data. Note that you must call `super().__init__()` in your own constructor to have access to the properties and methods of the Flet control from which you inherit.

Now you can use your brand-new control in your app:

```python
import flet as ft

def main(page: ft.Page):
    class MyButton(ft.ElevatedButton):...

    page.add(MyButton(text="OK"), MyButton(text="Cancel"))

ft.app(target=main)

```
<img src="/img/docs/custom-controls/styled-controls.png" className="screenshot-20" />

## Composite controls

Composite custom controls inherit from container controls such as `Column`, `Row`, `Stack` etc. to combine multiple Flet controls. The example below is a `Task` control that can be used in a To-Do app:

```python
import flet as ft


def main(page: ft.Page):
    class Task(ft.Row):
        def __init__(self, text):
            super().__init__()
            self.text_view = ft.Text(text)
            self.text_edit = ft.TextField(text, visible=False)
            self.edit_button = ft.IconButton(icon=ft.icons.EDIT, on_click=self.edit)
            self.save_button = ft.IconButton(
                visible=False, icon=ft.icons.SAVE, on_click=self.save
            )
            self.controls = [
                ft.Checkbox(),
                self.text_view,
                self.text_edit,
                self.edit_button,
                self.save_button,
            ]

        def edit(self, e):
            self.edit_button.visible = False
            self.save_button.visible = True
            self.text_view.visible = False
            self.text_edit.visible = True
            page.update()

        def save(self, e):
            self.edit_button.visible = True
            self.save_button.visible = False
            self.text_view.visible = True
            self.text_edit.visible = False
            self.text_view.value = self.text_edit.value
            page.update()

    page.add(
        Task(text="Do laundry"),
        Task(text="Cook dinner"),
    )


ft.app(target=main)
```

<img src="/img/docs/custom-controls/composite-controls.gif" className="screenshot-60" />

You can find more examples of composite custom controls in [community examples](https://github.com/flet-dev/examples/tree/main/python/community) and [flet-contrib](https://github.com/flet-dev/flet-contrib/tree/main/flet_contrib) repos.

## Life-cycle methods 

Custom controls provide life-cycle "hook" methods that you may need to use for different use cases in your app.

### `build`

`build` method is called when the control is being created and assigned its `page`. 

Use `build` method to implement logic that cannot be executed in control's constructor since it requires access to the `page`. For example, choose the right icon depending on `page.platform` for your [adaptive app](adaptive-apps#custom-adaptive-controls). 

### `before_update`

`before_update` method is called every time when the control is being updated.



* `did_mount()` - called after the `UserControl` added to a page and assigned transient `id`.

* `will_unmount()` - called before the `UserControl` is removed from a page.

## Isolated controls

## Components and widgets

--------

User control (`UserControl`) allows building isolated re-usable components by combining existing Flet controls. User control behaves like a `Control`, could have methods and properties.

Below is a minimal example of user control:

```python
import flet as ft

class GreeterControl(ft.UserControl):
    def build(self):
        return ft.Text("Hello!")

def main(page):
    page.add(GreeterControl())

ft.app(target=main)
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
        return ft.Row([self.text, ft.ElevatedButton("Add", on_click=self.add_click)])

def main(page):
    page.add(Counter(), Counter())

ft.app(target=main)
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

        return ft.Row([text, ft.ElevatedButton("Add", on_click=add_click)])
```

:::note
`counter` cannot be declared as a local variable as it won't be visible inside `add_click` method, so it must be declared as a class field `self.counter`.
:::

User control can have a constructor to pass custom data, for example:

```python
import flet as ft

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

        return ft.Row([text, ft.ElevatedButton("Add", on_click=add_click)])

# then use the control
def main(page):
    page.add(
        Counter(100),
        Counter(200))

ft.app(target=main)
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

def main(page: ft.Page):
    page.add(Countdown(120), Countdown(60))

ft.app(target=main)
```

<img src="/img/docs/getting-started/user-control-countdown.gif" className="screenshot-40" />
