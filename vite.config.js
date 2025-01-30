import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Explicitly setting the output directory
  },
  server: {
    port: 3000,
  },
});
