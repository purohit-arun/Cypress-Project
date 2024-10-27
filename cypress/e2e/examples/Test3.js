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

    it('Handling visible and invisible elements', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


        cy.get('[value="radio2').check()

    })

    //cypress auto accepts alerts and popups
    //cypress have capacity to listen for browser events
    //cypress can control and manipulate your dom but the selenium cannot
    it('Handling Alerts in cypress', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

    })

    //Handling Child tab with combination of Cypress & Jquery commands
    it.only('Handling child windows', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.origin("https://www.qaclickacademy.com/", () => {
            cy.get("#navbarSupportedContent a[href*='about']").click()

            cy.get(".mt-50 h2").should('have.text',"Welcome to QAClick Academy ")
        })


    })
})