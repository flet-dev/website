---
slug: introducing-declarative-ui-in-flet
title: Introducing Declarative UI in Flet
authors: feodor
tags: [news]
---

The goal of Flet 1.0 is not just "facelifting" the framework, but to enable Python developers writing real production-grade apps that scale from a few screens to hundreds of pages, views, dialogs.

While we were "dogfooding" Flet to ourselves and writing Flet apps, such as Flet app for mobiles or control gallery, it become clear it's increasingly hard to build a more complex app with the current "imperative" approach.

In Flet 1.0 we introduce, along with existing imperative, the new declrative approach of writing scalable apps inspired by frameworks such as React, SwiftUI and Jetpack Compose.

<!-- truncate -->

## What is imperative UI

Imperative UI is when you tell the framework *exactly how* to build and update the interface step by step. You manipulate the UI directly — create controls, change their properties, insert or remove them in response to user actions.

For example, in an imperative style you might write:

> “Create a button, then when it's clicked, change the label's text and move it below the image.”

```py
left_column.visible = False
right_column.visible = True
right_column.controls.append(ft.Text("Complete!"))
```

Flet has been a proponent of imperative UI from the beginning and we still believe imperative UI is a valid and straightforward approach, good for small apps and which can be easily understood by developers without frontend experience.

The problem with imperative approach though is that app's state, logic and UI are all kept together. You have to constantly synchronize app state and all UI elements that depend on this state, e.g. add a new user to a `list` - add a corresponding `ft.Row` control displaying that user record. When your app grows the number of places which should be syncronized with the state grows exponentially.

## What is declarative UI

The declarative approach means you describe *what* the UI should look like for a given state, not how to build or update it. Instead of manually creating, changing, or removing controls, you write a function that returns the UI structure based on current data — and the framework figures out the minimal updates needed to make it real.

In other words, your UI becomes a *pure expression of state*: whenever the state changes, the framework re-renders the view so it always stays consistent.

```
UI = f(state)
```

This makes code simpler, predictable, and easier to reason about.

## Declarative Hello World

Here's a simple declarative "Hello, world" Flet app:

```py
import flet as ft

def App():
    return ft.Text("Hello, world!")

ft.run(lambda page: page.render(App))
```

Your app must be declarative from "top to bottom", similar to async apps - it should be async all the way. There is a new bootstrap method for that `page.render()`.

For clarity, without lambdas, the code could be re-written as:

```py
@ft.component
def App():
    return ft.Text("Hello, Flet!")

def main(page: ft.Page):
    page.render(App)

ft.run(main) # as before
```

This app does nothing interesting - it just displays the same message and does not respond to user actions in anyway.

## Declarative Counter

Here's a simple declarative "counter" Flet app:

```py
import flet as ft

@ft.component
def App():
    count, set_count = ft.use_state(0)

    return ft.Row(
        controls=[
            ft.Text(value=f"{count}"),
            ft.Button("Add", on_click=lambda: set_count(count + 1)),
        ],
    )

ft.run(lambda page: page.render(App))
```

[SCREENSHOT]

There are new things you may notice: `@component` decorator and `use_state()` method (aka "hook") - we will explain them later.

The point of this example is that there is `App` function, which is "component", that returns a new UI (`Row`) every time app's state changed. 

## Components

In Flet's declarative approach, a component is simply a **reusable function** that describes a piece of UI as a function of state.

You can think of it as a self-contained unit that takes inputs (properties, data, event handlers) and returns Flet controls — like `Column`, `Text`, `Button`, etc. Every time its inputs or internal state change, the component re-builds its UI, and Flet automatically updates only the changed parts.

Example:

```py
@ft.component
def Counter(value, on_increment):
    return ft.Row([
        ft.Text(f"Count: {value}"),
        ft.Button("Increment", on_click=on_increment)
    ])
```

You use `@component` decorator to mark a function as a "component".

### Controls vs Components

A **control** is a UI element — the basic building block rendered on screen.
It's a concrete thing like a `Text`, `Button`, `Row`, or `Column`. Controls have properties (e.g., `text`, `color`, `alignment`) and can contain child controls.

Example:

```py
ft.Text("Hello")
ft.Button("Click me")
ft.Column([ft.Text("A"), ft.Text("B")])
```

A **component** is a *piece of logic that builds and returns controls*.
It's not rendered directly — instead, it describes how to create controls based on inputs or state.
Components let you group logic, reuse UI patterns, and define your own higher-level abstractions.

Example:

```py
def Greeting(name):
    return ft.Text(f"Hello, {name}!")
```

Here `Greeting()` is a component, and `ft.Text` is a control.
You can combine controls inside components, and combine components to form bigger ones — but only controls end up in the final UI tree that Flet renders.

## Hooks

Hooks are lightweight functions that let components **store state**, **react to lifecycle events**, or **access shared context** — all without writing classes or managing manual state objects.

Example:

```py
@ft.component
def Counter():
    count, set_count = ft.use_state(0)

    return ft.Row(
        controls=[
            ft.Text(value=f"{count}"),
            ft.Button("Add", on_click=lambda: set_count(count + 1)),
        ],
    )
```

Here:

* The `Counter()` component looks like a simple function.
* But `use_state(0)` gives it persistent state.
* When `set_count()` is called, Flet re-runs the component, re-rendering only what changed.

To better understand what hooks are (in OOP analogy), imagine the `Counter` is a class, not a function. Then in a pseudo-code the example above could be re-written like:

```py
class Counter(Component):
    count: state(0)

    def build(self):
        return Row(...)
```

Here, `count` is a field that holds the current counter state. So, hooks is basically a smart way to add state and behavior into functional, stateless-looking components. The idea is not unique to Flet and was borrowed from React.

Flet offers the following built-in hooks:

* `use_state` - Store local state across rebuilds.
* `use_effect` - Run side effects when something changes.
* `use_context` - Access shared data or services.
* `use_memo` - Memoize computed values.*

## Observable

Observable is what makes declarative approach really easy to understand and use to first-comers compared to a pure React. You can find observable in frameworks such SolidJS, SwiftUI, Jetpack Compose.

TBD

## Examples

https://github.com/flet-dev/flet/tree/main/sdk/python/examples/apps/declarative

## Call to action

Try declarative approach and let us know what you think

Flet 1.0 Beta release