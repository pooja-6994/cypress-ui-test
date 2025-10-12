
Cypress.Commands.add('login', (user = 'standard_user', pass = 'secret_sauce') => {
  cy.session([user], () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(user);
    cy.get('[data-test="password"]').type(pass, { log: false });
    cy.get('[data-test="login-button"]').click();
    cy.contains('.title', /products/i, { timeout: 10000 }).should('be.visible');
  });
});
