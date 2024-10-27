/// <reference types="cypress" />
//cypress - spec
/// <reference types="cypress-iframe" />

import 'cypress-iframe'
describe('Paid Ticket Test Suite', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Your condition to ignore the exception (if needed)
        //cy.log('An uncaught exception occurred:', err.message);

        // Returning false here prevents Cypress from failing the test
        return false;
    })
    it('Login to mds', function () {
        cy.visit("https://test.milliondollarsellers.com/")



        cy.get('.apple-btn').click()

        cy.origin("https://appleid.apple.com/auth/", () => {

            /* cy.get('#account_name_text_field').type("ap@decodeup.email")
            cy.wait(10000) */


            cy.get('#account_name_text_field', { timeout: 10000 })
                .should('be.visible')
                .type('ap@decodeup.email');

            cy.get('#sign-in .shared-icon.icon_sign_in', { timeout: 10000 })
                .should('be.visible')
                .click()


            cy.get('#password_text_field', { timeout: 10000 })
                .should('be.visible')
                .type('User@123')

            cy.get('.shared-icon', { timeout: 10000 })
                .should('be.visible')
                .click()

            //cy.pause()
            cy.contains('button', 'Trust').click()

        })


    })

    it.only('Only apple login', () => {

        cy.visit("https://account.apple.com/")

        cy.iframe('#aid-auth-widget-iFrame').should('be.visible')
            .find('a[href*="/sign-in"]').should('be.visible').click()

        cy.frameLoaded('#aid-auth-widget-iFrame')

        cy.iframe('#aid-auth-widget-iFrame').find('#account_name_text_field', { timeout: 10000 })
            .should('be.visible')
            .type('ap@decodeup.email');

        cy.iframe('#aid-auth-widget-iFrame').find('#sign-in .shared-icon.icon_sign_in', { timeout: 10000 })
            .should('be.visible')
            .click()


        cy.iframe('#aid-auth-widget-iFrame').find('#password_text_field', { timeout: 10000 })
            .should('be.visible')
            .type('User@123')

        cy.iframe('#aid-auth-widget-iFrame').find('.shared-icon', { timeout: 10000 })
            .should('be.visible')
            .click()

        //cy.pause()
        cy.contains('button', 'Trust').click()
    });

}) 