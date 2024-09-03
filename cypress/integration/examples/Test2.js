/// <reference types="cypress" />
//cypress - spec
describe('Second Test', () => {

    it('Second case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('search box should give result', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000);

        //alias .products
        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product')
            .each(($ele, index, $list) => {

                const vegText = $ele.find('h4.product-name').text()
                if (vegText.includes('Cashews')) {
                    //cy.wrap resolves a promise else $ele.find() will give warning
                    cy.wrap($ele).find('button').click()
                }
            })

        cy.get('.cart-icon > img').click()

        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })

}) 