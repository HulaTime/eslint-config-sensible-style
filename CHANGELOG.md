# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 0.0.4 (2022-11-21)


### Bug Fixes

* bad definition of no-irregular-whitespace rule ([ec58986](https://github.com/HulaTime/eslint-config-sensible-style/commit/ec58986c255176cee88ed658904b48d26c85cc00))

### 0.0.3 (2022-11-21)
- Initial set of basic eslint rules
```
  'array-bracket-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 2,
    }],
    'object-curly-spacing': ['error', 'always'],
    'lines-between-class-members': 'error',
    'no-whitespace-before-property': 'error',
    indent: ['error', 2],
    'max-len': ['error', {
      code: 110,
      ignoreStrings: true,
    }],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi'
      },
      singleline: {
        delimiter: 'semi'
      },
    }],
    'no-irregular-whitespace': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed']
```
