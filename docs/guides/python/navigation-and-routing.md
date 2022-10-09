---
title: Navigation and routing
sidebar_label: Navigation and routing
---

Navigation and routing is an essential feature of Single Page Applications (SPA) which allows organizing application user interface into virtual pages (views) and "navigate" between them while application URL reflects the current state of the app.

For mobile apps navigation and routing serves as a [deep linking](https://docs.flutter.dev/development/ui/navigation/deep-linking) to specific application parts.

Well, it took [more efforts](https://github.com/flet-dev/flet/pull/95/files) than expected to add navigation and routing into Flet as the implementation is based on [Navigator 2.0](https://medium.com/flutter/learning-flutters-new-navigation-and-routing-system-7c9068155ade) Flutter API and required to replace Flet's "Page" abstraction with "Page and Views". Flutter's newer navigation and routing API has substantial improvements such as:

1. Programmatic control over history stack.
2. An easy way to intercept a call to "Back" button in AppBar.
3. Robust synchronization with browser history.

<img src="/img/docs/navigation-routing/routing-app-example.gif"className="screenshot-60" />

Explore [source code](https://github.com/flet-dev/examples/blob/main/python/apps/routing-navigation/building-views-on-route-change.py) of the example above.

## Page route

Page route is a portion of application URL after `#` symbol:

<img src="/img/docs/navigation-routing/page-address-route.png"className="screenshot-50" />

Default application route, if not set in application URL by the user, is `/`. All routes start with `/`, for example `/store`, `/authors/1/books/2`.

Application route can be obtained by reading `page.route` property, for example:

```python
import flet
from flet import Page, Text

def main(page: Page):
    page.add(Text(f"Initial route: {page.route}"))

flet.app(target=main, view=flet.WEB_BROWSER)
```

Grab application URL, open a new browser tab, paste the URL, modify its part after `#` to `/test` and hit enter. You should see "Initial route: /test".

Every time the route in the URL is changed (by editing the URL or navigating browser history with Back/Forward buttons) Flet calls `page.on_route_change` event handler:

```python
import flet
from flet import Page, Text

def main(page: Page):
    page.add(Text(f"Initial route: {page.route}"))

    def route_change(route):
        page.add(Text(f"New route: {route}"))

    page.on_route_change = route_change
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```

Now try updating URL hash a few times and then use Back/Forward buttons! You should see a new message added to a page each time the route changes:

<img src="/img/docs/navigation-routing/page-route-change-event.gif"className="screenshot-60" />

Route can be changed programmatically, by updating `page.route` property:

```python
import flet
from flet import ElevatedButton, Page, Text

def main(page: Page):
    page.add(Text(f"Initial route: {page.route}"))

    def route_change(route):
        page.add(Text(f"New route: {route}"))

    def go_store(e):
        page.route = "/store"
        page.update()

    page.on_route_change = route_change
    page.add(ElevatedButton("Go to Store", on_click=go_store))

flet.app(target=main, view=flet.WEB_BROWSER)
```

Click "Go to Store" button and you'll see application URL is changed and a new item is pushed in a browser history. You can use browser "Back" button to navigate to a previous route.

## Page views

Flet's [Page](/docs/controls/page) now is not just a single page, but a container for [View](/docs/controls/view) layered on top of each other like a sandwich:

<img src="/img/docs/navigation-routing/page-views.svg" className="screenshot-100" />

A collection of views represents navigator history. Page has [`page.views`](/docs/controls/page#views) property to access views collection.

The last view in the list is the one currently displayed on a page. Views list must have at least one element (root view).

To simulate a transition between pages change `page.route` and add a new `View` in the end of `page.view` list.

Pop the last view from the collection and change route to a "previous" one in [`page.on_view_pop`](/docs/controls/page#on_view_pop) event handler to go back.

## Building views on route change

To build a reliable navigation there must be a single place in the program which builds a list of views depending on the current route. Other words, navigation history stack (represented by the list of views) must be a function of a route.

This place is [`page.on_route_change`](/docs/controls/page#on_route_change) event handler.

Let's put everything together into a complete example which allows navigating between two pages:

```python
import flet
from flet import AppBar, ElevatedButton, Page, Text, View, colors

def main(page: Page):
    page.title = "Routes Example"

    def route_change(route):
        page.views.clear()
        page.views.append(
            View(
                "/",
                [
                    AppBar(title=Text("Flet app"), bgcolor=colors.SURFACE_VARIANT),
                    ElevatedButton("Visit Store", on_click=lambda _: page.go("/store")),
                ],
            )
        )
        if page.route == "/store":
            page.views.append(
                View(
                    "/store",
                    [
                        AppBar(title=Text("Store"), bgcolor=colors.SURFACE_VARIANT),
                        ElevatedButton("Go Home", on_click=lambda _: page.go("/")),
                    ],
                )
            )
        page.update()

    def view_pop(view):
        page.views.pop()
        top_view = page.views[-1]
        page.go(top_view.route)

    page.on_route_change = route_change
    page.on_view_pop = view_pop
    page.go(page.route)


flet.app(target=main, view=flet.WEB_BROWSER)
```

Try navigating between pages using "Visit Store" and "Go Home" buttons, Back/Forward browser buttons, manually changing route in the URL - it works no matter what! :)

:::note
To "navigate" between pages we used [`page.go(route)`](/docs/controls/page#goroute) - a helper method that updates [`page.route`](/docs/controls/page#route), calls [`page.on_route_change`](/docs/controls/page#on_route_change) event handler to update views and finally calls `page.update()`.
:::

Notice the usage of [`page.on_view_pop`](/docs/controls/page#on_view_pop) event handler. It fires when the user clicks automatic "Back" button in [`AppBar`](/docs/controls/appbar) control. In the handler we remove the last element from views collection and navigate to view's root "under" it.

## Route templates

Flet offers [`TemplateRoute`](https://github.com/flet-dev/flet/blob/main/sdk/python/flet/template_route.py) - an utility class based on [repath](https://github.com/nickcoutsos/python-repath) library which allows matching ExpressJS-like routes and parsing their parameters, for example `/account/:account_id/orders/:order_id`.

`TemplateRoute` plays great with route change event:

```python
troute = TemplateRoute(page.route)

if troute.match("/books/:id"):
    print("Book view ID:", troute.id)
elif troute.match("/account/:account_id/orders/:order_id"):
    print("Account:", troute.account_id, "Order:", troute.order_id)
else:
    print("Unknown route")
```

You can read more about template syntax supported by `repath` library [here](https://github.com/nickcoutsos/python-repath#parameters).

## URL strategy for web

Flet web apps support two ways of configuring URL-based routing:

* **Hash** (default) - paths are read and written to the [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax). For example, `fletapp.dev/#/path/to/view`.
* **Path** - paths are read and written without a hash. For example, `fletapp.dev/path/to/view`.

To change URL strategy use `route_url_strategy` paremeter of `flet.app()` method, for example:

```python
flet.app(target=main, route_url_strategy="path")
```

URL strategy for Flet Server can be configured with `FLET_ROUTE_URL_STRATEGY` environment variable which could be set to either `path` or `hash` (default).

## Querystring

You can use querystrings in URLs to request and response data. QueryString object is directly built in Page object so no additional imports needed.
Building querystring parser made some changes with old methods and added new ones.

### Changes with old methods

`go` method of `Page` object now supports `**kwargs` arguments. You can pass key-value pairs to `go` method after the url to receive result like this: `...some_path/?name=John&surname=Doe`


* Example:

```python
page.go("/products/", "id" = 5, "name_startswith" = "g")
```

* Result: `https://www.localhost/products/?id=5&name_startswith=g`


### New methods for querystring parsing

* page.query.get(key: str)
* page.query.to_dict
* page.query.path

#### Examples for new methods

Lets say we have a URL structure like this

`https://www.localhost/products/?id=5&name_startswith=g`

Example:

```python
page.query.get('id')
```

* Result: `5`

Example:

```python
page.query.to_dict
```

* Result: `{"id": 5, "name_startswith": "g"}`

Example:

```python
page.query.path
```

* Result: `'/products/'`

### Sample Project
```python
import flet
from flet import *
import sqlite3


class Db:
    def __init__(self):
        self.conn = sqlite3.connect("example.db", check_same_thread=False)
        self.c = self.conn.cursor()
        self.c.execute(
            """
                       CREATE TABLE IF NOT EXISTS users(
                           id INT PRIMARY KEY,
                           name TEXT
                       )
                       """
        )

    def get_user_by_id(self, user_id: int) -> str:
        self.c.execute(f"SELECT name FROM users WHERE id = {user_id}")
        return [self.c.fetchone()[0]]

    def get_user_by_start_with(self, start: str) -> str:
        self.c.execute(f"SELECT name FROM users WHERE name LIKE '{start}%'")
        return [i[0] for i in self.c.fetchall()]


def main(page: Page):
    """
    For example, lets say we want to get users from a database whose name starts with a particular letter.
    """
    db = Db()

    def query_data(e):
        if page.query.path == "/users/":
            start_with = page.query.get("startswith")
            for i in db.get_user_by_start_with(start_with):
                page.add(Text(i))

    page.add(Text("Hello"))
    page.on_route_change = query_data


flet.app(target=main, view=flet.WEB_BROWSER)

```

<img src="/img/blog/querystring/querystring_get_data_from_db.gif" />

