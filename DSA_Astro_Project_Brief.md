# DSA Website Rebuild — Brief for Claude Code

Date: 25 October 2026  
Status: Preliminary planning; no launch or production changes authorised

## 1. Project and working relationship

Franck manages marketing and website work for Diot-Siaci Asia (DSA), Singapore. The existing website is https://asia.diot-siaci.com/ and runs on WordPress. DSA is expected to rebrand, but the details are highly confidential and are not yet known to Franck.

We are preparing a replacement website using Astro. Claude Code will support implementation under Franck's direction. ChatGPT will help Franck supervise architecture, review decisions and give implementation guidance. This document is a starting brief, not an approved final specification.

The objective is a fast, accessible, maintainable website that preserves useful service content and the substantial blog, supports enquiries and can be handed over to the client or another developer.

## 2. Confidentiality and scope

- Keep the GitHub repository private. Franck will create the repository and Claude Code project; inspect their actual state before making changes.
- Use `New Brand` for the future brand name. Do not infer a name, domain, logo, colour palette or launch date.
- Do not publish or deploy a preview, enable public repository access, change DNS, or modify the existing production website without Franck's explicit instruction.
- Prefer local development initially. Any later confidential preview needs access control; robots directives and an unguessable URL do not provide privacy.
- Do not commit credentials, customer information, lead exports or personal data. Use environment variables and an example environment file containing placeholders only.
- Existing Singapore focus and service offering are planning assumptions, subject to client confirmation.

## 3. Known source material

Two XML sitemap files have been supplied and parsed:

| Source | Inventory |
|---|---|
| `XML Sitemap.xml` — page sitemap | 59 page URLs; 183 unique referenced image URLs |
| `XML Sitemap(1).xml` — post sitemap | 102 article URLs; 134 unique referenced image URLs |
| Total | 161 URL entries across the two files |

Image counts are per file; do not add them to claim a deduplicated total. These are sitemap inventories, not proof of a complete site inventory. Unlisted landing pages, thank-you pages, PDFs and media may exist.

Ask Franck to place the XML files in `docs/source/` if they are not already available. Do not claim to have read files that are missing. The public sitemap retrieval encountered a security CAPTCHA; use the supplied exports instead of assuming crawling will work.

Sitemaps contain URLs, modification dates and image references. They do not contain the full page copy, article metadata, SEO fields or necessarily every page image. Full migration will require a WordPress export or another verified content extraction, plus media and SEO metadata where available. An ordinary WordPress XML export may not contain all SEO/plugin fields or downloadable media bytes.

## 4. Preliminary information architecture

Proposed main navigation: **Personal Insurance · Employee Benefits · Business Insurance · Resources · About Us**, with accessible **Contact** and prominent **Get a Quote** actions.

This hierarchy describes navigation and content relationships. It does not approve changing existing URL paths. Keep navigation decisions separate from URL migration decisions.

### Home

Introduce the future brand, identify the three audience routes, explain the broker's value, show verified credibility, feature useful resources and offer a clear enquiry route. Brand claims, awards, regulatory wording and group relationships require current client-approved copy.

### Personal Insurance

- Overview
- Health & Medical
  - Medical insurance overview
  - International personal medical insurance (IPMI)
  - Hospital & surgical
  - GP & specialist
  - Top-up coverage
  - Maternity
  - Dental cover — add-on positioning only
- Life & Income Protection
  - Overview
  - Term life
  - Critical illness
  - Income protection
- Home & Lifestyle
  - Overview
  - Home & contents
  - Travel
  - Jewellery & watches
  - Fine art & collectibles
  - Personal liability
  - Relocation
  - Pet
  - Golf buggy

### Employee Benefits

- Overview
- Group medical
- Group dental
- Group term life
- Group critical illness
- Group personal accident
- Group travel
- Benefits & Wellbeing Services
  - Flexible benefits
  - Voluntary benefits
  - Health & wellbeing
  - Employee assistance programme (EAP)
  - Mental health at work
  - Claims analysis & benchmarking

The services grouping may initially be a section within the overview rather than a new standalone page. Avoid creating thin pages merely to match the hierarchy.

### Business Insurance

- Overview (currently described as Corporate Insurance)
- SME insurance packages
- Professional indemnity
- Directors & officers
- Cyber risk & data protection
- Work injury compensation
- Cargo & commodities

### Resources

- Articles: one searchable collection with topic filters
- Downloadable guides
- Videos

Provisional article topics:

1. Health & Medical
2. Maternity & Family
3. Life & Income Protection
4. Home, Lifestyle & Travel
5. Living in Singapore
6. Employee Benefits & Wellbeing
7. Business & Cyber Risks
8. Company News

Assign categories after reviewing actual article content. URL slugs alone are insufficient for final classification. Articles should link to relevant service pages and related resources.

### About Us

- Company and approved group relationship
- Team, if required
- Awards and recognition
- How the broker helps clients

These can be sections on one page initially. Separate pages depend on content volume and client requirements.

### Contact and Get a Quote

- Contact details and individual/business enquiry routes
- Quote form adapting to the selected enquiry category
- Successful submission states and appropriate thank-you pages

### Supporting pages outside main navigation

- FAQ, also surfaced contextually on service pages
- Privacy Policy
- Terms of Business
- Other client-required disclosures, to be confirmed
- Campaign landing pages
- Form/download thank-you pages
- 404 page

## 5. Existing content requiring review

| URLs or subject | Action before migration |
|---|---|
| `/services/group-term-life-insurance/` and `/services/group-term-life/` | Compare content and performance before choosing a primary page |
| Jewellery/watch pages, luxury jewellery page and engagement-ring page | Assess separate search intent and content overlap |
| Home insurance and home & contents pages | Distinguish overview from product detail |
| Medical overview, hospital cover and IPMI | Establish distinct purposes and clear relationships |
| `/services/` | Assess whether an overall directory is useful |
| `/pge-test/` | Verify purpose; candidate for exclusion |
| Thank-you pages | Preserve necessary conversion journeys; normally exclude from indexing and sitemap |
| Similar maternity, top-up and relocation articles | Review actual content and analytics before consolidation |
| Older year-specific articles | Assess usefulness and facts; do not automatically delete or relabel as current |

No removal or merger is approved by this table. Maintain a decision log and proposed old-to-new URL map.

## 6. Astro implementation direction

Astro is the chosen framework. Start with static generation for editorial and service pages. Introduce server-side functionality only where a confirmed requirement needs it. Do not add React, a database or a large dependency stack by default.

Before installing packages or configuring adapters, check current official Astro/provider documentation and compatibility. Record the chosen Node version, package manager and dependency versions; commit a lockfile. Hosting is not yet confirmed. Keep the project portable; Cloudflare can be evaluated later.

Use a small reusable template system:

| Template | Purpose |
|---|---|
| Home | Audience routes and brand introduction |
| Section overview | Service group introductions and navigation |
| Service detail | Product explanation, limitations, FAQs, resources and enquiry |
| Resource listing | Articles, filters and pagination |
| Article | Editorial content, dates, author, references and related services |
| Guide / video | Resource description and download or viewing action |
| Campaign landing | Focused advertising journey |
| Standard information | About, contact, FAQ and legal content |

Keep brand settings central: display name, logos, colours, typography, contact information, approved business identity and production site URL. Keep editorial content separate from layout components.

Suggested content entities: services, articles, guides and videos, with optional authors and reusable FAQs. Define explicit schemas and stable content IDs. Useful fields include title, existing path, proposed path, summary, body, image/alt text, topic, related content, SEO title/description, publication/update dates and draft status. Article dates and authors must come from verified source data.

CMS choice is open. Determine whether Franck alone will edit or whether the client needs a visual publishing interface. Local Markdown/MDX can support the first prototype, but is not automatically the final client editing solution. Any temporary content approach should be clearly labelled and easy to migrate.

## 7. SEO and migration principles

- Preserve useful existing paths where practical. A rebrand alone does not require rewriting every slug.
- Keep an inventory of every source URL and its proposed disposition: keep, update, merge, redirect, exclude or unresolved.
- For changed paths/domains, plan one-to-one permanent redirects to relevant destinations. Avoid blanket redirects to the homepage and redirect chains.
- Final redirect decisions require content review and, where available, Search Console/GA4 data. Do not promise that rankings will be preserved.
- Preserve verified titles, descriptions, canonical intent, article dates, authors, internal links and image alt text where appropriate.
- Rewrite old-domain internal links when the future domain is known. Ensure the old domain can continue serving migration redirects.
- Add appropriate metadata, canonical URLs, breadcrumbs, XML sitemap and robots behaviour. Use structured data only when supported by visible, accurate content.
- Keep drafts, private previews and thank-you pages out of public search as appropriate. Do not emit placeholder production domains in launch metadata.
- Download and verify migration media before relying on it. Avoid permanent dependence on old WordPress media URLs. Inventory PDFs and update their links too.

## 8. Forms and campaign continuity

Existing IPMI landing page: `/international-personal-medical-insurance/`.

A previously established IPMI thank-you path is `/international-personal-medical-insurance/thank-you/`; verify the live flow and tracking before migration even if this path is absent from the sitemap.

The current IPMI form uses Elementor. Replacing it requires explicit decisions on secure submission handling, delivery, spam protection, validation, consent copy and failure/success behaviour. Never expose email/API credentials in browser code. Do not collect live enquiries during prototype work.

Known tracking context: legacy GTM tags labelled `Clickr` belong to a previous agency. Do not delete or disable them without verifying purpose, ownership and behaviour. Audit GA4, Google Ads and any required Meta tracking before reproducing production integrations. Avoid duplicate conversions and preserve campaign parameters where needed.

Do not assume any Zapier connection is working. Do not hard-code an unconfirmed CRM or email integration.

Critical content correction: DSA dental insurance cannot be marketed as a standalone individual programme; it is an add-on. Do not copy historical claims such as `No Medical Plan Required`, standalone dental wording or unverified prices. Group dental wording and all product availability also need client confirmation.

## 9. Quality and handover

- Responsive layouts, keyboard navigation, visible focus, semantic headings, labelled forms and readable contrast.
- Minimal client-side JavaScript, appropriately sized images and controlled third-party scripts.
- Meaningful checks: successful build, valid content schemas, internal links, important routes, forms and redirects when implemented, plus mobile/desktop visual review.
- Separate placeholder/demo copy from reviewed source content. No invented testimonials, benefits, prices, staff profiles or regulatory statements.
- Include a README with setup/build instructions, environment requirements, content editing, deployment approach and handover notes.
- Franck/client should own or control the repository and eventual hosting accounts. Avoid dependence on a developer's personal account.

## 10. First assignment for Claude Code

Begin with planning and a minimal local foundation, not a full 161-page build.

1. Read this brief and inspect the repository. Preserve existing work.
2. Confirm which source files are available and list material gaps.
3. Create a short implementation plan and decision log, marking assumptions clearly.
4. Parse the two XML files into a reproducible URL inventory if available. Include source type, URL, last-modified date and image references; do not treat last-modified as publication date.
5. Document the proposed information architecture and content schemas. Keep future routes provisional.
6. Set up a minimal Astro project if the repository is empty, using current official setup guidance. Provide local build/run instructions.
7. Create only representative local layouts: a neutral homepage, one service page and one article, using clearly labelled sample content. Do not fetch and reproduce the whole site yet.
8. Run the appropriate checks and report what exists, what passed, what remains provisional and the next recommended step.

Proceed with reversible local work. Ask Franck only when a missing decision materially affects implementation. Do not invent rebrand information or external integration choices. No publishing, production modification or public preview is authorised by this brief.

## 11. Decisions to settle later

New brand and domain; launch date; final target audiences; confirmed service catalogue; CMS/editors; hosting; languages; approved visual identity; form delivery/CRM; guide download rules; search behaviour; analytics/consent; source export and media access; SEO priorities and content approvals.

None of these requires disclosing confidential rebrand details to begin the local planning work.
