# eslint-config-gusto

A shared ESLint config for Gusto's JS projects.

## Usage

There are three ESLint config available. All three require `eslint` and `babel-eslint`.

### eslint-config-gusto

The default config contains all defined rules, including ES6 and React. It requires
`eslint-plugin-react`.

1. `yarn add --dev eslint babel-eslint eslint-plugin-react gusto/eslint-config-gusto`
2. Add `"extends": "gusto"` to your `.eslintrc` file

### eslint-config-gusto/base

The base config contains only rules for ES6 (without React).

1. `yarn add --dev  eslint babel-eslint gusto/eslint-config-gusto`
2. Add `"extends": "gusto/base"` to your `.eslintrc` file
