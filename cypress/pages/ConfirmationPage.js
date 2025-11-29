export class ConfirmationPage {
  elements = {
    heading: () => cy.contains('h2', 'Appointment Confirmation'),
    facility: () => cy.get('#facility'),
    readmission: () => cy.get('#hospital_readmission'),
    program: () => cy.get('#program'),
    visitDate: () => cy.get('#visit_date'),
    comment: () => cy.get('#comment'),
    goHome: () => cy.contains('a', 'Go to Homepage'),
  }

  assertLoaded() {
    this.elements.heading().should('be.visible')
  }

  assertDetails({ facility, readmission, program, date, comment }) {
    if (facility) {
      this.elements.facility().should('have.text', facility)
    }

    if (typeof readmission !== 'undefined') {
      this.elements.readmission().should('have.text', readmission ? 'Yes' : 'No')
    }

    if (program) {
      this.elements.program().invoke('text').should((text) => {
        expect(text.trim().toLowerCase()).to.eq(program.trim().toLowerCase())
      })
    }

    if (date) {
      this.elements.visitDate().should('have.text', date)
    }

    if (comment) {
      this.elements.comment().should('have.text', comment)
    }
  }
}
