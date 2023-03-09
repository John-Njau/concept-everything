import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import dotenv from "dotenv";

import vue from "@vitejs/plugin-vue";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    // ...
    __VALUE__: process.env.VALUE,
  },
});
