const typescriptRules = require('./typescript-rules');
const defaultRules = require('./default-rules');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    }
  },
  rules: defaultRules,
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: typescriptRules,
  }],
};
