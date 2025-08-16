const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://demoqa.com/webtables",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());
    },
  },
});
