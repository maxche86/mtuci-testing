import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), svgr()],
  resolve: {
    alias: {
      '~assets': path.resolve(__dirname, './src/shared/assets'),
      '~themes': path.resolve(__dirname, './src/shared/ui/themes'),
      '~shared': path.resolve(__dirname, './src/shared'),
      '~pages': path.resolve(__dirname, './src/pages'),
      '~widgets': path.resolve(__dirname, './src/widgets'),
      '~entities': path.resolve(__dirname, './src/entities'),
      '~features': path.resolve(__dirname, './src/features'),
    },
  },
});
