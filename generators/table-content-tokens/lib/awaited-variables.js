/**
 * Ручные цвета, которые ждут переменную SDDS (поле `awaits` в token-map.js).
 *
 * Когда ожидаемая переменная появляется хотя бы в одной теме, ручной цвет
 * пора заменить на неё: генератор пишет об этом в консоль и в report.md.
 * Сам он ничего не заменяет — значение новой переменной может отличаться
 * от ручного, решение за человеком.
 */

/**
 * Где ожидаемые переменные уже появились:
 * [{ key, variable, theme, value }] — по строке на ключ и тему.
 */
export const findAwaitedVariables = (keys, mapping, varsByTheme) =>
  keys.flatMap((key) => {
    const variable = mapping[key]?.awaits;
    if (variable === undefined) {
      return [];
    }
    return Object.entries(varsByTheme)
      .filter(([, variables]) => variables[variable] !== undefined)
      .map(([theme, variables]) => ({
        key,
        variable,
        theme,
        value: variables[variable],
      }));
  });

/** Раздел для report.md. */
export const describeAwaited = (found) => {
  const lines = ['## Ожидаемые переменные SDDS', ''];
  if (found.length === 0) {
    return [
      ...lines,
      'Ни одна ожидаемая переменная (поле `awaits` в token-map.js) пока не появилась.',
      '',
    ].join('\n');
  }
  return [
    ...lines,
    'Эти переменные появились — ручной цвет ключа можно заменить на них',
    '(token-map.js: `pin` → `var`). Значение может отличаться от ручного —',
    'сверить с дизайнером.',
    '',
    '| Ключ | Переменная | Тема | Значение в теме |',
    '|---|---|---|---|',
    ...found.map(
      ({ key, variable, theme, value }) =>
        `| \`${key}\` | \`--${variable}\` | ${theme} | \`${value}\` |`,
    ),
    '',
  ].join('\n');
};

/** Строки для консоли: по одной на ключ, темы — списком. */
export const awaitedWarnings = (found) => {
  const keys = [...new Set(found.map(({ key }) => key))];
  return keys.map((key) => {
    const rows = found.filter((row) => row.key === key);
    const themes = rows.map(({ theme }) => theme).join(', ');
    return `SDDS: появилась ожидаемая --${rows[0].variable} (темы: ${themes}) — ключ ${key} задан руками, его можно перевести на неё (token-map.js)`;
  });
};
