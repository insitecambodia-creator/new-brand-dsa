import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Provisional schemas (docs/content-schemas.md). `sourceStatus` keeps placeholder copy separate
 * from reviewed content: nothing marked `sample` may ship. Dates must come from verified source
 * data, so they are optional; sitemap <lastmod> is NOT a publication date.
 */
const sourceStatus = z.enum(['sample', 'migrated-unreviewed', 'reviewed']);

const common = {
  /** Stable ID that survives slug/path changes, e.g. "svc-0001". */
  contentId: z.string().regex(/^[a-z]{3,5}-\d{4}$/),
  title: z.string(),
  summary: z.string(),
  /** Current WordPress path, if migrated. null for new/sample content. */
  existingPath: z.string().startsWith('/').nullable().default(null),
  /** Provisional new path. Not approved until the URL map is signed off. */
  proposedPath: z.string().startsWith('/').nullable().default(null),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  image: z.object({ src: z.string(), alt: z.string() }).optional(),
  draft: z.boolean().default(true),
  sourceStatus: sourceStatus.default('sample'),
};

const mdFiles = (dir: string) => glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${dir}` });

const services = defineCollection({
  loader: mdFiles('services'),
  schema: z.object({
    ...common,
    section: z.enum(['personal', 'employee-benefits', 'business']),
    parent: z.string().optional(),
    limitations: z.array(z.string()).default([]),
    faqs: z.array(z.string()).default([]),
    relatedArticles: z.array(z.string()).default([]),
  }),
});

const articles = defineCollection({
  loader: mdFiles('articles'),
  schema: z.object({
    ...common,
    /** Assigned after reviewing actual article content, not from slugs. */
    topic: z.enum([
      'health-medical',
      'maternity-family',
      'life-income-protection',
      'home-lifestyle-travel',
      'living-in-singapore',
      'employee-benefits-wellbeing',
      'business-cyber-risks',
      'company-news',
    ]),
    author: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    relatedServices: z.array(z.string()).default([]),
    references: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
  }),
});

// guides, videos, authors and faqs are specified in docs/content-schemas.md and added when content exists.
export const collections = { services, articles };
