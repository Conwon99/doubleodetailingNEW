import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  publicDir: 'static',
  // Redirects live in static/_redirects so Netlify serves real 301s
  // (Astro's own redirects build meta-refresh pages that return 200).
  trailingSlash: 'ignore',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  server: {
    port: 5174,
  },
});
