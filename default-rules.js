module.exports = {
  'array-bracket-spacing': ['error', 'never'],
  'arrow-body-style': ['error', 'as-needed'],
  'comma-dangle': ['error', 'always-multiline'],
  'eol-last': ['error', 'always'],
  indent: ['error', 2, {SwitchCase: 1}],
  'import/order': ['error', {
    'newlines-between': 'always',
  }],
  'lines-between-class-members': 'error',
  'max-len': ['error', {
    code: 110,
    ignoreStrings: true,
  }],
  'newline-per-chained-call': ['error', {
    ignoreChainWithDepth: 2,
  }],
  'no-irregular-whitespace': ['error'],
  'no-whitespace-before-property': 'error',
  'object-curly-spacing': ['error', 'always'],
  'object-curly-newline': ['error', {
    minProperties: 4,
    multiline: true,
  }],
  'object-property-newline': ['error', {
    allowAllPropertiesOnSameLine: true,
  }],
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  'no-multi-spaces': 'error'
};
