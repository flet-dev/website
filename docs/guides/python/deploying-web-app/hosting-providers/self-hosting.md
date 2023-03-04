---
title: Self Hosting
sidebar_label: Self Hosting
slug: self-hosting
---
Host a Flet app on your own server with NGINX.

There are free and inexpensive cloud server tiers available at [AWS](https://aws.amazon.com/free/), [Oracle](https://www.oracle.com/cloud/free/), [Linode](https://www.linode.com/pricing/), and more.

## Setup Flet Environment

### `requirements.txt` and virtualenv

Create `requirements.txt` with a list of application dependencies. At minimum it should contain `flet` module:

```txt
flet>=0.2.4
```

Create a virtualenv and install requirements:

    python -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt

### Sample `main.py` Flet app

```python
import flet as ft
import os


# set Flet path to an empty string to serve at the root URL (e.g., https://lizards.ai/)
# or a folder/path to serve beneath the root (e.g., https://lizards.ai/ui/path
DEFAULT_FLET_PATH = ''  # or 'ui/path'
DEFAULT_FLET_PORT = 8502


def main(page: ft.Page):
    page.title = "You Enjoy Mychatbot"
    page.add(ft.Text("Reba put a stopper in the bottom of the tub"))


if __name__ == "__main__":
    flet_path = os.getenv("FLET_PATH", DEFAULT_FLET_PATH)
    flet_port = int(os.getenv("FLET_PORT", DEFAULT_FLET_PORT))
    ft.app(name=flet_path, target=main, view=None, port=flet_port)
```

## Automatically Start Flet Server

### Create systemd unit file

Automatically start the Flet server using a systemd service unit file `flet.service`.

Setup below assumes your flet app script is defined in `$HOME/flet-app/main.py`. Replace `User`, `Group`, `WorkingDirectory`, etc. as per your setup.

```txt
[Unit]
Description=Flet Server
After=network.target

[Service]
User=ubuntu
Group=ubuntu
WorkingDirectory=/home/ubuntu/flet-app
Environment="PATH=/home/ubuntu/flet-app/.venv/bin"
ExecStart=/home/ubuntu/flet-app/.venv/bin/python /home/ubuntu/flet-app/main.py

[Install]
WantedBy=multi-user.target
```

### Enable the Flet server

```
cd /etc/systemd/system
sudo ln -s /home/ubuntu/flet-app/flet.service
sudo systemctl start flet
sudo systemctl enable flet
sudo systemctl status flet
```

## NGINX Proxy Setup

NGINX will proxy the Flet app and the websocket.

In your `/etc/nginx/sites-available/*` config file, updating path and port as needed:

```txt
    location / {
        proxy_pass         http://127.0.0.1:8502/;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
  
    location /ws {
        proxy_pass         http://127.0.0.1:8502/ws;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
```

That's it! Restart NGINX, and open your app in a browser.
