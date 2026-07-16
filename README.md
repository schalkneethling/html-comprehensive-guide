# HTML: A Comprehensive Guide

A comprehensive guide book of the core, semantic language of the web. Written in public and released as open source.

## Project direction

The project is being reimagined as **HTML — The Living Web**, a specification-grounded, interactive journey for working web developers. Read the [project goal](GOAL.md) and the [planning index](planning/README.md) for the vision, product requirements, roadmap, research, and delivery epics.

## Current baseline

The current implementation is an early Astro/Starlight documentation site. It is source material and scaffolding for the fresh product described in the planning documents, not the target architecture.

## 🚀 Current Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview the build locally                        |
| `pnpm run astro ...`       | Run Astro CLI commands                           |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
