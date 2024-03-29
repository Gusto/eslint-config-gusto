// Explicitly define the configuration in case the defaults change. There's a
// comment on the ones that deviate from the current default.
module.exports = {
  printWidth: 100, // default: 80
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true, // default: false
  trailingComma: 'all', // default: 'es5'
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid', // default: 'always'
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
};
