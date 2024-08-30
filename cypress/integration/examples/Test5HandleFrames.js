/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Handling iFrames', () => {

    it('Handling Web tables with Cypress using each command', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click().should('exist')
        cy.wait(5000);
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)

    })
})