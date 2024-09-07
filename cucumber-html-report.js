const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./cypress/cucumberReports",
    reportPath: "./cypress/cucumberReports",
    metadata: {
        browser: {
            name: "chrome",
            version: "125",
        },
        device: "Arun Machine",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "Cypress Integration" },
            { label: "Release", value: "1.0.0" },
            { label: "Cycle", value: "B11221.34321" },
            { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
            { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
        ],
    },
});