import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/chatbot": "http://localhost:8000",
      "/backend": "http://localhost:8000",
      "/frontend": "http://localhost:8000",
      "/infra": "http://localhost:8000",
      "/monitoring": "http://localhost:8000",
      "/ai": "http://localhost:8000",
      "/knowledge": "http://localhost:8000",
    },
  },
});
