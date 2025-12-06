/**
 * @tags @regression @navigation
 */

describe('Navigation menu', () => {
  beforeEach(() => {
    cy.login()
  })

  it('navigates between appointment, history, and profile pages', () => {
    const openMenu = () => {
      cy.get('#menu-toggle').click()
    }

    openMenu()
    cy.contains('a', 'History').click()
    cy.contains('h2', 'History').should('be.visible')

    openMenu()
    cy.contains('a', 'Profile').click()
    cy.contains('h2', 'Profile').should('be.visible')
    cy.contains('#profile', /john doe/i).should('be.visible')

    openMenu()
    cy.contains('a', 'Home').click()
    cy.contains('h2', 'Make Appointment').should('be.visible')
  })
})
