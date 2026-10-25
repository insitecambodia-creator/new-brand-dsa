#!/usr/bin/env node
// Validates docs/inventory/url-grouping.csv against url-inventory.json and writes proposed-grouping.md.
// The CSV is the human-edited source of truth for review; this script never rewrites it.
// Usage: node scripts/grouping.mjs [--dir docs/inventory]
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const GROUPS = ['home', 'personal-insurance', 'employee-benefits', 'business-insurance', 'resources', 'about-contact-legal', 'campaigns', 'requires-review'];
export const TOPICS = ['health-medical', 'maternity-family', 'life-income-protection', 'home-lifestyle-travel', 'living-in-singapore', 'employee-benefits-wellbeing', 'business-cyber-risks', 'company-news', 'unassigned'];
const CONFIDENCE = ['high', 'medium', 'low'];

export function parseCsv(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else if (c !== '\r') cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}

/** Returns a list of problems; empty means the grouping is complete and consistent. */
export function validate(inventoryRows, grouping) {
  const problems = [];
  const inv = new Map(inventoryRows.map((r) => [r.url, r]));
  const seen = new Map();
  for (const g of grouping) {
    seen.set(g.url, (seen.get(g.url) ?? 0) + 1);
    if (!inv.has(g.url)) problems.push(`not in inventory: ${g.url}`);
    if (!GROUPS.includes(g.proposed_group)) problems.push(`bad group "${g.proposed_group}": ${g.url}`);
    if (!CONFIDENCE.includes(g.confidence)) problems.push(`bad confidence "${g.confidence}": ${g.url}`);
    if (g.proposed_group === 'resources' && g.source_type === 'post' && !TOPICS.includes(g.proposed_article_topic)) problems.push(`bad topic "${g.proposed_article_topic}": ${g.url}`);
    if (g.disposition !== 'unresolved') problems.push(`disposition must stay "unresolved" until review: ${g.url}`);
    if (g.suggested_group_if_kept && !GROUPS.includes(g.suggested_group_if_kept)) problems.push(`bad suggested group: ${g.url}`);
  }
  for (const url of inv.keys()) if (!seen.has(url)) problems.push(`missing from grouping: ${url}`);
  for (const [url, n] of seen) if (n > 1) problems.push(`duplicated ${n}x: ${url}`);
  return problems;
}

const esc = (s) => String(s).replaceAll('|', '\\|');

export function renderReport(grouping) {
  const by = (g) => grouping.filter((r) => r.proposed_group === g);
  const lines = ['# Proposed URL grouping (for inventory review)', '',
    'Generated from `url-grouping.csv` by `npm run grouping`. **Proposal only**: classification is from URL slugs, not page content. Nothing is merged, deleted, redirected or re-routed; every row keeps `disposition = unresolved`. Edit the CSV, not this file.', '',
    '## Totals', '', '| Group | URLs |', '|---|---|',
    ...GROUPS.map((g) => `| ${g} | ${by(g).length} |`), `| **Total** | **${grouping.length}** |`, ''];
  for (const g of GROUPS) {
    const items = by(g);
    lines.push(`## ${g} (${items.length})`, '');
    if (g === 'resources') {
      const pages = items.filter((r) => r.source_type === 'page');
      lines.push('### Resource hub pages', '', ...pages.map((r) => `- \`${r.path}\` — ${esc(r.proposed_subgroup)} (${r.confidence})`), '');
      for (const t of TOPICS) {
        const a = items.filter((r) => r.source_type === 'post' && r.proposed_article_topic === t);
        if (!a.length) continue;
        lines.push(`### Articles: ${t} (${a.length})`, '', ...a.map((r) => `- \`${r.path}\` (${r.confidence})${r.review_flags ? ` — flags: ${r.review_flags.replaceAll(';', ', ')}` : ''}`), '');
      }
      continue;
    }
    lines.push('| Path | Sub-group | Conf. | Flags / notes |', '|---|---|---|---|');
    for (const r of items) {
      const extra = [r.suggested_group_if_kept && `if kept: ${r.suggested_group_if_kept}`, r.review_flags && `flags: ${r.review_flags.replaceAll(';', ', ')}`, r.notes].filter(Boolean).join(' — ');
      lines.push(`| \`${r.path}\` | ${esc(r.proposed_subgroup)} | ${r.confidence} | ${esc(extra)} |`);
    }
    lines.push('');
  }
  const flagCounts = new Map();
  for (const r of grouping) for (const f of r.review_flags.split(';').filter(Boolean)) flagCounts.set(f, (flagCounts.get(f) ?? 0) + 1);
  lines.push('## Review flags (all groups)', '', '| Flag | URLs |', '|---|---|', ...[...flagCounts].sort((a, b) => b[1] - a[1]).map(([f, n]) => `| ${f} | ${n} |`), '');
  return lines.join('\n');
}

function main() {
  const dirArg = process.argv.indexOf('--dir');
  const dir = resolve(dirArg > -1 ? process.argv[dirArg + 1] : 'docs/inventory');
  const inventory = JSON.parse(readFileSync(resolve(dir, 'url-inventory.json'), 'utf8')).rows;
  const grouping = parseCsv(readFileSync(resolve(dir, 'url-grouping.csv'), 'utf8'));
  const problems = validate(inventory, grouping);
  if (problems.length) { console.error(`Grouping invalid (${problems.length}):\n${problems.map((p) => `  - ${p}`).join('\n')}`); process.exit(1); }
  writeFileSync(resolve(dir, 'proposed-grouping.md'), renderReport(grouping));
  console.log(`OK: ${grouping.length} inventory URLs, each grouped exactly once.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
