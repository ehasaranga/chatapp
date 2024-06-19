import { defineConfig, createLogger } from 'vite'
import react from '@vitejs/plugin-react'
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css'
import path from 'path';

const logger = createLogger();
const originalWarning = logger.warn;
logger.warn = (msg: any, options) => {

  if (
    msg.includes('import(import.meta.url).then(currentExports =>') &&
    msg.includes('The above dynamic import cannot be analyzed by Vite.')
  )
    return;
  originalWarning(msg, options);

};

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
  },
  // customLogger: logger
})
