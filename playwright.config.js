/* eslint-env node */
// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './e2e',          // only run tests from e2e folder
  testIgnore: ['**/*.jest.*'], // ignore Jest tests
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8080/',
  },
}


module.exports = config