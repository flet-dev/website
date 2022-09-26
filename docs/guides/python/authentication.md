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
            redirect_url="<redirect_url>")

        # perform login
        page.login(
            provider,
            scope=["public_repo"])

    def on_login(e):
        print("Access token:", page.auth.token.access_token)
        print("User ID:", page.auth.user.id)

    page.on_login = on_login
    page.add(
        ElevatedButton("Login with GitHub", on_click=login_click)
    )

flet.app(target=main, port=8550, view=flet.WEB_BROWSER)
```

Run the program and click "Login with GitHub" button. GitHub authorize app page will be opened in:

* **Desktop** app - a new browser window or tab.
* **Web** app - a new popup window (make sure popup blocker is off).
* **Mobile** app - an in-app web browser.

<img src="/img/docs/getting-started/authentication/github-oauth-authorize.png" className="screenshot-40" />

### Redirect URL

We used `http://localhost:8550/api/oauth/callback` as a redirect URL while registering GitHub OAuth app.
Notice it has a fixed port `8550`. To run your Flet app on a fixed port use `port` argument in `flet.app` call:

```python
flet.app(target=main, port=8550)
```

### Scope

Most of OAuth providers allows applications to request one or more scopes to limit application's access to a
user's account.

Built-in Flet providers, by default, request scopes to access user profile, but you can request additional scopes in login method, like `public_repo` in the example above:

```python
page.login(
    provider,
    scope=["public_repo"])
```

`page.login()` method has a number of arguments to control authentication process:

* `fetch_user` (bool) - whether to fetch user details into `page.auth.user`. Default is `True`.
* `fetch_groups` (bool) - whether to fetch user groups into `page.auth.user.groups`. Default is `False`.
* `scope` - a list of scopes to request.
* `saved_token` - a JSON snapshot of `page.auth.token` to restore authorization from. Token can be serialized with `page.auth.token.to_json()`, enscrypted and saved in `page.client_storage`. See below.
* `on_open_authorization_url` - a callback to open a browser with authorization URL. See below.
* `complete_page_html` - a custom HTML contents of "You've been successfully authenticated. Close this page now" page.
* `redirect_to_page` (bool) - used with Flet web app only when authorization page is opened in the same browser tab.

The result of `page.login()` call is an instance of `Authorization` class with the following fields:

* **`token`** - OAuth token used to access provider's API:
  * `access_token` - access token used as an authorization token in API request header.
  * `scope` - token's scope.
  * `token_type` - access token type, e.g. `Bearer`.
  * `expires_in` - optional number of seconds when access token expires.
  * `expires_at` - optional time (`time.time()` + `expires_in`) when access token expires.
  * `refresh_token` - optional refresh token which is used to get a new access token, when the old one expires.
* **`user`** - user details with a mandatory `id` field and other fields specific to OAuth provider.
* **`provider`** - an instance of OAuth provider used for authorization.

A reference to the last authorization is saved in `page.auth` property.

### Checking authentication results

`page.on_login` event handler.

An instance of `LoginEvent`:

* `error` (str) - OAuth error.
* `error_description` (str) - OAuth error description.



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

## Customizing authorization flow

How to open in a new tab, the same tab (redirect URL)?
How to customize "complete" page?

## Configuring generic OAuth provider

[LinkedIn](https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fcontext&tabs=HTTPS)

## Implementing custom OAuth provider

LinkedIn



