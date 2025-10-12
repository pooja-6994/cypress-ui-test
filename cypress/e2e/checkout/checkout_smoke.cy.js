/**
 * @tags @smoke @checkout
 */
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

describe('Checkout smoke', () => {
  const inv = new InventoryPage();
  const cart = new CartPage();
  const chk = new CheckoutPage();

  beforeEach(() => cy.login());

  it('completes a purchase (@smoke)', () => {
    inv.addToCart('Sauce Labs Backpack');
    inv.openCart();
    cart.checkout();
    chk.fillDetails('Pooja', 'Bharti', '560001');
    chk.finish();
    chk.elements.complete().should('be.visible');
  });
});
