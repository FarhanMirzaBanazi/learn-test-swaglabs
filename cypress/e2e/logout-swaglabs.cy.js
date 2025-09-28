describe('logout swaglabs', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
        cy.get('inventory_item').should('have.length', 0)
    })
    
    it ('test untuk logutnya', () => {
    //logout
    cy.get('.bm-burger-button').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('include', '/index.html')
    cy.get('#login-button').should('be.visible')
    });
})