---
title: InputFilter
sidebar_label: InputFilter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Prevents the insertion of characters matching (or not matching) a particular pattern(`regex_string`), by replacing the characters with the given `replacement_string`.

`InputFilter` class takes 3 parameters: 

### `regex_string`

A regular expression pattern for the filter

### `allow`

A boolean value indicating whether to allow or deny/block the matched patterns. Defaults to `True`

### `replacement_string`

A string used to replace banned/denied patterns. Defaults to an empty string.

## Predefined input filters

### `NumbersOnlyInputFilter()`

Allows only numbers.

### `TextOnlyInputFilter()`

Allows only text.

## Usage example

```python
ft.CupertinoTextField(
    placeholder_text="Only numbers are allowed :)",
    input_filter=ft.InputFilter(allow=True, regex_string=r"[0-9]", replacement_string=""),
)
```

```python
ft.TextField(
    label="Only numbers are allowed :)",
    input_filter=ft.InputFilter(allow=True, regex_string=r"[0-9]", replacement_string=""),
    # input_filter=ft.NumbersOnlyInputFilter()
)
```