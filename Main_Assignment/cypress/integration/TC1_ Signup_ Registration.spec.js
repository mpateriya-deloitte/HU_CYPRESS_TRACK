/// <reference types = "Cypress" />

import {typeUsername,typePassword,signBtnClick,closeBtnClick,assertElements} from '../pageObjects/signUp'
import {signinBtnClick} from '../pageObjects/homePage'

describe("Registration Test", function() {

    beforeEach(function(){
        cy.visit(Cypress.env('baseUrl'))

        cy.fixture("signup_data").then(function(data)
        {
            this.data = data
        })
    })

    it("Test 1 : Validate the signup by giving existing username & password", function(){
        signinBtnClick()
        assertElements(this.data)
        typeUsername(this.data.existingUsername)
        typePassword(this.data.existingPassword)
        signBtnClick()
        cy.wait(Cypress.env('waitTime'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.alreadyExistMessage)
        })
        closeBtnClick()
    })

    it("Test 2 : Registration with empty Email-id", function(){
        signinBtnClick()
        assertElements(this.data)
        typePassword(this.data.existingPassword)
        signBtnClick()
        cy.wait(Cypress.env('waitTime'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.emptyMessage)
        })
        closeBtnClick()
    })

    it("Test 3 : Registration with empty password", function(){
        signinBtnClick()
        assertElements(this.data)
        typeUsername(this.data.existingUsername)
        signBtnClick()
        cy.wait(Cypress.env('waitTime'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.emptyMessage)
        })
        closeBtnClick()
    })

    it("Test 4 : Registration with empty Email-id & password", function(){
        signinBtnClick()
        assertElements(this.data)
        signBtnClick()
        cy.wait(Cypress.env('waitTime'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.emptyMessage)
        })
        closeBtnClick()
    })

    it("Test 5 : Registration-Sign-in", function(){
        signinBtnClick();
        assertElements(this.data);
        typeUsername(Cypress.env('username'))
        typePassword(Cypress.env('password'))
        signBtnClick()
        cy.wait(Cypress.env('waitTime'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.successMessage)
        })
        closeBtnClick()
    })
})