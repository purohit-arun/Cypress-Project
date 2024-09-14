/// <reference types="cypress" />
//cypress - spec
describe('Paid Ticket Test Suite', () => {

    it('Login to mds', function () {
        cy.visit("https://test.milliondollarsellers.com/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Your condition to ignore the exception (if needed)
            //cy.log('An uncaught exception occurred:', err.message);

            // Returning false here prevents Cypress from failing the test
            return false;
        })


        cy.get('.apple-btn').click()

        cy.origin("https://appleid.apple.com/auth/", () => {

            cy.get('#account_name_text_field').type("ap@decodeup.email").debug()
           // cy.get('#sign-in .shared-icon.icon_sign_in').click()
           cy.pause()

            cy.get('input#password_text_field').should('be.visible').type('User@123')

            cy.get('.shared-icon').click()

            //cy.pause()
            cy.contains('button', 'Trust').click()

        })


    })

}) 