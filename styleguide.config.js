const path = require("path");

module.exports = {
  title: "Nova Demo",
  components: "src/components/**/*.tsx",
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true }
  }).parse,
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.tsx?$/, ".md");
  },
  pagePerSection: true,
  usageMode: "collapse",
  exampleMode: "collapse",
  require: [path.join(__dirname, "./src/styles/index.css")],

  ignore: ["**/*.test.*", "**/*.d.ts", "**/index.*"]
};
