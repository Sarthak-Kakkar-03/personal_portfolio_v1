import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Adjust this if your app is deployed in a subdirectory
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
