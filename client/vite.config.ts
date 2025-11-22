import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Read backend URL from env variables (for production)
const BACKEND_URL = process.env.VITE_BACKEND_URL;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:8000", // Only used in local development
    },
  },
  build: {
    outDir: "dist",
  },
  define: {
    // Make backend URL available in the frontend code
    "process.env": {
      VITE_BACKEND_URL: BACKEND_URL,
    },
  },
});
