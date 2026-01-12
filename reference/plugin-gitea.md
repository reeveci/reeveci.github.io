# Gitea / Forgejo

::: warning 🚧 WORK IN PROGRESS 🚧

This part of the documentation is incomplete.

:::

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://github.com/reeveci/plugin-gitea" target="_blank">
    <img alt="GitHub Tag" src="https://img.shields.io/github/v/tag/reeveci/plugin-gitea?sort=semver&logo=go&label=github.com%2Freeveci%2Fplugin-gitea" />
  </a>
  <a href="https://github.com/reeveci/plugin-gitea/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/plugin-gitea?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/plugin-gitea" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/plugin-gitea?label=Source" />
  </a>
</div>

Integrates a [Gitea](https://gitea.com) server.
[Forgejo](https://forgejo.org/) is also fully supported.

An API token needs to be created in Gitea for this plugin.
Please select an user which has access to all relevant repositories.

You need to setup webhooks in your Gitea instance if you want to trigger pipelines on push.
The webhook URL should look like `http(s)://<reeve server>:<port>/api/v1/message?token=<message secret>&target=gitea&type=webhook`.

For most configurations, you will want to give Reeve access to only a subset of the projects on your Git server.
To do this, you just need to assign the user for whom you are generating the API token to the appropriate repositories.
You can also enable access for a whole organization by adding the user to the organization instead of the individual repositories.
However, note that the user must have write access in order to be recognized as an assignee.

If you want to enable Reeve for the entire Git server instead, set the `UNRESTRICTED` setting to `true` and grant administrative access to the token user.

## Settings

Plugin name: `gitea`

| Setting              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ENABLED`            | Enable the plugin (`"true" \| "false"`)                                                                                                                                                                                                                                                                                                                                                                                                        |
| `URL`                | Gitea base URL (usually something like `https://git.your.domain`) - this is used for accessing Gitea from the plugin, checking repository URL validity (unless `PUBLIC_URL` is configured) and for cloning repositories when running pipelines (unless `CLONE_URL` is configured) <Badge type="warning" text="required" /> (`string`)                                                                                                          |
| `CLONE_URL`          | Gitea base URL that workers should use for cloning repositories, if different than `URL` - this setting should be used if your workers cannot access Gitea over `URL` <Badge type="tip" text="optional" /> (`string`)                                                                                                                                                                                                                          |
| `PUBLIC_URL`         | Gitea base URL for checking repository URL validity, if different than `URL` - this is the URL that Gitea is publicly available at (this is configured in Gitea as `ROOT_URL`). This setting should be used if the plugin accesses Gitea from another URL than your users do. Note that Reeve won't be able to run any Gitea pipelines if this does not match what the Gitea ReST API returns. <Badge type="tip" text="optional" /> (`string`) |
| `TOKEN`              | Gitea API token <Badge type="warning" text="required" /> (`string`)                                                                                                                                                                                                                                                                                                                                                                            |
| `UNRESTRICTED`       | Do not restrict search by user (`"true" \| "false"`)                                                                                                                                                                                                                                                                                                                                                                                           |
| `TASK_DOMAINS`       | Space separated list of [task domains](/guide/task-domains) (`string`)                                                                                                                                                                                                                                                                                                                                                                         |
| `TRUSTED_DOMAINS`    |  Space separated list of [trusted domains](/guide/trusted-tasks) (`string`)                                                                                                                                                                                                                                                                                                                                                                    |
| `TRUSTED_TASKS`      |  Space separated list of [trusted tasks](/guide/trusted-tasks) (`string`)                                                                                                                                                                                                                                                                                                                                                                      |
| `SETUP_GIT_TASK`     | Task to be used for setting up pipelines <Badge type="warning" text="required" /> (`string`)                                                                                                                                                                                                                                                                                                                                                   |
| `SECRET_KEY`         | Passphrase for encrypting secrets <Badge type="warning" text="required" /> (`string`)                                                                                                                                                                                                                                                                                                                                                          |
| `DISCOVERY_SCHEDULE` | Cron expression which specifies how often the Git server should be fully scanned - the server is also scanned when the plugin starts, and single repositories are updated when a corresponding webhook is received. Scheduled server scanning can be disabled by setting the option to `never` (default: `0 12 * * *`) (`string \| "never"`)                                                                                                   |

## Web UI integration

This plugin supports configuration via the [Web UI](/reference/plugin-webui) plugin for:

- Pipeline history
- Action triggers

## CLI integration

This plugin provides commands for [Reeve CLI](/reference/cli).

```sh{2-5}
reeve ask gitea --list
  gitea
        action    <action> [<search ...>] - execute action
        encrypt   <secret value> - encrypt variables for usage in pipeline file secrets
        rescan    rescan all repositories
```

## Additional information

::: tip CAVEAT

Using the `file` fact when force-pushing changes may result in unexpected behavior, as monitoring file changes is limited to commits that are not already known to Gitea.
If, for example, a branch was reset to a previous commit and then force-pushed, no new commits would be pushed, so no files would be marked as changed, even if the working directory has changed.

:::

## Messages

This plugin supports two types of messages:

### 1. Gitea webhooks

Gitea webhooks allow Reeve to run pipelines whenever a specific action is executed in your Git repositories.

You can skip pipeline execution by adding `[skip ci]` or `[ci skip]` anywhere in your commit message.

**Query parameters:**

- `token` - Reeve message secret
- `target` - Must be `gitea`
- `type` - Must be `webhook`

**Content:**

See Gitea Webhook API

### 2. Actions

Actions can be used to execute pipelines via HTTP requests to the message endpoint.
Unless the `UNRESTRICTED` setting is enabled, the execution of actions is restricted to projects to which the token user is assigned.

**Query parameters:**

- `token` - Reeve message secret
- `target` - Must be `gitea`
- `type` - Must be `action`
- `action` - Action to be passed to pipeline facts
- `search` - Search term for limiting repository discovery

## Pipeline definition

Pipelines and environment variables are defined in the file `/.reeve.yaml` in a repository's root directory (or `/.reeve.yml`).
