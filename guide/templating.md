# Templating

For advanced purposes, Go templating is supported in pipeline definition files.
This feature is particularly useful for avoiding the need to write repetitive pipeline definitions.

To enable this feature for a file, append the extension `.tmpl` to its name (e.g. `/.reeve.yaml.tmpl`).
Files with the `.tmpl` extension must be valid [Go templates](https://pkg.go.dev/text/template),
and can use [sprig template functions](https://masterminds.github.io/sprig/).

When [importing](/guide/writing-pipelines#file-includes) a template into another file, arbitrary parameters can be passed into the template.
Those parameters are available as the value of dot, e.g.:

::: code-group

```yaml{5-6} [.reeve.yaml]
---
type: include
name: /test.yaml.tmpl
templateData:
  var: Name
  val: Value
```

```yaml.tmpl{3-4} [test.yaml.tmpl]
---
type: variable
name: "{{ .var }}"
value: "{{ .val }}"
```

:::

::: tip CAVEAT

The parameters are passed to the template unchanged, that is, they are not escaped in any way.
You must ensure that the result of the template is valid YAML, e.g., by using the `toJson` function.

```yaml.tmpl
{{ toJson .val }}
```

:::
