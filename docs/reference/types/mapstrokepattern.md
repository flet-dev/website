---
title: StrokePattern
sidebar_label: StrokePattern
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`StrokePattern` is a base class for stroke patterns.

The following classes inherit from `StrokePattern`:

### `SolidStrokePattern`

A solid stroke pattern.

### `DashedStrokePattern`

A dash stroke pattern. It has the following properties:

* `segments`: A list of segment lengths, which can be either floats or ints.
* `pattern_fit`: The pattern fit strategy, of type [`PatternFit`](/docs/reference/types/mappatternfit). The default
  value is `PatternFit.SCALE_UP`.

### `DottedStrokePattern`

A dot stroke pattern. It has the following properties:

* `spacing_factor`: The spacing factor between dots, of type `OptionalNumber`.
* `pattern_fit`: The pattern fit strategy, of type [`PatternFit`](/docs/reference/types/mappatternfit). The default
  value is `PatternFit.SCALE_UP`.
