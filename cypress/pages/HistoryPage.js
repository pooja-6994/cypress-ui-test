export class HistoryPage {
  elements = {
    heading: () => cy.contains('h2', 'History'),
    container: () => cy.get('#history, section#history'),
    entries: () => cy.get('#history .panel, section#history .panel'),
    entryByComment: (comment) =>
      cy.contains('#history .panel, section#history .panel', comment),
    emptyState: () =>
      cy.contains('#history, section#history', 'No appointment.', {
        matchCase: false,
      }),
  }

  assertLoaded() {
    this.elements.heading().should('be.visible')
    this.elements
      .container()
      .should('exist')
      .then(($section) => {
        const hasEntries = $section.find('.panel').length > 0
        if (hasEntries) {
          this.elements.entries().should('exist')
        } else {
          this.elements.emptyState().should('be.visible')
        }
      })
  }

  assertEntry(details) {
    this.elements.entryByComment(details.comment).should(($panel) => {
      const text = $panel.text()
      expect(text).to.include(details.facility)
      expect(text).to.include(details.programLabel)
      expect(text).to.include(details.readmission ? 'Yes' : 'No')
      expect(text).to.include(details.date)
      expect(text).to.include(details.comment)
    })
  }
}
