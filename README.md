# ⚠️ Deprecated ⚠️

This library is no longer supported.

# eslint-config-gusto

A shared code style and formatting config for Gusto's JS projects.

## Background

We use both eslint and prettier to lint our code:

- eslint is for code-quality.
- prettier is for formatting.

Our eslint config is largely based on [Airbnb's eslint config](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb). This package also includes all relevant eslint plugins (e.g. `eslint-plugin-import`) as dependencies so they don't need to be included manually in each project's `package.json`.

We also include [prettier](https://github.com/prettier/prettier) as a dependency - see [the notes](https://prettier.io/docs/en/editors.html) for setting up the prettier plugin in your editor. We're using the [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) which turns off all eslint rules that are unnecessary or might conflict with prettier.

As of v16 of eslint-config-gusto, prettier should be run separately from eslint in order to improve performance and the developer experience.

## Installation

```sh
yarn add --dev eslint-config-gusto
```

also add `eslint` if not already added

```
yarn add --dev eslint
```

Extend the shared eslint config in your `.eslintrc.js`:

```js
// .eslintrc.js

module.exports = {
  extends: 'eslint-config-gusto',
  rules: {
    // Your project-specific rules
  },
};
```

Extend the shared prettier config in your `.prettierrc.js`:

```js
// .prettierrc.js

module.exports = require('eslint-config-gusto/.prettierrc');
```

## Customization

### ESLint

Ideally each project will just use the shared config but there are some rules that are project-specific and can't be defined here. For some examples, see [this thread](https://github.com/airbnb/javascript/issues/1089) about which rules communities tend to override.

### Prettier

Just use the shared config :) This is where we'll see the biggest benefits of consistency so let's just all use the same configuration.
