const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://formio.github.io/angular-demo/#/",
    setupNodeEvents(on, config) {
      
    },
  },
});
