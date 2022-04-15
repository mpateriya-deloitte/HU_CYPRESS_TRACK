const selectors = {
    signinButton : "#signin2",
    loginButton : "#login2",
    cartButton : "#cartur",
    nameofUser : "#nameofuser",
    phoneCategory: ".list-group-item:nth-of-type(2)",
    laptopCategory: ".list-group-item:nth-of-type(3)",
    monitorCategory: ".list-group-item:nth-of-type(4)"
}

function signinBtnClick(){
    cy.btnClick(selectors.signinButton)
}

function loginBtnClick(){
    cy.btnClick(selectors.loginButton)
}

function checkUserName(data){
    cy.get(selectors.nameofUser).should('contain.text', data)
}

function laptopClick(){
    cy.btnClick(selectors.laptopCategory)
    cy.wait(Cypress.env('waitTime'))
}

function phoneClick(){
    cy.btnClick(selectors.phoneCategory)
    cy.wait(Cypress.env('waitTime'))
}

function monitorClick(){
    cy.btnClick(selectors.monitorCategory)
    cy.wait(Cypress.env('waitTime'))
}

function cartOpen(){
    cy.btnClick(selectors.cartButton)
}

module.exports ={
    signinBtnClick,
    checkUserName,
    loginBtnClick,
    laptopClick,
    phoneClick,
    monitorClick,
    cartOpen
};
