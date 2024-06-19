import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true, // Optional: useful for debugging
    rollupOptions: {
      input: './index.html' // Ensure this is correct
    }
  },
})
