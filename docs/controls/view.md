---
title: View
sidebar_label: View
---

View is the top most container for all other controls.

A root view is automatically created when a new user session started. From layout perspective the View represents
a [`Column`](/docs/controls/column) control, so it has a similar behavior and shares same properties.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Properties

### `appbar`

A [`AppBar`](/docs/controls/appbar) control to display at the top of the Page.

### `auto_scroll`

`True` if scrollbar should automatically move its position to the end when children updated. Must be `False`
for `scroll_to()` to work.

### `bgcolor`

Background [color](/docs/reference/colors) of the view.

### `controls`

A list of `Control`s to display on the Page.

For example, to add a new control to a page:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.controls.append(ft.Text("Hello!"))
page.update()
```

  </TabItem>
</Tabs>

or to get the same result as above using `page.add()` shortcut method:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(ft.Text("Hello!"))
```

  </TabItem>
</Tabs>

To remove the top most control on the page:

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.controls.pop()
page.update()
```

  </TabItem>
</Tabs>

Value is of a list of `Control`s

### `drawer`

A [`NavigationDrawer`](/docs/controls/navigationdrawer) control to display as a panel sliding from the start edge of the view.

### `end_drawer`

A [`NavigationDrawer`](/docs/controls/navigationdrawer) control to display as a panel sliding from the end edge of the view.

### `floating_action_button`

A [`FloatingActionButton`](/docs/controls/floatingactionbutton) control to display on top of Page content.

### `floating_action_button_location`

Describes position of [`floating_action_button`](#floating_action_button)

Value is of type [`FloatingActionButtonLocation`](/docs/controls/floatingactionbutton)

### `fullscreen_dialog`

Whether this view is a full-screen dialog.

In Material and Cupertino, being fullscreen has the effects of making the app bars have a close button instead of a back button. On iOS, dialogs transitions animate differently and are also not closeable with the back swipe gesture.

Value is of type `bool` and defaults to `False`.

### `horizontal_alignment`

How the child Controls should be placed horizontally.

Value is of type [`CrossAxisAlignment`](/docs/reference/types/crossaxisalignment) and defaults
to `CrossAxisAlignment.START`.

### `on_scroll_interval`

Throttling in milliseconds for `on_scroll` event.

Value is of type `int` and defaults to `10`.

### `padding`

A space between page contents and its edges.

Value is of type [`PaddingValue`](/docs/reference/types/aliases#paddingvalue) and defaults to `padding.all(10)`.

### `route`

View's route - not currently used by Flet framework, but can be used in a user program to update [`page.route`](/docs/controls/page#route) when a view popped.

Value is of type `str`

### `scroll`

Enables a vertical scrolling for the Page to prevent its content overflow.

Value is of type [`ScrollMode`](/docs/reference/types/scrollmode).

### `spacing`

Vertical spacing between controls on the Page. Default value is 10 virtual pixels. Spacing is applied only
when `vertical_alignment` is set to `MainAxisAlignment.START`, `MainAxisAlignment.END` or `MainAxisAlignment.CENTER`.

Value is of type [`OptionalNumber`] and defaults to `10`

### `vertical_alignment`

How the child Controls should be placed vertically.

Value is of type [`MainAxisAlignment`](/docs/reference/types/mainaxisalignment) and defaults
to `MainAxisAlignment.START`.

## Methods

### `scroll_to(offset, delta, key, duration, curve)`

Moves scroll position to either absolute `offset`, relative `delta` or jump to the control with specified `key`.

See [`Column.scroll_to()`](/docs/controls/column#scroll_tooffset-delta-key-duration-curve) for method details and examples.

## Events

### `on_scroll`

Fires when scroll position is changed by a user.

Event handler argument is of type [`OnScrollEvent`](/docs/reference/types/onscrollevent).