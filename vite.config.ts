import { defineConfig } from 'vite'
import { defineConfig as defineTestConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const config = defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/1_react_quickstart/',
})

const vitestConfig = defineTestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.ts?(x)'],
  }
})

export default {
  ...config,
  ...vitestConfig,
}
