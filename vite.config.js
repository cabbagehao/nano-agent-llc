import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 3000,
    open: false
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        terms: resolve(import.meta.dirname, 'terms.html'),
        support: resolve(import.meta.dirname, 'support.html'),
        about: resolve(import.meta.dirname, 'about.html'),
      },
    },
  },
});

