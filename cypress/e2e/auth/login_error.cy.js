/**
 * @tags @regression @auth
 */
import { LoginPage } from '../../pages/LoginPage';

describe('Login Error', () => {
  it('shows error on locked out user (@regression)', () => {
    const loginPage = new LoginPage();

    loginPage.visit();
    loginPage.login('invalid_user', 'bad_password');

    loginPage.elements.error().should('be.visible').and('contain.text', 'Login failed');
  });
});
