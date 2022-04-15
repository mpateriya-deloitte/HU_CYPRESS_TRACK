const selectors = {
    name:  "#name",
    country:"#country",
    city: "#city",
    card: "#card",
    month: "#month",
    year: "#year",
    purchase: ".btn.btn-primary[onclick*='purchaseOrder()']",
    total: "#totalm",
    thanksMessage: ".sweet-alert > h2",
    okButton : ".confirm.btn.btn-lg.btn-primary"
}

function enterDetails(data){
    cy.typein(selectors.name, data.name)
    cy.typein(selectors.country, data.country)
    cy.typein(selectors.city, data.city)
    cy.typein(selectors.card, data.card)
    cy.typein(selectors.month, data.month)
    cy.typein(selectors.year, data.year)
}

function enterDetailswithoutCredit(data){
    cy.typein(selectors.name, data.name)
    cy.typein(selectors.country, data.country)
    cy.typein(selectors.city, data.city)
    cy.typein(selectors.month, data.month)
    cy.typein(selectors.year, data.year)
}

function enterDetailswithCredit(data){
    cy.typein(selectors.card, data.card)
}
    

function clickPurchase(){
    cy.btnClick(selectors.purchase)
}

function validateThanks(data){
    cy.haveText(selectors.thanksMessage, data)
}

function clickOk(){
    cy.btnClick(selectors.okButton)
}

module.exports ={
    enterDetails,
    clickPurchase,
    validateThanks,
    clickOk,
    enterDetailswithCredit,
    enterDetailswithoutCredit
};