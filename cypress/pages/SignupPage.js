class SignupPage {

    go(mass) {
        cy.visit('/')
        cy.get('input[placeholder="seu e-mail"]').type(mass.user)
        cy.get('#password').type(mass.password)
        cy.get('button[class="login-button"]').click()
    }
    passwordrecovery(){
        cy.get('p[class="forgot-password"]').click()
        cy.get('p[class="login-description-page"]').should('have.text',
         'Esqueci minha senha')
    }
    filter() {
        cy.wait(6000)
        cy.get(':nth-child(3) > .navbar-item-folder-vertical').click()
        cy.get('.navbar-show-folder > :nth-child(1) > .navbar-link-container > .navbar-item').click()
        cy.get('h2[class="header-bar-title-page"]').should('have.text', 'Notas Fiscais Emitidas - NFS-e')
        cy.get(':nth-child(2) > .calendar-container > .react-datepicker-wrapper > .react-datepicker__input-container > .input-field').wait(1000)
         .clear().type("01032022")
         cy.get(':nth-child(3) > .calendar-container > .react-datepicker-wrapper > .react-datepicker__input-container > .input-field').wait(1000)
         .clear().type("20062022")
         cy.get('.styles_formSelectInput__1wy97 > .react-select__control > .react-select__value-container').type('ALAN RICHARD DA LUZ{enter}')
         cy.get('.filter-button-area > .btn-primary').click()
    }
    assertions(){
        cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)')
        .should('have.text', '07/04/2022 10:46:28')
        cy.get('.MuiTableBody-root > :nth-child(2) > :nth-child(2)')
        .should('have.text', '07/04/2022 10:46:28')
        cy.get('.MuiTableBody-root > :nth-child(3) > :nth-child(2)')
        .should('have.text', '07/04/2022 10:45:50')
        cy.get('.MuiTableBody-root > :nth-child(4) > :nth-child(2)')
        .should('have.text', '07/04/2022 10:45:50')
        cy.get('.MuiTableBody-root > :nth-child(5) > :nth-child(2)')
        .should('have.text', '21/03/2022 12:31:46')
        cy.get('.MuiTableBody-root > :nth-child(6) > :nth-child(2)')
        .should('have.text', '21/03/2022 12:31:46')
        cy.get('.MuiTableBody-root > :nth-child(7) > :nth-child(2)')
        .should('have.text', '04/03/2022 10:48:52')
        cy.get(':nth-child(8) > :nth-child(2)')
        .should('have.text', '04/03/2022 10:48:52')
        cy.get('.MuiTableBody-root > :nth-child(9) > :nth-child(2)')
        .should('have.text', '04/03/2022 10:47:54')
        cy.get(':nth-child(10) > :nth-child(2)')
        .should('have.text', '04/03/2022 10:47:54')


    }
}
export default SignupPage;