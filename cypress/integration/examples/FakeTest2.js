/// <reference types="cypress" />
//cypress - spec
describe('Second Test', () => {

    it('Second case', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, (req) => {
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((res) => {
                //expect(res.statusCode).to.equal(403)
            })
        }).as("dummyUrl")

        cy.get("button[data-target='#exampleModal']").click()
        cy.wait('@dummyUrl')
        /* cy.wait('@bookretrievals').then(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available') */
    })

}) 