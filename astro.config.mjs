import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  publicDir: 'static',
  // Old URLs that still get search traffic, sent to the closest live page
  redirects: {
    // Town + service pages removed in the spam clean-up that still had clicks
    "/helensburgh/deep-cleans": "/deep-cleans",
    "/bearsden/deep-cleans": "/deep-cleans",
    "/balfron/deep-cleans": "/deep-cleans",
    "/balloch/deep-cleans": "/deep-cleans",
    "/drymen/deep-cleans": "/deep-cleans",
    "/dumbarton/deep-cleans": "/deep-cleans",
    "/dumbarton/machine-polishing": "/machine-polishing",
    "/balfron/engine-bay-detailing": "/engine-bay-detailing",
    "/balloch/soft-top-restoration": "/soft-top-restoration",
    "/jordanhill/soft-top-restoration": "/soft-top-restoration",
    "/killearn/soft-top-restoration": "/soft-top-restoration",
    "/dumbarton/headlight-restoration": "/headlight-restoration",
    "/helensburgh/headlight-restoration": "/headlight-restoration",
    "/hyndland/headlight-restoration": "/headlight-restoration",
    // Town pages removed in the spam clean-up that still had clicks
    "/aberfoyle": "/locations",
    "/alexandria": "/locations",
    "/balmaha": "/locations",
    "/cardross": "/locations",
    "/fintry": "/locations",
    "/strathblane": "/locations",
    // Older pages no longer on the site that Google still sends visitors to
    "/stirling": "/locations",
    "/bishopbriggs": "/locations",
    "/lennoxtown": "/locations",
    "/stirling/machine-polishing": "/machine-polishing",
    "/stirling/headlight-restoration": "/headlight-restoration",
    "/stirling/deep-cleans": "/deep-cleans",
    "/bishopbriggs/deep-cleans": "/deep-cleans",
    "/lennoxtown/deep-cleans": "/deep-cleans",
    "/stirling/jet-ski-detailing": "/",
    "/jet-ski-detailing": "/",
    "/double-o-detailing-packages-info": "/packages",
    "/double-o-detailing-gallery": "/gallery",
  },
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
