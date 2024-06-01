---
title: OnScrollEvent
sidebar_label: OnScrollEvent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`OnScrollEvent` class has the following properties:

### `direction`

The direction in which the user is scrolling. Has a value only when `event_type="user"`.

Can be one of the following:
  * `"idle"`
  * `"forward"`
  * `"reverse"` 

### `event_type`

A string representing the type of the scroll event that occurred. Can be one of the following:
  * `"start"` - control has started scrolling;
  * `"update"` - control has changed its scroll position;
  * `"end"` - control has stopped scrolling;
  * `"user"` - user has changed the direction in which they are scrolling;
  * `"over"` - control has not changed its scroll position because the change would have caused its scroll position to go outside its scroll bounds.

### `pixels`

The current scroll position, in logical pixels.

### `min_scroll_extent`

The minimum in-range value for `pixels`.

### `max_scroll_extent`

The maximum in-range value for `pixels`.

### `viewport_dimension`

The extent of the viewport.

### `scroll_delta`

The distance by which the scrollable was scrolled, in logical pixels. Has a value only when `event_type="update"`.

### `overscroll`

The number of logical pixels that the scrollable avoided scrolling. Has a value only when `event_type="over"`.

### `velocity`

The velocity at which the ScrollPosition was changing when this overscroll happened. Has a value only when `event_type="over"`.
