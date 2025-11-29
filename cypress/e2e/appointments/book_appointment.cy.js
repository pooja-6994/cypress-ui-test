/**
 * @tags @smoke @appointments
 */
import { AppointmentPage } from '../../pages/AppointmentPage'
import { ConfirmationPage } from '../../pages/ConfirmationPage'

describe('Book Appointment', () => {
  const appointmentPage = new AppointmentPage()
  const confirmationPage = new ConfirmationPage()

  beforeEach(() => {
    cy.login()
    appointmentPage.assertLoaded()
  })

  it('books an appointment end-to-end (@smoke)', () => {
    const details = {
      facility: 'Seoul CURA Healthcare Center',
      readmission: true,
      program: 'medicare',
      programLabel: 'Medicare',
      date: '30/12/2024',
      comment: 'Annual physical via Cypress',
    }

    appointmentPage.schedule({
      facility: details.facility,
      readmission: details.readmission,
      program: details.program,
      date: details.date,
      comment: details.comment,
    })

    confirmationPage.assertLoaded()
    confirmationPage.assertDetails({
      facility: details.facility,
      readmission: details.readmission,
      program: details.programLabel,
      date: details.date,
      comment: details.comment,
    })
  })
})
