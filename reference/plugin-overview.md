# Plugins

Plugins are the main interface for adding features to Reeve and integrating Reeve with other software.
They can be used to:

- discover and trigger pipelines from various environments.
- provide environment variables and secrets to pipelines.
- react to the status of running pipelines.
- enrich the CLI and web interface with custom features.

## Adding plugins

Add plugins to the Reeve server plugin directory (`/etc/reeve/plugins`) and restart the server after configuration.

## Configuration

Configuration for each plugin is provided as environment variables to the Reeve server.
Each plugin uses its own prefix `REEVE_PLUGIN_<plugin name>_`.
If you want to specify a setting for all available plugins, use the `REEVE_SHARED_` prefix instead.
