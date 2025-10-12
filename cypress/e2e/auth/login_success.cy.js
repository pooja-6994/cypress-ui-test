/**
 * @tags @smoke @auth
 */
import { LoginPage } from '../../pages/LoginPage';

describe('Login Success', () => {
  it('logs in with valid credentials (@smoke)', () => {
    const lp = new LoginPage();
    lp.visit();
    lp.login('standard_user', 'secret_sauce');
    cy.contains('.title', 'Products').should('be.visible');
  });
});
