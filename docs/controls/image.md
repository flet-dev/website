---
title: Image
sidebar_label: Image
---

An image is a graphic representation of something (e.g photo or illustration).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/image)


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/image/images-example.py
```


<img src="/img/docs/controls/image/custom-images.gif" className="screenshot-50"/>

## Properties

### `anti_alias`

Whether to paint the image with anti-aliasing.

Anti-aliasing alleviates the sawtooth artifact when the image is rotated.

### `border_radius`

Clip image to have rounded corners. 

Value is of type [`BorderRadius`](/docs/reference/types/borderradius).

### `cache_width`

The size at which the image should be decoded.
 
The image will, however, be rendered to the constraints of the layout regardless of this parameter. 

### `cache_height`

The size at which the image should be decoded.

The image will, however, be rendered to the constraints of the layout regardless of this parameter.

### `color`

If set, this [color](/docs/reference/colors) is blended with each image pixel using `color_blend_mode`.

### `color_blend_mode`

Used to combine `color` with the image. In terms of the blend mode, color is the source and this image is the
destination.

Value is of type [`BlendMode`](/docs/reference/types/blendmode) and defaults to `BlendMode.COLOR`.

### `error_content`

Fallback `Control` to display if the image cannot be loaded from the source.

### `exclude_from_semantics`

Whether to exclude this image from semantics.

Defaults to `False`.

### `filter_quality`

The rendering quality of the image.

Value is of type [`FilterQuality`](/docs/reference/types/filterquality) and defaults to `FilterQuality.MEDIUM`.

### `fit`

How to inscribe the image into the space allocated during layout.

Value is of type [`ImageFit`](/docs/reference/types/imagefit) and defaults to `ImageFit.NONE`.

### `gapless_playback`

Whether to continue showing the old image (`True`), or briefly show nothing (`False`), when the image provider changes.

Defaults to `False`.

### `height`

If set, require the image to have this height.

If not set, the image will pick a size that best preserves its intrinsic aspect ratio.

:::note
It is strongly recommended that either both the width and the height be specified, or that the Image be placed in a context that sets tight layout constraints, so that the image does not change size as it loads. Consider using `fit` to adapt the image's rendering to fit the given width and height if the exact image dimensions are not known in advance.
:::

### `semantics_label`

A semantic description of the image. Used to provide a description of the image to TalkBack on Android, and VoiceOver on iOS.

### `src`

The image source. 
This could be an external URL or a local [asset file](/docs/cookbook/assets).

### `src_base64`

Displays an image from Base-64 encoded string, for example:

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/image/image-base64.py
```

Use `base64` command (Linux, macOS, WSL) to convert file to Base64 format, for example:

```
base64 -i <image.png> -o <image-base64.txt>
```

On Windows you can use PowerShell to encode string into Base64 format:

```posh
[convert]::ToBase64String((Get-Content -path "your_file_path" -Encoding byte))
```

### `repeat`

How to paint any portions of the layout bounds not covered by the image.

Values is of type [`ImageRepeat`](/docs/reference/types/imagerepeat) and defaults to `ImageRepeat.NO_REPEAT`.

### `tooltip`

The text displayed when hovering a mouse over the Image.

### `width`

If set, require the image to have this width.

If not set, the image will pick a size that best preserves its intrinsic aspect ratio.

:::note
It is strongly recommended that either both the width and the height be specified, or that the Image be placed in a context that sets tight layout constraints, so that the image does not change size as it loads. Consider using `fit` to adapt the image's rendering to fit the given width and height if the exact image dimensions are not known in advance.
:::
