---
title: AppLifecycleState
sidebar_label: AppLifecycleState
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### `DETACH`

The application has exited, and detached all host views from the engine.

This callback is only called on iOS and Android.

### `HIDE`

The application is hidden.

On mobile platforms, this is usually just before the application is replaced by another application in the foreground.

On desktop platforms, this is just before the application is hidden by being minimized or otherwise hiding all views of the application.

On the web, this is just before a window (or tab) is hidden.

### `INACTIVE`

The application loses input focus.

On mobile platforms, this can be during a phone call or when a system dialog is visible.

On desktop platforms, this is when all views in an application have lost input focus but at least one view of the application is still visible.

On the web, this is when the window (or tab) has lost input focus.

### `PAUSE`

The application is paused.

On mobile platforms, this happens right before the application is replaced by another application.

On desktop platforms and the web, this function is not called.

### `RESTART`

The application is resumed after being paused.

On mobile platforms, this happens just before this application takes over as the active application.

On desktop platforms and the web, this function is not called.

### `RESUME`

The application gains input focus. Indicates that the application is entering a state where it is visible, active, and accepting user input.

### `SHOW`

The application is shown.

On mobile platforms, this is usually just before the application replaces another application in the foreground.

On desktop platforms, this is just before the application is shown after being minimized or otherwise made to show at least one view of the application.

On the web, this is just before a window (or tab) is shown.




