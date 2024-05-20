import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: './index.jsx'
    }
  },
  plugins: [react()]
})
