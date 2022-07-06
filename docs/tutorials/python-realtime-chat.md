---
title: Creating real-time chat app in Python
sidebar_label: Python - Real-time Chat app
---

## Introduction

There are already two Flet tutorials for Python: ["classic" TodoMVC-like app](/docs/tutorials/python-todo) and [simple Calculator app](/docs/tutorials/python-calculator) - "beginner" tutorials demonstrating Flet essentials plus some packaging and deployment approaches.

This article is going to be different. It is an opening for a series of articles about building and delivering open-source commercial-grade application that could be self-hosted as a web app with desktop and mobile clients published to Microsoft Store, App Store and Google Play.

As the title says it's going to be realtime Chat app. By building Chat app we are going to explore if, using Python with Flet framework, it's possible to build a product similar to Slack, Mattermost, Zulip or Rocket.chat - a collaboration tool that your team can rely on in their daily work.

### Why chat?

Because ["this is a story for collaboration!"](https://youtu.be/ohClxMmNLQQ?t=103) (you should play that game)! Seriously, look around - we use chats every day at work and home, on laptops and phones: WhatsApp, Facebook Messanger, Skype, Discord, Telegram just to name a few! Every programmer dreams about writing a chat after learning about WebSockets and every WebSocket library comes with a chat example. Chat app would help us better demonstrate a realtime nature of Flet framework where response-requests replaced with always-on "streams" of user events and UI updates.

I've got a sneak peek into a few Chat examples for other frameworks ([one](https://dev.to/appwrite/building-a-realtime-chat-application-using-angular-and-appwrite-i3o), [two](https://github.com/denoland/showcase_chat)) and become disappointed. Is it really necessary to be so complex for the app having such a basic functionality? Is it really necessary to use Firebase, Appwrite, Supabase or other begemoth frameworks on backend? Why do you always need "frontend" and "backend"? Is it an established commonly-accepted architecture for the next decade? Can we make a trivial chat like in those examples but with less code? Can we keep the architecture simple yet performant and maintainable? Yes, we can! With Flet instead of developing JavaScript frontend with REST backend you are just writing a monolithic server-driven app using only Python and yet get multi-user Single-Page Application (SPA) with realtime, partial UI updates.

### Requirements

So, how would "our" chat differentiate from "competitors"?

1. User owns the data! We are going to store app data in SQLite database which is portable and can be constantly [replicated in the background](https://github.com/benbjohnson/litestream).
2. Full extensibility with "apps". An extension "app" could add some functionality into existing UI or introduce a completely new experience on a separate URL/route.
3. Requires minimum resources to run, ideally, a single Docker container with shared CPU and 256 MB or memory.
4. Native desktop and mobile clients with functionality on par with web user interface. Ideally, the same code base drives the app on all platforms.
5. White-labeled desktop and mobile clients on-demand delivered to customers' App/Play/Microsoft store accounts with a single click.
6. Contributions are welcome! A simple, straightforward architecture with a source code that can be understood by an average user.

### The plan

In this article we are going to start from a really trivial in-memory Chat app, just to learn Flet basics:

* Installing Flet module
* Adding page controls and handling events
* Using built-in PubSub library
* Building page layout with reusable controls
* Delivering the app as a Progressive Web App (PWA)

A ready application will be looking like this:

[SCREENSHOT]

You can play with a live demo [here](https://flet-chat.fly.dev).

## Getting started with Flet

It's a good tradition to start from "Hello, world!" app!

Flet requires Python 3.7 or above. To create a web app in Python with Flet, you need to install `flet` module first:

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

flet.app("chat", target=main)
```

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

## Enhancing user interface

### Laying out controls

[diagram with page layout]

[pseudo-code]

### Re-usable user controls

composability, reusability
encapsulation

(User controls)[/docs/getting-started/python#user-controls]

user control for chat message

### Keyboard support

#### Inputs focus

autofocus textboxes
.focus() after message entered

#### Submit on Enter

textbox.on_submit
textbox with shift_enter

### Page title

page title

### Scroll to the last message

listview with auto_scroll

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