# Node Get Package Version

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-node-get-package-version" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-node-get-package-version?logo=docker&label=reeveci%2Fstep-node-get-package-version" />
  </a>
  <a href="https://github.com/reeveci/step-node-get-package-version/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/step-node-get-package-version?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/step-node-get-package-version" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/step-node-get-package-version?label=Source" />
  </a>
</div>

Loads the version of a node package into a runtime variable.

## Params

| Param        | Description                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------- |
| `FILE`       | Name of the package.json file (default: `package.json`) (`string`)                                |
| `RESULT_VAR` | Name of a runtime variable for setting the step result to (default: `PACKAGE_VERSION`) (`string`) |
