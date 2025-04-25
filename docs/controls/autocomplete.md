---
title: AutoComplete
sidebar_label: AutoComplete
---

Helps the user make a selection by entering some text and choosing from among a list of suggestions.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/autocomplete)

### Basic example



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/auto-complete/auto-complete-example.py
```


<img src="/img/docs/controls/autocomplete/autocomplete-example.gif" className="screenshot-40"/>

## Properties

### `selected_index`

The index of the selected suggestion in the list of `suggestions`.

This property is read-only and `None` at initialization, until a suggestion is selected for the first time.

Valule is of type `int`.

### `suggestions`

A list of [`AutoCompleteSuggestion`](/docs/reference/types/autocompletesuggestion) controls representing the suggestions to be displayed. 

**Note:**

- The internal filtration process of the suggestions (based on their `key`s) with respect to the user's input is case-insensitive because the comparison is done in lowercase.
- A valid `AutoCompleteSuggestion` must have at least a `key` or `value` specified, else it will be ignored. If only `key` is provided, `value` will be set to `key` as fallback and vice versa.

### `suggestions_max_height`

The maximum - visual - height of the suggestions list.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber) and defaults to `200`.

## Events

### `on_select`

Fires when a suggestion is selected.

Event handler is of type [`AutoCompleteSelectEvent`](/docs/reference/types/autocompleteselectevent).
