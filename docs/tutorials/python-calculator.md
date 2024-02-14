---
title: Create Calculator app in Python with Flet
sidebar_label: Python - Calculator app
slug: python-calculator
---

In this tutorial we will show you, step-by-step, how to create a Calculator app in Python using Flet framework and deploy it as a web app. The app is [a simple console program](https://github.com/flet-dev/examples/blob/main/python/tutorials/calc/calc.py), yet it is a multi-platform application with similar to iPhone calculator app UI:

<img src="/img/docs/calc-tutorial/calc-app.gif" className="screenshot-40" />

You can find the live demo [here](https://gallery.flet.dev/calculator/).

In this tutorial, we will cover all of the basic concepts for creating a web app: building a page layout, adding controls, making reusable UI components, handling events, and deployment options.

The tutorial consists of the following steps:

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} maxHeadingLevel={2} />

## Getting started with Flet

To write a Flet web app you don't need to know HTML, CSS or JavaScript, but you do need a basic knowledge of Python and object-oriented programming.

Flet requires Python 3.8 or above. To create a web app in Python with Flet, you need to install `flet` module first:

```bash
pip install flet
```

To start, let's create a simple hello-world app.

Create `hello.py` with the following contents:

```python
import flet as ft

def main(page: ft.Page):
    page.add(ft.Text(value="Hello, world!"))

ft.app(target=main)
```

Run this app and you will see a new window with a greeting:

<img src="/img/docs/tutorial/todo-app-hello-world.png" className="screenshot-40" />

## Adding page controls

Now you are ready to create a calculator app.

To start, you'll need a [Text](/docs/controls/text) control for showing the result of calculation, and a few [ElevatedButtons](/docs/controls/elevatedbutton) with all the numbers and actions on them.

Create `calc.py` with the following contents:

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Calc App"
    result = ft.Text(value="0")

    page.add(
        result,
        ft.ElevatedButton(text="AC"),
        ft.ElevatedButton(text="+/-"),
        ft.ElevatedButton(text="%"),
        ft.ElevatedButton(text="/"),
        ft.ElevatedButton(text="7"),
        ft.ElevatedButton(text="8"),
        ft.ElevatedButton(text="9"),
        ft.ElevatedButton(text="*"),
        ft.ElevatedButton(text="4"),
        ft.ElevatedButton(text="5"),
        ft.ElevatedButton(text="6"),
        ft.ElevatedButton(text="-"),
        ft.ElevatedButton(text="1"),
        ft.ElevatedButton(text="2"),
        ft.ElevatedButton(text="3"),
        ft.ElevatedButton(text="+"),
        ft.ElevatedButton(text="0"),
        ft.ElevatedButton(text="."),
        ft.ElevatedButton(text="="),
    )


ft.app(target=main)
```

Run the app and you should see a page like this:

<img src="/img/docs/calc-tutorial/calc-app-1.png" className="screenshot-10" />

## Building page layout

Now let's arrange the text and buttons in 6 horizontal [rows](/docs/controls/row).

Replace `calc.py` contents with the following:

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Calc App"
    result = ft.Text(value="0")

    page.add(
        ft.Row(controls=[result]),
        ft.Row(
            controls=[
                ft.ElevatedButton(text="AC"),
                ft.ElevatedButton(text="+/-"),
                ft.ElevatedButton(text="%"),
                ft.ElevatedButton(text="/"),
            ]
        ),
        ft.Row(
            controls=[
                ft.ElevatedButton(text="7"),
                ft.ElevatedButton(text="8"),
                ft.ElevatedButton(text="9"),
                ft.ElevatedButton(text="*"),
            ]
        ),
        ft.Row(
            controls=[
                ft.ElevatedButton(text="4"),
                ft.ElevatedButton(text="5"),
                ft.ElevatedButton(text="6"),
                ft.ElevatedButton(text="-"),
            ]
        ),
        ft.Row(
            controls=[
                ft.ElevatedButton(text="1"),
                ft.ElevatedButton(text="2"),
                ft.ElevatedButton(text="3"),
                ft.ElevatedButton(text="+"),
            ]
        ),
        ft.Row(
             controls=[
                ft.ElevatedButton(text="0"),
                ft.ElevatedButton(text="."),
                ft.ElevatedButton(text="="),
            ]
        ),
    )


ft.app(target=main)
```

Run the app and you should see a page like this:

<img src="/img/docs/calc-tutorial/calc-app-2.png" className="screenshot-40" />

### Using Container for decoration

To add a black background with rounded border around the calculator, we will be using [Container](/docs/controls/container) control. Container may decorate only one control, so we will need to wrap all the 6 rows into a single vertical [Column](/docs/controls/container) that will be used as the container's `content`:
<img src="/img/docs/calc-tutorial/container-layout.svg" className="screenshot" />

To complete the UI portion of the program, update `color` and `size` properties for the Text, and `color` and `bgcolor` properties for the buttons. For even alignment of the buttons within the rows, we will be using `expand` property as shown on the diagram above.  

Since the program is too long now to be fully included in this tutorial, copy the entire code for this step from [here](https://github.com/flet-dev/examples/blob/main/python/tutorials/calc/calc3.py). Run the app and you should see a page like this:
<img src="/img/docs/calc-tutorial/calc-app.png" className="screenshot-40" />

Just what we wanted!

## Reusable UI components

While you can continue writing your app in the `main` function, the best practice would be to create a reusable UI component. 

Imagine you are working on an app header, a side menu, or UI that will be a part of a larger project (for example, at Flet we will be using this Calculator app in a bigger "Gallery" app that will show all the examples for Flet framework). 

Even if you can't think of such uses right now, we still recommend creating all your web apps with composability and reusability in mind. 

To make a reusable Calc app component, we are going to encapsulate its state and presentation logic in a separate `CalculatorApp` class. Copy the entire code for this step from [here](https://github.com/flet-dev/examples/blob/main/python/tutorials/calc/calc4.py).

Read more about [creating user controls](/docs/guides/python/getting-started#user-controls).

:::note Try something
Try adding two `CalculatorApp` components to the page:

```python
# create application instance
calc1 = CalculatorApp()
calc2 = CalculatorApp()

# add application's root control to the page
page.add(calc1, calc2)
```

:::

## Handling events

Now let's make the calculator do its job. We will be using the same event handler for all the buttons and use `data` property to differentiate between the actions depending on the button clicked. For each `ElevatedButton` control, specify `on_click=self.button_clicked` event and set `data` property equal to button's text, for example:

```python
ft.ElevatedButton(
    text="AC",
    bgcolor=ft.colors.BLUE_GREY_100,
    color=ft.colors.BLACK,
    expand=1,
    on_click=self.button_clicked,
    data="AC",
)
```

Below is `on_click` event handler that will reset the Text value when "AC" button is clicked:

```python
def button_clicked(self, e):
    if e.control.data == "AC":
        self.result.value = "0"
```

With similar approach, specify `on_click` event and `data` property for each button and add expected action to the `button_clicked` event handler depending on `e.control.data` value. Copy the entire code for this step from [here](https://github.com/flet-dev/examples/blob/main/python/tutorials/calc/calc.py).

Run the app and see it in the action:
<img src="/img/docs/calc-tutorial/calc-app.gif" className="screenshot-40" />

## Packaging as a desktop app

Congratulations! You have created your Calculator app with Flet, and it looks awesome! Now it's time to share your app with the world!

Flet Python app and all its dependencies can be packaged into an executable and user can run it on their computer without installing a Python interpreter or any modules.

[Follow these instructions](/docs/guides/python/getting-started#packaging-a-desktop-app) to package your Calculator app into an executable.

## Deploying a web app

[Follow these instructions](/docs/guides/python/getting-started#deploying-a-web-app) to deploy your Flet app as a web app to Fly.io or Replit.

## Summary

In this tutorial you have learned how to:

* Create a simple Flet app;
* Work with Reusable UI components;
* Design UI layout using `Column`, `Row` and `Container` controls;
* Handle events;
* Package your Flet app into an executable;
* Deploy your Flet app to the web;

For further reading you can explore [controls](/docs/controls) and [examples repository](https://github.com/flet-dev/examples/tree/main/python).

We would love to hear your feedback! Please drop us an [email](mailto:hello@flet.dev), join the discussion on [Discord](https://discord.gg/dzWXP8SHG8), follow on [Twitter](https://twitter.com/fletdev).
