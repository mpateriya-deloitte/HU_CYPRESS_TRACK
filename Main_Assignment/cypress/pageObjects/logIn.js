const selectors = {
    signinUsername : "#loginusername",
    signinPassword : "#loginpassword",
    loginButton : ".btn.btn-primary[onclick='logIn()']",
    closeButton : "#logInModal button.btn.btn-secondary",
    signinTitle : "#logInModalLabel"
}

function typeUsername(userName){
    cy.typein(selectors.signinUsername, userName)
    cy.checkValue(selectors.signinUsername, userName)
}

function typePassword(password){
    cy.typein(selectors.signinPassword, password)
    cy.checkValue(selectors.signinPassword, password)
}

function signBtnClick(){
    cy.btnClick(selectors.loginButton)
}

function closeBtnClick(){
    cy.btnClick(selectors.closeButton)
}

function assertElements(data){
    
    cy.log("Checking Title is Visible or not")
    cy.isVisible(selectors.signinTitle)
    
    cy.log("Checking Title is Value is right or not")
    cy.haveText(selectors.signinTitle, data.title)
    
    cy.log("Checking Username input Field is Visible or not")
    cy.isVisible(selectors.signinUsername)
    
    cy.log("Checking Password input Field is Visible or not")
    cy.isVisible(selectors.signinPassword)
    
    cy.log("Checking SignUp Button is Visible or not")
    cy.isVisible(selectors.loginButton)
    
    cy.log("Checking Close is Visible or not")
    cy.isVisible(selectors.closeButton)
}

module.exports ={
    typeUsername,
    typePassword,
    signBtnClick,
    closeBtnClick,
    assertElements
};
