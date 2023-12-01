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
  it('searches movie click on close', function () {
    cy.visit('http://localhost:3000/')
    cy.get('body > #root > .div-container > .form-container > .header-element').click()
    cy.get('body > #root > .div-container > .form-container > .form-input').click()
    cy.get('body > #root > .div-container > .form-container > .form-input').type('iron')
    cy.get('body > #root > .div-container > .form-container > .form-button').click()
    cy.get('.movielist > .moviecard:nth-child(2) > .image-container > div > .filcard-image').click()
    cy.get('.image-container > div > .modal > .modal-content > .close').click()
    cy.get('.modal').should('not.exist');
  });
  it('searches movie press esc to close', function () {
    cy.viewport(1280, 603)
    cy.visit('http://localhost:3000/')
    cy.get('body > #root > .div-container > .form-container > .header-element').click()
    cy.get('body > #root > .div-container > .form-container > .form-input').click()
    cy.get('body > #root > .div-container > .form-container > .form-input').type('iron ')
    cy.get('body > #root > .div-container > .form-container > .form-button').click()
    cy.get('.movielist > .moviecard:nth-child(2) > .image-container > div > .filcard-image').click()
    cy.get('body').type('{esc}');
    cy.get('.modal').should('not.exist');
  });
  });