---
title: LocaleConfiguration
sidebar_label: LocaleConfiguration
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### `current_locale`

The current locale to be used in the application. 
If the provided value is not present in `supported_locales`, then this property will be set to the first item of `supported_locales` (aka `supported_locales[0]`).

Value is of type [`Locale`](/docs/reference/types/locale).

### `supported_locales`

A list of [`Locale`](/docs/reference/types/locale)s that the app plans to support. If the provided value is `None` or list is empty, this property internally defaults to `[Locale("en", "US")]` (American English locale).

Value is of type `List[Locale]`.