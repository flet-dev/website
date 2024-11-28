---
title: PageTransitionsTheme
sidebar_label: PageTransitionsTheme
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Allows customizing navigation page transitions for different platforms.

#### `android`

The transition to be used on Android platforms. 

Value is of type [`PageTransitionTheme`](/docs/reference/types/pagetransitiontheme) and defaults to `PageTransitionTheme.FADE_UPWARDS`.

#### `ios`

The transition to be used on iOS platforms. 

Value is of type [`PageTransitionTheme`](/docs/reference/types/pagetransitiontheme) and defaults to `PageTransitionTheme.CUPERTINO`.

#### `macos`

The transition to be used on macOS platforms. 

Value is of type [`PageTransitionTheme`](/docs/reference/types/pagetransitiontheme) and defaults to `PageTransitionTheme.ZOOM`.

#### `linux`

The transition to be used on Linux platforms.

Value is of type [`PageTransitionTheme`](/docs/reference/types/pagetransitiontheme) and defaults to `PageTransitionTheme.ZOOM`.

#### `windows`

The transition to be used on Windows platforms. 

Value is of type [`PageTransitionTheme`](/docs/reference/types/pagetransitiontheme) and defaults to `PageTransitionTheme.ZOOM`.

## Usage Example

```python
page.theme = ft.Theme(
    page_transitions=ft.PageTransitionsTheme(
        android=ft.PageTransitionTheme.OPEN_UPWARDS,
        ios=ft.PageTransitionTheme.CUPERTINO,
        macos=ft.PageTransitionTheme.FADE_UPWARDS,
        linux=ft.PageTransitionTheme.ZOOM,
        windows=ft.PageTransitionTheme.NONE
    )
)
```