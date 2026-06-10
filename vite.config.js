import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-bootstrap': fileURLToPath(new URL('./src/lib/react-bootstrap.jsx', import.meta.url)),
      'react-icons/fa': fileURLToPath(new URL('./src/lib/react-icons-fa.jsx', import.meta.url)),
    },
  },
})
