const { defineConfig } = require("cypress")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require("convert-excel-to-json");
const fs = require('fs')
const path = require('path')


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
  // Make sure to return the config object as it might have been modified by the plugin.

  on('task', {
    excelToJsonConvertor(filePath) {
      /* if (typeof filePath !== 'string') {
        throw new Error('The "path" argument must be of type string')
      }

      const absolutePath = path.resolve(filePath)

      if (!fs.existsSync(absolutePath)) {
        throw new Error(`File not found at path: ${absolutePath}`);
      }
       result = excelToJson({
        sourceFile: fs.readFileSync("D:/Cypress-Project/cypress/downloads/order-invoice_rajpurohitarun98.xlsx", 'utf8'),
      }) */

      const result = excelToJson({
        sourceFile: fs.readFileSync(filePath)
      })
      return result;
    }
  })

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
    //specPattern: 'cypress/integration/examples/bdd/*.feature',
    projectId: "vg8qfi", //prh8fy,  
  },


});
