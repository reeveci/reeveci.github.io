# Gitea / Forgejo Test Package

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-forgejo-test-package" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-forgejo-test-package?logo=docker&label=reeveci%2Fstep-forgejo-test-package" />
  </a>
  <a href="https://github.com/reeveci/step-forgejo-test-package/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/step-forgejo-test-package?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/step-forgejo-test-package" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/step-forgejo-test-package?label=Source" />
  </a>
</div>

Tests whether files are present in a generic [Forgejo](https://forgejo.org) or [Gitea](https://gitea.com) package.

The files are selected using [glob patterns](https://pkg.go.dev/github.com/bmatcuk/doublestar/v4#Match).

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
| `FAIL`            | Whether the task should fail on the specified condition (default: `exists`) (`"exists" \| "does-not-exist" \| "false"`)                     |
| `RESULT_VAR`      | Name of a runtime variable for setting the step result (`"failure" \| "exists" \| "does-not-exist"`) to (`string`)                          |
