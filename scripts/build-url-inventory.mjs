#!/usr/bin/env node
// Builds a reproducible URL inventory from the two supplied WordPress sitemap exports.
// No dependencies. Usage: node scripts/build-url-inventory.mjs [--pages FILE] [--posts FILE] [--out DIR]
// Default inputs: page sitemap = 'XML Sitemappage.xml', post sitemap = 'XML Sitemap.xml' (names as supplied).
// <lastmod> is recorded as "lastmod" only. It is NOT a publication date.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&apos;': "'" };
const decode = (s) => s.trim().replace(/&(amp|lt|gt|quot|apos);/g, (m) => ENTITIES[m]);
const first = (block, tag) => {
  const m = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return m ? decode(m[1]) : null;
};

/** Parse a urlset into [{ url, lastmod, images: [url, ...] }]. Exported for tests. */
export function parseSitemap(xml) {
  if (/<sitemapindex[\s>]/.test(xml)) throw new Error('Sitemap index files are not supported; supply a urlset.');
  const entries = [];
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const withoutImages = block.replace(/<image:image>[\s\S]*?<\/image:image>/g, '');
    const url = first(withoutImages, 'loc');
    if (!url) continue;
    const images = [...block.matchAll(/<image:image>([\s\S]*?)<\/image:image>/g)]
      .map(([, img]) => first(img, 'image:loc'))
      .filter(Boolean);
    entries.push({ url, lastmod: first(withoutImages, 'lastmod'), images });
  }
  return entries;
}

export function buildInventory(sources) {
  const rows = [];
  const summary = {};
  for (const { sourceType, file, xml, sha256 } of sources) {
    const entries = parseSitemap(xml);
    const uniqueImages = new Set(entries.flatMap((e) => e.images));
    summary[sourceType] = { sourceFile: file, sha256: sha256 ?? null, urlCount: entries.length, uniqueImageUrls: uniqueImages.size };
    for (const e of entries) {
      rows.push({
        sourceType,
        url: e.url,
        path: new URL(e.url).pathname,
        lastmod: e.lastmod,
        images: e.images,
        // Filled in by humans during review; never guessed here.
        proposedDisposition: 'unresolved',
      });
    }
  }
  return { rows, summary };
}

const csvCell = (v) => `"${String(v ?? '').replaceAll('"', '""')}"`;
export const toCsv = (rows) =>
  ['source_type,url,path,lastmod,image_count,image_urls,proposed_disposition']
    .concat(rows.map((r) => [r.sourceType, r.url, r.path, r.lastmod, r.images.length, r.images.join(' | '), r.proposedDisposition].map(csvCell).join(',')))
    .join('\n') + '\n';

function main() {
  const args = Object.fromEntries(process.argv.slice(2).reduce((a, x, i, all) => (x.startsWith('--') ? [...a, [x.slice(2), all[i + 1]]] : a), []));
  const pages = resolve(args.pages ?? 'docs/source/XML Sitemappage.xml');
  const posts = resolve(args.posts ?? 'docs/source/XML Sitemap.xml');
  const out = resolve(args.out ?? 'docs/inventory');
  const missing = [pages, posts].filter((f) => !existsSync(f));
  if (missing.length) {
    console.error(`Source sitemap file(s) not found:\n${missing.map((f) => `  - ${f}`).join('\n')}\nPlace them in docs/source/ (see docs/source/README.md). Nothing was written.`);
    process.exit(1);
  }
  const load = (sourceType, f) => {
    const buf = readFileSync(f);
    return { sourceType, file: relative(process.cwd(), f), xml: buf.toString('utf8'), sha256: createHash('sha256').update(buf).digest('hex') };
  };
  const { rows, summary } = buildInventory([load('page', pages), load('post', posts)]);
  summary.note = 'Image counts are per file; do not add them to claim a deduplicated total. lastmod is not a publication date.';
  const expected = { page: [59, 183], post: [102, 134] }; // from the project brief, section 3
  for (const [type, [urls, imgs]] of Object.entries(expected)) {
    const s = summary[type];
    if (s.urlCount !== urls || s.uniqueImageUrls !== imgs) {
      console.warn(`WARNING: ${type} sitemap has ${s.urlCount} URLs / ${s.uniqueImageUrls} unique images; brief states ${urls} / ${imgs}. Investigate before relying on the inventory.`);
    }
  }
  mkdirSync(out, { recursive: true });
  writeFileSync(resolve(out, 'url-inventory.json'), JSON.stringify({ summary, rows }, null, 2) + '\n');
  writeFileSync(resolve(out, 'url-inventory.csv'), toCsv(rows));
  console.log(JSON.stringify(summary, null, 2));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
