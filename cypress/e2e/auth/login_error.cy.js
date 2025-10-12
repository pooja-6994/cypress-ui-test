/**
 * @tags @regression @auth
 */
import { LoginPage } from '../../pages/LoginPage';

describe('Login Error', () => {
  it('shows error on locked out user (@regression)', () => {
    const lp = new LoginPage();
    lp.visit();
    lp.login('locked_out_user', 'secret_sauce');
    lp.elements.error().should('be.visible').and('contain.text', 'Epic sadface');
  });
});
