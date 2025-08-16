
describe('test cypress automaion', () => {

    it('welcome site', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each((el,index) => {
            if(el.text().includes('Python')){
                expect(el.next()).have.text('25');
                cy.log(el.next().text());
            }
        })

    })
})