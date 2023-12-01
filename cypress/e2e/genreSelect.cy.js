describe('Select genre', function () {
    it('click on genre to show movies based on selected genre', function () {
        cy.visit('http://localhost:3000/')
        cy.get('body > #root > .div-container').click()
        cy.get('#root > .div-container > .sort-and-genre-container > .genre-container > .genre-button:nth-child(3)').click()
        cy.get('#root > .div-container > .sort-and-genre-container > .genre-container > .genre-button:nth-child(4)').click()
        cy.get('#root > .div-container > .sort-and-genre-container > .genre-container > .genre-button:nth-child(1)').click()
    })
})