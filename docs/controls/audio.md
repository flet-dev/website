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


:::note
Autoplay works in desktop, mobile apps and Safari browser, but doesn't work in Chrome/Edge.
:::

```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/audio/audio-autoplay.py
```

### Audio with playback controls


```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/utility/audio/audio-player.py
```


## Properties

### `autoplay`

Starts playing audio as soon as audio control is added to a page.

Value is of type `bool` and defaults to `False`.

:::note
Autoplay works in desktop, mobile apps and Safari browser, but doesn't work in Chrome/Edge.
:::

### `balance`

Sets the stereo balance.

-1 - The left channel is at full volume; the right channel is silent. 1 - The right channel is at full volume; the left channel is silent. 0 - Both channels are at the same volume.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber).

:::note
Setting balance is supported on Windows and Linux only.
:::

### `playback_rate`

Sets the playback rate. iOS and macOS have limits between 0.5 and 2x Android SDK version should be 23 or higher.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber).

### `release_mode`

Sets the release mode.

Value is of type [`ReleaseMode`](/docs/reference/types/releasemode) and defaults to `ReleaseMode.RELEASE`.

### `src`

The audio source. Can be a URL or a local [asset file](/docs/cookbook/assets).

:::note
[Here](https://github.com/bluefireteam/audioplayers/blob/main/troubleshooting.md#supported-formats--encodings) is a list of supported audio formats.
:::

### `src_base64`

Sets the contents of audio file encoded in base-64 format.

Value is of type `str`.

### `volume`

Sets the volume (amplitude).

0 is mute and 1 is the max volume. The values between 0 and 1 are linearly interpolated.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber).

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

Event handler argument is of type [`AudioDurationChangeEvent`](/docs/reference/types/audiodurationchangeevent).

### `on_loaded`

Fires when an audio is loaded/buffered.

### `on_position_changed`

Fires when audio position is changed. Will continuously update the position of the playback every 1 second if the status is playing. Can be used for a progress bar.

Event handler argument is of type [`AudioPositionChangeEvent`](/docs/reference/types/audiopositionchangeevent).

### `on_seek_complete`

Fires on seek completions. An event is going to be sent as soon as the audio seek is finished.

### `on_state_changed`

Fires when audio player state changes. 

Event handler argument is of type [`AudioStateChangeEvent`](/docs/reference/types/audiostatechangeevent).