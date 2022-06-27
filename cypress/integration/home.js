describe('home page', () => {
    it('app deve estar online', () => {
        cy.viewport(1440, 900)
        cy.visit('/')
        cy.get('div [class="login-description-page"]').should('have.text',
            'Acesso a plataforma')
    })
})