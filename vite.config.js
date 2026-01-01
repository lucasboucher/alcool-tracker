import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['robots.txt'],
      manifest: {
        name: 'Mon alcool tracker',
        short_name: 'Alcool Tracker',
        description: "Application qui donne votre taux d'alcoolémie",
        theme_color: '#16120C',
        background_color: '#16120C',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'logo192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'any maskable',
          },
          {
            src: 'logo512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any maskable',
          },
        ],
        categories: ['health', 'lifestyle'],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      },
      devOptions: {
        enabled: true,
        disableDevLogs: true,
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          const normalizedId = id.replace(/\\/g, '/');

          const nodeModulesMatch = normalizedId.match(/\/node_modules\/(?:@[^/]+\/)?([^/]+)/);

          if (!nodeModulesMatch) {
            return undefined;
          }

          const packageName = nodeModulesMatch[1];

          if (packageName === 'iconoir-react') {
            return 'iconoir-vendor';
          }

          if (normalizedId.includes('/node_modules/')) {
            return 'vendor';
          }

          return undefined;
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
});
