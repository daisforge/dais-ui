/* eslint-disable import/extensions -- Node ESM требует явного расширения в относительных импортах */
/** Выпуск результатов: TS-файл токенов для библиотеки и report.md. */
import fs from 'node:fs';

import { KEYS } from './token-map.js';

const TS_HEADER = `/**
 * АВТОГЕНЕРИРОВАНО из generators/theme-tokens — НЕ ПРАВИТЬ РУКАМИ.
 * Перегенерация: node generators/theme-tokens/generate-theme-tokens.js
 *
 * Токены тем для canvas-рендереров TableGlide, собранные из CSS-переменных
 * пакетов атомарной команды (@salutejs/sdds-themes, beta core, high contrast).
 * Карта соответствий и ручные пины — generators/theme-tokens/lib/token-map.js,
 * происхождение каждого нестандартного значения — generators/theme-tokens/report.md.
 */

`;

/** Порядок экспортов в TS-файле: имя константы → имя темы. */
const TS_EXPORTS = [
  ['TOKENS_LIGHT', 'light'],
  ['TOKENS_DARK', 'dark'],
  ['TOKENS_BETA_LIGHT', 'betaCoreLight'],
  ['TOKENS_BETA_DARK', 'betaCoreDark'],
  ['TOKENS_HC_LIGHT', 'highContrastLight'],
  ['TOKENS_HC_DARK', 'highContrastDark'],
];

const emitThemeConst = (name, themeTokens) =>
  [
    `export const ${name} = {`,
    ...KEYS.map((key) => `  ${key}: '${themeTokens[key]}',`),
    '} as const;',
  ].join('\n');

export const emitTokensFile = (outPath, tokens) => {
  const constants = TS_EXPORTS.map(([name, theme]) =>
    emitThemeConst(name, tokens[theme]),
  );
  fs.writeFileSync(outPath, `${TS_HEADER + constants.join('\n\n')}\n`);
};

export const emitReport = (outPath, reportRows) => {
  const generatedDate = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(
    outPath,
    `# Отчёт генератора токенов тем

Сгенерировано: ${generatedDate}. Ниже — все значения, которые
взяты НЕ напрямую из переменной своей темы: пины (нет аналога в CSS или соответствие
не подтверждено) и наследования (переменной нет в теме — взята база того же режима).
Прямые попадания в отчёт не включаются.

| Ключ | Тема | Значение | Происхождение |
|---|---|---|---|
${reportRows.join('\n')}
`,
  );
};
