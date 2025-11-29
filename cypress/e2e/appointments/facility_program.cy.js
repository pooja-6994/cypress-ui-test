/**
 * @tags @regression @appointments
 */
import { AppointmentPage } from '../../pages/AppointmentPage'
import { ConfirmationPage } from '../../pages/ConfirmationPage'

const scenarios = [
  {
    name: 'Tokyo / Medicaid',
    facility: 'Tokyo CURA Healthcare Center',
    readmission: true,
    program: 'medicaid',
    programLabel: 'Medicaid',
    date: '05/01/2025',
  },
  {
    name: 'Hongkong / Medicare',
    facility: 'Hongkong CURA Healthcare Center',
    readmission: false,
    program: 'medicare',
    programLabel: 'Medicare',
    date: '12/02/2025',
  },
  {
    name: 'Seoul / None',
    facility: 'Seoul CURA Healthcare Center',
    readmission: true,
    program: 'none',
    programLabel: 'None',
    date: '22/03/2025',
  },
]

describe('Facility and program coverage', () => {
  const appointmentPage = new AppointmentPage()
  const confirmationPage = new ConfirmationPage()

  scenarios.forEach((scenario) => {
    it(`books using ${scenario.name}`, () => {
      cy.login()
      appointmentPage.assertLoaded()

      const comment = `${scenario.name} ${Date.now()}`
      appointmentPage.schedule({
        facility: scenario.facility,
        readmission: scenario.readmission,
        program: scenario.program,
        date: scenario.date,
        comment,
      })

      confirmationPage.assertLoaded()
      confirmationPage.assertDetails({
        facility: scenario.facility,
        readmission: scenario.readmission,
        program: scenario.programLabel,
        date: scenario.date,
        comment,
      })
    })
  })
})
