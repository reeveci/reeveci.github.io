# Trusted Tasks

Some pipeline step images require access to the Docker socket, for example to deploy services.
You can either trust each task individually or a [task domain](/guide/task-domains).

Configure trusted domains with the `REEVE_PLUGIN_<plugin name>_TRUSTED_TASKS` (space separated list) or `REEVE_PLUGIN_<plugin name>_TRUSTED_DOMAINS` (space separated list) environment variables.
To setup trusted domains for all available plugins, use the `REEVE_SHARED_TRUSTED_TASKS` or `REEVE_SHARED_TRUSTED_DOMAINS` environment variables.

Click [here](/guide/task-domains#recommended-defaults) for the recommended default configuration.
