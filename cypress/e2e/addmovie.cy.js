describe('Add movie', function () {
    it('add movie and check in list', function () {
        cy.visit('http://localhost:3000/?genre=All&sortBy=release_date&offset=0')
        cy.get('body > #root > .div-container').click()
        cy.get('body > #root > .div-container > .movie-container > .add-movie-button').click()
        cy.get('.dialog > .dialog-body > .movie-form > label:nth-child(1) > input').click()
        cy.get('.dialog > .dialog-body > .movie-form > label:nth-child(1) > input').type('asdas ')
        cy.get('.dialog > .dialog-body > .movie-form > label:nth-child(2) > input').type('https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg')
        cy.get('.dialog > .dialog-body > .movie-form > label:nth-child(3) > input').type('Action')
        cy.get('.dialog > .dialog-body > .movie-form > label:nth-child(4) > input').type('4.5')
        cy.get('.dialog > .dialog-body > .movie-form > label:nth-child(5) > input').type('123')
        cy.get('.dialog > .dialog-body > .movie-form > label:nth-child(6) > input').click()
        cy.get('.dialog > .dialog-body > .movie-form > label:nth-child(6) > input').type('2016-12-29')
        cy.get('.dialog > .dialog-body > .movie-form > label:nth-child(7) > input').click()
        cy.get('.dialog > .dialog-body > .movie-form > label:nth-child(7) > input').type('Fastx')
        cy.get('.dialog > .dialog-body > .movie-form > label > .wider-input').type('fast x saga')
        cy.get('.dialog-overlay > .dialog > .dialog-body > .movie-form > .form-button:nth-child(10)').click()
        cy.get('body > #root > .div-container > .form-container > .form-input').click()
        cy.get('body > #root > .div-container > .form-container > .form-input').type('asdas')
        cy.get('body > #root > .div-container > .form-container > .form-button').click()
        cy.get('.movielist > .moviecard > .image-container > div > .filcard-image').first().click()
        cy.get('.image-container > div > .modal > .modal-content > .close').click()
    })
})