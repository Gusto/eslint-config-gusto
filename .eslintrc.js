module.exports = {
  extends: require.resolve('./index'),
  rules: {},
  parserOptions: {
    requireConfigFile: false, // locally we don't need a babel config
  },
};
