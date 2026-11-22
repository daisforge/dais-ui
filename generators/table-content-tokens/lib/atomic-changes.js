/* eslint-disable import/extensions -- Node ESM требует явного расширения в относительных импортах */
/**
 * Что поменялось в темах атомарной команды (SDDS) с прошлого запуска
 * генератора.
 *
 * Новые токены SDDS в таблицу сами не попадают — список нужных цветов
 * (KEYS в token-map.js) ведётся руками, чтобы theme.tokens не разрастался до
 * всех ~1500 цветов тем. Чтобы новые токены не прошли незамеченными, при
 * каждом запуске генератор сравнивает цветовые переменные каждой темы с
 * сохранёнными в прошлый раз (atomic-variables.txt): что появилось и что
 * пропало — в report.md, коротко — в консоль.
 *
 * Сравнение идёт по каждой теме отдельно: нужные нам токены обычно уже есть
 * в одной теме и появляются в другой (например, data-yellow-light есть в
 * light и ожидается в beta) — по общему списку имён такое не видно.
 *
 * atomic-variables.txt хранится в git: после npm run update его diff
 * показывает те же изменения, даже если генератор запускали несколько раз.
 * Формат — строка на переменную: «тема имя», например «light text-primary».
 */
import fs from 'node:fs';

import { toKebabCase } from './resolve-token.js';

/** Строка списка: тема и имя переменной через пробел. */
const toEntry = (theme, name) => `${theme} ${name}`;

const parseEntry = (entry) => {
  const [theme, name] = entry.split(' ');
  return { theme, name };
};

/** Все цветовые переменные всех тем: ['light text-primary', ...]. */
export const collectAtomicVariables = (varsByTheme) =>
  Object.entries(varsByTheme)
    .flatMap(([theme, variables]) =>
      Object.keys(variables).map((name) => toEntry(theme, name)),
    )
    .sort();

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

export const writeSnapshot = (snapshotPath, entries) =>
  fs.writeFileSync(snapshotPath, `${entries.join('\n')}\n`);

/** Строки списка, сгруппированные по темам: «**тема**» и под ней переменные. */
const groupByTheme = (entries, describe) => {
  const themes = [...new Set(entries.map((entry) => parseEntry(entry).theme))];
  return themes.flatMap((theme) => [
    `**${theme}**`,
    '',
    ...entries
      .map(parseEntry)
      .filter((entry) => entry.theme === theme)
      .map(({ name }) => describe(name)),
    '',
  ]);
};

/**
 * Что поменялось с прошлого запуска.
 * previous — список прошлого запуска (undefined при первом), current —
 * текущий, used — результат collectUsedVariables.
 *
 * Возвращает:
 *  - section — раздел для report.md;
 *  - warnings — короткие строки для консоли (пусто, если менять нечего).
 */
export const describeChanges = (previous, current, used) => {
  const variableCount = new Set(current.map((entry) => parseEntry(entry).name))
    .size;
  const lines = [
    '## Изменения в темах SDDS с прошлого запуска',
    '',
    `Цветовых переменных в темах: ${variableCount}, из них таблица берёт ${used.size}.`,
    '',
  ];

  if (previous === undefined) {
    return {
      section: [
        ...lines,
        'Первый запуск: список переменных сохранён в atomic-variables.txt,',
        'изменения будут видны со следующего обновления пакетов.',
        '',
      ].join('\n'),
      warnings: [],
    };
  }

  const previousSet = new Set(previous);
  const currentSet = new Set(current);
  const added = current.filter((entry) => !previousSet.has(entry));
  const removed = previous.filter((entry) => !currentSet.has(entry));

  if (added.length === 0 && removed.length === 0) {
    return {
      section: [...lines, 'Изменений нет.', ''].join('\n'),
      warnings: [],
    };
  }

  const describeAdded = (name) => {
    const keys = used.get(name);
    return keys
      ? `- \`--${name}\` — таблица теперь берёт её напрямую: ${keys.join(', ')}`
      : `- \`--${name}\` — в таблицу не подключена`;
  };
  const describeRemoved = (name) => {
    const keys = used.get(name);
    return keys
      ? `- \`--${name}\` — **таблица её использовала** (${keys.join(
          ', ',
        )}): цвет взят из запасной темы или генератор упал — поправить token-map.js`
      : `- \`--${name}\` — таблица её не использовала`;
  };

  // В консоль — общий счёт и отдельной строкой каждая переменная, которую
  // таблица использует: только они меняют цвета таблицы.
  const usedWarnings = (entries, describe) =>
    entries
      .map(parseEntry)
      .filter(({ name }) => used.has(name))
      .map(({ theme, name }) => describe(theme, name, used.get(name)));

  const warnings = [
    `SDDS: в темах появилось переменных: ${added.length}, пропало: ${removed.length} — список в report.md`,
    ...usedWarnings(
      added,
      (theme, name, keys) =>
        `SDDS: в теме ${theme} появилась --${name}, таблица теперь берёт её напрямую (${keys.join(
          ', ',
        )}) — проверить цвет на стенде`,
    ),
    ...usedWarnings(
      removed,
      (theme, name, keys) =>
        `SDDS: в теме ${theme} пропала --${name}, а таблица её использовала (${keys.join(
          ', ',
        )}) — поправить token-map.js`,
    ),
  ];

  return {
    section: [
      ...lines,
      `### Появилось: ${added.length}`,
      '',
      'Чтобы подключить новый цвет к таблице, добавьте ключ в KEYS',
      '(lib/token-map.js) и перезапустите генератор.',
      '',
      ...(added.length > 0 ? groupByTheme(added, describeAdded) : ['Нет.', '']),
      `### Пропало: ${removed.length}`,
      '',
      ...(removed.length > 0
        ? groupByTheme(removed, describeRemoved)
        : ['Нет.', '']),
    ].join('\n'),
    warnings,
  };
};
