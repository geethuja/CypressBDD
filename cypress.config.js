const cucumber  = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:'cypress/mochawesomeresults',
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber());
        allureWriter(on, config);
        require('cypress-mochawesome-reporter/plugin')(on);
        return config;
    },
    "env": { 
      "allureResultsPath": "allure-results",
    },
    specPattern: "cypress/e2e/ecommerce/features/*.feature",
  },
});