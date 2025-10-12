export class CheckoutPage {
  elements = {
    firstName: () => cy.get('[data-test="firstName"]'),
    lastName:  () => cy.get('[data-test="lastName"]'),
    postal:    () => cy.get('[data-test="postalCode"]'),
    continue:  () => cy.get('[data-test="continue"]'),
    finish:    () => cy.get('[data-test="finish"]'),
    complete:  () => cy.contains('h2', 'Thank you for your order!'),
  };

  fillDetails(first, last, zip) {
    this.elements.firstName().type(first);
    this.elements.lastName().type(last);
    this.elements.postal().type(zip);
    this.elements.continue().click();
  }

  finish() {
    this.elements.finish().click();
  }
}
