# Implementation plan (draft)

Status: provisional, 2026-10-25. Nothing below is approved beyond local, reversible work.

## 1. Source material status

| Item | Status |
|---|---|
| Project brief | Present (`DSA_Astro_Project_Brief.md`) |
| Page sitemap XML | **Missing** from repo and machine |
| Post sitemap XML | **Missing** from repo and machine |
| Live site access | Not attempted; brief reports a CAPTCHA and the sandbox network is restricted |
| WordPress export / media bytes / SEO plugin fields | Not available |
| Search Console / GA4 data | Not available |
| Existing GTM / tracking audit | Not available |
| Approved brand, domain, contact, legal copy | Not available (unknown by design) |

The 161-URL figure and image counts come from the brief and are **unverified by me**. I have not read the XML files.

## 2. Phases

1. **Foundation (done locally):** Astro project, brand config, schemas, three representative templates, inventory script.
2. **Inventory (blocked on XML):** place files in `docs/source/`, run `npm run inventory`, confirm counts match the brief, then add a review column workflow (keep / update / merge / redirect / exclude / unresolved).
3. **Content extraction:** decide the route (WordPress XML export, REST API, or manual) once Franck confirms access. Download and verify media. Classify articles from actual content.
4. **Templates:** add section overview, resource listing with topic filter and pagination, guide/video, campaign landing, standard information. Build only as real content needs them.
5. **Forms and tracking:** after decisions on delivery, spam protection, consent, CRM; audit GTM (`Clickr` tags) and the IPMI thank-you flow first.
6. **SEO/migration:** URL map with one-to-one redirects, canonical/sitemap/robots once the domain is known.
7. **Access-controlled preview and launch:** only on Franck's explicit instruction.

## 3. Assumptions (explicit)

- A1. Astro stays static; no React, database or SSR adapter until a requirement demands one.
- A2. Singapore focus and the service list in brief section 4 are planning assumptions, not confirmed catalogue.
- A3. Sitemap counts in the brief are accurate. To be verified when files arrive.
- A4. English-only for now (languages are an open decision).
- A5. `New Brand` is a display placeholder only.
- A6. Sample routes are namespaced under `/sample/` so they cannot collide with migrated paths.

## 4. Checks run on the foundation

See the final report in the session and `README.md`. Re-run: `npm run check && npm run build && npm run test:inventory`.

## 5. Next recommended step

Franck supplies the two sitemap XML files (and, if possible, a WordPress export). Then run the inventory and review the real URL groups against section 5 of the brief before building more templates.
