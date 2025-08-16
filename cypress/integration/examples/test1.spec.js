
describe('test cypress automaion', () => {

    it('welcome site', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get("input[type='search']").type("ca");
        cy.get('.products').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        cy.get('.products').find('.product').each((el,index) => {
            if(el.find('h4.product-name').text().includes('Cashews')){
                cy.wrap(el).find('.product-action').find('button').click();
            }
        })

    })
})