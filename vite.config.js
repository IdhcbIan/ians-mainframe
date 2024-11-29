import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'  // or react, or whatever framework you're using

export default defineConfig({
  plugins: [vue()],
  base: './',  // This is the key change
})