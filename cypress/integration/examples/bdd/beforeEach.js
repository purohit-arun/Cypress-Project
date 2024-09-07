let data
before(() => {
    cy.fixture('example').then((fdata) => {
        data = fdata
    })
})