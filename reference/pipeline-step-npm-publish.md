# NPM Publish

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/step-npm-publish" target="_blank">
    <img alt="Docker Image Size" src="https://img.shields.io/docker/image-size/reeveci/step-npm-publish?logo=docker&label=reeveci%2Fstep-npm-publish" />
  </a>
  <a href="https://github.com/reeveci/step-npm-publish/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/step-npm-publish?color=%239944ee" />
  </a>
  <a href="https://github.com/reeveci/step-npm-publish" target="_blank">
    <img alt="Git Repository" src="https://img.shields.io/github/stars/reeveci/step-npm-publish?label=Source" />
  </a>
</div>

Publishes NPM packages.

## Params

| Param                | Description                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------- |
| `NPM_LOGIN_REGISTRY` | NPM registry to log in to (`string`)                                                     |
| `NPM_LOGIN_TOKEN`    | NPM token to log in with (instead of `NPM_LOGIN_USER` / `NPM_LOGIN_PASSWORD`) (`string`) |
| `NPM_LOGIN_USER`     | NPM user to log in with (instead of `NPM_LOGIN_TOKEN`) (`string`)                        |
| `NPM_LOGIN_PASSWORD` | NPM password to log in with (instead of `NPM_LOGIN_TOKEN`) (`string`)                    |
| `CONTEXT`            | Context directory (relative to project root) (default: `.`) (`string`)                   |
| `OTP`                | One-time password to use for publishing (`string`)                                       |
| `ACCESS`             | Access level (`"public" \| "restricted"`)                                                |
| `TAG`                | Tag to publish (`string`)                                                                |
