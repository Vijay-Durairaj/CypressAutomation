import { Homepage } from "../../support/pageObjects/homepage";
import { ProductPage } from "../../support/pageObjects/productpage";
import { CartPage } from "../../support/pageObjects/cartpage";

describe('Login page', () =>{
    const home = null;
    const product = null;
    const cart = null;

    before(function(){
        //runs once before all tests in this block
        cy.fixture('example').then(function(data)
        {
            this.data=data
        }) 
         this.home= new Homepage();
         this.product = new ProductPage();
         this.cart = new CartPage();
    })

    it('Submit Order', function () {
       
        Cypress.config('defaultCommandTimeout',10000);
        cy.visit(Cypress.config('url') + "/loginpagePractise/#")
        cy.userlogin(this.data.username,this.data.password)
        this.product.validateProductPage();
        this.product.selectProduct(this.data.productName);
        this.product.selectFirstProduct();
        this.product.moveToCart();
        this.cart.sumOfProducts();
            cy.contains('button', 'Checkout').click()
            cy.get("#country").type("India")
            cy.get(".suggestions ul li a").click()
            cy.get(".btn-success").click()
            cy.get(".alert-success").should('contain','Success')

    });
})