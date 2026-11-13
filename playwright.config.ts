import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  use: { baseURL: process.env.NORTHWAY_BASE_URL || "http://127.0.0.1:3002", channel: "chrome", trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: process.env.NORTHWAY_BASE_URL ? undefined : {
    command: "NORTHWAY_DIST_DIR=.next-visual-v3 npm run dev -- --port 3002",
    url: "http://127.0.0.1:3002/components",
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  },
});
