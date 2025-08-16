export class CartPage {

    sumOfProducts() {
        let sum = 0
        cy.get('tr td:nth-child(4) strong')
            .each($e1 => {
                //₹. 65000
                const amount = Number($e1.text().split(" ")[1].trim())
                sum = sum + amount //65000 + 1000000
            }).then(() => {
                expect(sum).to.be.lessThan(200000);
            })
    }
}