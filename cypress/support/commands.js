const performLogin = (user, pass) => {
  cy.visit('/');
  cy.get('#btn-make-appointment').click();
  cy.get('#txt-username').clear().type(user);
  cy.get('#txt-password').clear().type(pass, { log: false });
  cy.get('#btn-login').click();
  cy.url().should('include', '#appointment');
}

Cypress.Commands.add('login', (user = 'John Doe', pass = 'ThisIsNotAPassword') => {
  cy.session([user, pass], () => {
    performLogin(user, pass);
  });

  const ensureAppointmentPage = () => {
    cy.visit('/');
    cy.get('body').then(($body) => {
      if ($body.find('#btn-login').length) {
        performLogin(user, pass);
        return;
      }

      if ($body.find('#btn-make-appointment').length) {
        cy.get('#btn-make-appointment').click();
      }
    });
    cy.contains('h2', 'Make Appointment', { timeout: 10000 }).should('be.visible');
  };

  ensureAppointmentPage();
});
