---
title: Lottie
sidebar_label: Lottie
---

Displays an animation from a Lottie file (URL or local file).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Lottie(
            src='https://raw.githubusercontent.com/xvrh/lottie-flutter/master/example/assets/Mobilo/A.json',
            repeat=False,
            reverse=False,
            animate=True
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

## Properties

### `animate`

Whether the animation should be played automatically.

Defaults to `True`.

### `background_loading`

Whether the animation should be loaded in the background.

### `filter_quality`

The quality of the image layer.

Value is of type [`FilterQuality`](/docs/reference/types/filterquality) and defaults to `FilterQuality.LOW`.

### `fit`

How to inscribe the Lottie composition into the space allocated during layout.

Value is of type [`ImageFit`](/docs/reference/types/imagefit).

### `repeat`

Whether the animation should repeat in a loop. Has no effect if `animate` is `False`.

Defaults to `True`.

### `reverse`

Whether the animation should be played in reverse (from start to end and then continuously from end to start). Has no
effect if `animate` and `repeat` are `False`.

Defaults to `False`.

### `src`

The source of the Lottie file. Can be a URL or a local asset file. See [`Image.src`](/docs/controls/image#src) for more
information about assets.

### `src_base64`

The base64 encoded string of the Lottie file. Either this or `src` must be provided. If both are provided, `src_base64` will be prioritized/used.

## Events

### `on_error`

Fires when an error occurs while loading the Lottie file.