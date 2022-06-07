---
title: Create To-Do app in Python with Flet
sidebar_label: To-Do app in Python
slug: python-todo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this tutorial we will show you, step-by-step, how to create a ToDo web app in Python using Flet framework and then share it on the internet. The app is a single-file console program of just [100 lines of Python code](https://github.com/flet-dev/examples/blob/main/python/apps/todo/todo.py), yet it is a multi-session, modern single-page application with rich, responsive UI.

You can find the live demo [here](TBD).

We chose a ToDo app for the tutorial, because it covers all of the basic concepts you would need to create any web app: building a page layout, adding controls, handling events, displaying and editing lists, making reusable UI components, and deployment options.

The tutorial consists of the following steps:

* [Getting started with Flet](#getting-started-with-flet)
* [Flet app structure](#flet-app-structure)
* [Adding page controls and handling events](#adding-page-controls-and-handling-events)
* [View, edit and delete list items](#view-edit-and-delete-list-items)
* [Filtering list items](#filtering-list-items)
* [Final touches](#final-touches)
* [Deploying the app](#deploying-the-app)

## Getting started with Flet

To write a Flet web app you don't need to know HTML, CSS or JavaScript, but you do need a basic knowledge of Python and object-oriented programming.

Flet requires Python 3.8 or above. To create a web app in Python with Flet, you need to install `flet` module first:

```bash
pip install flet
```

To start, let's create a simple hello-world app.

Create `hello.py` with the following contents:

```python title="hello.py"
import flet
from flet import Page, Text


def main(page: Page):
    page.add(Text(value="Hello, world!"))


flet.app(target=main)
```

Run this app and you will see a new window with a greeting:

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-hello-world.png" /></p>

## Adding page controls and handling events

Now we're ready to create a multi-user ToDo app.

To start, we'll need a [TextField](https://flet.dev/docs/controls/textfield) for entering a task name, and an "Add" [FloatingActionButton](https://flet.dev/docs/controls/floatingactionbutton) with an event handler that will display a [Checkbox](https://flet.dev/docs/controls/checkbox) with a new task.

Create `todo.py` with the following contents:

```python title="todo.py"
import flet
from flet import TextField, FloatingActionButton, Checkbox, icons

def main(page: Page):
    
    def add_clicked(e):
        page.add(Checkbox(label=new_task.value))

    new_task = TextField(placeholder='Whats needs to be done?')

    page.add(
        new_task,
        FloatingActionButton(icon=icons.ADD, on_click=self.add_clicked)
    )

flet.app(target=main)
```

Run the app and you should see a page like this:

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-1.png" /></p>

### Page layout

Now let's make the app look nice! We want the entire app to be at the top center of the page, stretched over 70% of the page width. The textbox and the button should be aligned horizontally, and take up full app width:

<p style={{ textAlign: 'center' }}><img style={{ width: '90%' }} src="/img/docs/tutorial/todo-diagram-1.svg" /></p>

`Stack` is a container control that is used to lay other controls out on a page. `Stack` can be vertical (default) or horizontal, and can contain other stacks.

Replace `todo.py` contents with the following:

```python title="todo.py"
import pglet
from pglet import Stack, Textbox, Button, Checkbox

def main(page):

    page.title = "ToDo App"
    page.horizontal_align = 'center'
    page.update() # needs to be called every time "page" control is changed
    
    def add_clicked(e):
        tasks_view.controls.append(Checkbox(label=new_task.value))
        tasks_view.update()

    new_task = Textbox(placeholder='Whats needs to be done?', width='100%')
    tasks_view = Stack()

    page.add(Stack(width='70%', controls=[
        Stack(horizontal=True, on_submit=add_clicked, controls=[
            new_task,
            Button('Add', on_click=add_clicked)
        ]),
        tasks_view
    ]))

pglet.app("todo-app", target=main)
```

Run the app and you should see a page like this:

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-2.png" /></p>

### Reusable UI components

While we could continue writing our app in the `main` function, the best practice would be to create a reusable UI component. Imagine you are working on an app header, a side menu, or UI that will be a part of a larger project. Even if you can't think of such uses right now, we still recommend creating all your web apps with composability and reusability in mind.

To make a reusable ToDo app component, we are going to encapsulate its state and presentation logic in a separate class: 

```python title="todo.py"
import pglet
from pglet import Stack, Textbox, Button, Checkbox

class TodoApp():
    def __init__(self):
        self.new_task = Textbox(placeholder='Whats needs to be done?', width='100%')
        self.tasks_view = Stack()

        # application's root control (i.e. "view") containing all other controls
        self.view = Stack(width='70%', controls=[
            Stack(horizontal=True, on_submit=self.add_clicked, controls=[
                self.new_task,
                Button('Add', on_click=self.add_clicked)
            ]),
            self.tasks_view
        ])

    def add_clicked(self, e):
        self.tasks_view.controls.append(Checkbox(label=self.new_task.value))
        self.tasks_view.update()

def main(page):
    page.title = "ToDo App"
    page.horizontal_align = 'center'
    page.update()

    # create application instance
    app = TodoApp()

    # add application's root control to the page
    page.add(app.view)

pglet.app("todo-app", target=main)
```

:::note
Try adding two `TodoApp` components to the page:

```python
# create application instance
app1 = TodoApp()
app2 = TodoApp()

# add application's root control to the page
page.add(app1.view, app2.view)
```
:::

## View, edit and delete list items

In the [previous step](#adding-page-controls-and-handling-events), we created a basic ToDo app with task items shown as checkboxes. Let's improve the app by adding "Edit" and "Delete" buttons next to a task name. The "Edit" button will switch a task item to edit mode.

<p style={{ textAlign: 'center' }}><img style={{ width: '90%' }} src="/img/docs/tutorial/todo-diagram-2.svg" /></p>

Each task item is represented by two stacks: `display_view` stack with Checkbox, "Edit" and "Delete" buttons and `edit_view` stack with Textbox and "Save" button. `view` stack serves as a container for both `display_view` and `edit_view` stacks.

Before this step, the code was short enough to be fully included in the tutorial. Going forward, we will be highlighting only the changes introduced in a step.

Copy the entire code for this step from [here](https://github.com/pglet/examples/blob/main/python/todo/todo-with-delete.py). Below we will explain the changes we've done to implement view, edit, and delete tasks.

To encapsulate task item views and actions, we introduced a new `Task` class:

```python
class Task():
    def __init__(self, name):
        self.display_task = Checkbox(value=False, label=name)
        self.edit_name = Textbox(width='100%')

        self.display_view = Stack(horizontal=True, horizontal_align='space-between',
                vertical_align='center', controls=[
            self.display_task,
            Stack(horizontal=True, gap='0', controls=[
                Button(icon='Edit', title='Edit todo', on_click=self.edit_clicked),
                Button(icon='Delete', title='Delete todo')]),
            ])
        
        self.edit_view = Stack(visible=False, horizontal=True, horizontal_align='space-between',
                vertical_align='center', controls=[
            self.edit_name, Button(text='Save', on_click=self.save_clicked)
            ])
        self.view = Stack(controls=[self.display_view, self.edit_view])

    def edit_clicked(self, e):
        self.edit_name.value = self.display_task.label
        self.display_view.visible = False
        self.edit_view.visible = True
        self.view.update()

    def save_clicked(self, e):
        self.display_task.label = self.edit_name.value
        self.display_view.visible = True
        self.edit_view.visible = False
        self.view.update()
```

Additionally, we changed `TodoApp` class to create and hold `Task` instances when the "Add" button is clicked:

```python
class TodoApp():
    def __init__(self):
        self.tasks = []
        # ... the rest of constructor is the same

    def add_clicked(self, e):
        task = Task(self.new_task.value)
        self.tasks.append(task)
        self.tasks_view.controls.append(task.view)
        self.new_task.value = ''
        self.view.update()
```

For "Delete" task operation, we implemented `delete_task()` method in `TodoApp` class which accepts task instance as a parameter:

```python
class TodoApp():
    
    # ...

    def delete_task(self, task):
        self.tasks.remove(task)
        self.tasks_view.controls.remove(task.view)
        self.view.update()
```

Then, we passed a reference to `TodoApp` into Task constructor and called `TodoApp.delete_task()` in "Delete" button event handler:

```python {2-3,11,16-17,24}
class Task():
    def __init__(self, app, name):
        self.app = app
        
        # ...

        self.display_view = Stack(horizontal=True, horizontal_align='space-between', vertical_align='center', controls=[
            self.display_task,
            Stack(horizontal=True, gap='0', controls=[
                Button(icon='Edit', title='Edit todo', on_click=self.edit_clicked),
                Button(icon='Delete', title='Delete todo', on_click=self.delete_clicked)]),
            ])

        # ...        

    def delete_clicked(self, e):
        self.app.delete_task(self)

class TodoApp():

    # ...

    def add_clicked(self, e):
        task = Task(self, self.new_task.value)
        # ...
```

Run the app and try to edit and delete tasks:

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-3.png" /></p>

## Filtering list items

We already have a functional ToDo app where we can create, edit, and delete tasks. To be even more productive, we want to be able to filter tasks by their status.

Copy the entire code for this step from [here](https://github.com/pglet/examples/blob/main/python/todo/todo-with-filter.py). Below we will explain the changes we've done to implement filtering.

`Tabs` control is used to display filter:

```python {1,11-14,22}
from pglet import Tabs, Tab

# ...

class TodoApp():
    def __init__(self):
        self.tasks = []
        self.new_task = Textbox(placeholder='Whats needs to be done?', width='100%')
        self.tasks_view = Stack()

        self.filter = Tabs(value='all', on_change=self.tabs_changed, tabs=[
                Tab(text='all'),
                Tab(text='active'),
                Tab(text='completed')])

        self.view = Stack(width='70%', controls=[
            Text(value='Todos', size='large', align='center'),
            Stack(horizontal=True, on_submit=self.add_clicked, controls=[
                self.new_task,
                Button(primary=True, text='Add', on_click=self.add_clicked)]),
            Stack(gap=25, controls=[
                self.filter,
                self.tasks_view
            ])
        ])
```

To display different lists of tasks depending on their statuses, we could maintain three lists with "All", "Active" and "Completed" tasks. We, however, chose an easier approach where we maintain the same list and only change a task's visibility depending on the status.

In `TodoApp` class we introduced `update()` method which iterates through all the tasks and updates their `view` Stack's `visible` property depending on the status of the task:

```python
class TodoApp():

    # ...

    def update(self):
        status = self.filter.value
        for task in self.tasks:
            task.view.visible = (status == 'all'
                or (status == 'active' and task.display_task.value == False)
                or (status == 'completed' and task.display_task.value))
        self.view.update()
```

Filtering should occur when we click on a tab or change a task status. `TodoApp.update()` method is called when Tabs selected value is changed or Task item checkbox is clicked:

```python
class TodoApp():

    # ...

    def tabs_changed(self, e):
        self.update()

class Task():
    def __init__(self, app, name):
        self.display_task = Checkbox(value=False, label=name, on_change=self.status_changed)
        # ...

    def status_changed(self, e):
        self.app.update() 
```

Run the app and try filtering tasks by clicking on the tabs:

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', borderLeft: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-filtering.gif" /></p>

## Final touches

Our Todo app is almost complete now. As a final touch, we will add a footer (`Stack` control) displaying the number of incomplete tasks (`Text` control) and a "Clear completed" button.

Copy the entire code for this step from [here](https://github.com/pglet/examples/blob/main/python/todo/todo-complete.py). Below we highlighted the changes we've done to implement the footer:

```python {5,15-18,26,31-33,36-39}
class TodoApp():
    def __init__(self):
        # ...

        self.items_left = Text('0 items left')

        self.view = Stack(width='70%', controls=[
            Text(value='Todos', size='large', align='center'),
            Stack(horizontal=True, on_submit=self.add_clicked, controls=[
                self.new_task,
                Button(primary=True, text='Add', on_click=self.add_clicked)]),
            Stack(gap=25, controls=[
                self.filter,
                self.tasks_view,
                Stack(horizontal=True, horizontal_align='space-between', vertical_align='center', controls=[
                    self.items_left,
                    Button(text='Clear completed', on_click=self.clear_clicked)
                ])
            ])
        ])

    # ...

    def update(self):
        status = self.filter.value
        count = 0
        for task in self.tasks:
            task.view.visible = (status == 'all'
                or (status == 'active' and task.display_task.value == False)
                or (status == 'completed' and task.display_task.value))
            if task.display_task.value == False:
                count += 1
        self.items_left.value = f"{count} active item(s) left"
        self.view.update()        

    def clear_clicked(self, e):
        for task in self.tasks[:]:
            if task.display_task.value == True:
                self.delete_task(task)
```

Run the app:

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-4.png" /></p>

## Deploying the app

Congratulations! You have created your first Python web app with Pglet, and it looks awesome!

Now it's time to share your app with the world!

### Instant sharing

Pglet is not only a framework for building web apps, but it is also a service for hosting apps' UI.
You can have the application running on your computer while its UI is streaming to Pglet service in real-time.

To make the app instantly available on the Internet, just add `web=True` parameter to `pglet.app()` call at the very end of the program:

```python
# ...

pglet.app(target=main, web=True)
```

A new browser windows will be opened with the URL like this:

```
https://app.pglet.io/public/{random}
```

:::note
[Pglet Service](/docs/pglet-service) is in technical preview now and you are sharing the app in a public namespace.

Please note that we have removed the name of the page from the call above, so it's generated randomly to avoid name collision on public Pglet service with other users.
:::

### Replit

Instant sharing is a great option to quickly share an app on the web, but it requires your computer to be on all the time.

[Replit](https://replit.com/) is an online IDE and hosting platform for web apps written in any language. Their free tier allows running any number of apps with some limitations.

To run your ToDo app on Replit:

* [Sign up](https://replit.com/signup?from=landing) on Replit.
* Click "New repl" button.
* Select "Python" language from a list and provide repl name, e.g. `my-todo`.
* Click "Packages" tab and search for `pglet` package; select its latest version.
* Switch back to "Files" tab and copy-paste the [code of Todo app](https://github.com/pglet/examples/blob/main/python/todo/todo-complete.py) into `main.py`.
* Update `pglet.app()` call (at the very end of the program) to:

```python
pglet.app("index", target=main)
```

* Run the app. Now both the application code and UI are running on Replit service as a "standalone" app.

:::note
We are not affiliated with Replit - we just love the service. Todo app demo for this tutorial is [hosted on Replit](https://replit.com/@pglet/ToDo-web-app-in-Python) and you can just "fork" it there and play.
:::

## Summary

In this tutorial you have learned how to:

* Create a shared page and a multi-user web app;
* Work with Reusable UI components;
* Design UI layout using `Stack` control;
* Work with lists: view, edit and delete items, filtering;
* Deploy your app two ways: Pglet Service and Replit;

For further reading you can explore [controls](/docs/controls) and [examples repository](https://github.com/pglet/examples/tree/main/python).

We would love to hear your feedback! Please drop us an [email](mailto:hello@pglet.io), join the discussion on [Discord](https://discord.gg/rWjf7xx), follow on [Twitter](https://twitter.com/pgletio).