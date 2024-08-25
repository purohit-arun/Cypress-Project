/// <reference types="cypress" />
//cypress - spec
describe('My First Test', () => {

    it('First test case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('search box should give result', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000);

        //alias .products
        cy.get('.products').as('productLocator')

        //getting the lenght of product visible
        //cy.get('.product:visible').should('have.length', 4)
        //Parent child chaining

        cy.get('@productLocator').find('.product').should('have.length', 4)
        //click on add to cart button for 2nd child
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product')
            .each(($ele, index, $list) => {

                const vegText = $ele.find('h4.product-name').text()
                if (vegText.includes('Cashews')) {
                    //cy.wrap resolves a promise else $ele.find() will give warning
                    cy.wrap($ele).find('button').click()
                }
            })

        //then is used to handle the promise returned by cy.get('.brand')
        cy.get('.brand')
            .then(
                logotext => cy.log(logotext.text())
            )
    })

})