// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pkg from './package.json';

const VERSION = pkg.version;

export default defineConfig({
  base: '/', // index.html stays at root

  plugins: [react()],

  build: {
    outDir: 'dist',
    assetsDir: `v${VERSION}/assets`, // 👈 ALL assets go here

    rollupOptions: { 
      output: {
        entryFileNames: `${VERSION}/assets/[name]-[hash].js`,
        chunkFileNames: `${VERSION}/assets/[name]-[hash].js`,
        assetFileNames: `${VERSION}/assets/[name]-[hash][extname]`
      }
    }
  },

  define: {
    __APP_VERSION__: JSON.stringify(VERSION)
  }
});
