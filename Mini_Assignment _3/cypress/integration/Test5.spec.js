/// <reference types = "Cypress" />

describe("Radio Button Test Run", function() {

    beforeEach(function(){
        cy.fixture("home_data").then(function(data)
        {
            this.data = data
        })
        cy.fixture("radio_data").then(function(radio)
        {
            this.radio = radio
        })
    })

    afterEach(function(){
        cy.clearCookies()
    })

    it("Validates Data of Website", function(){
        
        cy.visit(this.data.uri)        
        cy.url().should('equal', this.data.uri)
        cy.title().should('equal', this.data.title)
    })

    it("Validates the tiles Present on Homepage", function(){
        cy.get('.card, .mt-4, .top-card').each(function($el, index)
        {
            cy.wrap($el).should('be.visible')
            cy.wrap($el).should('have.text',this.data.tiles[index])
        })
    })

    it("Visits and Verifies Elements Tile", function(){
        cy.get('.category-cards > :first-of-type').click()
        cy.url().should('equal', this.data.element_url)
        cy.title().should('equal', this.data.element_title)
        cy.get('.main-header').should('have.text', this.data.tiles[0])
    })

    it("Clicks on Check-Box button", function(){    
        cy.get(':first-of-type > .element-list > .menu-list > #item-5').click()
    })

    it("Validates Number of Links Present", function(){
        cy.get('#linkWrapper').find('a').should('have.length', 9)
    })

    it("Validates Links are Visible and Clickable or not", function(){
        cy.get('#linkWrapper').find('a').should('be.visible')
    })
})