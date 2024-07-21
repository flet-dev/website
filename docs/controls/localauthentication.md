---
title: LocalAuthentication
sidebar_label: LocalAuthentication
---

A control to use the local authentication for user varification. Based on [local_auth](https://pub.dev/packages/local_auth) Flutter widget.

LocalAuthentication control is non-visual and should be added to `page.overlay` list.

## Example

```python
import flet as ft


def main(page: ft.Page):
    auth = ft.LocalAuthentication()

    def on_click(e):
        print(
            auth.authenticate(
                title="title", biometricsOnly=False, useErrorDialogs=True
            )
        )

    page.overlay.append(auth)
    page.add(ft.SafeArea(content=ft.TextButton(text="authenticate", on_click=on_click)))


ft.app(main)

```

## Properties

### `title`

Title to be displayed in the authentication dialog.

### `biometricsOnly`

📱 Moblie only. Allow authentication only using Biometrics.

### `useErrorDialogs`

Allow the system an attempt to handle user-fixable issues encountered while authenticating. For instance, if a fingerprint reader exists on the device but there's no fingerprint registered, the plugin might attempt to take the user to settings to add one.

## Methods

### `authenticate`

Authenticates the user and returns `True` or `False`.

### `supported`

Checks the devices authentication capabilities and returns dictionary where key is the type of authentication and value is boolean.

Example return:
```python
{
    "devicesupport" : True
    "biometrics" : False
    "weak" : True
    "strong" : False
}
```