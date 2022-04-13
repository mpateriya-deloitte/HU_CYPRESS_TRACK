/// <reference types = "Cypress" />

describe("Radio Button Test", function() {

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
        cy.homepage(this.data)
    })

    it("Validates the tiles Present on Homepage", function(){
        cy.validate_tiles(this.data)
    })

    it("Visits and Verifies Elements Tile", function(){
        cy.visit_elements(this.data)
    })


    it("Clicks on Radio Button button", function(){    
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