# Writing Pipelines

Although it depends on the plugin used, Reeve pipelines are usually written using a YAML file called `.reeve.yaml` or `.reeve.yml`, which is typically located in the root directory of your Git repository.

This YAML file consists of several documents, which are separated by a line `---`.

Each document describes a single entity, e.g. a pipeline or an environment variable.

Click [here](/reference/yaml-reference) for a full reference of the YAML API.

## File Includes

File Includes are used for importing additional YAML files.
The file to be included must end with one of the extensions `.yaml`, `.yml`, `.yaml.tmpl` or `.yml.tmpl`.

When including a [template file](/guide/templating), the field `templateData` can be used to provide arbitrary parameters to the template.

::: code-group

```yaml [.reeve.yaml]
---
type: include
path: path/to/file.yaml

---
type: include
path: path/to/file.yaml.tmpl
templateData:
  foo: bar
```

:::

## Environment Variables

Environment variables are used for static configuration to be used in pipelines.

There are plugins that provide environment variables for all pipelines regardless of their origin, but you can also define environment variables in your YAML files.
In this case, the environment variables are only available for the pipelines in the corresponding project / Git repository.

Click [here](/guide/variables) for more information about variables.

::: code-group

```yaml [.reeve.yaml]
---
type: variable
name: MY_ENV
value: some-value
```

:::

## Secrets

Secrets are environment variables with confidential values.
The value needs to be encrypted using the [CLI](/reference/cli) integration of the specific plugin that also provides the pipeline definition, e.g. using the [Gitea plugin](/reference/plugin-gitea#cli-integration):

```sh
reeve ask gitea encrypt 'some-value'
```

::: code-group

```yaml [.reeve.yaml]
---
type: secret
name: MY_ENV
value: some-encrypted-value
```

:::

## Triggers

Triggers are used to call [actions](/guide/actions) regularly based on [Cron schedules](/guide/cron).

::: code-group

```yaml [.reeve.yaml]
---
type: trigger
cron: * * * * *
action: some-action
```

:::

## Pipelines

Pipelines are used for running a number of [steps](/reference/pipeline-step-overview) on specific [conditions](/guide/conditions), e.g. when a commit is pushed into a Git repository or when an [action](/guide/actions) is triggered.

For Git based pipelines, if a valid README file is found in the root of the Git repository, it is appended to all corresponding pipelines' descriptions. You can disable this for individual pipelines by adding `[no readme]` to your pipeline's `description` field.

::: code-group

```yaml [.reeve.yaml]
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

:::
