// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('homepage', function(data){
    cy.visit(data.uri)        
    cy.url().should('equal', data.uri)
    cy.title().should('equal', data.title)
})

Cypress.Commands.add('validate_tiles', function(data){
    cy.get('.card, .mt-4, .top-card').each(function($el, index)
    {
        cy.wrap($el).should('be.visible')
        cy.wrap($el).should('have.text',data.tiles[index])
    })
})

Cypress.Commands.add('visit_elements', function(data){
    cy.get('.category-cards > :first-of-type').click()
    cy.url().should('equal', data.element_url)
    cy.title().should('equal', data.element_title)
    cy.get('.main-header').should('have.text', data.tiles[0])
})
