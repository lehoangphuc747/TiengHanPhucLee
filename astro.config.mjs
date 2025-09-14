// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  // Cấu hình cho blog tiếng Hàn
  site: 'https://tienghanphuclee.netlify.app',
  compressHTML: true,
  // Cấu hình markdown cho blog posts
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});
