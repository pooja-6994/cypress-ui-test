/**
 * @tags @regression @auth
 */
describe('Logout', () => {
  it('logs out from the burger menu', () => {
    cy.login();
    cy.get('#react-burger-menu-btn').click();
    cy.contains('#logout_sidebar_link', /logout/i).click();
    cy.url().should('include', '/');
    cy.get('[data-test="login-button"]').should('be.visible');
  });
});
