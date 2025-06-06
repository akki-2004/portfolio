import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 12000,
    strictPort: true,
    cors: true,
    allowedHosts: ['work-1-snugblwmcvamoebi.prod-runtime.all-hands.dev'],
    headers: {
      'Access-Control-Allow-Origin': '*',
      'X-Frame-Options': 'ALLOWALL'
    }
  }
})
