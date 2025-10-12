export class LoginPage {
  elements = {
    username: () => cy.get('[data-test="username"]'),
    password: () => cy.get('[data-test="password"]'),
    submit:   () => cy.get('[data-test="login-button"]'),
    error:    () => cy.get('[data-test="error"]'),
  };

  visit() {
    cy.visit('/');
  }

  login(user, pass) {
    this.elements.username().clear().type(user);
    this.elements.password().clear().type(pass, { log: false });
    this.elements.submit().click();
  }
}
