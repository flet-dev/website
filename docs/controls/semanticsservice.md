---
title: SemanticsService
sidebar_label: SemanticsService
---

Allows access to the platform's accessibility services.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Methods

### `announce_message(message, rtl, assertiveness)`

Sends a semantic announcement with the given `message`. This should preferably be used for announcement that are not seamlessly announced by the system as a result of a UI state change.

`rtl` is a boolean and indicates the text direction of the `message`.

The `assertiveness` level of the announcement is only supported by the web engine and has no effect on other platforms. Value is an `Assertiveness` enum and can either be `Assertiveness.ASSERTIVE` or `Assertiveness.POLITE` (default).

Defaults to `False`.

### `announce_tooltip(message)`

Sends a semantic announcement of a tooltip. Currently honored on Android only. The provided `message` will be read by TalkBack.
