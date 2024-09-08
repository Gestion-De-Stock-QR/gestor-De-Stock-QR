import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Gestion-De-Stock-QR/gestor-De-Stock-QR/', // nombre del repositorio dentro de la organización
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
});