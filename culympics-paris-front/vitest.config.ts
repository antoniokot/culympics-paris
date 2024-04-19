import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Use happy-dom as the test environment
    environment: 'happy-dom',
  },
})
