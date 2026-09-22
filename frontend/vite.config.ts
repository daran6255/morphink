import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { generateSitemapAndRobots } from './scripts/generate-seo.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function autoSeoPlugin(): Plugin {
  return {
    name: 'auto-seo-generator',
    buildStart() {
      try {
        generateSitemapAndRobots()
      } catch (err) {
        console.warn('Could not auto-generate sitemap during buildStart:', err)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), autoSeoPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
