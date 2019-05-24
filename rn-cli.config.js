// The rn-cli.config.js contains the settings for the React Native TypeScript Transformer.
module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx"];
  }
};
