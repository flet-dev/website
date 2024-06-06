---
title: AudioEncoder
sidebar_label: AudioEncoder
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`AudioEncoder` enum has the following values:

### `AACLC`

MPEG-4 AAC Low complexity. Outputs to MPEG_4 format container.

Recommended file extension: `m4a`.

### `AACELD`

MPEG-4 AAC Enhanced Low Delay. Outputs to MPEG_4 format container.

Recommended file extension: `m4a`.

### `AACHE`

MPEG-4 High Efficiency AAC (Version 2 if available). Outputs to MPEG_4 format container.

Recommended file extension: `m4a`.

### `AMRNB`

The AMR (Adaptive Multi-Rate) narrow band speech. When used, `sample_rate` should be set to `8kHz`. Outputs to 3GP
format container on Android.

Recommended file extension: `3gp`.

### `AMRWB`

The AMR (Adaptive Multi-Rate) wide band speech. When used, `sample_rate` should be set to `16kHz`. Outputs to 3GP format
container on Android.

Recommended file extension: `3gp`.

### `OPUS`

Will output to MPEG_4 format container. SDK 29 on Android and SDK 11 on iOS.

Recommended file extension: `opus`.

### `FLAC`

Free Lossless Audio Codec.

Recommended file extension: `flac`.

### `WAV`

Waveform Audio (pcm16bit with headers).

Recommended file extension: `wav`.

### `PCM16BITS`

Linear PCM 16 bit per sample.

Recommended file extension: `pcm`.

