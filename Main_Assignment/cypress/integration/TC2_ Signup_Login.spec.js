/// <reference types = "Cypress" />

import {typeUsername,typePassword,signBtnClick,closeBtnClick,assertElements} from '../pageObjects/logIn'
import {loginBtnClick,checkUserName} from '../pageObjects/homePage'

describe("Login Test", function() {

    beforeEach(function(){
        cy.visit(Cypress.env('baseUrl'))

        cy.fixture("login_data").then(function(data)
        {
            this.data = data
        })
    })

    it("Test-Case-1 : Log-in with incorrect username and incorrect password.", function(){
        loginBtnClick()
        assertElements(this.data)
        typeUsername(this.data.incorrectUsername)
        typePassword(this.data.incorrectPassword)
        signBtnClick()
        cy.wait(Cypress.env('waitTime'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.incorrectUserMessage)
        })
        closeBtnClick()
    })

    it("Test-Case-2 : Log-in with correct username and empty password.", function(){
        loginBtnClick()
        assertElements(this.data)
        typeUsername(Cypress.env('username'))
        signBtnClick()
        cy.wait(Cypress.env('waitTime'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.emptyMessage)
        })
        closeBtnClick()
    })

    it("Test-Case-3 : Log-in with empty username and valid password.", function(){
        loginBtnClick()
        assertElements(this.data)
        typePassword(Cypress.env('username'))
        signBtnClick()
        cy.wait(Cypress.env('waitTime'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.emptyMessage)
        })
        closeBtnClick()
    })

    it("Test-Case-4 : Login-Handles case sensitive  ", function(){
        loginBtnClick()
        assertElements(this.data)
        typeUsername(this.data.caseSensitive)
        typePassword(Cypress.env('password'))
        signBtnClick()
        cy.wait(Cypress.env('waitTime'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.incorrectUserMessage)
        })
        closeBtnClick()
    })

    it("Test-Case-5 : Log-in with valid username and password.", function(){
        loginBtnClick();
        assertElements(this.data);
        typeUsername(Cypress.env('username'))
        typePassword(Cypress.env('password'))
        signBtnClick()
        checkUserName(Cypress.env('username'))
    })
})