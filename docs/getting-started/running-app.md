---
title: Running Flet app
---

Running Flet app is easy...

```
poetry run flet run -d -r dashboard/main.py
```

`.venv` or Poetry?

file structure
loading classes/modules inside the same project



a note about hot reload.

...ends with a call to `flet.app()` where the app starts waiting for new user sessions. Function `main()` is an entry point in a Flet application. It's being called on a new thread for every user session with a `Page` instance passed into it. When running Flet app in the browser a new user session is started for every opened tab or page. When running as a desktop app there is only one session created.

`Page` is like a "canvas" specific to a user, a visual state of a user session. To build an application UI you add and remove controls to a page, update their properties. Code sample above will be displaying just a blank page to every user.