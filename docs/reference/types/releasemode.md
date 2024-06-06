---
title: ReleaseMode
sidebar_label: ReleaseMode
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`ReleaseMode` enum has the following values:

### `LOOP`

Keeps buffered data and plays again after completion, creating a loop. Notice that calling stop method is not enough to
release the resources when this mode is being used.

### `RELEASE`

Releases all resources, just like calling [`Audio.release()`](/docs/controls/audio#release) method. In Android, the
media player is quite resource-intensive, and this will let it go. Data will be buffered again when needed (if it's a
remote file, it will be downloaded again). In iOS and macOS, works just like `stop()` method.

### `STOP`

Stops audio playback but keep all resources intact. Use this if you intend to play again later.
