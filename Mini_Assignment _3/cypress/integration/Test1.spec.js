/// <reference types = "Cypress" />

describe("Text Box Test", function() {

    beforeEach(function(){
        cy.fixture("home_data").then(function(data)
        {
            this.data = data
        })
        cy.fixture("text_data").then(function(text)
        {
            this.text = text
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

    it("Clicks on Text-Box button", function(){    
        cy.get(':first-of-type > .element-list > .menu-list > #item-0').click()
    })

    it("Validates Text Box Headings", function(){
        cy.get('.col-md-3.col-sm-12 > label').each(function($el, index){
            cy.wrap($el).should('be.visible')
            cy.wrap($el).should('have.text', this.text.fields[index])
        })
    })

    it("Enters and Validates Data into Text Box", function(){
        cy.get('#userName').type(this.text.fullName).should('have.value',this.text.fullName)
        cy.get('#userEmail').type(this.text.email).should('have.value',this.text.email)
        cy.get('#currentAddress').type(this.text.currentAdd).should('have.value',this.text.currentAdd)
        cy.get('#permanentAddress').type(this.text.permanentAdd).should('have.value',this.text.permanentAdd)
        cy.get('#submit').click()
    })

    it("Validates Submitted Data", function(){
        cy.get('#name').should('contain.text', this.text.fullName)
        cy.get('#email').should('contain.text', this.text.email)
        cy.get('.border > #currentAddress').should('contain.text', this.text.currentAdd)
        cy.get('.border > #permanentAddress').should('contain.text', this.text.permanentAdd)
    })
})