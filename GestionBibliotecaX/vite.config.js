import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api/v1/Generos',  // La URL de tu servidor backend
        changeOrigin: true,               // Cambiar el origen para evitar el problema de CORS
        secure: false,                    // Si tu servidor usa HTTPS, ponlo en true
      },
    },
  },
})
