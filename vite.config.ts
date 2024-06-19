import { defineConfig, createLogger } from 'vite'
import react from '@vitejs/plugin-react'
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    open: true,
  },
  plugins: [
    react(),
    reactScopedCssPlugin(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`
      }
    },
    modules: {
      scopeBehaviour: "local",
      localsConvention: 'camelCaseOnly',
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  }
})
