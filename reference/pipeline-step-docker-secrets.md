# Docker Secrets

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-docker-secrets" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-docker-secrets?logo=docker&label=reeveci%2Fstep-docker-secrets" />
  </a>
  <a href="https://github.com/reeveci/step-docker-secrets/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/step-docker-secrets?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/step-docker-secrets" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/step-docker-secrets?label=Source" />
  </a>
</div>

Sets up a Docker volume with secret files.

This step creates a volume that contains secret files similar to how [Docker secrets](https://docs.docker.com/engine/swarm/secrets/) work.
Howether, it uses generic Docker volumes for this purpose, which allows changing their contents even while they are being used by running services.

The step sets a runtime variable that changes whenever the volume's contents are updated.
This can be used to automatically redeploy services when the secrets change.

## Params

| Param               | Description                                                                                                                                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VOLUME`            | Name of the volume (`string`)                                                                                                                                                                                                                           |
| `TARGET_UID`        | User ID owning the files (default: `1000`) (`number`)                                                                                                                                                                                                   |
| `TARGET_GID`        | Group ID owning the files (default: `1000`) (`number`)                                                                                                                                                                                                  |
| `FILE_MODE`         | Mode to apply to the secrets (default: `0440`) (`number`)                                                                                                                                                                                               |
| `REVISION_VAR`      | Name of a runtime variable for setting the volume's revision to - this value can for example be applied to related containers as an environment variable in order to automatically update them when a secret changes (default: `SECRET_REV`) (`string`) |
| `SECRET_<name>`     | Names and values of the secrets to be written to the volume (`string`)                                                                                                                                                                                  |
| `SECRETFILE_<name>` | Names and paths to the secrets to be written to the volume (`string`)                                                                                                                                                                                   |

## Trust

This step requires access to the Docker socket. See [Trusted Tasks](/guide/trusted-tasks) for more information.
