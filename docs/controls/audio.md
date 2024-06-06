---
title: Audio
sidebar_label: Audio
---

A control to simultaneously play multiple audio files. Works on macOS, Linux, Windows, iOS, Android and web.
Based on [audioplayers](https://pub.dev/packages/audioplayers) Flutter widget.

Audio control is non-visual and should be added to `page.overlay` list.

:::info Packaging
To build your Flet app that uses `Audio` control add `--include-packages flet_audio` to `flet build` command, for example:

```
flet build apk --include-packages flet_audio
```
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/utility/audio)

### Autoplay audio

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

:::note
Autoplay works in desktop, mobile apps and Safari browser, but doesn't work in Chrome/Edge.
:::

```python
import flet as ft

def main(page: ft.Page):
    audio1 = ft.Audio(
        src="https://luan.xyz/files/audio/ambient_c_motion.mp3", autoplay=True
    )
    page.overlay.append(audio1)
    page.add(
        ft.Text("This is an app with background audio."),
        ft.ElevatedButton("Stop playing", on_click=lambda _: audio1.pause()),
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

### Audio with playback controls

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

url = "https://github.com/mdn/webaudio-examples/blob/main/audio-analyser/viper.mp3?raw=true"

def main(page: ft.Page):
    def volume_down(_):
        audio1.volume -= 0.1
        audio1.update()

    def volume_up(_):
        audio1.volume += 0.1
        audio1.update()

    def balance_left(_):
        audio1.balance -= 0.1
        audio1.update()

    def balance_right(_):
        audio1.balance += 0.1
        audio1.update()

    audio1 = ft.Audio(
        src=url,
        autoplay=False,
        volume=1,
        balance=0,
        on_loaded=lambda _: print("Loaded"),
        on_duration_changed=lambda e: print("Duration changed:", e.data),
        on_position_changed=lambda e: print("Position changed:", e.data),
        on_state_changed=lambda e: print("State changed:", e.data),
        on_seek_complete=lambda _: print("Seek complete"),
    )
    page.overlay.append(audio1)
    page.add(
        ft.ElevatedButton("Play", on_click=lambda _: audio1.play()),
        ft.ElevatedButton("Pause", on_click=lambda _: audio1.pause()),
        ft.ElevatedButton("Resume", on_click=lambda _: audio1.resume()),
        ft.ElevatedButton("Release", on_click=lambda _: audio1.release()),
        ft.ElevatedButton("Seek 2s", on_click=lambda _: audio1.seek(2000)),
        ft.Row(
            [
                ft.ElevatedButton("Volume down", on_click=volume_down),
                ft.ElevatedButton("Volume up", on_click=volume_up),
            ]
        ),
        ft.Row(
            [
                ft.ElevatedButton("Balance left", on_click=balance_left),
                ft.ElevatedButton("Balance right", on_click=balance_right),
            ]
        ),
        ft.ElevatedButton(
            "Get duration", on_click=lambda _: print("Duration:", audio1.get_duration())
        ),
        ft.ElevatedButton(
            "Get current position",
            on_click=lambda _: print("Current position:", audio1.get_current_position()),
        ),
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `autoplay`

Starts playing audio as soon as audio control is added to a page.

:::note
Autoplay works in desktop, mobile apps and Safari browser, but doesn't work in Chrome/Edge.
:::

### `balance`

Sets the stereo balance.

-1 - The left channel is at full volume; the right channel is silent. 1 - The right channel is at full volume; the left channel is silent. 0 - Both channels are at the same volume.

:::note
Setting balance is supported on Windows and Linux only.
:::

### `playback_rate`

Sets the playback rate. iOS and macOS have limits between 0.5 and 2x Android SDK version should be 23 or higher.

### `release_mode`

Sets the release mode.

Value is of type [`ReleaseMode`](/docs/reference/types/releasemode) and defaults to `ReleaseMode.RELEASE`.

### `src`

Sets the URL to the audio file. It could be an asset URL, see [Image.src](/docs/controls/image#src) for more information about assets.

:::note
[Here](https://github.com/bluefireteam/audioplayers/blob/main/troubleshooting.md#supported-formats--encodings) is a list of supported audio formats.
:::

### `src_base64`

Sets the contents of audio file encoded in base-64 format.

### `volume`

Sets the volume (amplitude).

0 is mute and 1 is the max volume. The values between 0 and 1 are linearly interpolated.

## Methods

### `get_current_position()`

Returns the current position in milliseconds.

### `get_duration()`

Returns the duration of audio in milliseconds.

### `pause()`

Stops playing audio.

### `play()`

Starts playing audio for the beginning.

### `release()`

Stops playing and releases the resources associated with this audio control.
The resources are going to be fetched or buffered again as soon as you call `resume()` or change the source.

### `resume()`

Resumes playing audio from the current position.

### `seek()`

Moves the cursor to the desired position.

Method arguments:

* `position_milliseconds` - desired position in milliseconds.

## Events

### `on_duration_changed`

Fires as soon as audio duration is available (it might take a while to download or buffer it).

Event's `e.data` contains audio duration in milliseconds.

### `on_loaded`

Fires when an audio is loaded/buffered.

### `on_position_changed`

Fires when audio position is changed. Will continuously update the position of the playback every 1 second if the status is playing. Can be used for a progress bar.

### `on_seek_complete`

Fires on seek completions. An event is going to be sent as soon as the audio seek is finished.

### `on_state_changed`

Fires when audio player state changes. Event's `e.data` contains one of the following states:

* `stopped`
* `playing`
* `paused`
* `completed`
* `disposed` 
