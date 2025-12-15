/* eslint-env node */
// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './e2e',          // only run tests from e2e folder
  testIgnore: ['**/*.jest.*'], // ignore Jest tests
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8081',
    timeout: 180000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8081/',
  },
}


module.exports = config