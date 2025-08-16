export class ProductPage {

    validateProductPage(){
        cy.contains("Shop Name").should('be.visible')
        cy.get('app-card').should('have.length', 4)
    }

    selectProduct(productName){
        cy.get('app-card').filter(`:contains("${productName}")`)
        .then($element => {
            cy.wrap($element).should('have.length', 1)
            cy.wrap($element).contains('button', 'Add').click()

        })
    }

    selectFirstProduct(){
        cy.get('app-card').eq(0).contains('button', 'Add').click()
    }

    moveToCart(){
        cy.contains('a', 'Checkout').click()
    }
}