# Pipeline Steps

Pipeline steps are Docker images that perform dedicated actions.

You can use any Docker image that you like as a pipeline step, however, Reeve provides a collection of images to perform commonly used actions.

All pipeline steps run in [interactive mode](https://docs.docker.com/reference/cli/docker/container/run/#interactive).

All pipeline steps share a common volume located at `/reeve`, other than that, they are isolated from each other.
The common workdir to be used is at `/reeve/src`.

If specified in the pipeline definition, a host directory can be mounted at `/reeve/mount`. If this is the case, the working directory of the container is also set to this directory.

Pipeline steps can be configured using params, which are passed as environment variables to the container.

Additionally, the following environment variables are available for all containers:

- `REEVE_PARAMS` contains a JSON encoded array of all params.
  This is used in some special cases when it is required to determine which environment variables where provided by Reeve and which come from the container OS.
- `REEVE_API` points to the container API that can be used to communicate with the pipeline runner (e.g. for setting runtime variables).
