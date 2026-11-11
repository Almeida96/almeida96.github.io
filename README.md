# Igor Almeida

[Portfolio](https://almeida96.github.io/) · [Português](https://almeida96.github.io/pt/)

Four engineering case studies cover trace regressions, changed-line test coverage, MCP replay and dead-letter queue recovery. Each study links to the project and a reproducible example. The [application directory](https://almeida96.github.io/#apps) describes mobile, web, desktop and game projects at their current stages.

## Run locally

From the repository root, run the following commands with Node.js and Python 3 installed.

```sh
node build.mjs --pages
python -m http.server 8000 --directory docs
```

Open [the local portfolio](http://localhost:8000/). The build uses only Node's built-in modules.

## Edit a project

Update `app-index.mjs` for applications, `project-index.mjs` for the open-source directory, and `cases.mjs` or `queue-case.mjs` for case studies. Each entry carries its English and Portuguese text together. The layout and navigation live in `build.mjs`. Styles, fonts and evidence images are in `docs/assets/`.

Run `node build.mjs --pages` after editing content and commit the updated source and generated pages. GitHub Pages serves `docs/` from `main`.
