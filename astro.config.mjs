// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://martinjanus.dev',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
    // Inline small stylesheets so the page ships as fewer HTTP requests.
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  // Single-page portfolio: prerender everything, ship zero JS by default.
  output: 'static',
});
