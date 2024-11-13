import globals from 'globals';

export default [
  {
    files: ['*.js'],
    ignores: ['babel.config.js'],

    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...globals.es6,
        ...globals.jest,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },

    plugins: {
      jest: require('eslint-plugin-jest'),
    },

    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },

    settings: {
      jest: {
        version: 'detect',
      },
    },

    extends: [
      'airbnb-base',
      'plugin:jest/all',
    ],
  },
];
