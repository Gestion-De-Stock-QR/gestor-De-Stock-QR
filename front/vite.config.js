import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/Gestion-De-Stock-QR/gestor-De-Stock-QR.git', 
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
});