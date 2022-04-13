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
        cy.get(':first-of-type > .element-list > .menu-list > #item-2').click()
    })

    it("Validates All the Fields are present", function(){
        cy.get('.custom-control.custom-radio.custom-control-inline').each(function($el, index){
            cy.wrap($el).should('have.text', this.radio.elems[index])
            cy.wrap($el).should('not.be.checked').should('be.visible')
        })
    })

    it("Checks a Field and Validates the Selected field", function(){
        cy.get('.custom-control.custom-radio.custom-control-inline').each(function($el, index){
            if($el.text() == this.radio.check){
                cy.wrap($el).find('input').check({force: true})
                cy.wrap($el).find('input').should('be.checked')
            }
        })
        cy.get('.custom-control.custom-radio.custom-control-inline').contains(this.radio.check).siblings('input').should('be.checked')
        cy.get('.mt-3 > span').should('have.text', this.radio.check)
    })
})