import { defineConfig } from 'vite'
import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      URLPattern: ['urlpattern-polyfill', 'URLPattern']
    }),
  ],
  base: '/',
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
