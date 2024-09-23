import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    build: {
      // Налаштування збірки, які залежать від середовища
      minify: mode === 'production',
      // ... інші налаштування
    },
  }
})