# nick

A minimal personal homepage, built with Nift 4.9.0 and plain HTML, CSS, and JavaScript. The quiet layout is inspired by https://t3.gg/; restrained pink accents give it a terminal character.

## Repository layout

The `stage` branch contains Nift sources and configuration. The `main` branch contains the published website, checked out separately in `public/`; that directory is ignored by the root repository. Nift build metadata in `.nift/public/` is also ignored.

For a fresh source checkout, clone the output branch before building so the self-hosted fonts, CSS, JavaScript, and favicon are available:

```sh
git clone --branch main --single-branch https://github.com/n-ham/n-ham.github.io.new.git public
```

Commit and push `public/` on `main` first, then the root project on `stage`.

## Build and preview

```sh
nift build
nift status
python3 -m http.server 8791 --bind 127.0.0.1 --directory public
```

Open http://127.0.0.1:8791/.

## Editing

- `content/index.html`: homepage links and text-only `experience.md` and `research.md` dialogs with visible Markdown syntax and highlighted headings.
- `templates/template.html` and `templates/head.html`: document composition and metadata.
- `public/assets/css/style.css`: stylesheet, edited directly in the output tree.
- `public/assets/js/script.js`: dialog interactions; native dialog supplies keyboard and focus behaviour.
- `public/assets/favicon.png`: unchanged favicon from n-ham.com.
- `.nift/config.json` and `.nift/tracked.json`: retained Nift project configuration; one tracked homepage.

Follow `HANDOVER.md`. Build after source/template changes; never edit generated `public/index.html`. Static assets are intentionally untracked by Nift and have no duplicate source copies.

Experience text is condensed from the existing https://n-ham.com/experience.html. No old photographs or videos are included. The project links are https://nift.dev/, https://strut.cx/, and https://gantry.cv/.

Experience opens as a modal and closes with the close button, Escape, or a click outside. JetBrains Mono is self-hosted under the SIL Open Font License (included in `public/assets/fonts/JetBrainsMono-OFL.txt`); font source: https://github.com/JetBrains/JetBrainsMono. The blinking block cursor matches the shell benchmark accent, #ed85dc.

The homepage is centered vertically, with a solid background and left-to-right link highlights (0.5 seconds). Contact email: nicholas.charles.ham@gmail.com.

No framework, analytics, externally hosted fonts, or runtime dependencies are required. This project has not been deployed.

Research publications, theses, and OEIS contributions are retained from https://n-ham.com/retired-site-redesign/research.html. Teaching and academic community work live in Experience. Both dialogs share dismissal and focus behaviour; CSS and JavaScript URLs carry asset versions to refresh cached files.
