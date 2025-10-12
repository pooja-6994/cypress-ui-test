// cypress/support/e2e.js
import { register as registerCypressGrep } from '@cypress/grep'
registerCypressGrep()

// global stub to avoid load hangs
before(() => {
  cy.intercept('POST', /events\.backtrace\.io\/api\/.*-events\/submit.*/, { statusCode: 204, body: {} })
})

import './commands'
