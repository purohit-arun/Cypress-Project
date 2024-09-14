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
    })

}) 