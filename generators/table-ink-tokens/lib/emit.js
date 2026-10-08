/* eslint-disable import/extensions -- Node ESM требует явного расширения в относительных импортах */
/** Запись результатов: TS-файл с цветами для библиотеки и report.md. */
import fs from 'node:fs';

import { KEYS } from './token-map.js';

const TS_HEADER = `/**
 * АВТОГЕНЕРИРОВАНО из generators/table-ink-tokens — НЕ ПРАВИТЬ РУКАМИ.
 * Перегенерация из корня: npm run table-colors:ink
 *
 * Готовые цвета «чернил» (текст, бейджи, кнопки) для canvas-рендеров
 * таблицы по шести темам — выписаны из тем атомарной команды
 * (@salutejs/sdds-themes, beta core, high contrast).
 * Какие цвета и где их искать — generators/table-ink-tokens/lib/token-map.js;
 * значения, взятые не напрямую из своей темы, — generators/table-ink-tokens/report.md.
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

export const emitReport = (outPath, reportRows, changesSection) => {
  const generatedDate = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(
    outPath,
    `# Отчёт генератора цветов чернил таблицы

Сгенерировано: ${generatedDate}.

Это не список ошибок, а список мест, на которые стоит смотреть при обновлении
тем. Два раздела: что поменялось у атомарной команды с прошлого запуска, и
какие цвета таблицы взяты НЕ напрямую из своей темы.

${changesSection}
## Цвета, взятые не напрямую из своей темы

- **задан руками** (pin) — подходящей переменной в темах нет или замену не
  подтвердил дизайнер; такой цвет не обновится при обновлении пакетов;
- **взят из запасной темы** — в этой теме (beta, high contrast) нужной
  переменной нет, цвет взят из обычной светлой или тёмной темы.

Цвета, найденные в своей теме напрямую, сюда не попадают — их большинство.

| Ключ | Тема | Значение | Происхождение |
|---|---|---|---|
${reportRows.join('\n')}
`,
  );
};
