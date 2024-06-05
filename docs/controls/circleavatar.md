---
title: CircleAvatar
sidebar_label: CircleAvatar
---

A circle that represents a user.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Typically used with a user's profile image, or, in the absence of such an image, the user's initials. A given user's initials should always be paired with the same background color, for consistency.

If `foreground_image_src` fails then `background_image_src` is used. If `background_image_src` fails too, `bgcolor` is
used.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/circleavatar)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    # a "normal" avatar with background image
    a1 = ft.CircleAvatar(
        foreground_image_src="https://avatars.githubusercontent.com/u/5041459?s=88&v=4",
        content=ft.Text("FF"),
    )
    # avatar with failing foreground image and fallback text
    a2 = ft.CircleAvatar(
        foreground_image_src="https://avatars.githubusercontent.com/u/_5041459?s=88&v=4",
        content=ft.Text("FF"),
    )
    # avatar with icon, aka icon with inverse background
    a3 = ft.CircleAvatar(
        content=ft.Icon(ft.icons.ABC),
    )
    # avatar with icon and custom colors
    a4 = ft.CircleAvatar(
        content=ft.Icon(ft.icons.WARNING_ROUNDED),
        color=ft.colors.YELLOW_200,
        bgcolor=ft.colors.AMBER_700,
    )
    # avatar with online status
    a5 = ft.Stack(
        [
            ft.CircleAvatar(
                foreground_image_src="https://avatars.githubusercontent.com/u/5041459?s=88&v=4"
            ),
            ft.Container(
                content=ft.CircleAvatar(bgcolor=ft.colors.GREEN, radius=5),
                alignment=ft.alignment.bottom_left,
            ),
        ],
        width=40,
        height=40,
    )
    page.add(a1, a2, a3, a4, a5)


ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/circle-avatar/circle-avatar.png" className="screenshot-10" />

## Properties

### `background_image_src`

The source (local asset file or URL) of the background image in the circle. Changing the background image will cause the avatar to animate to the new image. Typically used as a fallback image for `foreground_image_src`. If the CircleAvatar is to have the user's initials, use `content` instead.

### ~~`background_image_url`~~

The source (local asset file or URL) of the background image in the circle. Changing the background image will cause the avatar to animate to the new image. Typically used as a fallback image for `foreground_image_url`. If the CircleAvatar is to have the user's initials, use `content` instead.

**Deprecated (renamed) in v0.22.0 and will be removed in v0.26.0. Use `background_image_src` instead.**

### `bgcolor`

The [color](/docs/reference/colors) with which to fill the circle. Changing the background color will cause the avatar to animate to the new color.

### `color`

The default text [color](/docs/reference/colors) for text in the circle. Defaults to the primary text theme color if no `bgcolor` is specified.

### `content`

Typically a `Text` control. If the CircleAvatar is to have an image, use `background_image_src` instead.

### `foreground_image_src`

The source (local asset file or URL) of the foreground image in the circle. Typically used as profile image. For fallback use `background_image_src`.

### ~~`foreground_image_url`~~

The source (local asset file or URL) of the foreground image in the circle. Typically used as profile image. For fallback use `background_image_url`.

**Deprecated (renamed) in version 0.22.0 and will be removed in v0.26.0. Use `foreground_image_src` instead.**

### `max_radius`

The maximum size of the avatar, expressed as the radius (half the diameter). If maxRadius is specified, then radius must not also be specified. Defaults to "infinity".

### `min_radius`

The minimum size of the avatar, expressed as the radius (half the diameter). If minRadius is specified, then radius must not also be specified. Defaults to zero.

### `radius`

The size of the avatar, expressed as the radius (half the diameter). If radius is specified, then neither minRadius nor maxRadius may be specified.

### `tooltip`

The text displayed when hovering the mouse over the button.

## Events

### `on_image_error`

Fires when an error occurs while loading the `background_image_src` or `foreground_image_src`. The event data (`e.data`)
is a string whose value is either `"background"` or `"foreground"` indicating the error's origin.