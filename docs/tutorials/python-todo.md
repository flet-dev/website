---
title: Create To-Do app in Python with Flet
sidebar_label: Python - To-Do app
slug: python-todo
---

In this tutorial we will show you, step-by-step, how to create a ToDo web app in Python using Flet framework and then share it on the internet. The app is a single-file console program of just [180 lines (formatted!) of Python code](https://github.com/flet-dev/examples/blob/main/python/apps/todo/todo.py), yet it is a multi-session, modern single-page application with rich, responsive UI:

<img src="/img/docs/tutorial/todo-complete-demo-web.gif" className="screenshot-70" />

You can see the live demo [here](https://gallery.flet.dev/todo/).

We chose a ToDo app for the tutorial, because it covers all of the basic concepts you would need to create any web app: building a page layout, adding controls, handling events, displaying and editing lists, making reusable UI components, and deployment options.

The tutorial consists of the following steps:

* [Getting started with Flet](#getting-started-with-flet)
* [Adding page controls and handling events](#adding-page-controls-and-handling-events)
* [View, edit and delete list items](#view-edit-and-delete-list-items)
* [Filtering list items](#filtering-list-items)
* [Final touches](#final-touches)
* [Deploying the app](#deploying-the-app)

## Getting started with Flet

To write a Flet web app you don't need to know HTML, CSS or JavaScript, but you do need a basic knowledge of Python and object-oriented programming.

Flet requires Python 3.7 or above. To create a web app in Python with Flet, you need to install `flet` module first:

```bash
pip install flet
```

To start, let's create a simple hello-world app.

Create `hello.py` with the following contents:

```python
import flet
from flet import (
    Page,
    Text,
)

def main(page: Page):
    page.add(Text(value="Hello, world!"))

flet.app(target=main)
```

Run this app and you will see a new window with a greeting:

<img src="/img/docs/tutorial/todo-app-hello-world.png" className="screenshot-40" />

## Adding page controls and handling events

Now we're ready to create a multi-user ToDo app.

To start, we'll need a [TextField](/docs/controls/textfield) for entering a task name, and an "+" [FloatingActionButton](/docs/controls/floatingactionbutton) with an event handler that will display a [Checkbox](/docs/controls/checkbox) with a new task.

Create `todo.py` with the following contents:

```python
import flet
from flet import (
    Checkbox,
    FloatingActionButton,
    Page,
    TextField,
    icons,
)

def main(page: Page):
    def add_clicked(e):
        page.add(Checkbox(label=new_task.value))
        new_task.value = ""
        page.update()

    new_task = TextField(hint_text="What needs to be done?")

    page.add(new_task, FloatingActionButton(icon=icons.ADD, on_click=add_clicked))

flet.app(target=main)
```

Run the app and you should see a page like this:

<img src="/img/docs/tutorial/todo-app-1.png" className="screenshot-40" />

### Page layout

Now let's make the app look nice! We want the entire app to be at the top center of the page, taking up 600 px width. The TextField and the "+" button should be aligned horizontally, and take up full app width:

<img src="/img/docs/tutorial/todo-diagram-1.svg" className="screenshot" />

[`Row`](/docs/controls/row)  is a control that is used to lay its children controls out horizontally on a page. [`Column`](/docs/controls/column) is a control that is used to lay its children controls out vertically on a page.

Replace `todo.py` contents with the following:

```python
import flet (
    Checkbox,
    Column,
    FloatingActionButton,
    Page,
    Row,
    TextField,
    icons,
)


def main(page: Page):
    def add_clicked(e):
        tasks_view.controls.append(Checkbox(label=new_task.value))
        new_task.value = ""
        view.update()

    new_task = TextField(hint_text="Whats needs to be done?", expand=True)
    tasks_view = Column()
    view=Column(
        width=600,
        controls=[
            Row(
                controls=[
                    new_task,
                    FloatingActionButton(icon=icons.ADD, on_click=add_clicked),
                ],
            ),
            tasks_view,
        ],
    )

    page.horizontal_alignment = "center"
    page.add(view)

flet.app(target=main)
```

Run the app and you should see a page like this:

<img src="/img/docs/tutorial/todo-app-2.png" className="screenshot-50" />

### Reusable UI components

While we could continue writing our app in the `main` function, the best practice would be to create a reusable UI component. Imagine you are working on an app header, a side menu, or UI that will be a part of a larger project. Even if you can't think of such uses right now, we still recommend creating all your web apps with composability and reusability in mind.

To make a reusable ToDo app component, we are going to encapsulate its state and presentation logic in a separate class: 

```python
import flet
from flet import(
    Checkbox,
    Column,
    FloatingActionButton,
    IconButton,
    Page,
    Row,
    TextField,
    UserControl,
    icons,
)

class TodoApp(UserControl):
    def build(self):
        self.new_task = TextField(hint_text="Whats needs to be done?", expand=True)
        self.tasks = Column()

        # application's root control (i.e. "view") containing all other controls
        return Column(
            width=600,
            controls=[
                ft.Row(
                    controls=[
                        self.new_task,
                        FloatingActionButton(icon=icons.ADD, on_click=self.add_clicked),
                    ],
                ),
                self.tasks,
            ],
        )

    def add_clicked(self, e):
        self.tasks.controls.append(Checkbox(label=self.new_task.value))
        self.new_task.value = ""
        self.update()


def main(page: Page):
    page.title = "ToDo App"
    page.horizontal_alignment = "center"
    page.update()

    # create application instance
    todo = TodoApp()

    # add application's root control to the page
    page.add(todo)

flet.app(target=main)
```

:::note
Try adding two `TodoApp` components to the page:

```python
# create application instance
app1 = TodoApp()
app2 = TodoApp()

# add application's root control to the page
page.add(app1, app2)
```

:::

## View, edit and delete list items

In the [previous step](#adding-page-controls-and-handling-events), we created a basic ToDo app with task items shown as checkboxes. Let's improve the app by adding "Edit" and "Delete" buttons next to a task name. The "Edit" button will switch a task item to edit mode.

<img src="/img/docs/tutorial/todo-diagram-2.svg" className="screenshot" />

Each task item is represented by two rows: `display_view` row with Checkbox, "Edit" and "Delete" buttons and `edit_view` row with TextField and "Save" button. `view` column serves as a container for both `display_view` and `edit_view` rows.

Before this step, the code was short enough to be fully included in the tutorial. Going forward, we will be highlighting only the changes introduced in a step.

Copy the entire code for this step from [here](https://github.com/flet-dev/examples/blob/main/python/tutorials/todo/to-do-4.py). Below we will explain the changes we've done to implement view, edit, and delete tasks.

To encapsulate task item views and actions, we introduced a new `Task` class:

```python
import flet
from flet import (
    Checkbox,
    Column,
    FloatingActionButton,
    IconButton,
    Page,
    Row,
    TextField,
    UserControl,
    colors,
    icons,
)


class Task(UserControl):
    def __init__(self, task_name, task_delete):
        super().__init__()
        self.task_name = tack_name
        self.task_delete = task_delete

    def build(self):
        self.display_task = Checkbox(value=False, label=self.task_name)
        self.edit_name = TextField(expand=1)

        self.display_view = Row(
            alignment="spaceBetween",
            vertical_alignment="center",
            controls=[
                self.display_task,
                Row(
                    spacing=0,
                    controls=[
                        IconButton(
                            icon=ft.icons.CREATE_OUTLINED,
                            tooltip="Edit To-Do",
                            on_click=self.edit_clicked,
                        ),
                        IconButton(
                            icons.DELETE_OUTLINE,
                            tooltip="Delete To-Do",
                            on_click=self.delete_clicked,
                        ),
                    ],
                ),
            ],
        )

        self.edit_view = Row(
            visible=False,
            alignment="spaceBetween",
            vertical_alignment="center",
            controls=[
                self.edit_name,
                IconButton(
                    icon=ft.icons.DONE_OUTLINE_OUTLINED,
                    icon_color=colors.GREEN,
                    tooltip="Update To-Do",
                    on_click=self.save_clicked,
                ),
            ],
        )
        return Column(controls=[self.display_view, self.edit_view])

    def edit_clicked(self, e):
        self.edit_name.value = self.display_task.label
        self.display_view.visible = False
        self.edit_view.visible = True
        self.update()

    def save_clicked(self, e):
        self.display_task.label = self.edit_name.value
        self.display_view.visible = True
        self.edit_view.visible = False
        self.update()
```

Additionally, we changed `TodoApp` class to create and hold `Task` instances when the "Add" button is clicked:

```python
class TodoApp(UserControl):
    def build(self):
        self.new_task = TextField(hint_text="What needs to be done?", expand=True)
        self.tasks = Column()
        # ...

    def add_clicked(self, e):
        task = Task(self.new_task.value, self.task_delete)
        self.tasks.controls.append(task)
        self.new_task.value = ""
        self.update()
```

For "Delete" task operation, we implemented `task_delete()` method in `TodoApp` class which accepts task control instance as a parameter:

```python
class TodoApp(ft.UserControl):
    # ...
    def task_delete(self, task):
        self.tasks.controls.remove(task)
        self.update()
```

Then, we passed a reference to `task_delete` method into Task constructor and called it on "Delete" button event handler:

```python
class Task(UserControl):
    def __init__(self, task_name, task_delete):
        super().__init__()
        self.task_name = task_name
        self.task_delete = task_delete

        # ...        

    def delete_clicked(self, e):
        self.task_delete(self)
```

Run the app and try to edit and delete tasks:

<img src="/img/docs/tutorial/view-edit-delete.gif" className="screenshot-50" />

## Filtering list items

We already have a functional ToDo app where we can create, edit, and delete tasks. To be even more productive, we want to be able to filter tasks by their status.

Copy the entire code for this step from [here](https://github.com/flet-dev/examples/blob/main/python/tutorials/todo/to-do-5.py). Below we will explain the changes we've done to implement filtering.

`Tabs` control is used to display filter:

```python

import flet
from flet import (
    Checkbox,
    Column,
    FloatingActionButton,
    IconButton,
    Page,
    Row,
    Tab,
    Tabs,
    TextField,
    UserControl,
    colors,
    icons,
)

# ...

class TodoApp(UserControl):
    def build(self):
        self.tasks = []
        self.new_task = TextField(hint_text="What needs to be done?", expand=True)
        self.tasks = Column()

        self.filter = Tabs(
            selected_index=0,
            on_change=self.tabs_changed,
            tabs=[Tab(text="all"), Tab(text="active"), Tab(text="completed")],
        )

        self.view = Column(
            width=600,
            controls=[
                Row(
                    controls=[
                        self.new_task,
                        FloatingActionButton(icon=icons.ADD, on_click=self.add_clicked),
                    ],
                ),
                Column(
                    spacing=25,
                    controls=[
                        self.filter,
                        self.tasks,
                    ],
                ),
            ],
        )
```

To display different lists of tasks depending on their statuses, we could maintain three lists with "All", "Active" and "Completed" tasks. We, however, chose an easier approach where we maintain the same list and only change a task's visibility depending on its status.

In `TodoApp` class we overrided `update()` method which iterates through all the tasks and updates their `visible` property depending on the status of the task:

```python
class TodoApp(UserControl):

    # ...

    def update(self):
        status = self.filter.tabs[self.filter.selected_index].text
        for task in self.tasks.controls:
            task.visible = (
                status == "all"
                or (status == "active" and task.completed == False)
                or (status == "completed" and task.completed)
            )
        super().update()
```

Filtering should occur when we click on a tab or change a task status. `TodoApp.update()` method is called when Tabs selected value is changed or Task item checkbox is clicked:

```python
class TodoApp(UserControl):

    # ...

    def tabs_changed(self, e):
        self.update()

class Task(UserControl):
    def __init__(self, task_name, task_status_change, task_delete):
        super().__init__()
        self.completed = False
        self.task_name = task_name
        self.task_status_change = task_status_change
        self.task_delete = task_delete

    def build(self):
        self.display_task = Checkbox(
            value=False, label=self.task_name, on_change=self.status_changed
        )
        # ...

    def status_changed(self, e):
        self.completed = self.display_task.value
        self.task_status_change(self)
```

Run the app and try filtering tasks by clicking on the tabs:

<img src="/img/docs/tutorial/todo-app-filtering.gif" className="screenshot-50" />

## Final touches

Our Todo app is almost complete now. As a final touch, we will add a footer (`Column` control) displaying the number of incomplete tasks (`Text` control) and a "Clear completed" button.

Copy the entire code for this step from [here](https://github.com/flet-dev/examples/blob/main/python/apps/todo/todo.py). Below we highlighted the changes we've done to implement the footer:

```python
import flet
from flet import (
    Checkbox,
    Column,
    FloatingActionButton,
    IconButton,
    OutlinedButton,
    Page,
    Row,
    Tab,
    Tabs,
    Text,
    TextField,
    UserControl,
    colors,
    icons,
)

# ...

class TodoApp():
    def build(self):
        # ...

        self.items_left = Text("0 items left")

        return Column(
            width=600,
            controls=[
                Row([ Text(value="Todos", style="headlineMedium")], alignment="center"),
                ft.Row(
                    controls=[
                        self.new_task,
                        FloatingActionButton(icon=icons.ADD, on_click=self.add_clicked),
                    ],
                ),
                Column(
                    spacing=25,
                    controls=[
                        self.filter,
                        self.tasks,
                        Row(
                            alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
                            vertical_alignment=ft.CrossAxisAlignment.CENTER,
                            controls=[
                                self.items_left,
                                OutlinedButton(
                                    text="Clear completed", on_click=self.clear_clicked
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        )

    # ...

    def clear_clicked(self, e):
        for task in self.tasks.controls[:]:
            if task.completed:
                self.task_delete(task)

    def update(self):
        status = self.filter.tabs[self.filter.selected_index].text
        count = 0
        for task in self.tasks.controls:
            task.visible = (
                status == "all"
                or (status == "active" and task.completed == False)
                or (status == "completed" and task.completed)
            )
            if not task.completed:
                count += 1
        self.items_left.value = f"{count} active item(s) left"
        super().update()
```

Run the app:

<img src="/img/docs/tutorial/todo-app-4.png" className="screenshot-50" />

## Deploying the app

Congratulations! You have created your first Python app with Flet, and it looks awesome!

Now it's time to share your app with the world!

[Follow these instructions](/docs/guides/python/deploying-web-app) to deploy your Flet app as a web app to Fly.io or Replit.

## Summary

In this tutorial, you have learnt how to:

* Create a simple Flet app;
* Work with Reusable UI components;
* Design UI layout using `Column` and `Row` controls;
* Work with lists: view, edit and delete items, filtering;
* Deploy your Flet app to the web;

For further reading you can explore [controls](/docs/controls) and [examples repository](https://github.com/flet-dev/examples/tree/main/python).

We would love to hear your feedback! Please drop us an [email](mailto:hello@flet.dev), join the discussion on [Discord](https://discord.gg/dzWXP8SHG8), follow on [Twitter](https://twitter.com/fletdev).
