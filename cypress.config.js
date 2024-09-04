const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://rahulshettyacademy.com"
  },
  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
