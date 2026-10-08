/**
 * Запись палитры таблицы для обёртки TableGlide из генератора дизайнера.
 *
 * Код генератора (code/*) — источник истины дизайн-системы, он не правится.
 * Этот скрипт — слой интеграции библиотеки: считает палитру через
 * buildTableColors(), подставляет временные значения для токенов, которых
 * пока нет в темах (согласованы с дизайнером; список недостающих токенов —
 * INTEGRATION-STATUS.md, «Открытые вопросы»), и пишет готовый файл
 * packages/ui-kit/src/components/TableGlide/theming/table-colors.generated.ts.
 *
 * Состояния временных цветов считаются той же формулой (fillStates),
 * а не подбираются руками — модель «токен × состояние» сохраняется.
 *
 * Запуск из корня: npm run table-colors:palette
 */
import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  CELL,
  SEMANTIC,
  TABLE_COLORS,
  THEME_SETTINGS,
} from './code/table-token-sources';
import {
  buildTableColors,
  fillStates,
  type StateName,
  type States,
  type ThemeName,
  THEMES,
} from './code/table-token-states';

const OUT_PATH = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../../packages/ui-kit/src/components/TableGlide/theming/table-colors.generated.ts',
);

// ─── База: честный расчёт генератора ───

const byTableKey = buildTableColors(
  TABLE_COLORS,
  SEMANTIC,
  THEME_SETTINGS,
  CELL,
);

// Комментарии к значениям, подставленным слоем интеграции: ключ → тема → причина.
const notes = new Map<string, Map<ThemeName, string>>();
const note = (key: string, theme: ThemeName, why: string) => {
  const keyNotes = notes.get(key) ?? new Map<ThemeName, string>();
  keyNotes.set(theme, why);
  notes.set(key, keyNotes);
};

/** Четыре состояния произвольного hex по правилам темы (та же формула, что у токенов). */
const statesFor = (hex: string, theme: ThemeName): States => {
  const setting = THEME_SETTINGS[theme];
  return fillStates(hex, setting.mode, {
    stepFactor: setting.stepFactor,
    cardHex: SEMANTIC.surfaceSolidCard.values[theme] ?? undefined,
    primaryHex: SEMANTIC.surfaceSolidPrimary.values[theme],
    selectionHex: SEMANTIC.surfaceTransparentAccent.values[theme],
  });
};

// ─── Временные заливки: группа из четырёх ключей состояния на один исходный цвет ───

type TempFillGroup = {
  /** Ключи таблицы по состояниям. */
  keys: Record<StateName, string>;
  /** Временный hex по темам. */
  values: Partial<Record<ThemeName, string>>;
  why: string;
};

const TEMP_FILLS: TempFillGroup[] = [
  {
    // data-yellow-light: в теме 0.79.1 ошибочно amber-150 #FFE4AE, решение дизайнера — amber-100.
    // В beta-темах токена нет, временные Amber/100 и Amber/950 (запрошены у владельцев темы).
    // В HC токена нет — текущее ручное значение таблицы.
    keys: {
      rest: 'bgEditableCell',
      hover: 'bgEditableCellHovered',
      hover2: 'bgEditableCellRowActiveHovered',
      active: 'bgEditableCellActive',
      hoverActive: 'bgEditableCellActiveHovered',
    },
    values: {
      light: '#FFF6E5',
      betaCoreLight: '#FFF5E7',
      betaCoreDark: '#211607',
      highContrastLight: '#F1DDB8',
    },
    why: 'временно: подходящего цвета редактируемой ячейки (data-yellow-light) в теме нет, цвет согласован с дизайнером',
  },
  {
    // data-blue-light: в beta-темах токена нет, временные Blue/100 и Blue/950.
    // В HC токена нет — текущее ручное значение TableCanvas.
    keys: {
      rest: 'editedSuccessfullyCellColor',
      hover: 'editedSuccessfullyCellHoverColor',
      hover2: 'editedSuccessfullyCellRowActiveHoverColor',
      active: 'editedSuccessfullyCellActiveColor',
      hoverActive: 'editedSuccessfullyCellActiveHoverColor',
    },
    values: {
      betaCoreLight: '#EFF8FF',
      betaCoreDark: '#0C1A24',
      highContrastLight: '#DAE8F1',
    },
    why: 'временно: подходящего цвета сохранённой ячейки (data-blue-light) в теме нет, цвет согласован с дизайнером',
  },
];

// ReadonlyArray<StateName>: добавили состояние в States — TS заставит
// дополнить список, иначе emit молча пропустит новые ключи.
const STATE_NAMES: readonly StateName[] = [
  'rest',
  'hover',
  'hover2',
  'active',
  'hoverActive',
];

/** Защита от опечаток/переименований: ключ обязан существовать в палитре. */
const mustExist = (key: string): string => {
  if (!(key in byTableKey)) {
    throw new Error(`Ключ «${key}» отсутствует в TABLE_COLORS генератора`);
  }
  return key;
};

TEMP_FILLS.forEach((group) => {
  const themeEntries = Object.entries(group.values) as [ThemeName, string][];
  themeEntries.forEach(([theme, hex]) => {
    const states = statesFor(hex, theme);
    STATE_NAMES.forEach((state) => {
      const key = mustExist(group.keys[state]);
      const value = states[state];
      if (value) {
        byTableKey[key][theme] = value;
        note(key, theme, group.why);
      }
    });
  });
});

// ─── Статические подстановки для одиночных ключей ───

// В high contrast light нет surface-solid-primary — серого цвета, который
// задаёт направление hover для белого фона. Без него hover белой строки не
// посчитать, поэтому оставлено прежнее значение таблицы.
byTableKey.bgRowHovered.highContrastLight = '#E8EEF2';
note(
  'bgRowHovered',
  'highContrastLight',
  'временно: в теме нет surface-solid-primary, по которому считается hover белого фона; оставлено прежнее значение таблицы',
);

// В high contrast light нет background-primary → цвет затухания на сером
// фоне берём из светлой темы.
byTableKey.fadeGray.highContrastLight = byTableKey.fadeGray.light;
note(
  'fadeGray',
  'highContrastLight',
  'временно: в теме нет background-primary, взят цвет светлой темы',
);

// В high contrast light нет surface-negative-minor и surface-info-minor →
// цвета статусных ячеек negative/info берём из светлой темы.
[
  'bgCellNegative',
  'bgCellNegativeHovered',
  'bgCellNegativeRowActiveHovered',
  'bgCellNegativeActive',
  'bgCellNegativeActiveHovered',
  'bgCellInfo',
  'bgCellInfoHovered',
  'bgCellInfoRowActiveHovered',
  'bgCellInfoActive',
  'bgCellInfoActiveHovered',
].forEach((rawKey) => {
  const key = mustExist(rawKey);
  byTableKey[key].highContrastLight = byTableKey[key].light;
  note(
    key,
    'highContrastLight',
    'временно: в теме нет светлого статусного токена, взят цвет светлой темы',
  );
});

// ─── Проверка полноты ───

const missing = Object.entries(byTableKey).flatMap(([key, record]) =>
  THEMES.filter((theme) => !record[theme]).map((theme) => `${key}.${theme}`),
);
if (missing.length > 0) {
  throw new Error(`Не закрыты значения: ${missing.join(', ')}`);
}

// ─── Выпуск TS-файла ───

// Настройки формулы состояний по темам — нужны, чтобы в браузере посчитать
// hover и выделение для цвета, который задал потребитель (например, свой
// цвет статусной ячейки в themeOverride.bgCell): его нет в палитре.
const fillParams = THEMES.map((theme) => {
  const setting = THEME_SETTINGS[theme];
  const stepFactor = setting.stepFactor ?? (setting.mode === 'dark' ? 1.2 : 1);
  const q = (v: string | null | undefined) => (v ? `'${v}'` : 'null');
  return `  ${theme}: { mode: '${
    setting.mode
  }', stepFactor: ${stepFactor}, cardHex: ${q(
    SEMANTIC.surfaceSolidCard.values[theme],
  )}, primaryHex: ${q(
    SEMANTIC.surfaceSolidPrimary.values[theme],
  )}, selectionHex: ${q(SEMANTIC.surfaceTransparentAccent.values[theme])} },`;
});

const lines: string[] = [];
lines.push('/**');
lines.push(
  ' * АВТОГЕНЕРИРОВАНО из generators/table-token-states — НЕ ПРАВИТЬ РУКАМИ.',
);
lines.push(' * Перегенерация из корня: npm run table-colors:palette');
lines.push(' *');
lines.push(
  ' * Модель: каждый цвет таблицы = семантический токен темы × состояние',
);
lines.push(
  ' * (rest / hover / hover2 / active / hoverActive). Расчёт в OKLCH идёт при',
);
lines.push(
  ' * генерации, здесь — только готовые непрозрачные цвета. Подробности:',
);
lines.push(' * generators/table-token-states/README.md.');
lines.push(
  ' * Значения с пометкой «временно» подставлены вместо токенов, которых пока',
);
lines.push(
  ' * нет в темах (generators/table-token-states/INTEGRATION-STATUS.md,',
);
lines.push(' * «Открытые вопросы»).');
lines.push(' *');
lines.push(
  ' * Над каждым ключом: токен темы · состояние — что этим цветом красится.',
);
lines.push(
  ' * Все комментарии этого файла пишет генератор (emit-table-colors.ts).',
);
lines.push(' */');
lines.push('');
lines.push(
  `export const TABLE_COLOR_THEMES = [${THEMES.map((t) => `'${t}'`).join(
    ', ',
  )}] as const;`,
);
lines.push('');
lines.push(
  'export type TableColorTheme = (typeof TABLE_COLOR_THEMES)[number];',
);
lines.push('');
lines.push('export const TABLE_STATE_COLORS = {');
Object.entries(byTableKey).forEach(([key, record]) => {
  const entry = TABLE_COLORS[key];
  const source = entry ? SEMANTIC[entry.source].name : '?';
  const paints = entry?.paints ? ` — ${entry.paints}` : '';
  lines.push(`  /** ${source} · ${entry?.state ?? '?'}${paints} */`);
  lines.push(`  ${key}: {`);
  THEMES.forEach((theme) => {
    const why = notes.get(key)?.get(theme);
    lines.push(`    ${theme}: '${record[theme]}',${why ? ` // ${why}` : ''}`);
  });
  lines.push('  },');
});
lines.push('} as const;');
lines.push('');
lines.push('export type TableStateColorKey = keyof typeof TABLE_STATE_COLORS;');
lines.push('');
lines.push('/**');
[
  ' * Настройки формулы состояний для каждой темы. Нужны, чтобы прямо в',
  ' * браузере посчитать hover и выделение для цвета, который задал',
  ' * потребитель (например, свой цвет статусной ячейки): такого цвета в',
  ' * палитре выше нет. Считает их функция fillStates (theming/fill-states.ts).',
  ' *',
  ' * - mode — светлая тема или тёмная: от этого зависит, темнеет цвет при',
  ' *   hover или светлеет;',
  ' * - stepFactor — во сколько раз увеличить шаг hover (в тёмных темах шаг',
  ' *   больше, иначе разница незаметна глазу);',
  ' * - cardHex — обычный фон ячейки: полупрозрачный цвет сначала',
  ' *   смешивается с ним и становится непрозрачным;',
  ' * - primaryHex — серый цвет темы, который задаёт направление hover для',
  ' *   белых и серых цветов (у них нет своего оттенка). null — в теме его',
  ' *   нет, и hover для серых цветов не считается;',
  ' * - selectionHex — полупрозрачная заливка выделения, которая',
  ' *   накладывается на цвет ячейки, когда она выделена.',
].forEach((line) => lines.push(line));
lines.push(' */');
lines.push('export const TABLE_FILL_PARAMS = {');
lines.push(...fillParams);
lines.push('} as const;');
lines.push('');

writeFileSync(OUT_PATH, lines.join('\n'));

const tempCount = [...notes.values()].reduce((sum, m) => sum + m.size, 0);
// eslint-disable-next-line no-console
console.log(
  `table-colors.generated.ts: ${Object.keys(byTableKey).length} ключей × ${
    THEMES.length
  } тем, временных значений: ${tempCount}`,
);
