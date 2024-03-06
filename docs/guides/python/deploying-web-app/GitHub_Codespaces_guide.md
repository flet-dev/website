# GitHub Codespaces

GitHub Codespaces is a powerful feature that allows developers to create and manage development environments directly within a browser. With Codespaces, you can write, run, and debug code without the need for complex local setup. This guide will help you get started with GitHub Codespaces with Flet.

---

## Creating a Codespace

Follow these steps to create a Codespace:

#### 1. Go to github.com/codespaces
  ![Open with Codespaces](https://github.com/testhere90742/images/blob/main/step1.png?raw=true)
#### 2. Login to your github 
  ![Open with Codespaces](https://github.com/testhere90742/images/blob/main/step2.png?raw=true)
#### 3. Create a blank template
![Open with Codespaces](https://github.com/testhere90742/images/blob/main/step3.png?raw=true)

# 
---

# To-Do app in Python with Flet in codespaces
#### 1. Install flet using pip.
```
pip install flet
```
#### 2. Create a main.py file.
 ![Open with Codespaces](https://github.com/testhere90742/images/blob/main/step4.png?raw=true)

#### 3. Paste this code:
```python
import flet as ft

def main(page: ft.Page):
    def add_clicked(e):
        page.add(ft.Checkbox(label=new_task.value))
        new_task.value = ""
        page.update()

    new_task = ft.TextField(hint_text="Whats needs to be done?")

    page.add(new_task, ft.FloatingActionButton(icon=ft.icons.ADD, on_click=add_clicked))

ft.app(target=main, view=ft.WEB_BROWSER, port=8080)
```
#### 4. Now run the main.py file using this command.
```
python3 -m main.py
```
#### 5. Click on ports (if you want to make your flet app public) otherwise click on open in browser(your flet app will be private and you can only view it). 
 ![Open with Codespaces](https://github.com/testhere90742/images/blob/main/step5.png?raw=true)
#### 6. To make your flet app public right click below visibility. Then click on port and then choose public.
 ![Open with Codespaces](https://github.com/testhere90742/images/blob/main/step6.png?raw=true)
#### 7. Now click on browser icon (located below fowarded address it's highlited with red in previous image).
# Congrats on making your first flet app in codespaces. 
 ![Open with Codespaces](https://github.com/testhere90742/images/blob/main/new.png?raw=true)
#
#
#
