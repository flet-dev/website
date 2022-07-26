---
title: PubSub
sidebar_label: PubSub
---

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