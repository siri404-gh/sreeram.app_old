# Configure Eslint

#### Sep 1, 2018 by Sreeram

## Summary

Integrates ESLint into VS Code. If you are new to ESLint check their documentation at https://eslint.org/.

## Install

`npm i --save-dev eslint babel-eslint eslint-config-google eslint-config-jsx-a11y eslint-config-react`

## Configure

Create a file calld `.eslintrc.js` at the root of the project with the following code

## Code

    module.exports = {
      extends: [
        "eslint:recommended",
        "google",
        "plugin:react/recommended"
      ],
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
        "react/prop-types": 0,
        "max-len": [
          "error",
          { "code": 200 }
        ],
        "arrow-parens": [
          "error", 
          "as-needed"
        ],
        "require-jsdoc": [
          "error", {
            require: {
              FunctionDeclaration: true,
              MethodDefinition: true,
              ClassDeclaration: true,
              ArrowFunctionExpression: true,
              FunctionExpression: true
            }
          }
        ],
        "object-curly-spacing": [
          "error",
          "always"
        ]
      }
    };

## Execute

`eslint .`
