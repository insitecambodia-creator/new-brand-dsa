// Uses a small SYNTHETIC fixture (scripts/fixtures/synthetic-sitemap.xml), not DSA data.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseSitemap, buildInventory, toCsv } from './build-url-inventory.mjs';

const xml = readFileSync(new URL('./fixtures/synthetic-sitemap.xml', import.meta.url), 'utf8');

test('parses urls, lastmod and image references', () => {
  const e = parseSitemap(xml);
  assert.equal(e.length, 3);
  assert.equal(e[0].url, 'https://example.invalid/a/');
  assert.equal(e[0].lastmod, '2020-01-02T03:04:05+00:00');
  assert.deepEqual(e[0].images, ['https://example.invalid/img/1.jpg', 'https://example.invalid/img/2.jpg']);
});

test('decodes entities and tolerates missing lastmod / images', () => {
  const e = parseSitemap(xml);
  assert.equal(e[1].url, 'https://example.invalid/b/?x=1&y=2');
  assert.equal(e[1].lastmod, null);
  assert.deepEqual(e[2].images, []);
});

test('counts unique images per source and never auto-assigns a disposition', () => {
  const { rows, summary } = buildInventory([{ sourceType: 'page', file: 'f', xml }]);
  assert.equal(summary.page.uniqueImageUrls, 2);
  assert.ok(rows.every((r) => r.proposedDisposition === 'unresolved'));
  assert.match(toCsv(rows), /^source_type,url,path,lastmod/);
});

test('rejects sitemap index files', () => {
  assert.throws(() => parseSitemap('<sitemapindex></sitemapindex>'), /index/);
});
