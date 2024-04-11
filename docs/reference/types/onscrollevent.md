---
title: OnScrollEvent
sidebar_label: OnScrollEvent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`OnScrollEvent` class has the following properties:

* `event_type` (str) - type of the scroll event:
  * `start` - control has started scrolling;
  * `update` - control has changed its scroll position;
  * `end` - control has stopped scrolling;
  * `user` - user has changed the direction in which they are scrolling;
  * `over` - control has not changed its scroll position because the change would have caused its scroll position to go outside its scroll bounds;
* `pixels` (float) - The current scroll position, in logical pixels.
* `min_scroll_extent` (float) - The minimum in-range value for `pixels`.
* `max_scroll_extent` (float) - The maximum in-range value for `pixels`.
* `viewport_dimension` (float) - The extent of the viewport.
* `scroll_delta` (float) - The distance by which the scrollable was scrolled, in logical pixels. Set for `update` events only.
* `direction` (str) - The direction in which the user is scrolling: `idle`, `forward`, `reverse`. Set for `user` events only.
* `overscroll` (float) - The number of logical pixels that the scrollable avoided scrolling. Set for `over` events only.
* `velocity` (float) - The velocity at which the ScrollPosition was changing when this overscroll happened. Set for `over` events only.