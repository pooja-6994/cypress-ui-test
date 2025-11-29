const { defineConfig } = require('cypress')

const baseUrl = process.env.CYPRESS_baseUrl || 'https://katalon-demo-cura.herokuapp.com'

module.exports = defineConfig({
  e2e: {
    baseUrl,
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    retries: { runMode: 2, openMode: 0 },
    pageLoadTimeout: 120000,
  },
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
})
