import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import path  from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'mock': path.resolve(__dirname, 'mock'),
    }
  },

  plugins: [
    vue(),
    viteMockServe({
      mockPath: "mock"
    }),
  ],
  
  server: {
    open: true,
    port: 8666,
    proxy: {
      // '/api': {
      //   target: 'http://127.0.0.1:8666/api/',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // }
    }
  }
})
