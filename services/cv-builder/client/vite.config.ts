import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh()
  ],
  server: {
    host: process.env.LOCAL_HOST || '0.0.0.0',
    port: parseInt(process.env.CLIENT_PORT, 10) || 3000,
    watch: {
      usePolling: true,
    },
  },
});
