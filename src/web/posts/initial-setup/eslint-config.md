# 2.3 Configure Eslint

#### Sep 1, 2018 by Sreeram Padmanabhan, Last updated on Sep 13, 2018

## Summary

Integrates ESLint into VS Code. If you are new to ESLint check their documentation at https://eslint.org/.

## Install

`npm i --save-dev eslint babel-eslint eslint-config-google eslint-plugin-jsx-a11y eslint-plugin-react`

## Configure

Create a file called `.eslintrc.js` at the root of the project with the following code

## Code

    module.exports = {
      extends: ["eslint:recommended", "plugin:react/recommended"],
      parser: "babel-eslint",
      parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
          jsx: true,
          modules: true
        }
      },
      env: {
        browser: true,
        node: true,
        jasmine: true,
      },
      globals: {
        shallow: true
      },
      rules: {
        'react/prop-types': 0,
        'no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 1 }],
        'no-extra-parens': ["error", "all", { "nestedBinaryExpressions": false }],
        'block-scoped-var': "error",
        'eqeqeq': "error",
        'object-curly-spacing': ["error", "always"],
        'block-scoped-var': "error",
        'no-alert': "error",
        'no-else-return': "error",
        'no-empty-function': "error",
        'no-empty-pattern': "error",
        'no-magic-numbers': "error",
        'no-multi-spaces': "error",
        'global-require': "error",
        'handle-callback-err': "error",
        'no-mixed-requires': "error",
        'array-bracket-spacing': ["error", "always"],
        'block-spacing': "error",
        'camelcase': "error",
        'comma-dangle': ["error", "always-multiline"],
        'comma-spacing': ["error", { "before": false, "after": true }],
        'implicit-arrow-linebreak': ["error", "beside"],
        'indent': ["error", 2],
        'jsx-quotes': ["error", "prefer-double"],
        'react/jsx-closing-bracket-location': ['error', 'after-props']
      },
      settings: {
        react: {
          version: "16.0",
        }
      },
    };

## Execute

Add the following as an npm script

`lint: eslint .`

Run it.

`npm run lint`


Commit and push.
