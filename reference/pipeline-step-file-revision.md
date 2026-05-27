# File Revision

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-file-revision" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-file-revision?logo=docker&label=reeveci%2Fstep-file-revision" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/step-file-revision?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/step-file-revision?label=Source" />
  </a>
</div>

Generates a revision string for a set of files.

This step creates a revision string for the specified set of files and is intended to be used for detecting changes in configuration files.
The step supports [glob patterns](https://pkg.go.dev/github.com/bmatcuk/doublestar/v4#Match).
The files' mode, ownership and contents are included in the hash.

The step sets a runtime variable that changes whenever the files' contents are updated.
This can be used to automatically redeploy services when the files change.

## Params

| Param          | Description                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FILES`        | Space separated list of [file patterns](https://pkg.go.dev/github.com/bmatcuk/doublestar/v4#Match) to be included (shell syntax) (`string`)                                                                                                       |
| `REVISION_VAR` | Name of a runtime variable for setting the files' revision to - this value can for example be applied to related containers as an environment variable in order to automatically update them when a file changes (default: `FILE_REV`) (`string`) |
