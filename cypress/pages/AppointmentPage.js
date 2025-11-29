export class AppointmentPage {
  elements = {
    heading: () => cy.contains('h2', 'Make Appointment'),
    facility: () => cy.get('#combo_facility'),
    readmission: () => cy.get('#chk_hospotal_readmission'),
    programRadio: (program) => {
      const id = {
        medicare: '#radio_program_medicare',
        medicaid: '#radio_program_medicaid',
        none: '#radio_program_none',
      }[program] || '#radio_program_medicaid'

      return cy.get(id)
    },
    visitDate: () => cy.get('#txt_visit_date'),
    comment: () => cy.get('#txt_comment'),
    bookButton: () => cy.get('#btn-book-appointment'),
  }

  assertLoaded() {
    this.elements.heading().should('be.visible')
  }

  selectProgram(program = 'medicaid') {
    this.elements.programRadio(program).check({ force: true })
  }

  schedule({ facility, readmission = false, program = 'medicaid', date, comment }) {
    if (facility) {
      this.elements.facility().select(facility)
    }

    if (readmission) {
      this.elements.readmission().check()
    } else {
      this.elements.readmission().uncheck()
    }

    this.selectProgram(program)
    this.elements.visitDate().clear().type(`${date}{enter}`, { force: true })

    if (comment) {
      this.elements.comment().clear({ force: true }).type(comment, { force: true })
    }

    this.elements.bookButton().click()
  }
}
