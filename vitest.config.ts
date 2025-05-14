import path from "path";

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    css: true,
    setupFiles: ["./setup-tests.js"],
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
