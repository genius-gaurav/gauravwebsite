import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/gauravwebsite/',
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 3000,
    open: true,
  },
});
