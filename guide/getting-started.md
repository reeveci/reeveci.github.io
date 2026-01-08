# Getting Started

## 1. Start the server

The recommended way to run the server is to use the officially available Docker image.

::: tip IMPORTANT

You **MUST change the secrets** in the examples below in a production environment to your own secure values, e.g. with:

```sh
openssl rand -hex 16
```

:::

::: code-group

```yaml [docker-compose.yml]
# Run with `docker compose up -d`
services:
  reeve:
    image: reeveci/reeve:latest
    restart: unless-stopped
    environment:
      REEVE_MESSAGE_SECRETS: "UNSECURE-DO-NOT-USE-message-secret"
      REEVE_CLI_SECRETS: "UNSECURE-DO-NOT-USE-cli-secret"
      REEVE_WORKER_SECRETS: "UNSECURE-DO-NOT-USE-worker-secret"
      REEVE_WORKER_GROUPS: "my-group-1 my-group-2"
      # REEVE_SHARED_...: "... shared plugin configuration ..."
      # REEVE_PLUGIN_...: "... plugin configuration ..."
    volumes:
      - ./reeve-server/plugins:/etc/reeve/plugins
    ports:
      - 9080:9080
```

```sh [docker run]
docker run -d \
  --name reeve \
  --restart unless-stopped \
  -e REEVE_MESSAGE_SECRETS='UNSECURE-DO-NOT-USE-message-secret' \
  -e REEVE_CLI_SECRETS='UNSECURE-DO-NOT-USE-cli-secret' \
  -e REEVE_WORKER_SECRETS='UNSECURE-DO-NOT-USE-worker-secret' \
  -e REEVE_WORKER_GROUPS='my-group-1 my-group-2' \
  --volume ./reeve-server/plugins:/etc/reeve/plugins \
  -p 9080:9080 \
  reeveci/reeve:latest
```

:::

:::: details Click to view complete `docker-compose.yml` including local worker

::: code-group

```yaml [docker-compose.yml]
networks:
  reeve:

services:
  reeve:
    image: reeveci/reeve:latest
    restart: unless-stopped
    environment:
      REEVE_MESSAGE_SECRETS: "UNSECURE-DO-NOT-USE-message-secret"
      REEVE_CLI_SECRETS: "UNSECURE-DO-NOT-USE-cli-secret"
      REEVE_WORKER_SECRETS: "UNSECURE-DO-NOT-USE-worker-secret"
      REEVE_WORKER_GROUPS: "my-group-1 my-group-2"
      # REEVE_SHARED_...: "... shared plugin configuration ..."
      # REEVE_PLUGIN_...: "... plugin configuration ..."
    volumes:
      - ./reeve-server/plugins:/etc/reeve/plugins
    ports:
      - 9080:9080
    networks:
      - reeve

  reeve-worker:
    image: reeveci/reeve-worker:latest
    restart: unless-stopped
    environment:
      REEVE_SERVER_URL: "http://reeve:9080"
      REEVE_WORKER_SECRET: "UNSECURE-DO-NOT-USE-worker-secret"
      REEVE_WORKER_GROUP: "my-group-1"
      REEVE_RUNNER_IMAGE: "reeveci/reeve-runner:latest"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    networks:
      - reeve
    deploy:
      # Configure concurrency
      replicas: 3
```

:::

::::

## 2. Add plugins

Reeve uses plugins to integrate other software.
You can add Reeve plugins to the plugin directory (`/etc/reeve/plugins`).

To install a plugin from source, use the `go install` command:

::: tip

Replace `/etc/reeve/plugins` with the path of your plugin directory.

:::

::: code-group

```sh [Latest version]
CGO_ENABLED=0 GOBIN=/etc/reeve/plugins go install github.com/reeveci/plugin-webui@latest
```

```sh [Specific version]
CGO_ENABLED=0 GOBIN=/etc/reeve/plugins go install github.com/reeveci/plugin-webui@v1.8.2
```

:::

Configuration for each plugin is provided as environment variables to the Reeve server.
Each plugin uses its own prefix `REEVE_PLUGIN_<plugin identifier>_`.
If you want to specify a setting for all available plugins, use the `REEVE_SHARED_` prefix instead.

::: code-group

```yaml{7-8} [docker-compose.yml]
services:
  reeve:
    image: reeveci/reeve:latest
    # ...
    environment:
      # ...
      REEVE_SHARED_CONFIG_PATH: "/etc/reeve/config"
      REEVE_PLUGIN_WEBUI_ENABLED: "true"
```

:::

:::: details Click to see how to build your own Docker image with your plugins preinstalled

::: code-group

```Dockerfile [Dockerfile]
# Build with `docker build -t my-reeve-server .`
FROM golang AS builder

ENV CGO_ENABLED=0
ENV GOBIN=/build

# Add / replace the following lines with the plugins you want to include in your build
RUN go install github.com/reeveci/plugin-gitea@latest
RUN go install github.com/reeveci/plugin-local@latest
RUN go install github.com/reeveci/plugin-webui@latest

FROM reeveci/reeve:latest

COPY --chmod=755 --from=builder /build/plugin-* /etc/reeve/plugins/

VOLUME /etc/reeve/config

ENV REEVE_PLUGIN_DIRECTORY=/etc/reeve/plugins
ENV REEVE_SHARED_CONFIG_PATH=/etc/reeve/config
```

:::

::::

## 3. Start workers

Workers are grouped into `worker groups`. A pipeline specifies which worker group(s) it should be executed on.
When a pipeline is triggered, it is run on an available worker assigned to the specified worker group.
Before adding a worker, you must register the desired worker group on the server using the `REEVE_WORKER_GROUPS` environment variable.

To achieve concurrency, simply add multiple workers to the same worker group.

::: danger IMPORTANT

The HTTP connection between the workers and the server (specified by `REEVE_SERVER_URL`) is used to forward pipelines, including secrets, to the worker.
The connection **MUST** be **encrypted** and **trusted** in a production environment, otherwise you run the risk of **exposing your secrets** to third parties or attackers and creating a vulnerability for Man-in-the-middle attacks and further **remote code execution** attacks.

Use TLS with a trusted certificate or consider a 3rd party ZTN solution like [Tailscale](https://tailscale.com) (recommended).

:::

::: code-group

```yaml [docker-compose.yml]
# Run with `docker compose up -d`
services:
  reeve-worker:
    image: reeveci/reeve-worker:latest
    restart: unless-stopped
    environment:
      REEVE_SERVER_URL: "https://my-reeve-server-ip:9080" # This connection MUST be encrypted and trusted
      REEVE_WORKER_SECRET: "UNSECURE-DO-NOT-USE-worker-secret"
      REEVE_WORKER_GROUP: "my-group-1"
      REEVE_RUNNER_IMAGE: "reeveci/reeve-runner:latest"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    deploy:
      # Configure concurrency
      replicas: 3
```

```sh [docker run]
docker run -d \
  --name reeve-worker \
  --restart unless-stopped \
  -e REEVE_SERVER_URL='https://my-reeve-server-ip:9080' \
  -e REEVE_WORKER_SECRET='UNSECURE-DO-NOT-USE-worker-secret' \
  -e REEVE_WORKER_GROUP='my-group-1' \
  -e REEVE_RUNNER_IMAGE='reeveci/reeve-runner:latest' \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  reeveci/reeve-worker:latest
```

:::
