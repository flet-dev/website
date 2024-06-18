---
title: AlertDialog
sidebar_label: AlertDialog
---

A material design alert dialog.

An alert dialog informs the user about situations that require acknowledgement.
An alert dialog has an optional title and an optional list of actions.
The title is displayed above the content and the actions are displayed below the content.

To open this control, simply call the [`page.open()`](/docs/controls/page#opencontrol) helper-method.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/alertdialog)

### Basic and modal dialogs

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "AlertDialog examples"
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    dlg = ft.AlertDialog(
        title=ft.Text("Hi, this is a non-modal dialog!"),
        on_dismiss=lambda e: page.add(ft.Text("Non-modal dialog dismissed")),
    )

    def handle_close(e):
        page.close(dlg_modal)
        page.add(ft.Text(f"Modal dialog closed with action: {e.control.text}"))

    dlg_modal = ft.AlertDialog(
        modal=True,
        title=ft.Text("Please confirm"),
        content=ft.Text("Do you really want to delete all those files?"),
        actions=[
            ft.TextButton("Yes", on_click=handle_close),
            ft.TextButton("No", on_click=handle_close),
        ],
        actions_alignment=ft.MainAxisAlignment.END,
        on_dismiss=lambda e: page.add(
            ft.Text("Modal dialog dismissed"),
        ),
    )

    page.add(
        ft.ElevatedButton("Open dialog", on_click=lambda e: page.open(dlg)),
        ft.ElevatedButton("Open modal dialog", on_click=lambda e: page.open(dlg_modal)),
    )


ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/alertdialog/alertdialog-with-custom-content.gif" className="screenshot-50" />

## Properties

### `actions`

The (optional) set of actions that are displayed at the bottom of the dialog.

Typically this is a list of [`TextButton`](/docs/controls/textbutton) controls.

### `action_button_padding`

The padding that surrounds each button in `actions`.

### `actions_alignment`

Defines the horizontal layout of the actions.

Value is of type [`MainAxisAlignment`](/docs/reference/types/mainaxisalignment) and defaults to `MainAxisAlignment.END`.

### `actions_padding`

Padding around the set of actions at the bottom of the dialog.

Typically used to provide padding to the button bar between the button bar and the edges of the dialog.

If are no actions, then no padding will be included. The padding around the button bar defaults to zero.

The value is an instance of [`padding.Padding`](/docs/reference/types/padding) class or a number.

### `adaptive`

If the value is `True`, an adaptive AlertDialog is created based on whether the target platform is iOS/macOS.

On iOS and macOS, a [`CupertinoAlertDialog`](/docs/controls/cupertinoalertdialog) is created, which has matching functionality and presentation as `AlertDialog`, and the graphics as expected on iOS. On other platforms, a Material AlertDialog is created.

See the example of
usage [here](/docs/controls/cupertinoalertdialog#cupertinoalertdialog-and-adaptive-alertdialog-example).

Defaults to `False`.

### `bgcolor`

The background [color](/docs/reference/colors) of the dialog's surface.

### `clip_behavior`

Controls how the contents of the dialog are clipped (or not) to the given `shape`.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior) and defaults to `ClipBehavior.NONE`.

### `content`

The (optional) content of the dialog is displayed in the center of the dialog in a lighter font. Typically this is a [`Column`](/docs/controls/column) that contains the dialog's [`Text`](/docs/controls/text) message.

### `content_padding`

Padding around the content.

If there is no content, no padding will be provided. Otherwise, padding of 20 pixels is provided above the content to separate the content from the title, and padding of 24 pixels is provided on the left, right, and bottom to separate the content from the other edges of the dialog.

The value is an instance of [`Padding`](/docs/reference/types/padding) class or a number.

### `elevation`

Defines the elevation (z-coordinate) at which the dialog should appear.

### `icon`

A control that is displayed at the top of the dialog. Typically a [`Icon`](/docs/controls/icon) control.

### `icon_padding`

Padding around the `icon`.

### `inset_padding`

Padding around the Dialog itself.

The value is an instance of [`Padding`](/docs/reference/types/padding) class or a number.

Defaults to `padding.symmetric(vertical=40, horizontal=24)` - 40 pixels horizontally and 24 pixels vertically outside of
the dialog box.

### `modal`

Whether dialog can be dismissed/closed by clicking the area outside of it.

### `open`

Set to `True` to display a dialog.

Defaults to `False`.

### `semantics_label`

The semantic label of the dialog used by accessibility frameworks to announce screen transitions when the dialog is opened and closed.

In iOS, if this label is not provided, a semantic label will be inferred from the `title` if it is not null.

### `shadow_color`

The [color](/docs/reference/colors) used to paint a drop shadow under the dialog, which reflects the dialog's elevation.

### `shape`

The shape of the dialog.

Value is of type [`OutlinedBorder`](/docs/reference/types/outlinedborder) and defaults
to `RoundedRectangleBorder(radius=4.0)`.

### `surface_tint_color`

The [color](/docs/reference/colors) used as a surface tint overlay on the dialog's background color, which reflects the
dialog's elevation.

### `title`

The (optional) title of the dialog is displayed in a large font at the top of the dialog.

Typically a [`Text`](/docs/controls/text) control.

### `title_padding`

Padding around the title.

If there is no title, no padding will be provided. Otherwise, this padding is used.

The value is an instance of [`padding.Padding`](/docs/reference/types/padding) class or a number.

Defaults to providing `24` pixels on the top, left, and right of the title. If the `content` is not `None`, then no
bottom padding is provided (but see `content_padding`).
If it is not set, then an extra `20` pixels of bottom padding is added to separate the title from the actions.

## Events

### `on_dismiss`

Fires when dialog is dismissed.
