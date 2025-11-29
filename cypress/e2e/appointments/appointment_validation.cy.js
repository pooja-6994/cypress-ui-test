/**
 * @tags @regression @appointments
 */
import { AppointmentPage } from '../../pages/AppointmentPage'

describe('Appointment form validation', () => {
  const appointmentPage = new AppointmentPage()

  beforeEach(() => {
    cy.login()
    appointmentPage.assertLoaded()
  })

  it('enforces visit date before submission (@regression)', () => {
    appointmentPage.elements.facility().select('Tokyo CURA Healthcare Center')
    appointmentPage.elements.bookButton().click()

    appointmentPage.elements
      .visitDate()
      .invoke('prop', 'validationMessage')
      .should((msg) => {
        expect(msg).to.match(/fill (in|out) this field/i)
      })
  })
})
