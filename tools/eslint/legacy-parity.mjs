// Блоки, сохраняющие поведение линта, которое было до перехода на ESLint 9 / flat config.
import bestPractices from 'eslint-config-airbnb-base/rules/best-practices';
import errors from 'eslint-config-airbnb-base/rules/errors';
import es6 from 'eslint-config-airbnb-base/rules/es6';
import strict from 'eslint-config-airbnb-base/rules/strict';
import variables from 'eslint-config-airbnb-base/rules/variables';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

const airbnbRules = {
  ...bestPractices.rules,
  ...errors.rules,
  ...es6.rules,
  ...strict.rules,
  ...variables.rules,
};

/**
 * flat/javascript из @nx/eslint-plugin применяет typescript-eslint/eslint-recommended
 * и к JS-файлам, выключая проверки вроде no-undef и no-dupe-keys. В eslintrc этот
 * пресет действовал только на TS-файлы — возвращаем для JS значения airbnb.
 */
export const jsCoreRules = {
  files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
  rules: Object.fromEntries(
    Object.keys(tseslint.configs.eslintRecommended.rules)
      .filter((rule) => rule in airbnbRules)
      .map((rule) => [rule, airbnbRules[rule]]),
  ),
};

/**
 * eslint-plugin-react-hooks v7 добавил в recommended правила React Compiler.
 * До обновления действовали только rules-of-hooks и exhaustive-deps — оставляем их,
 * включение остальных правил — отдельная задача.
 */
export const reactHooksClassic = {
  plugins: { 'react-hooks': reactHooksPlugin },
  rules: Object.fromEntries(
    Object.keys(reactHooksPlugin.rules)
      .filter((rule) => !['rules-of-hooks', 'exhaustive-deps'].includes(rule))
      .map((rule) => [`react-hooks/${rule}`, 'off']),
  ),
};
