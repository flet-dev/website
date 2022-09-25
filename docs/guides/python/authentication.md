---
title: Authentication
sidebar_label: Authentication
---

Flet authentication depends on existing OAuth 2.0 provider (GitHub, Google, Azure, Auth0, etc.) and implements [Authorization Code Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow) to retrieve API access token. Built-in Flet user management is planned for future releases.

Features:

* Works with desktop, web and mobile Flet apps.
* Built-in OAuth providers with automatic user details fetching:
  * GitHub
  * Azure
  * Google
  * Auth0
* Optional groups fetching.
* Custom OAuth providers.
* Automatic token refresh.
* Session storage (saving authorizations).
* Client storage (sample with encryption).
* Login with a saved token ("Remember me").

## Login process overview

* Configure OAuth provider (built-in or generic) with Client ID, Client secret, Redirect URL.
* Call `page.login(provider)` to initiate OAuth web flow.
* User is being redirected to OAuth provider website.
* On provider website user signs in and gives consent to access service API with requested scopes.
* Provider website redirects to Flet's OAuth callback URL with authorization code.
* Flet exchanges authorization code for a token and calls `page.on_login` event handler.
* Flet app can retrieve API token from `page.auth.token` property and user details from `page.auth.user`.

## Configuring OAuth provider

Flet has the following built-in OAuth providers:

* GitHub
* Azure
* Google
* Auth0

Additionally, you can configure a generic OAuth provider and provide authorization, token and user info endpoints.

In this guide we will configure Flet login page with GitHub account.

To integrate Flet authentication with GitHub a new [GitHub OAuth app](https://github.com/settings/developers) should be registered first (**Profile settings** → **Developer settings** → **OAuth Apps**).

**Authorization callback URL** should be in the format:

```
{application-url}/api/oauth/callback
```

<img src="/img/docs/getting-started/authentication/github-new-oauth-app.png" className="screenshot-40" />

On OAuth app details page click "Generate a new client secret" button.
Copy "Client ID" and "Client secret" values to a safe place - you'll need them in a Flet app.

<img src="/img/docs/getting-started/authentication/github-oauth-app-details.png" className="screenshot-40" />

## Sign in with OAuth provider

```python
import flet
from flet import ElevatedButton, Page
from flet.auth.providers.github_oauth_provider import GitHubOAuthProvider

def main(page: Page):
    def login_click(e):
        # configure provider
        provider = GitHubOAuthProvider(
            client_id="<client_id>",
            client_secret="<client_secret>",
            redirect_url="<redirect_url>",
            scope=["public_repo"])

        # perform login
        page.login(provider)

    def on_login(e):
        print("Access token:", page.auth.token.access_token)
        print("User ID:", page.auth.user.id)

    page.on_login = on_login
    page.add(
        ElevatedButton("Login with GitHub", on_click=login_click)
    )

flet.app(target=main, port=8550, view=flet.WEB_BROWSER)
```

### Redirect URL

Scopes

```python
provider = GitHubOAuthProvider(
  "<client_id>",
  "<client_secret>",
  "<redirect_url>",
  ["user", "public_repo])
```

## Perform login

```python
page.login(provider)
```

starting OAuth web flow.
checking for errors

## Accessing user details

```python
user = page.auth.user
```

UserID
Extended user properties

## Using OAuth token

```python
token = page.auth.token.access_token
```

Fetching token (with automatic refresh)

How to call an API using OAuth token and requests?

Saving token in a client storage

## Saving and restoring an auth token

TBD

## Configuring generic OAuth provider

TBD

## Implementing custom OAuth provider

TBD



