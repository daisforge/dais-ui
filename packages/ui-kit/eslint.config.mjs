import nx from '@nx/eslint-plugin';

import baseConfig from '../../eslint.config.mjs';
import { reactHooksClassic } from '../../tools/eslint/legacy-parity.mjs';

const rootImportMessage =
  'Импорт из корня @ui-kit запрещён. Используйте импорт из конкретного модуля, например @ui-kit/components/Button';

// Nx-исполнитель @nx/eslint:lint запускает ESLint из корня репозитория и передаёт этот
// файл через overrideConfigFile — пути в files/ignores считаются от корня, а не от пакета.
// Поэтому паттерны начинаются с **/
export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  reactHooksClassic,
  {
    files: ['**/src/components/**/*.{ts,tsx}', '**/src/shared/**/*.{ts,tsx}'],
    ignores: [
      '**/index.{ts,tsx}',
      '**/DatePicker/*',
      '**/IconButton/*',
      '**/Typography/*',
      '**/Tooltip/*',
      '**/Notification/*',
      '**/Autocomplete/*',
      '**/Switch/*',
      '**/TextArea/*',
      '**/Combobox/*',
    ],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            { name: '@ui-kit', message: rootImportMessage },
            { name: '@ui-kit/index', message: rootImportMessage },
          ],
          patterns: [
            {
              group: ['@salutejs/*'],
              message:
                'Прямые импорты из @salutejs запрещены в этой папке. Используйте re-export из @ui-kit/* или добавьте исключения в ignores',
            },
          ],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    ignores: ['**/TableGlide/*'],
  },
];
