# Review queue (proposed; nothing decided)

Status 2026-10-25. Scope: the 16 `requires-review` rows in `url-grouping.csv`, plus the broker-versus-agent article and the IPMI landing page (listed separately as requested, so 18 URLs appear below).

**Ground rules.** Nothing is merged, removed, redirected or renamed. "Proposed location" is a candidate position in the provisional architecture, not a route or a decision. Slugs and titles are used only to say what to look at. **No page content has been read**, so no claim is made about quality or duplication: where two URLs share a subject by title, that is a question to verify, not a finding. Next input: a WordPress export (content, dates, metadata).

**Evidence sources.** *WP export* = WordPress export (post type, status, template, dates, author, categories/tags, body, SEO-plugin fields where present). *Analytics* = Search Console / GA4 / Google Ads / GTM, which a WordPress export does **not** contain. *Client* = confirmation from DSA.

## A. Requires review: 13 pages

| # | Existing URL | Proposed location (provisional) | Reason for review | Evidence needed to decide |
|---|---|---|---|---|
| 1 | `/services/` | Services directory, or no page | Brief s5: assess whether an overall directory is useful. | WP export: page content and links. Analytics: traffic and entrances. Internal links to it; whether the new navigation makes it redundant. |
| 2 | `/services/active-travel/` | Unknown. Candidate: Personal > Home & Lifestyle > Travel | Not in the brief's architecture; purpose unknown from the URL. No images listed in the sitemap. | WP export: content. Client: is this a current product? Relationship to `/services/travel-insurance/` and `/services/group-travel/` (read both). Analytics: traffic. |
| 3 | `/services/medical-insurance/` | Personal > Health & Medical > Overview (candidate) | Brief s5: establish distinct purposes for medical overview, hospital cover and IPMI. | WP export: content of all three (rows 3, 4 and the IPMI section). Analytics: queries and landing-page data per URL. Client: product definitions. |
| 4 | `/services/hospital-surgical-insurance/` | Personal > Health & Medical > Hospital & surgical | Same as row 3. | Same as row 3. |
| 5 | `/services/home-insurances/` | Personal > Home & Lifestyle > Overview (candidate) | Brief s5: distinguish a home overview from product detail. | WP export: content of rows 5 and 6; page hierarchy/parent fields. Analytics: queries per URL. |
| 6 | `/services/home-contents/` | Personal > Home & Lifestyle > Home & contents | Same as row 5. | Same as row 5. |
| 7 | `/services/jewellery-watch-insurance/` | Personal > Home & Lifestyle > Jewellery & watches | Brief s5: assess separate search intent and content relationship across the jewellery/watch, luxury and engagement-ring URLs (rows 7 to 9). | WP export: content of all three. Analytics: queries and rankings per URL. Client: whether engagement rings are a distinct offer. |
| 8 | `/luxury-watch-jewellery-insurance/` | Personal > Home & Lifestyle > Jewellery & watches (candidate) | Same set as row 7. Sits outside `/services/` unlike its siblings, so its role (service page, landing page, other) is unknown. | WP export: template and content. Analytics/Ads: whether any ad uses it as a final URL; organic traffic. |
| 9 | `/services/engagement-ring-insurance-4/` | Personal > Home & Lifestyle > Jewellery & watches (candidate) | Same set as row 7. The slug ends in `-4`; the reason is unknown. No images listed. | WP export: content, status, and any sibling slugs. Analytics: traffic and queries. |
| 10 | `/services/group-term-life-insurance/` | Employee Benefits > Group term life | Brief s5: compare with row 11 and choose a primary page. | WP export: content of both, modified dates. Analytics: traffic, queries, links per URL. Client: confirmed product wording. |
| 11 | `/services/group-term-life/` | Employee Benefits > Group term life | Same as row 10. | Same as row 10. |
| 12 | `/pge-test/` | None; brief s5 lists it as a candidate for exclusion | Brief s5: verify purpose. It is in the public sitemap. | WP export: content, status, template, author. Analytics: any traffic. Who created it and why; inbound links. |
| 13 | `/thank-you-diot-siaci-asia/` | Supporting page (form/download thank-you), outside main navigation | Brief s5: preserve necessary conversion journeys. Which form triggers it is unknown. The slug contains the current brand name, relevant when the URL map is drawn. | Analytics: GTM/GA4/Ads conversion triggers pointing at this URL. WP export: content, noindex setting. The form(s) that redirect to it (Elementor form settings, not in the export). |

## B. Requires review: 3 post-type URLs that may be service pages

All three are in the post sitemap, at the site root. Whether any is an article or a service/landing page is unknown.

| # | Existing URL | Proposed location (provisional) | Reason for review | Evidence needed to decide |
|---|---|---|---|---|
| 14 | `/group-dental-insurance/` | Employee Benefits > Group dental (candidate) | Post-type URL; a service page `/services/group-dental/` has a similar subject by title. Group dental wording needs client confirmation (brief s8). | WP export: post type/template, categories, body, dates. Read it against `/services/group-dental/`. Client: approved group dental wording; check for standalone-dental or "No Medical Plan Required" style claims. Analytics: traffic. |
| 15 | `/business/` | Business Insurance > Overview (candidate) or Resources | Purpose unknown: article, overview, landing page or other. | WP export: template, categories, body. Internal links and menu usage. Analytics: traffic. |
| 16 | `/need-insurance-singapore/` | Undecided | Purpose unknown; could be an article, landing page or other. | WP export: template, body. Analytics/Ads: any campaign, UTM or final-URL use. Internal links. Traffic. |

## C. Added for review, not among the 16

| # | Existing URL | Current proposed group | Reason for review | Evidence needed to decide |
|---|---|---|---|---|
| 17 | `/direct-vs-agent-vs-broker-for-your-insurance-needs-same-same-or-different/` | Resources > Articles; topic **unassigned** | No topic in the provisional list fits by title. It may belong with the About Us "how the broker helps clients" content, or in an existing topic. Another article by title (`/insurance-broker-or-agent-the-best-medical-insurance-plans-for-you/`) has a related subject; content not compared. | WP export: body, categories/tags, author, publication date. Whether About/Home currently links to it. Analytics: traffic and queries. Client: whether it makes regulatory or comparative claims needing approval. |

### IPMI: two roles, assessed separately

The landing page is currently grouped under Campaigns. Its campaign role and any organic service-page role are separate questions and may have different answers (one URL serving both, or two pages). Both are undecided.

| # | Existing URL | Role | Proposed location (provisional) | Reason for review | Evidence needed to decide |
|---|---|---|---|---|---|
| 18a | `/international-personal-medical-insurance/` | **Campaign landing page** | Campaigns > IPMI landing | Brief s8 names it the existing IPMI landing page, built with an Elementor form. The thank-you path `/international-personal-medical-insurance/thank-you/` is not in the sitemap. | Analytics/Ads: which campaigns use it as a final URL, paid vs organic share, conversion events (GA4, Google Ads, GTM including the legacy `Clickr` tags). Live test of the form and thank-you flow. Campaign dates and plans. Client: whether the campaign continues. |
| 18b | same URL | **Organic service page** | Personal > Health & Medical > IPMI | Brief s4 lists IPMI as a service; relationship to rows 3 and 4 is unresolved (brief s5). | Analytics (Search Console): organic queries, impressions, landing-page performance. WP export: content. Comparison with rows 3 and 4. Client: product definition. |
| 18c | `/international-personal-medical-insurance/what-does-it-cover/` | Role unknown (child of the landing page) | Campaigns (child) or Personal > Health & Medical > IPMI | Purpose unverified. | WP export: content, parent field. Analytics: traffic, queries, referrers. |

## What a WordPress export will and will not settle

Likely to provide: post type and status, templates (page/post), parent/child relationships, publication and modified dates, authors, categories and tags, body content, and usually SEO-plugin fields (the brief warns these may be incomplete). Elementor layout and form settings may not export usefully.

Will not provide: traffic, queries, rankings, ad usage, conversion tracking, GTM contents, or client decisions. Rows 1 to 13, 16 and 18a/b/c depend on those sources.
