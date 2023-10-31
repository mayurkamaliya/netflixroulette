describe('SearchForm component', () => {
    it('submits the search query when the "Search" button is clicked', () => {
      cy.visit('http://localhost:3000');
      cy.get('.form-input').clear();
      cy.get('.form-input').type('Cypress Test');
      cy.get('.form-button').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Searching for: Cypress Test');
      });
    })
  
    it('submits the search query when the Enter key is pressed', () => {
      cy.visit('http://localhost:3000');
      cy.get('.form-input').clear();
      cy.get('.form-input').type('Cypress Test{enter}');
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Searching for: Cypress Test');
      });
    });
  });