import SignupPage from '../pages/SignupPage'
var signup = new SignupPage
//PARA RODAR O CYPRESS BASTA ENTRAR NA PASTA PELO CMD E DIGITAR O COMANDO
//npx cypress open

describe('login and test', function () {
    beforeEach(function () {
        cy.fixture('mass').then((massa_de_dados) => {
            this.mass = massa_de_dados
        })
    })
    it('Login com sucesso', function () {
        signup.go(this.mass.registration)
        cy.wait(5000)
        cy.get('h2[class="header-bar-title-page"]').should('have.text',
            'Seja bem vindo à  contábilhub')
    })
    it('E-mail e senha inválidos', function () {
        signup.go(this.mass.emailAndPassordInvalid)
        cy.wait(1000)
        cy.get('.MuiAlert-message').should('have.text',
            'Login ou senha inválido')
    })
    it('E-mail válido, mas senha inválida', function () {
        signup.go(this.mass.emailValidPasswordInvalid)
        cy.wait(1000)
        cy.get('.MuiAlert-message').should('have.text',
            'Login ou senha inválido')
    })
    it('Verificação do button "recuperar senha"', function () {
        signup.passwordrecovery()
    })
    it('Verificação do filtro NFS-e', function () {
        signup.go(this.mass.registration)
        signup.filter()
        signup.assertions()
    })
    it('Verificação da exportação do arquivo XLS', function(){
        signup.go(this.mass.registration)
        signup.filter()
        cy.get('.moreoptionsdisplay-wrapper > .icon-wrapper').click()
        cy.get('li[data-action="exportar-xls"]').click()
        cy.wait(1000)
    })
})
