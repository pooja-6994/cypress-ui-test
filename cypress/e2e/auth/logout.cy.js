/**
 * @tags @regression @auth
 */
describe('Logout', () => {
  it('logs out from the burger menu', () => {
    cy.login();
    cy.get('#menu-toggle').click();
    cy.contains('a', 'Logout').click();
    cy.location('pathname').should('eq', '/');
    cy.get('#btn-make-appointment').should('be.visible');
  });
});
