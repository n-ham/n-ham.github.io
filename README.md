# Nicholas Ham personal website

A personal website built with [Nift](https://nift.dev).

## Build

From this directory:

```sh
nift build
nift status
```

The generated website lives in `public/`.

## Project structure

- `content/` contains page, CSS and JavaScript sources.
- `templates/` contains the shared document shell.
- `.nift/` contains the tracked-page configuration and build state.
- `public/` is the generated/deployment repository.

Nift builds all tracked HTML, CSS and JavaScript. Binary fonts and images live
directly in `public/assets/`. They are not tracked as Nift pages, but templates
and content reference them with `@pathto(...)` so relationships are checked.

See `HANDOVER.md` for the project's Nift working conventions.
