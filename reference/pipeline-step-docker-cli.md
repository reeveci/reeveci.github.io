# Docker CLI

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-docker-cli" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-docker-cli?logo=docker&label=reeveci%2Fstep-docker-cli" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/pipeline-steps?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/pipeline-steps?label=Source" />
  </a>
</div>

Executes Docker commands.

Use `command` to specify the command to be executed, e.g.:

```yaml
command: docker system prune -f
```

## Params

| Param                     | Description                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| `DOCKER_LOGIN_REGISTRIES` | Space separated list of Docker registries to log in to (`user:password@registry`) (`string`) |
| `CONTEXT`                 | Context directory (relative to project root) (default: `.`) (`string`)                       |

## Trust

This step requires access to the Docker socket. See [Trusted Tasks](/guide/trusted-tasks) for more information.
