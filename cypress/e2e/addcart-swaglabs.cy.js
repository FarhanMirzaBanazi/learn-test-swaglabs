describe ('add to cart-pass',()=> {
    //     beforeEach(() => {
    //     cy.login('standard_user', 'secret_sauce')
    //     cy.url().should('include', '/inventory.html')
    //     cy.get('inventory_item').should('have.length', 0)
    // })
    // it('test untuk add to cart', () => {
    //     //add to cart
    //     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    //     cy.get('.shopping_cart_badge').should('have.text', '1')
    //     cy.get('.shopping_cart_link').click()
    //     cy.url().should('include', '/cart.html')
    //     cy.get('.cart_item').should('have.length', 1)
    // })

    it('Add Sauce Labs Bike Light to Cart', () => {
    cy.visit('https://saucedemo.com/v1/inventory.html')

    // klik tombol Add to Cart khusus untuk Sauce Labs Bike Light
    cy.contains('.inventory_item', 'Sauce Labs Bike Light')
    .find('button')
    .click()

    // verifikasi button berubah jadi REMOVE
    // cy.contains('.inventory_item', 'Sauce Labs Bike Light')
    // .find('button')
    // .should('have.text', 'REMOVE')
    })
})