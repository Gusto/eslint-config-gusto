module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  env: {
    es6: true,
  },

  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/{spec,test}/**', '**/*_spec.{js,jsx}', '**/webpack.config.js'],
        optionalDependencies: false,
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: '15.5.4',
    },
  },
};
