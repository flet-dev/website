---
title: Creating Flet apps in Python
description: Learn how to build Flet apps in Python.
sidebar_label: Python
slug: python
---

To write a Flet app you don't need to be front-end guru, but it's recommended to have a basic knowledge of Python and object-oriented programming.

In this guide we'll study the structure of a Flet app, learn how to output data using Flet controls, request data from a user and build basic page layouts. We will also cover some packaging and deployment options to deliver a ready app to your users.

## Installing `flet` module

Flet requires Python 3.7 or above. To start with Flet, you need to install `flet` module first:

```bash
pip install flet
```

:::note
To upgrade `flet` module run:

```bash
pip install flet --upgrade
```
:::

## Basic app structure

A very minimal Flet app has the following structure:

```python
import flet
from flet import Page

def main(page: Page):
    # add/update controls on Page
    pass

flet.app(target=main)
```

:::note
This section is intentionally called "basic" as later in this guide we'll look at more real-world approaches to app structure with reusable controls.
:::

A typical Flet program ends with a call to `flet.app()` where the app starts waiting for new user sessions. Function `main()` is an entry point in a Flet application. It's being called on a new thread for every user session with a `Page` instance passed into it. When running Flet app in the browser a new user session is started for every opened tab or page. When running as a desktop app there is only one session created.

`Page` is like a "canvas" specific to a user, a visual state of a user session. To build an application UI you add and remove controls to a page, update their properties. Code sample above will be displaying just a blank page to every user.

By default, Flet app starts in a native OS window, which is very handy for developing. However, you can open it in a new browser window by modifying a call to `flet.app` as following:

```python
flet.app(target=main, view=flet.WEB_BROWSER)
```

:::info
Internally, every Flet app is a web app and even if it's opened in a native OS window a built-in web server is still started on a background. Flet web server is called "Fletd" and by default it's listening on a random TCP port. You can specify a custom TCP port and then open the app in the browser along with desktop view:

```python
flet.app(port=8550, target=main)
```

Open `http://localhost:<port>` in your browser to see web version of your Flet app.
:::

## Controls

User interface is made of **Controls** (aka widgets). To make controls visible to a user they must be added to a `Page` or inside other controls. Page is the top-most control. Nesting controls into each other could be represented as a tree with Page as a root.

Controls are just regular Python classes. Create control instances via constructors with parameters matching their properties, for example:

```python
t = Text(value="Hello, world!", color="green")
```

To display control on a page add it to `controls` list of a Page and call `page.update()` to send page changes to a browser or desktop client:

```python
import flet
from flet import Page

def main(page: Page):
    t = Text(value="Hello, world!", color="green")
    page.controls.append(t)
    page.update()

flet.app(target=main)
```

:::note
In the following examples we will be showing just the contents of `main` function.
:::

You can modify control properties and the UI will be updated on the next `page.update()`:

```python
t = Text()
page.add(t) # it's a shortcut for page.controls.add(t) and then page.update()

for i in range(10):
    t.value = f"Step {i}"
    page.update()
    sleep(1)
```

Some controls are "container" controls (like Page) which could contain other controls. For example, `Row` control allows arranging other controls in a row one-by-one:

```python
page.add(
    Row(controls=[
        Text("A"),
        Text("B"),
        Text("C")
    ])
)
```

or `TextField` and `ElevatedButton` next to it:

```python
page.add(
    Row(controls=[
        TextField(label="Your name"),
        ElevatedButton(text="Say my name!")
    ])
)
```

`page.update()` is smart enough to send only the changes made since its last call, so you can add a couple of new controls to the page, remove some of them, change other controls' properties and then call `page.Update()` to do a batched update, for example:

```python
for i in range(10):
    page.controls.append(Text(f"Line {i}"))
    if i > 4:
        page.controls.pop(0)
    page.update()
    sleep(0.3)
```

Some controls, like buttons, could have event handlers reacting on a user input, for example `ElevatedButton.on_click`:

```python
def button_clicked(e):
    page.add(Text("Clicked!"))

page.add(ElevatedButton(text="Click me", on_click=button_clicked))
```

and more advanced example for a simple To-Do:

```python
import flet
from flet import Checkbox, ElevatedButton, Row, TextField

def main(page):
    def add_clicked(e):
        page.add(Checkbox(label=new_task.value))

    new_task = TextField(hint_text="Whats needs to be done?", width=300)
    page.add(Row([new_task, ElevatedButton("Add", on_click=add_clicked)]))

flet.app(target=main)
```

:::info
Flet implements *imperative* UI model where you "manually" build application UI with stateful controls and then mutate it by updating control properties. Flutter implements *declarative* model where UI is automatically re-built on application data changes.
Managing application state in modern frontend applications is inherently complex task and Flet's "old-school" approach could be more attractive to programmers without frontend experience.
:::

### `visible` property

Every control has `visible` property which is `true` by default - control is rendered on the page. Setting `visible` to `false` completely prevents control (and all its children if any) from rendering on a page canvas. Hidden controls cannot be focused or selected with a keyboard or mouse and they do not emit any events.

### `disabled` property

Every control has `disabled` property which is `false` by default - control and all its children are enabled.
`disabled` property is mostly used with data entry controls like `TextField`, `Dropdown`, `Checkbox`, buttons.
However, `disabled` could be set to a parent control and its value will be propagated down to all children recursively.

For example, if you have a form with multiple entry control you can set `disabled` property for each control individually:

```python
first_name = TextField()
last_name = TextField()
first_name.disabled = True
last_name.disabled = True
page.add(first_name, last_name)
```

or you can put form controls into container, e.g. `Column` and then set `disabled` for the column:

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

## Displaying data

### Text

`Text` control is used to output textual data. Its main properties are `value` and `size`, but it also has a number of formatting properties to control its appearence. For example:

```python
t = Text(
    value="This is a Text control sample",
    size=30,
    color="white",
    bgcolor="pink",
    weight="bold",
    italic=True,
)
page.add(t)
```

#### Text styles

[TBD]

### Icon

* Icons list
* Link to an app

### Image

Note about CORS
Side-loading assets

## Layout

* Row
* Column
* Stack
* Container
* padding, margin, border, etc.

## Colors

* Colors list
* Link to an app

## Getting user input

Making interactive web apps with Flet is a breeze! It's not just limited to displaying data, but you can request an input from a user and respond to various events generated by page controls.

### Button

`Button` is the most essential input control which generates `click` event when pressed:

```python
btn = ElevatedButton("Click me!")
page.add(btn)
```

[SCREENSHOT?]

All events generated by controls on a web page are continuously sent back to your script, so how do you respond to a button click?

### Event handlers

Buttons with events in "Counter" app:

```python
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

### Textbox

Flet provides a number of [controls](/docs/controls) for building forms: [TextField](/docs/controls/textfield), [Checkbox](/docs/controls/checkbox), [Dropdown](/docs/controls/dropdown), [ElevatedButton](/docs/controls/elevatedbutton).

Let's ask a user for a name:

```python title="greeter.py"
import flet
from flet import ElevatedButton, Text, TextField

def main(page):
    def btn_click(e):
        if not txt_name.value:
            txt_name.error_text = "Please enter your name"
            page.update()
        else:
            name = txt_name.value
            page.clean()
            page.add(Text(f"Hello, {name}!"))

    txt_name = TextField(label="Your name")

    page.add(txt_name, ElevatedButton("Say hello!", on_click=btn_click))

flet.app(target=main)
```

### Checkbox

TBD

### Dropdown

TBD

## Collections

You can use `Column` and `Row` in the most cases.


Lot of records:

### ListView

### GridView

`control.clean()` optimization.

Updating in batches (i % 100) optimization.

## Deploying web app

Flet app can be deployed as a "standalone" web app which means both your Python app and Flet web server are deployed together as a bundle.

Flet apps use WebSockets for real-time partial updates of their UI and sending events back to your program.
When choosing a hosting provider for your Flet app you should pay attention to their support of WebSockets. Sometimes WebSockets are not allowed or come as a part of more expensive offering, sometimes there is a proxy that periodically breakes WebSocket connection by a timeout (Flet implements re-connection logic, but it could be unpleasant behavior for users of your app anyway).

Another important factor while choosing a hosting provider for Flet app is latency. Every user action on UI sends a message to Flet app and the app sends udpdated UI back to user. Make sure your hosting provider has multiple data centers, so you can run your app closer to the majority of your users.

:::note
We are not affiliated with hosting providers in this section - we just use their service and love it.
:::

### Fly.io

[Fly.io](https://fly.io) has robust WebSocket support and can deploy your app to a [data center](https://fly.io/docs/reference/regions/) that is close to your users. They have very attractive pricing with a [generous free tier](https://fly.io/docs/about/pricing/#free-allowances) which allows you to host up to 3 applications for free.

To get started with Fly install [flyctl](https://fly.io/docs/getting-started/installing-flyctl/) and then authenticate:

    flyctl auth login

To deploy the app with `flyctl` you have to add the following 3 files into the folder with your Python app.

Create `requirements.txt` with a list of application dependencies. At minimum it should contain `flet` module:

```txt title="requirements.txt"
flet>=0.1.16
```

Create `fly.toml` describing Fly application:

```toml title="fly.toml" {1,8}
app = "<your-app-name>"

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

Replace `<your-app-name>` with desired application name which will be also used in application URL, such as `https://<your-app-name>.fly.dev`.

Note we are setting the value of `FLET_SERVER_PORT` environment variable to `8080` which is an internal TCP port Flet web app is going to run on.

Create `Dockerfile` containing the commands to build your application container:

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
Fly.io deploys every app as a Docker container, but a great thing about Fly is that it provides a free remote Docker builder, so you don't need Docker installed on your machine.
:::

Next, switch command line to a folder with your app and run the following command to create and initialize a new Fly app:

    flyctl apps create --name <your-app-name>

Deploy the app by running:

    flyctl deploy

That's it! Open your app in the browser by running:

    flyctl apps open

### Replit

[Replit](https://replit.com/) is an online IDE and hosting platform for web apps written in any language. Their free tier allows running any number of apps with some performance limitations.

To run your app on Replit:

* [Sign up](https://replit.com/signup?from=landing) on Replit.
* Click "New repl" button.
* Select "Python" language from a list and provide repl name, e.g. `my-app`.
* Click "Packages" tab and search for `flet` package; select its latest version.
* Click "Secrets" tab and add `FLET_SERVER_PORT` variable with value `5000`.
* Switch back to "Files" tab and copy-paste your app into `main.py`.
* Run the app. Enjoy.

## Summary

In this tutorial you have learned how to:

* Create a shared page and a multi-user web app;
* Work with Reusable UI components;
* Design UI layout using `Stack` control;
* Work with lists: view, edit and delete items, filtering;
* Deploy your app two ways: Flet Service and Replit;

For further reading you can explore [controls](/docs/controls) and [examples repository](https://github.com/pglet/examples/tree/main/python).

We would love to hear your feedback! Please drop us an [email](mailto:hello@flet.dev), join the discussion on [Discord](https://discord.gg/dzWXP8SHG8), follow on [Twitter](https://twitter.com/fletdev).