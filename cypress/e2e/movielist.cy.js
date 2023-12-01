describe('Movielist component', function () {
	it('opens a moviedetails page', function () {
		cy.viewport(1280, 593)
		cy.visit('http://localhost:3000/')
		cy.get('.movielist > .moviecard:nth-child(3) > .image-container > div > .filcard-image').click()
		cy.get('.image-container > div > .modal > .modal-content > .close').click()
		cy.get('.modal').should('not.exist');
	});
})