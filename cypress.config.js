const { defineConfig } = require('cypress')
module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_baseUrl || 'https://www.saucedemo.com',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    retries: { runMode: 2, openMode: 0 },
  },
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
})
