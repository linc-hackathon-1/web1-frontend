module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks'],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.config.ts', '*.config.js', '.pnp.*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.app.json'],
  },
  plugins: ['react-refresh'],
  rules: {
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'switch', 'export', 'class', 'function'] },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['if', 'for', 'while', 'switch', 'export', 'class', 'function'], next: '*' },

      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },
    ],
  }
}
