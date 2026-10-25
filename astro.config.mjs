import { defineConfig } from 'astro/config';

// Deliberately no `site`: the production domain is undecided (see docs/decision-log.md D-006).
// Add it, plus @astrojs/sitemap, only when the domain is confirmed.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
});
