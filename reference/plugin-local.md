# Local

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://github.com/reeveci/plugin-local" target="_blank">
    <img alt="GitHub Tag" src="https://img.shields.io/github/v/tag/reeveci/plugin-local?sort=semver&logo=go&label=github.com%2Freeveci%2Fplugin-local" />
  </a>
  <a href="https://github.com/reeveci/plugin-local/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/plugin-local?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/plugin-local" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/plugin-local?label=Source" />
  </a>
</div>

Provides pipeline environment variables from local storage.

## Settings

Plugin name: `local`

| Setting       | Description                                                                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ENABLED`     | Enable the plugin (`"true" \| "false"`)                                                                                                                        |
| `CONFIG_PATH` | Path to where configuration files should be stored on disk (the plugin stores its files in a subdirectory) <Badge type="warning" text="required" /> (`string`) |
| `SECRET_KEY`  | Passphrase for encrypting secrets <Badge type="warning" text="required" /> (`string`)                                                                          |
| `PRIORITY`    | Priority of the variables provided by the plugin (default: `1`) (`number`)                                                                                     |

## Web UI integration

This plugin supports configuration via the [Web UI](/reference/plugin-webui) plugin for:

- Environment variables / secrets

## CLI integration

This plugin provides commands for [Reeve CLI](/reference/cli).

```sh{2-7}
reeve ask local --list
  local
        get          <name> - get environment variable
        list         - list environment variables and secrets
        set          <name> <value> - set environment variable
        set-secret   <name> <value> - set environment secret
        unset        <name> - unset environment variable or secret
```
