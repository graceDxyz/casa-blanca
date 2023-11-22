import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const defaultConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    const isDev = mode === 'development';

    return {
      ...defaultConfig,
      server: {
        proxy: {
          '/graphql': {
            target: isDev
              ? 'http://localhost:5000/graphql'
              : 'https://agri-map-58go.onrender.com',
            changeOrigin: true,
            rewrite: (p) => p.replace(/^\/graphql/, ''),
          },
        },
      },
    };
  } else {
    return defaultConfig;
  }
});
