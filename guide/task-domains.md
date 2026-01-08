# Task Domains

A task domain is a prefix that allows abbreviating step image names.
This has not only the benefit of allowing you to type your pipeline step image names faster,
it also allows you to quickly swap out your Docker registry without the need of individually updating all of your pipeline definitions.

Configure task domains with the `REEVE_PLUGIN_<plugin name>_TASK_DOMAINS` environment variable.
The value of this variable should be a space separated list of `<domain>:<prefix>` pairs.
To setup task domains for all available plugins, use the `REEVE_SHARED_TASK_DOMAINS` environment variable.

## Recommended defaults

The following configures a `reeve` domain for the official Reeve pipeline steps and a [trusted domain](/guide/trusted-tasks) `docker` for the official Docker related Reeve steps.

::: code-group

```yaml{5-6} [docker-compose.yml]
services:
  reeve:
    # ...
    environment:
      REEVE_SHARED_TASK_DOMAINS: "docker:reeveci/step-docker- reeve:reeveci/step-"
      REEVE_SHARED_TRUSTED_DOMAINS: "docker"
```

:::

With this configuration, update your pipeline definitions to look like the following.

::: code-group

```yaml{3,7} [.reeve.yaml]
steps:
  - name: NPM
    task: "@reeve/npm-cli" # instead of reeveci/step-npm-cli
    # ...

  - name: Docker
    task: "@docker/deploy" # instead of reeveci/step-docker-deploy
    # ...
```

:::
