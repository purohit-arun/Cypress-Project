const { defineConfig } = require("cypress")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs')
const path = require('path');
const xlsx = require('xlsx');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
  // Make sure to return the config object as it might have been modified by the plugin.



  on('task', {
    excelToJsonConvertor(filePath) {
      const result = excelToJson({
        sourceFile: fs.readFileSync(filePath)
      })
      return result
    }
  });

  /* on('task', {
    excelToJsonConvertor({ filePath, fileBuffer }) {
      if (fileBuffer) {
        console.log('Received buffer for file'); // Debugging log

        try {
          // Convert buffer to workbook
          const workbook = xlsx.read(fileBuffer, { type: 'buffer' });

          // Convert the first sheet to JSON
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = xlsx.utils.sheet_to_json(sheet);

          return jsonData;
        } catch (error) {
          console.error('Error processing Excel buffer:', error);
          throw error;
        }
      } else if (filePath) {
        console.log('File Path:', filePath); // For debugging

        // Check if the file exists
        if (!fs.existsSync(filePath)) {
          throw new Error(`File not found at path: ${filePath}`);
        }

        try {
          // Read the Excel file from the path
          const workbook = xlsx.readFile(filePath);

          // Convert the first sheet to JSON
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = xlsx.utils.sheet_to_json(sheet);

          return jsonData;
        } catch (error) {
          console.error('Error reading Excel file:', error);
          throw error;
        }
      } else {
        throw new Error('No file buffer or path provided');
      }
    }
  }); */


  return config;
}


module.exports = defineConfig({
  projectId: 'crj98r',

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
