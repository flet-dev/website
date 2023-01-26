---
title: Creating realtime chat app in Python
sidebar_label: Python - Realtime Chat app
---

In this tutorial we are going to create a trivial in-memory Chat app that will help you understand Flet framework basics. This app could be a good starting point to creating your own more complex and useful projects.

In this tutorial you will learn how to:

* [Create your first Flet app](#getting-started-with-flet)
* [Add page controls and handle events](#adding-page-controls-and-handling-events)
* [Broadcast messages using built-in PubSub library](#broadcasting-chat-messages)
* [Use AlertDialog control for accepting user name](#user-name-dialog)
* Build page layout with reusable controls
* Deploy the app as a web app
* Deliver the app as a Progressive Web App (PWA)

The complete application will look like this:

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

To start, we want to be able to take user input (chat message) and show messages history on the screen. The layout for this step could look like this:

<img src="/img/docs/chat-tutorial/chat-layout-1.svg" className="screenshot-70" />


To implement this layout we will be using these Flet controls:
* [Column](/docs/controls/column) - a container to display chat messages (Text controls) vertically.
* [Text](/docs/controls/text) - chat message displayed in the chat Column.
* [TextField](/docs/controls/textfield) - input control used for taking new message input from the user.
* [ElevatedButton](/docs/controls/elevatedbutton) - "Send" button that will add new message to the chat Column.
* [Row](/docs/controls/row) - a container to display TextField and ElevatedButton vertically.

Create `chat.py` with the following contents:

```python
import flet as ft

def main(page: ft.Page):
    chat = ft.Column()
    new_message = ft.TextField()

    def send_click(e):
        chat.controls.append(ft.Text(new_message.value))
        new_message.value = ""
        page.update()

    page.add(
        chat, ft.Row(controls=[new_message, ft.ElevatedButton("Send", on_click=send_click)])
    )

ft.app("chat", target=main, view=ft.WEB_BROWSER)
```

When user clicks on the "Send" button, it triggers `on_click` event which calls `send_click` method. `send_click` then adds new `Text` control to the list of Column `controls` and clears `new_message` TextField value.

:::note
After any properties of a control are updated, an `update()` method of the control (or its parent control) should be called for the update to take effect.
:::

Chat app now looks like this:
<img src="/img/docs/chat-tutorial/chat-1.png" className="screenshot-40" />

## Broadcasting chat messages

In previous step, we have created a simple web app that takes input from the user and displays chats messages on the screen. If you open this app in two web browser tabs, it will create two app sessions. Each session will have its own list of messages.

To build a realtime chat app, you need to somehow pass the messages between chat app sessions. When a user sends a message, it should be broadcasted to all other app sessions and displayed on their pages.

Flet provides a simple built-in [PubSub](/docs/guides/python/pub-sub) mechanism for asynchronous communication between page sessions.

First, we need subscribe user to receive broadcast messages:
```python
    page.pubsub.subscribe(on_message)
```

`pubsub.subsribe()` method will add current app session to the list of subscribers. It accepts `handler` as an argument, that will later be called at the moment a publisher calls `pubsub.send_all()` method.

In the `handler` we will be adding new message Text to the list of chat controls:
```python
    def on_message(message: Message):
        chat.controls.append(ft.Text(f"{message.user}: {message.text}"))
        page.update()
```

Finally, we need to call `pubsub.send_all()` method when the user clicks on "Send" button:
```python
    def send_click(e):
        page.pubsub.send_all(Message(user=page.session_id, text=new_message.value))
        new_message.value = ""
        page.update()

    page.add(chat, ft.Row([new_message, ft.ElevatedButton("Send", on_click=send_click)]))   
```

`pubsub.send_all()` will call the `on_message()` and pass on the Message object down to it.

Here is the full code for this step:

```python
import flet as ft

class Message():
    def __init__(self, user: str, text: str):
        self.user = user
        self.text = text

def main(page: ft.Page):

    chat = ft.Column()
    new_message = ft.TextField()

    def on_message(message: Message):
        chat.controls.append(ft.Text(f"{message.user}: {message.text}"))
        page.update()

    page.pubsub.subscribe(on_message)

    def send_click(e):
        page.pubsub.send_all(Message(user=page.session_id, text=new_message.value))
        new_message.value = ""
        page.update()

    page.add(chat, ft.Row([new_message, ft.ElevatedButton("Send", on_click=send_click)]))

ft.app(target=main, view=ft.WEB_BROWSER)
```

<img src="/img/docs/chat-tutorial/chat-2.gif" className="screenshot-100" />

## User name dialog

Chat app that we have created in previous step has basic functionality we need to exchange messages between user sessions. It is not very user-friendly though, since it's shows `session_id` that sent a message, which doesn't tell much about who you are communicating with. 

Let's improve our app to show user name instead of `session_id` for each message. To capture user name, we will be using [AlertDialog](/docs/controls/alertdialog) control. Let's add it to the page:

```python
    user_name = ft.TextField(label="Enter your name")

    page.dialog = ft.AlertDialog(
        open=True,
        modal=True,
        title=ft.Text("Welcome!"),
        content=ft.Column([user_name], tight=True),
        actions=[ft.ElevatedButton(text="Join chat", on_click=join_click)],
        actions_alignment="end",
    )
```
[Image]

When the user clicks on "Join chat" button, it will call `join_click` method that should send a message to all subscribers informing them that the user has joined the chat. This message should look different from the regular chat message, for example, like this:
[Image]

Let's add `message_type` property to the `Message` class to differentiate between login and chat messages:

```python
class Message():
    def __init__(self, user: str, text: str, message_type: str):
        self.user = user
        self.text = text
        self.message_type = message_type
```

We will be checking `message_type` in `on_message` method:

```python
def on_message(message: Message):
    if message.message_type == "chat_message":
        chat.controls.append(ft.Text(f"{message.user}: {message.text}"))
    elif message.message_type == "login_message":
        chat.controls.append(
            ft.Text(message.text, italic=True, color=ft.colors.BLACK45, size=12)
        )
    page.update()
```

Messages of "login_message" and "chat_message" types will now be sent on two events: when user joins the chat and when user sends a message. 

Let's create `join_click` method:

```python
def join_click(e):
    if not user_name.value:
        user_name.error_text = "Name cannot be blank!"
        user_name.update()
    else:
        page.session.set("user_name", user_name.value)
        page.dialog.open = False
        page.pubsub.send_all(Message(user=user_name.value, text=f"{user_name.value} has joined the chat.", message_type="login_message"))
        page.update()
```
We used [page session storage](/docs/guides/python/session-storage) to store user_name for its future use in `send_click` method to send chat messages.

Finally, let's update `send_click` method to use user_name that we previosly saved using `page.session`:

```python
def send_click(e):
    page.pubsub.send_all(Message(user=page.session.get('user_name'), text=new_message.value, message_type="chat_message"))
    new_message.value = ""
    page.update()
```

The full code for this step can be found [here](link TBD).

<img src="/img/docs/chat-tutorial/chat-3.gif" className="screenshot-100" />

## Enhancing user interface

Chat app that we have created in previous step already serves its purpose of exchanging messages between users with basic login functionality. 

In this step we suggest adding some extra features to it that will improve user experience and make the app look more professional.

### Re-usable user controls

To improve user experience, we would like to show messages in a different format, like this:
<img src="/img/docs/chat-tutorial/chat-layout-chatmessage.svg" className="screenshot-70" />

Chat message now will a [Row](/docs/controls/row) consisting of [CircleAvatar](/docs/controls/circleavatar) with user name initials and [Column](/docs/controls/column) that contains two [Text](/docs/controls/text) controls: user name and message text.

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

### Laying out controls

<img src="/img/docs/chat-tutorial/chat-layout-2.svg" className="screenshot-70" />

```
Page
  Container expand=True
    ListView expand=True
  Row
    TextField expand=True
	IconButton
```

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

### Customizing web app

Tell about "assets" directory.

#### Favicon

favicon - 32x32 png - when running in the browser

#### Loading animation

icon for loading animation: icons/icon-192.png

https://docs.flutter.dev/development/platform-integration/web/initialization

https://github.com/flutter/gallery/blob/master/web/index.html

### Progressive web app (PWA)

Browsers that support PWA:

* Chrome on all platforms
* Edge on all platforms
* Firefox on Android
* Safari on iOS and iPadOS

Additional information about PWAs:

* [Installing PWA in different browsers](https://www.pcmag.com/how-to/how-to-use-progressive-web-apps)
* [PWA manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)
* [General information about PWAs](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

A note about webrenderer: /docs/controls/text/#using-system-fonts

#### Customizing PWA manifest

name
short name
description
theme_color
background

#### Customizing PWA icons

Windows - round

iOS - touch in HTML: icons/apple-touch-icon-192.png

### Deploying as web app

https://flet.dev/docs/guides/python/deploying-web-app

## What's next

The future articles we will cover things like:

* Disconnect, reconnect, session timeout
* Upload/download images
* Authentication, avatars
* Using database for the storage
* Chat channels, topics
* Full-text search
* Emojis, markdown
* Bots
* Mobile apps

## Summary

* Installing Flet module
* Adding page controls and handling events
* Using built-in PubSub library
* Building page layout with reusable controls
* Delivering the app as a Progressive Web App (PWA)