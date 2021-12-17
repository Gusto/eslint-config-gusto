module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    es6: true,
  },

  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/{spec,test}/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          '**/*_spec.{js,jsx,ts,tsx}',
          '**/*.{spec,test}.{js,jsx,ts,tsx}',
          '**/webpack.config.js',
        ],
        optionalDependencies: false,
      },
    ],
    // rule deprecated in favor of jsx-a11y/label-has-associated-control
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',

    // There are plenty of reasons to not use full deps so we go with the plugin-recommended value here
    'react-hooks/exhaustive-deps': 'warn',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
