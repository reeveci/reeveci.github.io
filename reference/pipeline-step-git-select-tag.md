# Git Select Tag

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-git-select-tag" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-git-select-tag?logo=docker&label=reeveci%2Fstep-git-select-tag" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/step-git-select-tag?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/step-git-select-tag?label=Source" />
  </a>
</div>

Loads a specific Git tag into a runtime variable.

## Params

| Param         | Description                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| `MATCH`       | Glob to be matched against the tag (`string`)                                                 |
| `COMMIT`      | Commit-ish to be used as base point (default: `HEAD`) (`string`)                              |
| `SED_COMMAND` | SED command for editing the selected tag name <Badge type="tip" text="optional" /> (`string`) |
| `RESULT_VAR`  | Name of a runtime variable for setting the step result to (default: `GIT_TAG`) (`string`)     |
