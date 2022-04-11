/// <reference types = "Cypress" />

describe("Assertion Test Using Chai Assertions", ()=> {
    
    it("Visits Flipkart", ()=>{
        cy.visit("http://www.flipkart.com")
    })
    
    it("Validates  URL", ()=>{
        cy.url().then(url => expect(url).to.be.equal('https://www.flipkart.com/'))
    })

    it("Validates  Flipkart Plus Image is Visible or not", ()=>{
        cy.get("div._3qX0zy>a._21ljIi>img").then(x=>expect(x).to.be.visible)
    })
    
    it("Validates Flipkart Plus Icon redirects to Flipkart Plus Page on Clicking", ()=>{
        cy.get("div._3qX0zy>a._21ljIi").click()
        cy.url().then(url => expect(url).to.be.equal('https://www.flipkart.com/plus'))
    })


    it("Validates  Flipkart Icon is Visible or not", ()=>{
        cy.get("div._3qX0zy>a>img[alt*='Flipkart']").then(x=>expect(x).to.be.visible)
    })
    
    it("Validates  Flipkart Icon redirects to Homepage on Clicking", ()=>{
        cy.get("div._3qX0zy>a>img[alt*='Flipkart']").click()
        cy.url().then(url => expect(url).to.be.equal('https://www.flipkart.com/'))
    })

    it("Validates More Button is Visible or not", ()=>{
        cy.get(".exehdJ").then(x=>expect(x).to.be.visible)
    })

    it("Validates More Button Text is Equal or not", ()=>{
        cy.get(".exehdJ").then(x=>expect(x.text()).to.be.equal(' More '))
    })

    it("Validate Product names on launched URL", ()=>{
        const lst = ['Top Offers', 'Grocery', 'Mobiles', 'Fashion', 'Electronics', 'Home', 'Appliances', 'Travel', 'Beauty, Toys & More']
        cy.get('.eFQ30H').each(($el, index) => {
            cy.wrap($el).find('img').then(img => expect(img).to.be.visible)
            cy.wrap($el).then(e => expect(e.text()).to.be.equal(lst[index]))
        })
    })
    
    it("Click on Login Button",()=>{
        cy.get('._1_3w1N').then(x => {
            expect(x.text()).to.be.equal('Login');
            cy.wrap(x).click()
        })
    })
    
    it("Verify Login Text and Sub-Text", ()=>{
        cy.get('._36KMOx').then(x => {
            expect(x.text()).to.be.equal('Login');
            expect(x).to.be.visible
        })
        cy.get('._1-pxlW').then(x => {
            expect(x.text()).to.be.equal('Get access to your Orders, Wishlist and Recommendations');
            expect(x).to.be.visible
        })
    })
    
    it("Click Login Button and Verify Error", ()=>{
        cy.get('._1D1L_j').then(x => {
            expect(x.text()).to.be.equal('Login');
            cy.wrap(x).click()
        })
        cy.get('._2YULOR').then(x => {
            expect(x.text()).to.be.equal('Please enter valid Email ID/Mobile number');
            expect(x).to.be.visible
        })
    })
})