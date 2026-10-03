import nx from '@nx/eslint-plugin';
import globals from 'globals';

import baseConfig from '../../eslint.config.mjs';
import { reactHooksClassic } from '../../tools/eslint/legacy-parity.mjs';

// Nx-исполнитель @nx/eslint:lint запускает ESLint из корня репозитория и передаёт этот
// файл через overrideConfigFile — пути в files/ignores считаются от корня, а не от пакета.
// Поэтому паттерны начинаются с **/
export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  reactHooksClassic,
  {
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: ['packages/mcp-server/src/indexer/**/*.ts'] },
      ],
    },
  },
  {
    files: ['**/ab/**/*.mjs', '**/scripts/**/*.mjs'],
    languageOptions: { globals: globals.node },
    rules: {
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-console': 'off',
      'no-continue': 'off',
      'no-nested-ternary': 'off',
      'no-await-in-loop': 'off',
    },
  },
  {
    files: ['**/ab/fixtures/*.tsx'],
    rules: {
      'react/function-component-definition': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    ignores: ['**/dist/**', '**/.probe/**'],
  },
];
