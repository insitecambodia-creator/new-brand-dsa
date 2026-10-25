# Astro security findings and engine requirements

Recorded 2026-10-25. Source: `npm audit` run in a scratch directory with `astro@6.4.8` installed, plus the npm registry bulk advisory endpoint (`/-/npm/v1/security/advisories/bulk`). Advisory pages on github.com were **not** read; severities, CWEs and ranges are as the registry reports them. CVSS 0 means the registry holds no score. "First unaffected" is derived from the range's upper bound, not stated by the registry.

## Why Astro 7.4.2

Astro 6.4.8 (the last 6.x release; the registry shows no later 6.x) is inside the affected range of every advisory below. `npm audit` flagged `astro <=7.3.1` (rolled up as critical because of one critical advisory; the rest are moderate or low) and suggested 7.4.x. The project uses 7.4.2: `npm audit` reports 0 vulnerabilities. I have **not** assessed exploitability for this static prototype; the decision was simply to avoid known-vulnerable versions.

## astro

| Registry ID | GHSA | Severity | Affected range | First unaffected | Title | CWE / CVSS |
|---|---|---|---|---|---|---|
| 1139373 | GHSA-f48w-9m4c-m7f5 | moderate | `<7.0.6` | 7.0.6 | XSS via unescaped spread attribute names in renderHTMLElement (incomplete fix for CVE-2026-54298) | CWE-79 / 0 |
| 1139375 | GHSA-7pw4-f3q4-r2p2 | low | `>=3.10.0 <7.0.4` | 7.0.4 | XSS via unescaped `transition:*` directive values on hydrated islands | CWE-79, 83, 116 / 0 |
| 1139376 | GHSA-4g3v-8h47-v7g6 | moderate | `>=2.9.0 <=7.0.9` | 7.0.10 | Reflected XSS via unescaped View Transition animation properties | CWE-79 / 0 |
| 1193723 | GHSA-26w7-cxv4-gfx2 | **critical** | `<7.2.8` | 7.2.8 | Remote code execution through AVIF image optimization | CWE-125, 787 / 9.8 |
| 1193724 | GHSA-376h-93r7-7g6f | moderate | `<=7.2.3` | 7.2.4 | Authorization bypass: missing path-segment boundary check when stripping the configured base | CWE-187 / 0 |
| 1242877 | GHSA-98hj-9722-w3j8 | moderate | `<7.3.2` | 7.3.2 | Reflected/stored XSS via unescaped `<script>`/`<style>` content in JSX/MDX rendering | CWE-79 / 6.5 |
| 1242878 | GHSA-mpr7-6m5w-76rw | low | `>=7.1.0 <=7.3.2` | 7.3.3 | Astro: Arbitrary CSS injection in Astro View Transitions | CWE-79 / 0 |

Highest first-unaffected version across all seven: **7.3.3**. Note GHSA-mpr7-6m5w-76rw did not appear in the 6.4.8 audit because 6.4.8 is below its range; it was found by querying the registry for 7.x versions. Installed 7.4.2 is outside every range.

## Transitive packages in the Astro 6.4.8 tree (installed there: esbuild 0.27.7, sharp 0.34.5, vite 7.3.7)

| Registry ID | GHSA | Package | Severity | Affected range | First unaffected | Title |
|---|---|---|---|---|---|---|
| 1120680 | GHSA-g7r4-m6w7-qqqr | esbuild | low | `>=0.27.3 <0.28.1` | 0.28.1 | Arbitrary file read on the dev server on Windows (CWE-22, CVSS 2.5) |
| 1124066 | GHSA-f88m-g3jw-g9cj | sharp | high | `<0.35.0` | 0.35.0 | Inherited libvips vulnerabilities: CVE-2026-33327, -33328, -35590, -35591 |
| 1193725 | GHSA-rgj7-g3m4-5g8c | sharp | high | `<0.35.4` | 0.35.4 | libheif vulnerabilities: GHSA-g89c-p67h-r497, GHSA-2jg2-4ch7-h545 |
| 1241331 | GHSA-wq5f-xc86-pv6w | sharp | high | `<0.35.5` | 0.35.5 | librsvg vulnerability CVE-2026-96889 |

## What is installed now (project, `package-lock.json`)

| Package | Version | Engines (from the installed package) |
|---|---|---|
| astro | 7.4.2 | node `>=22.23.4`; npm `>=9.6.5`; pnpm `>=7.1.0` |
| sharp | 0.35.5 | node `>=20.9.0` |
| vite | 8.3.5 | node `^20.19.0 \|\| >=22.12.0` |
| @astrojs/check | 0.9.12 | none declared; peer `typescript ^5.0.0 \|\| ^6.0.0` |
| typescript | 5.9.3 | n/a |
| esbuild | not installed | vite 8 lists it as an optional peer (`^0.27.0 \|\| ^0.28.0`), unmet |

Project `engines.node` is `>=22.23.4`; `.nvmrc` is `22.23.4`.

## Node situation

- Machine default: Node 22.22.0 (`/usr/local/bin/node`), npm 10.9.4. It does **not** satisfy Astro 7.4.2. Verified: `npm ci --dry-run` on it prints `EBADENGINE` warnings for the project and for `@astrojs/prism@4.1.1` (both require `>=22.23.4`).
- All checks in this project were run on **Node 22.23.4**, obtained from the `node` npm package into a session scratch directory (not installed system-wide, not committed). Anyone running the project needs Node >= 22.23.4.
- Astro 7.4.2 (`latest` dist-tag at the time) was newer than the knowledge I started with; setup relied on installed package types and npm metadata because docs.astro.build was unreachable from the sandbox.
