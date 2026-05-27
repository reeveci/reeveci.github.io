# Gitea / Forgejo Upload Package

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-forgejo-upload-package" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-forgejo-upload-package?logo=docker&label=reeveci%2Fstep-forgejo-upload-package" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/step-forgejo-upload-package?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/step-forgejo-upload-package?label=Source" />
  </a>
</div>

Uploads files to a generic [Forgejo](https://forgejo.org) or [Gitea](https://gitea.com) package.

The files to be uploaded are determined using [glob patterns](https://pkg.go.dev/github.com/bmatcuk/doublestar/v4#Match).

## Params

| Param             | Description                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `API_URL`         | Forgejo API URL (`string`)                                                                                                                  |
| `API_USER`        | User for authentication (`string`)                                                                                                          |
| `API_PASSWORD`    | Password for authentication (`string`)                                                                                                      |
| `PACKAGE_OWNER`   | Owner of the package (`string`)                                                                                                             |
| `PACKAGE_NAME`    | Package name (`string`)                                                                                                                     |
| `PACKAGE_VERSION` | Package version (`string`)                                                                                                                  |
| `FILES`           | Space separated list of [file patterns](https://pkg.go.dev/github.com/bmatcuk/doublestar/v4#Match) to be included (shell syntax) (`string`) |
| `SKIP_EXISTING`   | Skip existing files to prevent the task from failing if a file has already been uploaded (default: `true`) (`"true" \| "false"`)            |

<!-- | `PACKAGE_REPOSITORY` | Repository to which the package is to be linked <Badge type="tip" text="optional" /> (`string`)                                                                          | -->
