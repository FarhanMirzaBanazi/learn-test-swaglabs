describe('login swaglabs', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[id="login-button"]').click()

    cy.url().should('include', '/inventory.html')
  })
})