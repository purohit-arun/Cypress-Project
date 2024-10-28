/// <reference types="cypress" />

// Cypress - spec
describe('Second Test', () => {
    it('My First Test Case', function () {
        cy.request<{ Msg: string }>(
            'POST',
            'http://216.10.245.166/Library/Addbook.php',
            {
                name: "Learn Appium Automation with Java",
                isbn: "bcdsss",
                aisle: "22s7",
                author: "John foe"
            }
        ).then((response) => {
            expect(response.body).to.have.property("Msg", "successfully added");
        });
    });
});