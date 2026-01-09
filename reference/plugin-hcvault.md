# HashiCorp Vault

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://github.com/reeveci/plugin-hcvault" target="_blank">
    <img alt="GitHub Tag" src="https://img.shields.io/github/v/tag/reeveci/plugin-hcvault?sort=semver&logo=go&label=github.com%2Freeveci%2Fplugin-hcvault" />
  </a>
  <a href="https://github.com/reeveci/plugin-hcvault/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/plugin-hcvault?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/plugin-hcvault" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/plugin-hcvault?label=Source" />
  </a>
</div>

Provides pipeline environment variables from a HashiCorp Vault KV store.

Currently, only the `kv-v2` secrets engine is supported.

If an env key is a path (meaning that it includes at least one `/`), all but the last segments are used as the secret path and the last segment is used as the secret data key.
Otherwise, value is used as the secret data key.

An API token needs to be created in Vault for this plugin.
It is recommended to use a token configured with minimal required access.

## Settings

Plugin name: `hcvault`

| Setting     | Description                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------- |
| `ENABLED`   | Enable the plugin (`"true" \| "false"`)                                                         |
| `URL`       | Vault URL <Badge type="warning" text="required" /> (`string`)                                   |
| `TOKEN`     | Vault API token <Badge type="warning" text="required" /> (`string`)                             |
| `PATH`      | The path of the secret engine <Badge type="warning" text="required" /> (`string`)               |
| `PRIORITY`  | Priority of the variables provided by the plugin (default: `1`) (`number`)                      |
| `NO_SECRET` | Whether to prevent marking the variables provided by the plugin as secret (`"true" \| "false"`) |
