const selectors = {
    productSelector : ".card-title",
    addCart : ".btn.btn-success.btn-lg",
    gotoHome: ".nav-item.active > a"
}

function buyProduct(data){
    cy.get(selectors.productSelector).contains(data).click()
}

function addtoCart(){
    cy.btnClick(selectors.addCart)
}

function home(){
    cy.btnClick(selectors.gotoHome)
}


module.exports ={
    buyProduct,
    addtoCart,
    home,
};