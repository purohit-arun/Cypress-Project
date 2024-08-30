/// <reference types="cypress" />
describe('Calendars test', () => {
    it('Verify date selection', () => {
        const monthNo = "6"
        const date = "15"
        const year = "2027"
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__calendar-button').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains("button", year).click()
        cy.get('react-calendar__tile').eq(Number(monthNo) - 1).click()

    })
})