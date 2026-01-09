# Consul

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://github.com/reeveci/plugin-consul" target="_blank">
    <img alt="GitHub Tag" src="https://img.shields.io/github/v/tag/reeveci/plugin-consul?sort=semver&logo=go&label=github.com%2Freeveci%2Fplugin-consul" />
  </a>
  <a href="https://github.com/reeveci/plugin-consul/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/plugin-consul?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/plugin-consul" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/plugin-consul?label=Source" />
  </a>
</div>

Provides pipeline environment variables from a Consul KV store.

An API token needs to be created in Consul for this plugin.
It is recommended to use a token configured with minimal required access.

## Settings

Plugin name: `consul`

| Setting      | Description                                                                          |
| ------------ | ------------------------------------------------------------------------------------ |
| `ENABLED`    | Enable the plugin (`"true" \| "false"`)                                              |
| `URL`        | Consul URL <Badge type="warning" text="required" /> (`string`)                       |
| `TOKEN`      | Consul API token <Badge type="warning" text="required" /> (`string`)                 |
| `KEY_PREFIX` | Key prefix (`string`)                                                                |
| `PRIORITY`   | Priority of the variables provided by the plugin (default: `1`) (`number`)           |
| `SECRET`     | Whether to mark the variables provided by the plugin as secret (`"true" \| "false"`) |
