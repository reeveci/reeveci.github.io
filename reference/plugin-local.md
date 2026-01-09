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

This plugin supports configuration via the [Web UI](/reference/plugin-webui) plugin.

Configuration is also supported via [Reeve CLI](/reference/cli):

```sh
reeve ask local --list
reeve ask local set <name> <value>
reeve ask local set-secret <name> <value>
reeve ask local list
```

## Settings

Plugin name: `local`

| Setting       | Description                                                                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ENABLED`     | Enable the plugin (`"true" \| "false"`)                                                                                                                        |
| `CONFIG_PATH` | Path to where configuration files should be stored on disk (the plugin stores its files in a subdirectory) <Badge type="warning" text="required" /> (`string`) |
| `SECRET_KEY`  | Passphrase for encrypting secrets <Badge type="warning" text="required" /> (`string`)                                                                          |
| `PRIORITY`    | Priority of the variables provided by the plugin (default: `1`) (`number`)                                                                                     |
