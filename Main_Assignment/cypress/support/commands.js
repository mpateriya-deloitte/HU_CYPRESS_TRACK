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
Cypress.Commands.add('typein', (selector, data)=> { 
    cy.wait(Cypress.env('waitTime'))
    cy.get(selector).type(data)
})

Cypress.Commands.add('btnClick', (selector)=> { 
    cy.get(selector).click();
})

Cypress.Commands.add('checkValue', (selector, data)=> { 
    cy.get(selector).should('have.value', data)
})

Cypress.Commands.add('isVisible', (selector)=> { 
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('haveText', (selector, data)=> { 
    cy.get(selector).should('have.text', data)
})
//
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
