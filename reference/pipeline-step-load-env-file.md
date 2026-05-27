# Load Env File

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-load-env-file" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-load-env-file?logo=docker&label=reeveci%2Fstep-load-env-file" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/step-load-env-file?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/step-load-env-file?label=Source" />
  </a>
</div>

Loads runtime variables from .env files.

The files are selected using [glob patterns](https://pkg.go.dev/github.com/bmatcuk/doublestar/v4#Match).

Params starting with `ENV_` specify which variables to load and how they should be named. E.g. the following loads the variable `REEVE_VERSION` from the file `.env` and stores the value in the runtime variable `IMAGE_VERSION`.

```yaml
params:
  FILES: .env
  ENV_REEVE_VERSION: IMAGE_VERSION
```

## Params

| Param        | Description                                                                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FILES`      | Space separated list of [file patterns](https://pkg.go.dev/github.com/bmatcuk/doublestar/v4#Match) to be included (shell syntax) (default: `**/*.env`) (`string`) |
| `LOAD_ALL`   | Whether to load all variables from the env files (default: `false`) (`"true" \| "false"`)                                                                         |
| `ENV_<name>` | Variables to be loaded from the files and their corresponding runtime variable names to be used in Reeve (`string`)                                               |
