# Cypress UI Framework – CURA Healthcare

A clean, **UI-only** Cypress framework pointed at the public **CURA Healthcare Service** demo app.  
It showcases Page Objects, tagging with `cypress-grep`, retries, sessions, and CI.

- Target app: https://katalon-demo-cura.herokuapp.com
- Standard creds: `John Doe` / `ThisIsNotAPassword`

## Quick start
```bash
npm i
npm run cypress:open
# headless:
npm run cypress:run
```
You can override baseUrl via env: `CYPRESS_baseUrl`.

## Structure
```
cypress/
  e2e/
    auth/
      login_success.cy.js
      login_error.cy.js
      logout.cy.js
      navigation.cy.js
    appointments/
      book_appointment.cy.js
      appointment_validation.cy.js
      appointment_history.cy.js
      facility_program.cy.js
  pages/
    LoginPage.js
    AppointmentPage.js
    ConfirmationPage.js
  support/
    commands.js
    e2e.js
cypress.config.js
```

## Tags
- `@smoke` for essential happy paths
- `@regression` for extended coverage
Run by tag:
```bash
npx cypress run --env grepTags=@smoke
npx cypress run --env grep=login
```

## Notes
- This repo is **UI-first**: pure user flows; network is only used for availability checks.
- Uses stable element IDs exposed by the CURA demo.
