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
* Login with de-hydrated token ("Remember me").

## Login process overview

* Configure OAuth provider (built-in or generic) with Client ID, Client secret, Redirect URL.
* Call `page.login(provider)` to initiate OAuth web flow.
* User is being redirected to OAuth provider website.
* On provider website user signs in and gives consent to access service API with requested scopes.
* Provider website redirects to Flet's OAuth callback URL with authorization code.
* Flet exchanges authorization code for a token and calls `page.on_login` event handler.
* Flet app retrieves API token from `page.auth.token` property and user details from `page.auth.user`.

## Configuring OAuth provider

Flet provides 

### Built-in providers

Generic OAuth provider

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

## Implementing custom OAuth provider

TBD



