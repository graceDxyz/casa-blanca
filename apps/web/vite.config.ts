import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const rewriteSlashToIndexHtml = () => {
  return {
    name: 'rewrite-slash-to-index-html',
    apply: 'serve',
    enforce: 'post',
    configureServer(server) {
      // rewrite / as index.html
      server.middlewares.use('/', (req, _, next) => {
        if (req.url === '/') {
          req.url = '/index.html';
        }
        next();
      });
    },
  };
};

const defaultConfig = {
  appType: 'mpa', // disable history fallback
  plugins: [react(), rewriteSlashToIndexHtml()],
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
          '/api': {
            target: isDev
              ? 'http://localhost:5000'
              : 'https://agri-map-58go.onrender.com',
            // changeOrigin: isDev,
            // secure: !isDev,
          },
        },
      },
    };
  } else {
    return defaultConfig;
  }
});
