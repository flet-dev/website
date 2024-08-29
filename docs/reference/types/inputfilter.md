---
title: InputFilter
sidebar_label: InputFilter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Prevents the insertion of characters matching (or not matching) a particular pattern(`regex_string`), by replacing the characters with the given `replacement_string`.

`InputFilter` class takes 3 parameters: 

### `allow`

A boolean value indicating whether to allow or deny/block the matched patterns. 

Value is of type `bool` and defaults to `True`.

### `case_sensitive`

Whether this regular expression is case sensitive.

If the regular expression is not case sensitive, it will match an input letter with a pattern letter even if the two letters are different case versions of the same letter.

### `dot_all`

Whether "." in this regular expression matches line terminators.

When false, the "." character matches a single character, unless that character terminates a line. When true, then the "." character will match any single character including line terminators.

This feature is distinct from `multiline`. They affect the behavior of different pattern characters, so they can be used together or separately.

### `multiline`

Whether this regular expression matches multiple lines.

If the regexp does match multiple lines, the "^" and "$" characters match the beginning and end of lines. If not, the characters match the beginning and end of the input.

### `regex_string`

A regular expression pattern for the filter.

It is recommended to use raw strings (prefix your string with `r`) for the pattern, ex: `r"pattern"`.

### `replacement_string`

A string used to replace banned/denied patterns. Defaults to an empty string.

### `unicode`

Whether this regular expression uses Unicode mode.

## Predefined input filters

### `NumbersOnlyInputFilter()`

Allows only numbers.

### `TextOnlyInputFilter()`

Allows only text.

## Usage example

```python
ft.CupertinoTextField(
    placeholder_text="Only numbers are allowed",
    input_filter=ft.InputFilter(allow=True, regex_string=r"^[0-9]*$", replacement_string="")
)
```

```python
ft.TextField(
    label="Only letters are allowed",
    input_filter=ft.TextOnlyInputFilter()
)
```