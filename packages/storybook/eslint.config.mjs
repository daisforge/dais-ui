import nx from '@nx/eslint-plugin';

import baseConfig from '../../eslint.config.mjs';
import { reactHooksClassic } from '../../tools/eslint/legacy-parity.mjs';

const rootImportMessage =
  'Импорт из корня @ui-kit запрещён. Используйте импорт из конкретного модуля, например @ui-kit/components/Button';

// Nx-исполнитель @nx/eslint:lint запускает ESLint из корня репозитория и передаёт этот
// файл через overrideConfigFile — пути в files/ignores считаются от корня, а не от пакета.
// Поэтому паттерны начинаются с **/
//
// Как и в eslintrc (extends: [plugin:@nx/react, корневой конфиг]), корневые правила
// идут после пресета Nx и имеют приоритет над ним
export default [
  ...nx.configs['flat/react'],
  ...baseConfig,
  reactHooksClassic,
  {
    files: ['**/src/stories/**/*.{ts,tsx,mdx}'],
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
                'Прямые импорты из @salutejs запрещены в stories. Используйте re-export из @ui-kit/*',
            },
          ],
        },
      ],
    },
  },
  {
    ignores: ['**/.storybook/*', '**/storybook-static/**'],
  },
];
