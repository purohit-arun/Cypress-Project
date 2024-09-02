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
    })
})