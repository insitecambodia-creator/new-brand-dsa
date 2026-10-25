# Content schemas (provisional)

Implemented in `src/content.config.ts`: **services**, **articles**. The others are specified here and added when content exists.

## Common fields

| Field | Notes |
|---|---|
| `contentId` | Stable ID (`svc-0001`, `art-0001`); survives slug and path changes |
| `title`, `summary` | Required |
| `existingPath` | Current WordPress path or null |
| `proposedPath` | Provisional; not approved until the URL map is signed off |
| `seoTitle`, `seoDescription` | Optional; preserve verified originals when migrating |
| `image` `{src, alt}` | Optional; alt text from verified source |
| `draft` | Default true |
| `sourceStatus` | `sample` \| `migrated-unreviewed` \| `reviewed`. Anything `sample` must not ship |

## Collection-specific

- **services:** `section` (personal / employee-benefits / business), `parent`, `limitations[]`, `faqs[]` (FAQ ids), `relatedArticles[]`.
- **articles:** `topic` (enum of the eight provisional topics), `author`, `publishedAt`, `updatedAt` (both optional: must come from verified source data, **never** sitemap `lastmod`), `relatedServices[]`, `references[]`.
- **guides (not yet registered):** common fields + `fileUrl`, `gated`. Download rules undecided.
- **videos (not yet registered):** common fields + `videoUrl`.
- **authors (not yet registered):** `contentId`, `name`, `role`.
- **faqs (not yet registered):** `contentId`, `question`, body as answer; reusable across services.

## Open schema questions

Whether `topic` should allow multiple values; whether FAQs need per-service overrides; whether service pages need a structured "product facts" block once real content is reviewed.
