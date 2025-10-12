/**
 * @tags @smoke @cart
 */
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

describe('Cart add/remove', () => {
  const inv = new InventoryPage();
  const cart = new CartPage();

  beforeEach(() => cy.login());

  it('adds an item to cart and verifies badge (@smoke)', () => {
    inv.addToCart('Sauce Labs Backpack');
    inv.elements.cartBadge().should('have.text', '1');
    inv.openCart();
    cart.elements.items().should('have.length', 1).and('contain.text', 'Sauce Labs Backpack');
  });

  it('removes an item from cart', () => {
    inv.addToCart('Sauce Labs Backpack');
    inv.removeFromCart('Sauce Labs Backpack');
    inv.elements.cartBadge().should('not.exist');
  });
});
