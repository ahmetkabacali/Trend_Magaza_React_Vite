import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    react: {
      skip: true, // Fast Refresh'i devre dışı bırakır
    },
  },
})
