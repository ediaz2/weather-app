import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import viteSvgIcons from 'vite-plugin-svg-icons';

export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [`${process.cwd()}/src/assets/svg`],
      symbolId: 'icon-[dir]-[name]',
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
});
