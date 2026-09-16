import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    server: {
      allowedHosts: ['victoria.roger359.com', 'www.victoria.roger359.com'],
    },
    preview: {
      allowedHosts: ['victoria.roger359.com', 'www.victoria.roger359.com'],
    },
  },
});
