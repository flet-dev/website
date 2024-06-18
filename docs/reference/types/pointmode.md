---
title: PointMode
sidebar_label: PointMode
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`PointMode` enum has the following values:

### `LINES`

Draw each sequence of two points as a line segment. If the number of points is odd, then the last point is ignored. The
lines are stroked as described by the `Paint` (ignoring `Paint.style`).

### `POINTS`

Draw each point separately. If the `Paint.stroke_cap` is `StrokeCap.ROUND`, then each point is drawn as a circle with
the diameter of the `Paint.stroke_width`, filled as described by the `Paint` (ignoring `Paint.style`). Otherwise, each
point is drawn as an axis-aligned square with sides of length `Paint.stroke_width`, filled as described by the `Paint` (
ignoring `Paint.style`).`

### `POLYGON`

Draw the entire sequence of point as one line. The lines are stroked as described by the `Paint` (
ignoring `Paint.style`).
