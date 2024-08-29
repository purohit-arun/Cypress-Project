/// <reference types="cypress" />

describe('Automation of checkbox and other elements', () => {

    it('Handling Web tables with Cypress using each command', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($ele, index, $list) => {
            const text = $ele.text()

            if (text.includes("python")) {
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    const priceText = price.text()
                    expect(priceText).to.equal('26')
                })
            }
        })
    })

    it.only('mouse hover test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        //if want to click without hover
        //cy.contains('Top').click({ force: true })
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })


})