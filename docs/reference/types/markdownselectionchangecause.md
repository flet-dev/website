---
title: MarkdownSelectionChangeCause
sidebar_label: MarkdownSelectionChangeCause
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Deprecated in v0.25.0 and will be removed in v0.28.0. Use [`TextSelectionChangeCause`](/docs/reference/types/textselectionchangecause)
instead.**

`MarkdownSelectionChangeCause` enum has the following values:

### `DOUBLE_TAP`

The user tapped twice in quick succession on the text and that caused the selection (or the location of the cursor) to change.

### `DRAG`

The user used the mouse to change the selection by dragging over a piece of text.

### `FORCE_PRESS`

The user force-pressed the text and that caused the selection (or the location of the cursor) to change.

### `KEYBOARD`

The user used the keyboard to change the selection or the location of the cursor.

Keyboard-triggered selection changes may be caused by the IME as well as by accessibility tools (e.g. TalkBack on Android).

### `LONG_PRESS`

The user long-pressed the text and that caused the selection (or the location of the cursor) to change.

### `SCRIBBLE`

The user used iPadOS 14+ Scribble to change the selection.

### `TAP`

The user tapped on the text and that caused the selection (or the location of the cursor) to change.

### `TOOLBAR`

The user used the selection toolbar to change the selection or the location of the cursor.

An example is when the user taps on select all in the tool bar.

### `UNKNOWN`

The cause of the selection change is unknown or could not be determined.

