import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/images": {
        target: "https://image.tmdb.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/images/, ""),
      },
    },
  },
});
