# URL inventory report

Generated 2026-10-25 by `npm run inventory` from the supplied sitemap exports. Reproduce with that command; `url-inventory.json` records each source file's SHA-256.

| Source file (in `docs/source/`) | Role | SHA-256 |
|---|---|---|
| `XML Sitemappage.xml` | Page sitemap | `0e783c82c3ae8e46acd3f91333ff7c4f78fb7aee5a89d9a203b617f97a5699d3` |
| `XML Sitemap.xml` | Post sitemap | `bea8ebf77f2904aefdef6c9f977e312b730bde671690ef26338f8a55daf14e6c` |

Role was assigned from file **content**, not filename (see discrepancy 1).

## Counts

| | Pages | Posts | Combined |
|---|---|---|---|
| URL entries | **59** | **102** | **161** (161 unique; no URL appears in both files) |
| Brief states | 59 | 102 | 161 |
| Image references (with repeats) | 203 | 152 | 355 |
| Unique image URLs, per file | **183** | **134** | 314 unique across both files (3 shared); do not add the per-file figures |
| Brief states (unique images) | 183 | 134 | |
| URLs with at least one image | 46 | 89 | |

All URL and unique-image counts match the brief exactly.

## Discrepancies and surprises

1. **File names differ from the brief and the script's original defaults.** The brief names `XML Sitemap.xml` (pages) and `XML Sitemap(1).xml` (posts). The supplied files are `XML Sitemap.xml` (**posts**, 102 URLs) and `XML Sitemappage.xml` (**pages**, 59 URLs): the generic name holds the *posts*. They were also uploaded to the repository root on `main`, not to `docs/source/`; they were copied in unchanged (content-identical, moved with `git mv`). Script defaults now match the supplied names.
2. **Raw vs unique image counts.** Raw `<image:loc>` entries (203 / 152) exceed unique URLs (183 / 134) because the same image is listed on several URLs within a file. The brief's figures are the unique ones.
3. **Not discrepancies, but affect planning:**
   - `lastmod` is clearly not a publication date: 17 URLs share `2024-03-19`, 16 share `2024-02-06`, which looks like bulk edits. Range: 2022-01-11 to 2026-10-19. Real article dates need another source.
   - All 355 image references point at `asia.diot-siaci.com/wp-content/uploads/`. 125 look like WordPress resized variants (`-WxH`), 13 carry an `-eNNN` edit suffix. Choosing originals vs variants is a media-migration decision. Formats: jpg 180, png 95, webp 69, jpeg 10, svg 1.
   - **No PDFs or other documents appear** (the sitemap only lists images). That does not show none exist; guides at `/download-guides/` need a separate asset inventory.
   - 13 page URLs reference no images: `/services/`, `/services/group-term-life-insurance/`, `/services/active-travel/`, `/services/engagement-ring-insurance-4/`, `/services/life/`, `/privacy-policy/`, `/articlesandmedia/`, `/videos/`, `/pge-test/`, `/get-a-quotation/`, `/thank-you-diot-siaci-asia/`, `/faq/`, `/terms-of-business/`.
   - Every URL is on `https://asia.diot-siaci.com/`, ends in `/`, has no query string or fragment.
   - The post sitemap contains three root-level URLs that may not be articles: `/business/`, `/need-insurance-singapore/`, `/group-dental-insurance/`.
   - The IPMI thank-you path `/international-personal-medical-insurance/thank-you/` is **not** in either file, as the brief anticipated.
   - Only one slug contains the current brand name: `/thank-you-diot-siaci-asia/`.
4. **Brief section 5 coverage:** every listed review subject exists in the sitemap (group term life pair, three jewellery/watch/ring URLs, home pair, medical/hospital/IPMI, `/services/`, `/pge-test/`, a thank-you page, maternity/top-up/relocation article clusters, year-specific articles). URLs in the sitemap but absent from the brief's IA include `/services/active-travel/`, `/services/life/`, `/services/home-insurances/`, `/services/engagement-ring-insurance-4/`, `/luxury-watch-jewellery-insurance/`, `/articlesandmedia/`. No separate URLs for individual guides or videos are listed.

## Limits

This is a sitemap inventory, not a full site inventory. Unlisted landing pages, PDFs, media and noindexed pages may exist. No live-site check was made.
