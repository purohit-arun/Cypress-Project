/// <reference types="cypress" />
import HomePage from "../pageObjects/HomePage";
describe('Framework Test 1', () => {
    let data
    before(() => {
        cy.fixture('example').then((fdata) => {
            data = fdata
        })
    })

    it('Singup', () => {
        const homePage = new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getNameEditBox().type(data.name)
        homePage.getGender().select(data.gender)

        homePage.getTwoWayDataBinding().should('have.value', data.name)
        homePage.getNameEditBox().should('have.attr', 'minlength', '2')

        homePage.getEnterepruerButton().should('be.disabled')

        homePage.getShopTab().click().debug()
        data.productName.forEach(p => {
            cy.selectProduct(p)
        })

    })
}) 