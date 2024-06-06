---
title: AutofillGroup
sidebar_label: AutofillGroup
---

Groups autofillable controls such as [`TextField`](/docs/controls/textfield)
or [`CupertinoTextField`](/docs/controls/cupertinotextfield).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/imput/autofillgroup)

### Basic example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.AutoFillGroup(
            ft.Column(
                controls=[
                    ft.TextField(
                        label="Name",
                        autofill_hints=ft.AutoFillHint.NAME,
                    ),
                    ft.TextField(
                        label="Email",
                        autofill_hints=[ft.AutoFillHint.EMAIL],
                    ),
                    ft.TextField(
                        label="Phone Number",
                        autofill_hints=[ft.AutoFillHint.TELEPHONE_NUMBER],
                    ),
                    ft.TextField(
                        label="Street Address",
                        autofill_hints=ft.AutoFillHint.FULL_STREET_ADDRESS,
                    ),
                    ft.TextField(
                        label="Postal Code",
                        autofill_hints=ft.AutoFillHint.POSTAL_CODE,
                    ),
                ]
            )
        )
    )

ft.app(main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/autofillgroup/autofillgroup-example.gif" className="screenshot-40"/>

## Properties

### `content`

The content control of this group.

### `dispose_action`

The action to be run when this `AutofillGroup` is the topmost `AutofillGroup` and it's being disposed, in order to clean
up the current autofill context.

Value is of type [`AutofillGroupDisposeAction`](/docs/reference/types/autofillgroupdisposeaction) and defaults
to `AutofillGroupDisposeAction.COMMIT`.
