// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site.ts';
import { sitemapLinksFor } from './src/i18n/routes.ts';

export default defineConfig({
  site: site.url,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        item.links = sitemapLinksFor(item.url);
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
