# Notify

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-notify" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-notify?logo=docker&label=reeveci%2Fstep-notify" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/pipeline-steps?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/pipeline-steps?label=Source" />
  </a>
</div>

Sends notifications using [Shoutrrr](https://containrrr.dev/shoutrrr).

## Params

| Param          | Description                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| `URLS`         | Space separated list of [service URLs](https://containrrr.dev/shoutrrr/services/overview) (`string`) |
| `MESSAGE`      | Message to be sent - can contain other params as variables (`string`)                                |
| `PARAM_<name>` | Additional service params and their corresponding values (`string`)                                  |
