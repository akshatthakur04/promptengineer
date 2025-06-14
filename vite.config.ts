import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: false,
  },
  optimizeDeps: {
    include: ['swiper', 'swiper/react', 'swiper/modules']
  }
})
