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

    it("Validates  Flipkart Plus Image is Visible or not", ()=>{
        cy.get("div._3qX0zy>a._21ljIi>img").should('be.visible')
    })
    
    it("Validates Flipkart Plus Icon redirects to Flipkart Plus Page on Clicking", ()=>{
        cy.get("div._3qX0zy>a._21ljIi").click()
        cy.url().should('equal',"https://www.flipkart.com/plus")
    })


    it("Validates  Flipkart Icon is Visible or not", ()=>{
        cy.get("div._3qX0zy>a>img[alt*='Flipkart']").should('be.visible')
    })
    
    it("Validates  Flipkart Icon redirects to Homepage on Clicking", ()=>{
        cy.get("div._3qX0zy>a>img[alt*='Flipkart']").click()
        cy.url().should('equal',"https://www.flipkart.com/")
    })


    it("Click on Login Button",()=>{
        cy.get('._1_3w1N').should('have.text', 'Login').click()
    })
    
    it("Verify Login Text and Sub-Text", ()=>{
        cy.get('._36KMOx').should('have.text','Login').should('be.visible')
        cy.get('._1-pxlW').should('have.text','Get access to your Orders, Wishlist and Recommendations').should('be.visible')
    })
    
    it("Click Login Button and Verify Error", ()=>{
        cy.get('._1D1L_j').click()
        cy.get('._2YULOR').should('have.text', 'Please enter valid Email ID/Mobile number')
    })
})