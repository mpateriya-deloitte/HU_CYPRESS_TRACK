/// <reference types = "Cypress" />

describe("Radio Button Test Run", function() {

    beforeEach(function(){
        cy.fixture("home_data").then(function(data)
        {
            this.data = data
        })
    })

    afterEach(function(){
        cy.clearCookies()
    })

    it("Validates Data of Website", function(){
        cy.homepage(this.data)
    })

    it("Validates the tiles Present on Homepage", function(){
        cy.validate_tiles(this.data)
    })

    it("Visits and Verifies Elements Tile", function(){
        cy.visit_elements(this.data)
    })

    it("Clicks on Links button", function(){    
        cy.get(':first-of-type > .element-list > .menu-list > #item-5').click()
    })

    it("Validates Number of Links Present", function(){
        cy.get('#linkWrapper').find('a').should('have.length', 9)
    })

    it("Validates Links are Visible and Clickable or not", function(){
        cy.get('#linkWrapper').find('a').should('be.visible')
    })
})