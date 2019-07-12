const path = require("path");

module.exports = {
  title: "Novartis Demo",
  components: "src/components/**/*.tsx",
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true }
  }).parse,
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  usageMode: "collapse",
  exampleMode: "collapse",
  require: [path.join(__dirname, "./src/styles/index.css")]
};
