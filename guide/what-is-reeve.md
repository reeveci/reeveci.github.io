# What is Reeve?

Reeve is an extensible open source CI / CD solution written in Go.
It can be integrated into various existing systems via its plugin system.

Reeve runs pipelines based on user defined triggers.
Each pipeline step is executed in dedicated containers, resulting in a high degree of reproducibility, isolation, and customizability.

<div style="display: flex; flex-wrap: wrap; gap: .5em; margin: 1.6em 0 -.3em">
  <a href="https://hub.docker.com/r/reeveci/reeve" target="_blank">
    <img height="20" width="171" src="https://img.shields.io/docker/v/reeveci/reeve?logo=docker&label=server%20image%20version" alt="Server Docker Image Version" />
  </a>
  <a href="https://hub.docker.com/r/reeveci/reeve-worker" target="_blank">
    <img height="20" width="169" src="https://img.shields.io/docker/v/reeveci/reeve-worker?logo=docker&label=worker%20image%20version" alt="Worker Docker Image Version" />
  </a>
  <a href="https://github.com/reeveci/reeve/blob/main/LICENSE" target="_blank">
    <img height="20" width="78" src="https://img.shields.io/github/license/reeveci/reeve?color=%239944ee" alt="MIT license" />
  </a>
</div>
