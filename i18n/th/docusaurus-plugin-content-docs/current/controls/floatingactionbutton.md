---
title: FloatingActionButton
sidebar_label: FloatingActionButton
slug: floatingactionbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A material design floating action button. A floating action button is a circular icon button that hovers over content to promote a primary action in the application.
Floating action button is usually set to `page.floating_action_button`, but can also be added as a regular control at any place on a page.

## Examples

### Basic FAB

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import FloatingActionButton, Page

def main(page: Page):
    # TBD
    pass

flet.app(target=main)
```
  </TabItem>

</Tabs>


## Properties

### `text`

The text displayed on a button.

### `icon`

Icon shown in the button.

### `bgcolor`

Button background color.

### `tooltip`

The text displayed when hovering the mouse over the button.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `content`

A Control representing custom button content.

## Events

### `on_click`

Fires when a user clicks the button.