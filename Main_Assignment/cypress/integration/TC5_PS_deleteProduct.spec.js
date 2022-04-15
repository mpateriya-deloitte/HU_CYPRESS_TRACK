/// <reference types = "Cypress" />

import {typeUsername,typePassword,signBtnClick,assertElements} from '../pageObjects/logIn'
import {loginBtnClick,checkUserName,laptopClick,cartOpen, monitorClick, phoneClick} from '../pageObjects/homePage'
import {buyProduct,addtoCart,home} from '../pageObjects/productPage'
import {clickPlaceOrder,checkProduct,validatePrice,deleteProduct} from '../pageObjects/cartPage'
import {clickPurchase,clickOk,validateThanks,enterDetailswithCredit,enterDetailswithoutCredit} from '../pageObjects/purchasePage'

describe("Login Test", function() {

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

    it("Login and Validate User", function(){
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
        
        monitorClick()
        buyProduct(this.data.first_monitor)
        cy.wait(Cypress.env('waitTime'))
        addtoCart()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.success_message)
        })
        home()

        phoneClick()
        buyProduct(this.data.first_phone)
        cy.wait(Cypress.env('waitTime'))
        addtoCart()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.success_message)
        })
        home()

        cartOpen()
        cy.wait(Cypress.env('waitTime'))
        cy.wait(Cypress.env('waitTime'))
        checkProduct(this.data.first_laptop)
        checkProduct(this.data.first_monitor)
        checkProduct(this.data.first_phone)
        validatePrice()

        deleteProduct(this.data.first_monitor)

        cy.wait(Cypress.env('waitTime'))
        cy.wait(Cypress.env('waitTime'))
        checkProduct(this.data.first_laptop)
        checkProduct(this.data.first_phone)
        validatePrice()
        clickPlaceOrder()
        enterDetailswithoutCredit(this.userdata)
        clickPurchase()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.userdata.credit_card)
        })
        enterDetailswithCredit(this.userdata)
        clickPurchase()
        validateThanks(this.userdata.thanksMsg)
        cy.wait(Cypress.env('waitTime'))
        clickOk()
    }) 
})