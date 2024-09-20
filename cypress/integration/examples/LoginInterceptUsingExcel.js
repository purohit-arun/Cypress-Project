/// <reference types="cypress" />
//cypress - spec
const neatCSV = require('neat-csv')
const excelToJson = require('convert-excel-to-json')

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
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.wait(6000)
        cy.get('button[routerlink*="/dashboard/cart"]').click()
        cy.wait(2000)
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
        cy.get(".order-summary button").contains("Excel").click()
        const filePath = Cypress.config('fileServerFolder') + "/cypress/downloads/order-invoice_rajpurohitarun98.xlsx"
        console.log("File path :::::::", filePath)
        console.log("type of file path ::: ", typeof (filePath))
        result = cy.task('excelToJsonConvertor', "D:/Cypress-Project/cypress/downloads/order-invoice_rajpurohitarun98.xlsx").then(function (resultJSON) {
            console.log(resultJSON)
            cy.log(resultJSON)

        })

    })
}) 