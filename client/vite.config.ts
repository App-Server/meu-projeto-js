import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // Toda requisição para /api será redirecionada para o Node
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // Remove o prefixo /api antes de enviar ao servidor se necessário
        // rewrite: (path) => path.replace(/^\/api/, '') 
      }
    }
  }
})