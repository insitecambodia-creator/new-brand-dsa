import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseCsv, validate } from './grouping.mjs';

const inv = [{ url: 'https://example.invalid/a/' }, { url: 'https://example.invalid/b/' }];
const row = (url, over = {}) => ({ url, source_type: 'page', proposed_group: 'campaigns', confidence: 'high', disposition: 'unresolved', proposed_article_topic: '', suggested_group_if_kept: '', ...over });

test('parseCsv handles quotes, commas and embedded newlines', () => {
  const rows = parseCsv('a,b\n"x, y","say ""hi""\nthere"\n');
  assert.deepEqual(rows, [{ a: 'x, y', b: 'say "hi"\nthere' }]);
});
test('accepts a complete one-to-one grouping', () => {
  assert.deepEqual(validate(inv, [row(inv[0].url), row(inv[1].url)]), []);
});
test('reports missing, extra, duplicate, invalid and pre-decided rows', () => {
  const p = validate(inv, [row(inv[0].url), row(inv[0].url), row('https://example.invalid/z/', { proposed_group: 'nope', disposition: 'redirect' })]);
  assert.ok(p.some((x) => x.startsWith('missing from grouping')));
  assert.ok(p.some((x) => x.startsWith('duplicated')));
  assert.ok(p.some((x) => x.startsWith('not in inventory')));
  assert.ok(p.some((x) => x.startsWith('bad group')));
  assert.ok(p.some((x) => x.startsWith('disposition must stay')));
});
test('real grouping covers the real inventory exactly (when present)', () => {
  let inventory, csv;
  try {
    inventory = JSON.parse(readFileSync(new URL('../docs/inventory/url-inventory.json', import.meta.url), 'utf8')).rows;
    csv = readFileSync(new URL('../docs/inventory/url-grouping.csv', import.meta.url), 'utf8');
  } catch { return; }
  assert.deepEqual(validate(inventory, parseCsv(csv)), []);
});
