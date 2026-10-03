// Порт eslint-config-airbnb-typescript@18 (index.js + lib/shared.js) под flat config
// и typescript-eslint v8.
// Оригинальный пакет заброшен: он требует typescript-eslint v7 / ESLint 8 и ссылается
// на правила форматирования, удалённые в typescript-eslint v8. Форматирующие правила
// здесь опущены — их всё равно отключает eslint-config-prettier. Значения правил берутся
// из eslint-config-airbnb-base, как и в оригинале.
import bestPractices from 'eslint-config-airbnb-base/rules/best-practices';
import es6 from 'eslint-config-airbnb-base/rules/es6';
import imports from 'eslint-config-airbnb-base/rules/imports';
import style from 'eslint-config-airbnb-base/rules/style';
import variables from 'eslint-config-airbnb-base/rules/variables';
import tseslint from 'typescript-eslint';

const base = {
  ...bestPractices.rules,
  ...es6.rules,
  ...imports.rules,
  ...style.rules,
  ...variables.rules,
};

/** Отключает базовое правило и включает его аналог из typescript-eslint с тем же значением */
const extend = (rule, tsRule = rule) => ({
  [rule]: 'off',
  [`@typescript-eslint/${tsRule}`]: base[rule],
});

const [extensionsLevel, extensionsMode, extensionsOptions] =
  base['import/extensions'];
const [extraneousLevel, extraneousOptions] =
  base['import/no-extraneous-dependencies'];

export default [
  {
    plugins: { '@typescript-eslint': tseslint.plugin },
    languageOptions: { parser: tseslint.parser },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
        },
      },
      'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    },
    rules: {
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx'] },
      ],
      camelcase: 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
      ],
      ...extend('default-param-last'),
      ...extend('dot-notation'),
      ...extend('no-array-constructor'),
      ...extend('no-dupe-class-members'),
      ...extend('no-empty-function'),
      'no-new-func': 'off',
      ...extend('no-implied-eval'),
      ...extend('no-loop-func'),
      ...extend('no-magic-numbers'),
      ...extend('no-redeclare'),
      ...extend('no-shadow'),
      ...extend('no-throw-literal', 'only-throw-error'),
      ...extend('no-unused-expressions'),
      ...extend('no-unused-vars'),
      ...extend('no-use-before-define'),
      ...extend('no-useless-constructor'),
      ...extend('require-await'),
      'no-return-await': 'off',
      '@typescript-eslint/return-await': [
        base['no-return-await'],
        'in-try-catch',
      ],
      'import/extensions': [
        extensionsLevel,
        extensionsMode,
        { ...extensionsOptions, ts: 'never', tsx: 'never' },
      ],
      'import/no-extraneous-dependencies': [
        extraneousLevel,
        {
          ...extraneousOptions,
          devDependencies: extraneousOptions.devDependencies.flatMap((glob) => {
            const tsGlob = glob.replace(/\bjs(x?)\b/g, 'ts$1');
            return tsGlob === glob ? [glob] : [glob, tsGlob];
          }),
        },
      ],
    },
  },
  {
    // Эти проверки дублирует компилятор TypeScript
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'constructor-super': 'off',
      'getter-return': 'off',
      'no-const-assign': 'off',
      'no-dupe-args': 'off',
      'no-dupe-class-members': 'off',
      'no-dupe-keys': 'off',
      'no-func-assign': 'off',
      'no-import-assign': 'off',
      'no-new-symbol': 'off',
      'no-obj-calls': 'off',
      'no-redeclare': 'off',
      'no-setter-return': 'off',
      'no-this-before-super': 'off',
      'no-undef': 'off',
      'no-unreachable': 'off',
      'no-unsafe-negation': 'off',
      'valid-typeof': 'off',
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
    },
  },
];
