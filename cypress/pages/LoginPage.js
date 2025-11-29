export class LoginPage {
  elements = {
    makeAppointment: () => cy.get('#btn-make-appointment'),
    username: () => cy.get('#txt-username'),
    password: () => cy.get('#txt-password'),
    submit:   () => cy.get('#btn-login'),
    error:    () => cy.get('.alert-danger, .text-danger'),
  };

  visit() {
    cy.request('/').its('status').should('eq', 200)
    cy.visit('/', { timeout: 120000 })
    this.elements.makeAppointment().should('be.visible').click()
  }

  login(user, pass) {
    this.elements.username().clear().type(user);
    this.elements.password().clear().type(pass, { log: false });
    this.elements.submit().click();
  }
}
