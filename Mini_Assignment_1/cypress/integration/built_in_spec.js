/// <reference types = "Cypress" />
describe("Assertion Test Using Built in Assertions", ()=> {
    
    it("Visits Flipkart", ()=>{
        cy.visit("http://www.flipkart.com")
    })
    
    it("Validates  URL", ()=>{
        cy.url().should('equal',"https://www.flipkart.com/")
    })

    it("Validate Product names on launched URL", ()=>{
        const lst = ['Top Offers', 'Grocery', 'Mobiles', 'Fashion', 'Electronics', 'Home', 'Appliances', 'Travel', 'Beauty, Toys & More']
        cy.get('.eFQ30H').each(($el, index) => {
            cy.wrap($el).find('img').should('be.visible')
            cy.wrap($el).should('have.text', lst[index])
            
        })
    })
    
    it("Click on Login Button",()=>{
        cy.get('._1_3w1N').should('have.text', 'Login').click()
    })
    
    it("Verifies Login Text and Sub-Text", ()=>{
        cy.get('._36KMOx').should('have.text','Login').should('be.visible')
        cy.get('._1-pxlW').should('have.text','Get access to your Orders, Wishlist and Recommendations').should('be.visible')
    })
    
    it("Validate Product names on launched URL", ()=>{
        
    })
})