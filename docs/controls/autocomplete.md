---
title: AutoComplete
sidebar_label: AutoComplete
---

Helps the user make a selection by entering some text and choosing from among a list of suggestions.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/imput/autocomplete)

### Basic example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.AutoComplete(
            suggestions=[
                ft.AutoCompleteSuggestion(key="one 1", value="One"),
                ft.AutoCompleteSuggestion(key="two 2", value="Two"),
                ft.AutoCompleteSuggestion(key="three 3", value="Three"),
            ],
            on_select=lambda e: print(e.control.selected_index, e.selection),
        )
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/autocomplete/autocomplete-example.gif" className="screenshot-40"/>

## Properties

### `selected_index`

The index of the selected suggestion in the list of `suggestions`.

This property is read-only and `None` at initialization, until a suggestion is selected for the first time.

### `suggestions`

A list of [`AutoCompleteSuggestion`](/docs/reference/types/autocompletesuggestion) controls representing the suggestions to be displayed. 

**Note:**

- The internal filtration process of the suggestions (based on their `key`s) with respect to the user's input is case-insensitive because the comparison is done in lowercase.
- A valid `AutoCompleteSuggestion` must have at least a `key` or `value` specified, else it will be ignored. If only `key` is provided, `value` will be set to `key` as fallback and vice versa.

### `suggestions_max_height`

The maximum - visual - height of the suggestions list.

Defaults to `200`.

## Events

### `on_select`

Fires when a suggestion is selected.

The event handler is of type `AutoCompleteSelectEvent` with the following properties:

- `selection`: the selected [`AutoCompleteSuggestion`](/docs/reference/types/autocompletesuggestion) from the list of `suggestions`.

