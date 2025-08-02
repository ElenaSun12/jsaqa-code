import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 375,    // iPhone 13/14 (или другой популярный размер)
  viewportHeight: 812,
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 1,
  }
});