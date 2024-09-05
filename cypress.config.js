const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://rahulshettyacademy.com"
  },
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1
  },
  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js',
    projectId: "vg8qfi", //prh8fy
  },
});
