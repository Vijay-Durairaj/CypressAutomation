export class Homepage {
    
    login(username,password) {
        cy.get("#username").type(username)
        cy.get("#password").type(password)
        cy.contains("Sign In").click()
    }
}