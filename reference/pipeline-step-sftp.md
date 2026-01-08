# SFTP

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-sftp" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-sftp?logo=docker&label=reeveci%2Fstep-sftp" />
  </a>
  <a href="https://github.com/reeveci/step-sftp/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/step-sftp?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/step-sftp" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/step-sftp?label=Source" />
  </a>
</div>

Transfers files using SFTP.

If no script file is specified with `SCRIPT`, `input` is used to specify the commands to be executed, e.g.:

```yaml
input: |
  put localfile.txt
  get remotefile.txt
```

## Params

| Param                | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `SSH_LOGIN_USER`     | SSH user (`string`)                                                            |
| `SSH_LOGIN_PASSWORD` | SSH password (`string`)                                                        |
| `SSH_LOGIN_KEY`      | SSH private key file (`string`)                                                |
| `HOST`               | Host to connect to (`string`)                                                  |
| `PORT`               | Custom port to connect to (`string`)                                           |
| `SSH_OPTIONS`        | Additional SSH options (e.g. `-o Option1=value -o Option2=value`) (`string`)   |
| `SCRIPT`             | Script file to be executed (or `-` for stdin) (default: `-`) (`string \| "-"`) |
