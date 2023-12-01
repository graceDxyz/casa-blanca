import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const defaultConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};

export default defineConfig(({ command, mode }) => {
  if (command === "serve") {
    const isDev = mode === "development";

    return {
      ...defaultConfig,
      server: {
        proxy: {
          "/api": {
            target: isDev
              ? "http://localhost:5000/api"
              : "https://casa-blanca-dev-cfkt.2.us-1.fl0.io/api",
            changeOrigin: true,
            rewrite: (p) => p.replace(/^\/api/, ""),
          },
          "/socket.io": {
            target: "ws://localhost:5000",
            rewrite: (p) => p.replace(/^\/socket.io/, ""),
            ws: true,
          },
        },
      },
    };
  } else {
    return defaultConfig;
  }
});
