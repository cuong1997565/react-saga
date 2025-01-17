module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  rules: {
    semi: 1,
    quotes: [2, 'single'],
    'react/prop-types': 1,
    'react/jsx-max-props-per-line': 1,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'prettier/prettier': ['error'],
    'no-unused-vars' : 1,
    'import/extensions' : 0,
    'import/order' : 1,
    'react/prefer-stateless-funtion' : 0,
    'no-use-before-define' : 0,
    'no-param-reassign' : 0,
    'import/no-useless-path-segments' : 0,
    'import/prefer-default-export' : 0
  },
  plugins: ['prettier'],
  env: {
    "es6" : true,
    "browser" : true,
    "node" : true
  }
};
