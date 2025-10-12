// cypress/support/e2e.js

// ✅ correct: named export
import { register as registerCypressGrep } from '@cypress/grep'
registerCypressGrep()

// then load your commands
import './commands'
