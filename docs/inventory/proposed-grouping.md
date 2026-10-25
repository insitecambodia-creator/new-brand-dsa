# Proposed URL grouping (for inventory review)

Generated from `url-grouping.csv` by `npm run grouping`. **Proposal only**: classification is from URL slugs, not page content. Nothing is merged, deleted, redirected or re-routed; every row keeps `disposition = unresolved`. Edit the CSV, not this file.

## Totals

| Group | URLs |
|---|---|
| home | 1 |
| personal-insurance | 15 |
| employee-benefits | 12 |
| business-insurance | 7 |
| resources | 102 |
| about-contact-legal | 6 |
| campaigns | 2 |
| requires-review | 16 |
| **Total** | **161** |

## home (1)

| Path | Sub-group | Conf. | Flags / notes |
|---|---|---|---|
| `/` | Home | high | Not one of the seven requested groups; added as 'home' (1 URL). |

## personal-insurance (15)

| Path | Sub-group | Conf. | Flags / notes |
|---|---|---|---|
| `/services/golf-buggy-insurance/` | Home & Lifestyle / Golf buggy | high |  |
| `/services/pet-insurance/` | Home & Lifestyle / Pet | high |  |
| `/services/personal-liability-insurance-for-expats-in-singapore/` | Home & Lifestyle / Personal liability | high |  |
| `/services/travel-insurance/` | Home & Lifestyle / Travel | high |  |
| `/services/maternity-insurance/` | Health & Medical / Maternity | high | flags: maternity-cluster — Related to maternity articles; brief section 5 asks for content/analytics review before consolidation. |
| `/services/term-life-insurance/` | Life & Income Protection / Term life | high |  |
| `/services/critical-illness/` | Life & Income Protection / Critical illness | high |  |
| `/services/income-protection/` | Life & Income Protection / Income protection | high |  |
| `/services/fine-art-collectibles/` | Home & Lifestyle / Fine art & collectibles | high | flags: overlap-with-article — Overlaps fine-art articles (see resources). |
| `/services/relocation-insurance/` | Home & Lifestyle / Relocation | high | flags: relocation-cluster |
| `/services/life/` | Life & Income Protection / Overview? | low | flags: unclear-purpose — Slug "life" sits beside the overview pages; purpose unverified. |
| `/services/personal-insurance/` | Overview | high |  |
| `/services/gp-and-specialist/` | Health & Medical / GP & specialist | high |  |
| `/services/top-up-coverage/` | Health & Medical / Top-up coverage | high | flags: top-up-cluster — Related to several top-up articles. |
| `/services/dental-insurance/` | Health & Medical / Dental (add-on only) | high | flags: dental-wording-check — Brief s8: dental is an add-on, never standalone; do not reuse historical wording or prices. |

## employee-benefits (12)

| Path | Sub-group | Conf. | Flags / notes |
|---|---|---|---|
| `/services/claims-analysis-benchmarking/` | Benefits & Wellbeing Services / Claims analysis & benchmarking | high |  |
| `/services/better-mental-health-in-the-workplace/` | Benefits & Wellbeing Services / Mental health at work | high |  |
| `/services/flexible-benefits/` | Benefits & Wellbeing Services / Flexible benefits | high |  |
| `/services/employee-assistance-program-eap/` | Benefits & Wellbeing Services / EAP | high |  |
| `/services/group-dental/` | Group dental | high | flags: dental-wording-check, duplicate-candidate — Also see root post /group-dental-insurance/. Group dental wording needs client confirmation (brief s8). |
| `/services/group-medical/` | Group medical | high |  |
| `/services/group-critical-illness/` | Group critical illness | high |  |
| `/services/group-personal-accident/` | Group personal accident | high |  |
| `/services/group-travel/` | Group travel | high |  |
| `/services/voluntary-benefits/` | Benefits & Wellbeing Services / Voluntary benefits | high |  |
| `/services/health-wellbeing/` | Benefits & Wellbeing Services / Health & wellbeing | high |  |
| `/services/employee-benefits/` | Overview | high |  |

## business-insurance (7)

| Path | Sub-group | Conf. | Flags / notes |
|---|---|---|---|
| `/services/professional-indemnity/` | Professional indemnity | high |  |
| `/services/sme-insurance-packages/` | SME insurance packages | high |  |
| `/services/cyber-risk-and-data-protection-insurance/` | Cyber risk & data protection | high |  |
| `/services/workers-injury-compensation/` | Work injury compensation | high |  |
| `/services/cargo-commodities/` | Cargo & commodities | high |  |
| `/services/directors-and-officers-do-insurance/` | Directors & officers | high |  |
| `/services/corporate-insurance/` | Overview (currently "Corporate Insurance") | high |  |

## resources (102)

### Resource hub pages

- `/articlesandmedia/` — Resources hub (articles & media) (medium)
- `/videos/` — Videos (medium)
- `/download-guides/` — Downloadable guides (medium)

### Articles: health-medical (25)

- `/on-the-right-foot-your-guide-to-avoiding-common-running-injuries/` (low)
- `/digital-detox-how-unplugging-can-improve-your-health-and-well-being/` (medium)
- `/master-the-art-of-meal-planning-your-guide-to-a-healthy-diet/` (medium)
- `/maximising-your-metabolism-how-to-stay-fit-as-you-age/` (medium)
- `/foreign-domestic-worker-medical-insurance-a-guide/` (low) — flags: foreign-worker-pair
- `/a-guide-to-public-and-private-hospitals-in-singapore/` (medium)
- `/4-reasons-top-up-health-insurance-is-the-smart-choice-for-expats/` (high) — flags: top-up-cluster
- `/top-up-insurance-for-expats-why-employee-benefits-may-not-be-enough/` (high) — flags: top-up-cluster
- `/5-lifestyle-changes-that-can-lower-your-blood-pressure/` (high)
- `/maximising-your-coverage-a-guide-to-top-up-health-insurance/` (high) — flags: top-up-cluster
- `/5-health-issues-to-watch-out-for-as-you-age/` (high)
- `/insuring-your-health-wellness-the-4-different-types-of-insurance-plans-in-singapore/` (medium)
- `/optimise-your-coverage-the-benefits-of-top-up-insurance-plans/` (high) — flags: top-up-cluster
- `/foreign-worker-medical-insurance-what-should-i-know/` (low) — flags: foreign-worker-pair
- `/insurance-broker-or-agent-the-best-medical-insurance-plans-for-you/` (low) — flags: broker-explainer-pair
- `/best-health-insurance-for-pre-existing-conditions/` (high)
- `/coverage-for-dengue-medical-insurance-in-singapore/` (high)
- `/what-is-a-top-up-plan-and-why-is-it-important-to-have-one/` (high) — flags: top-up-cluster
- `/top-integrated-shield-plan-options-compare-benefits-costs-2025/` (high) — flags: year-specific, facts-recheck
- `/how-to-navigate-your-medical-claim-process/` (high)
- `/medical-inflation-and-its-impact/` (high)
- `/health-screening-in-singapore-what-it-means-for-you/` (high)
- `/health-insurance-in-singapore-for-expats-the-complete-2026-guide/` (high) — flags: year-specific
- `/what-happens-to-your-health-insurance-when-you-change-jobs-in-singapore/` (high)
- `/corporate-health-plan-or-personal-insurance-in-singapore-which-comes-first/` (low)

### Articles: maternity-family (13)

- `/expecting-a-bundle-of-joy-food-to-avoid-during-pregnancy/` (high) — flags: maternity-cluster
- `/tackling-child-obesity-a-comprehensive-guide-for-parents/` (low)
- `/maternity-matters-taking-care-of-yourself-post-delivery/` (high) — flags: maternity-cluster
- `/maternity-matters-exercising-during-pregnancy/` (high) — flags: maternity-cluster
- `/maternity-matters-planning-for-your-pregnancy/` (high) — flags: maternity-cluster
- `/expat-health-cover-assisted-fertility-ivf-maternity-insurance/` (high) — flags: maternity-cluster
- `/maternity-matters-what-are-the-pregnancy-costs-in-singapore/` (high) — flags: maternity-cluster
- `/newborn-baby-checklist-must-haves-for-your-little-ones-arrival/` (high)
- `/maternity-matters-finding-the-best-hospital-for-you/` (high) — flags: maternity-cluster
- `/expecting-a-baby-3-reasons-why-you-need-expat-maternity-health-cover/` (high) — flags: maternity-cluster
- `/do-i-need-maternity-insurance/` (high) — flags: maternity-cluster
- `/preparing-for-your-pregnancy-in-singapore/` (high) — flags: maternity-cluster
- `/cost-of-raising-children-when-moving-to-singapore/` (medium) — flags: relocation-cluster

### Articles: life-income-protection (7)

- `/should-i-get-life-insurance-in-my-20s/` (high) — flags: life-cluster
- `/7-mistakes-to-avoid-when-buying-life-insurance-in-singapore/` (high) — flags: life-cluster
- `/what-is-income-protection-insurance-do-i-need-it/` (high)
- `/4-misconceptions-about-critical-illness-insurance-unveiling-the-truth/` (high)
- `/an-introduction-to-term-life-insurance-in-singapore/` (high) — flags: life-cluster
- `/protect-your-family-4-financial-planning-tips/` (medium)
- `/how-do-i-know-if-i-have-enough-life-insurance-in-singapore/` (high) — flags: life-cluster

### Articles: home-lifestyle-travel (11)

- `/3-factors-to-consider-when-buying-home-contents-insurance/` (high) — flags: home-contents-cluster
- `/travel-insurance-vs-international-private-medical-insurance-ipmi-whats-best-for-expats/` (low) — flags: ipmi-related
- `/discover-nearby-wonders-5-short-trip-getaways-from-singapore/` (high)
- `/6-tips-for-solo-travelling-to-stay-safe-and-enjoy-your-holiday/` (high)
- `/art-investment-everything-you-need-to-know-about-buying-fine-art-in-asia/` (medium) — flags: fine-art-cluster
- `/why-do-i-need-home-and-contents-insurance-in-singapore/` (high) — flags: home-contents-cluster
- `/why-need-home-insurance-if-renting/` (high) — flags: home-contents-cluster
- `/what-is-personal-liability-insurance/` (high)
- `/home-contents-insurance-singapore-what-hdb-fire-insurance-doesnt-cover/` (high) — flags: home-contents-cluster
- `/how-to-choose-the-best-travel-insurance-for-your-next-trip/` (high)
- `/fine-art-insurance-singapore-2026/` (high) — flags: fine-art-cluster, year-specific, overlap-with-service-page

### Articles: living-in-singapore (13)

- `/renting-in-singapore-2022-a-moving-in-checklist-for-expats/` (low) — flags: relocation-cluster, year-specific
- `/buying-vs-renting-property-in-singapore-as-a-foreigner/` (medium)
- `/buying-a-house-in-singapore-5-mistakes-new-homeowners-should-avoid/` (medium)
- `/singapore-public-holidays-2024-planning-your-next-trip/` (low) — flags: year-specific
- `/careshield-life-in-singapore-what-you-need-to-know-for-your-golden-years/` (medium) — flags: facts-recheck
- `/navigating-retrenchment-in-singapore-a-comprehensive-guide-for-affected-employees/` (medium) — flags: facts-recheck
- `/excited-for-your-move-to-singapore-give-this-checklist-a-read/` (high) — flags: relocation-cluster
- `/the-ultimate-checklist-for-planning-your-move-to-singapore/` (high) — flags: relocation-cluster
- `/singapore-expat-insurance-what-types-of-coverage-do-i-need-when-moving/` (medium) — flags: relocation-cluster
- `/how-to-be-self-employed-in-singapore-an-expats-guide/` (medium)
- `/bad-neighbours-what-do-you-do-when-dealing-with-neighbours-from-hell/` (medium)
- `/singapore-ranks-4th-best-healthcare-system-in-the-world-what-it-means-for-expats/` (low) — flags: facts-recheck
- `/understanding-work-visas-in-singapore-a-guide-for-expat-employees/` (high) — flags: facts-recheck

### Articles: employee-benefits-wellbeing (17)

- `/beyond-how-are-you-5-tips-on-initiating-mental-health-conversations/` (low)
- `/employee-benefits-what-are-the-different-types-of-group-insurance/` (high)
- `/6-reasons-why-top-up-employee-benefits-attract-top-talent/` (medium) — flags: top-up-cluster
- `/essential-tips-for-managing-a-multigenerational-workforce/` (medium)
- `/building-a-company-culture-that-drives-employee-retention/` (medium)
- `/the-silver-lining-wellness-strategies-for-older-employees-in-the-workplace/` (high)
- `/5-ways-to-support-expectant-employees-in-a-pregnancy-friendly-workplace/` (medium) — flags: maternity-cluster
- `/7-most-sought-after-perks-to-include-in-your-employee-benefits-policy/` (high)
- `/a-healthy-office-is-a-productive-one/` (high)
- `/protecting-your-employees-protecting-your-business/` (low)
- `/how-to-spot-signs-of-burnout-in-colleagues/` (high)
- `/do-i-really-need-a-group-personal-accident-insurance-plan/` (high)
- `/top-six-reasons-that-you-need-to-get-employee-medical-benefits-in-singapore/` (high)
- `/top-strategies-to-enhance-workplace-wellbeing/` (high)
- `/monitoring-mental-wellness-5-vital-metrics-for-your-employee-well-being-programme/` (high)
- `/the-5-employee-benefits-your-corporate-plan-probably-doesnt-have-but-should/` (high)
- `/craft-a-workplace-wellness-programme-to-improve-employee-satisfaction/` (high)

### Articles: business-cyber-risks (9)

- `/causes-of-data-breaches-how-to-increase-your-business-security/` (high) — flags: cyber-cluster
- `/protecting-your-assets-with-business-insurance/` (high)
- `/weight-of-the-freight-rising-role-on-insurance-in-maritime/` (medium)
- `/do-start-ups-require-business-insurance/` (high) — flags: sme-cluster
- `/cyber-security-risks-and-what-you-can-do-to-prevent-them-5-must-do-tips/` (high) — flags: cyber-cluster
- `/9-types-of-insurance-a-small-business-should-have/` (high) — flags: sme-cluster
- `/what-insurance-do-i-need-for-my-small-business-in-singapore/` (high) — flags: sme-cluster
- `/work-injury-compensation-insurance-is-your-workplace-hazardous/` (high)
- `/understanding-data-security-importance-and-best-practices/` (high) — flags: cyber-cluster

### Articles: company-news (3)

- `/happyinternationalwomensday/` (low) — flags: thin-social-post
- `/expat-insurance-awarded-domestic-broker-of-the-year-singapore-category/` (high) — flags: also-relevant-to-about-awards
- `/singapore-is-hosting-asias-biggest-healthcare-exhibition-this-september-heres-what-it-means-for-your-insurance/` (low) — flags: event-news, likely-time-bound

### Articles: unassigned (1)

- `/direct-vs-agent-vs-broker-for-your-insurance-needs-same-same-or-different/` (low) — flags: broker-explainer-pair, may-fit-about-us

## about-contact-legal (6)

| Path | Sub-group | Conf. | Flags / notes |
|---|---|---|---|
| `/privacy-policy/` | Legal / Privacy Policy | high | flags: legal-copy-needs-client-approval |
| `/contact-us/` | Contact | high |  |
| `/get-a-quotation/` | Get a Quote | high | flags: form-flow — Verify live form, tracking and delivery before migration. |
| `/faq/` | FAQ | high |  |
| `/about-us/` | About us | high |  |
| `/terms-of-business/` | Legal / Terms of Business | high | flags: legal-copy-needs-client-approval |

## campaigns (2)

| Path | Sub-group | Conf. | Flags / notes |
|---|---|---|---|
| `/international-personal-medical-insurance/what-does-it-cover/` | IPMI landing page (child) | medium | flags: brief-s5:medical-overview-hospital-ipmi — Child of the IPMI landing page; purpose unverified. |
| `/international-personal-medical-insurance/` | IPMI landing page | high | flags: brief-s5:medical-overview-hospital-ipmi, form-flow, tracking-audit — Brief s8 names this the existing IPMI landing page (Elementor form). Also relevant to Personal > Health & Medical > IPMI. Thank-you path /international-personal-medical-insurance/thank-you/ is NOT in the sitemap; verify live flow. |

## requires-review (16)

| Path | Sub-group | Conf. | Flags / notes |
|---|---|---|---|
| `/services/` | Services directory | high | if kept: personal-insurance — flags: brief-s5:services-directory — Assess whether an overall directory is useful. |
| `/services/group-term-life-insurance/` | Group term life | high | if kept: employee-benefits — flags: brief-s5:group-term-life-pair — Compare with /services/group-term-life/ and choose a primary page; no merge approved. |
| `/services/active-travel/` |  | low | if kept: personal-insurance — flags: unclear-purpose — Not in the brief IA. May relate to travel insurance or an active-lifestyle product; zero images in sitemap. |
| `/services/group-term-life/` | Group term life | high | if kept: employee-benefits — flags: brief-s5:group-term-life-pair — As above. |
| `/services/engagement-ring-insurance-4/` | Home & Lifestyle / Jewellery & watches | low | if kept: personal-insurance — flags: brief-s5:jewellery-set, suffix-4-suggests-duplicate — Slug suffix "-4" may indicate duplicate/regenerated slug; zero images. |
| `/luxury-watch-jewellery-insurance/` | Home & Lifestyle / Jewellery & watches | low | if kept: personal-insurance — flags: brief-s5:jewellery-set, possible-campaign-landing — Root-level path outside /services/ suggests a landing page; unverified. |
| `/pge-test/` |  | high | flags: brief-s5:candidate-for-exclusion — Brief s5: verify purpose; candidate for exclusion. |
| `/services/medical-insurance/` | Health & Medical / Medical insurance overview? | medium | if kept: personal-insurance — flags: brief-s5:medical-overview-hospital-ipmi — Establish purpose vs hospital cover and IPMI before placement. |
| `/services/home-contents/` | Home & Lifestyle / Home & contents | medium | if kept: personal-insurance — flags: brief-s5:home-vs-home-contents — Distinguish overview from product detail. |
| `/services/hospital-surgical-insurance/` | Health & Medical / Hospital & surgical | medium | if kept: personal-insurance — flags: brief-s5:medical-overview-hospital-ipmi — As above. |
| `/services/jewellery-watch-insurance/` | Home & Lifestyle / Jewellery & watches | medium | if kept: personal-insurance — flags: brief-s5:jewellery-set — Assess separate search intent and overlap with the luxury and engagement-ring pages. |
| `/services/home-insurances/` | Home & Lifestyle / Home overview? | medium | if kept: personal-insurance — flags: brief-s5:home-vs-home-contents — As above. |
| `/thank-you-diot-siaci-asia/` | Form/download thank-you | medium | if kept: campaigns — flags: brief-s5:thank-you, old-brand-in-slug — Preserve necessary conversion journeys; normally exclude from index/sitemap. Slug contains the current brand name, relevant to URL-map decisions. |
| `/group-dental-insurance/` | Group dental | medium | if kept: employee-benefits — flags: dental-wording-check, duplicate-candidate — Post-type URL at root duplicates /services/group-dental/ in subject; compare content. Group dental wording needs client confirmation. |
| `/need-insurance-singapore/` |  | low | flags: unclear-purpose, possible-campaign-landing — Post-type URL with a generic acquisition-style slug; may be an ad/landing page. |
| `/business/` |  | low | if kept: business-insurance — flags: unclear-purpose — Post-type URL with slug "business"; may be a landing/overview page rather than an article. |

## Review flags (all groups)

| Flag | URLs |
|---|---|
| maternity-cluster | 12 |
| top-up-cluster | 7 |
| relocation-cluster | 6 |
| year-specific | 5 |
| facts-recheck | 5 |
| unclear-purpose | 4 |
| brief-s5:medical-overview-hospital-ipmi | 4 |
| home-contents-cluster | 4 |
| life-cluster | 4 |
| hub-page | 3 |
| dental-wording-check | 3 |
| brief-s5:jewellery-set | 3 |
| cyber-cluster | 3 |
| sme-cluster | 3 |
| brief-s5:group-term-life-pair | 2 |
| legal-copy-needs-client-approval | 2 |
| duplicate-candidate | 2 |
| possible-campaign-landing | 2 |
| form-flow | 2 |
| brief-s5:home-vs-home-contents | 2 |
| foreign-worker-pair | 2 |
| fine-art-cluster | 2 |
| broker-explainer-pair | 2 |
| brief-s5:services-directory | 1 |
| downloads-unverified | 1 |
| suffix-4-suggests-duplicate | 1 |
| brief-s5:candidate-for-exclusion | 1 |
| tracking-audit | 1 |
| overlap-with-article | 1 |
| brief-s5:thank-you | 1 |
| old-brand-in-slug | 1 |
| thin-social-post | 1 |
| ipmi-related | 1 |
| also-relevant-to-about-awards | 1 |
| may-fit-about-us | 1 |
| event-news | 1 |
| likely-time-bound | 1 |
| overlap-with-service-page | 1 |
