---
title: PatternFit
sidebar_label: PatternFit
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`PatternFit` enum has the following values:

### `APPEND_DOT`

Uses the pattern exactly, truncating the final dash if it does not fit, or adding a single dot at the last point if the
final dash does not reach the last point (there is a gap at that location)

### `EXTEND_FINAL_DASH`

Uses the pattern exactly, truncating the final dash if it does not fit, or extending the final dash to the last point if
it would not normally reach that point (there is a gap at that location).

### `SCALE_DOWN`

Scale the pattern to ensure it fits an integer number of times into the polyline (smaller version regarding rounding as
compared to `SCALE_UP`).

### `SCALE_UP`

Scale the pattern to ensure it fits an integer number of times into the polyline (bigger version regarding rounding as
compared to `SCALE_DOWN`).

