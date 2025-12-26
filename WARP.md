# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an HTML comprehensive guide built as an educational resource using Astro with the Starlight theme. The project serves as an open-source book teaching HTML fundamentals, written in public. The content is structured as chapters covering different aspects of the HTML standard.

## Architecture

**Tech Stack:**
- **Astro 4.x** - Static site generator and build tool
- **Starlight** - Astro integration providing documentation theme and features
- **TypeScript** - Type checking and configuration (strict mode)
- **Sharp** - Image optimization

**Content Structure:**
- Content lives in `src/content/docs/` as Markdown/MDX files
- Book chapters are organized in `src/content/docs/book/chapterXXX/` directories
- Each chapter has an `index.md` file with frontmatter containing title, keywords, and description
- Images and assets go in `src/assets/`
- Static assets (favicons, etc.) go in `public/`

**Key Configuration:**
- `astro.config.mjs` - Main Astro configuration with Starlight integration
- `src/content/config.ts` - Content collections schema using Starlight's docsSchema
- Navigation sidebar is defined in the astro config, not auto-generated

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- <command>
```

## Development Workflow

**Adding New Chapters:**
1. Create new directory: `src/content/docs/book/chapterXXX/`
2. Add `index.md` with proper frontmatter (title, keywords, description)
3. Update the sidebar navigation in `astro.config.mjs`

**Content Guidelines:**
- Chapters follow a consistent structure with educational content about HTML
- Code examples use proper HTML markup with syntax highlighting
- Frontmatter should include relevant keywords for SEO
- Content focuses on semantic HTML and web standards

**VS Code Setup:**
- Recommended extension: `astro-build.astro-vscode`
- LTeX spell checking configured for English
- Launch configuration available for debugging

## Important Notes

- The project uses strict TypeScript configuration
- Content schema is managed by Starlight's docsSchema
- Images should be optimized using Sharp (handled automatically)
- The site builds to `dist/` directory
- Development server runs on port 4321 by default