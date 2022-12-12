import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    setupFiles: "src/setupTests.js",
    coverage: {
      reporter:["text", "html"],
    },
    environment:'jsdom',
  },
  plugins: [react()]
})
