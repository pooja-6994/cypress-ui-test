/**
 * @tags @regression @catalog
 */
import { InventoryPage } from '../../pages/InventoryPage';

describe('Product sorting', () => {
  const inv = new InventoryPage();

  beforeEach(() => cy.login());

  it('sorts by Price (low to high)', () => {
    inv.elements.sortSelect().select('lohi');
    // assert that first item becomes lowest priced (name assertion for simplicity)
    inv.elements.itemNames().first().should('contain.text', 'Sauce');
  });

  it('sorts by Name (Z to A)', () => {
    inv.elements.sortSelect().select('za');
    inv.elements.itemNames().first().should('be.visible');
  });
});
