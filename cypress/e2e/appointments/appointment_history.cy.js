/**
 * @tags @regression @appointments @history
 */
import { AppointmentPage } from '../../pages/AppointmentPage'
import { ConfirmationPage } from '../../pages/ConfirmationPage'
import { HistoryPage } from '../../pages/HistoryPage'

describe('Appointment history', () => {
  const appointmentPage = new AppointmentPage()
  const confirmationPage = new ConfirmationPage()
  const historyPage = new HistoryPage()

  beforeEach(() => {
    cy.login()
    appointmentPage.assertLoaded()
  })

  it('records the completed appointment in history (@regression)', () => {
    const uniqueComment = `History check ${Date.now()}`
    const details = {
      facility: 'Hongkong CURA Healthcare Center',
      readmission: false,
      program: 'none',
      programLabel: 'None',
      date: '15/12/2024',
      comment: uniqueComment,
    }

    appointmentPage.schedule(details)
    confirmationPage.assertLoaded()
    confirmationPage.assertDetails(details)
    confirmationPage.elements.goHome().click()
    cy.get('#btn-make-appointment').should('be.visible')

    cy.get('#menu-toggle').click()
    cy.contains('a', 'History').click()

    historyPage.assertLoaded()
    historyPage.assertEntry(details)
  })
})
