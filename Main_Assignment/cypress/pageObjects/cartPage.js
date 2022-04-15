const selectors = {
    placeOrder: ".btn.btn-success",
    productTitle: "#tbodyid>tr>td:nth-of-type(2)",
    productPrice: "#tbodyid>tr>td:nth-of-type(3)",
    totalPrice: "#totalp"
}

function clickPlaceOrder(){
    cy.btnClick(selectors.placeOrder)
}

function checkProduct(data){
    cy.get(selectors.productTitle).should('contain.text',data)
}

function validatePrice(){
    cy.wait(Cypress.env('waitTime'))
    let totalprice = 0
    cy.get(selectors.productPrice).each(function($ele,index){
        let price = parseInt($ele.text())
        totalprice += price
    }).then(function(){
        cy.get(selectors.totalPrice).invoke('text').then(parseInt).should('equal',totalprice)
    })
}

function deleteProduct(data){
    cy.get(selectors.productTitle).contains(data).siblings('td').children('a').click()
}

module.exports ={
    clickPlaceOrder,
    checkProduct,
    validatePrice,
    deleteProduct
};