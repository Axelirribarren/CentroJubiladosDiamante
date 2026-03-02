import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Configuraciones base para que comprima bien sin perder calidad
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      // Convierte automáticamente lo que pueda a WebP si se lo pides, o lo optimiza
      webp: {
        lossless: true,
      },
    }),
  ],
})