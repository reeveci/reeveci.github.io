# Web UI

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://github.com/reeveci/plugin-webui" target="_blank">
    <img alt="GitHub Tag" src="https://img.shields.io/github/v/tag/reeveci/plugin-webui?sort=semver&logo=go&label=github.com%2Freeveci%2Fplugin-webui" />
  </a>
  <a href="https://github.com/reeveci/plugin-webui/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/plugin-webui?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/plugin-webui" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/plugin-webui?label=Source" />
  </a>
</div>

Provides an admin web interface.

## Settings

Plugin name: `webui`

| Setting          | Description                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| `ENABLED`        | Enable the plugin (`"true" \| "false"`)                                                                           |
| `HTTP_PORT`      | HTTP port on which the webserver should listen (`number`)                                                         |
| `HTTPS_PORT`     | HTTPS port on which the webserver should listen (`number`)                                                        |
| `TLS_CERT_FILE`  | TLS certificate file for HTTPS (`string`)                                                                         |
| `TLS_KEY_FILE`   | TLS key file for HTTPS (`string`)                                                                                 |
| `ADMIN_USERNAME` | Administrator username (`string`)                                                                                 |
| `ADMIN_PASSWORD` | Administrator password (`string`)                                                                                 |
| `CORS_ORIGIN`    | Value for the Access-Control-Allow-Origin header for API requests <Badge type="tip" text="optional" /> (`string`) |
| `HISTORY_LIMIT`  | Maximum number of pipelines to be preserved in memory (default: `50`) (`number`)                                  |

## 3rd Party Authentication

If you want authentication to be handled by a 3rd party, you can do so by configuring your Reverse Proxy to provide basic auth to the application.
By doing so, the server will set the corresponding session cookie when delivering the page.
Please note that the Authorization header sent by the web client must always be forwarded to the `/api/*` endpoints.

:::: details Click here for a basic example using [Traefik](https://traefik.io/traefik) with [Authelia](https://authelia.com)

::: code-group

```yaml [traefik.yaml]
http:
  routers:
    reeve-api:
      entryPoints:
        - websecure
      middlewares:
        - authelia@file
      rule: (Host(`ci.example.com`) && PathPrefix(`/api/`))
      service: reeve@file

    reeve:
      entryPoints:
        - websecure
      middlewares:
        - authelia@file
        - reeve-webui-auth@file
      rule: Host(`ci.example.com`)
      service: reeve@file

  services:
    reeve:
      loadBalancer:
        servers:
          - url: http://localhost:9081

http:
  middlewares:
    authelia:
      forwardAuth:
        address: http://authelia:9091/api/authz/forward-auth
        authResponseHeaders:
          - Remote-User
          - Remote-Groups
          - Remote-Name
          - Remote-Email
    reeve-webui-auth:
      headers:
        customRequestHeaders:
          Authorization: Basic dXNlcjpwYXNzd29yZA== # example basic auth header (user:password) - DO NOT USE!!
```

:::

::::
