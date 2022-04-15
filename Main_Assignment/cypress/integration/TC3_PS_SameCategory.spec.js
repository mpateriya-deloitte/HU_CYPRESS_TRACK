/// <reference types = "Cypress" />

import {typeUsername,typePassword,signBtnClick,assertElements} from '../pageObjects/logIn'
import {loginBtnClick,checkUserName,laptopClick,cartOpen} from '../pageObjects/homePage'
import {buyProduct,addtoCart,home} from '../pageObjects/productPage'
import {clickPlaceOrder,checkProduct,validatePrice} from '../pageObjects/cartPage'
import {enterDetails, clickPurchase,clickOk,validateThanks} from '../pageObjects/purchasePage'

describe("Test 3", function() {

    beforeEach(function(){
        cy.fixture("laptop_buy").then(function(data)
        {
            this.data = data
        })

        cy.fixture("login_data").then(function(logdata)
        {
            this.logdata = logdata
        })

        cy.fixture("user_data").then(function(userdata)
        {
            this.userdata = userdata
        })
    })

    it("Login and Validation", function(){
        cy.visit(Cypress.env('baseUrl'))
        loginBtnClick();
        assertElements(this.logdata);
        typeUsername(Cypress.env('username'))
        typePassword(Cypress.env('password'))
        signBtnClick()
        cy.wait(Cypress.env('waitTime'))
        checkUserName(Cypress.env('username'))

        laptopClick()
        buyProduct(this.data.first_laptop)
        cy.wait(Cypress.env('waitTime'))
        addtoCart()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.success_message)
        })
        home()
        
        cy.wait(Cypress.env('waitTime'))
        
        laptopClick()
        buyProduct(this.data.second_laptop)
        cy.wait(Cypress.env('waitTime'))
        addtoCart()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.success_message)
        })
        home()

        cartOpen()
        cy.wait(Cypress.env('waitTime'))
        checkProduct(this.data.first_laptop)
        checkProduct(this.data.second_laptop)
        validatePrice()
        clickPlaceOrder()
        enterDetails(this.userdata)
        clickPurchase()
        validateThanks(this.userdata.thanksMsg)
        cy.wait(Cypress.env('waitTime'))
        clickOk()
    }) 
})