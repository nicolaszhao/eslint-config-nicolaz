module.exports = {
  rules: {

    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 'error',

    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': 'error',

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 'error',

    // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': 'error',

    // Enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': ['error', 'multiline'],

    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 'error',

    // Validate JSX indentation
    'react/jsx-indent': ['error', 2],

    // Validate props indentation in JSX
    'react/jsx-indent-props': ['error', 2],

    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',

    // Validate spacing before closing bracket in JSX
    'react/jsx-space-before-closing': 'error',

    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': 'error',

    // Prevent missing props validation in a React component definition
    'react/prop-types': 'off'
  }
};
