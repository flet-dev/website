---
title: TextDecoration
sidebar_label: TextDecoration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`TextDecoration` enum has the following values:

### `NONE`

Do not draw a decoration.

### `LINE_THROUGH`

Draw a line through each line of text.

### `OVERLINE`

Draw a line above each line of text.

### `UNDERLINE`

Draw a line underneath each line of text.

## Usage Example

The enum is a flag, so multiple decorations can be combined together as follows:

```python
style = ft.TextStyle(decoration=ft.TextDecoration.UNDERLINE | ft.TextDecoration.OVERLINE)
```