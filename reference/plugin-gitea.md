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

This plugin supports promoting actions to the [Web UI](/reference/plugin-webui) plugin.
Actions can be logically grouped by using colons as separators, e.g. `parent-group:child-group:name`.
To hide actions from the Web UI, prefix them with a colon, e.g. `:name`.

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

Actions can also be triggered via the [CLI API](https://github.com/reeveci/reeve-cli):

```sh
reeve ask gitea action <action> [<search> ...]
```

## Facts

The following facts are provided:

- `trigger` - [`push`, `commit`] or [`push`, `tag`] or [`action`]
- `action` - Specified action - Only available for `action` triggers
- `ref` - Git ref - Ref of the head commit or tag, e.g. `refs/heads/main` or `refs/tags/v1.0.0`
- `branch` - Git branch - Not available for `tag` triggers
- `file` - Affected file(s) - Only available for `commit` triggers
- `tag` - Git tag - Only available for `tag` triggers
- `repository` - Full name of the repository, e.g. `ReeveCI/Reeve`

> Using the `file` fact when force-pushing changes may result in unexpected behavior, as monitoring file changes is limited to commits that are not already known to Gitea.
> If, for example, a branch was reset to a previous commit and then force-pushed, no new commits would be pushed, so no files would be marked as changed, even if the working directory has changed.

## Default conditions

If not specified otherwise, pipelines are limited to commits on the repository's default branch.
This can be changed by adding conditions for `trigger` and `branch` in your pipelines `when` section.

Since it is usually undesirable to execute a pipeline without restriction for all possible actions if the `action` trigger is set, this is prevented by default.
Therefore actions must always be specified explicitely by also adding conditions for `action`.

## Pipeline definition

Pipelines and environment variables are defined in the file `/.reeve.yaml` in a repository's root directory (or `/.reeve.yml`).

A pipeline file can contain multiple YAML documents, which are divided with `---`, e.g.:

```yaml
---
type: variable
name: MY_VAR
value: some-value

---
type: pipeline
name: hello-world

steps: []
```

### Templating

Pipeline files can use Go templating to automatically generate repetitive pipelines.
To enable the feature for a file, append the extension `.tmpl` to its name (e.g. `/.reeve.yaml.tmpl`).
Files with the `.tmpl` extension must be valid [Go templates](https://pkg.go.dev/text/template),
and can use [sprig template functions](https://masterminds.github.io/sprig/).

### File Includes

```yaml
---
type: include
path: path/to/file.yaml

---
type: include
path: path/to/file.yaml.tmpl
templateData:
  any:
    - thing
```

The file to be included must end with one of the extensions `.yaml`, `.yml`, `.yaml.tmpl` or `.yml.tmpl`.

If you include a template file, the key `templateData` can be used to provide parameters to your template as `.` (dot).
The key `templateData` may contain any valid YAML.

### Variables

```yaml
---
type: variable
name: MY_ENV
value: some-value
```

### Secrets

```yaml
---
type: secret
name: MY_ENV
value: some-encrypted-value
```

Values can be encrypted using the `encrypt` [CLI command](https://github.com/reeveci/reeve-cli):

```sh
reeve ask gitea encrypt '<secret value>'
```

Encryption takes place on the server, so make sure to use a secure connection between reeve-cli and the server. That is, use TLS with a valid certificate and do not set the `insecure` option.

### Cron schedules

```yaml
---
type: trigger
cron: * * * * *
action: some-action
```

The specified action is triggered based on the schedule.

Cron syntax:

```
*     *     *     *     *

^     ^     ^     ^     ^
|     |     |     |     |
|     |     |     |     +----- day of week (0-6) (Sunday=0)
|     |     |     +------- month (1-12)
|     |     +--------- day of month (1-31)
|     +----------- hour (0-23)
+------------- min (0-59)
```

Examples:

- `* * * * *` - Run on every minute
- `0 0 * * 1` - Run at midnight on every Monday
- `* 10,15,19 * * *` - run at 10:00, 15:00 and 19:00
- `1-15 * * * *` - run at 1, 2, 3...15 minute of each hour
- `*/2 * * * *` - run every two minutes
- `1-59/2 * * * *` - run every two minutes, but on odd minutes

Details: https://github.com/mileusna/crontab

### Pipelines

```yaml
---
type: pipeline
name: hello-world
description: |
  # Markdown description for your pipeline

when:
  some-fact:
    include: [value]
    exclude: [value]
    include env: [MY_ENV]
    exclude env: [MY_ENV]
    match: [^regexp$]
    mismatch: [^regexp$]
  env MY_ENV:

steps:
  - name: greet
    stage: greeting
    task: hello-world
    command: ["sh", "-c", "echo hello-world"]
    input: |
      data to be sent
      to stdin
    directory: /host/directory/to/be/mounted
    user: "user-or-uid"
    params:
      PARAM1: some-value
      PARAM2: { env: MY_ENV, replace: [/regexp/replacement/] }
      PARAM3: { var: MY_VAR, replace: [] }

    ignoreFailure: true

    when:
      fact:
        include: [value]
        exclude: [value]
        include env: [MY_ENV]
        exclude env: [MY_ENV]
        include var: [MY_ENV]
        exclude var: [MY_ENV]
        match: [^regexp$]
        mismatch: [^regexp$]
      env MY_ENV:
      var MY_VAR:
```

If a valid README file is found in the root of the repository, it is appended to all pipelines' descriptions.
You can disable this for individual pipelines by suffixing your description with `[no readme]`.
