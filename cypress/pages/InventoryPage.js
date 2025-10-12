export class InventoryPage {
  elements = {
    title:      () => cy.get('.title'),
    itemNames:  () => cy.get('.inventory_item_name'),
    sortSelect: () => cy.get('[data-test="product_sort_container"]'),
    addButton:  (name) => cy.contains('.inventory_item', name).find('button:contains("Add to cart")'),
    removeButton: (name) => cy.contains('.inventory_item', name).find('button:contains("Remove")'),
    cartBadge:  () => cy.get('.shopping_cart_badge'),
    cartLink:   () => cy.get('.shopping_cart_link'),
  };

  addToCart(name) {
    this.elements.addButton(name).click();
  }

  removeFromCart(name) {
    this.elements.removeButton(name).click();
  }

  openCart() {
    this.elements.cartLink().click();
  }
}
