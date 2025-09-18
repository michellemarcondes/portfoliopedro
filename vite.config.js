import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nome-repositorio/', // Substitua 'nome-repositorio' pelo nome do seu repositório no GitHub
})
