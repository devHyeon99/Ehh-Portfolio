import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 빌드 시 public/ 이미지를 포함해 png/jpg를 압축한다. (소스는 원본 유지)
    ViteImageOptimizer({
      png: { quality: 80, palette: true },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
    }),
  ],
});
