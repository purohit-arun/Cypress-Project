/// <reference types="cypress" />
describe('Calendars test', () => {
    it('Verify date selection', () => {
        const monthNo = "6"
        const date = "15"
        const year = "2027"
        const expectedList = [monthNo, date, year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__calendar-button').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains("button", year).click()
        cy.get('.react-calendar__tile').eq(Number(monthNo) - 1).click()
        cy.contains("abbr", "15").click()

        //Assertion
        //cy.log(cy.get('.react-date-picker__inputGroup').text)
        cy.get('.react-date-picker__inputGroup__input').each(($ele, index) => {

            // cy.wrap($ele).invoke('val').then((text) => {
            //     cy.log(text)
            // })

            cy.wrap($ele).invoke('val').should('eq', expectedList.at(index))
        })

    })
})