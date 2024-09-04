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

        let totalSum = 0
        let res
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit(Cypress.env('url') + "/angularpractice/")

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
        // Cypress.config('defaultCommandTimeout', 8000)
        // cy.contains('Checkout').click()
        let priceArray = []
        /* cy.get('tr td:nth-child(4) strong').each(($price, index, $list) => {
            cy.log("Price is :: ", Number($price.text().split(' ', 2).at(1)))
            totalSum = totalSum + Number(priceArray.at(index))
            cy.log(totalSum)
        }) */
        cy.get('tr td:nth-child(4) strong').each(($price, index, $list) => {
            const actualPrice = $price.text()
            let res = actualPrice.split(" ")
            res = res[1].trim()
            totalSum = totalSum + Number(res)
        }).then(() => {
            cy.log(totalSum)
        })

        cy.get('h3 strong').then((element) => {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(totalSum)
        })

        /* priceArray.forEach(price => {
            console.log("Price is ", price)
            cy.log(price)
            totalSum = totalSum + Number(price)
            cy.log("total sum", totalSum)
        }) */
        //cy.log("Total sum is", totalSum)



        // cy.get('#country').type('India')
        // cy.get('.suggestions > ul > li > a').click()
        // cy.get('#checkbox2').check({ force: true })
        // cy.get('input[type="submit"]').click()
        // cy.get('.alert').then((element) => {
        //     const successMessage = element.text()
        //     expect(successMessage.includes("Success")).to.be.true
        // })


    })
}) 