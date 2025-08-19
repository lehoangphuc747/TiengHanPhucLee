// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lehoangphuc747.github.io',
  integrations: [mdx(), sitemap(), react()],

  image: {
      service: {
          entrypoint: 'astro/assets/services/sharp',
      },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});