---
title: AutofillGroup
sidebar_label: AutofillGroup
---

Groups autofillable controls such as [`TextField`](/docs/controls/textfield)
or [`CupertinoTextField`](/docs/controls/cupertinotextfield).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/autofillgroup)

### Basic example



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/autofill-group/autofill-example.py
```

<img src="/img/docs/controls/autofillgroup/autofillgroup-example.gif" className="screenshot-40"/>

## Properties

### `content`

The content control of this group.

Value is of type `Control`.

### `dispose_action`

The action to be run when this `AutofillGroup` is the topmost `AutofillGroup` and it's being disposed, in order to clean
up the current autofill context.

Value is of type [`AutofillGroupDisposeAction`](/docs/reference/types/autofillgroupdisposeaction) and defaults
to `AutofillGroupDisposeAction.COMMIT`.
