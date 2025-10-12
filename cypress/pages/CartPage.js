export class CartPage {
  elements = {
    items:       () => cy.get('.cart_item'),
    checkoutBtn: () => cy.get('[data-test="checkout"]'),
    continueBtn: () => cy.get('[data-test="continue-shopping"]'),
  };

  checkout() {
    this.elements.checkoutBtn().click();
  }
}
