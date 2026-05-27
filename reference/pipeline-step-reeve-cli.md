# Reeve CLI

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-reeve-cli" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-reeve-cli?logo=docker&label=reeveci%2Fstep-reeve-cli" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/pipeline-steps?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/pipeline-steps" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/pipeline-steps?label=Source" />
  </a>
</div>

Controls a Reeve server using [Reeve CLI](/reference/cli).

Use `command` to specify the CLI command, e.g.:

```yaml
command: reeve ask --list
```

## Params

| Param    | Description                 |
| -------- | --------------------------- |
| `URL`    | Reeve server URL (`string`) |
| `SECRET` | Reeve CLI secret (`string`) |
