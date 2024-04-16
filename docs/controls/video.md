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
To build your Flet app that uses `Video` control add `--include-packages flet_video` to `flet build` command, for example:

```
flet build apk --include-packages flet_video
```
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import random
import flet as ft


def main(page: ft.Page):
    page.theme_mode = ft.ThemeMode.LIGHT
    page.title = "TheEthicalVideo"
    page.window_always_on_top = True
    page.spacing = 20
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    def handle_pause(e):
        video.pause()
        print("Video.pause()")

    def handle_play_or_pause(e):
        video.play_or_pause()
        print("Video.play_or_pause()")

    def handle_play(e):
        video.play()
        print("Video.play()")

    def handle_stop(e):
        video.stop()
        print("Video.stop()")

    def handle_next(e):
        video.next()
        print("Video.next()")

    def handle_previous(e):
        video.previous()
        print("Video.previous()")

    def handle_volume_change(e):
        video.volume = e.control.value
        page.update()
        print(f"Video.volume = {e.control.value}")

    def handle_playback_rate_change(e):
        video.playback_rate = e.control.value
        page.update()
        print(f"Video.playback_rate = {e.control.value}")

    def handle_seek(e):
        video.seek(10000)
        print(f"Video.seek(10000)")

    def handle_add_media(e):
        video.playlist_add(random.choice(sample_media))
        print(f"Video.playlist_add(random.choice(sample_media))")

    def handle_remove_media(e):
        r = random.randint(0, len(video.playlist) - 1)
        video.playlist_remove(r)
        print(f"Popped Item at index: {r} (position {r+1})")

    def handle_jump(e):
        print(f"Video.jump_to(0)")
        video.jump_to(0)

    sample_media = [
        ft.VideoMedia(
            "https://user-images.githubusercontent.com/28951144/229373720-14d69157-1a56-4a78-a2f4-d7a134d7c3e9.mp4"
        ),
        ft.VideoMedia(
            "https://user-images.githubusercontent.com/28951144/229373718-86ce5e1d-d195-45d5-baa6-ef94041d0b90.mp4"
        ),
        ft.VideoMedia(
            "https://user-images.githubusercontent.com/28951144/229373716-76da0a4e-225a-44e4-9ee7-3e9006dbc3e3.mp4"
        ),
        ft.VideoMedia(
            "https://user-images.githubusercontent.com/28951144/229373695-22f88f13-d18f-4288-9bf1-c3e078d83722.mp4"
        ),
        ft.VideoMedia(
            "https://user-images.githubusercontent.com/28951144/229373709-603a7a89-2105-4e1b-a5a5-a6c3567c9a59.mp4",
            extras={
                "artist": "Thousand Foot Krutch",
                "album": "The End Is Where We Begin",
            },
            http_headers={
                "Foo": "Bar",
                "Accept": "*/*",
            },
        ),
    ]

    page.add(
        video := ft.Video(
            expand=True,
            playlist=sample_media[0:2],
            playlist_mode=ft.PlaylistMode.LOOP,
            fill_color=ft.colors.BLUE_400,
            aspect_ratio=16/9,
            volume=100,
            autoplay=False,
            filter_quality=ft.FilterQuality.HIGH,
            muted=False,
            on_loaded=lambda e: print("Video loaded successfully!"),
            on_enter_fullscreen=lambda e: print("Video entered fullscreen!"),
            on_exit_fullscreen=lambda e: print("Video exited fullscreen!"),
        ),
        ft.Row(
            wrap=True,
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                ft.ElevatedButton("Play", on_click=handle_play),
                ft.ElevatedButton("Pause", on_click=handle_pause),
                ft.ElevatedButton("Play Or Pause", on_click=handle_play_or_pause),
                ft.ElevatedButton("Stop", on_click=handle_stop),
                ft.ElevatedButton("Next", on_click=handle_next),
                ft.ElevatedButton("Previous", on_click=handle_previous),
                ft.ElevatedButton("Seek s=10", on_click=handle_seek),
                ft.ElevatedButton("Jump to first Media", on_click=handle_jump),
                ft.ElevatedButton("Add Random Media", on_click=handle_add_media),
                ft.ElevatedButton("Remove Random Media", on_click=handle_remove_media),
            ],
        ),
        ft.Slider(
            min=0,
            value=100,
            max=100,
            label="Volume = {value}%",
            divisions=10,
            width=400,
            on_change=handle_volume_change,
        ),
        ft.Slider(
            min=1,
            value=1,
            max=3,
            label="PlaybackRate = {value}X",
            divisions=6,
            width=400,
            on_change=handle_playback_rate_change,
        ),
    )


ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `alignment`

Defines the Alignment of the viewport. Alignment is an instance of [`alignment.Alignment`](/docs/reference/types/alignment) class.

Defaults to `alignment.center`.

### `aspect_ratio`

Defines the aspect ratio of the video player.

### `autoplay`

Whether the video should start playing automatically.

### `fit`

The value is [`ImageFit`](/docs/reference/types/imagefit) enum. Default is `NONE`.

### `filter_quality`

Filter quality of the texture used to render the video output. Value is of type [`FilterQuality`](/docs/reference/types/filterquality) enum. Defaults to `LOW`.

### `fill_color`

Defines the [color](/docs/reference/colors) used to fill the video background.

### `muted`

Defines whether the video player should be started in muted state. Defaults to `False`.

### `resume_upon_entering_foreground_mode`

Whether to resume the video when application enters foreground mode. Has effect only if `pause_upon_entering_background_mode` is also set to `True`.

### `show_controls`

Whether to show the video player controls. Defaults to `True`.

### `shuffle_playlist`

Defines whether the playlist should be shuffled. Defaults to `False`.

### `subtitle_configuration`

Defines the subtitle configuration for the video player. Value is of type `VideoSubtitleConfiguration` which has the
following properties:

* `src` - the source of the subtitles (URL or local asset file)
* `title` - the title of the subtitles
* `language` - the language of the subtitles
* `text_style` - the style of the subtitle text
* `text_scale_factor` - the scale factor of the subtitles
* `text_align` - the alignment of the subtitles
* `padding` - the padding of the subtitles
* `visible` - whether or not the subtitles should be visible.

### `title`

Defines the name of the underlying window & process for native backend. This is visible inside the windows' volume mixer.

### `volume`

Defines the volume of the video player. Values ranges between `0.0` and `100.0` (default).

### `pause_upon_entering_background_mode`

Whether to pause the video when application enters background mode.

### `pitch`

Defines the relative pitch of the video player. Defaults to `1.0`.

### `playback_rate`

Defines the playback rate of the video player. Defaults to `1.0`.

### `playlist`

The video playlist consisting of `VideoMedia` objects. This property is read-only and can be set only once - at `Video`
class instantiation. To modify it later on, use the `playlist_add(media)` and `playlist_remove(media_index)` methods.

### `playlist_mode`

Represents the mode of playback for the `playlist`. The following values are supported:

* `PlaylistMode.NONE` - End playback once the end of the playlist is reached.
* `PlaylistMode.SINGLE` - Indefinitely loop over the currently playing `VideoMedia` in the playlist.
* `PlaylistMode.LOOP` - Loop over the `playlist` & restart it from beginning once the end is reached.

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

### `on_exit_fullscreen`

Fires when the video exits fullscreen

### `on_loaded`

Fires when the video player is initialized and ready for playback.

