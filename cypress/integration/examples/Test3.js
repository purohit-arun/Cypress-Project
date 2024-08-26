/// <reference types="cypress" />

describe('Automation of checkbox and other elements', () => {
    it('Second case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').check().should('be.checked')
            .and('have.value', 'option1')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option1', 'option2'])

    })

    it('Handling static dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select(['option2'])
            .should('have.value', 'option2')
    })

    it('Handling dynamic dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.inputs.ui-autocomplete-input').type('ind')


        cy.get('.ui-menu-item div').each(($ele, index, $list) => {
            if ($ele.text() === "India") {
                cy.wrap($ele).click()
            }
        })

        cy.get('.inputs.ui-autocomplete-input').should('have.value', 'India')

    })

    it.only('Handling visible and invisible elements', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    });
})