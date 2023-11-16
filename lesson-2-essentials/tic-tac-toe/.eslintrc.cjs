module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-unused-vars': 1,
    'no-console': 1,
    'no-underscore-dangle': 2,
    'react/jsx-curly-brace-presence': 2,
    'react/jsx-uses-react': 'off',
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 2,
    complexity: [1, { max: 16 }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
