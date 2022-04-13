/// <reference types = "Cypress" />

describe("Check Box Test Run", function() {

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

    it("Clicks on Check-Box button", function(){    
        cy.get(':first-of-type > .element-list > .menu-list > #item-1').click()
    })

    it("Expand Home Button",function(){
        cy.get('#tree-node > ol > li > span > button').click()
    })

    it("Check Documents Button", function(){
        cy.get('#tree-node-documents').check({force: true})
    })

    it("Validates Document is Selected", function(){
        cy.get('#tree-node-documents').siblings('span').should('have.text', "Documents")
        cy.get('#tree-node-documents').should('be.checked')
    })
})