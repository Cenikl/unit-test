const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      const options = {
        webpackOptions: require("./webpack.config"),
        watchOptions: {},
      };

      on("file:preprocessor", webpackPreprocessor(options));
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
