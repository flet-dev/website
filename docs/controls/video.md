---
title: Video
sidebar_label: Video
---

Video playing control.
Based on the [media_kit](https://pub.dev/packages/media_kit) Dart/Flutter package.

:::note Prerequisites
On Linux, the [libmpv](https://mpv.io/) package must be installed. See [this section](/docs/publish/linux#prerequisites) for more information.
:::

:::info Packaging
To build your Flet app that uses `Video` control add `flet-video` to `dependencies` key of the `[project]` section of your `pyproject.toml` file, for
example:

```toml
[project]
...
dependencies = [
  "flet==0.27.6",
  "flet-video==0.1.0",
]
```
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/utility/video)

### Basic Example


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/utility/video/video-example.py
```


## Properties

### `alignment`

Defines the Alignment of the viewport.

Value is of type [`Alignment`](/docs/reference/types/alignment) and defaults to `alignment.center`.

### `aspect_ratio`

Defines the aspect ratio of the video player.

### `autoplay`

Whether the video should start playing automatically.

### `fit`

Value is of type [`ImageFit`](/docs/reference/types/imagefit) and defaults to `ImageFit.NONE`.

### `filter_quality`

Filter quality of the texture used to render the video output.

Value is of type [`FilterQuality`](/docs/reference/types/filterquality) and defaults to `FilterQuality.LOW`.

::: note
Android was reported to show blurry images when using `FilterQuality.HIGH`. Prefer the usage of `FilterQuality.MEDIUM` on this platform.
:::

### `fill_color`

Defines the [color](/docs/reference/colors) used to fill the video background.

### `muted`

Defines whether the video player should be started in muted state.

Defaults to `False`.

### `resume_upon_entering_foreground_mode`

Whether to resume the video when application enters foreground mode. Has effect only if `pause_upon_entering_background_mode` is also set to `True`.

### `show_controls`

Whether to show the video player controls.

Defaults to `True`.

### `shuffle_playlist`

Defines whether the playlist should be shuffled.

Defaults to `False`.

### `subtitle_configuration`

Defines the subtitle configuration for the video player.

Value is of type [`VideoSubtitleConfiguration`](/docs/reference/types/videosubtitleconfiguration).

### `title`

Defines the name of the underlying window & process for native backend. This is visible inside the windows' volume mixer.

### `volume`

Defines the volume of the video player.

Value ranges between `0.0` and `100.0` (default).

### `pause_upon_entering_background_mode`

Whether to pause the video when application enters background mode.

### `pitch`

Defines the relative pitch of the video player.

Defaults to `1.0`.

### `playback_rate`

Defines the playback rate of the video player.

Defaults to `1.0`.

### `playlist`

The video playlist consisting of `VideoMedia` objects. This property is read-only and can be set only once - at `Video`
class instantiation. To modify it later on, use the `playlist_add(media)` and `playlist_remove(media_index)` methods.

### `playlist_mode`

Represents the mode of playback for the `playlist`.

Value is of type [`PlaylistMode`](/docs/reference/types/playlistmode).

### `wakelock`

Whether to acquire wake lock while playing the video. When `True`, device's display will not go to standby/sleep while the video is playing. 

Defaults to `False`.

## Methods

### `get_current_position()`

Returns the current position of the video player in milliseconds.

### `get_duration()`

Returns the duration of the currently playing `VideoMedia` in the `playlist` in milliseconds.

### `is_completed()`

Returns `True` if the video player has reached the end of the currently playing `VideoMedia` in the `playlist`, `False`
otherwise.

### `is_playing()`

Returns `True` if the video player is currently playing, `False` otherwise.

### `jump_to(media_index)`

Jumps to the `VideoMedia` at the specified index(`media_index`) in the `playlist`.

### `next()`

Jumps to the next `VideoMedia` in the `playlist`.

### `pause()`

Pauses the video player.

### `play()`

Starts playing the video.

### `play_or_pause()`

Cycles between play and pause states of the video player. (Plays if paused, pauses if playing)

### `playlist_add(media)`

Appends/Adds the given `media` (of type `VideoMedia`) to the `playlist`.

### `playlist_remove(media_index)`

Removes the `VideoMedia` at the specified index(`media_index`) from the `playlist`.

### `previous()`

Jumps to the previous `VideoMedia` in the `playlist`.

### `seek(position_milliseconds)`

Seeks the currently playing `VideoMedia` in the `playlist` by the specified amount of milliseconds.

### `stop()`

Stops recording session and release internal recorder resource. It returns a string which is the location of the recorded file. On web, it returns the blob which could be opened using [`page.lauch_url()`](/docs/controls/page#launch_urlurl). On other platforms, it returns the path to the file which is the `output_path` parameter passed to `start_recording()` method.

## Events

### `on_enter_fullscreen`

Fires when the video enters fullscreen

### `on_error`

Fires when an error occurs.

### `on_completed`

Fires when a video completes.

### `on_track_changed`

Fires when a video track changes, returns an Int of track currently playing.

### `on_exit_fullscreen`

Fires when the video exits fullscreen

### `on_loaded`

Fires when the video player is initialized and ready for playback.

