import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    preview: {
      allowedHosts: ['victoria.roger359.com'],
    },
  },
});
