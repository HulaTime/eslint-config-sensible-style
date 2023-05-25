module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:import/recommended',
  ],
  settings: { 'import/resolver': { node: true } },
  rules: {
    'quote-props': ['error', 'as-needed'],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'key-spacing': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'lines-between-class-members': 'error',
    'max-len': ['error', {
      code: 110,
      ignoreStrings: true,
      ignoreComments: true,
    }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-irregular-whitespace': ['error'],
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', {
      minProperties: 4,
      multiline: true,
    }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-multi-spaces': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      settings: { 'import/resolver': { typescript: true } },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: { delimiter: 'semi' },
            singleline: { delimiter: 'semi' },
          },
        ],
      },
    },
  ],
};
