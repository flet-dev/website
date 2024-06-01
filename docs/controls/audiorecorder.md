---
title: AudioRecorder
sidebar_label: AudioRecorder
---

Audio recorder from microphone to a given file path. Works on macOS, Linux, Windows, iOS, Android and web.
Based on the [record](https://pub.dev/packages/record) Dart/Flutter package.

:::note
On Linux, encoding is provided by [fmedia](https://stsaz.github.io/fmedia/) which must be installed separately.
:::

AudioRecorder control is non-visual and should be added to `page.overlay` list.

:::info Packaging
To build your Flet app that uses `AudioRecorder` control add `--include-packages flet_audio_recorder` to `flet build` command, for example:

```
flet build apk --include-packages flet_audio_recorder
```

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

async def main(page: ft.Page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.appbar = ft.AppBar(title=ft.Text("Audio Recorder"), center_title=True)

    path = "test-audio-file.wav"

    async def handle_start_recording(e):
        print(f"StartRecording: {path}")
        await audio_rec.start_recording_async(path)

    async def handle_stop_recording(e):
        output_path = await audio_rec.stop_recording_async()
        print(f"StopRecording: {output_path}")
        if page.web and output_path is not None:
            await page.launch_url_async(output_path)

    async def handle_list_devices(e):
        devices = await audio_rec.get_input_devices_async()
        print(devices)

    async def handle_has_permission(e):
        try:
            print(f"HasPermission: {await audio_rec.has_permission_async()}")
        except Exception as e:
            print(e)

    async def handle_pause(e):
        print(f"isRecording: {await audio_rec.is_recording_async()}")
        if await audio_rec.is_recording_async():
            await audio_rec.pause_recording_async()

    async def handle_resume(e):
        print(f"isPaused: {await audio_rec.is_paused_async()}")
        if await audio_rec.is_paused_async():
            await audio_rec.resume_recording_async()

    async def handle_audio_encoding_test(e):
        for i in list(ft.AudioEncoder):
            print(f"{i}: {await audio_rec.is_supported_encoder_async(i)}")

    async def handle_state_change(e):
        print(f"State Changed: {e.data}")

    audio_rec = ft.AudioRecorder(
        audio_encoder=ft.AudioEncoder.WAV,
        on_state_changed=handle_state_change,
    )
    page.overlay.append(audio_rec)
    await page.update_async()

    await page.add_async(
        ft.ElevatedButton("Start Audio Recorder", on_click=handle_start_recording),
        ft.ElevatedButton("Stop Audio Recorder", on_click=handle_stop_recording),
        ft.ElevatedButton("List Devices", on_click=handle_list_devices),
        ft.ElevatedButton("Pause Recording", on_click=handle_pause),
        ft.ElevatedButton("Resume Recording", on_click=handle_resume),
        ft.ElevatedButton("Test AudioEncodings", on_click=handle_audio_encoding_test),
        ft.ElevatedButton("Has Permission", on_click=handle_has_permission),
    )


ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

:::note
Not all properties are supported on all platforms. Please check this [platform-feature parity matrix](https://pub.dev/packages/record#platform-feature-parity-matrix) for more information on which properties are supported on which platforms.
:::

### `audio_encoding`

The audio encoder to be used for recording. The following values are supported:

* `AudioEncoder.AACLC` - MPEG-4 AAC Low complexity. Outputs to MPEG_4 format container. Recommended file extension: `m4a`.
* `AudioEncoder.AACELD` - MPEG-4 AAC Enhanced Low Delay. Outputs to MPEG_4 format container. Recommended file extension: `m4a`.
* `AudioEncoder.AACHE` - MPEG-4 High Efficiency AAC (Version 2 if available). Outputs to MPEG_4 format container. Recommended file extension: `m4a`.
* `AudioEncoder.AMRNB` - The AMR (Adaptive Multi-Rate) narrow band speech. When used, `sample_rate` should be set to `8kHz`. Outputs to 3GP format container on Android. Recommended file extension: `3gp`.
* `AudioEncoder.AMRWB` - The AMR (Adaptive Multi-Rate) wide band speech. When used, `sample_rate` should be set to `16kHz`. Outputs to 3GP format container on Android. Recommended file extension: `3gp`.
* `AudioEncoder.OPUS` - Will output to MPEG_4 format container. SDK 29 on Android and SDK 11 on iOS. Recommended file extension: `opus`.
* `AudioEncoder.FLAC` - Free Lossless Audio Codec. Recommended file extension: `flac`.
* `AudioEncoder.WAV` (default) - Waveform Audio (pcm16bit with headers). Recommended file extension: `wav`.
* `AudioEncoder.PCM16BITS` - Linear PCM 16 bit per sample. Recommended file extension: `pcm`.

See [`this`](https://pub.dev/packages/record#file) for a detailed overview on which platforms support which encodings.

### `auto_gain`

The recorder will try to auto adjust recording volume in a limited range.

Defaults to `False`.

### `bit_rate`

The audio encoding bit rate in bits per second.

Defaults to `128000`.

### `cancel_echo`

The recorder will try to reduce echo.

Defaults to `False`.

### `channels_num`

The numbers of channels for the recording. `1` = mono, `2` = stereo.

Defaults to `2`.

### `sample_rate`

The sample rate for audio in samples per second.

Defaults to `44100`.

### `suppress_noise`

The recorder will try to negates the input noise.

Defaults to `False`.

## Methods

### `get_input_devices()`

Returns a dictionary whose values are the input devices available on the platform.

### `has_permission()`

Checks (and optionally requests) for audio record permission.

### `is_paused()`

Checks if recording session is paused.

### `is_recording()`

Checks if there's a valid recording session. Note that if the recording session is paused, this method will still return `True`.

### `is_supported_encoder(encoder)`

Checks if the given `encoder` is supported on the current platform.

### `pause()`

Pauses recording session.

### `resume()`

Resumes recording session after pause.

### `seek(position_milliseconds)`

Moves the cursor to the desired position.

### `start_recording(output_path)`

Starts new recording session on the specified `output_path`. On platforms other than web, the `output_path` must be provided.

### `stop_recording()`

Stops recording session and release internal recorder resource. It returns a string which is the location of the recorded file. On web, it returns the blob which could be opened using [`page.lauch_url()`](/docs/controls/page#launch_urlurl). On other platforms, it returns the path to the file which is the `output_path` parameter passed to `start_recording()` method.

## Events

### `on_state_changed`

Fires when audio recorder's state changes. Event's `data` contains one of the following states:

* `"stopped"`
* `"recording"`
* `"paused"`