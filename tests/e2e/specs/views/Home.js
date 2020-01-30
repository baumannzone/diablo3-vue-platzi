const EU_BATTLE_TAG = 'SuperRambo#2613'

describe('HomePage', () => {
  it('Visits the app root url', () => {
    cy.visit('/')

    // NavBar
    cy.get('.navigation-bar').contains('D3PF')

    // Breadcrumbs
    cy.get('.header-bar .breadcrumbs-bar').contains('Home')

    cy.get('footer.footer-bar ul.nav').children().should('have.length', 3)
  })

  it('Check the form', () => {
    cy.visit('/')

    // Form
    cy.get('.home-view .search-form form').within(() => {
      // Input Text
      // Placeholder
      cy.get('input:first').should('have.attr', 'placeholder', 'BattleTag')
      // Required
      cy.get('input:first').should('have.attr', 'required')
      // Empty
      cy.get('input:first').should('be.empty')
      // Focused (via custom directive)
      cy.get('input:first').should('have.focus')

      // Input Select (By default "EU" is selected)
      cy.get('#input-region').should('not.be.empty')

      // Button
      cy.get('button[type="submit"]')
        .contains('Submit')
        .should('have.class', 'btn-primary')
    })
  })

  it('Submit the form', () => {
    cy.visit('/')

    // Form
    cy.get('.home-view .search-form form').within(() => {
      // Form is not submitted when required input is emtpy
      cy.get('button[type="submit"]').click()
      cy.url().should('eq', Cypress.config().baseUrl + '#/')

      // "Write" text & submit form "pressing" enter key (instead submit button)
      cy.get('input:first')
        .type(EU_BATTLE_TAG)
        .type('{enter}')

      cy.url().should('include', 'profile/SuperRambo-2613')
    })
  })
})
