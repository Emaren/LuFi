import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import copy from 'rollup-plugin-copy';

// Use '/LuFi/' only for production builds (GitHub Pages), '/' for local development
const basePath = process.env.NODE_ENV === 'production' ? '/LuFi/' : '/';

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: true, // Enable service worker in dev mode
        type: 'module',
      },
      manifest: {
        name: 'LuFi',
        short_name: 'LuFi',
        description: 'A Progressive Web App for LuFi',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: `${basePath}`,
        icons: [
          { src: `${basePath}icons/icon-192x192.png`, sizes: '192x192', type: 'image/png' },
          { src: `${basePath}icons/icon-512x512.png`, sizes: '512x512', type: 'image/png' },
          { src: `${basePath}apple-touch-icon.png`, sizes: '192x192', type: 'image/png' },
        ],
      },
    }),
    copy({
      targets: [
        { src: 'public/apple-touch-icon*.png', dest: 'dist/' },
      ],
      hook: 'writeBundle',
    }),
  ],
  server: {
    host: true,
    allowedHosts: ['.ngrok-free.app'],
    headers: { 'ngrok-skip-browser-warning': 'true' },
  },
});
