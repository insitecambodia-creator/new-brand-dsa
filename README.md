# New Brand (DSA) website — local prototype

Private, local-only foundation for the Astro replacement of https://asia.diot-siaci.com/. `New Brand` is a placeholder; the real brand, domain and launch date are unknown. **Nothing here is deployed or authorised for public preview.** See `DSA_Astro_Project_Brief.md` for scope and `docs/` for plans and decisions.

## Requirements

- Node.js **>= 22.23.4** (`.nvmrc` pins 22.23.4). Astro 7.4.2 requires it; older Node 22 releases will not satisfy the engine range.
- npm 10+. The lockfile (`package-lock.json`) is committed; use `npm ci`.

## Commands

| Command | Purpose |
|---|---|
| `npm ci` | Install exact dependency versions |
| `npm run dev` | Local dev server (http://localhost:4321) |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the build locally |
| `npm run check` | Astro/TypeScript diagnostics and content-schema validation |
| `npm run inventory` | Build the URL inventory from the sitemap XML files in `docs/source/` |
| `npm run test:inventory` | Unit tests for the inventory parser (synthetic fixture) |

## What exists

- `src/pages/index.astro` — neutral homepage; `src/pages/sample/services/[slug].astro` and `.../articles/[slug].astro` — representative service and article templates, rendered from `src/content/` sample entries.
- All sample routes live under `/sample/` so they cannot be mistaken for migrated URLs. Pages are `noindex` (`src/config/brand.ts`), show a "sample content" banner and emit no canonical URL, sitemap or placeholder domain.
- `src/config/brand.ts` — central brand settings (all placeholders). `src/content.config.ts` — provisional schemas for services and articles.
- `scripts/build-url-inventory.mjs` — reproducible sitemap parser. Writes `docs/inventory/url-inventory.{json,csv}`.

## Content editing

Sample content is plain Markdown in `src/content/`. Frontmatter `sourceStatus` (`sample` / `migrated-unreviewed` / `reviewed`) separates placeholder copy from reviewed content. Markdown is a temporary prototype approach, not a CMS decision (see decision log D-009).

## Not built yet

Forms, tracking/analytics, redirects, sitemap/robots output, search, guides/videos, campaign landing pages, real content, brand assets, hosting adapter. See `docs/implementation-plan.md`.

## Handover notes

Repository and any future hosting accounts should be owned by Franck/the client. No credentials are stored; `.env.example` holds placeholders only.
