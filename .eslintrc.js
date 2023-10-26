/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks'],
  rules: {
    'prettier/prettier': 0,
    'comma-dangle': ['warn', 'never'],
    'getter-return': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'no-undef': 'off',
    'no-shadow': 'off',
    'react/react-in-jsx-scope': 'off',
    'eslint-disable-next-line no-undef': 'off',
    'no-unused-vars': 'off',
    'no-unsafe-optional-chaining': 'off',
    'react/display-name': 'off'
  },
  globals: {
    JSX: 'readonly'
  }
};
