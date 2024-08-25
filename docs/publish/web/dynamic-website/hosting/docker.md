---
title: Docker
sidebar_label: Docker
---

You can watch the tutorial video on Docker by following the link below or directly viewing it embedded:

<iframe width="560" height="315" src="https://www.youtube.com/embed/8UY9sisKz1Q" frameborder="0" allowfullscreen></iframe>

## Dockerizing Your Flet App

Dockerizing your Flet app is an effective way to deploy it. To get started with Dockerizing Flet, you need to have [Docker](https://www.docker.com/) installed on your system.

:::note
When linking to the "assets" directory, use `/` instead of `/assets`.
:::

### Sample Flet Docker Example

Here’s a simple example of a Flet app configured to run in Docker:

```python title="main.py"
import flet as ft

def main(page: ft.Page):
    page.title = "Flet Docker example"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    text = ft.TextField(value="Flet dockerized", text_align=ft.TextAlign.CENTER, text_size=60)

    page.add(
        text
    )

ft.app(
    target=main,
    view=None,
    port=8000,
    host="0.0.0.0"
)
```

### Building and Running Your Docker Container

**Log in to Docker CLI:**

After installing Docker, create a Docker account and log in using Docker CLI:

```bash
docker login -u <your-username>
```

Enter your password when prompted

```bash
<your-password>
```

**Run and Test Your Docker Container:**

Create a container from your image and test it:

```bash
docker build -t <project-name> .
```

**Run and Test Your Docker Container:**

Create a container from your image and test it:

```bash
docker run -p 80:8000 <project-name>
```

You should see your website running at [http://127.0.0.1](http://127.0.0.1).

### Pushing Your Docker Image to Docker Hub:

If you want to deploy your image to a cloud service, you may need to push it to Docker Hub. First, tag your image:

```bash
docker tag <project-name>:<project-tag> <your-username>/<repository-name>:<repository-tag>
```

Then, push it to Docker Hub:

```bash
docker push <your-username>/<repository-name>:<repository-tag>
```
