const selectors = {
    signinButton : "#signin2",
    loginButton : "#login2",
    cartButton : "#cartur",
    nameofUser : "#nameofuser"
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

module.exports ={
    signinBtnClick,
    checkUserName,
    loginBtnClick
};
