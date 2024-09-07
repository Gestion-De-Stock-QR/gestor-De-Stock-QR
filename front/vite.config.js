import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://gestion-de-stock-qr.github.io/gestor-De-Stock-QR/',
  plugins: [react()],
  //server: {
  //  host: '0.0.0.0',
  //},
});