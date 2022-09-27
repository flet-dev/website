---
slug: user-authentication
title: User authentication
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

import TOCInline from '@theme/TOCInline';

User authentication in Flet is here! 🔐🎉

It allows you to ...

This release is not just about authentication, but it adds a bunch of accompaning functionality:

<TOCInline toc={toc} maxHeadingLevel={2} />

## Authentication

[More info](/docs/guides/python/authentication)

## Client storage

[More info](/docs/guides/python/client-storage)

## Session storage

[More info](/docs/guides/python/session-storage)

## Encryption API

[More info](/docs/guides/python/encrypting-sensitive-data)

## Other improvements and bug fixes

* SVG images support. [`Image.color`](/docs/controls/image#color), [`Image.color_blend_mode`](/docs/controls/image#color_blend_mode), [`Image.semantics_label`](/docs/controls/image#semantics_label) properties.
* [`on_animation_end` callback](/docs/guides/python/animations#animation-end-callback).
* [`Container.clip_behavior` property](/docs/controls/container#clip_behavior).
* [`page.window_bgcolor`](/docs/controls/page#window_bgcolor):

Use together with `page.bgcolor` to make a window transparent:

```python
import flet
from flet import ElevatedButton, Page, colors
def main(page: Page):
    page.window_bgcolor = colors.TRANSPARENT
    page.bgcolor = colors.TRANSPARENT
    page.window_title_bar_hidden = True
    page.window_frameless = True
    page.window_left = 400
    page.window_top = 200
    page.add(ElevatedButton("I'm a floating button!"))
flet.app(target=main)
```

* [`page.get_clipboard()`](/docs/controls/page#get_clipboard)
* [`page.launch_url()`](/docs/controls/page#launch_urlurl)
    * `web_window_name`
    * `web_popup_window`
    * `window_width`
    * `window_height`
* [`page.window_to_front()`](/docs/controls/page#window_to_front)
* [`page.close_in_app_web_view()`](/docs/controls/page#close_in_app_web_view)


Upgrade Flet module to the latest version (`pip install flet --upgrade`), integrate auth in your app and [let us know](https://discord.gg/dzWXP8SHG8) what you think!

Enjoy!