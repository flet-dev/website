---
slug: querystring
title: Querystring
author: Stan Mathers
author_title: Contributor
author_url: https://github.com/StanMathers
author_image_url: https://avatars.githubusercontent.com/u/34790002?s=400&u=7b3fbcf5c2554488b4ed9a0b96abfc50917356a5&v=4
tags: [release]
---
import TOCInline from '@theme/TOCInline';


Querystring parser is now here! 🎉

Since now you can use querystrings in URLs to request and response data. QueryString object is directly built in Page object so no additional imports needed.
Building querystring parser made some changes with old methods and added new ones.

Updates: 
<TOCInline toc={toc} maxHeadingLevel={3} />

### Changes with old methods

`go` method of `Page` object now supports `**kwargs` arguments. You can pass key-value pairs to `go` method after the url to receive result like this: `...some_path/?name=John&surname=Doe`

Example
```python
page.go("/products/", id=5, name_startswith='g')
```
Result:
```
https://www.localhost.com/products/?id=5&name_startswith=g
```

### New methods for querystring parsing

* page.query.get(key: str)
* page.query.to_dict
* page.query.path

#### Examples
Lets say we have a URL structure like this

https://www.localhost.com/products/?id=5&name_startswith=g

- Example:
```python
page.query.get('id')
```
Result: 5

- Example:
```python
page.query.to_dict
```
Result: {"id": 5, "name_startswith": "g"}

- Example:
```python
page.query.path
```
Result: '/products/'

### Sample Project
```python

import flet
from flet import *

import sqlite3

class Db:
    def __init__(self):
        self.conn = sqlite3.connect('example.db', check_same_thread=False)
        self.c = self.conn.cursor()
        self.c.execute("""
                       CREATE TABLE IF NOT EXISTS users(
                           id INT PRIMARY KEY,
                           name TEXT
                       )
                       """)
    def get_user_by_id(self, user_id: int) -> str:
        self.c.execute(f"SELECT name FROM users WHERE id = {user_id}")
        return [self.c.fetchone()[0]]
    
    def get_user_by_start_with(self, start: str) -> str:
        self.c.execute(f"SELECT name FROM users WHERE name LIKE '{start}%'")
        return [i[0] for i in self.c.fetchall()]


def main(page: Page):
    """
    For example, lets say we want to get users from database whose name starts with `G`
    """
    db = Db()
    
    def query_data(e):
        if page.query.path == '/users/':

            start_with = page.query.get('startswith')
            for i in db.get_user_by_start_with(start_with):
                page.add(Text(i))
    
    page.add(Text('Hello'))
    page.on_route_change = query_data
    
flet.app(target=main, view=flet.WEB_BROWSER)

```

<img src="/img/blog/querystring/querystring_get_data_from_db.gif" />

