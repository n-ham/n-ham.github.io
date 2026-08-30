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

- `content/` contains page, CSS, JavaScript, font and image sources.
- `templates/` contains the shared document shell.
- `.nift/` contains the tracked-page configuration and build state.
- `public/` is the generated/deployment repository.

Nift builds all tracked HTML, CSS and JavaScript. The binary fonts and images
are retained under `content/assets/` as their source collection and mirrored
to `public/assets/` for deployment. When those binary assets change, mirror
them before building:

```sh
cp -a content/assets/images/. public/assets/images/
cp -a content/assets/fonts/. public/assets/fonts/
nift build
```

See `HANDOVER.md` for the project's Nift working conventions.

