---
title: LocalAuthentication
sidebar_label: LocalAuthentication
---

A control to use the local authentication for user verification. Based on [local_auth](https://pub.dev/packages/local_auth) Flutter widget.
LocalAuthentication supports Android, IOS, Linux, MacOS, Windows.

LocalAuthentication control is non-visual and should be added to `page.overlay` list.

## Example

```python
import flet as ft


def main(page: ft.Page):
    auth = ft.LocalAuthentication()

    def on_click(e):
        print(
            auth.authenticate(
                title="title", biometricsOnly=False,
            )
        )

    page.overlay.append(auth)
    page.add(ft.SafeArea(content=ft.TextButton(text="authenticate", on_click=on_click)))


ft.app(main)

```

## Properties

### `title`

Title to be displayed in the authentication dialog.

Won't work on Linux.

### `biometricsOnly`

📱 Moblie only. Allow authentication only using Biometrics.


## Methods

### `authenticate`

Authenticates the user and returns `True` or `False`.

### `available`

Checks if Biometrics | Passcode are available to authenticate with and returns `True` or `False`