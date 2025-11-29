/**
 * @tags @smoke @auth
 */
import { LoginPage } from '../../pages/LoginPage';
import { AppointmentPage } from '../../pages/AppointmentPage';

describe('Login Success', () => {
  it('logs in with valid credentials (@smoke)', () => {
    const loginPage = new LoginPage();
    const appointmentPage = new AppointmentPage();

    loginPage.visit();
    loginPage.login('John Doe', 'ThisIsNotAPassword');

    cy.url().should('include', '#appointment');
    appointmentPage.assertLoaded();
  });
});
