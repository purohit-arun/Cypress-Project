/// <reference types="cypress" />
describe('Framework Test 1', () => {
    let data
    before(() => {
        cy.fixture('example').then((fdata) => {
            data = fdata
        })
    })

    it('Singup', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get('div[class="form-group"] input[name="name"]').type(data.name)
        cy.get('select').select(data.gender)

        cy.get(':nth-child(4) > .ng-untouched').should('have.value', data.name)
        cy.get('div[class="form-group"] input[name="name"]').should('have.attr', 'minlength', '2')

        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('.nav-link[href="/angularpractice/shop"]').click()

        cy.selectProduct('BlackBerry')
    })
}) 