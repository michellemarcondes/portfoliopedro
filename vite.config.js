import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfoliopedro', // Alterado para desenvolvimento local
  server: {
    port: 5173,
    open: true
  }
})
