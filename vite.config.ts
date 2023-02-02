import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import ssrPlugin from 'vite-plugin-ssr/plugin'

export default defineConfig({
  plugins: [solidPlugin({ ssr: true }), ssrPlugin({})],
  server: {
    port: 3000,
  },
  build: {
    target: 'es2018',
  },
})
