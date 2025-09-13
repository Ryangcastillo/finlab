module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'tailwindcss'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/no-custom-classname': 'warn', // Set to warn to avoid blocking builds for now
    'tailwindcss/no-contradicting-classname': 'error',
  },
  ignorePatterns: ['node_modules', 'dist', 'build', '.next', 'out', 'pnpm-store', 'packages/client/eslint.config.mjs'],
};
