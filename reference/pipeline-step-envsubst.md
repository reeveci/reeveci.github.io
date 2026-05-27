# Envsubst

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-envsubst" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-envsubst?logo=docker&label=reeveci%2Fstep-envsubst" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/pipeline-steps?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/pipeline-steps?label=Source" />
  </a>
</div>

Substitutes the values of environment variables.

The files to be substituted are selected using [glob patterns](https://pkg.go.dev/github.com/bmatcuk/doublestar/v4#Match).

Params starting with `ENV_` specify which variables to substitute and their value. E.g. the following substitutes the variable `REEVE_VERSION` with the value `1.2.3` in the file `docker-compose.yml`.

```yaml
params:
  FILES: docker-compose.yml
  ENV_REEVE_VERSION: "1.2.3"
```

## Params

| Param            | Description                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `FILES`          | Space separated list of [file patterns](https://pkg.go.dev/github.com/bmatcuk/doublestar/v4#Match) to be included (shell syntax) (`string`) |
| `SUBSTITUTE_ALL` | Whether to substitute all variables in the files, even if no value was provided for them (default: `false`) (`"true" \| "false"`)            |
| `ENV_<name>`     | Variables to be substituted and their corresponding values (`string`)                                                                       |
