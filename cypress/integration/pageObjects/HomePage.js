class HomePage {
    getNameEditBox() {
        return cy.get('div[class="form-group"] input[name="name"]')
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender() {
        return cy.get('select')
    }

    getEnterepruerButton() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return cy.get('.nav-link[href="/angularpractice/shop"]')
    }
}

export default HomePage