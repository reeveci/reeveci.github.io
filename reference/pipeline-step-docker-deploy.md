# Docker Deploy

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-docker-deploy" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-docker-deploy?logo=docker&label=reeveci%2Fstep-docker-deploy" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/step-docker-deploy?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/step-docker-deploy?label=Source" />
  </a>
</div>

Deploys services in a Docker environment.

## Params

| Param                     | Description                                                                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `DOCKER_LOGIN_REGISTRIES` | Space separated list of Docker registries to log in to (`user:password@registry`) (`string`)                                                   |
| `MODE`                    | Whether to use compose v1, v2 or swarm mode (default: `swarm`) (`"v1" \| "v2" \| "swarm"`)                                                     |
| `NAME`                    | Compose project name <Badge type="warning" text="required for swarm mode" /> (`string`)                                                        |
| `FILE`                    | Compose file name (use `-` for STDIN) (`string \| "-"`)                                                                                        |
| `CONTEXT`                 | Context directory (relative to project root) (default: `.`) (`string`)                                                                         |
| `COMPOSE_BUILD`           | Whether to build images before starting containers (default: `missing`) (`"always" \| "missing" \| "never"`)                                   |
| `COMPOSE_RECREATE`        | Whether to recreate containers even if their configuration and image haven't changed (default: `missing`) (`"always" \| "missing" \| "never"`) |
| `COMPOSE_PULL`            | Whether to pull images before running (default: `missing`) (`"always" \| "missing" \| "never"`)                                                |
| `SWARM_PULL`              | Whether to query the registry to resolve image digest and supported platforms (default: `always`) (`"always" \| "changed" \| "never"`)         |
| `STATE`                   | Whether to deploy or remove the services (default: `present`) (`"present" \| "absent"`)                                                        |

## Trust

This step requires access to the Docker socket. See [Trusted Tasks](/guide/trusted-tasks) for more information.
