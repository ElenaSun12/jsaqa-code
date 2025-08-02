import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1366,   // Популярный размер для ноутбуков (Full HD)
  viewportHeight: 768,
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 1,
  }
});