# What is Reeve?

Reeve is an extensible open source CI / CD solution written in Go.
It can be integrated into various existing systems via its plugin system.

Reeve runs pipelines based on user defined triggers.
Each pipeline step is executed in dedicated containers, resulting in a high degree of reproducibility, isolation, and customizability.

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/reeve" target="_blank">
    <img alt="Server Docker Image Version" src="https://img.shields.io/docker/v/reeveci/reeve?logo=docker&label=reeveci%2Freeve" />
  </a>
  <a href="https://hub.docker.com/r/reeveci/reeve-worker" target="_blank">
    <img alt="Worker Docker Image Version" src="https://img.shields.io/docker/v/reeveci/reeve-worker?logo=docker&label=reeveci%2Freeve-worker" />
  </a>
  <a href="https://github.com/reeveci/reeve/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/github/license/reeveci/reeve?color=%239944ee" />
  </a>
</div>
