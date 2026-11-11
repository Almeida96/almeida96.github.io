# Igor Almeida

[Portfolio](https://almeida96.github.io/) · [Português](https://almeida96.github.io/pt/)

Four engineering case studies cover trace regressions, changed-line test coverage, MCP replay and dead-letter queue recovery. Each study links to the project and a reproducible example. The [application gallery](https://almeida96.github.io/#apps) covers eight mobile, web, desktop and game projects. Each has screenshots, a walkthrough and notes on its implementation and current stage.

## Run locally

From the repository root, run the following commands with Node.js and Python 3 installed.

```sh
node build.mjs --pages
python -m http.server 8000 --directory docs
```

Open [the local portfolio](http://localhost:8000/). The build uses only Node's built-in modules.

## Edit a project

Edit `app-index.mjs` for the application cards and `app-studies.mjs` for their individual pages. Full-size app images and their thumbnails live in `docs/assets/apps/`. Their dimensions and bilingual captions are in `app-media.mjs`.

Edit `project-index.mjs` for the open-source directory and `cases.mjs` or `queue-case.mjs` for engineering case studies. Each entry carries its English and Portuguese text together. The layout and navigation live in `build.mjs`. Styles, fonts and evidence images are in `docs/assets/`.

Run `node build.mjs --pages` after editing content and commit the updated source and generated pages. GitHub Pages serves `docs/` from `main`.
