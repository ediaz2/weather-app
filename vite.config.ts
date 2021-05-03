import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import viteSvgIcons from 'vite-plugin-svg-icons';

export default defineConfig({
  build: {
    sourcemap: false,
  },
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [`${process.cwd()}/src/assets/svg`],
      symbolId: 'icon-[dir]-[name]',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      manifest: {
        name: 'Weather APP',
        short_name: 'weather-app',
        description: 'Basic app to view meteorological data by location',
        theme_color: '#0f0d1c',
        background_color: '#0f0d1c',
        display: 'standalone',
        scope: '/',
        start_url: '/weather-app/',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        cacheId: 'weather-app',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    open: true,
  },

  base: process.env.NODE_ENV === 'production' ? '/weather-app/' : './',
});
