const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 5000, // (30 detik)
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
  },
});
