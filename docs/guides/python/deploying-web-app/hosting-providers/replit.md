---
title: Replit
sidebar_label: Replit
slug: replit
---

[Replit](https://replit.com/) is an online IDE and hosting platform for web apps written in any language. Their free tier allows running any number of apps with some performance limitations.

To run your app on Replit:

* [Sign up](https://replit.com/signup?from=landing) on Replit.
* Click "New Repl" button, select "Python" template and type the name of your repl, e.g. `my-flet-app`. Alternatively, go to [Flet template](https://replit.com/@fletdev/Flet) page and click **Use Template** button. Flet template has everything configured for you, so you can jump to `main.py` and update your program right away.
* On "Files" pane click <img src="/img/docs/getting-started/more-vert-icon.svg" className="icon-button" /> button and then "Show hidden files":

  <img src="/img/docs/hosting-replit/replit-show-hidden-files.png" className="screenshot-30 screenshot-rounded"/>

* Open `.replit` file on the left, scroll to `[packager.features]` section and set `guessImports` to `false`:

  <img src="/img/docs/hosting-replit/replit-disable-guess-imports.png" className="screenshot-60 screenshot-rounded"/>

* On "Tools" pane click "Packages" and search for `flet` package and click "Install" button.
* Open `main.py` on "Files" pane and copy-paste your app.
* Modify call to `ft.app()` and include `view=ft.AppView.WEB_BROWSER` parameter:

```python
ft.app(main, view=ft.AppView.WEB_BROWSER)
```

* Run the app. Enjoy.

  <img src="/img/docs/hosting-replit/replit-running-app.png" className="screenshot-80 screenshot-rounded"/>