// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.reysautorepair.example',
  build: { format: 'directory' },
  vite: {
    plugins: [tailwindcss()],
  },
});
