/// <reference types="cypress" />
//cypress - spec
describe('JWT Token', () => {

    it('login using token inject', function () {
        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('button[routerlink*="/dashboard/cart"]').click()
        cy.contains("Checkout").click()
        cy.get('[placeholder="Select Country"]').type("ind")
        cy.get(".ta-results button").each(($ele, index, $list) => {
            if ($ele.text() === " India") {
                cy.wrap($ele).click()
            }
        })
        cy.wait(2000)
        cy.get('.action__submit').click()
        cy.wait(2000)
        cy.get('tr:nth-child(4) button:nth-child(1)').click()

    })



}) 