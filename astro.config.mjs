// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Cấu hình cho blog tiếng Hàn
  site: 'https://tienghanphuclee.netlify.app',
  compressHTML: true,
  // TODO: Thêm cấu hình markdown cho blog posts
});
