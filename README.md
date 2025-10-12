# Cypress UI Framework – Sauce Demo

A clean, **UI-only** Cypress framework targeted at the public **Sauce Demo** site.  
It follows best practices: Page Objects, tags with `cypress-grep`, retries, and CI.

- Target app: https://www.saucedemo.com
- Standard creds: `standard_user` / `secret_sauce`

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
    cart/
      add_remove_cart.cy.js
      sort_products.cy.js
    checkout/
      checkout_smoke.cy.js
  pages/
    LoginPage.js
    InventoryPage.js
    CartPage.js
    CheckoutPage.js
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
- This repo is **UI-first**: no network stubbing; pure user flows.
- Uses robust `data-test` selectors provided by the app.
