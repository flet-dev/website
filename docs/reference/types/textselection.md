---
title: TextSelection
sidebar_label: TextSelection
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`TextSelection` has the following properties:

### `affinity`

If the text range is collapsed and has more than one visual location (e.g., occurs at a line break), which of the two locations to use when painting the caret.

Value is of type [`TextAffinity`](/docs/reference/types/textaffinity).

### `base_offset`

The offset at which the selection originates.

Value is of type `int`.

### `collapsed`

Whether this range is empty (but still potentially placed inside the text).

Value is of type `bool`.

### `directional`

Whether this selection has disambiguated its base and extent.

Value is of type `bool`.

### `end`

The next index after the characters in this range.

Value is of type `int`.

### `extent_offset`

The offset at which the selection terminates.

### `normalized`

Whether the start of this range precedes the end.

Value is of type `bool`.

### `selection`

The text string that is selected.

Value is of type `str`.

### `start`

The index of the first character in the range.

Value is of type `int`.

### `valid`

Whether this range represents a valid position in the text.

Value is of type `bool`.
