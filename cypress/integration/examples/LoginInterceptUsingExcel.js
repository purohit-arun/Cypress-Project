/// <reference types="cypress" />
//cypress - spec
const path = require('path')

function replaceBackslashes(str) {
    return str.replace(/\\/g, '/');
}

let productName
let result
describe('JWT Token', () => {

    it('login using token inject', async function () {
        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body b').eq(1).then(function (ele) {
            productName = ele.text()
        })
        cy.get('.card-body button:last-of-type').should('be.visible').eq(1).click()
        
        cy.get('button[routerlink*="/dashboard/cart"]').should('be.visible').click()
        
        cy.contains("Checkout").should('be.visible').click()
        cy.get('[placeholder="Select Country"]').type("ind")
        cy.get(".ta-results button").each(($ele, index, $list) => {
            if ($ele.text() === " India") {
                cy.wrap($ele).should('be.visible').click()
            }
        })
        
        cy.get('.action__submit').should('be.visible').click()
        
        cy.get(".order-summary button").should('be.visible').contains("Excel").click()
        //const filePath = replaceBackslashes(Cypress.config('fileServerFolder') + '/cypress/downloads/order-invoice_rajpurohitarun98.xlsx')
        const filePath = path.join(Cypress.config('fileServerFolder'), 'cypress/downloads/order-invoice_rajpurohitarun98.xlsx')
        /* const filePath = 'D:/Cypress_Integration/cypress/downloads/order-invoice_rajpurohitarun98.xlsx';


        console.log("File path ::", filePath)
        console.log("Type of file path ::", typeof (filePath))

        result = cy.task('excelToJsonConvertor', filePath).then(function (resultJSON) {
            console.log(resultJSON)
            cy.log(resultJSON)
        }) */


        cy.task('excelToJsonConvertor', filePath).then(function (result) {
            cy.log(result)
        })

        /* cy.readFile('D:/Cypress_Integration/cypress/downloads/order-invoice_rajpurohitarun98.xlsx', null).then((fileBuffer) => {
            cy.task('excelToJsonConvertor', { fileBuffer }).then((jsonData) => {
                // Handle the JSON data
                cy.log(JSON.stringify(jsonData));
            });
        }); */

    })
}) 