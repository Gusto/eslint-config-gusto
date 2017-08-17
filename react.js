module.exports = {
  settings: {
    react: {
      version: '15.5.4' // React version, default to the latest React stable release
    }
  },
  rules: {
    // React

    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': ['error', 'prefer-single'],
    // Forbid certain propTypes (any, array, object)
    'react/forbid-prop-types': ['off', { forbid: ['any', 'array', 'object'] }],
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 'off',
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 'off',
    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': 'off',
    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': 'off',
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 'error',
    // Disallow undeclared variables in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 'error',
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'off',
    // Prevent usage of setState in componentWillUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 'off',
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'error',
    // Prevent multiple component definition per file
    'react/no-multi-comp': 'off',
    // Prevent using string references
    'react/no-string-refs': 'off',
    // Require ES6 class declarations over React.createClass
    'react/prefer-es6-class': ['off', 'always'],
    // Require stateless functions when not using lifecycle methods, setState or ref
    'react/prefer-stateless-function': 'off',
    // Enforce component methods order
    'react/sort-comp': 'off',
    // Require that the first prop in a JSX element be on a new line when the element is multiline
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    // disallow target="_blank" on links
    // TODO: enable
    'react/jsx-no-target-blank': 'off',
    // disallow using React.render/ReactDOM.render's return value
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'off',
    // warn against using findDOMNode()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'off',
    // Prevent unused propType definitions
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    // TODO: Enable
    'react/no-unused-prop-types': ['off', {
      customValidators: [
      ],
      skipShapeProps: false,
    }],
    // Prevent invalid characters from appearing in markup
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'off',
    // Prevent usage of Array index in keys
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'off',
    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',

    // JSX A11Y

    // Enforce that anchors have content
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
    'jsx-a11y/anchor-has-content': ['off', { components: [''] }],
    // Require ARIA roles to be valid and non-abstract
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
    'jsx-a11y/aria-role': ['off', { ignoreNonDom: false }],
    // disallow href "#"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/href-no-hash.md
    'jsx-a11y/href-no-hash': ['off', { components: ['a'] }],
    // Enforce that all elements that require alternative text have meaningful information
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
    'jsx-a11y/alt-text': ['off', {
      elements: ['img', 'object', 'area', 'input[type="image"]'],
      img: [],
      object: [],
      area: [],
      'input[type="image"]': [],
    }],
    // require that JSX labels use "htmlFor"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': ['off', { components: ['label'] }],
    // Enforce tabIndex value is not greater than zero.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
    'jsx-a11y/tabindex-no-positive': 'off',
    // Enforce that DOM elements without semantic behavior not have interaction handlers
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': ['off', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ]
    }],
    // ensure iframe elements have a unique title
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
    'jsx-a11y/iframe-has-title': 'off',
    // prohibit autoFocus prop
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
    'jsx-a11y/no-autofocus': ['off', { ignoreNonDOM: true }],
    // ensure HTML elements do not specify redundant ARIA roles
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
    'jsx-a11y/no-redundant-roles': 'off',
  }
};
