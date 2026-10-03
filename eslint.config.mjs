import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nx from '@nx/eslint-plugin';
import prettierConfig from 'eslint-config-prettier/flat';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import airbnbTypescript from './tools/eslint/airbnb-typescript.mjs';
import { jsCoreRules } from './tools/eslint/legacy-parity.mjs';

const rootDir = dirname(fileURLToPath(import.meta.url));

// eslint-config-airbnb до сих пор существует только в формате eslintrc
const compat = new FlatCompat({
  baseDirectory: rootDir,
  recommendedConfig: js.configs.recommended,
});

const unusedVarsOptions = {
  args: 'all',
  argsIgnorePattern: '^_',
  caughtErrors: 'all',
  caughtErrorsIgnorePattern: '^_',
  destructuredArrayIgnorePattern: '^_',
  varsIgnorePattern: '^_',
  ignoreRestSiblings: true,
};

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/*.config.js',
      '**/*.config.ts',
      '**/*.config.mjs',
      'tools/**',
    ],
  },
  {
    // ESLint 8 не сообщал о лишних eslint-disable — чистка таких комментариев отдельной задачей
    linterOptions: { reportUnusedDisableDirectives: 'off' },
  },
  ...compat.extends('airbnb'),
  ...airbnbTypescript,
  prettierConfig,
  ...nx.configs['flat/base'],
  {
    plugins: {
      'unused-imports': unusedImportsPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parserOptions: {
        project: './tsconfig.base.json',
        tsconfigRootDir: rootDir,
      },
    },
    rules: {
      'import/prefer-default-export': 'off',
      'react/no-array-index-key': 'error',
      'no-param-reassign': ['error', { props: false }],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react/prop-types': 'off',
      'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
      'react/function-component-definition': 'off',
      'unused-imports/no-unused-imports': 'error',
      'no-unused-vars': ['error', unusedVarsOptions],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
      'no-console': 'error',
      'no-new': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allowCircularSelfDependency: true,
          enforceBuildableLibDependency: true,
          allow: ['@ui-kit', '@ui-kit/*'],
          depConstraints: [{ sourceTag: '*', onlyDependOnLibsWithTags: ['*'] }],
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          filter: { regex: '^Mui[A-Z]', match: false },
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error', unusedVarsOptions],
    },
  },
  ...nx.configs['flat/typescript'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/dot-notation': 'off',
    },
  },
  ...nx.configs['flat/javascript'],
  jsCoreRules,
];
