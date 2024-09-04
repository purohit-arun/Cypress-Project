/// <reference types="cypress" />
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
describe('Framework Test 1', () => {
    let data
    before(() => {
        cy.fixture('example').then((fdata) => {
            data = fdata
        })
    })

    it('Singup', () => {

        const homePage = new HomePage()
        const productPage = new ProductPage()
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
        productPage.getCheckoutButton().click()
        Cypress.config('defaultCommandTimeout', 8000)
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').check({ force: true })
        cy.get('input[type="submit"]').click()
        cy.get('.alert').then((element) => {
            const successMessage = element.text()
            expect(successMessage.includes("Success")).to.be.true
        })


    })
}) 