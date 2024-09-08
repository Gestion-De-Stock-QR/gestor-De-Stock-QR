import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gestor-De-Stock-QR/Gestor-de-codigos-QR/', // Ruta base correcta
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
});