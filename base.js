module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
  },

  rules: {
    // Best Practices
    // These are rules designed to prevent you from making mistakes. They either prescribe a better
    // way of doing something or help you avoid footguns.

    // enforce that class methods use "this"
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['off', {
      exceptMethods: [],
    }],
    // require return statements to either always or never specify values
    'consistent-return': 'off',
    // enforces consistent newlines before or after dots
    'dot-location': 'off',
    // make sure for-in loops have an if statement
    'guard-for-in': 'off',
    // disallow the use of alert, confirm, and prompt
    'no-alert': 'error',
    // disallow else after a return in an if
    'no-else-return': 'off',
    // disallow use of empty functions
    'no-empty-function': 'off',
    // disallow use of multiple spaces
    'no-multi-spaces': 'off',
    // disallow reassignment of function parameters
    'no-param-reassign': 'off',
    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated,',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }],
    // disallow use of assignment in return statement
    'no-return-assign': 'off',
    // disallow use of javascript: urls.
    'no-script-url': 'off',
    // disallow usage of expressions in statement position
    'no-unused-expressions': 'off',
    // requires to declare all vars on top of their containing scope, covered by let/const
    'vars-on-top': 'off',
    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: false }],

    // Node.js
    // These rules are specific to JavaScript running on Node.js.

    // disallow use of new operator with the require function (on by default in the node environment)
    'no-new-require': 'off',
    // disallow string concatenation with __dirname and __filename (on by default in the node environment)
    'no-path-concat': 'off',

    // Stylistic Issues
    // These rules are purely matters of style and are quite subjective.

    // enforce spacing inside array brackets
    'array-bracket-spacing': ['off', 'never'],
    // require trailing commas in multiline object literals
    'comma-dangle': 'off',
    // require function expressions to have a name
    'func-names': 'off',
    // specify tab or space width for your code
    indent: ['error', 2],
    // enforce spacing between keys and values in object literal properties
    'key-spacing': 'off',
    // enforce spacing before and after keywords
    'keyword-spacing': 'error',
    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    // require a capital letter for constructors
    'new-cap': ['error', {
      newIsCap: true,
      capIsNewExceptions: [],
    }],
    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': 'off',
    // disallow use of bitwise operators
    'no-bitwise': 'off',
    // disallow use of the continue statement
    'no-continue': 'off',
    // disallow use of chained assignment expressions
    // http://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['off'],
    // disallow multiple empty lines
    'no-multiple-empty-lines': 'off',
    // disallow nested ternary expressions
    'no-nested-ternary': 'off',
    // disallow use of unary operators, ++ and --
    'no-plusplus': 'off',
    // disallow use of certain syntax in code
    'no-restricted-syntax': 'off',
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',
    // require padding inside curly braces
    'object-curly-spacing': ['off', 'always'],
    // enforce "same line" or "multiple line" on object properties.
    'object-property-newline': ['off', {
      allowMultiplePropertiesPerLine: true
    }],
    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    // require a space around word operators such as typeof
    'space-unary-ops': 'error',
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': 'off',

    // ECMAScript 6
    // These rules are only relevant to ES6 environments.

    // require parens in arrow function arguments
    'arrow-parens': 'off',
    // require space before/after arrow function's arrow
    'arrow-spacing': 'error',
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': 'off',
    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': ['off', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'object-shorthand': 'off',
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 'off',
    // disallow generator functions that do not have yield
    'require-yield': 'off',
    // enforce spacing around embedded expressions of template strings
    'template-curly-spacing': 'off',
    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': 'off',

    // Imports
    // TODO: Turn these on
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
      coffee: 'never',
      cjsx: 'never'
    }],
    'import/first': ['off', 'absolute-first'],
    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'off',
    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',
    // Forbid Webpack loader syntax in imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'off',
    // do not allow a default import name to match a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'spec/**', // mocha, rspec-like pattern
        'frontend/javascripts/spec/**', // mocha, rspec-like pattern
        '**/*_spec.js*', // tests where the extension denotes that it is a test
        '**/webpack.config.js', // webpack config
      ],
      optionalDependencies: false,
    }],
    'import/no-named-as-default-member': 'off',
  },
};
