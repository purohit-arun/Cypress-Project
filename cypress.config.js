const { defineConfig } = require("cypress")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require("convert-excel-to-json");
const fs = require('fs')
let result 
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
  // Make sure to return the config object as it might have been modified by the plugin.

  on('task', {
    excelToJsonConvertor(filePath) {
      result = excelToJson({
        sourceFile: fs.readFileSync(filePath)
      })
      return result
    }
  });
  return config;
}


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
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js',
    // specPattern: 'cypress/integration/examples/bdd/*.feature',
    projectId: "vg8qfi", //prh8fy,  
  },


});
