# Docker Build

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-docker-build" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-docker-build?logo=docker&label=reeveci%2Fstep-docker-build" />
  </a>
  <a href="https://github.com/reeveci/step-docker-build/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/step-docker-build?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/step-docker-build" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/step-docker-build?label=Source" />
  </a>
</div>

Builds and publishes Docker images.

The step performs a test by default to check if an image with the requested tag already exists. This prevents accidental overwriting of existing images.

The test can either be performed by checking the image's manifest (default), which doesn't require the image to be downloaded, or by performing a pull.

## Params

| Param                     | Description                                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DOCKER_LOGIN_REGISTRIES` | Space separated list of Docker registries to log in to (`user:password@registry`) (`string`)                                                                           |
| `NAME`                    | Image name <Badge type="warning" text="required" /> (`string`)                                                                                                         |
| `TAG`                     | Image tag (`string`)                                                                                                                                                   |
| `TAG_ALIASES`             | Space separated list of additional image tags to use - params can be resolved as variables (`$MY_PARAM`) (default: `latest`) (`string`)                                |
| `FILE`                    | Dockerfile name (use `-` for STDIN) (`string \| "-"`)                                                                                                                  |
| `CONTEXT`                 | Context directory (relative to project root) (default: `.`) (`string`)                                                                                                 |
| `BUILD_ARGS`              | Space separated list of `ARG=VALUE` pairs (or just `ARG` to refer to params directly) - params can be resolved as variables (`ARG=$MY_PARAM` or `MY_PARAM`) (`string`) |
| `NETWORK`                 | Networking mode for RUN instructions during build (default: `default`) (`string`)                                                                                      |
| `USE_CACHE`               | Whether to use the build cache (default: `true`) (`"true" \| "false"`)                                                                                                 |
| `PLATFORM`                | Platform to be used if the server is multi-platform capable (`string`)                                                                                                 |
| `PULL`                    | Whether to attempt to pull a newer version of the image (default: `missing`) (`"always" \| "missing"`)                                                                 |
| `PUSH`                    | Whether to push the newly built image (default: `true`) (`"true" \| "false"`)                                                                                          |
| `TEST`                    | Whether to test for an existing image (default: `true`) (`"true" \| "fail" \| "false"`)                                                                                |
| `TEST_PULL`               | Whether to perform a pull for testing for an existing image (default: `false`) (`"true" \| "false"`)                                                                   |
| `RESULT_VAR`              | Name of a runtime variable for setting the step result (`"failure" \| "exists" \| "success"`) to (`string`)                                                            |
| `BUILD_DRIVER`            | Build driver to be used (default: `docker`) (`string`)                                                                                                                 |

## Trust

This step requires access to the Docker socket. See [Trusted Tasks](/guide/trusted-tasks) for more information.
