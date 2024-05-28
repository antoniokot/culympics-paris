import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Use happy-dom as the test environment
    environment: 'happy-dom',
  },
  define: {
    'import.meta.env.VITE_MAPBOX_ACCESS_TOKEN': JSON.stringify(
      'pk.eyJ1IjoiYW50b25pb2tvdCIsImEiOiJja21tYjRhNHAxamY0Mm9uMHMzajFya255In0.gT75e7X-5HTA0yGx0O2lMA',
    ),
  },
})
