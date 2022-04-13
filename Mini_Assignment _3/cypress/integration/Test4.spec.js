/// <reference types = "Cypress" />

describe("Web Tables Test", function() {

    beforeEach(function(){
        cy.fixture("home_data").then(function(data)
        {
            this.data = data
        })
        cy.fixture("table_data").then(function(table)
        {
            this.table = table
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
            cy.wrap($el).should('have.table',this.data.tiles[index])
        })
    })

    it("Visits and Verifies Elements Tile", function(){
        cy.get('.category-cards > :first-of-type').click()
        cy.url().should('equal', this.data.element_url)
        cy.title().should('equal', this.data.element_title)
        cy.get('.main-header').should('have.table', this.data.tiles[0])
    })

    it("Clicks on Check-Box button", function(){    
        cy.get(':first-of-type > .element-list > .menu-list > #item-3').click()
    })

    it("Add a Row to Table and Verify Entered Details", function(){
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type(this.table.firstName).should('have.value',this.table.firstName)
        cy.get('#lastName').type(this.table.lastName).should('have.value',this.table.lastName)
        cy.get('#userEmail').type(this.table.userEmail).should('have.value',this.table.userEmail)
        cy.get('#age').type(this.table.age).should('have.value',this.table.age)
        cy.get('#salary').type(this.table.salary).should('have.value',this.table.salary)
        cy.get('#department').type(this.table.department).should('have.value',this.table.department)
        cy.get('#submit').click()
    })

    it("Verify Added Row to Table", function(){
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(1)').should('have.text', this.table.firstName)
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(2)').should('have.text', this.table.lastName)
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(4)').should('have.text', this.table.userEmail)
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(3)').should('have.text', this.table.age)
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(5)').should('have.text', this.table.salary)
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(6)').should('have.text', this.table.department)
    })

    it("Deletes the Added Table Record", function(){
        cy.get('#delete-record-4').click()
    })

    it("Verify Deleted Table Record", function(){
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(1)').should('not.have.text', this.table.firstName)
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(2)').should('not.have.text', this.table.lastName)
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(4)').should('not.have.text', this.table.userEmail)
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(3)').should('not.have.text', this.table.age)
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(5)').should('not.have.text', this.table.salary)
        cy.get('.rt-tbody > div:nth-child(4) > div > div:nth-child(6)').should('not.have.text', this.table.department)
    })
})