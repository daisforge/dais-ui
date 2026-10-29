/**
 * Запись палитры таблицы для обёртки TableGlide из генератора дизайнера.
 *
 * Код генератора (code/*) — источник истины дизайн-системы, он не правится.
 * Этот скрипт — слой интеграции библиотеки: считает палитру через
 * buildTableColors(), подставляет временные значения для токенов, у которых
 * в темах пока неверный цвет (список в INTEGRATION-STATUS.md, «Открытые
 * вопросы»), и пишет готовый файл
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

import { CLEAN_VIEW_COLORS, CLEAN_VIEW_SEMANTIC } from './clean-view-colors';
import {
  SEMANTIC as DESIGNER_SEMANTIC,
  TABLE_COLORS as DESIGNER_COLORS,
  THEME_SETTINGS,
} from './code/table-token-sources';
import {
  fillStates,
  type StateName,
  type States,
  type ThemeName,
  THEMES,
} from './code/table-token-states';
import {
  buildIntegrationPalette,
  themeStepFactor,
} from './integration-palette';

const OUT_PATH = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../../packages/ui-kit/src/components/TableGlide/theming/table-colors.generated.ts',
);

// ─── База: честный расчёт генератора ───

// Карта дизайнера плюс наши ключи чистого вида и зебры (clean-view-colors.ts):
// считаются одной формулой, в выходном файле не различаются.
const SEMANTIC = { ...DESIGNER_SEMANTIC, ...CLEAN_VIEW_SEMANTIC };
const TABLE_COLORS = { ...DESIGNER_COLORS, ...CLEAN_VIEW_COLORS };

const byTableKey = buildIntegrationPalette();

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
    // data-yellow-light: в теме amber-150 #FFE4AE, нужен amber-100 #FFF6E5. В beta
    // light то же: в теме amber/150 #FFE3BD, нужен amber/100 #FFF5E7. Когда темы SDDS
    // исправят, группу убрать. Остальные темы берут значение темы (в beta и
    // контрастной токен называется data-yellow-on-light).
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
    },
    why: 'временно: в теме data-yellow-light стоит amber-150, нужен amber-100; ждём исправления в SDDS',
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
  const stepFactor = themeStepFactor(theme);
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
  ' * Значения с пометкой «временно» подставлены вместо токенов, у которых в',
);
lines.push(
  ' * темах пока неверный цвет (generators/table-token-states/INTEGRATION-STATUS.md,',
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
  ' *   белых и серых цветов (у них нет своего оттенка);',
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
