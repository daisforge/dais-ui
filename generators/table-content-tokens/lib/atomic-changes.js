/* eslint-disable import/extensions -- Node ESM требует явного расширения в относительных импортах */
/**
 * Что поменялось у атомарной команды с прошлого запуска генератора.
 *
 * Новые токены атомарки в таблицу сами не попадают — список нужных цветов
 * (KEYS в token-map.js) ведётся руками, чтобы theme.tokens не разрастался до
 * всех ~1300 цветов тем. Чтобы новые токены не прошли незамеченными, при
 * каждом запуске генератор сравнивает список цветовых переменных тем с
 * сохранённым в прошлый раз (atomic-variables.txt) и пишет в report.md, что
 * появилось и что пропало.
 *
 * atomic-variables.txt хранится в git: после npm run update его diff
 * показывает те же изменения, даже если генератор запускали несколько раз.
 */
import fs from 'node:fs';

import { toKebabCase } from './resolve-token.js';

/** Все имена цветовых переменных, которые есть хотя бы в одной теме. */
export const collectAtomicVariables = (varsByTheme) =>
  [
    ...new Set(
      Object.values(varsByTheme).flatMap((variables) => Object.keys(variables)),
    ),
  ].sort();

/** Имя переменной, из которой ключ берёт цвет (для ручных цветов — нет). */
const variableOfKey = (key, rule) => {
  if (rule.pin) {
    return undefined;
  }
  if (rule.alpha) {
    return rule.alpha[0];
  }
  return rule.var ?? toKebabCase(key);
};

/** Переменная → ключи таблицы, которые из неё берут цвет. */
export const collectUsedVariables = (keys, mapping) => {
  const used = new Map();
  keys.forEach((key) => {
    const variable = variableOfKey(key, mapping[key] ?? {});
    if (variable !== undefined) {
      used.set(variable, [...(used.get(variable) ?? []), key]);
    }
  });
  return used;
};

/** Список из прошлого запуска; undefined, если файла ещё нет. */
export const readSnapshot = (snapshotPath) =>
  fs.existsSync(snapshotPath)
    ? fs
        .readFileSync(snapshotPath, 'utf8')
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
    : undefined;

export const writeSnapshot = (snapshotPath, variables) =>
  fs.writeFileSync(snapshotPath, `${variables.join('\n')}\n`);

/**
 * Раздел отчёта об изменениях. previous — список прошлого запуска
 * (undefined при первом), current — текущий, used — результат
 * collectUsedVariables.
 */
export const describeChanges = (previous, current, used) => {
  const lines = [
    '## Изменения у атомарной команды с прошлого запуска',
    '',
    `Цветовых переменных в темах: ${current.length}, из них таблица берёт ${used.size}.`,
    '',
  ];

  if (previous === undefined) {
    return [
      ...lines,
      'Первый запуск: список переменных сохранён в atomic-variables.txt,',
      'изменения будут видны со следующего обновления пакетов.',
      '',
    ].join('\n');
  }

  const previousSet = new Set(previous);
  const currentSet = new Set(current);
  const added = current.filter((name) => !previousSet.has(name));
  const removed = previous.filter((name) => !currentSet.has(name));

  if (added.length === 0 && removed.length === 0) {
    return [...lines, 'Изменений нет.', ''].join('\n');
  }

  const addedRows = added.map((name) => {
    const keys = used.get(name);
    return keys
      ? `- \`--${name}\` — уже используется таблицей: ${keys.join(', ')}`
      : `- \`--${name}\` — в таблицу не подключена`;
  });
  const removedRows = removed.map((name) => {
    const keys = used.get(name);
    return keys
      ? `- \`--${name}\` — **таблица её использовала** (${keys.join(
          ', ',
        )}): цвет взят из запасной темы или генератор упал — поправить token-map.js`
      : `- \`--${name}\` — таблица её не использовала`;
  });

  return [
    ...lines,
    `### Появилось: ${added.length}`,
    '',
    'Чтобы подключить новый цвет к таблице, добавьте ключ в KEYS',
    '(lib/token-map.js) и перезапустите генератор.',
    '',
    ...(addedRows.length > 0 ? addedRows : ['Нет.']),
    '',
    `### Пропало: ${removed.length}`,
    '',
    ...(removedRows.length > 0 ? removedRows : ['Нет.']),
    '',
  ].join('\n');
};
