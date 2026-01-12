# Conditions

Conditions are used to describe when and where your pipeline and further individual pipeline steps should be run by adding them to the corresponding `when` field.

With a condition, a set of comparison values (selected from a [fact](#facts), [environment variable](/guide/variables#environment-variables) or [runtime variable](/guide/variables#runtime-variables)) is tested against a defined set of rules:

| Rule       | Description                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `include`  | At least one of the provided values must be contained in the set of comparison values                             |
| `exclude`  | None of the provided values may be contained in the set of comparison values                                      |
| `match`    | At least one of the provided [regular expressions](/guide/regex) must match at least one of the comparison values |
| `mismatch` | None of the provided [regular expressions](/guide/regex) may match any of the comparison values                   |

If a set of comparison values is empty or a rule is empty, the condition is always met.
If there are multiple rules for a single set of comparison values, those rules are combined with logical `AND`.

## Facts

Facts are pieces of information used to provide context when checking conditions.
They can relate to the environment where your pipeline is hosted, an event or arbitrary other information.
A single fact can describe multiple values at once, e.g. an array of files that were changed in a specific Git commit or similar.

The following facts are provided by default:

| Condition     | Description                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------- |
| `workerGroup` | Available worker groups - the pipeline is executed on each matching worker group (`string`) |

## Git based pipelines

The following facts are provided for Git based pipelines:

| Condition    | Description                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `trigger`    | The type of event - either a combination of `push` and `commit` or `tag`, or `action` (`"push" \| "commit" \| "tag" \| "action"`) |
| `action`     | [Action](/guide/actions) (available for `action` triggers) (`string`)                                                             |
| `ref`        | Git ref of the head commit or tag, e.g. `refs/heads/main` or `refs/tags/v1.0.0` (`string`)                                        |
| `branch`     | Git branch (not available for `tag` triggers) (`string`)                                                                          |
| `tag`        | Git tag (available for `tag` triggers) (`string`)                                                                                 |
| `file`       | Affected file(s) (available for `commit` triggers) (`string`)                                                                     |
| `repository` | Full name of the Git repository, e.g. `reeveci/reeve`                                                                             |

The following default conditions apply to pipelines defined in Git repositories (e.g. using the [Gitea plugin](/reference/plugin-gitea)):

- Pipelines run only on `commit` by default
- Pipelines run only on the Git repository's default branch
- All actions are excluded by default (this prevents your pipeline from running always if you set `trigger` to `action` but forget to add a condition for `action`)
