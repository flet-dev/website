---
title: Creating realtime chat app in Python
sidebar_label: Python - Realtime Chat app
---

Flet is...

There are already two Flet tutorials for Python: ["classic" TodoMVC-like app](/docs/tutorials/python-todo) and [simple Calculator app](/docs/tutorials/python-calculator) - "beginner" tutorials demonstrating Flet essentials plus some packaging and deployment approaches.

This article is going to be different. It is an opening for a series of articles about building and delivering open-source commercial-grade application that could be self-hosted as a web app with desktop and mobile clients published to Microsoft Store, App Store and Google Play.

As the title says it's going to be a chat app - an attempt to explore if it's possible, using Python with Flet framework, to create a real product similar to [Slack](https://slack.com), [Mattermost](https://mattermost.com), [Zulip](https://zulip.com) or [Rocket.chat](https://rocket.chat) - a collaboration tool that your team can rely on in their daily work.

### Why chat?

Because ["this is a story for collaboration!"](https://youtu.be/ohClxMmNLQQ?t=103) (you should play this game)! Look around - we use chats every day at work and home, on laptops and phones: WhatsApp, Facebook Messanger, Skype, Discord, Telegram, just to name a few! Every programmer dreams of writing a chat after learning about WebSockets and every WebSocket library comes with a chat example. Chat app would help us better demonstrate a realtime nature of Flet framework, where response-requests replaced with always-on "streams" of user events and UI updates.

I've got a sneak peek into a few Chat examples for other frameworks ([one](https://dev.to/appwrite/building-a-realtime-chat-application-using-angular-and-appwrite-i3o), [two](https://github.com/denoland/showcase_chat)) and became disappointed. Is it really necessary for the app having such a basic functionality to be so complex? Does it have to use Firebase, Appwrite, Supabase or other begemoth framework for a backend? Why do you always need "frontend" and "backend"? Is it an established commonly-accepted architecture for the next decade? Can we make a trivial chat like in those examples, but with less code? Can we keep the architecture simple yet performant and maintainable? Yes, we can! With Flet, instead of developing JavaScript frontend with REST backend you are just writing a monolithic server-driven app using only Python and yet get multi-user Single-Page Application (SPA) with realtime, partial UI updates.

### How Flet Chat is better?

This is how "Flet Chat" will be different from competitors:

1. User owns the data. App data will be stored in SQLite database which is portable and can be constantly [replicated on the background](https://github.com/benbjohnson/litestream) - free backups and easy migration between self-hosted and cloud versions.
2. Extensibility with "apps". An extension "app" could mix some functionality into existing UI or introduce a completely new experience at a separate URL/route.
3. Requires minimum resources to run, ideally, a single Docker container with shared CPU and 256 MB or memory.
4. On par functionality across web, desktop and mobile clients - a single codebase drives the app on all platforms. Desktop and mobile clients should not be lagging behind web UI.
5. On-demand delivery of white-labeled desktop and mobile clients to the customer's App/Play/Microsoft store accounts with a push of a button.
6. Application source code that can be understood and maintained by an intermediate Python programmer. Contributions are welcome!

### In this article

In this article we are going to start from a really trivial in-memory Chat app, just to learn Flet basics:

* Installing Flet module
* Adding page controls and handling events
* Using built-in PubSub library
* Building page layout with reusable controls
* Delivering the app as a Progressive Web App (PWA)

The complete application will be looking like this:

<img src="/img/docs/chat-tutorial/chat.gif" className="screenshot-50" />

You can play with a live demo [here](https://flet-chat.fly.dev).

## Getting started with Flet

It's a tradition to start with "Hello, world!" app!

Flet requires Python 3.7 or above. To create a Flet app in Python, you need to install `flet` module first:

```bash
pip install flet
```

:::noteUpgrading Flet
To upgrade `flet` module run:

```bash
pip install flet --upgrade
```
:::

Create `hello.py` with the following contents:

```python title="hello.py"
import flet
from flet import Page, Text

def main(page: Page):
    page.add(Text(value="Hello, world!"))

flet.app(target=main)
```

Run this app and you will see a new window with a greeting:

<img src="/img/docs/tutorial/todo-app-hello-world.png" className="screenshot-40" />

## Adding page controls and handling events

```python
import flet
from flet import Column, ElevatedButton, Page, Row, Text, TextField

def main(page: Page):
    chat = Column()
    new_message = TextField()

    def send_click(e):
        chat.controls.append(Text(new_message.value))
        new_message.value = ""
        page.update()

    page.add(
        chat, Row(controls=[new_message, ElevatedButton("Send", on_click=send_click)])
    )

flet.app(target=main)
```

<img src="/img/docs/chat-tutorial/chat-1.png" className="screenshot-40" />

## Broadcasting chat messages

PubSub

```python
from dataclasses import dataclass

import flet
from flet import Column, ElevatedButton, Page, Row, Text, TextField

@dataclass
class Message:
    user: str
    text: str

def main(page: Page):

    chat = Column()
    new_message = TextField()

    def on_message(message: Message):
        chat.controls.append(Text(f"{message.user}: {message.text}"))
        page.update()

    page.pubsub.subscribe(on_message)

    def send_click(e):
        page.pubsub.send_all(Message(page.session_id, new_message.value))
        new_message.value = ""
        page.update()

    page.add(chat, Row([new_message, ElevatedButton("Send", on_click=send_click)]))

flet.app(target=main, view=flet.WEB_BROWSER)
```

<img src="/img/docs/chat-tutorial/chat-2.gif" className="screenshot-100" />

## User name dialog

```python
from dataclasses import dataclass

import flet
from flet import AlertDialog, Column, ElevatedButton, Page, Row, Text, TextField, colors

@dataclass
class Message:
    user: str
    text: str

def main(page: Page):

    chat = Column()
    new_message = TextField()

    def on_message(message: Message):
        if message.user != None:
            chat.controls.append(Text(f"{message.user}: {message.text}"))
        else:
            chat.controls.append(
                Text(message.text, italic=True, color=colors.BLACK45, size=12)
            )
        page.update()

    page.pubsub.subscribe(on_message)

    def send_click(e):
        page.pubsub.send_all(Message(page.user, new_message.value))
        new_message.value = ""
        page.update()

    user_name = TextField(label="Enter your name")

    page.user = page.session_id

    def join_click(e):
        if not user_name.value:
            user_name.error_text = "Name cannot be blank!"
            user_name.update()
        else:
            page.user = user_name.value
            page.dialog.open = False
            page.pubsub.send_all(Message(None, f"{page.user} has joined the chat."))
            page.update()

    page.dialog = AlertDialog(
        open=True,
        modal=True,
        title=Text("Welcome!"),
        content=Column([user_name], tight=True),
        actions=[ElevatedButton(text="Join chat", on_click=join_click)],
        actions_alignment="end",
    )

    page.add(chat, Row([new_message, ElevatedButton("Send", on_click=send_click)]))

flet.app(target=main, view=flet.WEB_BROWSER)
```

<img src="/img/docs/chat-tutorial/chat-3.gif" className="screenshot-100" />

## Enhancing user interface

### Laying out controls

[diagram with page layout]

```
Page
  Container expand=True
    ListView expand=True
  Row
    TextField expand=True
	IconButton
```

### Re-usable user controls

User control (`UserControl`) allows building isolated re-usable components by combining existing Flet controls. User control behaves like a `Control`, could have methods and properties.

:::info
You can read more about User Controls in [Flet Guide for Python](https://flet.dev/docs/guides/python/user-controls).
:::

In a chat app we are going to use user control for displaying a single chat message with user name and user avatar.

When creating an instance of `ChatMessage` control we pass just a username and the message and then it's a control's "responsibility" to display a message based on those two parameters:

```python {2}
class ChatMessage(UserControl):
    def __init__(self, username: str, text: str):
        super().__init__()
        self.username = username
        self.text = text
# ...
```

and later in `on_message` handler:

```python {3}
    def on_message(message: Message):
        if message.user != None:
            m = ChatMessage(message.user, message.text)
        # ...
```

`ChatMessage` control extracts initials and algorithmically derives avatar color from a username.
Later, when we deside to improve control layout or its logic it won't affect the rest of the program - that's the power of encapsulation!

### Keyboard support

From the first releases of Flet framework we've trying to care about keyboard support. We started from managing controls focus and and submitting forms on Enter, which are crucial. Key bindings/shortcuts are coming in the future releases.

#### Focusing input controls

All data entry controls have `autofocus` property which when set to `True` moves initial focus to the control. If there is more than one control on a page with `autofocus` set, then the first one added to the page will get focus.

We set `autofocus=True` on a username TextField inside a dialog and then on a TextField for entering chat message to set initial focus on it when the dialog is closed.

When a user click "Send" button or presses Enter to submit a chat message TextField loses focus.
To programmatically set control focus we used [`TextField.focus()`](https://flet.dev/docs/controls/textfield#focus) method.

#### Submitting forms on `Enter`

It's so tempting to submit forms with just pushing `Enter` button on the keyboard! Type your name in the dialog, hit `Enter`, type a new message, hit `Enter`, type another, hit `Enter` - no mouse involved at all! 🚀

Flet has support for that by providing [`TextField.on_submit`](https://flet.dev/docs/controls/textfield#on_submit) event handler which fires when a user press `Enter` button while the focus is on the TextField.

#### Entering multiline messages

What about multiline TextFields where `Enter` must advance a cursor to the next line? We've got that covered too! `TextField` control has [`shift_enter`](https://flet.dev/docs/controls/textfield#shift_enter) property which when set to `True` enables Discord-like behavior: to get to a new line user presses `Shift`+`Enter` while hitting just `Enter` submits a form.

### Animated scrolling to the last message

Noticed a nice animation of scrolling to the last message in a chat window? It could be enabled by setting [`ListView.auto_scroll`](https://flet.dev/docs/controls/listview#auto_scroll) property to `True`. The top most `Page` class, being a scrollable container itself, also supports [`auto_scroll`](https://flet.dev/docs/controls/page#auto_scroll).

### Page title

Final touch - page title that could be changed as simply as:

```python
page.title = "Flet Chat"
page.update()
```

## Deploying the app

Deploy as a web app and deliver as Progressive Web App (PWA).

Browsers that support PWA:

* Chrome on all platforms
* Edge on all platforms
* Firefox on Android
* Safari on iOS and iPadOS

Additional information about PWAs:

* [Installing PWA in different browsers](https://www.pcmag.com/how-to/how-to-use-progressive-web-apps)
* [PWA manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)
* [General information about PWAs](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

A note about webrenderer.

### Customizing app details and palette

name
short name
description
theme_color
background

### Customizing icons

favicon - 32x32 png - when running in the browser

icon for loading animation: icons/icon-192.png

Windows - round

iOS - touch in HTML: icons/apple-touch-icon-192.png

## What's next

The future articles we will cover things like:

* Authentication, avatars
* Using database for the storage
* Chat channels, topics
* Full-text search
* Emojis, markdown
* Bots
* Mobile apps

## Summary