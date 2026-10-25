# Decision log

Status values: **Decided** (made within brief scope), **Assumed** (provisional, reversible), **Open** (needs Franck/client).

| ID | Date | Decision | Status | Rationale / notes |
|---|---|---|---|---|
| D-001 | 2026-10-25 | Astro, static output, no UI framework, no database | Decided (brief) | Brief section 6 |
| D-002 | 2026-10-25 | Astro **7.4.2**, Node **>=22.23.4**, npm, exact-pinned versions, lockfile committed | Assumed | Astro 6.4.8 was tried first and `npm audit` reported critical advisories (XSS, AVIF-image RCE) fixed only in 7.x. 7.4.2 audits clean. The sandbox had Node 22.22.0, so Node 22.23.4 was obtained from the `node` npm package for local use only |
| D-003 | 2026-10-25 | TypeScript pinned to 5.9.3, not 7.x | Assumed | `@astrojs/check@0.9.12` peers `typescript ^5 \|\| ^6`; installing 7 fails ERESOLVE |
| D-004 | 2026-10-25 | Official Astro docs were unreachable (proxy 403), so setup followed installed package types and npm metadata, not the docs site | Assumed | Re-verify against docs when reachable, particularly Astro 7 changes since my training data |
| D-005 | 2026-10-25 | Prototype pages are `noindex`, bannered as sample, namespaced `/sample/` | Decided | Brief section 2 and 7 |
| D-006 | 2026-10-25 | No `site` URL, canonical, sitemap integration or favicon | Decided | Domain unknown; must not emit placeholder production domains |
| D-007 | 2026-10-25 | Inventory script has zero dependencies and fails loudly when sources are missing | Decided | Reproducible, nothing invented |
| D-008 | 2026-10-25 | Sitemap `lastmod` stored as `lastmod`, never mapped to publication date | Decided (brief) | Brief section 10.4 |
| D-009 | 2026-10-25 | Local Markdown for sample content; CMS undecided | Assumed | Brief section 6; clearly labelled temporary |
| D-010 | 2026-10-25 | Only `services` and `articles` collections registered; guides/videos/authors/faqs specified in docs only | Assumed | Empty collections only produced loader warnings; add with content |
| D-011 | 2026-10-25 | Plain hand-written CSS with neutral tokens; no brand palette or fonts | Decided | Brand unknown |
| D-012 | 2026-10-25 | Navigation labels follow brief section 4; they link to sample routes only | Assumed | Navigation is separate from URL migration (brief section 4) |
| D-013 | 2026-10-25 | Dental is not described as a standalone individual product anywhere | Decided (brief) | Brief section 8 |
| O-001 | | Provide the two sitemap XML files | **Open** | Blocks inventory |
| O-002 | | Brand name, domain, launch date, visual identity | **Open** | Confidential; not needed yet |
| O-003 | | Who edits content; CMS choice | **Open** | |
| O-004 | | Hosting provider and preview access control | **Open** | No preview until instructed |
| O-005 | | Form delivery, CRM, spam protection, consent copy | **Open** | |
| O-006 | | Analytics/consent approach; GTM `Clickr` tag audit | **Open** | |
| O-007 | | Content extraction route (WP export / API) and media access | **Open** | |
| O-008 | | Disposition of items in brief section 5 (duplicates, `/pge-test/`, old articles) | **Open** | Needs content and analytics review |
