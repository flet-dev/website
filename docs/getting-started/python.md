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

### Buttons

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

## Large lists

You can use [`Column`](/docs/controls/column) and [`Row`](/docs/controls/row) controls to display lists in the most cases, but if the list contains hundreds or thousands of items `Column` and `Row` will be ineffective with lagging UI as they render all items at once even they are not visible at the current scrolling position.

In the following example we are adding 5,000 text controls to a page. Page uses `Column` as a default layout container:

```python
import flet
from flet import Page, Text

def main(page: Page):
    for i in range(5000):
        page.controls.append(Text(f"Line {i}"))
    page.scroll = "always"
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

Run the program and notice that it's not just it takes a couple of seconds to initially load and render all text lines on a page, but scrolling is slow and laggy too:

<img src="/img/docs/getting-started/scroll-column.gif" className="screenshot-50" />

For displaying lists with a lot of items use [`ListView`](/docs/controls/listview) and [`GridView`](/docs/controls/gridview) controls which render items on demand, visible at the current scrolling position only.

### ListView

[`ListView`](/docs/controls/listview) could be either vertical (default) or horizontal. ListView items are displayed one after another in the scroll direction.

ListView already implements effective on demand rendering of its children, but scrolling performance could be further improved if you can set the same fixed height or width (for `horizontal` ListView) for all items ("extent"). This could be done by either setting absolute extent with `item_extent` property or making the extent of all children equal to the extent of the first child by setting `first_item_prototype` to `True`.

Let's output a list of 5,000 items using ListView control:

```python
import flet
from flet import ListView, Page, Text

def main(page: Page):
    lv = ListView(expand=True, spacing=10)
    for i in range(5000):
        lv.controls.append(Text(f"Line {i}"))
    page.add(lv)

flet.app(target=main, view=flet.WEB_BROWSER)
```

Now the scrolling is smooth and fast enough to follow mouse movements:

<img src="/img/docs/getting-started/scroll-listview.gif" className="screenshot-50" />

:::note
We used `expand=True` in ListView constructor. In order to function properly ListView must have a height (or width if `horizontal`) specified. You could set an absolute size, e.g. `ListView(height=300, spacing=10)`, but in the example above we make ListView to take all available space on the page, i.e. expand. Read more about [`Control.expand`](/docs/controls#expand) property.
:::

### GridView

[`GridView`](/docs/controls/gridview) allows arranging controls into a scrollable grid.

You can make a "grid" with `Column(wrap=True)` or `Row(wrap=True)`, for example:

```python
import os
import flet
from flet import Container, Page, Row, Text, alignment, border, border_radius, colors

os.environ["FLET_WS_MAX_MESSAGE_SIZE"] = "8000000"

def main(page: Page):
    r = Row(wrap=True, scroll="always", expand=True)
    page.add(r)

    for i in range(5000):
        r.controls.append(
            Container(
                Text(f"Item {i}"),
                width=100,
                height=100,
                alignment=alignment.center,
                bgcolor=colors.AMBER_100,
                border=border.all(1, colors.AMBER_400),
                border_radius=border_radius.all(5),
            )
        )
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

<img src="/img/docs/getting-started/row-wrap-as-grid.png" className="screenshot-50" />

Try scrolling and resizing the browser window - everything works, but very laggy.

:::note
At the start of the program we are setting the value of `FLET_WS_MAX_MESSAGE_SIZE` environment variable to `8000000` - this is the maximum size of WebSocket message in bytes that can be received by Flet Server rendering the page. Default size is 1 MB, but the size of JSON message describing 5,000 container controls would exceed 1 MB, so we are increasing allowed size to 8 MB.

Squeezing large messages through WebSocket channel is, generally, not a good idea, so use [batched updates](#batch-updates) aproach to control channel load.
:::

GridView, similar to ListView, is very effective to render a lot of children. Let's implement the example above using GridView:

```python
import os
import flet
from flet import Container, GridView, Page, Text, alignment, border, border_radius, colors

os.environ["FLET_WS_MAX_MESSAGE_SIZE"] = "8000000"

def main(page: Page):
    gv = GridView(expand=True, max_extent=100, child_aspect_ratio=0.5)
    page.add(gv)

    for i in range(5000):
        gv.controls.append(
            Container(
                Text(f"Item {i}"),
                alignment=alignment.center,
                bgcolor=colors.AMBER_100,
                border=border.all(1, colors.AMBER_400),
                border_radius=border_radius.all(5),
            )
        )
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

With GridView scrolling and window resizing are smooth and responsive!

You can specify either fixed number of rows or columns (runs) with `runs_count` property or the maximum size of a "tile" with `max_extent` property, so the number of runs can vary automatically. In our example we set the maximum tile size to 150 pixels and set its shape to "square" with `child_aspect_ratio=1`. `child_aspect_ratio` is the ratio of the cross-axis to the main-axis extent of each child. Try changing it to `0.5` or `2`.

### Batch updates

When `page.update()` is called a message is being sent to Flet server over WebSockets containing page updates since the last `page.update()`. Sending a large message with thousands of added controls could make a user waiting for a few seconds until the messages is fully received and controls rendered.

To increase usability of your program and present the results to a user as soon as possible you can send page updates in batches. For example, the following program adds 5,100 child controls to a ListView in batches of 500 items:

```python
import flet
from flet import ListView, Page, Text

def main(page: Page):

    # add ListView to a page first
    lv = ListView(expand=1, spacing=10, item_extent=50)
    page.add(lv)

    for i in range(5100):
        lv.controls.append(Text(f"Line {i}"))
        # send page to a page
        if i % 500 == 0:
            page.update()
    # send the rest to a page
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

## Communicating between sessions

If you build a chat app using Flet you need somehow to pass user messages between sessions. When a user sends a message it should be broadcasted to all other app sessions and displayed on their pages.

Flet provides a simple built-in PubSub mechanism for asynchronous communication between page sessions.

Flet PubSub allows broadcasting messages to all app sessions or sending only to specific "topic" (or "channel") subscribers.

A typical PubSub usage would be:

* [subscribe](/docs/controls/page#subscribehandler) to broadcast messages or [subscribe to a topic](/docs/controls/page#subscribe_topictopic-handler) on app session start.
* [send](/docs/controls/page#send_allmessage) broadcast message or [send to a topic](/docs/controls/page#send_all_on_topictopic-message) on some event, like "Send" button click.
* [unsubscribe](/docs/controls/page#unsubscribe) from broadcast messages or [unsubscribe from a topic](/docs/controls/page#unsubscribe_topictopic) on some event, like "Leave" button click.
* [unsubscribe](/docs/controls/page#unsubscribe_all) from everything on [`page.on_close`](#on_close).

This is an example of a simple chat application:

```python
import flet
from flet import Column, ElevatedButton, Page, Row, Text, TextField

def main(page: Page):
    page.title = "Flet Chat"

    # subscribe to broadcast messages
    def on_message(msg):
        messages.controls.append(Text(msg))
        page.update()

    page.pubsub.subscribe(on_message)

    def send_click(e):
        page.pubsub.send_all(f"{user.value}: {message.value}")
        # clean up the form
        message.value = ""
        page.update()

    messages = Column()
    user = TextField(hint_text="Your name", width=150)
    message = TextField(hint_text="Your message...", expand=True)  # fill all the space
    send = ElevatedButton("Send", on_click=send_click)
    page.add(messages, Row(controls=[user, message, send]))

flet.app(target=main, view=flet.WEB_BROWSER)
```

<img src="/img/docs/getting-started/chat-app-example.gif" className="screenshot-70" />

## User controls

User control (`UserControl`) allows building isolated re-usable components by combining existing Flet controls. User control behaves like a `Control`, could have methods and properties.

Below is a minimal example of user control:

```python
class GreeterControl(UserControl):
    def build(self):
        return Text("Hello!")

def main(page):
    page.add(GreeterControl())

flet.app(target=main)
```

UserControl must implement `build()` method that is called to build control's UI and should returns a single `Control` instance or a `List` of controls. `UserControl` is inhrited from [`Stack`](/docs/controls/stack), so multiple children will be arranged on top of each other. If you need to arrange control's UI differently use [`Row`](/docs/controls/row), [`Column`](/docs/controls/column) or other [layout controls](/docs/controls/layout), for example:

```python
class GreeterControl(UserControl):
    def build(self):
        return Column([
            TextField(label="Your name"),
            ElevatedButton("Login")
        ])
```

UserControl is isolated from outside layout, i.e. when `update()` method is called for the parent control any changes inside the UserControl are not included into the update digest. UserControl should call `self.update()` to push its changes to a Flet page, for example:

```python
class Counter(UserControl):
    def add_click(self, e):
        self.counter += 1
        self.text.value = str(self.counter)
        self.update()

    def build(self):
        self.counter = 0
        self.text = Text(str(self.counter))
        return Row([self.text, ElevatedButton("Add", on_click=self.add_click)])

def main(page):
    page.add(Counter(), Counter())

flet.app(target=main)
```

<img src="/img/docs/getting-started/user-control-counter.gif" className="screenshot-40" />

You could either declare event handlers (e.g. `def add_click(self, e)`) and control references (e.g. `self.text`) as class members or implement all UserControl's logic inside `build()` method using local variables and inner functions. For example, the code above could be rewritten as:

```python
class Counter(UserControl):
    def build(self):

        self.counter = 0
        text = Text(str(self.counter))

        def add_click(e):
            self.counter += 1
            text.value = str(self.counter)
            self.update()

        return Row([text, ElevatedButton("Add", on_click=add_click)])
```

:::note
`counter` cannot be declared as a local variable as it won't be visible inside `add_click` method, so it must be declared as a class field `self.counter`.
:::

User control can have a constructor to pass custom data, for example:

```python
class Counter(UserControl):
    def __init__(self, initial_count):
        super().__init__()
        self.counter = initial_count

    def build(self):
        text = Text(str(self.counter))
        def add_click(e):
            self.counter += 1
            text.value = str(self.counter)
            self.update()

        return Row([text, ElevatedButton("Add", on_click=add_click)])

# then use the control
def main(page):
    page.add(
        Counter(100),
        Counter(200))
```

:::note
`super().__init__()` must be always called in your own constructor.
:::

User control provides lifecycle "hook" methods:

* `did_mount()` - called after the UserControl added to a page and assigned transient `id`.
* `will_unmount()` - called before the UserControl is removed from a page.

Using those methods we could implement a simple "countdown" control:

```python
class Countdown(UserControl):
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
        self.countdown = Text()
        return self.countdown

def main(page):
    page.add(Countdown(120), Countdown(60))

flet.app(target=main)
```

<img src="/img/docs/getting-started/user-control-countdown.gif" className="screenshot-40" />

## Packaging desktop app

[PyInstaller](https://pyinstaller.org/en/stable/index.html) is used to package Flet Python app and all its dependencies into a single package. The user can run the packaged app without installing a Python interpreter or any modules.

PyInstaller can build packages for Windows, macOS and Linux. To create Windows package, PyInstaller must be run on Windows; to build Linux app, it must be run on Linux; and to build macOS app - on macOS.

Start from installing PyInstaller:

```
pip install pyinstaller
```

Navigate to the directory where your `.py` file is located and build your app with the following command:

```
pyinstaller your_program.py
```

Your bundled Flet app should now be available in `dist/your_program` folder. Try running the program to see if it works.

On macOS/Linux:

```
./dist/your_program/your_program
```

on Windows:

```
dist\your_program\your_program.exe
```

Now you can just zip the contents of `dist/your_program` folder and distribute to your users! They don't need Python or Flet installed to run your packaged program - what a great alternative to Electron!

You'll notice though when you run a packaged program from macOS Finder or Windows Explorer a new console window is opened and then a window with app UI on top of it.

You can hide that console window by rebuilding the package with `--noconsole` switch:

```
pyinstaller your_program.py --noconsole --noconfirm
```

### Bundling to one file

Contents of `dist/your_program` directory is an app executable plus supporting resources: Python runtime, modules, libraries.

You can package all these in a single executable by using `--onefile` switch:

```
pyinstaller your_program.py --noconsole --noconfirm --onefile
```

You'll get a larger executable in `dist` folder. That executable is a self-running archive with your program and runtime resources which gets unpacked into temp directory when run - that's why it takes longer to start "onefile" package.

:::note
For macOS you can distribute either `dist/your_program` or `dist/your_program.app` which is an application bundle.
:::

### Customizing package icon

Default bundle app icon is diskette which might be confusing for younger developers missed those ancient times when [floppy disks](https://en.wikipedia.org/wiki/Floppy_disk) were used to store computer data.

You can replace the icon with your own by adding `--icon` argument:

```
pyinstaller your_program.py --noconsole --noconfirm --onefile --icon <your-image.png>
```

PyInstaller will convert provided PNG to a platform specific format (`.ico` for Windows and `.icns` for macOS), but you need to install [Pillow](https://pillow.readthedocs.io/en/stable/) module for that:

```
pip install pillow
```

### Packaging assets

Your Flet app can include [assets](/docs/controls/image#src). Provided app assets are in `assets` folder next to `your_program.py` they can be added to an application package with `--add-data` argument, on macOS/Linux:

```
pyinstaller your_program.py --noconsole --noconfirm --onefile --add-data "assets:assets"
```

On Windows `assets;assets` must be delimited with `;`:

```
pyinstaller your_program.py --noconsole --noconfirm --onefile --add-data "assets;assets"
```

:::note
You can find here [all PyInstaller command-line options](https://pyinstaller.org/en/stable/usage.html)
:::

### Using CI for multi-platform packaging

To create an app package with PyInstaller for specific OS it must be run on that OS.

If you don't have an access to Mac or PC you can bundle your app for all three platforms with [AppVeyor](https://www.appveyor.com) - Continuous Integration service for Windows, Linux and macOS. In short, Continuous Integration (CI) is an automated process of building, testing and deploying (Continuous Delivery - CD) application on every push to a repository.

AppVeyor is free for open source projects hosted on GitHub, GitLab and Bitbucket. To use AppVeyor, push your app to a repository within one of those source-control providers.

To get started with AppVeyor [sign up for a free account](https://ci.appveyor.com/signup).

Click "New project" button, authorize AppVeyor to access your GitHub, GitLab or Bitbucket account, choose a repository with your program and create a new project.

Now, to configure packaging of your app for Windows, Linux and macOS, add file with [the following contents](https://github.com/flet-dev/python-ci-example/blob/main/appveyor.yml) into the root of your repository `appveyor.yml`. `appveyor.yml` is a build configuration file, or CI workflow, describing build, test, packaging and deploy commands that must be run on every commit.

:::note
You can just fork [flet-dev/python-ci-example](https://github.com/flet-dev/python-ci-example) repository and customize it to your needs.
:::

When you push any changes to GitHub repository, AppVeyor will automatically start a new build:

<img src="/img/docs/getting-started/appveyor-ci-flet-python-project.png" className="screenshot-70" />

What that [CI workflow](https://ci.appveyor.com/project/flet-dev/python-ci-example) does on every push to the repository:

* Clones the repository to a clean virtual machine.
* Installs app dependencies using `pip`.
* Runs `pyinstaller` to package Python app into "onefile" bundle for **Windows**, **macOS** and **Ubuntu**.
* Zip/Tar packages and uploads them to ["Artifacts"](https://ci.appveyor.com/project/flet-dev/python-ci-example/build/job/g2j2lhstv04eyxcm/artifacts).
* Uploads packages to [**GitHub releases**](https://github.com/flet-dev/python-ci-example/releases) when a new tag is pushed. Just push a new tag to make a release!

:::noteGITHUB_TOKEN
`GITHUB_TOKEN` in `appveyor.yml` is a GitHub Personal Access Token (PAT) used by AppVeyor to publish created packages to repository "Releases". You need to generate your own token and replace it in `appveyor.yml`. Login to your GitHub account and navigate to [Personal access token](https://github.com/settings/tokens) page. Click "Generate new token" and select "public_repo" or "repo" scope for public or private repository respectively. Copy generated token to a clipboard and return to AppVeyor Portal. Navigate to [Encrypt configuration data](https://ci.appveyor.com/tools/encrypt) page and paste token to "Value to encrypt" field, click "Encrypt" button. Put encrypted value under `GITHUB_TOKEN` in your `appveyor.yml`.
:::

Configure AppVeyor for your Python project, push a new tag to a repository and "automagically" get desktop bundle for all three platforms in GitHub releases! 🎉

<img src="/img/docs/getting-started/appveyor-ci-flet-github-releases.png" className="screenshot-70" />

In addition to [GitHub Releases](https://www.appveyor.com/docs/deployment/github/), you can also configure releasing of artifacts to [Amazon S3 bucket](https://www.appveyor.com/docs/deployment/amazon-s3/) or [Azure Blob storage](https://www.appveyor.com/docs/deployment/azure-blob/).

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
flet>=0.1.33
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