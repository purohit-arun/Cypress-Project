import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
const homePage = new HomePage()
const productPage = new ProductPage()

//Given I open Ecommerce Page
Given('I open Ecommerce Page', () => {
    cy.visit(Cypress.env('url') + "/angularpractice/")
})

//When I add items to cart
When('When I add items to cart', () => {
    homePage.getShopTab().click()
    data.productName.forEach(p => {
        cy.selectProduct(p)
    })
    productPage.getCheckoutButton().click()
})

//validate the total prices
And('Validate the total prices', () => {
    let priceArray = []
    cy.get('tr td:nth-child(4) strong').each(($price, index, $list) => {
        cy.log("Price is :: ", Number($price.text().split(' ', 2).at(1)))
        priceArray.push(Number($price.text().split(' ', 2).at(1)))
        totalSum = totalSum + Number(priceArray.at(index))
        cy.log(totalSum)
    }).then((ele) => {
        cy.log(totalSum)
    })
})

Then('Select the country submit and verify thankyou', () => {
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



When('I fill the form details', () => {
    homePage.getNameEditBox().type(data.name)
    homePage.getGender().select(data.gender)
})
Then('Validate the form behaviour', () => {
    homePage.getTwoWayDataBinding().should('have.value', data.name)
    homePage.getNameEditBox().should('have.attr', 'minlength', '2')

    homePage.getEnterepruerButton().should('be.disabled')
})
And('select the Shop Page', () => {
    homePage.getShopTab().click()
})
