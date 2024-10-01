/// <reference types="cypress" />
//cypress - spec
const neatCSV = require('neat-csv')
const excelToJson = require('convert-excel-to-json')
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
        //const filePath = replaceBackslashes(path.resolve(Cypress.config('fileServerFolder'), "cypress/downloads/order-invoice_rajpurohitarun98.xlsx"))
        /* let filePath = path.join(Cypress.config('fileServerFolder'), 'cypress/downloads/order-invoice_rajpurohitarun98.xlsx')
        filePath = replaceBackslashes(filePath)*/
        //const filePath = replaceBackslashes(Cypress.config('fileServerFolder') + '/cypress/downloads/order-invoice_rajpurohitarun98.xlsx')

        const filePath = Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_rajpurohitarun98.xlsx"


        console.log("File path ::", filePath)
        console.log("type of file path :: ", typeof (filePath))

        cy.task('excelToJsonConvertor', filePath).then(function (resultJSON) {

            console("::::::Inside task::::::")
            console.log(resultJSON)
            cy.log(resultJSON)
            cy.log("Data in excel is ::::", resultJSON.data[1].A);

        })

    })
}) 